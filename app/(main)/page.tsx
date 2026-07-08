import type { Metadata } from "next";
import React from "react";

import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Features from "@/components/features/Features";
import MenuSection from "@/components/features/MenuSection";
import TestimonialsSlider from "@/components/features/TestimonialsSlider";
import GalleryGrid from "@/components/features/GalleryGrid";
import ContactBar from "@/components/features/ContactBar";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Kedai Kopi Bang Jenggot — Tempat ngopi nyaman di Bekasi Barat. Menu kopi, non-kopi, tea, dan makanan ringan dengan suasana santai dan harga bersahabat. Buka Selasa–Minggu.",
  openGraph: {
    title: "Kedai Kopi Bang Jenggot | Kopi Berkualitas di Bekasi",
    description:
      "Nikmati kopi, vanilla latte, dan berbagai minuman favorit di Kedai Kopi Bang Jenggot, Bekasi Barat. Suasana nyaman, harga terjangkau.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <MenuSection />
      <TestimonialsSlider />
      <GalleryGrid />
      <ContactBar />
    </>
  );
}
