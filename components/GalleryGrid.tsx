import Image from "next/image";
import { gallery } from "@/lib/data/gallery";

export function GalleryGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {gallery.map((g, i) => (
        <li key={g.id}>
          <figure className="group">
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-warm">
              {g.src ? (
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div
                  role="img"
                  aria-label={g.alt}
                  className="absolute inset-0 flex items-center justify-center bg-warm transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/60">Image to be added</span>
                </div>
              )}
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <span className="font-display text-[18px] leading-tight text-navy">{g.caption}</span>
              <span className="text-[10.5px] font-medium uppercase leading-none tracking-[0.18em] text-gold">{g.category}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
