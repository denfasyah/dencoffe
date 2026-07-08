export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  tagline: string;
  title: string;
  mainParagraph: string;
  extendedParagraph: string;
  yearsOfCraft: string;
  yearsLabel: string;
  imageUrl: string;
  imageAlt: string;
  features: AboutFeature[];
}

export const aboutData: AboutData = {
  tagline: "Tentang Kami",

  title: "Lebih dari Sekadar Secangkir Kopi",

  mainParagraph:
    "Kedai Kopi Bang Jenggot hadir sebagai ruang yang nyaman untuk menikmati kopi, berbagi cerita, dan menciptakan momen berharga bersama orang-orang terdekat. Kami percaya bahwa secangkir kopi yang diracik dengan sepenuh hati mampu menghadirkan kehangatan, inspirasi, dan kebersamaan dalam setiap kunjungan.",

  extendedParagraph:
    "Berlokasi di Bekasi Barat, kami menyajikan berbagai pilihan kopi, minuman non-kopi, dan camilan yang dibuat dari bahan-bahan berkualitas dengan harga yang tetap bersahabat. Baik untuk memulai hari, mengerjakan pekerjaan, berdiskusi bersama rekan, maupun sekadar melepas penat, Kedai Kopi Bang Jenggot siap menjadi tempat favorit Anda untuk menikmati suasana yang santai dan pelayanan yang ramah.",

  yearsOfCraft: "5.0★",

  yearsLabel: "Kepuasan Pelanggan",

  imageUrl: "/assets/gallery/img1.png",

  imageAlt: "Suasana Kedai Kopi Bang Jenggot",

  features: [
    {
      icon: "Coffee",
      title: "Kopi Berkualitas",
      description:
        "Kami menyajikan berbagai pilihan menu kopi dan non-kopi yang diracik dengan cita rasa terbaik untuk menemani setiap momen Anda."
    },
    {
      icon: "Users",
      title: "Suasana Nyaman",
      description:
        "Tempat yang nyaman untuk bekerja, belajar, berkumpul bersama teman, maupun menikmati waktu santai dengan keluarga."
    }
  ]
};