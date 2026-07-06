"use client";

import React, { useState } from "react";
import { aboutData } from "@/data/about";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Leaf, Award } from "lucide-react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Leaf":
        return <Leaf className="w-5 h-5" />;
      case "Award":
        return <Award className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden" id="about">
      <div className="max-w-container-max-width mx-auto px-gutter">
        
        {/* Mobile Heading (Visible on mobile, hidden on desktop) */}
        <div className="block md:hidden mb-8 text-center">
          <span className="text-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
            {aboutData.tagline}
          </span>
          <h2 className="font-headline-lg text-3xl text-primary leading-tight font-extrabold">
            {aboutData.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Section - Displays below the mobile heading on mobile */}
          <div className="relative order-1 md:order-1">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-full -z-10 animate-pulse"></div>
            <img
              className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover max-w-sm mx-auto"
              alt={aboutData.imageAlt}
              src={aboutData.imageUrl}
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 text-on-primary rounded-xl hidden md:block shadow-lg">
              <p className="font-headline-md text-2xl leading-none mb-1 font-bold">
                {aboutData.yearsOfCraft}
              </p>
              <p className="font-label-md text-xs opacity-70">
                {aboutData.yearsLabel}
              </p>
            </div>
          </div>

          {/* Text & Content Section */}
          <div className="order-2 md:order-2">
            {/* Desktop Heading (Hidden on mobile) */}
            <div className="hidden md:block">
              <span className="text-primary/60 font-label-md text-sm tracking-widest uppercase mb-4 block">
                {aboutData.tagline}
              </span>
              <h2 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-8 leading-tight font-extrabold">
                {aboutData.title}
              </h2>
            </div>
            
            <div className="font-body-lg text-base text-on-surface-variant mb-6 leading-relaxed space-y-4">
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
                    <p className="pt-2 text-on-surface-variant/90 border-t border-primary/10 mt-2 text-sm">
                      {aboutData.extendedParagraph}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mb-8 text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary/70 transition-colors inline-flex items-center gap-1 cursor-pointer text-sm"
            >
              {showMore ? "Sembunyikan" : "Lihat Selengkapnya"}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
            </button>

            <div className="space-y-5">
              {aboutData.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-primary/5 p-2 rounded-lg text-primary flex-shrink-0">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{feature.title}</h4>
                    <p className="text-on-surface-variant text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
