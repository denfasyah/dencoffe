import React from "react";

import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Features from "@/components/features/Features";
import MenuSection from "@/components/features/MenuSection";
import TestimonialsSlider from "@/components/features/TestimonialsSlider";
import GalleryGrid from "@/components/features/GalleryGrid";
import ContactBar from "@/components/features/ContactBar";


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
