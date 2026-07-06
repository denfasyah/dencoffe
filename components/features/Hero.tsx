"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover scale-105 animate-ken-burns"
          alt="Suasana kedai kopi premium Denbiz Coffee"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center px-gutter max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-on-primary/80 font-label-md text-label-md tracking-[0.3em] mb-6 uppercase"
        >
          Sejak 1998 &mdash; Seni Pemanggangan Biji Kopi
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-[1.1]"
        >
          Nikmati Cita Rasa Kopi dalam <br />
          <span className="italic script-logo font-normal lowercase text-surface-container-low">
            bentuknya yang paling elegan.
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            className="bg-on-primary text-primary px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-surface-variant transition-all flex items-center gap-2"
            href="#menu"
          >
            Jelajahi Menu Kami
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          <a
            className="text-on-primary border border-on-primary/30 backdrop-blur-sm px-10 py-4 rounded-full font-label-md text-label-md font-bold hover:bg-on-primary/10 transition-all"
            href="#gallery"
          >
            Suasana Kedai
          </a>
        </motion.div>
      </div>
    </header>
  );
}
