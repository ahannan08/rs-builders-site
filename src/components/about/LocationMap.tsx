"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import {
  type Hotspot,
  type HotspotCategory,
  hotspotCategories,
  hotspots,
  hyderabadCentre,
  ringRoads,
} from "@/data/growthHotspots";

type Filter = "all" | HotspotCategory;
type BaseLayer = "satellite" | "silver";

const DEFAULT_ZOOM = 9.4;

function pinIcon(color: string, active: boolean) {
  return L.divIcon({
    className: "",
    html: `<span class="map-pin ${active ? "map-pin--active" : "map-pin--dim"}" style="--pin:${color}"><span class="map-pin__ring"></span><span class="map-pin__dot"></span></span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -12],
  });
}

/** Flies the map to a hotspot when the sidebar list selects one. */
function FlyTo({ target }: { target: Hotspot | null }) {
  const map = useMap();
  useEffect(() => {
    if (!target) return;
    map.flyTo(target.position, Math.max(map.getZoom(), 11), {
      duration: 0.9,
    });
  }, [map, target]);
  return null;
}

export default function LocationMap() {
  const [filter, setFilter] = useState<Filter>("all");
  const [base, setBase] = useState<BaseLayer>("silver");
  const [selected, setSelected] = useState<Hotspot | null>(null);

  const colorFor = useMemo(() => {
    const map = new Map<HotspotCategory, string>();
    hotspotCategories.forEach((c) => map.set(c.id, c.color));
    return (c: HotspotCategory) => map.get(c) ?? "#ffffff";
  }, []);

  const visible = useMemo(
    () =>
      filter === "all"
        ? hotspots
        : hotspots.filter((h) => h.category === filter),
    [filter],
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_18rem] lg:gap-6">
      <div className="min-w-0">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <FilterTab
            active={filter === "all"}
            onClick={() => setFilter("all")}
            label="All layers"
          />
          {hotspotCategories.map((c) => (
            <FilterTab
              key={c.id}
              active={filter === c.id}
              onClick={() => setFilter(c.id)}
              label={c.label}
              color={c.color}
            />
          ))}

          <div className="ml-auto inline-flex rounded-sm border border-border bg-background p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setBase("satellite")}
              aria-pressed={base === "satellite"}
              className={`rounded-[2px] px-3 py-1.5 transition-colors ${
                base === "satellite"
                  ? "bg-button text-on-button"
                  : "text-primary-light hover:text-primary"
              }`}
            >
              Satellite
            </button>
            <button
              type="button"
              onClick={() => setBase("silver")}
              aria-pressed={base === "silver"}
              className={`rounded-[2px] px-3 py-1.5 transition-colors ${
                base === "silver"
                  ? "bg-button text-on-button"
                  : "text-primary-light hover:text-primary"
              }`}
            >
              Silver
            </button>
          </div>
        </div>

        {/* Map */}
        <div
          className={`relative mt-4 h-[420px] overflow-hidden rounded-sm border border-border sm:h-[520px] lg:h-[600px] ${
            base === "satellite" ? "map-satellite" : "map-silver"
          }`}
        >
          <MapContainer
            center={hyderabadCentre}
            zoom={DEFAULT_ZOOM}
            minZoom={8}
            maxZoom={15}
            scrollWheelZoom={false}
            zoomControl
            className="h-full w-full"
            attributionControl
          >
            {base === "satellite" ? (
              <TileLayer
                attribution="Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            ) : (
              <>
                <TileLayer
                  attribution="Tiles &copy; Esri"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                />
                <TileLayer
                  attribution="Tiles &copy; Esri"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
                />
              </>
            )}

            {/* Indicative ring roads */}
            <Circle
              center={hyderabadCentre}
              radius={ringRoads.orr.radius}
              pathOptions={{
                color: "#ffffff",
                weight: 1.5,
                opacity: 0.7,
                fillOpacity: 0,
                dashArray: "6 6",
              }}
            />
            <Circle
              center={hyderabadCentre}
              radius={ringRoads.rrr.radius}
              pathOptions={{
                color: "#38bdf8",
                weight: 1.5,
                opacity: 0.75,
                fillOpacity: 0,
                dashArray: "10 8",
              }}
            />

            {hotspots.map((h) => {
              const active = filter === "all" || h.category === filter;
              return (
                <Marker
                  key={h.id}
                  position={h.position}
                  icon={pinIcon(colorFor(h.category), active)}
                  zIndexOffset={active ? 100 : 0}
                  eventHandlers={{ click: () => setSelected(h) }}
                >
                  <Popup>
                    <p className="map-popup__label">
                      {hotspotCategories.find((c) => c.id === h.category)?.label}
                    </p>
                    <p className="map-popup__title">{h.name}</p>
                    <p className="map-popup__text">{h.blurb}</p>
                  </Popup>
                </Marker>
              );
            })}

            <FlyTo target={selected} />
          </MapContainer>

          {/* Legend */}
          <div className="pointer-events-none absolute bottom-3 left-3 z-[400] flex flex-col gap-1 rounded-sm bg-black/55 px-3 py-2 text-[11px] text-white/85 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <span className="h-0 w-5 border-t border-dashed border-white" />
              {ringRoads.orr.label}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-0 w-5 border-t border-dashed border-sky-400" />
              {ringRoads.rrr.label}
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted">
          Pins and ring-road outlines are indicative and for orientation only.
          Alignments of proposed projects are subject to government
          notifications.
        </p>
      </div>

      {/* Hotspot list */}
      <aside className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted">
          {filter === "all"
            ? "All growth nodes"
            : hotspotCategories.find((c) => c.id === filter)?.label}
          <span className="ml-2 text-primary-light">({visible.length})</span>
        </p>
        <ul className="mt-3 max-h-[560px] space-y-1.5 overflow-y-auto pr-1">
          {visible.map((h) => {
            const isSelected = selected?.id === h.id;
            return (
              <li key={h.id}>
                <button
                  type="button"
                  onClick={() => setSelected(h)}
                  className={`flex w-full items-start gap-3 rounded-sm border px-3 py-2.5 text-left transition-colors ${
                    isSelected
                      ? "border-primary/40 bg-elevated"
                      : "border-border bg-background hover:border-primary/25 hover:bg-elevated"
                  }`}
                >
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: colorFor(h.category) }}
                    aria-hidden
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-snug text-primary">
                      {h.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {hotspotCategories.find((c) => c.id === h.category)?.label}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

function FilterTab({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
        active
          ? "border-primary bg-button text-on-button"
          : "border-border bg-background text-primary-light hover:border-primary/30 hover:text-primary"
      }`}
    >
      {color && (
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: color }}
          aria-hidden
        />
      )}
      {label}
    </button>
  );
}
