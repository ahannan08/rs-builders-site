"use client";

import dynamic from "next/dynamic";

const HeroIsometricLazy = dynamic(
  () => import("@/components/home/hero-isometric/HeroIsometricLazy"),
  {
    ssr: false,
    loading: () => (
      <div
        className="aspect-[480/400] w-full max-w-lg animate-pulse rounded-3xl bg-border/40 lg:max-w-none"
        aria-hidden
      />
    ),
  },
);

export function HeroVisualPanel() {
  return (
    <div className="mt-10 lg:mt-0 lg:justify-self-end">
      <HeroIsometricLazy />
    </div>
  );
}
