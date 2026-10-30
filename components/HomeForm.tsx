"use client";

import { useState } from "react";

const CHALLENGES = [
  "Board effectiveness & governance",
  "Sustainability & ESG readiness",
  "Financial judgement for leaders",
  "Regulation & risk",
  "Leadership succession",
  "Data-driven operations",
  "IPA fellowship",
];

const field = "mt-2 w-full border border-[#d9d9d6] bg-white px-3 py-[10px] text-[14px] text-hga-navy focus:border-hga-gold focus:outline-none";
const label = "block text-[12.5px] font-semibold text-hga-navy";

export function HomeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          organisation: f.get("organisation"),
          email: f.get("email"),
          service: f.get("challenge"),
          message: `Role: ${f.get("role")}\n\n${f.get("context")}`,
          website: f.get("website"),
        }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 sm:p-[23px]">
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <label className={label}>Full name<input name="name" required className={field + " h-[34px]"} /></label>
        <label className={label}>Your role<input name="role" className={field + " h-[34px]"} /></label>
        <label className={label}>Organisation<input name="organisation" className={field + " h-[34px]"} /></label>
        <label className={label}>Work email<input name="email" type="email" required className={field + " h-[34px]"} /></label>
      </div>
      <label className={label + " mt-7"}>
        The challenge you are facing
        <select name="challenge" className={field + " h-[34px]"}>
          {CHALLENGES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </label>
      <label className={label + " mt-8"}>
        A few lines of context
        <textarea name="context" rows={4} className={field + " h-[84px] resize-y"} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 h-[74px] bg-hga-navy px-[18px] text-[14px] font-semibold text-white disabled:opacity-60"
      >
        Request a confidential conversation
      </button>
      {status === "ok" && <p className="mt-4 text-[14px] text-hga-greend">Thank you. We will be in touch shortly.</p>}
      {status === "error" && <p className="mt-4 text-[14px] text-[#a63d2f]">Something went wrong. Please WhatsApp us instead.</p>}
    </form>
  );
}
