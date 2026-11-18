import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VentureDetail } from "@/components/properties/VentureDetail";
import {
  getVentureBySlug,
  getVentureGalleryBySlug,
  ventures,
} from "@/data/ventures";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) {
    return { title: "Venture not found | RS Builders & Developers" };
  }
  return {
    title: `${venture.name} | RS Builders & Developers`,
    description: venture.description,
  };
}

export default async function VenturePage({ params }: PageProps) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) notFound();

  const gallery = getVentureGalleryBySlug(slug);
  const images = gallery?.images ?? [];

  return <VentureDetail venture={venture} images={images} />;
}
