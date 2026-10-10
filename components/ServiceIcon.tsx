import { Award, Briefcase, ChartColumn, GraduationCap, Globe, Workflow } from "lucide-react";
import type { ServiceIconKey } from "@/lib/data/services";

const map = {
  award: Award,
  graduation: GraduationCap,
  briefcase: Briefcase,
  globe: Globe,
  chart: ChartColumn,
  workflow: Workflow,
} as const;

export function ServiceIcon({ name, size = 28 }: { name: ServiceIconKey; size?: number }) {
  const Icon = map[name];
  return <Icon size={size} strokeWidth={1.25} className="text-gold" aria-hidden="true" />;
}
