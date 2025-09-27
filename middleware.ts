// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/; // ignore next.js assets

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // skip next internals & public files
  if (pathname.startsWith("/_next") || pathname.includes("/api/") || PUBLIC_FILE.test(pathname)) {
    return;
  }

  // if already has locale in path → continue
  const locales = ["en", "mk"];
  const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  if (pathnameIsMissingLocale) {
    // try cookie first
    const localeCookie = req.cookies.get("NEXT_LOCALE")?.value;

    // fallback to browser language
    const browserLang = req.headers.get("accept-language")?.split(",")[0].split("-")[0];

    let locale = "en"; // default
    if (localeCookie && locales.includes(localeCookie)) {
      locale = localeCookie;
    } else if (browserLang && locales.includes(browserLang)) {
      locale = browserLang;
    }

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
