import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { DocumentationTransparency } from "@/components/about/DocumentationTransparency";
import { LocationIntelligence } from "@/components/about/LocationIntelligence";
import { OurApproach } from "@/components/about/OurApproach";
import { OurPromise } from "@/components/about/OurPromise";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us | RS Builders & Developers",
  description:
    "Building trust since 2018. RS Builders & Developers identifies strategic land, verifies documentation and develops property opportunities across Telangana.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Reveal>
        <OurApproach />
      </Reveal>
      <Reveal>
        <LocationIntelligence />
      </Reveal>
      <Reveal>
        <DocumentationTransparency />
      </Reveal>
      <Reveal>
        <OurPromise />
      </Reveal>
    </>
  );
}
