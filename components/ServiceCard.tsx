import Link from "next/link";
import type { Service } from "@/lib/data/services";
import { ServiceIcon } from "./ServiceIcon";
import { NewBadge } from "./NewBadge";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex min-h-[290px] flex-col border-b border-r border-line bg-white p-8 transition-colors duration-200 hover:bg-[#FFFDF8] sm:py-9 lg:pr-8"
    >
      <span className="text-[11px] font-medium leading-none tracking-[0.15em] text-muted/80">{service.number}</span>
      {service.isNew && <NewBadge className="absolute right-8 top-7" />}
      <span className="mt-7 block h-7">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="mt-6 font-display text-[22px] leading-[1.25] text-navy">{service.title}</h3>
      <p className="mt-2.5 text-[13.2px] leading-[1.6] text-muted lg:pr-3">{service.description}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-6 text-[11px] font-bold uppercase leading-none tracking-label text-gold">
        Discover
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
