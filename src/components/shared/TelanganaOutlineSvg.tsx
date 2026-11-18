import { TELANGANA_OUTLINE_PATH } from "@/data/telanganaMapPaths";

type TelanganaOutlineSvgProps = {
  className?: string;
  pathClassName?: string;
};

export function TelanganaOutlineSvg({
  className,
  pathClassName = "telangana-map-outline",
}: TelanganaOutlineSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 572 600"
      overflow="visible"
      aria-hidden
    >
      <path className={pathClassName} d={TELANGANA_OUTLINE_PATH} />
    </svg>
  );
}