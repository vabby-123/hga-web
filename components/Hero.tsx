import { Button } from "./Button";
import { DecorativeDivider } from "./DecorativeDivider";
import { SITE } from "@/lib/constants/site";

export function Hero() {
  return (
    <section className="bg-ivory" aria-labelledby="hero-title">
      <div className="container-content flex flex-col items-center px-6 py-16 text-center sm:py-20 lg:py-24">
        <p className="eyebrow fade-up">{SITE.establishedLine}</p>
        <h1
          id="hero-title"
          className="fade-up mt-8 font-display text-[clamp(3rem,10.5vw,5.5rem)] font-normal leading-[1.07] tracking-[-0.01em] text-navy lg:mt-10"
        >
          Harvey Gill
          <br />
          &amp; Associates
        </h1>
        <p className="fade-up-2 mt-6 font-display text-[clamp(1.25rem,3.4vw,1.7rem)] italic leading-tight text-gold lg:mt-7">
          {SITE.tagline}
        </p>
        <DecorativeDivider className="fade-up-2 mt-10" />
        <p className="fade-up-2 mt-10 max-w-[44rem] text-[16.75px] leading-[1.84] text-ink-2">
          Since 1987, Harvey Gill &amp; Associates (HGA) has partnered with organisations across Malaysia and the
          region to build capability, sharpen decision-making, and drive measurable impact.
        </p>
        <div className="fade-up-3 mt-[50px] flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Button href="/services" arrow className="w-full sm:w-auto">
            Explore our services
          </Button>
          <Button href="/about" variant="secondary" className="w-full sm:w-auto">
            About HGA
          </Button>
        </div>
      </div>
    </section>
  );
}
