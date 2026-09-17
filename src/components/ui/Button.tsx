import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-button text-on-button font-semibold hover:bg-button-hover border border-black shadow-sm shadow-black/15",
  secondary:
    "border border-primary/25 bg-elevated text-primary hover:border-primary/40 hover:bg-surface",
  ghost: "text-primary hover:text-primary-light underline-offset-4 hover:underline",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

  if (variant === "ghost") {
    return (
      <Link href={href} className={`${variants.ghost} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
