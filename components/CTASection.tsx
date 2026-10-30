import { SectionEyebrow } from "./SectionEyebrow";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

interface Props {
  eyebrow?: string;
  heading?: React.ReactNode;
  body?: string;
  buttonLabel?: string;
  href?: string;
}

export function CTASection({
  eyebrow = "Let's work together",
  heading = (
    <>
      Ready to strengthen your
      <br className="hidden sm:block" /> organisation?
    </>
  ),
  body = "Whether through professional certification, executive development, strategic advisory or digital transformation, let's start with the challenge you need to solve.",
  buttonLabel = "Talk to us",
  href = "/contact",
}: Props) {
  return (
    <section className="bg-ivory" aria-labelledby="cta-heading">
      <div className="container-content section-y flex flex-col items-center text-center">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading as="h2" size="lg" align="center" className="mt-6">
          <span id="cta-heading">{heading}</span>
        </SectionHeading>
        <p className="mt-6 max-w-[46rem] text-[15px] leading-[1.9] text-ink-2">{body}</p>
        <Button href={href} arrow className="mt-9">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
