"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { testimonialsData } from "@/data/testimonials";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const total = testimonialsData.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(nextSlide, 4500);
    return () => clearInterval(id);
  }, [isHovered, nextSlide]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      className="bg-primary text-on-primary py-16 md:py-24 px-gutter relative overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BG deco */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none select-none">
        <span className="text-[15rem] leading-none font-serif">&ldquo;</span>
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-on-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-5xl italic script-logo">
            Apa Kata Tamu Kami
          </h2>
        </motion.div>

        <div className="relative">
          {/* Prev */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-container border border-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer shadow-md -translate-x-1 md:translate-x-0"
          >
            <ChevronLeft className="w-5 h-5 text-on-primary" />
          </button>

          <div className="overflow-hidden px-8 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[0, 1, 2].map((offset) => {
                const item = testimonialsData[(index + offset) % total];
                const hidden = offset === 2 ? "hidden lg:flex" : offset === 1 ? "hidden md:flex" : "flex";
                return (
                  <AnimatePresence key={`slot-${offset}`} mode="wait" custom={direction}>
                    <motion.div
                      key={`${item.id}-${offset}`}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={`bg-primary-container p-6 rounded-xl border border-on-primary/10 flex flex-col justify-between min-h-[200px] shadow-md ${hidden}`}
                    >
                      <div>
                        <div className="flex gap-0.5 mb-3">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current text-secondary-container" />
                          ))}
                        </div>
                        <p className="italic text-xs md:text-sm opacity-80 leading-relaxed mb-5">
                          &ldquo;{item.content}&rdquo;
                        </p>
                      </div>
                      <div className="flex flex-col border-t border-on-primary/10 pt-3">
                        <p className="font-bold text-xs">{item.name}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" />
                          </svg>
                          <span className="text-[10px] font-semibold text-amber-400 tracking-wider uppercase">{item.role}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              })}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-container border border-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer shadow-md translate-x-1 md:translate-x-0"
          >
            <ChevronRight className="w-5 h-5 text-on-primary" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`h-2 rounded-full transition-all cursor-pointer ${i === index ? "bg-on-primary w-6" : "bg-on-primary/30 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
