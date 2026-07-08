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
    title: "Artisan Pastry & Coffee Combo",
    subtitle: "Promo Sarapan Istimewa",
    description: "Nikmati perpaduan sempurna dari kue croissant mentega segar dengan secangkir Velvet Cloud Latte hangat.",
    price: "Rp 75.000",
    promoBadge: "PROMO HEMAT 20%",
    mediaUrl: "/img5.png",
    bgColor: "bg-red-600 text-white"
  },
  {
    id: "d2",
    type: "bestseller",
    title: "Kopi Susu Gula Aren",
    subtitle: "Rekomendasi Barista",
    description: "Perpaduan espresso Arabika robusta, susu segar, dan sirup gula aren manis gurih alami khas Indonesia.",
    price: "Rp 17.000",
    promoBadge: "BEST SELLER",
    mediaUrl: "/bestseller.png",
    bgColor: "bg-amber-600 text-white"
  },
  {
    id: "d3",
    type: "image",
    title: "Suasana Hangat & Nyaman",
    description: "Tempat terbaik untuk berkumpul bersama teman, bekerja produktif, atau sekadar menikmati waktu santai Anda.",
    mediaUrl: "/img2.png"
  },
  {
    id: "d4",
    type: "video",
    title: "Dedikasi Barista Terbaik Kami",
    description: "Setiap cangkir kopi diseduh dengan presisi tinggi menggunakan biji kopi pilihan untuk menghadirkan rasa tak terlupakan.",
    mediaUrl: "/cuplikan1.mp4"
  }
];
