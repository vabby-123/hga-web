import { cn } from "@/lib/utils/cn";

export function NewBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block bg-gold px-[6px] py-[3.5px] text-[8px] font-bold uppercase leading-none tracking-[0.14em] text-white",
        className,
      )}
    >
      New
    </span>
  );
}
