export const SITE = {
  name: "Harvey Gill & Associates",
  shortName: "HGA",
  tagline: "Developing Leaders. Driving Impact.",
  established: 1987,
  establishedLine: "Established 1987 · Malaysia",
  // Set NEXT_PUBLIC_SITE_URL in production. Used for canonical URLs, sitemap and Open Graph.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  description:
    "Harvey Gill & Associates (HGA) is a professional corporate advisory, executive training, professional certification and digital business solutions firm established in Malaysia in 1987.",
  footerBlurb:
    "A professional corporate advisory, executive training, professional certification and digital business solutions firm established in Malaysia, 1987.",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Insights", href: "/insights" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
