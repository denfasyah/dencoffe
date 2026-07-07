"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { displayBoardData } from "@/data/display";

export default function DisplayPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayBoardData.length);
    }, 6000); // 6 seconds auto-play

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayBoardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + displayBoardData.length) % displayBoardData.length);
  };

  const currentItem = displayBoardData[currentIndex];

  return (
    <div className="relative h-screen w-screen bg-neutral-950 text-white overflow-hidden select-none font-sans">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Zooming Image */}
            <motion.img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="object-cover w-full h-full"
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Header & Back Button */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-3 bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 shadow-lg cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium tracking-wide">Kembali</span>
        </button>

        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-white/80 text-sm font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Denbiz Coffee Board
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Promo Badge */}
              {currentItem.promoBadge && (
                <span className="inline-block bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {currentItem.promoBadge}
                </span>
              )}

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <p className="text-amber-400 text-lg md:text-xl font-medium tracking-wide uppercase">
                  {currentItem.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                  {currentItem.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
                {currentItem.description}
              </p>

              {/* Price / Call to Action */}
              {currentItem.price && (
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-neutral-400 text-sm tracking-wider uppercase font-medium">Harga Spesial:</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]">
                    {currentItem.price}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side Navigation Controls */}
      <div className="absolute right-8 bottom-8 z-20 flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all cursor-pointer"
          title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress / Slide Indicator */}
      <div className="absolute left-8 bottom-8 z-20 flex gap-2">
        {displayBoardData.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              width: currentIndex === idx ? "2.5rem" : "0.75rem",
              backgroundColor: currentIndex === idx ? "rgba(245, 158, 11, 0.4)" : "rgba(255, 255, 255, 0.2)"
            }}
          >
            {currentIndex === idx && isPlaying && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 bg-amber-400"
              />
            )}
            {currentIndex === idx && !isPlaying && (
              <div className="absolute inset-0 bg-amber-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
