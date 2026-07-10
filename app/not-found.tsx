"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 relative"
        >
          <Coffee className="w-12 h-12" strokeWidth={1.5} />
          {/* Steam animation lines */}
          <span className="absolute top-4 w-1 h-3 bg-primary/40 rounded-full animate-bounce delay-100 left-[42%]" />
          <span className="absolute top-2 w-1.5 h-4 bg-primary/30 rounded-full animate-bounce delay-300 left-[50%]" />
          <span className="absolute top-3 w-1 h-3 bg-primary/40 rounded-full animate-bounce delay-500 left-[58%]" />
        </motion.div>

        {/* Text */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block text-xs uppercase tracking-[0.25em] text-primary/60 font-semibold mb-3"
        >
          Error 404
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Aroma Kopi Hilang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-on-background/70 text-sm leading-relaxed mb-8 font-medium"
        >
          Sepertinya cangkir kopi Anda kosong atau halaman yang Anda cari telah berpindah tempat. Mari kembali ke bar utama kami.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
