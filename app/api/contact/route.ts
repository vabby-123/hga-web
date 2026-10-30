import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not learn anything.
  if (clip(body.website, 200)) return NextResponse.json({ ok: true });

  const enquiry = {
    name: clip(body.name, 200),
    organisation: clip(body.organisation, 200),
    email: clip(body.email, 320),
    phone: clip(body.phone, 60),
    service: clip(body.service, 120),
    message: clip(body.message, 4000),
    receivedAt: new Date().toISOString(),
  };

  if (!enquiry.name || !EMAIL_RE.test(enquiry.email)) {
    return NextResponse.json({ ok: false, error: "Name and a valid email are required." }, { status: 422 });
  }

  // Forward to any JSON webhook (e.g. Zapier, Make, a CRM, an email relay) when configured.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[contact] webhook delivery failed", err);
      return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
    }
  } else {
    console.info("[contact] enquiry received (no CONTACT_WEBHOOK_URL set)", { ...enquiry, message: `${enquiry.message.length} chars` });
  }

  return NextResponse.json({ ok: true });
}
