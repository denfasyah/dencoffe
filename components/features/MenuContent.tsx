"use client";

import React, { useState, useEffect } from "react";
import { menuData, MenuItem } from "@/data/menu";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

type Category = "Semua" | "Coffee" | "Non Coffee" | "Tea" | "Food" | "Espresso Base" | "Filter Coffee";
const TABS: Category[] = ["Semua", "Coffee", "Non Coffee", "Tea", "Food", "Espresso Base", "Filter Coffee"];
const PER_PAGE = 6;

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState<Category>("Semua");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState<MenuItem[]>([]);

  useEffect(() => {
    setLoading(true);
    setPage(1);
    const timer = setTimeout(() => {
      const result = activeTab === "Semua"
        ? menuData
        : menuData.filter((m) => m.category === activeTab);
      setFiltered(result);
      setLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const currentItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="py-12 md:py-16 bg-background px-gutter">
      <div className="max-w-5xl mx-auto">

        {/* Tab Filter */}
        <SectionWrapper className="flex justify-center mb-10">
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex gap-2 bg-surface-container p-1.5 rounded-full border border-outline/10 min-w-max">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
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
        </SectionWrapper>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div key={`sk-${idx}`} className="flex flex-col gap-3">
                    <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-5 w-2/3" />
                      <Skeleton className="h-4 w-14 rounded-full" />
                    </div>
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                ))
              : currentItems.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.93 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.93 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="group flex flex-col"
                  >
                    <div className="overflow-hidden rounded-lg mb-3 relative aspect-[4/3] bg-surface-container shadow-sm">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={item.name}
                        src={item.imageUrl}
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold shadow">
                        {item.price}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-bold text-sm md:text-base text-primary">{item.name}</h3>
                      <span className="bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <SectionWrapper className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-9 h-9 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  page === i + 1
                    ? "bg-primary text-on-primary"
                    : "border border-primary/20 text-primary hover:bg-primary/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </SectionWrapper>
        )}

        {/* No items */}
        {!loading && currentItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-on-surface-variant"
          >
            <p className="text-sm">Tidak ada item dalam kategori ini.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
