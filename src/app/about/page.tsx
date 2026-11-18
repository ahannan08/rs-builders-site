import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { LocationIntelligence } from "@/components/about/LocationIntelligence";
// import { OurApproach } from "@/components/about/OurApproach";
import { OurPromise } from "@/components/about/OurPromise";

export const metadata: Metadata = {
  title: "About Us | RS Builders & Developers",
  description:
    "Building trust since 2018. RS Builders & Developers identifies strategic land, verifies documentation and develops property opportunities across Telangana.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <LocationIntelligence />
      <OurPromise />
      {/* <OurApproach /> */}
    </>
  );
}
