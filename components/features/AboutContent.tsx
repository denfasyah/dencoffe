"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutData } from "@/data/about";
import { featuresData } from "@/data/features";
import { contactData } from "@/data/contact";
import { Leaf, Award, Wifi, Droplets, MapPin, Coffee, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const getFeatureIcon = (name: string) => {
  switch (name) {
    case "Leaf": return <Leaf className="w-5 h-5" />;
    case "Award": return <Award className="w-5 h-5" />;
    case "Wifi": return <Wifi className="w-5 h-5" />;
    case "Droplets": return <Droplets className="w-5 h-5" />;
    case "MapPin": return <MapPin className="w-5 h-5" />;
    case "Coffee": return <Coffee className="w-5 h-5" />;
    default: return null;
  }
};



const values = [
  { icon: "Leaf", title: "Berkelanjutan", desc: "Kami berkomitmen pada praktik pengadaan yang ramah lingkungan dan bertanggung jawab secara sosial kepada petani." },
  { icon: "Award", title: "Kualitas Premium", desc: "Hanya biji kopi terbaik dari perkebunan pilihan yang lolos seleksi ketat tim quality control kami." },
  { icon: "Coffee", title: "Inovasi Rasa", desc: "Tim barista kami terus bereksperimen menciptakan profil rasa baru yang memadukan tradisi dan modernitas." },
  { icon: "Wifi", title: "Komunitas", desc: "Lebih dari sekadar kedai, kami membangun ruang komunitas yang hangat dan inklusif untuk semua kalangan." },
];

export default function AboutContent() {
  return (
    <>
      {/* Main Story */}
      <section className="py-16 md:py-20 bg-background px-gutter">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Gambar: order-2 di mobile (muncul setelah heading), order-1 di desktop (kembali ke kolom kiri) */}
          <SectionWrapper className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/5]">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl shadow-2xl object-cover"
                alt={aboutData.imageAlt}
                src={aboutData.imageUrl}
              />
              <div className="absolute -bottom-5 -right-5 bg-primary p-5 text-on-primary rounded-xl hidden md:block shadow-lg z-10">
                <p className="font-bold text-2xl leading-none mb-1">{aboutData.yearsOfCraft}</p>
                <p className="text-xs opacity-70">{aboutData.yearsLabel}</p>
              </div>
            </div>
          </SectionWrapper>

          {/* Kolom teks: dipecah 2 bagian supaya gambar bisa disisipkan di antaranya saat mobile */}
          <div className="order-1 md:order-2 contents md:block">
            {/* Bagian 1: Tagline + Heading, tampil duluan di mobile */}
            <SectionWrapper delay={0.1} className="order-1 md:order-none">
              <span className="text-primary/60 text-xs tracking-widest uppercase mb-3 block font-bold">
                {aboutData.tagline}
              </span>
              <h2 className="font-extrabold text-3xl md:text-4xl text-primary mb-6 leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                {aboutData.title}
              </h2>
            </SectionWrapper>

            {/* Bagian 2: Paragraf + fitur, tampil setelah gambar di mobile */}
            <SectionWrapper delay={0.15} className="order-3 md:order-none">
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-5 mt-6 md:mt-0">
                {aboutData.mainParagraph}
              </p>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed mb-8 border-l-4 border-primary/20 pl-4 italic">
                {aboutData.extendedParagraph}
              </p>
              <div className="space-y-4">
                {aboutData.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-primary/5 p-2 rounded-lg text-primary flex-shrink-0">
                      {getFeatureIcon(f.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{f.title}</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-16 bg-surface-container px-gutter">
        <div className="max-w-container-max-width mx-auto">
          <SectionWrapper className="text-center mb-12">
            <span className="text-primary/60 text-xs tracking-widest uppercase mb-2 block font-bold">Perjalanan Kami</span>
            <h2 className="font-extrabold text-3xl md:text-4xl text-primary" style={{ fontFamily: "Manrope, sans-serif" }}>
              Milestone Denbiz Coffee
            </h2>
          </SectionWrapper>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-primary/10" />
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <SectionWrapper key={idx} delay={idx * 0.07}>
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="flex-1 md:text-right">
                      {idx % 2 === 0 ? (
                        <>
                          <span className="text-primary font-extrabold text-2xl block">{m.year}</span>
                          <h3 className="font-bold text-primary mb-1 text-sm md:text-base">{m.title}</h3>
                          <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs md:ml-auto">{m.desc}</p>
                        </>
                      ) : null}
                    </div>
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-primary flex-shrink-0 items-center justify-center shadow-lg">
                      <div className="w-3 h-3 rounded-full bg-on-primary" />
                    </div>
                    <div className="flex-1">
                      {idx % 2 !== 0 ? (
                        <>
                          <span className="text-primary font-extrabold text-2xl block">{m.year}</span>
                          <h3 className="font-bold text-primary mb-1 text-sm md:text-base">{m.title}</h3>
                          <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs">{m.desc}</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-16 bg-background px-gutter">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper className="text-center mb-12">
            <span className="text-primary/60 text-xs tracking-widest uppercase mb-2 block font-bold">Prinsip Kami</span>
            <h2 className="font-extrabold text-3xl md:text-4xl text-primary" style={{ fontFamily: "Manrope, sans-serif" }}>
              Nilai-Nilai yang Kami Pegang
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="bg-surface-container rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 bg-primary/5 rounded-full mx-auto flex items-center justify-center text-primary mb-4">
                    {getFeatureIcon(v.icon)}
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-2">{v.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{v.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-surface-container px-gutter">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper className="text-center mb-12">
            <span className="text-primary/60 text-xs tracking-widest uppercase mb-2 block font-bold">Fasilitas</span>
            <h2 className="font-extrabold text-3xl md:text-4xl text-primary" style={{ fontFamily: "Manrope, sans-serif" }}>
              Nyaman untuk Semua Kegiatan
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuresData.map((f, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-background rounded-full mx-auto flex items-center justify-center text-primary mb-4 shadow-sm">
                    {getFeatureIcon(f.icon)}
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-on-surface-variant max-w-[160px] mx-auto leading-relaxed">{f.description}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-on-primary px-gutter">
        <SectionWrapper className="max-w-container-max-width mx-auto text-center">
          <h2 className="font-extrabold text-3xl md:text-4xl mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Siap Merasakan Pengalamannya?
          </h2>
          <p className="text-on-primary/70 text-sm mb-8 max-w-lg mx-auto">
            Pesan meja Anda sekarang dan rasakan sendiri keistimewaan Denbiz Coffee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactData.socials.whatsapp}
              aria-label="Reservasi meja melalui WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-on-primary text-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-surface-variant transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              Reservasi via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/menu"
              className="border border-on-primary/30 text-on-primary px-8 py-3 rounded-full font-bold text-sm hover:bg-on-primary/10 transition-all flex items-center justify-center gap-2"
            >
              Lihat Menu
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}