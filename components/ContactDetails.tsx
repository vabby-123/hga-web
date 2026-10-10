// Placeholder values are shown until verified contact details are supplied.
const details = [
  { label: "Email", value: "[ verified email to be added ]" },
  { label: "Phone", value: "[ verified phone to be added ]" },
  { label: "Address", value: "[ verified address to be added ]" },
  { label: "LinkedIn", value: "[ LinkedIn to be added ]" },
];

export function ContactDetails() {
  return (
    <aside aria-labelledby="connect-heading" className="lg:border-l lg:border-line lg:pl-12">
      <h2 id="connect-heading" className="font-display text-[22px] leading-tight text-navy">
        Connect with HGA
      </h2>
      <p className="mt-[21px] text-[14px] leading-[1.72] text-ink-2">
        Reach the HGA team directly through any of the channels below. Verified contact details will be displayed here.
      </p>
      <dl className="mt-[31px]">
        {details.map((d) => (
          <div key={d.label} className="border-t border-line py-[22px]">
            <dt className="text-[11px] font-semibold uppercase leading-none tracking-eyebrow text-gold">{d.label}</dt>
            <dd className="mt-3 text-[14px] leading-snug text-muted">{d.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
