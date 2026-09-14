"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { isoColors as c } from "./colors";

/** Road flows left to right: documents (left) → road → plots A, B, C (right) */
const ROAD =
  "M 96 150 C 142 174, 192 200, 248 226 C 302 250, 356 268, 472 302";

const PLOTS = [
  { label: "A", cx: 286, cy: 286 },
  { label: "B", cx: 350, cy: 302 },
  { label: "C", cx: 414, cy: 318 },
];

/** Static arrow placements used when motion is disabled */
const STATIC_ARROWS = [
  { cx: 150, cy: 182, angle: 30 },
  { cx: 262, cy: 234, angle: 26 },
  { cx: 386, cy: 276, angle: 20 },
];

const ARROW_TRAVEL_DURATION = 9;
const FLOAT_DURATION = 3.2;

type HeroIsometricSceneProps = {
  animate: boolean;
};

function DocumentCard({
  x,
  y,
  rotate,
  delay,
  animate,
  children,
}: {
  x: number;
  y: number;
  rotate: number;
  delay: number;
  animate: boolean;
  children: ReactNode;
}) {
  const Float = animate ? motion.g : "g";
  const floatProps = animate
    ? {
        animate: { y: [0, -8, 0] },
        transition: {
          duration: FLOAT_DURATION,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay,
        },
      }
    : {};

  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <Float {...floatProps}>
        <rect
          x={0}
          y={0}
          width={48}
          height={62}
          rx={3}
          fill={c.docFill}
          stroke={c.docStroke}
          strokeWidth={1}
        />
        <line x1={9} y1={14} x2={39} y2={14} stroke={c.docLine} strokeWidth={1} opacity={0.5} />
        <line x1={9} y1={22} x2={33} y2={22} stroke={c.docLine} strokeWidth={1} opacity={0.35} />
        {children}
      </Float>
    </g>
  );
}

/** Isometric land parcel (2:1 diamond) with a lettered label */
function PlotTile({
  cx,
  cy,
  hw = 40,
  label,
}: {
  cx: number;
  cy: number;
  hw?: number;
  label: string;
}) {
  const hh = hw / 2;
  const depth = 9;
  const inset = 0.7;

  const top = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;
  const topInset = `${cx},${cy - hh * inset} ${cx + hw * inset},${cy} ${cx},${cy + hh * inset} ${cx - hw * inset},${cy}`;
  const faceLeft = `${cx - hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + depth} ${cx - hw},${cy + depth}`;
  const faceRight = `${cx},${cy + hh} ${cx + hw},${cy} ${cx + hw},${cy + depth} ${cx},${cy + hh + depth}`;

  return (
    <g>
      <polygon points={faceLeft} fill={c.wallStoneDark} opacity={0.5} />
      <polygon points={faceRight} fill={c.wallStone} opacity={0.7} />
      <polygon points={top} fill={c.plotSoil} stroke={c.wallStoneDark} strokeWidth={0.9} />
      <polygon
        points={topInset}
        fill="none"
        stroke={c.plotSoilDark}
        strokeWidth={0.7}
        strokeDasharray="4 3"
        opacity={0.55}
      />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fill={c.plotLabel}
        fontSize={14}
        fontWeight={700}
        fontFamily="system-ui, sans-serif"
        opacity={0.75}
      >
        {label}
      </text>
    </g>
  );
}

/** Chevron drawn above the road surface, offset perpendicular to travel direction */
function Chevron() {
  return (
    <g transform="translate(0 -12)">
      <path
        d="M -5 -4 L 3 0 L -5 4"
        fill="none"
        stroke={c.sandGlow}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

export function HeroIsometricScene({ animate }: HeroIsometricSceneProps) {
  const reducedMotion = useReducedMotion();
  const shouldAnimate = animate && !reducedMotion;

  return (
    <div className="h-full w-full">
      <svg
        viewBox="0 0 480 400"
        className="h-full w-full"
        role="img"
        aria-label="Approved documents on the left connect along a road to open land plots labelled A, B and C on the right"
      >
        {/* Road */}
        <path
          d={ROAD}
          fill="none"
          stroke={c.charcoalMid}
          strokeWidth={13}
          strokeLinecap="round"
          opacity={0.2}
        />
        <path
          id="roadPath"
          d={ROAD}
          fill="none"
          stroke={c.charcoalLight}
          strokeWidth={9}
          strokeLinecap="round"
        />
        <path
          d={ROAD}
          fill="none"
          stroke={c.sandGlow}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeDasharray="5 9"
          opacity={0.8}
        />

        {/* Documents feed onto the road */}
        <path
          d="M 96 150 L 82 132"
          fill="none"
          stroke={c.charcoalLight}
          strokeWidth={6}
          strokeLinecap="round"
        />

        {/* Plots A, B, C on the right, under a shared heading */}
        {PLOTS.map((plot) => (
          <PlotTile key={plot.label} cx={plot.cx} cy={plot.cy} label={plot.label} />
        ))}
        <text
          x={350}
          y={374}
          textAnchor="middle"
          fill={c.sand}
          fontSize={11}
          fontWeight={700}
          letterSpacing={3}
          fontFamily="system-ui, sans-serif"
        >
          PLOT
        </text>

        {/* Arrows travelling above the road, left to right */}
        {shouldAnimate
          ? [0, -3, -6].map((offset, i) => (
              <g key={i}>
                <Chevron />
                <animateMotion
                  dur={`${ARROW_TRAVEL_DURATION}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${offset}s`}
                >
                  <mpath href="#roadPath" />
                </animateMotion>
              </g>
            ))
          : STATIC_ARROWS.map((arrow, i) => (
              <g
                key={i}
                transform={`translate(${arrow.cx} ${arrow.cy}) rotate(${arrow.angle})`}
              >
                <Chevron />
              </g>
            ))}

        {/* Documents */}
        <DocumentCard x={22} y={40} rotate={-6} delay={0} animate={shouldAnimate}>
          <circle cx={24} cy={40} r={8} fill="none" stroke={c.sand} strokeWidth={1.3} />
          <path
            d="M 20 40 L 23 43 L 29 36"
            fill="none"
            stroke={c.sand}
            strokeWidth={1.3}
            strokeLinecap="round"
          />
        </DocumentCard>

        <DocumentCard x={74} y={56} rotate={5} delay={0.75} animate={shouldAnimate}>
          <circle cx={24} cy={38} r={7} fill="none" stroke={c.docLine} strokeWidth={1} />
          <polygon points="24,32 28,40 20,40" fill="none" stroke={c.sand} strokeWidth={1} />
          <circle cx={24} cy={40} r={1.5} fill={c.sand} />
        </DocumentCard>

        <DocumentCard x={40} y={100} rotate={-3} delay={1.4} animate={shouldAnimate}>
          <rect
            x={10}
            y={34}
            width={28}
            height={12}
            rx={1}
            fill="none"
            stroke={c.sand}
            strokeWidth={1}
            transform="rotate(-10 24 40)"
          />
          <text
            x={24}
            y={42}
            textAnchor="middle"
            fill={c.sand}
            fontSize={6.5}
            fontWeight={700}
            fontFamily="system-ui, sans-serif"
            transform="rotate(-10 24 40)"
          >
            APPROVED
          </text>
        </DocumentCard>
      </svg>
    </div>
  );
}
