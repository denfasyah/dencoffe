import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AboutContent from "@/components/features/AboutContent";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenalan lebih dekat dengan Kedai Kopi Bang Jenggot — kedai kopi nyaman di Bekasi Barat yang hadir untuk menemani setiap momen Anda dengan kopi berkualitas dan suasana hangat.",
  openGraph: {
    title: "Tentang Kami | Kedai Kopi Bang Jenggot",
    description: "Kedai Kopi Bang Jenggot hadir sebagai ruang yang nyaman di Bekasi Barat untuk menikmati kopi, berbagi cerita, dan menciptakan momen berharga.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Tentang Kami"
        subtitle="Kisah di Balik Setiap Cangkir"
      />
      <AboutContent />
    </main>
  );
}
