export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: "wifi",
    title: "Wi-Fi Gratis",
    description: "Koneksi internet berkecepatan tinggi yang stabil bagi para pekerja digital."
  },
  {
    icon: "mosque",
    title: "Mushola",
    description: "Ruang ibadah yang tenang, bersih, dan nyaman bagi para tamu kami."
  },
  {
    icon: "local_parking",
    title: "Area Parkir",
    description: "Area parkir yang luas, aman, dan terjaga untuk kenyamanan berkendara Anda."
  },
  {
    icon: "laptop_mac",
    title: "Ruang Kerja Nyaman",
    description: "Kursi ergonomis dan zona tenang yang cocok untuk fokus bekerja atau rapat."
  }
];
