import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import MenuContent from "@/components/features/MenuContent";

export const metadata: Metadata = {
  title: "Menu Kami",
  description: "Jelajahi seluruh pilihan menu Kedai Kopi Bang Jenggot: kopi, non-kopi, espresso base, filter coffee, tea, dan makanan ringan dengan harga terjangkau di Bekasi Barat.",
  openGraph: {
    title: "Menu Kami | Kedai Kopi Bang Jenggot",
    description: "Lihat menu lengkap Kedai Kopi Bang Jenggot — coffee, non-coffee, tea, food, espresso base, dan filter coffee.",
  },
};

export default function MenuPage() {
  return (
    <main className="flex-grow">
      <PageHero
        title="Menu Kami"
        subtitle="Pilihan Terbaik dari Dapur & Bar Kami"
      />
      <MenuContent />
    </main>
  );
}
