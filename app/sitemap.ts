import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";
import { services } from "@/lib/data/services";
import { insights } from "@/lib/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/services", "/insights", "/gallery", "/contact"];
  return [
    ...staticRoutes.map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, lastModified: now, priority: 0.8 })),
    ...insights.map((i) => ({ url: `${SITE.url}/insights/${i.slug}`, lastModified: new Date(i.date), priority: 0.6 })),
  ];
}
