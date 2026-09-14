"use client";

import { useEffect, useState } from "react";

export const themes = [
  { id: "noir", label: "Noir", swatch: "#0d0e0f", dot: "#c9a465" },
  { id: "cream", label: "Cream", swatch: "#f7f5f1", dot: "#a88a5c" },
  { id: "grey", label: "Grey", swatch: "#2b2f35", dot: "#c3a877" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const THEME_STORAGE_KEY = "rs-theme";
export const DEFAULT_THEME: ThemeId = "noir";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as ThemeId | undefined;
    if (stored && themes.some((t) => t.id === stored)) {
      setTheme(stored);
    }
  }, []);

  function apply(next: ThemeId) {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in private browsing — theme still applies for this visit.
    }
  }

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="flex items-center gap-1 rounded-full border border-border bg-surface p-1"
    >
      {themes.map((option) => {
        const active = theme === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => apply(option.id)}
            title={option.label}
            aria-label={`${option.label} theme`}
            aria-pressed={active}
            className={`relative h-6 w-6 rounded-full border transition-all ${
              active
                ? "border-accent ring-2 ring-accent/30"
                : "border-border hover:border-accent/50"
            }`}
            style={{ backgroundColor: option.swatch }}
          >
            <span
              className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: option.dot }}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
