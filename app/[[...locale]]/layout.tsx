import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, localePath } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { getUI } from "@/data/interface";
import "@/app/globals.css";
import "@/app/experience.css";
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
type Props = {
  params: Promise<{ locale?: string[] }>;
  children: React.ReactNode;
};
export const viewport: Viewport = {
  themeColor: "#030711",
  colorScheme: "dark",
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale?.[0] ?? "en";
  if (!isLocale(lang)) return {};
  const ui = getUI(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: "Pedro Soler — Software, AI & Computer Vision",
    description: ui.intro,
    authors: [{ name: "Pedro Henrique Contardi Soler" }],
    alternates: {
      canonical: localePath(lang),
      languages: { "pt-BR": "/pt", en: "/", es: "/es", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      title: "Pedro Soler — Software, AI & Computer Vision",
      description: ui.intro,
      url: localePath(lang),
      siteName: "Pedro Soler",
      locale: { pt: "pt_BR", en: "en_US", es: "es_ES" }[lang],
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Pedro Soler — Software, AI & Computer Vision",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pedro Soler",
      description: ui.intro,
      images: ["/opengraph-image"],
    },
    icons: { icon: "/favicon.svg" },
  };
}
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = locale?.[0] ?? "en";
  if (!isLocale(lang) || (locale && (locale.length !== 1 || lang === "en")))
    notFound();
  return (
    <html
      lang={lang === "pt" ? "pt-BR" : lang}
      className={`${sans.variable} ${mono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
