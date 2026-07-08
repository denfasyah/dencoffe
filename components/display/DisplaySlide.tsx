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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full flex flex-col p-6 md:p-10 lg:p-12 gap-6 relative"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: 0.1 }}
          className="self-start"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black bg-yellow-400 text-neutral-900 uppercase tracking-widest shadow-lg shadow-yellow-500/30 border-2 border-yellow-300">
            {item.promoBadge}
          </span>
        </motion.div>

        {/* Text Section */}
        <div className="space-y-3 flex-shrink-0 z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl xl:text-6xl font-black leading-none tracking-tighter text-white drop-shadow-lg"
          >
            {item.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base text-white/90 leading-relaxed font-medium drop-shadow-md max-w-[85%]"
          >
            {item.description}
          </motion.p>
        </div>

        {/* Product Image — Floating Animation */}
        <div className="flex-grow min-h-0 flex items-center justify-center relative z-0">
          {/* Glowing Background Effect behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-white/20 blur-3xl rounded-full" />
          
          <motion.img
            initial={{ opacity: 0, scale: 0.5, y: 100, rotate: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -15, 0], 
              rotate: 0 
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              opacity: { duration: 0.6 },
              scale: { type: "spring", bounce: 0.5, duration: 0.8 },
              rotate: { type: "spring", bounce: 0.5, duration: 0.8 }
            }}
            src={item.mediaUrl}
            alt={item.title}
            className="w-auto h-full max-h-[250px] md:max-h-[350px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] z-10 relative"
          />
        </div>

        {/* Price Tag - Bouncy entrance */}
        {item.price && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: 0.4 }}
            className="flex items-baseline gap-2 flex-shrink-0 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20 self-start shadow-xl"
          >
            <span className="text-white/80 text-[10px] md:text-xs uppercase font-black tracking-widest">Harga Khusus</span>
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-white drop-shadow-md">{item.price}</span>
          </motion.div>
        )}
      </motion.div>
    );
  }

  if (item.type === "image") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-10 text-white overflow-hidden"
      >
        <img 
          src={item.mediaUrl} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

        <div className="relative z-20 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 rounded-full text-[10px] font-black bg-sky-500 text-white uppercase tracking-widest shadow-lg shadow-sky-500/30"
          >
            Galeri Foto
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl xl:text-5xl font-black leading-none tracking-tighter drop-shadow-lg"
          >
            {item.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-neutral-200 leading-relaxed max-w-md font-medium"
          >
            {item.description}
          </motion.p>
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
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-10 text-white overflow-hidden"
      >
        <video
          src={item.mediaUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

        <div className="relative z-20 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 rounded-full text-[10px] font-black bg-teal-500 text-white uppercase tracking-widest shadow-lg shadow-teal-500/30"
          >
            Cuplikan Video
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl xl:text-5xl font-black leading-none tracking-tighter drop-shadow-lg"
          >
            {item.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-neutral-200 leading-relaxed max-w-md font-medium"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return null;
}
