import { stats } from "@/lib/data/stats";
import { cn } from "@/lib/utils/cn";

/** `band` = navy full-width strip (home). `boxed` = bordered strip on white (about). */
export function StatsStrip({ variant = "band" }: { variant?: "band" | "boxed" }) {
  if (variant === "boxed") {
    return (
      <dl className="mt-12 grid grid-cols-2 border border-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={cn(
              "flex flex-col items-center px-4 pb-9 pt-11 text-center",
              i % 2 === 1 && "border-l border-line",
              i > 1 && "border-t border-line lg:border-t-0",
              i > 0 && "lg:border-l lg:border-line",
            )}
          >
            <dd className="order-1 font-display text-[36px] leading-none text-gold">{s.value}</dd>
            <dt className="order-2 mt-[18px] text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-muted">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <section className="bg-navy" aria-label="HGA in numbers">
      <div className="container-content py-14 lg:py-16">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "flex flex-col items-center px-3 text-center",
                i % 2 === 1 && "border-l border-white/10",
                i > 0 && "lg:border-l lg:border-white/10",
                i === 2 && "max-lg:border-l-0",
              )}
            >
              <dd className="order-1 font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-gold">{s.value}</dd>
              <dt className="order-2 mt-5 text-[11px] font-medium uppercase leading-none tracking-[0.22em] text-white/75">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
