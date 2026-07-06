"use client";

import React, { useRef } from "react";
import { featuresData } from "@/data/features";
import { motion, useInView } from "framer-motion";
import { Wifi, Droplets, MapPin, Coffee } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Wifi": return <Wifi className="w-6 h-6" />;
    case "Droplets": return <Droplets className="w-6 h-6" />;
    case "MapPin": return <MapPin className="w-6 h-6" />;
    case "Coffee": return <Coffee className="w-6 h-6" />;
    default: return null;
  }
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-surface-container py-16 px-gutter">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuresData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 bg-background rounded-full mx-auto flex items-center justify-center text-primary mb-4 transition-all group-hover:bg-primary group-hover:text-on-primary shadow-sm"
              >
                {getIcon(item.icon)}
              </motion.div>
              <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-on-surface-variant max-w-[180px] mx-auto leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
