"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
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

  const totalSlides = displayBoardData.length || 4;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Group menu data by categories exactly matching the image
  const coffeeItems = menuData.filter((item) => item.category === "Coffee");
  const nonCoffeeItems = menuData.filter((item) => item.category === "Non Coffee");
  const teaItems = menuData.filter((item) => item.category === "Tea");
  const foodItems = menuData.filter((item) => item.category === "Food");
  const espressoBaseItems = menuData.filter((item) => item.category === "Espresso Base");
  const filterCoffeeItems = menuData.filter((item) => item.category === "Filter Coffee");

  const currentSlide = displayBoardData[currentIndex];
  const bgClass = currentSlide?.bgColor || "bg-neutral-900 text-white";

  return (
    <div className="relative min-h-screen lg:h-screen w-full lg:w-screen bg-neutral-100 text-neutral-800 overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row select-none font-sans">
      
      {/* 1. LEFT SIDE: Dynamic Slides (Solid Colors / Full Bleed Media) */}
      <div className={`w-full lg:w-1/2 h-auto min-h-[440px] md:min-h-[480px] lg:h-full relative overflow-hidden flex flex-col justify-between ${bgClass} border-b lg:border-b-0 lg:border-r border-neutral-200 transition-colors duration-500`}>
        
        {/* Floating Header Back Button */}
        <div className="p-4 md:p-6 flex justify-between items-center z-10">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-black/15 hover:bg-black/30 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white/90 transition-all duration-300 shadow-sm cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Kembali</span>
          </button>

          <div className="flex items-center gap-1.5 bg-black/15 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white/90 text-[10px] font-black tracking-widest uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex-grow flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <DisplaySlide 
              key={currentIndex} 
              currentIndex={currentIndex} 
              displayBoardData={displayBoardData} 
            />
          </AnimatePresence>
        </div>

        {/* Bottom Controls */}
        <div className="p-4 md:p-6 flex items-center justify-between z-10 border-t border-black/5 bg-black/5 backdrop-blur-xs">
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="group relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  width: currentIndex === idx ? "1.25rem" : "0.4rem",
                  backgroundColor: currentIndex === idx ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)"
                }}
              >
                {currentIndex === idx && isPlaying && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute inset-0 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
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
      </div>

      {/* 2. RIGHT SIDE: Fixed Complete Menu Component (White Background) */}
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
