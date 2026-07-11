import type { Metadata } from "next";
import { Manrope, Work_Sans, Sacramento } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const sacramento = Sacramento({ weight: "400", subsets: ["latin"], variable: "--font-sacramento" });

const BRAND = "Kedai Kopi Bang Jenggot";
const BASE_URL = "https://kedaikopibangjenggot.com";

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: BRAND,
    image: `${BASE_URL}/logo.png`,
    url: BASE_URL,
    telephone: "+6287875330263",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bekasi Barat",
      addressLocality: "Bekasi",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
  };

  return (
    <html lang="id" className={`scroll-smooth h-full antialiased ${manrope.variable} ${workSans.variable} ${sacramento.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}