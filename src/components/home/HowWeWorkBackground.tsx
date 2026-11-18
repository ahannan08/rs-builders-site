import { SURVEY_CONTOUR_PATHS } from "@/lib/surveyContourPaths";

export function HowWeWorkBackground() {
  return (
    <div className="how-we-work-bg" aria-hidden>
      <div className="how-we-work-bg__glow" />
      <svg
        className="how-we-work-bg__contours"
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {SURVEY_CONTOUR_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
      <div className="how-we-work-bg__tex" />
    </div>
  );
}