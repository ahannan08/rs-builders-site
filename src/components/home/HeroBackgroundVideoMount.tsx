"use client";

import dynamic from "next/dynamic";
import bannerPoster from "@/assets/banner.png";

const HeroBackgroundVideo = dynamic(
  () =>
    import("@/components/home/HeroBackgroundVideo").then((mod) => ({
      default: mod.HeroBackgroundVideo,
    })),
  {
    ssr: false,
    loading: () => (
      // Brief placeholder while the video mounts client-side (avoids SSR/hydration pausing playback).
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={bannerPoster.src}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        aria-hidden
      />
    ),
  },
);

export function HeroBackgroundVideoMount() {
  return <HeroBackgroundVideo />;
}
