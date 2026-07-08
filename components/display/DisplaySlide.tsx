"use client";

import React from "react";
import { motion } from "framer-motion";
import { DisplayBoardItem } from "@/data/display";

interface DisplaySlideProps {
  currentIndex: number;
  displayBoardData: DisplayBoardItem[];
}

export default function DisplaySlide({ currentIndex, displayBoardData }: DisplaySlideProps) {
  const item = displayBoardData[currentIndex];

  if (!item) return null;

  // Render based on type
  if (item.type === "promo" || item.type === "bestseller") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4 }}
        className="h-full flex flex-col p-5 md:p-7 gap-3"
      >
        {/* Badge + Text */}
        <div className="space-y-1.5 flex-shrink-0">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black bg-white text-neutral-900 uppercase tracking-widest shadow-sm">
            {item.promoBadge}
          </span>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black leading-tight tracking-tight text-white">
            {item.title}
          </h2>
          <p className="text-xs md:text-sm text-white/85 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Product Image — white card, object-contain, no distortion */}
        <div className="flex-grow min-h-0 rounded-2xl overflow-hidden bg-white/95 shadow-xl border border-white/30 flex items-center justify-center p-3">
          <img
            src={item.mediaUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[200px] md:max-h-[240px] drop-shadow-md"
            style={{ imageRendering: "auto" }}
          />
        </div>

        {/* Price */}
        {item.price && (
          <div className="flex items-baseline gap-1.5 flex-shrink-0">
            <span className="text-white/70 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">Harga:</span>
            <span className="text-xl md:text-2xl font-black tracking-tight text-white">{item.price}</span>
          </div>
        )}
      </motion.div>
    );
  }

  if (item.type === "image") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-8 text-white overflow-hidden"
      >
        {/* Full-bleed background image */}
        <img 
          src={item.mediaUrl} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />

        <div className="relative z-20 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black bg-sky-500 text-white uppercase tracking-widest">
            Galeri Foto
          </span>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black leading-tight tracking-tight">
            {item.title}
          </h2>
          <p className="text-xs md:text-sm text-neutral-200 leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  }

  if (item.type === "video") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-8 text-white overflow-hidden"
      >
        {/* Full-bleed background video */}
        <video
          src={item.mediaUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />

        <div className="relative z-20 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black bg-teal-500 text-white uppercase tracking-widest">
            Cuplikan Video
          </span>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-black leading-tight tracking-tight">
            {item.title}
          </h2>
          <p className="text-xs md:text-sm text-neutral-200 leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return null;
}
