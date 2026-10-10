import Link from "next/link";

/** Small monogram lock-up. Swap for the supplied logo file when available. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Harvey Gill & Associates — home"
      className="flex h-11 w-[80px] shrink-0 flex-col items-center justify-center"
    >
      <span className="font-display text-[15px] font-medium leading-none tracking-[0.04em] text-navy">HG</span>
      <span className="mt-[3px] h-px w-[10px] bg-gold" aria-hidden="true" />
      <span className="mt-[3px] text-[3.6px] font-semibold uppercase leading-none tracking-[0.28em] text-navy/70" aria-hidden="true">
        Harvey Gill
      </span>
    </Link>
  );
}
