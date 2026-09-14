"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { HeroIsometricScene } from "./HeroIsometricScene";

const HeroIsometricSceneDynamic = dynamic(
  () =>
    import("./HeroIsometricScene").then((mod) => mod.HeroIsometricScene),
  {
    ssr: false,
    loading: () => <HeroVisualPlaceholder />,
  },
);

function HeroVisualPlaceholder() {
  return (
    <div
      className="aspect-[480/400] w-full rounded-2xl bg-border/25 animate-pulse"
      aria-hidden
    />
  );
}

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function useInView(rootMargin = "120px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

export default function HeroIsometricLazy() {
  const isMobile = useIsMobile(640);
  const { ref, inView } = useInView();

  const showStatic = isMobile;
  const ready = inView || showStatic;

  return (
    <div
      ref={ref}
      className="relative w-full max-w-lg lg:max-w-none lg:justify-self-end"
    >
      <p className="text-sm font-semibold text-primary-light">
        Documentation to development
      </p>
      <div className="mt-2 aspect-[480/400] w-full">
        {!ready ? (
          <HeroVisualPlaceholder />
        ) : showStatic ? (
          <HeroIsometricScene animate={false} />
        ) : (
          <HeroIsometricSceneDynamic animate />
        )}
      </div>
    </div>
  );
}
