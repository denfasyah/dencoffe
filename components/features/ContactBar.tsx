import React from "react";
import { contactData } from "@/data/contact";

export default function ContactBar() {
  const items = [contactData.address, contactData.hours, contactData.phone];

  return (
    <section className="bg-surface-container py-12 px-gutter border-y border-outline/10" id="contact">
      <div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              {item.icon}
            </span>
            <div>
              <p className="font-bold text-primary">{item.title}</p>
              <p className="text-on-surface-variant">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
