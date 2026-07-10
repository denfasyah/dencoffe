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
    mediaUrl: "/assets/display/bestseller.png",
    bgColor: "bg-[#008080] text-white"
  },
  {
    id: "d3",
    type: "image",
    title: "Suasana Hangat & Nyaman",
    description: "Tempat terbaik untuk berkumpul bersama teman, bekerja produktif, atau sekadar menikmati waktu santai Anda.",
    mediaUrl: "/assets/display/img2.png"
  },
  {
    id: "d4",
    type: "video",
    title: "Dedikasi Barista Terbaik Kami",
    description: "Setiap cangkir kopi diseduh dengan presisi tinggi menggunakan biji kopi pilihan untuk menghadirkan rasa tak terlupakan.",
    mediaUrl: "/assets/display/cuplikan1.mp4"
  },
  
  
];
