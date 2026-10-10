import { services } from "@/lib/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
