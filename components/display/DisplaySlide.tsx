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
        className="h-full w-full flex flex-col md:flex-row relative overflow-hidden p-6 md:p-10 lg:p-12 gap-6"
      >
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between z-10">
          <div className="flex flex-col gap-6">
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
            <div className="space-y-4 pr-4">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white drop-shadow-lg"
              >
                {item.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}
                className="text-base lg:text-lg text-white/90 leading-relaxed font-medium drop-shadow-md"
              >
                {item.description}
              </motion.p>
            </div>
          </div>

          {/* Price Tag - Bouncy entrance */}
          {item.price && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-start gap-1 bg-white/10 p-4 lg:p-6 rounded-2xl backdrop-blur-md border border-white/20 self-start shadow-2xl mt-8 mb-8 md:mb-12"
            >
              <span className="text-white/90 text-xs lg:text-sm uppercase font-black tracking-widest">Harga Khusus</span>
              <span className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-md">{item.price}</span>
            </motion.div>
          )}
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center relative z-0">
          {/* Glowing Background Effect behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-white/20 blur-[80px] rounded-full" />
          
          <motion.img
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -20, 0], 
              rotate: 0 
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              opacity: { duration: 0.8 },
              scale: { type: "spring", bounce: 0.4, duration: 1 },
              rotate: { type: "spring", bounce: 0.4, duration: 1 }
            }}
            src={item.mediaUrl}
            alt={item.title}
            className="w-auto h-auto max-w-full max-h-[85%] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] z-10 relative"
          />
        </div>
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
