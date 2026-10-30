import { InternalHero } from "@/components/InternalHero";
import { InsightCard } from "@/components/InsightCard";
import { CTASection } from "@/components/CTASection";
import { insights } from "@/lib/data/insights";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Insights & Perspectives",
  description:
    "Perspectives from Harvey Gill & Associates on leadership, certification, advisory, digital branding, analytics and workflow.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <InternalHero eyebrow="Insights" title="Insights & Perspectives" subtitle="Evidence, experience and clear thinking." />
      <section className="bg-warm">
        <div className="container-home section-y-inner">
          <div className="grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {insights.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
