import Link from "next/link";
import { formatDate, type Insight } from "@/lib/data/insights";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="group relative flex flex-col border-b border-r border-line bg-white p-8 transition-colors duration-200 hover:bg-[#FFFDF8] sm:p-9">
      <p className="eyebrow">{insight.category}</p>
      <h3 className="mt-5 font-display text-[24px] leading-[1.25] text-navy">
        <Link
          href={`/insights/${insight.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-offset-[-6px]"
        >
          {insight.title}
        </Link>
      </h3>
      <p className="mt-4 text-[14.5px] leading-[1.7] text-ink-2">{insight.excerpt}</p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
        <p className="text-[11px] font-medium uppercase leading-none tracking-[0.15em] text-muted">
          <time dateTime={insight.date}>{formatDate(insight.date)}</time>
          <span aria-hidden="true"> · </span>
          {insight.readTime}
        </p>
        <span
          aria-hidden="true"
          className="flex items-center gap-1.5 text-[11px] font-bold uppercase leading-none tracking-label text-gold"
        >
          Read
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </article>
  );
}
