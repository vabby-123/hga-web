import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";
import { getService } from "@/lib/data/services";

interface Args {
  title: string;
  description: string;
  path: string;
  /** When true the title is used as-is without the site suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildMetadata({ title, description, path, absoluteTitle, type = "website", publishedTime }: Args): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_MY",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

export function serviceMetadata(slug: string): Metadata {
  const s = getService(slug);
  return buildMetadata({ title: s.title, description: s.metaDescription, path: `/services/${s.slug}` });
}
