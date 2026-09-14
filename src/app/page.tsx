import { FeaturedMessage } from "@/components/home/FeaturedMessage";
import { Hero } from "@/components/home/Hero";
import { OurDifference } from "@/components/home/OurDifference";
import { TrustBar } from "@/components/home/TrustBar";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyRS } from "@/components/home/WhyRS";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <WhyRS />
      <OurDifference />
      <FeaturedMessage />
    </>
  );
}
