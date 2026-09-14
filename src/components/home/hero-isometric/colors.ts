/** Theme-driven colours — actual values live in globals.css per data-theme. */
export const isoColors = {
  bg: "var(--background)",
  charcoal: "var(--iso-road-outer)",
  charcoalMid: "var(--iso-road-outer)",
  charcoalLight: "var(--iso-road)",
  sand: "var(--accent)",
  sandGlow: "var(--accent-hover)",
  docFill: "var(--iso-doc-fill)",
  docStroke: "var(--iso-doc-stroke)",
  docLine: "var(--iso-doc-line)",
  plotSoil: "var(--iso-plot-top)",
  plotSoilDark: "var(--iso-plot-inset)",
  wallStone: "var(--iso-wall)",
  wallStoneDark: "var(--iso-wall-dark)",
  plotLabel: "var(--iso-label)",
} as const;
