"use client";

import React, { useState, useCallback, useEffect } from "react";
import { galleryData } from "@/data/gallery";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryGrid() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const goPrev = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + galleryData.length) % galleryData.length);
  }, [modalIndex]);

  const goNext = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % galleryData.length);
  }, [modalIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (modalIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalIndex, goPrev, goNext]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (modalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalIndex]);

  // 4 foto pertama untuk 2 kolom kiri (2 kolom x 2 baris)
  const leftItems = galleryData.slice(0, 4);
  // Foto ke-5 (index 4) untuk panel besar kanan, spanning 2 baris
  const rightItem = galleryData[4];

  const leftPositions = [
    "col-start-1 row-start-1",
    "col-start-2 row-start-1",
    "col-start-1 row-start-2",
    "col-start-2 row-start-2",
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-background px-gutter" id="gallery">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
              Galeri Kami
            </span>
            <h2 className="font-headline-lg text-2xl md:text-4xl text-primary font-extrabold leading-tight">
              Abadikan Suasana Kami
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-3 h-[280px] sm:h-[340px] md:h-[420px] max-w-5xl mx-auto">
            {leftItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal(index)}
                className={`${leftPositions[index]} overflow-hidden rounded-lg relative group cursor-pointer shadow-md`}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.alt}
                  src={item.imageUrl}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-on-primary text-primary px-3 py-1 rounded-full font-label-md font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-3 h-3" />
                    Perbesar
                  </span>
                </div>
              </div>
            ))}

            {/* Foto besar kanan */}
            {rightItem && (
              <div
                onClick={() => openModal(4)}
                className="col-start-3 row-start-1 row-span-2 overflow-hidden rounded-lg relative group cursor-pointer shadow-md"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={rightItem.alt}
                  src={rightItem.imageUrl}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/70 flex flex-col items-center justify-center text-on-primary">
                  <span className="text-2xl md:text-4xl font-extrabold tracking-wider">
                    {galleryData.length - 4}+
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 opacity-90">
                    Lihat Galeri
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Image Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            key="gallery-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              key={modalIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={galleryData[modalIndex].imageUrl}
                alt={galleryData[modalIndex].alt}
                className="rounded-2xl shadow-2xl object-contain max-w-[85vw] max-h-[85vh] block"
                style={{ maxWidth: "min(85vw, 900px)" }}
              />

              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Tutup galeri"
                className="absolute -top-3 -right-3 md:top-3 md:right-3 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Prev arrow */}
              <button
                onClick={goPrev}
                aria-label="Foto sebelumnya"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next arrow */}
              <button
                onClick={goNext}
                aria-label="Foto berikutnya"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {modalIndex + 1} / {galleryData.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}