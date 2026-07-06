import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactContent from "@/components/features/ContactContent";

export const metadata: Metadata = {
  title: "Kontak | Denbiz Coffee",
  description: "Hubungi kami atau kunjungi Denbiz Coffee. Formulir kontak, lokasi, dan informasi lengkap di sini.",
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
