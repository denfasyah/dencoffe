export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: "Coffee" | "Non Coffee" | "Tea" | "Food" | "Espresso Base" | "Filter Coffee";
  subCategory?: string;
}

export const menuData: MenuItem[] = [
  // === COFFEE ===
  {
    id: "c1",
    name: "Kopi Tubruk Robusta",
    price: "Rp 10.000",
    description: "Kopi hitam klasik seduhan tubruk dengan biji Robusta pilihan yang pekat dan mantap.",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c2",
    name: "Kopi Tubruk Arabika",
    price: "Rp 15.000",
    description: "Seduhan kopi tubruk dengan biji Arabika pilihan yang kaya aroma dan tingkat keasaman lembut.",
    imageUrl: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c3",
    name: "Kopi Susu Gula Aren",
    price: "Rp 17.000",
    description: "Perpaduan espresso, susu segar, dan sirup gula aren manis gurih alami khas Indonesia.",
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c4",
    name: "Cappucino",
    price: "Rp 20.000",
    description: "Kombinasi seimbang espresso pekat, susu hangat (steamed milk), dan busa susu yang tebal.",
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c5",
    name: "Coffee Lemon",
    price: "Rp 20.000",
    description: "Kombinasi segar espresso dingin dengan perasan lemon asam-manis yang menyegarkan dahaga.",
    imageUrl: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c6",
    name: "Coffee Latte",
    price: "Rp 20.000",
    description: "Espresso dengan paduan susu segar hangat yang melimpah dan lapisan foam tipis di atasnya.",
    imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c7",
    name: "Caramel Latte",
    price: "Rp 20.000",
    description: "Coffee latte lembut dengan tambahan sirup karamel gurih nan manis aromatik.",
    imageUrl: "https://images.unsplash.com/photo-1595434066389-0dc5a6c5f418?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c8",
    name: "Vanilla Latte",
    price: "Rp 20.000",
    description: "Latte creamy berpadu dengan sirup vanilla premium yang harum menenangkan.",
    imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c9",
    name: "Hazelnut",
    price: "Rp 20.000",
    description: "Minuman espresso bersusu dengan tambahan sirup kacang hazelnut yang gurih legit.",
    imageUrl: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c10",
    name: "Klepon / Pandan",
    price: "Rp 20.000",
    description: "Sensasi kopi susu unik dengan rasa gurih pandan kelapa layaknya kue tradisional klepon.",
    imageUrl: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c11",
    name: "Butterscotch",
    price: "Rp 20.000",
    description: "Kopi susu dengan rasa manis mentega karamel panggang (butterscotch) yang tebal.",
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c12",
    name: "Red Velvet",
    price: "Rp 20.000",
    description: "Perpaduan kopi dengan rasa manis beludru merah yang lembut dan creamy.",
    imageUrl: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },
  {
    id: "c13",
    name: "Special Blend",
    price: "Rp 22.000",
    description: "Racikan kopi spesial house blend andalan Kopi Bang Jenggot dengan cita rasa khas.",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
    category: "Coffee"
  },

  // === NON COFFEE ===
  {
    id: "nc1",
    name: "Matcha Latte",
    price: "Rp 18.000",
    description: "Bubuk teh hijau Jepang premium asli diseduh dengan susu segar yang creamy.",
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop",
    category: "Non Coffee"
  },
  {
    id: "nc2",
    name: "Chocolatte",
    price: "Rp 18.000",
    description: "Minuman cokelat pekat berkualitas tinggi disajikan hangat atau dingin dengan susu segar.",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop",
    category: "Non Coffee"
  },
  {
    id: "nc3",
    name: "Ocean Blue",
    price: "Rp 18.000",
    description: "Minuman soda citrus biru yang menyegarkan dengan paduan rasa masam manis.",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
    category: "Non Coffee"
  },
  {
    id: "nc4",
    name: "Wedang Jahe",
    price: "Rp 12.000",
    description: "Seduhan air jahe tradisional yang hangat berkhasiat meringankan tubuh.",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
    category: "Non Coffee"
  },
  {
    id: "nc5",
    name: "Red Velvet",
    price: "Rp 18.000",
    description: "Minuman susu creamy non-kopi dengan cita rasa kue red velvet merah beludru.",
    imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop",
    category: "Non Coffee"
  },

  // === TEA ===
  {
    id: "t1",
    name: "Ice Tea",
    price: "Rp 10.000",
    description: "Es teh manis melati segar pelepas dahaga yang klasik.",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop",
    category: "Tea"
  },
  {
    id: "t2",
    name: "Lychee Tea",
    price: "Rp 15.000",
    description: "Es teh rasa buah leci manis segar yang dilengkapi dengan buah leci asli.",
    imageUrl: "https://images.unsplash.com/photo-1595981267035-7b04ec824ee7?q=80&w=600&auto=format&fit=crop",
    category: "Tea"
  },
  {
    id: "t3",
    name: "Lemon Tea",
    price: "Rp 15.000",
    description: "Perpaduan rasa teh berkualitas dengan kesegaran jeruk lemon alami.",
    imageUrl: "https://images.unsplash.com/photo-1529258283582-953e7179ed0a?q=80&w=600&auto=format&fit=crop",
    category: "Tea"
  },

  // === FOOD ===
  {
    id: "f1",
    name: "Kentang Goreng Original",
    price: "Rp 15.000",
    description: "Kentang goreng renyah bumbu garam gurih klasik cocok untuk cemilan nongkrong.",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f2",
    name: "Kentang Goreng Saus Keju",
    price: "Rp 18.000",
    description: "Kentang goreng gurih renyah disajikan dengan saus keju cheddar lumer.",
    imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f3",
    name: "Roti Bakar Coklat",
    price: "Rp 15.000",
    description: "Roti bakar empuk berselimut coklat premium manis melimpah.",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f4",
    name: "Roti Bakar Keju",
    price: "Rp 18.000",
    description: "Roti bakar gurih dengan taburan keju cheddar parut melimpah di atasnya.",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f5",
    name: "Indomie (Rebus/Goreng)",
    price: "Rp 18.000",
    description: "Mie instan favorit disajikan rebus hangat dengan kuah lezat atau goreng gurih.",
    imageUrl: "https://images.unsplash.com/photo-1612966608967-312ba5978db6?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f6",
    name: "Dimsum",
    price: "Rp 18.000",
    description: "Dimsum ayam kukus premium yang lembut dan padat, disajikan hangat dengan chili oil.",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f7",
    name: "Singkong Original",
    price: "Rp 15.000",
    description: "Singkong goreng tradisional bumbu rempah dengan tekstur mekar yang gurih empuk.",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f8",
    name: "Singkong Keju",
    price: "Rp 18.000",
    description: "Singkong empuk gurih bertabur keju parut gurih asin di atasnya.",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: "f9",
    name: "Cheese Burger",
    price: "Rp 18.000",
    description: "Burger dengan roti empuk, beef patty panggang juicy, saus lezat, dan keju lumer.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    category: "Food"
  },

  // === ESPRESSO BASE ===
  {
    id: "e1",
    name: "Americano Robusta",
    price: "Rp 17.000",
    description: "Espresso robusta premium dilarutkan air menghasilkan kopi hitam mantap rasa tegas.",
    imageUrl: "https://images.unsplash.com/photo-1551046710-755f61ba5119?q=80&w=600&auto=format&fit=crop",
    category: "Espresso Base"
  },
  {
    id: "e2",
    name: "Americano Arabika",
    price: "Rp 20.000",
    description: "Espresso arabika diseduh air dengan keasaman segar dan aroma harum.",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
    category: "Espresso Base"
  },
  {
    id: "e3",
    name: "Americano Peach Lime",
    price: "Rp 20.000",
    description: "Americano segar dengan tambahan sirup peach manis wangi dan kesegaran jeruk nipis.",
    imageUrl: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=600&auto=format&fit=crop",
    category: "Espresso Base"
  },
  {
    id: "e4",
    name: "Americano Cranberry",
    price: "Rp 20.000",
    description: "Americano dingin berpadu sensasi buah cranberry asam manis segar yang eksotis.",
    imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop",
    category: "Espresso Base"
  },
  {
    id: "e5",
    name: "Americano Lychee",
    price: "Rp 20.000",
    description: "Kopi hitam americano berpadu dengan sirup leci manis buah segar.",
    imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop",
    category: "Espresso Base"
  },
  {
    id: "e6",
    name: "Americano Blueberry",
    price: "Rp 20.000",
    description: "Kombinasi unik kopi hitam dengan cita rasa buah blueberry yang segar manis beraroma.",
    imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop",
    category: "Espresso Base"
  },

  // === FILTER COFFEE ===
  {
    id: "fc1",
    name: "Arabica",
    price: "Rp 20.000",
    description: "Kopi filter seduh manual (manual brew) dengan biji kopi single origin Arabika pilihan.",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    category: "Filter Coffee"
  },
  {
    id: "fc2",
    name: "Special Arabica",
    price: "Rp 25.000",
    description: "Kopi filter spesial dengan biji kopi premium mikro-lot kurasi musiman barista kami.",
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
    category: "Filter Coffee"
  }
];
