"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contactData } from "@/data/contact";

export default function Hero() {
  return (
    <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover scale-105 animate-ken-burns"
          alt="Suasana kedai kopi premium Denbiz Coffee"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 text-center px-gutter max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-block text-on-primary/80 font-label-md text-sm tracking-[0.3em] mb-4 uppercase"
        >
          Sejak 1998 &mdash; Seni Pemanggangan Biji Kopi
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-on-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.15] font-extrabold"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Nikmati Cita Rasa Kopi dalam <br />
          <span className="italic script-logo font-normal lowercase text-surface-container-low text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2">
            bentuknya yang paling elegan.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            className="w-full sm:w-auto bg-on-primary text-primary px-8 py-3.5 rounded-full font-label-md text-sm font-bold hover:bg-surface-variant transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            href="#menu"
          >
            Jelajahi Menu
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            className="w-full sm:w-auto text-on-primary border border-on-primary/30 backdrop-blur-sm px-8 py-3.5 rounded-full font-label-md text-sm font-bold hover:bg-on-primary/10 transition-all text-center hover:scale-105 active:scale-95"
            href={contactData.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservasi WA
          </a>
        </motion.div>
      </div>
    </header>
  );
}
