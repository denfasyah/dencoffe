"use client";

import React from "react";
import { MenuItem } from "@/data/menu";
import { Coffee, Sparkles, Utensils, Leaf } from "lucide-react";
import Image from "next/image";

interface DisplayMenuProps {
  coffeeItems: MenuItem[];
  nonCoffeeItems: MenuItem[];
  teaItems: MenuItem[];
  foodItems: MenuItem[];
  espressoBaseItems: MenuItem[];
  filterCoffeeItems: MenuItem[];
}

// Compact row: name · dotted line · price
function MenuRow({ name, price }: { name: string; price: string }) {
  const short = price.replace("Rp ", "").replace(".000", "K");
  return (
    <div className="flex items-baseline gap-1 leading-none py-[2px]">
      <span className="font-black text-neutral-700 min-w-0 break-words">{name}</span>
      <span className="flex-1 border-b border-dotted border-neutral-200 mx-1 mb-[3px] shrink-0" />
      <span className="font-extrabold text-neutral-900 whitespace-nowrap tabular-nums">{short}</span>
    </div>
  );
}

// Section header
function SectionHead({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <h2 className="flex items-center gap-1 font-black text-neutral-900 border-b border-neutral-300 pb-[2px] mb-1 uppercase tracking-wider">
      <Icon className="w-3 h-3 text-[#1b4353] flex-shrink-0" />
      <span>{label}</span>
    </h2>
  );
}

export default function DisplayMenu({
  coffeeItems,
  nonCoffeeItems,
  teaItems,
  foodItems,
  espressoBaseItems,
  filterCoffeeItems,
}: DisplayMenuProps) {
  return (
    <div
      className="
        w-full bg-white text-neutral-800 flex flex-col
        p-4 sm:p-5
        sm:w-1/2 sm:h-full sm:overflow-hidden sm:p-5
      "
    >
      {/* ── HEADER ────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b-2 border-neutral-900 pb-2 mb-3 flex-shrink-0">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-11 h-11 rounded-full border-2 border-neutral-200 flex items-center justify-center relative flex-shrink-0 overflow-hidden">
            <Image src="/logo.png" alt="Logo" width={44} height={44} priority />
          </div>
          <div>
            <h1 className="text-base sm:text-lg xl:text-xl font-black text-neutral-900 tracking-tight leading-none uppercase">
              KEDAI KOPI BANG JENGGOT
            </h1>
            <p className="text-[9px] font-serif italic text-neutral-500 mt-0.5 font-semibold tracking-wide">
              Really taste the coffee
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-9 bg-neutral-300 mx-3 flex-shrink-0" />

        {/* Hours */}
        <div className="text-right sm:text-left leading-none flex-shrink-0">
          <p className="font-black text-[10px] text-neutral-900 uppercase tracking-widest mb-1">OPEN</p>
          <p className="text-[9px] font-bold text-neutral-600">
            Selasa – Jum&apos;at,{" "}
            <span className="font-mono text-neutral-900">13.00 – 21.00</span>
          </p>
          <p className="text-[9px] font-bold text-neutral-600 mt-0.5">
            Sabtu – Minggu,{" "}
            <span className="font-mono text-neutral-900">10.00 – 22.00</span>
          </p>
          <p className="text-[9px] font-bold text-rose-600 tracking-wider mt-0.5">--- Senin Libur ---</p>
        </div>
      </div>

      {/* ── MENU GRID ─────────────────────────────────────────────── */}
      {/*
        Smart TV layout: 3 columns side by side, font tiny so everything fits.
        Mobile: single column stacking naturally.
        Text size uses [9px] / [10px] so 13 Coffee + 10 Food all fit on 1080p.
      */}
      <div
        className="
          flex-1 overflow-hidden
          grid gap-x-6 gap-y-4
          grid-cols-1 sm:grid-cols-3
          text-[11px] sm:text-[10px] lg:text-[12px] xl:text-[14px]
        "
      >
        {/* ── COL 1: COFFEE (13 items) ── */}
        <div className="flex flex-col gap-1.5 lg:gap-2 xl:gap-2.5">
          <SectionHead icon={Coffee} label="Coffee" />
          {coffeeItems.map((item) => (
            <MenuRow key={item.id} name={item.name} price={item.price} />
          ))}
        </div>

        {/* ── COL 2: NON COFFEE + TEA + ESPRESSO BASE ── */}
        <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6">
          <div className="flex flex-col gap-1.5 lg:gap-2 xl:gap-2.5">
            <SectionHead icon={Sparkles} label="Non Coffee" />
            {nonCoffeeItems.map((item) => (
              <MenuRow key={item.id} name={item.name} price={item.price} />
            ))}
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2 xl:gap-2.5">
            <SectionHead icon={Leaf} label="Tea" />
            {teaItems.map((item) => (
              <MenuRow key={item.id} name={item.name} price={item.price} />
            ))}
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2 xl:gap-2.5">
            <SectionHead icon={Coffee} label="Espresso Base" />
            {espressoBaseItems.map((item) => (
              <MenuRow key={item.id} name={item.name} price={item.price} />
            ))}
          </div>
        </div>

        {/* ── COL 3: FOOD + FILTER COFFEE ── */}
        <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6">
          <div className="flex flex-col gap-1.5 lg:gap-2 xl:gap-2.5">
            <SectionHead icon={Utensils} label="Food" />
            {foodItems.map((item) => (
              <MenuRow key={item.id} name={item.name} price={item.price} />
            ))}
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-2 xl:gap-2.5">
            <SectionHead icon={Coffee} label="Filter Coffee" />
            {filterCoffeeItems.map((item) => (
              <MenuRow key={item.id} name={item.name} price={item.price} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
