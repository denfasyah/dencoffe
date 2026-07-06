"use client";

import React, { useState, useEffect } from "react";
import { menuData, MenuItem } from "@/data/menu";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contactData } from "@/data/contact";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<"Semua" | "Makanan" | "Non Coffe" | "Coffe">("Semua");
  const [loading, setLoading] = useState(false);
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>(menuData);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered =
        activeTab === "Semua"
          ? menuData
          : menuData.filter((item) => item.category === activeTab);
      setFilteredMenu(filtered.slice(0, 6)); // limit to 6 items for clean aesthetics
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24 bg-background px-gutter relative" id="menu">
      <div className="max-w-container-max-width mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <span className="text-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
              Pilihan Kami
            </span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary font-extrabold leading-tight">
              Menu Terpopuler
            </h2>
          </div>
          
          {/* Tab Filters - Mobile Slider layout */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-none -mx-gutter px-gutter md:mx-0 md:px-0">
            <div className="flex gap-2 bg-surface-container p-1 rounded-full border border-outline/10 min-w-max">
              {(["Semua", "Coffe", "Non Coffe", "Makanan"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-primary hover:bg-primary/5"
                  }`}
                >
                  {tab === "Semua" ? "Semua" : tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid - Compact card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 3 }).map((_, idx) => (
                  <div key={`skeleton-${idx}`} className="flex flex-col gap-3">
                    <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                    <div className="flex justify-between items-center mt-1">
                      <Skeleton className="h-5 w-1/2" />
                      <Skeleton className="h-4 w-12 rounded-full" />
                    </div>
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                ))
              : filteredMenu.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={item.id}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="overflow-hidden rounded-lg mb-4 relative aspect-[4/3] bg-surface-container">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt={item.name}
                          src={item.imageUrl}
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {item.price}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-headline-md text-base md:text-lg text-primary font-bold">
                          {item.name}
                        </h3>
                        <span className="bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {/* View All Menu Button */}
        <div className="flex justify-center mt-12">
          <a
            href={contactData.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-6 py-2.5 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
          >
            Lihat Semua Menu
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
