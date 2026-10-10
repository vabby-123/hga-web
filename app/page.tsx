import { Hero } from "@/components/Hero";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { StatsStrip } from "@/components/StatsStrip";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/constants/site";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          alternateName: SITE.shortName,
          slogan: SITE.tagline,
          description: SITE.description,
          url: SITE.url,
          foundingDate: String(SITE.established),
          areaServed: "Malaysia",
        }}
      />
      <Hero />

      {/* Dark statement */}
      <section className="bg-navy" aria-label="Our promise">
        <div className="container-content flex flex-col items-center px-6 py-16 text-center sm:py-20 lg:py-[104px]">
          <p className="font-display text-[clamp(1.9rem,4.4vw,3.25rem)] leading-[1.15] text-white">
            One standard of excellence.
            <br />
            <span className="text-gold">Six disciplines.</span>
            <br />
            One trusted partner.
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[11px] sm:gap-x-12 sm:text-[12px] font-bold uppercase leading-none tracking-[0.3em] text-gold sm:text-[13px]">
            <li>Inspire</li>
            <li>Inform</li>
            <li>Transform</li>
          </ul>
        </div>
      </section>

      {/* Six disciplines */}
      <section className="bg-warm" aria-labelledby="disciplines-heading">
        <div className="container-home section-y">
          <SectionEyebrow>What we do</SectionEyebrow>
          <SectionHeading as="h2" className="mt-5">
            <span id="disciplines-heading">
              Six disciplines.
              <br />
              One standard of excellence.
            </span>
          </SectionHeading>
          <p className="mt-4 max-w-[47.5rem] text-[16px] leading-[1.8] text-ink-2">
            HGA&rsquo;s services span six pillars &mdash; bringing together our founding strengths in certification,
            training, and advisory with three new digital-era capabilities: Digital Branding Advisory, Automating
            Business Analytics, and Smart Workflow Management.
          </p>
          <p className="mt-5 font-display text-[17px] italic leading-none text-gold">Inspire. Inform. Transform.</p>
          <div className="mt-14 lg:mt-[60px]">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <StatsStrip />
      <CTASection />
    </>
  );
}
