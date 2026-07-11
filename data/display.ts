export interface DisplayBoardItem {
  id: string;
  type: "promo" | "bestseller" | "image" | "video";
  title: string;
  subtitle?: string;
  description: string;
  price?: string;
  promoBadge?: string;
  mediaUrl: string; // Image or Video URL
  bgColor?: string; // Solid Tailwind class, e.g. "bg-orange-600"
  duration?: number; // Custom auto-play duration in milliseconds
}

export const displayBoardData: DisplayBoardItem[] = [
  {
    id: "d1",
    type: "promo",
    title: "Hazelnut & Cheese Burger",
    subtitle: "Promo Sarapan Istimewa",
    description: "Solusi lapar dan haus dalam satu sajian dengan harga spesial.",
    price: "Rp 35.000",
    promoBadge: "PROMO HEMAT",
    mediaUrl: "/assets/display/promo.png",
    bgColor: "bg-red-600 text-white"
  },
  {
    id: "d2",
    type: "bestseller",
    title: "Vanilla Latte",
    subtitle: "Rekomendasi Barista",
    description: "Perpaduan espresso Arabika robusta, susu segar, dan sirup vanilla premium.",
    price: "Rp 20.000",
    promoBadge: "BEST SELLER",
    mediaUrl: "/assets/display/bestseller1.png",
    bgColor: "bg-[#008080] text-white"
  },
  {
    id: "d3",
    type: "video",
    title: "Cuplikan Galeri",
    description: "Kumpulan momen dan visual terbaik yang menggambarkan suasana serta pengalaman terbaik di kedai kami.",
    mediaUrl: "/assets/display/cuplikan3.mp4"
  },
  {
    id: "d4",
    type: "video",
    title: "Cuplikan",
    description: "Video singkat yang menampilkan berbagai momen di pagi hari.",
    mediaUrl: "/assets/display/cuplikan2.mp4"
  },
    {
    id: "d5",
    type: "video",
    title: "Coffe Time",
    description: "Video singkat yang menampilkan proses pembuatan kopi di kedai kami",
    mediaUrl: "/assets/display/coffetime.mp4"
  },
  
  
];
