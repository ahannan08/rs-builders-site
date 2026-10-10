"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const revealEase = [0.22, 1, 0.36, 1] as const;

export const revealViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.65, delay, ease: revealEase }}
    >
      {children}
    </motion.div>
  );
}

/** Animates once when the page loads (hero / above-the-fold intros). */
export function RevealOnLoad({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease: revealEase }}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function RevealStagger({
  children,
  className,
  stagger = 0.1,
}: RevealStaggerProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function RevealItem({ children, className, y = 24 }: RevealItemProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: revealEase },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
