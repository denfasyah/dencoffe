import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denbiz Coffee | Pengalaman Kopi Artisanal Premium",
  description: "Menyajikan kopi artisanal terbaik dengan dedikasi tinggi sejak 1998. Temukan kehangatan rasa dalam setiap cangkir di Denbiz Coffee.",
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