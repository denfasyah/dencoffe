import type { Metadata } from "next";import React from "react";
import DisplayClient from "@/components/display/DisplayClient";

export const metadata: Metadata = {
  title: "Digital Menu Board",
  description: "Digital Menu Board interaktif Kedai Kopi Bang Jenggot. Menampilkan menu best seller, promo spesial, dan suasana kedai secara real-time.",
  openGraph: {
    title: "Digital Menu Board | Kedai Kopi Bang Jenggot",
    description: "Digital Menu Board interaktif Kedai Kopi Bang Jenggot. Menampilkan menu best seller, promo spesial, dan suasana kedai secara real-time.",
    images: ["/logo.png"],
  },
};

export default function DisplayPage() {
  return <DisplayClient />;
}
