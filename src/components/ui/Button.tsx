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
    "bg-accent text-white hover:bg-accent-hover shadow-sm shadow-accent/20",
  secondary:
    "bg-surface text-primary border border-border hover:border-accent/40 hover:bg-background",
  ghost: "text-primary hover:text-accent underline-offset-4 hover:underline",
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
