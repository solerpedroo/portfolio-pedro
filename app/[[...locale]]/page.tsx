import { notFound } from "next/navigation";
import { Portfolio } from "@/components/layout/portfolio";
import { isLocale } from "@/lib/content";
export function generateStaticParams() {
  return [{ locale: [] }, { locale: ["pt"] }, { locale: ["es"] }];
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale?: string[] }>;
}) {
  const { locale } = await params;
  const lang = locale?.[0] ?? "en";
  if (!isLocale(lang) || (locale && (locale.length !== 1 || lang === "en")))
    notFound();
  return <Portfolio locale={lang} />;
}
