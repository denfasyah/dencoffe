"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DisplayBoardItem } from "@/data/display";

interface DisplaySlideProps {
  currentIndex: number;
  displayBoardData: DisplayBoardItem[];
  onVideoEnd?: () => void;
}

export default function DisplaySlide({ currentIndex, displayBoardData, onVideoEnd }: DisplaySlideProps) {
  const item = displayBoardData[currentIndex];

  if (!item) return null;

  // ─── PROMO / BESTSELLER ────────────────────────────────────────────────────
  if (item.type === "promo" || item.type === "bestseller") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{ transform: "translateZ(0)", willChange: "transform" }}
        className="absolute inset-0 w-full h-full overflow-hidden flex flex-col sm:flex-row"
      >
        {/* ── TEXT SIDE ── */}
        <div className="w-full sm:w-1/2 flex-1 sm:h-full flex flex-col justify-center px-6 pt-12 pb-4 sm:py-0 sm:px-8 lg:px-10 z-10 shrink-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.7, delay: 0.1 }}
            className="mb-3 self-start"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black bg-yellow-400 text-neutral-900 uppercase tracking-widest border-2 border-yellow-300">
              {item.promoBadge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-white mb-2 sm:mb-3"
          >
            {item.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.7, delay: 0.3 }}
            className="text-xs sm:text-xs md:text-base text-white/85 leading-relaxed font-medium mb-4 sm:mb-6 max-w-xs"
          >
            {item.description}
          </motion.p>

          {/* Price */}
          {item.price && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.7, delay: 0.4 }}
              className="inline-flex flex-col items-start gap-1 py-4 self-start"
            >
              <span className="text-white/75 text-[10px] uppercase font-black tracking-widest">
                Harga Khusus
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          )}
        </div>

        {/* ── IMAGE SIDE ── */}
        <div className="w-full sm:w-1/2 flex-1 sm:h-full flex items-center justify-center relative z-0 px-6 pb-6 sm:pb-0 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ opacity: { duration: 0.5 }, scale: { type: "spring", bounce: 0.25, duration: 0.8 } }}
            className="relative w-full h-[75%]"
          >
            <Image
              src={item.mediaUrl}
              alt={item.title}
              fill
              className="object-contain"
              sizes="50vw"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // ─── IMAGE TYPE ────────────────────────────────────────────────────────────
  if (item.type === "image") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transform: "translateZ(0)", willChange: "transform" }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-8 lg:p-10 text-white overflow-hidden"
      >
        <Image
          src={item.mediaUrl}
          alt={item.title}
          fill
          className="object-cover z-0"
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)", transform: "translateZ(0)" }} />

        <div className="relative z-20 space-y-2">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 rounded-full text-[10px] font-black bg-sky-500 text-white uppercase tracking-widest"
          >
            Galeri Foto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter"
          >
            {item.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed max-w-sm font-medium"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // ─── VIDEO TYPE ────────────────────────────────────────────────────────────
  if (item.type === "video") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{ transform: "translateZ(0)", willChange: "transform" }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-8 lg:p-10 text-white overflow-hidden"
      >
        <video
          src={item.mediaUrl}
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)", transform: "translateZ(0)" }} />

        <div className="relative z-20 space-y-2">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 rounded-full text-[10px] font-black bg-teal-500 text-white uppercase tracking-widest"
          >
            Cuplikan Video
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter"
          >
            {item.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed max-w-sm font-medium"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return null;
}
