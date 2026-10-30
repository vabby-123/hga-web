import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "secondary-light";
type Size = "md" | "sm";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const base =
  "inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap border text-[11px] font-bold uppercase leading-none tracking-[0.18em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "border-gold bg-gold text-white hover:border-gold-dark hover:bg-gold-dark",
  secondary: "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  "secondary-light": "border-white/60 bg-transparent text-white hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "h-[50px] px-8",
  sm: "h-[42px] px-6",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow,
  className,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      <span>{children}</span>
      {arrow && <span aria-hidden="true">→</span>}
    </Link>
  );
}

export function SubmitButton({
  children,
  disabled,
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(buttonClasses("primary", "md", className), "disabled:cursor-not-allowed disabled:opacity-60")}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </button>
  );
}
