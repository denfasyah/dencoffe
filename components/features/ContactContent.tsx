"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { contactData } from "@/data/contact";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import Swal from "sweetalert2";

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      Swal.fire({
        icon: "warning",
        title: "Lengkapi Data",
        text: "Nama, email, dan pesan wajib diisi.",
        confirmButtonColor: "#2d1b14",
        confirmButtonText: "OK",
        background: "#fdf9f4",
      });
      return;
    }

    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);

    Swal.fire({
      icon: "success",
      title: "<span style=\"font-family:'Manrope',sans-serif;color:#2d1b14;font-weight:700\">Pesan Terkirim!</span>",
      html: `<p style="font-family:'Work Sans',sans-serif;font-size:14px;color:#4f4441">Terima kasih <strong>${form.name}</strong>! Kami akan menghubungi Anda melalui email <strong>${form.email}</strong> dalam 1×24 jam.</p>`,
      confirmButtonText: "Tutup",
      confirmButtonColor: "#2d1b14",
      background: "#fdf9f4",
      iconColor: "#2d1b14",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const infoItems = [
    { icon: <MapPin className="w-5 h-5 text-primary" />, title: "Alamat", value: contactData.address.value },
    { icon: <Clock className="w-5 h-5 text-primary" />, title: "Jam Operasional", value: contactData.hours.value },
    { icon: <Phone className="w-5 h-5 text-primary" />, title: "Telepon", value: contactData.phone.value },
    { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email", value: contactData.email },
  ];

  const inputBase = "w-full px-4 py-2.5 text-sm rounded-lg border border-outline/30 bg-surface-container-low text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/50";

  return (
    <>
      {/* Form + Info */}
      <section className="py-12 md:py-16 bg-background px-gutter">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Form */}
          <SectionWrapper className="lg:col-span-3">
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-sm border border-outline/10">
              <h2 className="font-extrabold text-2xl text-primary mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                Kirim Pesan
              </h2>
              <p className="text-xs text-on-surface-variant mb-6">
                Isi formulir di bawah dan tim kami akan segera merespons.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-primary mb-1 block">Nama *</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      className={inputBase} placeholder="Nama lengkap Anda" type="text" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary mb-1 block">Email *</label>
                    <input name="email" value={form.email} onChange={handleChange}
                      className={inputBase} placeholder="email@anda.com" type="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-primary mb-1 block">No. Telepon</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      className={inputBase} placeholder="+62 8xx xxxx xxxx" type="tel" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary mb-1 block">Keperluan</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className={inputBase}>
                      <option value="">Pilih keperluan...</option>
                      <option value="reservasi">Reservasi Meja</option>
                      <option value="kerjasama">Kerjasama / Partnership</option>
                      <option value="feedback">Saran & Masukan</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary mb-1 block">Pesan *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    className={`${inputBase} resize-none`} rows={5}
                    placeholder="Tulis pesan Anda di sini..." />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-on-primary py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-on-primary/40 border-t-on-primary rounded-full animate-spin" />
                      Mengirim...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </SectionWrapper>

          {/* Info */}
          <SectionWrapper delay={0.15} className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-primary text-on-primary rounded-2xl p-6 mb-2 shadow-sm">
              <h3 className="font-extrabold text-lg mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(item.icon, { className: "w-4 h-4 text-on-primary-container" } as React.HTMLAttributes<SVGElement>)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-primary/60 uppercase tracking-widest">{item.title}</p>
                      <p className="text-sm text-on-primary/90 leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-surface-container rounded-2xl p-5 border border-outline/10">
              <h4 className="font-bold text-primary text-sm mb-3">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a href={contactData.socials.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-primary text-on-primary py-2 rounded-lg text-xs font-bold text-center hover:bg-primary-container transition-all">
                  Instagram
                </a>
                <a href={contactData.socials.tiktok} target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-primary text-on-primary py-2 rounded-lg text-xs font-bold text-center hover:bg-primary-container transition-all">
                  TikTok
                </a>
                <a href={contactData.socials.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-primary text-on-primary py-2 rounded-lg text-xs font-bold text-center hover:bg-primary-container transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-surface-container px-gutter pb-16">
        <div className="max-w-container-max-width mx-auto">
          <SectionWrapper>
            <div className="rounded-2xl overflow-hidden shadow-md border border-outline/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.700120958927!2d106.95858437200354!3d-6.218654447113552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d006345fce7%3A0x4169855e873eb9b9!2sKedai%20Kopi%20Bang%20Jenggot!5e1!3m2!1sid!2sid!4v1783519738613!5m2!1sid!2sid"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Denbiz Coffee"
              />
              
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
