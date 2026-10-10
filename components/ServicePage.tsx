import { getService } from "@/lib/data/services";
import { InternalHero } from "./InternalHero";
import { SectionEyebrow } from "./SectionEyebrow";
import { ApproachSection } from "./ApproachSection";
import { CTASection } from "./CTASection";
import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/constants/site";

export function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.metaDescription,
          url: `${SITE.url}/services/${s.slug}`,
          provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
          areaServed: "Malaysia",
        }}
      />
      <InternalHero eyebrow={`Service ${s.number}`} title={s.title} subtitle={s.subtitle} isNew={s.isNew} />

      <section className="bg-white" aria-labelledby="overview-eyebrow">
        <div className="container-content section-y-inner">
          <SectionEyebrow>
            <span id="overview-eyebrow">Overview</span>
          </SectionEyebrow>
          <div className="prose-hga mt-8 max-w-[46rem]">
            {s.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm" aria-labelledby="capabilities-eyebrow">
        <div className="container-content section-y-inner">
          <SectionEyebrow>
            <span id="capabilities-eyebrow">Capabilities</span>
          </SectionEyebrow>
          <ul className="mt-10 grid border-l border-t border-line bg-white sm:grid-cols-2 lg:grid-cols-3">
            {s.capabilities.map((c, i) => (
              <li key={c.title} className="border-b border-r border-line p-8">
                <span className="text-[11px] font-medium leading-none tracking-[0.15em] text-muted/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[21px] leading-[1.25] text-navy">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted">{c.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ApproachSection eyebrow="How we work" steps={s.approach} />

      <section className="bg-white" aria-labelledby="outcomes-eyebrow">
        <div className="container-content section-y-inner">
          <SectionEyebrow>
            <span id="outcomes-eyebrow">Key outcomes</span>
          </SectionEyebrow>
          <ul className="mt-10 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {s.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-4 border-t border-line py-6">
                <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                <span className="font-display text-[19px] leading-[1.4] text-navy">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection eyebrow="Let's work together" heading={s.cta.heading} body={s.cta.body} />
    </>
  );
}
