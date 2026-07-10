import type { Metadata } from "next";
import "./globals.css";

const BRAND = "Kedai Kopi Bang Jenggot";
const BASE_URL = "https://kopibangjenggot.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${BRAND} | Kopi Berkualitas di Bekasi`,
    template: `%s | ${BRAND}`,
  },
  description:
    "Kedai Kopi Bang Jenggot — Tempat ngopi nyaman di Bekasi Barat. Tersedia kopi, non-kopi, tea, dan makanan ringan dengan suasana santai dan pelayanan ramah.",
  keywords: [
    "kedai kopi bekasi",
    "kopi bang jenggot",
    "cafe bekasi barat",
    "kopi enak bekasi",
    "coffee shop bekasi",
    "kedai kopi bekasi barat",
    "kopi susu bekasi",
    "vanilla latte bekasi",
  ],
  authors: [{ name: BRAND }],
  creator: BRAND,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: BRAND,
    title: `${BRAND} | Kopi Berkualitas di Bekasi`,
    description:
      "Kedai Kopi Bang Jenggot — Tempat ngopi nyaman di Bekasi Barat. Kopi, non-kopi, tea, dan makanan ringan favorit warga Bekasi.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `Logo ${BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Kopi Berkualitas di Bekasi`,
    description:
      "Tempat ngopi nyaman di Bekasi Barat dengan menu kopi, non-kopi, tea, dan makanan ringan.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  manifest: undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}