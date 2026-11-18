/** Topographic contour rings (land-survey feel), matched to section background preview. */
export function generateSurveyContourPaths(): string[] {
  const centers: [number, number, number, number][] = [
    [1080, 210, 16, 46],
    [170, 640, 12, 52],
  ];

  const paths: string[] = [];

  centers.forEach((c, ci) => {
    const [cx, cy, ringCount, ringStep] = c;
    for (let k = 1; k <= ringCount; k++) {
      const r = k * ringStep;
      let d = "";
      for (let i = 0; i <= 120; i++) {
        const a = (i / 120) * Math.PI * 2;
        const rr =
          r *
          (1 +
            0.16 * Math.sin(3 * a + k * 0.35 + ci * 2) +
            0.09 * Math.sin(5 * a - k * 0.2 + ci) +
            0.04 * Math.sin(9 * a + k));
        d +=
          (i ? "L" : "M") +
          (cx + Math.cos(a) * rr * 1.35).toFixed(1) +
          " " +
          (cy + Math.sin(a) * rr * 0.85).toFixed(1);
      }
      paths.push(`${d}Z`);
    }
  });

  return paths;
}

export const SURVEY_CONTOUR_PATHS = generateSurveyContourPaths();