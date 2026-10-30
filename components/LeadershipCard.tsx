import Image from "next/image";

interface Props {
  name: string;
  title: string;
  bio: string;
  image?: string | null;
}

export function LeadershipCard({ name, title, bio, image }: Props) {
  return (
    <article className="border-b border-r border-line p-8 max-md:border-r-0">
      <div className="relative aspect-[4/5] w-full border border-line bg-warm">
        {image ? (
          <Image src={image} alt={`Portrait of ${name}`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium uppercase tracking-[0.2em] text-muted/60">
            Portrait
          </span>
        )}
      </div>
      <span className="mt-6 block h-px w-6 bg-gold" aria-hidden="true" />
      <p className="mt-4 text-[10.5px] font-medium uppercase leading-none tracking-[0.18em] text-muted">
        {name} · {title}
      </p>
      <p className="mt-3 text-[13px] leading-[1.6] text-muted">{bio}</p>
    </article>
  );
}
