// app/i18n/ClientI18nProvider.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

interface Props {
  children: ReactNode;
  locale: string;
}

export default function ClientI18nProvider({ children, locale }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(locale);
    setMounted(true);
  }, [locale]);

  if (!mounted) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
