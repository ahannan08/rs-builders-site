import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";

type OverlayImageCardProps = {
  title: string;
  description: string;
  image?: StaticImageData;
  label?: string;
  footer?: ReactNode;
  className?: string;
  minHeightClass?: string;
  /** Richer hover lift, image zoom, and CTA hint (home What we do). */
  interactive?: boolean;
};

export function OverlayImageCard({
  title,
  description,
  image,
  label,
  footer,
  className = "",
  minHeightClass = "min-h-[300px]",
  interactive = false,
}: OverlayImageCardProps) {
  const shellClass = interactive
    ? "rounded-xl border-border/80 shadow-lg shadow-black/10 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-2xl hover:shadow-black/20"
    : "rounded-sm border-border transition-colors duration-300 hover:border-primary-light/30";

  return (
    <article
      className={`group relative overflow-hidden border ${shellClass} ${minHeightClass} ${className}`}
    >
      {interactive ? (
        <div
          className="absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden
        />
      ) : null}
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-transform duration-700 ease-out ${
              interactive
                ? "group-hover:scale-110"
                : "group-hover:scale-[1.03]"
            }`}
          />
          <div
            className={`absolute inset-0 transition-colors duration-500 ${
              interactive
                ? "bg-black/45 group-hover:bg-black/55"
                : "bg-black/50"
            }`}
            aria-hidden
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
              interactive
                ? "from-black/95 via-black/50 to-black/20 opacity-90 group-hover:opacity-100"
                : "from-black/90 via-black/55 to-black/30"
            }`}
            aria-hidden
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-elevated via-surface to-background"
          aria-hidden
        />
      )}

      <div
        className={`relative flex ${minHeightClass} flex-col justify-end p-6 sm:p-8 ${image ? "text-white" : ""}`}
      >
        {!image && (
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted">
            Image coming soon
          </p>
        )}
        {label && (
          <p className={`mb-2 text-xs font-bold uppercase tracking-[0.16em] ${image ? "text-white/80" : "text-primary-light"}`}>
            {label}
          </p>
        )}
        <h3 className={`font-display text-xl font-semibold sm:text-2xl ${image ? "" : "text-primary"}`}>
          {title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed transition-transform duration-500 ${
            image ? "text-white/85" : "text-primary-light"
          } ${interactive ? "group-hover:-translate-y-0.5" : ""}`}
        >
          {description}
        </p>
        {interactive && image ? (
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/90 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            View opportunities
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        ) : null}
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </article>
  );
}
