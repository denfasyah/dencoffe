export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  title: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: "/img1.png",
    alt: "Barista sedang Menuangkan Kopi",
    title: "Proses Penyeduhan Kopi"
  },
  {
    id: "g2",
    imageUrl: "/img2.png",
    alt: "Suasana Interior Cafe Denbiz",
    title: "Interior Cafe"
  },
  {
    id: "g3",
    imageUrl: "/img3.png",
    alt: "Latte Art Sempurna",
    title: "Kopi Latte Cantik"
  },
  {
    id: "g4",
    imageUrl: "/img4.png",
    alt: "Biji Kopi Sangrai Berkualitas Tinggi",
    title: "Biji Kopi Pilihan"
  },
  {
    id: "g5",
    imageUrl: "/img5.png",
    alt: "Artisan Pastry Lezat",
    title: "Kue & Pastry Segar"
  },
];
