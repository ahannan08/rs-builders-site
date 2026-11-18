import {
  TELANGANA_DISTRICTS_PATH,
  TELANGANA_OUTLINE_PATH,
} from "@/data/telanganaMapPaths";

/** Telangana map — variant 3: state outline + internal district lines (preview HTML). */
export function WhatWeDoMapBackground() {
  return (
    <div className="what-we-do-map" aria-hidden>
      <svg
        className="what-we-do-map__svg"
        viewBox="0 0 572 600"
        overflow="visible"
      >
        <path className="what-we-do-map__outline" d={TELANGANA_OUTLINE_PATH} />
        <path
          className="what-we-do-map__districts"
          d={TELANGANA_DISTRICTS_PATH}
        />
      </svg>
    </div>
  );
}