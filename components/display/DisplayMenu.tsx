"use client";

import React from "react";
import { MenuItem } from "@/data/menu";
import { Coffee, Sparkles, Utensils, Heart } from "lucide-react";

interface DisplayMenuProps {
  coffeeItems: MenuItem[];
  nonCoffeeItems: MenuItem[];
  teaItems: MenuItem[];
  foodItems: MenuItem[];
  espressoBaseItems: MenuItem[];
  filterCoffeeItems: MenuItem[];
}

export default function DisplayMenu({
  coffeeItems,
  nonCoffeeItems,
  teaItems,
  foodItems,
  espressoBaseItems,
  filterCoffeeItems
}: DisplayMenuProps) {
  
  const formatPrice = (price: string) => {
    return price.replace("Rp ", "").replace(".000", "K");
  };

  return (
    <div className="w-full lg:w-[60%] xl:w-[63%] bg-white text-neutral-800 p-4 md:p-6 lg:p-8 flex flex-col justify-between min-h-[60vh] lg:h-full overflow-visible lg:overflow-hidden">
      {/* Menu Header */}
      <div className="flex items-center justify-between border-b-2 border-neutral-900 pb-3 mb-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1b4353] border-4 border-neutral-900 flex items-center justify-center text-white relative flex-shrink-0 shadow-sm">
            <span className="font-extrabold text-[7px] tracking-tighter uppercase text-center leading-none">
              KOPI<br />BANG<br />JENGGOT
            </span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight leading-none uppercase">
              KOPI BANG JENGGOT
            </h1>
            <p className="text-[9px] font-serif italic text-neutral-500 mt-0.5 font-semibold tracking-wide">
              Really taste the coffee
            </p>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden sm:block w-[1.5px] h-10 bg-neutral-300 mx-3" />

        {/* Operational Hours */}
        <div className="text-right sm:text-left leading-none">
          <h3 className="font-black text-xs text-neutral-900 uppercase tracking-widest mb-1">
            OPEN
          </h3>
          <p className="text-[10px] font-bold text-neutral-600">
            Selasa - Jum&apos;at, <span className="font-mono text-neutral-900">13.00 - 21.00</span>
          </p>
          <p className="text-[10px] font-bold text-neutral-600 mt-0.5">
            Sabtu - Minggu, <span className="font-mono text-neutral-900">10.00 - 22.00</span>
          </p>
          <div className="text-[9px] font-bold text-rose-600 tracking-wider mt-0.5">
            --- Senin Libur ---
          </div>
        </div>
      </div>

      {/* 6 Categories Grid - Compact spacing for zero-scroll on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-grow overflow-y-visible lg:overflow-hidden text-[11px] md:text-xs">
        
        {/* Column A */}
        <div className="space-y-4 flex flex-col justify-between h-full">
          {/* Category 1: COFFEE */}
          <div>
            <h2 className="text-xs font-black text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5 text-[#1b4353]" /> COFFEE
            </h2>
            <div className="space-y-1">
              {coffeeItems.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-1">
                  <span className="font-bold text-neutral-700 truncate max-w-[80%]">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-neutral-200 mx-1" />
                  <span className="font-extrabold text-neutral-950 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: ESPRESSO BASE */}
          <div>
            <h2 className="text-xs font-black text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5 text-[#1b4353]" /> ESPRESSO BASE
            </h2>
            <div className="space-y-1">
              {espressoBaseItems.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-1">
                  <span className="font-bold text-neutral-700 truncate max-w-[80%]">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-neutral-200 mx-1" />
                  <span className="font-extrabold text-neutral-950 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: FILTER COFFEE */}
          <div>
            <h2 className="text-xs font-black text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5 text-[#1b4353]" /> FILTER COFFEE
            </h2>
            <div className="space-y-1">
              {filterCoffeeItems.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-1">
                  <span className="font-bold text-neutral-700 truncate max-w-[80%]">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-neutral-200 mx-1" />
                  <span className="font-extrabold text-neutral-950 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column B */}
        <div className="space-y-4 flex flex-col justify-between h-full">
          {/* Category 4: NON COFFEE */}
          <div>
            <h2 className="text-xs font-black text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#1b4353]" /> NON COFFEE
            </h2>
            <div className="space-y-1">
              {nonCoffeeItems.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-1">
                  <span className="font-bold text-neutral-700 truncate max-w-[80%]">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-neutral-200 mx-1" />
                  <span className="font-extrabold text-neutral-950 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 5: TEA */}
          <div>
            <h2 className="text-xs font-black text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#1b4353]" /> TEA
            </h2>
            <div className="space-y-1">
              {teaItems.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-1">
                  <span className="font-bold text-neutral-700 truncate max-w-[80%]">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-neutral-200 mx-1" />
                  <span className="font-extrabold text-neutral-950 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 6: FOOD */}
          <div>
            <h2 className="text-xs font-black text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-[#1b4353]" /> FOOD
            </h2>
            <div className="space-y-1">
              {foodItems.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline gap-1">
                  <span className="font-bold text-neutral-700 truncate max-w-[80%]">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-neutral-200 mx-1" />
                  <span className="font-extrabold text-neutral-950 whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Tiny Footer */}
      <div className="mt-3 pt-1 border-t border-neutral-200 flex justify-between items-center text-[8px] text-neutral-400 font-bold uppercase tracking-wider">
        <span>Kopi Bang Jenggot</span>
        <span className="flex items-center gap-0.5">Made with <Heart className="w-2.5 h-2.5 text-rose-500 fill-current" /> in Indonesia</span>
      </div>
    </div>
  );
}
