"use client";

import React from "react";
import { galleryData } from "@/data/gallery";
import Swal from "sweetalert2";
import { ZoomIn } from "lucide-react";

export default function GalleryGrid() {
  const openGalleryModal = (startIndex: number) => {
    let currentIndex = startIndex;

    const showSwal = () => {
      const currentItem = galleryData[currentIndex];

      Swal.fire({
        title: `<span style="font-family: 'Manrope', sans-serif; font-weight: 700; color: #2d1b14">${currentItem.title}</span>`,
        html: `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
            <div style="width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 20px rgba(45,27,20,0.1); background: #fdf9f4;">
              <img 
                src="${currentItem.imageUrl}" 
                alt="${currentItem.alt}" 
                style="width: 100%; max-height: 50vh; object-fit: cover; display: block;"
              />
            </div>
            <p style="margin-top: 12px; font-family: 'Work Sans', sans-serif; font-size: 13px; color: #4f4441; font-style: italic;">
              ${currentItem.alt}
            </p>
            <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 16px; gap: 10px;">
              <button 
                id="swal-prev-btn" 
                style="flex: 1; background: #6b5c4c; color: #ffffff; border: none; padding: 10px 16px; border-radius: 9999px; font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: background 0.3s;"
              >
                &larr; Sebelumnya
              </button>
              <button 
                id="swal-next-btn" 
                style="flex: 1; background: #2d1b14; color: #ffffff; border: none; padding: 10px 16px; border-radius: 9999px; font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: background 0.3s;"
              >
                Berikutnya &rarr;
              </button>
            </div>
          </div>
        `,
        background: "#fdf9f4",
        showConfirmButton: false,
        showCloseButton: true,
        width: "550px",
        didOpen: () => {
          const prevBtn = document.getElementById("swal-prev-btn");
          const nextBtn = document.getElementById("swal-next-btn");

          if (prevBtn) {
            prevBtn.addEventListener("click", () => {
              currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
              showSwal();
            });
            prevBtn.addEventListener("mouseover", () => {
              prevBtn.style.background = "#4f4441";
            });
            prevBtn.addEventListener("mouseout", () => {
              prevBtn.style.background = "#6b5c4c";
            });
          }

          if (nextBtn) {
            nextBtn.addEventListener("click", () => {
              currentIndex = (currentIndex + 1) % galleryData.length;
              showSwal();
            });
            nextBtn.addEventListener("mouseover", () => {
              nextBtn.style.background = "#4a2c21";
            });
            nextBtn.addEventListener("mouseout", () => {
              nextBtn.style.background = "#2d1b14";
            });
          }
        }
      });
    };

    showSwal();
  };

  // 4 foto pertama untuk 2 kolom kiri (2 kolom x 2 baris)
  const leftItems = galleryData.slice(0, 4);
  // Foto ke-5 (index 4) untuk panel besar kanan, spanning 2 baris
  const rightItem = galleryData[4];

  // Posisi eksplisit tiap foto kiri: col1-row1, col2-row1, col1-row2, col2-row2
  const leftPositions = [
    "col-start-1 row-start-1",
    "col-start-2 row-start-1",
    "col-start-1 row-start-2",
    "col-start-2 row-start-2",
  ];

  return (
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

        {/* Gallery Grid: 3 kolom x 2 baris. Kolom 1&2 = 4 foto kecil, kolom 3 = 1 foto besar */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-3 h-[280px] sm:h-[340px] md:h-[420px] max-w-5xl mx-auto">
          {leftItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openGalleryModal(index)}
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

          {/* Foto besar kanan, kolom ke-3, spanning 2 baris */}
          {rightItem && (
            <div
              onClick={() => openGalleryModal(4)}
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
  );
}