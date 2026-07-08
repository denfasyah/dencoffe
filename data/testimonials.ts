export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatarUrl: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Poppy A",
    role: "Local Guide",
    rating: 5,
    content: "Pesen vanila latte, enakk.. rasanya ngak tampelate2 kaya cafe2 lain gitu, harganya murah padahal, kalo gede lagi aja ini pasti bakal rame bgt 😃",
    avatarUrl: ""
  },
  {
    id: "t2",
    name: "Julian Thorne",
    role: "Local Guide",
    rating: 5,
    content: "Saya datang ke sini hampir setiap pagi untuk bekerja. Wi-Fi berkecepatan tinggi, tempat duduk yang nyaman, dan kopinya selalu konsisten sempurna.",
    avatarUrl: ""
  },
  {
    id: "t3",
    name: "Marcus Chen",
    role: "Local Guide",
    rating: 5,
    content: "Biji kopi single-origin yang mereka jual sangat luar biasa. Hasil seduhan saya di rumah meningkat drastis berkat dedikasi tim pemanggangan mereka.",
    avatarUrl: ""
  },
  {
    id: "t4",
    name: "Sarah Utami",
    role: "Local Guide",
    rating: 5,
    content: "Suasana kerja (work from cafe) yang sangat mendukung. Selain kopinya yang mantap, hidangan makanannya pun pas untuk menemani deadline.",
    avatarUrl: ""
  },
  {
    id: "t5",
    name: "Budi Santoso",
    role: "Local Guide",
    rating: 5,
    content: "Tempat andalan untuk mengadakan pertemuan bisnis santai. Lokasi strategis, area parkir luas, dan musholanya sangat bersih serta terjaga.",
    avatarUrl: ""
  }
];
