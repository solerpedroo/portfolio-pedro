import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/pt", "/es"].map((path) => ({
    url: `${siteUrl}${path}`,
    alternates: {
      languages: { "pt-BR": `${siteUrl}/pt`, en: siteUrl, es: `${siteUrl}/es` },
    },
  }));
}
