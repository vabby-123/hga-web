import { InternalHero } from "@/components/InternalHero";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Six disciplines under one standard of excellence: professional certification, executive training, business advisory, digital branding, business analytics automation and smart workflow management.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <InternalHero eyebrow="Services" title="Six Disciplines" subtitle="One standard of excellence." />
      <section className="bg-warm" aria-labelledby="services-heading">
        <div className="container-home section-y-inner">
          <SectionEyebrow>What we do</SectionEyebrow>
          <SectionHeading as="h2" size="lg" className="mt-6">
            <span id="services-heading">Inspire. Inform. Transform.</span>
          </SectionHeading>
          <p className="mt-7 max-w-[47.5rem] text-[16px] leading-[1.8] text-ink-2">
            HGA&rsquo;s services span six pillars &mdash; bringing together our founding strengths in certification,
            training, and advisory with three new digital-era capabilities.
          </p>
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
