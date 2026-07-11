"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { displayBoardData } from "@/data/display";
import { menuData } from "@/data/menu";
import DisplayMenu from "@/components/display/DisplayMenu";
import DisplaySlide from "@/components/display/DisplaySlide";

export default function DisplayClient() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle Fullscreen API
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen().catch(console.error);
    } else {
      await document.exitFullscreen().catch(console.error);
    }
  };

  // Auto-reload every 30 minutes for fresh data
  useEffect(() => {
    const reloadTimer = setInterval(() => {
      window.location.reload();
    }, 30 * 60 * 1000);
    return () => clearInterval(reloadTimer);
  }, []);

  const totalSlides = displayBoardData.length || 4;
  const currentSlide = displayBoardData[currentIndex];
  const slideDuration = currentSlide?.duration || 8000;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!isPlaying) return;
    if (currentSlide?.type === "video") return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides, currentSlide?.type, slideDuration]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const coffeeItems       = menuData.filter((i) => i.category === "Coffee");
  const nonCoffeeItems    = menuData.filter((i) => i.category === "Non Coffee");
  const teaItems          = menuData.filter((i) => i.category === "Tea");
  const foodItems         = menuData.filter((i) => i.category === "Food");
  const espressoBaseItems = menuData.filter((i) => i.category === "Espresso Base");
  const filterCoffeeItems = menuData.filter((i) => i.category === "Filter Coffee");

  const bgClass = currentSlide?.bgColor || "bg-neutral-900 text-white";

  return (
    // Mobile: full-height column scroll | Smart TV: fixed viewport side-by-side
    <div 
      onClick={() => {
        if (isFullscreen && document.fullscreenElement) {
          document.exitFullscreen().catch(console.error);
        }
      }}
      className="relative w-full bg-neutral-100 text-neutral-800 select-none font-sans
      flex flex-col min-h-screen overflow-x-hidden overflow-y-auto
      sm:flex-row sm:h-screen sm:w-screen sm:overflow-hidden"
    >

      {/* ── LEFT SIDE: Dynamic Slides ─────────────────────────────── */}
      <div
        className={`
          w-full flex-shrink-0 relative overflow-hidden flex flex-col justify-between
          h-[120vw]
          sm:w-1/2 sm:h-full sm:min-h-0
          border-b border-neutral-200 sm:border-b-0 sm:border-r
          ${bgClass}
        `}
        style={{ transition: "background-color 0.7s ease", transform: "translateZ(0)", willChange: "background-color" }}
      >
        {/* Slides */}
        <div className="absolute inset-0 z-0" style={{ transform: "translateZ(0)", willChange: "transform" }}>
          <AnimatePresence mode="wait">
            <DisplaySlide
              key={currentIndex}
              currentIndex={currentIndex}
              displayBoardData={displayBoardData}
              onVideoEnd={handleNext}
            />
          </AnimatePresence>
        </div>

        {/* Header */}
        {!isFullscreen && (
          <div className="p-4 md:p-5 flex justify-between items-center z-10 relative pointer-events-none">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 bg-black/20 hover:bg-black/35 border border-white/15 px-3.5 py-1.5 rounded-full text-white/90 cursor-pointer group pointer-events-auto"
              style={{ transition: "background-color 0.2s ease" }}
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5" style={{ transition: "transform 0.2s ease" }} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Kembali</span>
            </button>

            <div className="flex items-center gap-1.5 bg-black/20 border border-white/15 px-3.5 py-1.5 rounded-full text-white/90 text-[10px] font-black tracking-widest uppercase pointer-events-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow pointer-events-none" />

        {/* Bottom Controls */}
        {!isFullscreen && (
          <div className="p-4 md:p-5 flex items-center justify-between z-10 relative pointer-events-none">
          {/* Progress dots */}
          <div className="flex gap-1.5 pointer-events-auto">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="relative h-1 rounded-full overflow-hidden cursor-pointer"
                style={{
                  width: currentIndex === idx ? "1.25rem" : "0.4rem",
                  backgroundColor: currentIndex === idx ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                  transition: "width 0.3s ease, background-color 0.3s ease"
                }}
              >
                {currentIndex === idx && isPlaying && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: slideDuration / 1000, ease: "linear" }}
                    className="absolute inset-0 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <button
              onClick={toggleFullscreen}
              className="p-1.5 bg-white/90 hover:bg-white text-neutral-700 border border-neutral-200 rounded-full shadow-sm cursor-pointer"
              title="Fullscreen TV Mode"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 bg-white/90 hover:bg-white text-neutral-700 border border-neutral-200 rounded-full shadow-sm cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-1.5 bg-white/90 hover:bg-white text-neutral-700 border border-neutral-200 rounded-full shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 bg-white/90 hover:bg-white text-neutral-700 border border-neutral-200 rounded-full shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        )}
      </div>

      {/* ── RIGHT SIDE: Menu ──────────────────────────────────────── */}
      <DisplayMenu
        coffeeItems={coffeeItems}
        nonCoffeeItems={nonCoffeeItems}
        teaItems={teaItems}
        foodItems={foodItems}
        espressoBaseItems={espressoBaseItems}
        filterCoffeeItems={filterCoffeeItems}
      />


    </div>
  );
}
