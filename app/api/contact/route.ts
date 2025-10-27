// app/api/contact/route.ts
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_API_SECRET!,
});

function fromEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => ({}));
    const data = schema.parse(json);

    // Optional super-light rate limit (per IP, in-memory). Replace with a proper store in prod.
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    // @ts-ignore
    globalThis.__rl ??= new Map<string, { t: number; c: number }>();
    // @ts-ignore
    const bucket = globalThis.__rl.get(ip) ?? { t: Date.now(), c: 0 };
    if (Date.now() - bucket.t > 60_000) {
      bucket.t = Date.now();
      bucket.c = 0;
    }
    bucket.c += 1;
    // @ts-ignore
    globalThis.__rl.set(ip, bucket);
    if (bucket.c > 5) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

    const SENDER = fromEnv("MAILJET_SENDER");
    const TO = fromEnv("CONTACT_TO");
    const templateId = process.env.MAILJET_TEMPLATE_ID;

    const payload = templateId
      ? {
          Messages: [
            {
              From: { Email: SENDER, Name: "Codelab - Website" },
              To: [{ Email: TO }],
              TemplateID: Number(templateId),
              TemplateLanguage: true,
              Subject: "New contact form message",
              Variables: {
                name: data.name,
                email: data.email,
                message: data.message,
              },
              Headers: {
                "Reply-To": data.email,
              },
            },
          ],
        }
      : {
          Messages: [
            {
              From: { Email: SENDER, Name: "Codelab - Website" },
              To: [{ Email: TO }],
              Subject: `New message from ${data.name}`,
              TextPart: `From: ${data.name} <${data.email}>\n\n` + `Message:\n${data.message}`,
              HTMLPart: `
                <p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
              `,
              Headers: {
                "Reply-To": data.email,
              },
            },
          ],
        };

    const result = await mailjet.post("send", { version: "v3.1" }).request(payload as any);

    // Mailjet returns a 200 with a response body, check for MessageID or Status
    const status = result?.body?.Messages?.[0]?.Status ?? "unknown";

    if (status !== "success") {
      console.error("Mailjet not success:", result?.body);
      return NextResponse.json({ error: "Email not sent" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    // Zod errors are nice to surface
    if (err?.issues) {
      return NextResponse.json({ error: "Validation failed", details: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
