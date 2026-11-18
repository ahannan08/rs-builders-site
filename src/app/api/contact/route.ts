import { Resend } from "resend";
import { NextResponse } from "next/server";

const interests = [
  "Residential",
  "Plots",
  "Land",
  "Commercial",
  "Investment",
] as const;

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  message?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const interest = body.interest?.trim() ?? "";

  if (!isNonEmptyString(name)) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!isNonEmptyString(phone)) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }
  if (!isNonEmptyString(interest) || !interests.includes(interest as (typeof interests)[number])) {
    return NextResponse.json(
      { error: "Please select a property interest." },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || "info@rsbuilders.in";
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  const resend = new Resend(apiKey);

  const subject = `Website enquiry: ${interest} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : "Email: (not provided)",
    `Property interest: ${interest}`,
    "",
    "Message:",
    message || "(none)",
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${email ? escapeHtml(email) : "(not provided)"}</p>
    <p><strong>Property interest:</strong> ${escapeHtml(interest)}</p>
    <p><strong>Message:</strong></p>
    <p>${message ? escapeHtml(message).replace(/\n/g, "<br>") : "(none)"}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email || undefined,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}