export interface FeatureItem {
  icon: string; // Will store Lucide icon identifier names
  title: string;
  description: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: "Wifi",
    title: "Wi-Fi Gratis",
    description: "Koneksi internet berkecepatan tinggi yang stabil bagi para pekerja digital."
  },
  {
    icon: "Droplets",
    title: "Toilet Bersih",
    description: "Fasilitas toilet yang bersih, higienis, dan terawat dengan baik."
  },
  {
    icon: "MapPin",
    title: "Area Parkir",
    description: "Area parkir yang aman, dan mudah diakses untuk kendaraan Anda."
  },
  {
    icon: "Coffee",
    title: "Ruang Nyaman",
    description: "Cocok untuk fokus menyelesaikan pekerjaan atau sekadar nongkrong chill."
  }
];
