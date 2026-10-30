export function DecorativeDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-[38px] bg-gold/60" />
      <span className="block h-[5px] w-[5px] rotate-45 bg-gold" />
      <span className="h-px w-[38px] bg-gold/60" />
    </div>
  );
}
