import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Features from "@/components/features/Features";
import MenuSection from "@/components/features/MenuSection";
import TestimonialsSlider from "@/components/features/TestimonialsSlider";
import GalleryGrid from "@/components/features/GalleryGrid";
import ContactBar from "@/components/features/ContactBar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <MenuSection />
        <TestimonialsSlider />
        <GalleryGrid />
        <ContactBar />
      </main>
      <Footer />
    </>
  );
}
