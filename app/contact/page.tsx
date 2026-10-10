import { InternalHero } from "@/components/InternalHero";
import { ContactForm } from "@/components/ContactForm";
import { ContactDetails } from "@/components/ContactDetails";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Tell Harvey Gill & Associates about the challenge you are working on. Send an enquiry to the HGA team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <InternalHero eyebrow="Contact" title="Let's Talk" subtitle="Tell us about the challenge you're working on." />
      <section className="bg-white">
        <div className="container-content py-14 sm:py-16 lg:py-[80px]">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
