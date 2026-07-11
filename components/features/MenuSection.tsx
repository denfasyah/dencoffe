"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { menuData, MenuItem } from "@/data/menu";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Category = "Semua" | "Coffee" | "Non Coffee" | "Tea" | "Food" | "Espresso Base" | "Filter Coffee";
const TABS: Category[] = ["Semua", "Coffee", "Non Coffee", "Tea", "Food", "Espresso Base", "Filter Coffee"];
const HOMEPAGE_LIMIT = 6;

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [activeTab, setActiveTab] = useState<Category>("Semua");
  const [loading, setLoading] = useState(false);
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>(menuData.slice(0, HOMEPAGE_LIMIT));

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = activeTab === "Semua"
        ? menuData
        : menuData.filter((item) => item.category === activeTab);
      setFilteredMenu(filtered.slice(0, HOMEPAGE_LIMIT));
      setLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24 bg-background px-gutter relative" id="menu">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6"
        >
          <div>
            <span className="text-primary/60 font-label-md text-xs tracking-widest uppercase mb-2 block">
              Pilihan Kami
            </span>
            <h2 className="font-extrabold text-3xl md:text-5xl text-primary leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Menu Terpopuler
            </h2>
          </div>

          {/* Tab Filter - Scrollable on mobile */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-none">
            <div className="flex gap-2 bg-surface-container p-1 rounded-full border border-outline/10 min-w-max">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    if (activeTab !== tab) {
                      setLoading(true);
                      setActiveTab(tab);
                    }
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-primary hover:bg-primary/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 3 }).map((_, idx) => (
                  <div key={`sk-${idx}`} className="flex flex-col gap-3">
                    <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-5 w-1/2" />
                      <Skeleton className="h-4 w-14 rounded-full" />
                    </div>
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                ))
              : filteredMenu.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group flex flex-col"
                  >
                    <div className="overflow-hidden rounded-lg mb-3 relative aspect-[4/3] bg-surface-container">
                      <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={item.name}
                        src={item.imageUrl}
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {item.price}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-bold text-sm md:text-base text-primary">{item.name}</h3>
                      <span className="bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-7 py-2.5 rounded-full text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Lihat Semua Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
