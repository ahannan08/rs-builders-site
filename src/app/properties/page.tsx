import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { OurVentures } from "@/components/properties/OurVentures";
import { PropertiesIntro } from "@/components/properties/PropertiesIntro";
import { PropertyCategories } from "@/components/properties/PropertyCategories";
import { Testimonials } from "@/components/properties/Testimonials";

export const metadata: Metadata = {
  title: "Our Properties | RS Builders & Developers",
  description:
    "Explore residential, open plots, land, commercial and investment opportunities across Telangana with RS Builders & Developers.",
};

export default function PropertiesPage() {
  return (
    <>
      <PropertiesIntro />
      <PropertyCategories />
      <OurVentures />
      <Testimonials />
      <ContactSection />
    </>
  );
}
