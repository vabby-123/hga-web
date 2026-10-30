import { InternalHero } from "@/components/InternalHero";
import { Button } from "@/components/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <InternalHero eyebrow="404" title="Page not found" subtitle="The page you are looking for does not exist." />
      <section className="section-y">
        <div className="container-content">
          <Button href="/" arrow>
            Return home
          </Button>
        </div>
      </section>
    </>
  );
}
