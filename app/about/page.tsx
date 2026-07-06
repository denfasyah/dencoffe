import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AboutContent from "@/components/features/AboutContent";

export const metadata: Metadata = {
  title: "Tentang Kami | Denbiz Coffee",
  description: "Kisah di balik Denbiz Coffee — dari biji kopi pilihan hingga cangkir sempurna di meja Anda.",
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
