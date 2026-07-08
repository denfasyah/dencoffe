export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  title: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: "/assets/gallery/img1.png",
    alt: "Barista sedang Menuangkan Kopi",
    title: "Proses Penyeduhan Kopi"
  },
  {
    id: "g2",
    imageUrl: "/assets/gallery/img2.png",
    alt: "Suasana Interior Cafe Denbiz",
    title: "Interior Cafe"
  },
  {
    id: "g3",
    imageUrl: "/assets/gallery/img3.png",
    alt: "Latte Art Sempurna",
    title: "Kopi Latte Cantik"
  },
  {
    id: "g4",
    imageUrl: "/assets/gallery/img4.png",
    alt: "Biji Kopi Sangrai Berkualitas Tinggi",
    title: "Biji Kopi Pilihan"
  },
  {
    id: "g5",
    imageUrl: "/assets/gallery/img5.png",
    alt: "Artisan Pastry Lezat",
    title: "Kue & Pastry Segar"
  },
];
