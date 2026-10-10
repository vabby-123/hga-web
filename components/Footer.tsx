import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/constants/site";
import { services } from "@/lib/data/services";

const linkCls = "block py-[9px] text-[13.25px] leading-[18px] text-white/90 transition-colors duration-200 hover:text-gold";
const labelCls = "font-sans text-[11px] font-semibold uppercase leading-none tracking-eyebrow text-gold";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide pt-14 lg:pt-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div>
            <p className="font-display text-[18px] italic leading-tight text-gold">{SITE.tagline}</p>
            <p className="mt-5 max-w-[19.5rem] text-[13px] leading-[1.6] text-white/65">{SITE.footerBlurb}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className={labelCls}>Navigate</h2>
            <ul className="mt-5">
              {FOOTER_NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className={labelCls}>Services</h2>
            <ul className="mt-5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={linkCls}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pb-10 pt-8 md:pb-[63px] md:pt-[31px] lg:mt-[49px] text-[11px] font-medium uppercase leading-[1.6] tracking-[0.15em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Harvey Gill &amp; Associates. All rights reserved.</p>
          <p>{SITE.establishedLine}</p>
        </div>
      </div>
    </footer>
  );
}
