import Container from "@/app/_components/common/Container";
import Divider from "@/app/_components/common/Divider";
import { HeroBottom } from "@/app/_components/common/Hero";
import PageHeader from "@/app/_components/common/PageHeader";
import Image from "next/image";
import OurStory from "./OurStory";
import HowWeWork from "./HowWeWork";
import AboutLogo from "@/public/about-logo.png";
import CareerList from "./CareerList";
import Backers from "./Backers";

export default function Home() {
  return (
    <Container>
      <div className="container mx-auto">
        <div className="md:px-4 md:py-4 pb-0 2xl:px-24 2xl:py-4  mt-32">
          <div className="flex gap-24 items-center flex-col">
            <div className="flex gap-4 items-center flex-col">
              <Image src={AboutLogo} alt="nile logo" width={150} height={151} />
              <div className="text-lg opacity-60">Our Mission</div>
              <PageHeader
                title="To enable developers to accelerate the next billion modern SaaS"
                titleClasses="lg:!text-[56px]"
              />
            </div>
          </div>
          <OurStory />
          <Divider />
        </div>
      </div>
      <HowWeWork />
      <Divider />
      <CareerList />
      <Divider />
      <Backers />
      <Divider />
      <HeroBottom />
    </Container>
  );
}

export const metadata = {
  title: "About us | Nile Database",
  description: "What Nile Database is all about",
  openGraph: {
    images: "opengraph/about-us.jpg",
  },
};
