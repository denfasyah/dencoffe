import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/display",
    },
    sitemap: "https://kedaikopibangjenggot.com/sitemap.xml",
  };
}
