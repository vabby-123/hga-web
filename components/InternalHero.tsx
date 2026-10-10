import { NewBadge } from "./NewBadge";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  isNew?: boolean;
  meta?: React.ReactNode;
  compact?: boolean;
}

export function InternalHero({ eyebrow, title, subtitle, isNew, meta, compact }: Props) {
  return (
    <section className="border-b border-line bg-ivory" aria-labelledby="page-title">
      <div className="container-content py-14 sm:py-[72px] lg:pb-[82px] lg:pt-[99px]">
        <div className="fade-up flex items-center gap-4">
          <p className="eyebrow">{eyebrow}</p>
          {isNew && <NewBadge />}
        </div>
        <h1
          id="page-title"
          className={`fade-up mt-7 max-w-[16ch] font-display font-normal tracking-[-0.01em] text-navy sm:max-w-none ${compact ? "text-[clamp(2.5rem,6.4vw,4.4rem)] leading-[1.03]" : "text-[clamp(2.6rem,7vw,4.72rem)] leading-[1.06]"}`}
        >
          {title}
        </h1>
        {subtitle && (
          <div className="fade-up-2 mt-[30px] flex items-center gap-4">
            <span className="h-px w-12 shrink-0 bg-gold" aria-hidden="true" />
            <p className="font-display text-[clamp(1rem,1.5vw,1.25rem)] italic leading-snug text-ink-2">{subtitle}</p>
          </div>
        )}
        {meta && <div className="fade-up-2 mt-6">{meta}</div>}
      </div>
    </section>
  );
}
