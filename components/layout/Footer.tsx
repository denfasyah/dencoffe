"use client";

import React from "react";
import { contactData } from "@/data/contact";
import { navLinks } from "@/data/nav-link";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-24 px-gutter relative">
      <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <a className="text-5xl text-on-primary script-logo mb-8 block" href="#home">
            Denbiz Coffee
          </a>
          <p className="text-on-primary/60 max-w-md mb-8 leading-relaxed">
            {contactData.footerDescription}
          </p>
          <div className="flex gap-4">
            <a
              className="w-12 h-12 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300"
              href={contactData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a
              className="w-12 h-12 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300"
              href={contactData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a
              className="w-12 h-12 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300"
              href={contactData.socials.emailAddress}
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary-container">
            Tautan Langsung
          </h4>
          <ul className="space-y-4 text-on-primary/60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-on-primary transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary-container">
            Buletin Kami
          </h4>
          <p className="text-sm text-on-primary/60 mb-6">
            Dapatkan penawaran eksklusif dan berita terbaru dari panggangan kami langsung di email Anda.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-on-primary/20 rounded-full p-1 focus-within:border-on-primary transition-colors"
          >
            <input
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm px-4 w-full text-on-primary placeholder:text-on-primary/45"
              placeholder="Email Anda"
              type="email"
              required
            />
            <button
              type="submit"
              className="bg-on-primary text-primary px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-surface-variant transition-colors cursor-pointer"
            >
              Gabung
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-container-max-width mx-auto pt-16 mt-16 border-t border-on-primary/10 text-center text-on-primary/40 text-xs uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Denbiz Coffee &mdash; Hak Cipta Dilindungi. Dibuat untuk Penikmat Kopi Sejati.
      </div>
    </footer>
  );
}
