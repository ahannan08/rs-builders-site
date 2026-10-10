"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/about/LocationMap"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[420px] w-full animate-pulse rounded-sm border border-border bg-border/40 sm:h-[520px] lg:h-[600px]"
      aria-hidden
    />
  ),
});

export function LocationMapLazy() {
  return <LocationMap />;
}
