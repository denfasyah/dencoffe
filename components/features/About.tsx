"use client";

import React from "react";
import Link from "next/link";
import { aboutData } from "@/data/about";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Leaf, Award } from "lucide-react";
import { useRef } from "react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Leaf": return <Leaf className="w-5 h-5" />;
    case "Award": return <Award className="w-5 h-5" />;
    default: return null;
  }
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden" id="about">
      <div ref={ref} className="max-w-5xl mx-auto px-gutter">

        {/* Mobile Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block md:hidden mb-8 text-center"
        >
          <span className="text-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
            {aboutData.tagline}
          </span>
          <h2 className="font-extrabold text-3xl text-primary leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
            {aboutData.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative w-full aspect-[4/5] max-w-sm mx-auto"
          >
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-full -z-10" />
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-2xl object-cover"
              alt={aboutData.imageAlt}
              src={aboutData.imageUrl}
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 text-on-primary rounded-xl hidden md:block shadow-lg z-10">
              <p className="font-bold text-2xl leading-none mb-1">{aboutData.yearsOfCraft}</p>
              <p className="text-xs opacity-70">{aboutData.yearsLabel}</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hidden md:block">
              <span className="text-primary/60 font-label-md text-xs tracking-widest uppercase mb-3 block">
                {aboutData.tagline}
              </span>
              <h2 className="font-extrabold text-4xl lg:text-5xl text-primary mb-6 leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                {aboutData.title}
              </h2>
            </div>

            <p className="text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
              {aboutData.mainParagraph}
            </p>

            <Link
              href="/about"
              className="mb-8 text-primary font-bold border-b-2 border-primary pb-0.5 hover:text-primary/70 transition-colors inline-flex items-center gap-1 cursor-pointer text-sm"
            >
              Lihat Selengkapnya
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>

            <div className="space-y-4 mt-8">
              {aboutData.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-primary/5 p-2 rounded-lg text-primary flex-shrink-0">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{feature.title}</h4>
                    <p className="text-on-surface-variant text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
