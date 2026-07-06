import React from "react";
import { featuresData } from "@/data/features";

export default function Features() {
  return (
    <section className="bg-surface-container py-24 px-gutter">
      <div className="max-w-container-max-width mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuresData.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-primary mb-6 transition-all group-hover:bg-primary group-hover:text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant max-w-[200px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
