import { cn } from "@/lib/utils/cn";

interface Props {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  align?: "left" | "center";
  size?: "xl" | "lg" | "md";
}

const sizes = {
  xl: "text-[clamp(2.25rem,4.2vw,3.25rem)] leading-[1.12]",
  lg: "text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.15]",
  md: "text-[clamp(1.75rem,2.9vw,2.25rem)] leading-[1.2]",
};

export function SectionHeading({ as: Tag = "h2", children, className, light, align = "left", size = "xl" }: Props) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.005em]",
        sizes[size],
        light ? "text-white" : "text-navy",
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
