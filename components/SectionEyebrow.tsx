import { cn } from "@/lib/utils/cn";

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}
