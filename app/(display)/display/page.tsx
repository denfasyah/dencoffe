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
  Utensils,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { displayBoardData } from "@/data/display";
import { menuData } from "@/data/menu";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function DisplayPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalSlides = 5;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 8000); // Rotate every 8 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Group menu data by categories exactly matching the image
  const coffeeItems = menuData.filter((item) => item.category === "Coffee");
  const nonCoffeeItems = menuData.filter((item) => item.category === "Non Coffee");
  const teaItems = menuData.filter((item) => item.category === "Tea");
  const foodItems = menuData.filter((item) => item.category === "Food");
  const espressoBaseItems = menuData.filter((item) => item.category === "Espresso Base");
  const filterCoffeeItems = menuData.filter((item) => item.category === "Filter Coffee");

  // Colors and details for the left dynamic slides
  const slideStyles = [
    { bg: "bg-[#FFF5EB]", border: "border-orange-200", accent: "text-orange-600", badgeBg: "bg-orange-100 text-orange-800" }, // Promo 1
    { bg: "bg-[#FFFBEB]", border: "border-amber-200", accent: "text-amber-600", badgeBg: "bg-amber-100 text-amber-800" },   // Best Seller
    { bg: "bg-[#F0F9FF]", border: "border-sky-200", accent: "text-sky-600", badgeBg: "bg-sky-100 text-sky-800" },       // WiFi Info
    { bg: "bg-[#ECFDF5]", border: "border-emerald-200", accent: "text-emerald-600", badgeBg: "bg-emerald-100 text-emerald-800" }, // Hours Info
    { bg: "bg-[#FDF4FF]", border: "border-fuchsia-200", accent: "text-fuchsia-600", badgeBg: "bg-fuchsia-100 text-fuchsia-800" } // Contact Info
  ];

  const renderLeftSlide = () => {
    const currentStyle = slideStyles[currentIndex];
    
    switch (currentIndex) {
      case 0: {
        const item = displayBoardData[0] || {
          title: "Artisan Pastry & Coffee Combo",
          subtitle: "Promo Sarapan Istimewa",
          description: "Nikmati croissant mentega segar dengan Velvet Cloud Latte hangat.",
          price: "Rp 75.000",
          promoBadge: "PROMO HEMAT 20%",
          imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop"
        };
        return (
          <motion.div
            key="promo-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-between p-8 md:p-12"
          >
            <div className="space-y-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${currentStyle.badgeBg}`}>
                {item.promoBadge}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-800 leading-tight">
                {item.title}
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-[220px] shadow-md border border-neutral-100">
                <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-neutral-400 text-xs md:text-sm">Harga Paket:</span>
                <span className={`text-3xl md:text-4xl font-extrabold ${currentStyle.accent}`}>{item.price}</span>
              </div>
            </div>
          </motion.div>
        );
      }
      case 1: {
        const item = displayBoardData[1] || {
          title: "Denbiz Signature Brew",
          subtitle: "Rekomendasi Barista Terbaik",
          description: "Campuran espresso Arabika Flores, susu segar, dan sirup rempah rahasia.",
          price: "Rp 55.000",
          promoBadge: "BEST SELLER",
          imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
        };
        return (
          <motion.div
            key="promo-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-between p-8 md:p-12"
          >
            <div className="space-y-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${currentStyle.badgeBg} uppercase tracking-wider`}>
                {item.promoBadge}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-800 leading-tight">
                {item.title}
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-[220px] shadow-md border border-neutral-100">
                <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-neutral-400 text-xs md:text-sm">Harga:</span>
                <span className={`text-3xl md:text-4xl font-extrabold ${currentStyle.accent}`}>{item.price}</span>
              </div>
            </div>
          </motion.div>
        );
      }
      case 2: {
        return (
          <motion.div
            key="wifi-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center p-8 md:p-12 space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${currentStyle.badgeBg} uppercase tracking-wider`}>
                Koneksi Internet
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-800">
                Akses Wi-Fi Gratis
              </h2>
              <p className="text-neutral-500 text-xs md:text-sm">
                Nikmati koneksi internet berkecepatan tinggi sambil menikmati kopi Anda.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-sky-100 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sky-50 rounded-xl text-sky-600">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">SSID / Nama Wifi</p>
                  <p className="text-lg font-bold text-neutral-800">KopiBangJenggot_Free</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-sky-50 pt-4">
                <div className="p-3 bg-sky-50 rounded-xl text-sky-600">
                  <span className="text-xs font-bold font-mono">***</span>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Kata Sandi / Password</p>
                  <p className="text-lg font-bold text-neutral-800 font-mono">bangjenggot123</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      }
      case 3: {
        return (
          <motion.div
            key="hours-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center p-8 md:p-12 space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${currentStyle.badgeBg} uppercase tracking-wider`}>
                Jadwal Cafe
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-800">
                Jam Operasional
              </h2>
              <p className="text-neutral-500 text-xs md:text-sm">
                Kami siap menyajikan seduhan terbaik untuk menemani hari Anda.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-neutral-700">Selasa - Jum&apos;at</span>
                </div>
                <span className="font-bold text-neutral-900">13.00 - 21.00 WIB</span>
              </div>
              
              <div className="flex items-center justify-between border-t border-emerald-50 pt-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-neutral-700">Sabtu - Minggu</span>
                </div>
                <span className="font-bold text-neutral-900">10.00 - 22.00 WIB</span>
              </div>

              <div className="flex items-center justify-between border-t border-emerald-50 pt-3 text-rose-600">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Hari Senin</span>
                </div>
                <span className="font-bold uppercase tracking-wider">Libur / Tutup</span>
              </div>
            </div>
          </motion.div>
        );
      }
      case 4: {
        return (
          <motion.div
            key="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center p-8 md:p-12 space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${currentStyle.badgeBg} uppercase tracking-wider`}>
                Kontak Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-800">
                Hubungi & Ikuti
              </h2>
              <p className="text-neutral-500 text-xs md:text-sm">
                Ikuti perkembangan menu baru dan promo seru di sosial media kami.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-fuchsia-100 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-fuchsia-50 rounded-xl text-fuchsia-600">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Instagram</p>
                  <p className="text-base font-bold text-neutral-800">@kopibangjenggot</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-fuchsia-50 pt-4">
                <div className="p-3 bg-fuchsia-50 rounded-xl text-fuchsia-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-base font-bold text-neutral-800">+62 851-7319-0648</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-fuchsia-50 pt-4">
                <div className="p-3 bg-fuchsia-50 rounded-xl text-fuchsia-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Lokasi</p>
                  <p className="text-sm font-bold text-neutral-800">Bekasi, Jawa Barat</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-screen bg-neutral-100 text-neutral-800 overflow-x-hidden flex flex-col lg:flex-row select-none font-sans">
      
      {/* 1. LEFT SIDE: Dynamic Slides with Varying Bright Colors */}
      <div className={`w-full lg:w-[40%] xl:w-[35%] min-h-[50vh] lg:min-h-screen relative overflow-hidden flex flex-col justify-between ${slideStyles[currentIndex].bg} border-b lg:border-b-0 lg:border-r border-neutral-200 transition-colors duration-500`}>
        
        {/* Floating Header Back Button */}
        <div className="p-6 flex justify-between items-center z-10">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-200 px-4 py-2 rounded-full text-neutral-700 transition-all duration-300 shadow-sm cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-semibold">Kembali</span>
          </button>

          <div className="flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-full text-neutral-600 text-xs font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Display
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {renderLeftSlide()}
          </AnimatePresence>
        </div>

        {/* Bottom Controls */}
        <div className="p-6 flex items-center justify-between z-10 border-t border-neutral-200/50 bg-white/20 backdrop-blur-xs">
          {/* Progress dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  width: currentIndex === idx ? "1.5rem" : "0.5rem",
                  backgroundColor: currentIndex === idx ? "rgba(217, 119, 6, 1)" : "rgba(0, 0, 0, 0.15)"
                }}
              >
                {currentIndex === idx && isPlaying && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute inset-0 bg-amber-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full text-neutral-600 shadow-sm cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-neutral-600" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full text-neutral-600 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full text-neutral-600 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. RIGHT SIDE: Fixed Complete Menu (White Background) */}
      <div className="w-full lg:w-[60%] xl:w-[65%] bg-white text-neutral-800 p-6 md:p-8 xl:p-12 flex flex-col justify-between overflow-y-auto">
        
        {/* Menu Header resembling the image */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-neutral-900 pb-6 mb-8 gap-4 sm:gap-0">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            {/* Styled Circle Logo */}
            <div className="w-16 h-16 rounded-full bg-[#1b4353] border-4 border-neutral-900 flex items-center justify-center text-white relative flex-shrink-0 shadow-sm">
              <span className="font-extrabold text-[9px] tracking-tighter uppercase text-center leading-none">
                KOPI<br />BANG<br />JENGGOT
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-none uppercase">
                KOPI BANG JENGGOT
              </h1>
              <p className="text-[10px] md:text-xs font-serif italic text-neutral-500 mt-1 font-semibold tracking-wide">
                Really taste the coffee
              </p>
            </div>
          </div>

          {/* Vertical Divider (Hidden on small screens) */}
          <div className="hidden sm:block w-[2px] h-14 bg-neutral-300 mx-4" />

          {/* Operational Hours */}
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-black text-sm md:text-base text-neutral-900 uppercase tracking-widest leading-none">
              OPEN
            </h3>
            <p className="text-xs font-bold text-neutral-600">
              Selasa - Jum&apos;at, <span className="font-mono text-neutral-900">13.00 - 21.00</span>
            </p>
            <p className="text-xs font-bold text-neutral-600">
              Sabtu - Minggu, <span className="font-mono text-neutral-900">10.00 - 22.00</span>
            </p>
            <div className="text-[10px] font-bold text-rose-600 tracking-wider">
              --- Senin Libur ---
            </div>
          </div>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Column A: Coffee, Espresso Base, Filter Coffee */}
          <div className="space-y-6">
            {/* Category 1: COFFEE */}
            <div>
              <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#1b4353]" /> COFFEE
              </h2>
              <div className="space-y-2">
                {coffeeItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-1" />
                    <span className="font-extrabold text-xs md:text-sm text-neutral-900 whitespace-nowrap">
                      {item.price.replace("Rp ", "").replace(".000", "K")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: ESPRESSO BASE */}
            <div>
              <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#1b4353]" /> ESPRESSO BASE
              </h2>
              <div className="space-y-2">
                {espressoBaseItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-1" />
                    <span className="font-extrabold text-xs md:text-sm text-neutral-900 whitespace-nowrap">
                      {item.price.replace("Rp ", "").replace(".000", "K")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: FILTER COFFEE */}
            <div>
              <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#1b4353]" /> FILTER COFFEE
              </h2>
              <div className="space-y-2">
                {filterCoffeeItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-1" />
                    <span className="font-extrabold text-xs md:text-sm text-neutral-900 whitespace-nowrap">
                      {item.price.replace("Rp ", "").replace(".000", "K")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column B: Non Coffee, Tea, Food */}
          <div className="space-y-6">
            {/* Category 4: NON COFFEE */}
            <div>
              <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1b4353]" /> NON COFFEE
              </h2>
              <div className="space-y-2">
                {nonCoffeeItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-1" />
                    <span className="font-extrabold text-xs md:text-sm text-neutral-900 whitespace-nowrap">
                      {item.price.replace("Rp ", "").replace(".000", "K")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 5: TEA */}
            <div>
              <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1b4353]" /> TEA
              </h2>
              <div className="space-y-2">
                {teaItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-1" />
                    <span className="font-extrabold text-xs md:text-sm text-neutral-900 whitespace-nowrap">
                      {item.price.replace("Rp ", "").replace(".000", "K")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 6: FOOD */}
            <div>
              <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#1b4353]" /> FOOD
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {foodItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline gap-2">
                    <span className="text-xs md:text-sm font-bold text-neutral-700">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-1" />
                    <span className="font-extrabold text-xs md:text-sm text-neutral-900 whitespace-nowrap">
                      {item.price.replace("Rp ", "").replace(".000", "K")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Small aesthetic footer inside right side */}
        <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
          <span>Kopi Bang Jenggot</span>
          <span className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-rose-500 fill-current" /> in Indonesia</span>
        </div>
      </div>
      
    </div>
  );
}
