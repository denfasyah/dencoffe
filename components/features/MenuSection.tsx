"use client";

import React, { useState, useEffect } from "react";
import { menuData, MenuItem } from "@/data/menu";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

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
      setFilteredMenu(filtered);
      setLoading(false);
    }, 500); // Simulate network load for skeleton visualization

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-section-gap-desktop bg-background px-gutter relative" id="menu">
      <div className="max-w-container-max-width mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-primary/60 font-label-md text-label-md tracking-widest uppercase mb-4 block">
              Pilihan Kami
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Menu Terpopuler
            </h2>
          </div>
          
          {/* Tab Filters */}
          <div className="flex flex-wrap gap-2 bg-surface-container p-1.5 rounded-full border border-outline/10">
            {(["Semua", "Coffe", "Non Coffe", "Makanan"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-primary text-on-primary shadow-md"
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {tab === "Semua" ? "Semua" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div key={`skeleton-${idx}`} className="flex flex-col gap-4">
                    <Skeleton className="w-full aspect-[4/5] rounded-xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex justify-between items-center mt-2">
                      <Skeleton className="h-5 w-1/4" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                  </div>
                ))
              : filteredMenu.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-xl mb-6 relative">
                      <img
                        className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={item.name}
                        src={item.imageUrl}
                      />
                      <div className="absolute top-4 right-4 bg-primary text-on-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                        {item.price}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {item.name}
                      </h3>
                      {/* Category Label badge as requested */}
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
