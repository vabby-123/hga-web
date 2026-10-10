"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { services } from "@/lib/data/services";
import { NewBadge } from "./NewBadge";
import { cn } from "@/lib/utils/cn";

export function ServicesDropdown({ active, pathname }: { active: boolean; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) btnRef.current?.focus();
  }, []);

  // Close whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Outside click + Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const items = () => Array.from(wrapRef.current?.querySelectorAll<HTMLAnchorElement>("[data-menu-item]") ?? []);

  const focusItem = (index: number) => {
    const list = items();
    if (!list.length) return;
    list[(index + list.length) % list.length]?.focus();
  };

  const onButtonKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => focusItem(0), 60);
    }
  };

  const onMenuKey = (e: React.KeyboardEvent) => {
    const list = items();
    const idx = list.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusItem(idx + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (idx <= 0) btnRef.current?.focus();
      else focusItem(idx - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusItem(list.length - 1);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative flex h-full items-center"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") {
          clearTimer();
          setOpen(true);
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") {
          clearTimer();
          timer.current = setTimeout(() => setOpen(false), 140);
        }
      }}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onButtonKey}
        className={cn(
          "flex items-center gap-1.5 text-[11.5px] font-medium uppercase leading-none tracking-nav text-navy transition-colors duration-200 hover:text-gold",
          (active || open) && "text-navy",
        )}
      >
        Services
        <ChevronDown
          size={13}
          strokeWidth={2}
          aria-hidden="true"
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        id={menuId}
        onKeyDown={onMenuKey}
        className={cn(
          "absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 border border-t-2 border-line border-t-gold bg-white py-2 shadow-[0_24px_48px_-24px_rgba(7,26,51,0.28)] transition-[opacity,transform,visibility] duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <ul>
          {services.map((s) => {
            const current = pathname === `/services/${s.slug}`;
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  data-menu-item
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-4 border-l-2 px-6 py-[13px] text-[14px] leading-tight transition-colors duration-150 hover:border-gold hover:bg-warm focus-visible:border-gold focus-visible:bg-warm focus-visible:outline-none",
                    current ? "border-gold bg-warm text-navy" : "border-transparent text-navy",
                  )}
                >
                  <span>{s.title}</span>
                  {s.isNew && <NewBadge />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
