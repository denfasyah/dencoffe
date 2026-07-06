"use client";

import React, { useRef } from "react";
import { contactData } from "@/data/contact";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "MapPin": return <MapPin className="w-5 h-5 text-primary flex-shrink-0" />;
    case "Clock": return <Clock className="w-5 h-5 text-primary flex-shrink-0" />;
    case "Phone": return <Phone className="w-5 h-5 text-primary flex-shrink-0" />;
    default: return null;
  }
};

export default function ContactBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const items = [contactData.address, contactData.hours, contactData.phone];

  return (
    <section className="bg-surface-container py-8 px-gutter border-y border-outline/10" id="contact">
      <div ref={ref} className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex items-center gap-3"
          >
            {getIcon(item.icon)}
            <div>
              <p className="font-bold text-primary text-sm">{item.title}</p>
              <p className="text-xs text-on-surface-variant">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
