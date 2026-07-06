import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import MenuContent from "@/components/features/MenuContent";

export const metadata: Metadata = {
  title: "Menu | Denbiz Coffee",
  description: "Jelajahi seluruh pilihan minuman kopi, non-kopi, dan makanan premium di Denbiz Coffee.",
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
