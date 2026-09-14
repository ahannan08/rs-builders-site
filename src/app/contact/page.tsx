import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | RS Builders & Developers",
  description:
    "Talk to an expert or book a site visit with RS Builders & Developers — residential, plots, land, commercial and investment opportunities.",
};

export default function ContactPage() {
  return <ContactSection />;
}
