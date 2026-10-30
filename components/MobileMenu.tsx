"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants/site";
import { services } from "@/lib/data/services";
import { NewBadge } from "./NewBadge";
import { buttonClasses } from "./Button";
import { cn } from "@/lib/utils/cn";

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const linkCls =
    "flex min-h-[52px] items-center border-b border-line text-[12px] font-medium uppercase tracking-nav text-navy";

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      hidden={!open}
      className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-white lg:hidden"
    >
      <nav aria-label="Mobile" className="container-wide pb-8 pt-2">
        <ul>
          {NAV_LINKS.map((l) =>
            "hasMenu" in l && l.hasMenu ? (
              <li key={l.label}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(linkCls, "w-full justify-between")}
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                  />
                </button>
                <ul id="mobile-services" hidden={!servicesOpen} className="border-b border-line bg-warm">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={onClose}
                        aria-current={pathname === `/services/${s.slug}` ? "page" : undefined}
                        className="flex min-h-[48px] items-center justify-between gap-3 px-4 text-[14px] text-navy"
                      >
                        <span>{s.title}</span>
                        {s.isNew && <NewBadge />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                  className={linkCls}
                >
                  {l.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <Link href="/contact" onClick={onClose} className={cn(buttonClasses("primary", "md"), "mt-6 w-full")}>
          <span>Talk to us</span>
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </div>
  );
}
