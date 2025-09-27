import { ReactNode, use } from "react";
import { notFound } from "next/navigation";
import ClientI18nProvider from "@/app/i18n/I18nProvider";

interface Props {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

const SUPPORTED_LANGS = ["en", "mk"];

export default function LangLayout({ children, params }: Props) {
  // ✅ unwrap params
  const { lang } = use(params);

  if (!SUPPORTED_LANGS.includes(lang)) return notFound();

  return <ClientI18nProvider locale={lang}>{children}</ClientI18nProvider>;
}
