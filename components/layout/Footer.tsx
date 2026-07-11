"use client";

import React, { useState } from "react";
import { contactData } from "@/data/contact";
import { navLinks } from "@/data/nav-link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

// Custom SVG Icons
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.07-2.88-.44-4.13-1.19-.74-.44-1.37-.99-1.89-1.67v7.26c.07 2.12-.66 4.31-2.24 5.76-1.68 1.61-4.22 2.21-6.42 1.6-2.58-.69-4.73-2.91-4.93-5.61-.26-3.14 1.83-6.19 4.96-6.66 1.05-.17 2.15-.08 3.16.24v4.04c-.75-.24-1.57-.31-2.33-.12-1.07.24-1.99 1.13-2.11 2.24-.18 1.34.73 2.72 2.06 2.96.96.18 2.01-.13 2.59-.93.36-.49.46-1.12.44-1.72V0h2.91c.01.01.01.02.01.02z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.45 5.485 0 9.947-4.46 9.95-9.95.002-2.66-1.033-5.159-2.914-7.04C16.61 1.734 14.12 .697 11.46.697 5.976.697 1.517 5.158 1.514 10.65c-.001 1.69.444 3.336 1.288 4.79l-.997 3.64 3.73-.978c1.458.796 3.084 1.196 4.712 1.196zm11.272-7.653c-.3-.149-1.772-.875-2.046-.975-.275-.1-.475-.149-.675.15-.2.299-.775.975-.95 1.174-.175.2-.35.224-.65.074-.3-.149-1.265-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.074-.175-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8 1.025-.275.95-1.05 2.342-1.05 2.542 0 .2.1.399.3.599.2.2 2.656 4.055 6.435 5.688.9.388 1.603.62 2.15.794.903.287 1.725.246 2.374.15.723-.108 1.772-.724 2.022-1.397.25-.673.25-1.247.175-1.397-.075-.149-.275-.249-.575-.399z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setShowSuccess(true);
    setEmail("");
  };

  return (
    <>
      <footer className="bg-primary text-on-primary py-16 px-gutter relative">
        <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Image src="/logo.png" alt="Logo Kedai Kopi Bang Jenggot" width={100} height={100} />
            <p className="text-on-primary/60 max-w-md mb-6 mt-5 leading-relaxed text-sm">
              {contactData.footerDescription}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300"
                href={contactData.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Kedai Kopi Bang Jenggot"
              >
                <TikTokIcon />
              </a>
              <a
                className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300"
                href={contactData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Kedai Kopi Bang Jenggot"
              >
                <InstagramIcon />
              </a>
              <a
                className="w-10 h-10 rounded-full border border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300"
                href={contactData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Kedai Kopi Bang Jenggot"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-md mb-6 uppercase tracking-widest text-secondary-container">
              Tautan Langsung
            </h4>
            <ul className="space-y-3 text-on-primary/60 text-sm">
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
            <h4 className="font-bold text-md mb-6 uppercase tracking-widest text-secondary-container">
              Buletin Kami
            </h4>
            <p className="text-xs text-on-primary/60 mb-4 leading-relaxed">
              Dapatkan penawaran eksklusif dan berita terbaru dari kami langsung di email Anda.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex border border-on-primary/20 rounded-full p-1 focus-within:border-on-primary transition-colors max-w-sm"
            >
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs px-3 w-full text-on-primary placeholder:text-on-primary/45"
                placeholder="Email Anda"
                aria-label="Alamat email untuk newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="newsletter-email"
                autoComplete="email"
              />
              <button
                type="submit"
                className="bg-on-primary text-primary px-5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-surface-variant transition-colors cursor-pointer"
              >
                Gabung
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-container-max-width mx-auto pt-12 mt-12 border-t border-on-primary/10 text-center text-on-primary/40 text-[10px] uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} &nbsp; Kedai Kopi Bang Jenggot &mdash; Hak Cipta Dilindungi. Dibuat untuk Penikmat Kopi Sejati.
        </div>
      </footer>

      {/* Newsletter Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            key="newsletter-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            onClick={() => setShowSuccess(false)}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10 bg-[#fdf9f4] rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center text-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowSuccess(false)}
                aria-label="Tutup"
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-black text-primary tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Terima Kasih! ☕
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Email Anda berhasil didaftarkan. Tunggu info dari kami ya.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-2 bg-primary text-on-primary px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer shadow-md"
              >
                Oke, Siap!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
