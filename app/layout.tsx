import "@plugin_css/bootstrap.min.css";
import "@plugin_css/uicons.css";

import "@/public/assets/css/style.css";
import "./globals.css";

import Preloader from "@/components/Preloader";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--ed-font-family",
});

export const metadata = {
  metadataBase: new URL("https://codelab.com.mk"),
  title: {
    default: "CodeLab – Курсови за Програмирање за Деца",
    template: "%s | CodeLab",
  },
  description: "Програмирање за деца во Скопје. Практична едукација преку игра, креативност и технологија.",
  keywords: ["програмирање за деца", "курсеви за деца", "Scratch курс", "роботика за деца", "CodeLab Skopje", "курсеви Скопје"],
  authors: [{ name: "CodeLab" }],
  creator: "CodeLab",
  alternates: {
    canonical: "https://codelab.com.mk",
  },
  openGraph: {
    type: "website",
    locale: "mk_MK",
    url: "https://codelab.com.mk",
    siteName: "CodeLab",
    title: "CodeLab – Курсови за Програмирање за Деца",
    description: "Програмирање за деца во Скопје. Практична едукација преку игра, креативност и технологија.",
    images: [
      {
        url: "/assets/codelab/logo/codelab-logo.png",
        width: 1200,
        height: 630,
        alt: "CodeLab",
      },
    ],
  },
  icons: {
    icon: "/assets/codelab/logo/codelab-logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk">
      <body className={poppins.variable}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
