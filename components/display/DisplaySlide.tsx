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

  // ─── PROMO / BESTSELLER ───────────────────────────────────────────────────
  if (item.type === "promo" || item.type === "bestseller") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full overflow-hidden
          flex flex-col                   
          md:flex-row"                    
      >
        {/* ── TEXT SECTION (top on mobile, left on desktop) ── */}
        <div className="
          order-1
          w-full md:w-1/2
          flex flex-col justify-center
          px-6 pt-20 pb-4
          md:px-10 md:pt-28 md:pb-28
          z-10 shrink-0
        ">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: 0.1 }}
            className="mb-3 self-start"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-black bg-yellow-400 text-neutral-900 uppercase tracking-widest shadow-lg border-2 border-yellow-300">
              {item.promoBadge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-6xl font-black leading-tight tracking-tighter text-white drop-shadow-lg mb-2 md:mb-4"
          >
            {item.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base text-white/85 leading-relaxed font-medium drop-shadow-md mb-4 md:mb-8 line-clamp-2 md:line-clamp-none"
          >
            {item.description}
          </motion.p>

          {/* Price Tag */}
          {item.price && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.4 }}
              className="inline-flex flex-col items-start gap-0.5
                bg-white/15 backdrop-blur-md
                border border-white/25
                rounded-2xl shadow-2xl
                px-5 py-3 md:px-6 md:py-4
                self-start"
            >
              <span className="text-white/80 text-[10px] md:text-xs uppercase font-black tracking-widest">
                Harga Khusus
              </span>
              <span className="text-2xl md:text-5xl font-black tracking-tighter text-white drop-shadow-md whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          )}
        </div>

        {/* ── IMAGE SECTION (bottom on mobile, right on desktop) ── */}
        <div className="
          order-2
          w-full md:w-1/2
          flex-1 md:h-full
          flex items-center justify-center
          relative z-0
          pb-20 md:pb-0
          md:px-8 lg:px-12
        ">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-white/20 blur-[70px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0], rotate: 0 }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              opacity: { duration: 0.8 },
              scale: { type: "spring", bounce: 0.4, duration: 1 },
              rotate: { type: "spring", bounce: 0.4, duration: 1 },
            }}
            className="relative w-full h-full max-w-[320px] md:max-w-none mx-auto"
          >
            <Image
              src={item.mediaUrl}
              alt={item.title}
              fill
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)]"
              sizes="(max-width: 768px) 80vw, 50vw"
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
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-10 pb-24 md:pb-28 text-white overflow-hidden"
      >
        <Image
          src={item.mediaUrl}
          alt={item.title}
          fill
          className="object-cover z-0"
          sizes="100vw"
          priority
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

  // ─── VIDEO TYPE ────────────────────────────────────────────────────────────
  if (item.type === "video") {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 md:p-10 pb-24 md:pb-28 text-white overflow-hidden"
      >
        <video
          src={item.mediaUrl}
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
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
