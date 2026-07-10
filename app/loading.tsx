"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background px-6">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />

      <div className="flex flex-col items-center max-w-xs text-center relative z-10">
        {/* Pulsing Cup with Steaming Effect */}
        <div className="relative mb-6">
          {/* Steaming lines */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
            <motion.span
              animate={{ y: [-2, -10, -2], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
              className="w-1 h-4 bg-primary/60 rounded-full"
            />
            <motion.span
              animate={{ y: [-2, -14, -2], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="w-1.5 h-5 bg-primary/40 rounded-full"
            />
            <motion.span
              animate={{ y: [-2, -10, -2], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
              className="w-1 h-4 bg-primary/60 rounded-full"
            />
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner"
          >
            <Coffee className="w-10 h-10" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-3"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Menyeduh Halaman
        </motion.p>

        {/* Custom Progress Bar */}
        <div className="w-36 h-1 bg-primary/15 rounded-full overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full bg-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
