import { nile } from "@/app/api/[...nile]/nile";
import { cookies } from "next/headers";
// Initialize the Nile server object for reuse in all pages
// Note that the Nile server configuration points to Nile APIs as the base path

// This returns a reference to the Nile Server, configured with the user's auth token and tenantID (if any)
// If Nile already have a connection to the same tenant database for the same user, we'll return an existing connection
export async function configureNile(tenantId: string | void) {
  const nextCookies = cookies();
  const headers = new Headers({ cookie: nextCookies.toString() });
  const user = await nile.api.users.me(headers);

  if (user instanceof Response) {
    throw Error("user unavailable");
  }

  const config = {
    tenantId: String(tenantId),
    userId: user?.id,
  };
  // forward the browser headers on with the request
  nile.api.headers = new Headers({ cookie: nextCookies.toString() });
  return nile.getInstance(config);
}
