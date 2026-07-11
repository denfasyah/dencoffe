"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/data/nav-link";
import { Menu, X } from "lucide-react";
import { contactData } from "@/data/contact";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex justify-between items-center px-gutter max-w-container-max-width mx-auto">
          <a
            href="#home"
            aria-label="Beranda Kedai Kopi Bang Jenggot"
            className={`text-3xl text-on-primary script-logo transition-transform duration-300 ${
              scrolled ? "scale-90" : ""
            }`}
          >
            <Image src="/logo.png" alt="Logo" width={50} height={50} priority />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-on-primary/90 font-label-md text-sm hover:text-on-primary transition-colors uppercase tracking-widest text-[12px]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactData.socials.whatsapp}
              aria-label="Hubungi kami melalui WhatsApp untuk reservasi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-on-primary text-primary px-6 py-2 rounded-full font-label-md text-xs font-bold hover:bg-surface-variant transition-all transform active:scale-95 text-center"
            >
              Reservasi
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-on-primary p-1.5 focus:outline-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[60px] bg-primary/98 backdrop-blur-lg border-b border-on-primary/10 transition-all duration-300 overflow-hidden z-40 ${
            isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col items-center gap-5 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="text-on-primary/80 font-label-md text-md hover:text-on-primary transition-colors uppercase tracking-widest"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactData.socials.whatsapp}
              aria-label="Hubungi kami melalui WhatsApp untuk reservasi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-on-primary text-primary px-6 py-2.5 rounded-full font-label-md font-bold hover:bg-surface-variant transition-all text-center block text-sm"
            >
              Reservasi
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
