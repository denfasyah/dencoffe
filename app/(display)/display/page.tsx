"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Clock,
  Phone,
  MapPin,
  Globe,
  Coffee,
  Sparkles,
  Utensils
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { displayBoardData } from "@/data/display";
import { menuData } from "@/data/menu";
import { contactData } from "@/data/contact";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function DisplayPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Total slides is 4:
  // Slide 0: Promo (from displayBoardData[0])
  // Slide 1: Best Seller (from displayBoardData[1])
  // Slide 2: Menu Lengkap List
  // Slide 3: Info Cafe
  const totalSlides = 4;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 12000); // 12 seconds auto-play so users have ample time to read the menu list

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Group menu data for Slide 3
  const coffees = menuData.filter((item) => item.category === "Coffe" && item.subCategory === "Coffee");
  const manualBrews = menuData.filter((item) => item.category === "Coffe" && item.subCategory === "Manual Brew V60");
  const teas = menuData.filter((item) => item.category === "Non Coffe" && item.subCategory === "Tea");
  const nonCoffees = menuData.filter((item) => item.category === "Non Coffe" && item.subCategory === "Non-Coffee");
  const foods = menuData.filter((item) => item.category === "Makanan");

  // Aesthetic Cafe Interior Background URL
  const cafeBgUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA";

  // Slide content render helper
  const renderSlideContent = () => {
    switch (currentIndex) {
      case 0: {
        const item = displayBoardData[0];
        return (
          <motion.div
            key="promo-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={item.imageUrl}
              alt={item.title}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 12, ease: "easeOut" }}
              className="object-cover w-full h-full absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/40" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-24 z-10">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                <span className="inline-flex items-center gap-2 bg-rose-500 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg w-max animate-bounce">
                  <Sparkles className="w-3.5 h-3.5" />
                  {item.promoBadge}
                </span>
                <div className="space-y-2">
                  <p className="text-amber-400 text-sm md:text-xl font-semibold tracking-wide uppercase">
                    {item.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                    {item.title}
                  </h1>
                </div>
                <p className="text-neutral-300 text-sm md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md line-clamp-3 md:line-clamp-none">
                  {item.description}
                </p>
                {item.price && (
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase font-medium">Harga Promo:</span>
                    <span className="text-2xl md:text-5xl font-extrabold text-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
                      {item.price}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      }
      case 1: {
        const item = displayBoardData[1];
        return (
          <motion.div
            key="best-seller-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={item.imageUrl}
              alt={item.title}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 12, ease: "easeOut" }}
              className="object-cover w-full h-full absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/40" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-24 z-10">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                <span className="inline-flex items-center gap-2 bg-amber-500 text-neutral-950 font-bold text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg w-max">
                  <Coffee className="w-3.5 h-3.5 fill-neutral-950" />
                  {item.promoBadge}
                </span>
                <div className="space-y-2">
                  <p className="text-amber-400 text-sm md:text-xl font-semibold tracking-wide uppercase">
                    {item.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                    {item.title}
                  </h1>
                </div>
                <p className="text-neutral-300 text-sm md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md line-clamp-3 md:line-clamp-none">
                  {item.description}
                </p>
                {item.price && (
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase font-medium">Harga:</span>
                    <span className="text-2xl md:text-5xl font-extrabold text-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
                      {item.price}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      }
      case 2: {
        return (
          <motion.div
            key="menu-list-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Cinematic Background Image */}
            <motion.img
              src={cafeBgUrl}
              alt="Cafe Interior background"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 12, ease: "linear" }}
              className="object-cover w-full h-full absolute inset-0 blur-sm brightness-[0.25]"
            />
            {/* Ambient Lighting Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-amber-950/20" />

            <div className="absolute inset-0 p-4 md:p-16 flex flex-col justify-between z-10">
              {/* Slide Header */}
              <div className="text-center space-y-1 mt-14 md:mt-4">
                <span className="text-amber-400 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold">Denbiz Coffee Board</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">DAFTAR MENU KAMI</h2>
                <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-2 rounded-full" />
              </div>

              {/* Scrollable grid menu wrapper to prevent overflow on Mobile */}
              <div className="flex-grow my-4 md:my-8 overflow-y-auto max-h-[62vh] md:max-h-[68vh] px-1 md:px-4 scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-transparent">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
                  
                  {/* Column 1: Coffee & Tea */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-lg p-5 rounded-xl space-y-6">
                    <div>
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-4">
                        <Coffee className="w-5 h-5 text-amber-400" />
                        <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Coffee Selection</h3>
                      </div>
                      <div className="space-y-3">
                        {coffees.map((item) => (
                          <div key={item.id} className="flex justify-between items-baseline gap-1">
                            <span className="text-neutral-200 text-xs md:text-sm font-medium">{item.name}</span>
                            <div className="flex-grow border-b border-dotted border-white/15 mx-1.5" />
                            <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">{item.price.replace("Rp ", "")}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-4 pt-2">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Tea Series</h3>
                      </div>
                      <div className="space-y-3">
                        {teas.map((item) => (
                          <div key={item.id} className="flex justify-between items-baseline gap-1">
                            <span className="text-neutral-200 text-xs md:text-sm font-medium">{item.name}</span>
                            <div className="flex-grow border-b border-dotted border-white/15 mx-1.5" />
                            <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">{item.price.replace("Rp ", "")}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Non-Coffee & Manual Brew */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-lg p-5 rounded-xl space-y-6">
                    <div>
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-4">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Non-Coffee</h3>
                      </div>
                      <div className="space-y-3">
                        {nonCoffees.map((item) => (
                          <div key={item.id} className="flex justify-between items-baseline gap-1">
                            <span className="text-neutral-200 text-xs md:text-sm font-medium">{item.name}</span>
                            <div className="flex-grow border-b border-dotted border-white/15 mx-1.5" />
                            <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">{item.price.replace("Rp ", "")}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-4 pt-2">
                        <Coffee className="w-5 h-5 text-amber-400" />
                        <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Manual Brew V60</h3>
                      </div>
                      <div className="space-y-3">
                        {manualBrews.map((item) => (
                          <div key={item.id} className="flex justify-between items-baseline gap-1">
                            <span className="text-neutral-200 text-xs md:text-sm font-medium">{item.name}</span>
                            <div className="flex-grow border-b border-dotted border-white/15 mx-1.5" />
                            <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">{item.price.replace("Rp ", "")}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Foods */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-lg p-5 rounded-xl">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-4">
                      <Utensils className="w-5 h-5 text-amber-400" />
                      <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Food & Pastry</h3>
                    </div>
                    <div className="space-y-3">
                      {foods.map((item) => (
                        <div key={item.id} className="flex justify-between items-baseline gap-1">
                          <span className="text-neutral-200 text-xs md:text-sm font-medium">{item.name}</span>
                          <div className="flex-grow border-b border-dotted border-white/15 mx-1.5" />
                          <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">{item.price.replace("Rp ", "")}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Buffer for indicator */}
              <div className="h-6" />
            </div>
          </motion.div>
        );
      }
      case 3: {
        return (
          <motion.div
            key="info-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Cinematic Background Image */}
            <motion.img
              src={cafeBgUrl}
              alt="Cafe Interior background"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 12, ease: "linear" }}
              className="object-cover w-full h-full absolute inset-0 blur-sm brightness-[0.25]"
            />
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-amber-950/20" />

            <div className="absolute inset-0 p-4 md:p-16 flex flex-col justify-between z-10">
              {/* Slide Header */}
              <div className="text-center space-y-1 mt-14 md:mt-4">
                <span className="text-amber-400 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold">Denbiz Coffee Board</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">KONEKSI & JAM LAYANAN</h2>
                <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-2 rounded-full" />
              </div>

              {/* Responsive Grid with Glassmorphism */}
              <div className="flex-grow my-4 md:my-8 overflow-y-auto max-h-[62vh] md:max-h-[68vh] px-1 md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto items-center">
                  
                  {/* WiFi Credentials Card */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl flex items-center gap-5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Wifi className="w-32 h-32 text-white" />
                    </div>
                    <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                      <Wifi className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 font-bold">Akses Wi-Fi Gratis</h3>
                      <p className="text-sm md:text-lg font-bold text-white">SSID: <span className="text-amber-400 font-mono">Denbiz_FreeWifi</span></p>
                      <p className="text-xs md:text-base text-neutral-300">Sandi: <span className="text-amber-400 font-mono">kopipremium1998</span></p>
                    </div>
                  </div>

                  {/* Opening Hours Card */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl flex items-center gap-5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Clock className="w-32 h-32 text-white" />
                    </div>
                    <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                      <Clock className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 font-bold">Jam Kerja Operasional</h3>
                      <p className="text-sm md:text-lg font-bold text-white leading-snug">Senin - Minggu</p>
                      <p className="text-xs md:text-base text-amber-400 font-semibold">07:00 - 22:00 WIB</p>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl flex items-center gap-5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <MapPin className="w-32 h-32 text-white" />
                    </div>
                    <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                      <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 font-bold">Lokasi Cafe</h3>
                      <p className="text-xs md:text-sm font-semibold text-neutral-200 leading-relaxed max-w-sm">Jl. Sultan Agung km 28,5, Bekasi, Jawa Barat</p>
                    </div>
                  </div>

                  {/* Socials & Web Card */}
                  <div className="bg-black/45 border border-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl flex items-center gap-5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Globe className="w-32 h-32 text-white" />
                    </div>
                    <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                      <InstagramIcon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="space-y-1 w-full">
                      <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 font-bold">Kunjungi Sosial Media</h3>
                      <div className="flex flex-col gap-1.5 pt-1">
                        <div className="flex items-center gap-1.5 text-white">
                          <InstagramIcon className="w-4 h-4 text-amber-400" />
                          <span className="text-xs md:text-sm font-semibold">@denbizcoffee</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-white">
                          <Globe className="w-4 h-4 text-amber-400" />
                          <span className="text-xs md:text-sm font-semibold">denbizcoffee.com</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-white">
                          <Phone className="w-4 h-4 text-amber-400" />
                          <span className="text-xs md:text-sm font-semibold">+62 851-7319-0648</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Buffer for indicator */}
              <div className="h-6" />
            </div>
          </motion.div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-screen bg-neutral-950 text-white overflow-hidden select-none font-sans">
      {/* Dynamic Slide Content Wrapper */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {renderSlideContent()}
        </AnimatePresence>
      </div>

      {/* Floating Header & Back Button */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-30 flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 md:gap-3 bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-2 md:px-5 md:py-3 rounded-full text-white/90 hover:text-white transition-all duration-300 shadow-lg cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-xs md:text-sm font-medium tracking-wide">Kembali</span>
        </button>

        <div className="flex items-center gap-2 md:gap-4 bg-black/40 backdrop-blur-md border border-white/10 px-3.5 py-2 md:px-5 md:py-2.5 rounded-full text-white/80 text-[10px] md:text-sm font-semibold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
          Denbiz Board
        </div>
      </div>

      {/* Right Side Navigation Controls */}
      <div className="absolute right-4 md:right-8 bottom-4 md:bottom-8 z-30 flex items-center gap-2 md:gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 md:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all cursor-pointer"
          title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
        >
          {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5 fill-white" />}
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 md:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 md:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:text-white transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Progress / Slide Indicator */}
      <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8 z-30 flex gap-1.5 md:gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="group relative h-1 md:h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              width: currentIndex === idx ? "2rem" : "0.5rem",
              backgroundColor: currentIndex === idx ? "rgba(245, 158, 11, 0.4)" : "rgba(255, 255, 255, 0.2)"
            }}
          >
            {currentIndex === idx && isPlaying && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 12, ease: "linear" }}
                className="absolute inset-0 bg-amber-400"
              />
            )}
            {currentIndex === idx && !isPlaying && (
              <div className="absolute inset-0 bg-amber-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
