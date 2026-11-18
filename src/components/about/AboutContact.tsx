import { siteContact } from "@/data/contact";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/shared/ContactChannelIcon";
import { Reveal } from "@/components/ui/Reveal";

const channels = [
  {
    label: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
    icon: <PhoneIcon />,
    external: false,
  },
  {
    label: siteContact.email,
    href: `mailto:${siteContact.email}`,
    icon: <EmailIcon />,
    external: false,
  },
  {
    label: "WhatsApp",
    href: siteContact.whatsappHref,
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: "Instagram",
    href: siteContact.instagramHref,
    icon: <InstagramIcon />,
    external: true,
  },
  {
    label: "Facebook",
    href: siteContact.facebookHref,
    icon: <FacebookIcon />,
    external: true,
  },
] as const;

export function AboutContact() {
  return (
    <section className="border-t border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="section-label">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-primary sm:text-4xl">
            Reach RS Builders & Developers
          </h2>
          <p className="mt-4 max-w-2xl text-primary-light">
            Call, email, or message us on WhatsApp and social — we&apos;re here
            to help with your property enquiry.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 text-sm font-medium text-primary transition-colors hover:border-primary-light/35 hover:bg-elevated"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-primary">
                    {channel.icon}
                  </span>
                  <span className="min-w-0 break-all text-primary-light">
                    {channel.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}