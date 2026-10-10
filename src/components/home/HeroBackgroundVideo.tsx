"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import bannerPoster from "@/assets/banner.png";

const VIDEO_SRC = "/rs_banner.mp4";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    if (video.paused) {
      void video.play().catch(() => {
        /* Autoplay blocked — poster remains until user interacts */
      });
    }
  }, []);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    tryPlay();

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    }

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) tryPlay();
    };

    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [tryPlay]);

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={isPlaying ? undefined : bannerPoster.src}
      onLoadedData={tryPlay}
      onCanPlay={tryPlay}
      onCanPlayThrough={tryPlay}
      onPlaying={() => setIsPlaying(true)}
      className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      aria-hidden
    />
  );
}
