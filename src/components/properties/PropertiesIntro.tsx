import { ventureGalleries } from "@/data/ventures";
import { PropertiesIntroCarousel } from "@/components/properties/PropertiesIntroCarousel";

const defaultGallery = ventureGalleries[0]!;

export function PropertiesIntro() {
  const { venture: featured, images } = defaultGallery;
  const featuredPlotImage =
    images.find((img) => img.src === "/plot_3.png")?.src ?? "/plot_3.png";

  return (
    <section className="relative bg-background">
      <PropertiesIntroCarousel
        venture={featured}
        ventureImage={featuredPlotImage}
      />
    </section>
  );
}