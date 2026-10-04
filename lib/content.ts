import pt from "@/data/pt.json";
import en from "@/data/en.json";
import es from "@/data/es.json";
import type { Content, Locale } from "@/types/content";
export const locales: Locale[] = ["pt", "en", "es"];
export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
export const getContent = (locale: Locale): Content => ({ pt, en, es })[locale];
export const localePath = (locale: Locale) =>
  locale === "en" ? "/" : `/${locale}`;
