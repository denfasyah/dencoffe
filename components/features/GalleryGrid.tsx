"use client";

import React from "react";
import { galleryData } from "@/data/gallery";
import Swal from "sweetalert2";

export default function GalleryGrid() {
  const openGalleryModal = (startIndex: number) => {
    let currentIndex = startIndex;

    const showSwal = () => {
      const currentItem = galleryData[currentIndex];

      Swal.fire({
        title: `<span style="font-family: 'Manrope', sans-serif; font-weight: 700; color: #2d1b14">${currentItem.title}</span>`,
        html: `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
            <div style="width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(45,27,20,0.15); background: #fdf9f4;">
              <img 
                src="${currentItem.imageUrl}" 
                alt="${currentItem.alt}" 
                style="width: 100%; max-height: 55vh; object-fit: cover; display: block;"
              />
            </div>
            <p style="margin-top: 16px; font-family: 'Work Sans', sans-serif; font-size: 15px; color: #4f4441; font-style: italic;">
              ${currentItem.alt}
            </p>
            <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 20px; gap: 12px;">
              <button 
                id="swal-prev-btn" 
                style="flex: 1; background: #6b5c4c; color: #ffffff; border: none; padding: 12px 20px; border-radius: 9999px; font-family: 'Manrope', sans-serif; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.3s;"
              >
                <span class="material-symbols-outlined" style="font-size: 18px;">arrow_back</span>
                Sebelumnya
              </button>
              <button 
                id="swal-next-btn" 
                style="flex: 1; background: #2d1b14; color: #ffffff; border: none; padding: 12px 20px; border-radius: 9999px; font-family: 'Manrope', sans-serif; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.3s;"
              >
                Berikutnya
                <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
              </button>
            </div>
          </div>
        `,
        background: "#fdf9f4",
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: '<span class="material-symbols-outlined" style="color: #2d1b14;">close</span>',
        width: "600px",
        didOpen: () => {
          // Bind button listeners
          const prevBtn = document.getElementById("swal-prev-btn");
          const nextBtn = document.getElementById("swal-next-btn");

          if (prevBtn) {
            prevBtn.addEventListener("click", () => {
              currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
              showSwal();
            });
            // hover state helper
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
            // hover state helper
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

  return (
    <section className="py-section-gap-desktop bg-background px-gutter" id="gallery">
      <div className="max-w-container-max-width mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary/60 font-label-md text-label-md tracking-widest uppercase mb-4 block">
            Galeri Kami
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Abadikan Suasana Kami
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.map((item, index) => {
            const isLarge = item.sizeClass ? item.sizeClass : "aspect-square";
            return (
              <div
                key={item.id}
                onClick={() => openGalleryModal(index)}
                className={`${isLarge} overflow-hidden rounded-lg relative group cursor-pointer shadow-md`}
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  alt={item.alt}
                  src={item.imageUrl}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-on-primary text-primary px-6 py-2.5 rounded-full font-label-md font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    Perbesar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
