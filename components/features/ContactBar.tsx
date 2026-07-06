"use client";

import React from "react";
import { contactData } from "@/data/contact";
import { MapPin, Clock, Phone } from "lucide-react";

export default function ContactBar() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-primary flex-shrink-0" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-primary flex-shrink-0" />;
      case "Phone":
        return <Phone className="w-6 h-6 text-primary flex-shrink-0" />;
      default:
        return null;
    }
  };

  const items = [contactData.address, contactData.hours, contactData.phone];

  return (
    <section className="bg-surface-container py-8 px-gutter border-y border-outline/10" id="contact">
      <div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {getIcon(item.icon)}
            <div>
              <p className="font-bold text-primary text-sm">{item.title}</p>
              <p className="text-xs text-on-surface-variant leading-normal">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
