import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactContent from "@/components/features/ContactContent";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Kunjungi atau hubungi Kedai Kopi Bang Jenggot di Bekasi Barat. Lokasi: Jl. Kali Baru Barat No.1G, Kota Baru, Bekasi. WhatsApp: +6287875330263.",
  openGraph: {
    title: "Hubungi Kami | Kedai Kopi Bang Jenggot",
    description: "Temukan lokasi dan kontak Kedai Kopi Bang Jenggot di Bekasi Barat. Reservasi, pertanyaan, dan informasi lengkap di sini.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Hubungi Kami"
        subtitle="Kami Siap Menyambut Anda"
      />
      <ContactContent />
    </main>
  );
}
