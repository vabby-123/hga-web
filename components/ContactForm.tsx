"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { services } from "@/lib/data/services";
import { SubmitButton } from "./Button";
import { cn } from "@/lib/utils/cn";

type Values = { name: string; organisation: string; email: string; phone: string; service: string; message: string; website: string };
type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const empty: Values = { name: "", organisation: "", email: "", phone: "", service: "", message: "", website: "" };

const fieldCls =
  "w-full border border-line bg-white px-5 text-[15px] text-navy placeholder:text-muted/60 transition-colors duration-200 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold aria-[invalid=true]:border-[#A63D2F] aria-[invalid=true]:ring-[#A63D2F]";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.message.length > 4000) e.message = "Please keep your message under 4,000 characters.";
  return e;
}

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const id = (n: string) => `${uid}-${n}`;
  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (k in errors) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = (["name", "email", "message"] as const).find((k) => errs[k]);
      if (first) document.getElementById(id(first))?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-warm p-8 sm:p-10">
        <span className="block h-px w-8 bg-gold" aria-hidden="true" />
        <h2 className="mt-5 font-display text-[28px] leading-tight text-navy">Thank you.</h2>
        <p className="mt-3 max-w-[30rem] text-[15px] leading-[1.75] text-ink-2">
          Your enquiry has been received. A member of the HGA team will be in touch.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[11px] font-bold uppercase tracking-label text-gold hover:text-gold-dark"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={status === "error" ? id("form-error") : undefined}>
      <div className="grid gap-x-6 gap-y-[26px] sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="label">
            Name <span className="text-gold" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? id("name-err") : undefined}
            className={cn(fieldCls, "mt-3 h-[47px]")}
          />
          {errors.name && <p id={id("name-err")} className="mt-2 text-[12.5px] text-[#A63D2F]">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={id("organisation")} className="label">Organisation</label>
          <input
            id={id("organisation")}
            name="organisation"
            type="text"
            autoComplete="organization"
            value={values.organisation}
            onChange={set("organisation")}
            className={cn(fieldCls, "mt-3 h-[47px]")}
          />
        </div>
        <div>
          <label htmlFor={id("email")} className="label">
            Email <span className="text-gold" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? id("email-err") : undefined}
            className={cn(fieldCls, "mt-3 h-[47px]")}
          />
          {errors.email && <p id={id("email-err")} className="mt-2 text-[12.5px] text-[#A63D2F]">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={id("phone")} className="label">Phone</label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            className={cn(fieldCls, "mt-3 h-[47px]")}
          />
        </div>
      </div>

      <div className="mt-[26px]">
        <label htmlFor={id("service")} className="label">Service of interest</label>
        <div className="relative mt-3">
          <select
            id={id("service")}
            name="service"
            value={values.service}
            onChange={set("service")}
            className={cn(fieldCls, "h-[46px] appearance-none pr-12", values.service ? "text-navy" : "text-navy/90")}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-navy"
          />
        </div>
      </div>

      <div className="mt-[26px]">
        <label htmlFor={id("message")} className="label">Message</label>
        <textarea
          id={id("message")}
          name="message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? id("message-err") : undefined}
          className={cn(fieldCls, "mt-3 block h-[131px] resize-y py-4 leading-relaxed")}
        />
        {errors.message && <p id={id("message-err")} className="mt-2 text-[12.5px] text-[#A63D2F]">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people and assistive tech, catches naive bots. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      {status === "error" && (
        <p id={id("form-error")} role="alert" className="mt-6 border border-[#A63D2F]/40 bg-[#A63D2F]/5 px-4 py-3 text-[13.5px] text-[#7A2A20]">
          Your enquiry could not be sent. Please try again in a moment.
        </p>
      )}

      <div className="mt-[30px]">
        <SubmitButton disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending" : "Submit enquiry"}
        </SubmitButton>
      </div>
    </form>
  );
}
