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
    imageUrl: "/assets/menu/coffe/kopitubrukrobusta1.png",
    category: "Coffee"
  },
  {
    id: "c2",
    name: "Kopi Tubruk Arabika",
    price: "Rp 15.000",
    description: "Seduhan kopi tubruk dengan biji Arabika pilihan yang kaya aroma dan tingkat keasaman lembut.",
    imageUrl: "/assets/menu/coffe/kopitubrukarabika1.png",
    category: "Coffee"
  },
  {
    id: "c3",
    name: "Kopi Susu Gula Aren",
    price: "Rp 17.000",
    description: "Perpaduan espresso, susu segar, dan sirup gula aren manis gurih alami khas Indonesia.",
    imageUrl: "/assets/menu/coffe/kopisusugulaaren.png",
    category: "Coffee"
  },
  {
    id: "c4",
    name: "Cappucino",
    price: "Rp 20.000",
    description: "Kombinasi seimbang espresso pekat, susu hangat (steamed milk), dan busa susu yang tebal.",
    imageUrl: "/assets/menu/coffe/capucino.png",
    category: "Coffee"
  },
  {
    id: "c5",
    name: "Coffee Lemon",
    price: "Rp 20.000",
    description: "Kombinasi segar espresso dingin dengan perasan lemon asam-manis yang menyegarkan dahaga.",
    imageUrl: "/assets/menu/coffe/coffelemon.png",
    category: "Coffee"
  },
  {
    id: "c6",
    name: "Coffee Latte",
    price: "Rp 20.000",
    description: "Espresso dengan paduan susu segar hangat yang melimpah dan lapisan foam tipis di atasnya.",
    imageUrl: "/assets/menu/coffe/coffelatte.png",
    category: "Coffee"
  },
  {
    id: "c7",
    name: "Caramel Latte",
    price: "Rp 20.000",
    description: "Coffee latte lembut dengan tambahan sirup karamel gurih nan manis aromatik.",
    imageUrl: "/assets/menu/coffe/caramellatte.png",
    category: "Coffee"
  },
   {
    id: "c8",
    name: "Caramel Mocha Float",
    price: "Rp 25.000",
    description: "Coffee latte lembut dengan tambahan sirup karamel gurih nan manis aromatik.",
    imageUrl: "/assets/menu/coffe/caramellatte.png",
    category: "Coffee"
  },
  {
    id: "c9",
    name: "Vanilla Latte",
    price: "Rp 20.000",
    description: "Latte creamy berpadu dengan sirup vanilla premium yang harum menenangkan.",
    imageUrl: "/assets/menu/coffe/vanillalatte.png",
    category: "Coffee"
  },
  {
    id: "c10",
    name: "Hazelnut",
    price: "Rp 20.000",
    description: "Minuman espresso bersusu dengan tambahan sirup kacang hazelnut yang gurih legit.",
    imageUrl: "/assets/menu/coffe/hazelnut.png",
    category: "Coffee"
  },
  {
    id: "c11",
    name: "Klepon / Pandan",
    price: "Rp 20.000",
    description: "Sensasi kopi susu unik dengan rasa gurih pandan kelapa layaknya kue tradisional klepon.",
    imageUrl: "/assets/menu/coffe/coffeklepon.png",
    category: "Coffee"
  },
  {
    id: "c12",
    name: "Butterscotch",
    price: "Rp 20.000",
    description: "Kopi susu dengan rasa manis mentega karamel panggang (butterscotch) yang tebal.",
    imageUrl: "/assets/menu/coffe/butterscotch.png",
    category: "Coffee"
  },
  {
    id: "c13",
    name: "Red Velvet",
    price: "Rp 20.000",
    description: "Perpaduan kopi dengan rasa manis beludru merah yang lembut dan creamy.",
    imageUrl: "/assets/menu/coffe/cofferedvelvet.png",
    category: "Coffee"
  },
  {
    id: "c14",
    name: "Special Blend",
    price: "Rp 22.000",
    description: "Racikan kopi spesial house blend andalan Kopi Bang Jenggot dengan cita rasa khas.",
    imageUrl: "/assets/menu/coffe/spesialblend.png",
    category: "Coffee"
  },
     {
    id: "c15",
    name: "Spanish Latte",
    price: "Rp 17.000",
    description: "Coffee latte lembut dengan tambahan sirup karamel gurih nan manis aromatik.",
    imageUrl: "/assets/menu/coffe/caramellatte.png",
    category: "Coffee"
  },

  // === NON COFFEE ===
  {
    id: "nc1",
    name: "Matcha Latte",
    price: "Rp 18.000",
    description: "Bubuk teh hijau Jepang premium asli diseduh dengan susu segar yang creamy.",
    imageUrl: "/assets/menu/noncoffe/matchalatte.png",
    category: "Non Coffee"
  },
  {
    id: "nc2",
    name: "Chocolatte",
    price: "Rp 18.000",
    description: "Minuman cokelat pekat berkualitas tinggi disajikan hangat atau dingin dengan susu segar.",
    imageUrl: "/assets/menu/noncoffe/chocolatte.png",
    category: "Non Coffee"
  },
  {
    id: "nc3",
    name: "Ocean Blue",
    price: "Rp 18.000",
    description: "Minuman soda citrus biru yang menyegarkan dengan paduan rasa masam manis.",
    imageUrl: "/assets/menu/noncoffe/oceanblue.png",
    category: "Non Coffee"
  },
  {
    id: "nc4",
    name: "Wedang Jahe",
    price: "Rp 12.000",
    description: "Seduhan air jahe tradisional yang hangat berkhasiat meringankan tubuh.",
    imageUrl: "/assets/menu/noncoffe/wedangjahe.png",
    category: "Non Coffee"
  },
  {
    id: "nc5",
    name: "Red Velvet",
    price: "Rp 18.000",
    description: "Minuman susu creamy non-kopi dengan cita rasa kue red velvet merah beludru.",
    imageUrl: "/assets/menu/noncoffe/redvelvet.png",
    category: "Non Coffee"
  },

  // === TEA ===
  {
    id: "t1",
    name: "Ice Tea",
    price: "Rp 10.000",
    description: "Es teh manis melati segar pelepas dahaga yang klasik.",
    imageUrl: "/assets/menu/tea/icedtea.png",
    category: "Tea"
  },
  {
    id: "t2",
    name: "Lychee Tea",
    price: "Rp 15.000",
    description: "Es teh rasa buah leci manis segar yang dilengkapi dengan buah leci asli.",
    imageUrl: "/assets/menu/tea/lycheetea.png",
    category: "Tea"
  },
  {
    id: "t3",
    name: "Lemon Tea",
    price: "Rp 15.000",
    description: "Perpaduan rasa teh berkualitas dengan kesegaran jeruk lemon alami.",
    imageUrl: "/assets/menu/tea/lemontea.png",
    category: "Tea"
  },

  // === FOOD ===
  {
    id: "f1",
    name: "Kentang Goreng Original",
    price: "Rp 15.000",
    description: "Kentang goreng renyah bumbu garam gurih klasik cocok untuk cemilan nongkrong.",
    imageUrl: "/assets/menu/food/kentanggorengoriginal.png",
    category: "Food"
  },
  {
    id: "f2",
    name: "Kentang Goreng Saus Keju",
    price: "Rp 18.000",
    description: "Kentang goreng gurih renyah disajikan dengan saus keju cheddar lumer.",
    imageUrl: "/assets/menu/food/kentanggorengkeju.png",
    category: "Food"
  },
  {
    id: "f3",
    name: "Roti Bakar Coklat",
    price: "Rp 15.000",
    description: "Roti bakar empuk berselimut coklat premium manis melimpah.",
    imageUrl: "/assets/menu/food/rotibakarcoklat.png",
    category: "Food"
  },
  {
    id: "f4",
    name: "Roti Bakar Keju",
    price: "Rp 18.000",
    description: "Roti bakar gurih dengan taburan keju cheddar parut melimpah di atasnya.",
    imageUrl: "/assets/menu/food/rotibakarkeju.png",
    category: "Food"
  },
  {
    id: "f5",
    name: "Roti Bakar Coklat Keju",
    price: "Rp 20.000",
    description: "Roti bakar gurih dengan taburan keju cheddar parut melimpah di atasnya.",
    imageUrl: "/assets/menu/food/rotibakarkeju.png",
    category: "Food"
  },
  {
    id: "f6",
    name: "Indomie (Rebus/Goreng)",
    price: "Rp 18.000",
    description: "Mie instan favorit disajikan rebus hangat dengan kuah lezat atau goreng gurih.",
    imageUrl: "/assets/menu/food/indomie.png",
    category: "Food"
  },
  {
    id: "f7",
    name: "Dimsum",
    price: "Rp 18.000",
    description: "Dimsum ayam kukus premium yang lembut dan padat, disajikan hangat dengan chili oil.",
    imageUrl: "/assets/menu/food/dimsum.png",
    category: "Food"
  },
  {
    id: "f8",
    name: "Singkong Original",
    price: "Rp 15.000",
    description: "Singkong goreng tradisional bumbu rempah dengan tekstur mekar yang gurih empuk.",
    imageUrl: "/assets/menu/food/singkongoriginal.png",
    category: "Food"
  },
  {
    id: "f9",
    name: "Singkong Keju",
    price: "Rp 18.000",
    description: "Singkong empuk gurih bertabur keju parut gurih asin di atasnya.",
    imageUrl: "/assets/menu/food/singkongkeju.png",
    category: "Food"
  },
  {
    id: "f10",
    name: "Cheese Burger",
    price: "Rp 18.000",
    description: "Burger dengan roti empuk, beef patty panggang juicy, saus lezat, dan keju lumer.",
    imageUrl: "/assets/menu/food/cheseeburger.png",
    category: "Food"
  },

  // === ESPRESSO BASE ===
  {
    id: "e1",
    name: "Americano Robusta",
    price: "Rp 17.000",
    description: "Espresso robusta premium dilarutkan air menghasilkan kopi hitam mantap rasa tegas.",
    imageUrl: "/assets/menu/espressobase/americanorobusta.png",
    category: "Espresso Base"
  },
  {
    id: "e2",
    name: "Americano Arabika",
    price: "Rp 20.000",
    description: "Espresso arabika diseduh air dengan keasaman segar dan aroma harum.",
    imageUrl: "/assets/menu/espressobase/americanoarabika.png",
    category: "Espresso Base"
  },
  {
    id: "e3",
    name: "Americano Peach Lime",
    price: "Rp 20.000",
    description: "Americano segar dengan tambahan sirup peach manis wangi dan kesegaran jeruk nipis.",
    imageUrl: "/assets/menu/espressobase/americanopeachlime.png",
    category: "Espresso Base"
  },
  {
    id: "e4",
    name: "Americano Cranberry",
    price: "Rp 20.000",
    description: "Americano dingin berpadu sensasi buah cranberry asam manis segar yang eksotis.",
    imageUrl: "/assets/menu/espressobase/americanocranberry.png",
    category: "Espresso Base"
  },
  {
    id: "e5",
    name: "Americano Lychee",
    price: "Rp 20.000",
    description: "Kopi hitam americano berpadu dengan sirup leci manis buah segar.",
    imageUrl: "/assets/menu/espressobase/americanolychee.png",
    category: "Espresso Base"
  },
  {
    id: "e6",
    name: "Americano Blueberry",
    price: "Rp 20.000",
    description: "Kombinasi unik kopi hitam dengan cita rasa buah blueberry yang segar manis beraroma.",
    imageUrl: "/assets/menu/espressobase/americanoblueberry.png",
    category: "Espresso Base"
  },

  // === FILTER COFFEE ===
  {
    id: "fc1",
    name: "Arabica",
    price: "Rp 20.000",
    description: "Kopi filter seduh manual (manual brew) dengan biji kopi single origin Arabika pilihan.",
    imageUrl: "/assets/menu/filtercoffe/arabika.png",
    category: "Filter Coffee"
  },
  {
    id: "fc2",
    name: "Special Arabica",
    price: "Rp 25.000",
    description: "Kopi filter spesial dengan biji kopi premium mikro-lot kurasi musiman barista kami.",
    imageUrl: "/assets/menu/filtercoffe/arabika.png",
    category: "Filter Coffee"
  }
];
