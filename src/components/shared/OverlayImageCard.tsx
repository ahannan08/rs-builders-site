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
};

export function OverlayImageCard({
  title,
  description,
  image,
  label,
  footer,
  className = "",
  minHeightClass = "min-h-[300px]",
}: OverlayImageCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-sm border border-border transition-colors duration-300 hover:border-primary-light/30 ${minHeightClass} ${className}`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30"
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
        <p className={`mt-3 text-sm leading-relaxed ${image ? "text-white/85" : "text-primary-light"}`}>
          {description}
        </p>
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </article>
  );
}
