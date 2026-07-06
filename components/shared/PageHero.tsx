"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function PageHero({
  title,
  subtitle = "Sejak 1998 — Seni Pemanggangan Biji Kopi",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
}: PageHeroProps) {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover scale-105 animate-ken-burns"
          alt={title}
          src={imageUrl}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 text-center px-gutter max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-on-primary/70 font-label-md text-xs tracking-[0.3em] mb-3 uppercase"
        >
          {subtitle}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-on-primary text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
