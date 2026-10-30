import { values } from "@/lib/data/approach";
import { SectionEyebrow } from "./SectionEyebrow";

export function ValuesGrid() {
  return (
    <section className="bg-navy" aria-labelledby="values-eyebrow">
      <div className="container-content section-y-inner">
        <SectionEyebrow>
          <span id="values-eyebrow">Our values</span>
        </SectionEyebrow>
        <ul className="mt-8 grid sm:grid-cols-2 lg:mt-[33px]">
          {values.map((v, i) => (
            <li
              key={v.title}
              className={[
                "px-0 py-8 sm:px-8 lg:py-[38px]",
                i % 2 === 0 ? "sm:pl-8" : "sm:border-l sm:border-white/10",
                i > 1 ? "border-t border-white/10" : "",
                i === 1 ? "max-sm:border-t max-sm:border-white/10" : "",
              ].join(" ")}
            >
              <h3 className="font-display text-[24px] leading-tight text-gold">{v.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-white/75">{v.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
