import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { InternalHero } from "@/components/InternalHero";
import { InsightCard } from "@/components/InsightCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { formatDate, getInsight, insights } from "@/lib/data/insights";
import { buildMetadata } from "@/lib/utils/metadata";
import { SITE } from "@/lib/constants/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function InsightPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();
  const related = insights.filter((i) => i.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
          mainEntityOfPage: `${SITE.url}/insights/${post.slug}`,
        }}
      />
      <InternalHero
        eyebrow={post.category}
        title={post.title}
        meta={
          <p className="text-[11px] font-medium uppercase leading-none tracking-[0.15em] text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true"> · </span>
            {post.readTime}
            <span aria-hidden="true"> · </span>
            HGA
          </p>
        }
      />

      <article className="bg-white">
        <div className="container-content py-14 sm:py-16 lg:py-[80px]">
          <div className="max-w-read">
            <p className="font-display text-[clamp(1.25rem,2.4vw,1.55rem)] italic leading-[1.5] text-ink-2">{post.excerpt}</p>
            <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />
            <div className="prose-hga mt-8">
              {post.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link
              href="/insights"
              className="mt-12 inline-flex items-center gap-2 text-[11px] font-bold uppercase leading-none tracking-label text-gold hover:text-gold-dark"
            >
              <span aria-hidden="true">←</span> All insights
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-warm" aria-labelledby="related-eyebrow">
        <div className="container-home section-y-inner">
          <SectionEyebrow>
            <span id="related-eyebrow">Related insights</span>
          </SectionEyebrow>
          <div className="mt-10 grid border-l border-t border-line md:grid-cols-2">
            {related.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
