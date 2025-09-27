import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { locale } = await req.json();

  if (!["en", "mk"].includes(locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    httpOnly: false, // must be accessible by browser
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return res;
}
