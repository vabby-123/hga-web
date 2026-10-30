import { SectionEyebrow } from "./SectionEyebrow";
import { approach as defaultSteps } from "@/lib/data/approach";

interface Step {
  number?: string;
  title: string;
  description: string;
}

export function ApproachSection({
  eyebrow = "Our approach",
  steps,
}: {
  eyebrow?: string;
  steps?: Step[];
}) {
  const items: Step[] = (steps ?? [...defaultSteps]).map((s, i) => ({
    ...s,
    number: s.number ?? String(i + 1).padStart(2, "0"),
  }));
  return (
    <section className="bg-navy" aria-labelledby="approach-eyebrow">
      <div className="container-content section-y-inner">
        <SectionEyebrow>
          <span id="approach-eyebrow">{eyebrow}</span>
        </SectionEyebrow>
        <ol className={`mt-12 grid gap-10 md:gap-8 lg:gap-11 ${items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {items.map((s) => (
            <li key={s.title}>
              <span className="block font-display text-[34px] leading-none text-gold/35" aria-hidden="true">
                {s.number}
              </span>
              <h3 className="mt-4 font-display text-[22px] leading-tight text-white">{s.title}</h3>
              <p className="mt-3 max-w-[20rem] text-[14px] leading-[1.7] text-white/70">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
