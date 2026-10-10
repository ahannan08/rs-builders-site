"use client";

import { useEffect, useRef } from "react";
import bannerPoster from "@/assets/banner.png";

const VIDEO_SRC = "/rs_banner.mp4";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const play = () => {
      void video.play().catch(() => {
        /* Autoplay blocked until interaction — poster stays visible */
      });
    };

    play();

    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={bannerPoster.src}
      className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      aria-hidden
    />
  );
}
