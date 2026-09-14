import { FeaturedMessage } from "@/components/home/FeaturedMessage";
import { Hero } from "@/components/home/Hero";
import { OurDifference } from "@/components/home/OurDifference";
import { TrustBar } from "@/components/home/TrustBar";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyRS } from "@/components/home/WhyRS";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <TrustBar />
      </Reveal>
      <Reveal>
        <WhatWeDo />
      </Reveal>
      <Reveal>
        <WhyRS />
      </Reveal>
      <Reveal>
        <OurDifference />
      </Reveal>
      <Reveal>
        <FeaturedMessage />
      </Reveal>
    </>
  );
}
