"use client";

import React, { useState, useEffect, useRef } from "react";
import { testimonialsData } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonialsData.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered]);

  return (
    <section
      className="bg-primary text-on-primary py-section-gap-desktop px-gutter relative overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[20rem]">format_quote</span>
      </div>

      <div className="max-w-container-max-width mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-on-primary/60 font-label-md text-label-md tracking-widest uppercase mb-4 block">
            Testimoni
          </span>
          <h2 className="font-headline-lg text-headline-lg italic script-logo mb-4">
            Apa Kata Tamu Kami
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          {/* Controls - Left */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 w-12 h-12 rounded-full bg-primary-container border border-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer shadow-md select-none -translate-x-2 md:translate-x-0"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {/* Slider Cards viewport */}
          <div className="w-full overflow-hidden px-4 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Show 3 items starting from index, wrapping around */}
              {Array.from({ length: 3 }).map((_, offset) => {
                const itemIndex = (index + offset) % total;
                const item = testimonialsData[itemIndex];

                // Hide third item on tablet, show only 1 on mobile
                const visibilityClass =
                  offset === 2
                    ? "hidden lg:block"
                    : offset === 1
                    ? "hidden md:block"
                    : "block";

                return (
                  <motion.div
                    key={`${item.id}-${offset}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-primary-container p-8 rounded-xl border border-on-primary/10 flex flex-col justify-between h-full shadow-lg ${visibilityClass}`}
                  >
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-secondary-container mb-4">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined fill-1">
                            star
                          </span>
                        ))}
                      </div>
                      
                      <p className="italic mb-8 opacity-80 text-body-md leading-relaxed">
                        &ldquo;{item.content}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-on-primary/10 pt-4">
                      <img
                        className="w-12 h-12 rounded-full object-cover bg-secondary-container"
                        src={item.avatarUrl}
                        alt={item.name}
                      />
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-xs opacity-60">{item.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Controls - Right */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 w-12 h-12 rounded-full bg-primary-container border border-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer shadow-md select-none translate-x-2 md:translate-x-0"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                index === i ? "bg-on-primary w-8" : "bg-on-primary/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
