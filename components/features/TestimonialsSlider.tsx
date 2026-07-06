"use client";

import React, { useState, useEffect, useRef } from "react";
import { testimonialsData } from "@/data/testimonials";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
      timeoutRef.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered, index]);

  return (
    <section
      className="bg-primary text-on-primary py-16 md:py-24 px-gutter relative overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[15rem]">format_quote</span>
      </div>

      <div className="max-w-container-max-width mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-on-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
            Testimoni
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl italic script-logo mb-2">
            Apa Kata Tamu Kami
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative min-h-[220px] flex items-center justify-center">
          {/* Controls - Left */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-primary-container border border-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer shadow-md select-none -translate-x-2 md:translate-x-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-on-primary" />
          </button>

          {/* Slider Cards viewport */}
          <div className="w-full overflow-hidden px-2 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Show items starting from index, wrapping around */}
              {Array.from({ length: 3 }).map((_, offset) => {
                const itemIndex = (index + offset) % total;
                const item = testimonialsData[itemIndex];

                // Hide third item on tablet, show only 1 on mobile
                const visibilityClass =
                  offset === 2
                    ? "hidden lg:flex"
                    : offset === 1
                    ? "hidden md:flex"
                    : "flex";

                return (
                  <motion.div
                    key={`${item.id}-${offset}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-primary-container p-6 rounded-xl border border-on-primary/10 flex flex-col justify-between h-full shadow-md min-h-[200px] ${visibilityClass}`}
                  >
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-0.5 text-secondary-container mb-3">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-[#f4dfcb]" />
                        ))}
                      </div>
                      
                      <p className="italic mb-6 opacity-80 text-xs md:text-sm leading-relaxed">
                        &ldquo;{item.content}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 border-t border-on-primary/10 pt-3">
                      <img
                        className="w-10 h-10 rounded-full object-cover bg-secondary-container"
                        src={item.avatarUrl}
                        alt={item.name}
                        loading="lazy"
                      />
                      <div>
                        <p className="font-bold text-xs">{item.name}</p>
                        <p className="text-[10px] opacity-60">{item.role}</p>
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
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-primary-container border border-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer shadow-md select-none translate-x-2 md:translate-x-0"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-on-primary" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === i ? "bg-on-primary w-6" : "bg-on-primary/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
