import Link from "next/link";

/** TODO: replace with the real phone number, email and social profile URLs. */
const contact = {
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsappHref: "https://wa.me/910000000000",
  email: "info@rsbuilders.in",
  instagramHref: "https://instagram.com/",
  facebookHref: "https://facebook.com/",
  youtubeHref: "https://youtube.com/",
};

const explore = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Why RS", href: "/#why-rs" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { label: "Residential", href: "/properties" },
  { label: "Plots", href: "/properties" },
  { label: "Land", href: "/properties" },
  { label: "Commercial", href: "/properties" },
  { label: "Investments", href: "/properties" },
];

const iconClass = "h-4 w-4";

const socials = [
  {
    label: "Phone",
    href: contact.phoneHref,
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <path
          d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: contact.whatsappHref,
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <path
          d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.2A8.5 8.5 0 1 0 12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 8.8c0 3 2.2 5.2 5.2 5.2.6 0 1-.5 1-1l-1.4-.7-.9.8a4.6 4.6 0 0 1-2-2l.8-.9-.7-1.4c-.5 0-1 .4-1 1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <rect
          x="3"
          y="5.5"
          width="18"
          height="13"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m4 7 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: contact.instagramHref,
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: contact.facebookHref,
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <path
          d="M14.5 8.5h2.2V5.8h-2.4c-2.2 0-3.6 1.4-3.6 3.6v1.4H9v2.8h1.7V21h3v-7.4h2.2l.4-2.8h-2.6V9.6c0-.7.3-1.1.8-1.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: contact.youtubeHref,
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
        <rect
          x="2.5"
          y="6"
          width="19"
          height="12"
          rx="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M10.5 9.5 15 12l-4.5 2.5z" fill="currentColor" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-primary">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <p className="font-display text-2xl font-semibold leading-tight">
              RS Builders & Developers
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-light">
              Dare to Dream
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-light">
              Building opportunities. Creating possibilities.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary-light transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted">
              Categories
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary-light transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2.5 text-primary-light transition-colors hover:text-primary"
                  >
                    <span className="text-primary">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-primary-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} RS Builders & Developers. All Rights
            Reserved.
          </p>
          <p>
            <a
              href={contact.phoneHref}
              className="transition-colors hover:text-primary"
            >
              {contact.phone}
            </a>
            <span className="mx-2 text-border">|</span>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-primary"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
