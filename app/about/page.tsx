import { InternalHero } from "@/components/InternalHero";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ApproachSection } from "@/components/ApproachSection";
import { StatsStrip } from "@/components/StatsStrip";
import { ValuesGrid } from "@/components/ValuesGrid";
import { LeadershipCard } from "@/components/LeadershipCard";
import { leadership } from "@/lib/data/leadership";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Founded in 1987, Harvey Gill & Associates brings together six disciplines under one standard of excellence, partnering with organisations across Malaysia and the region.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <InternalHero
        compact
        eyebrow="About"
        title={
          <>
            Harvey Gill
            <br />
            &amp; Associates
          </>
        }
        subtitle="Developing Leaders. Driving Impact."
      />

      <section className="bg-white" aria-labelledby="story-eyebrow">
        <div className="container-content py-14 sm:py-16 lg:py-20">
          <SectionEyebrow>
            <span id="story-eyebrow">Our story</span>
          </SectionEyebrow>
          <div className="prose-hga mt-8 max-w-none lg:mt-[35px] [&_p]:mb-5 [&_p]:text-[15.5px] [&_p]:leading-[1.85]">
            <p>
              Founded in 1987, Harvey Gill &amp; Associates (HGA) began as a professional development and advisory firm
              serving organisations across Malaysia. Over the decades that followed, the firm has grown from its
              founding strengths in certification, training, and advisory into a full-spectrum corporate capability
              partner &mdash; adding digital-era disciplines that meet the challenges facing modern organisations.
            </p>
            <p>
              Today, HGA brings together six disciplines under one standard of excellence, partnering with organisations
              across Malaysia and the region to build capability, sharpen decision-making, and drive measurable impact.
            </p>
          </div>
        </div>
      </section>

      <ApproachSection />

      <section className="bg-white" aria-labelledby="experience-eyebrow">
        <div className="container-content py-14 sm:py-16 lg:py-20">
          <SectionEyebrow>
            <span id="experience-eyebrow">Our experience</span>
          </SectionEyebrow>
          <p className="mt-8 max-w-[47rem] text-[15.5px] leading-[1.85] text-ink-2 lg:mt-[35px]">
            HGA&rsquo;s work is grounded in decades of academic, boardroom, and regulatory experience. Our advisory
            practice draws on direct experience advising national regulators and financial institutions, and our
            training and certification programmes are aligned to recognised international bodies and Malaysia&rsquo;s
            HRD Corp framework.
          </p>
          <StatsStrip variant="boxed" />
        </div>
      </section>

      <ValuesGrid />

      <section className="bg-white" aria-labelledby="leadership-eyebrow">
        <div className="container-content section-y-inner">
          <SectionEyebrow>
            <span id="leadership-eyebrow">Leadership</span>
          </SectionEyebrow>
          <p className="mt-8 max-w-[47rem] text-[15.5px] leading-[1.85] text-ink-2 lg:mt-[35px]">
            HGA&rsquo;s leadership brings together decades of experience across academia, governance, finance, and
            digital transformation. Detailed leadership profiles will be added here.
          </p>
          <div className="mt-10 grid border-l border-t border-line md:grid-cols-3 max-md:border-r">
            {leadership.map((p, i) => (
              <LeadershipCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
