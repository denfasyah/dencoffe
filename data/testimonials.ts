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
    name: "Jemi kristian",
    role: "Local Guide",
    rating: 5,
    content: "Tempatnya enak, ownernya very friendly and nice, playlist lagunya jg enak enak, dan yang paling penting kopinya jg enak enak banget. harganya masih affordable dan coffee shop nya buka sampe jam 11 malam. pokonya nyaman banget",
    avatarUrl: ""
  },
  {
    id: "t3",
    name: "adrian prima",
    role: "Local Guide",
    rating: 5,
    content: "Tempat enak buat nongki cantik.... minumannya enak semua.. bintang 5.",
    avatarUrl: ""
  },
  {
    id: "t4",
    name: "Edi Tarmidi",
    role: "Local Guide",
    rating: 5,
    content: "Harga terjangkau dan rasanya mantab.kopi susu gula arennya double shotnya mantab.",
    avatarUrl: ""
  },
  {
    id: "t5",
    name: "Rya Chairiyani",
    role: "Local Guide",
    rating: 5,
    content: "Tempatnya di pinggir jalan persis di depan Indomaret dan samping lazzato, Menu varian kopinya beragam, dan enak². Untuk hazelnutnya enak, walaupun tidak terlalu manis tapi enak  coffee rootbeer nya enak, bersoda mirip saparila tapi ada asamnya",
    avatarUrl: ""
  }
];
