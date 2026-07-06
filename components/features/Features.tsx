"use client";

import React from "react";
import { featuresData } from "@/data/features";
import { Wifi, Droplets, MapPin, Coffee } from "lucide-react";

export default function Features() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wifi":
        return <Wifi className="w-6 h-6" />;
      case "Droplets":
        return <Droplets className="w-6 h-6" />;
      case "MapPin":
        return <MapPin className="w-6 h-6" />;
      case "Coffee":
        return <Coffee className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-surface-container py-16 px-gutter">
      <div className="max-w-container-max-width mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuresData.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-14 h-14 bg-background rounded-full mx-auto flex items-center justify-center text-primary mb-4 transition-all group-hover:bg-primary group-hover:text-on-primary shadow-sm">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-on-surface-variant max-w-[180px] mx-auto leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
