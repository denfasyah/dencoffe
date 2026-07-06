"use client";

import React, { useState } from "react";
import { aboutData } from "@/data/about";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-background py-section-gap-desktop relative overflow-hidden" id="about">
      <div className="max-w-container-max-width mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full -z-10 animate-pulse"></div>
          <img
            className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover"
            alt={aboutData.imageAlt}
            src={aboutData.imageUrl}
          />
          <div className="absolute -bottom-10 -right-10 bg-primary p-8 text-on-primary rounded-xl hidden md:block shadow-lg">
            <p className="font-headline-md text-headline-md leading-none mb-1">
              {aboutData.yearsOfCraft}
            </p>
            <p className="font-label-md text-label-md opacity-70">
              {aboutData.yearsLabel}
            </p>
          </div>
        </div>

        <div>
          <span className="text-primary/60 font-label-md text-label-md tracking-widest uppercase mb-4 block">
            {aboutData.tagline}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">
            {aboutData.title}
          </h2>
          
          <div className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed space-y-4">
            <p>{aboutData.mainParagraph}</p>
            
            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 text-on-surface-variant/90 border-t border-primary/10 mt-2">
                    {aboutData.extendedParagraph}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mb-8 text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary/70 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            {showMore ? "Sembunyikan" : "Lihat Selengkapnya"}
            <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}>
              keyboard_arrow_down
            </span>
          </button>

          <div className="space-y-6">
            {aboutData.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-primary/5 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">{feature.title}</h4>
                  <p className="text-on-surface-variant">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
