import dotenv from "dotenv";
//nextjs throws a fit if this is co-located with a dynamic route
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import { glob } from "glob";
import algoliasearch from "algoliasearch";
import path from "node:path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.LOCAL === "true") {
  const envPath = path.resolve(__dirname, `../.env.local`);
  console.log(envPath);
  dotenv.config({ path: envPath });
}

const client = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID && process.env.ALGOLIA_ADMIN_KEY
  ? algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_ADMIN_KEY
    )
  : null;

const index = client?.initIndex("blog");

async function upload(output) {
  if (!client || !index) {
    console.log("Skipping Algolia indexing - no credentials provided");
    return;
  }
  
  return new Promise((resolve) => {
    index
      .saveObjects(output)
      .then(() => {
        console.log("indexed blog output");
        resolve();
      })
      .catch(console.error);
  });
}

async function run() {
  const files = await glob("app/blog/**.mdx");
  // remove the 1st for the search, since it will be handled separately
  files.shift();
  const out = [];

  // Skip if no Algolia configuration
  if (!client || !index) {
    console.log("Skipping Algolia indexing - no credentials provided");
    return;
  }

  // Clear existing objects
  await index.clearObjects();

  for (const fileName of files) {
    const file = path.join(__dirname, "app/www/../../../", fileName);
    console.log(file);
    const { metadata, default: Content } = await import(file);
    const title = fileName.split("/").reverse()[0];
    metadata.objectID = title;
    const output = renderToStaticMarkup(React.createElement(Content));
    const cleaned = output
      .toString()
      .replace(/<[^>]*>/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
    metadata.content = cleaned;
    out.push(metadata);
  }
  await upload(out);
}
run();
