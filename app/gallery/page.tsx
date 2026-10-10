import { InternalHero } from "@/components/InternalHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Moments and milestones from Harvey Gill & Associates programmes, forums and engagements.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <InternalHero eyebrow="Gallery" title="Moments & Milestones" subtitle="Programmes, forums and engagements." />
      <section className="bg-white">
        <div className="container-home section-y-inner">
          <GalleryGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
