"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants/site";
import { Logo } from "./Logo";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileMenu } from "./MobileMenu";
import { buttonClasses } from "./Button";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close the mobile panel if the viewport grows to desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="container-wide relative flex h-[72px] items-center justify-between lg:h-[88px]">
        <Logo />

        <nav aria-label="Primary" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-[37px]">
            {NAV_LINKS.map((l) => (
              <li key={l.label} className="h-full">
                {"hasMenu" in l && l.hasMenu ? (
                  <ServicesDropdown active={pathname.startsWith("/services")} pathname={pathname} />
                ) : (
                  <Link
                    href={l.href}
                    aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                    className={cn(
                      "flex h-full items-center text-[11.5px] font-medium uppercase leading-none tracking-nav text-navy transition-colors duration-200 hover:text-gold",
                    )}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className={buttonClasses("primary", "sm")}>
            <span>Talk to us</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 flex h-12 w-12 items-center justify-center text-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        pathname={pathname}
        onClose={() => {
          closeMobile();
          toggleRef.current?.focus();
        }}
      />
    </header>
  );
}
