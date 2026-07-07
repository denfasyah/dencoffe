export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: "Makanan" | "Non Coffe" | "Coffe";
  subCategory?: string; // e.g. "Tea", "Manual Brew V60", "Coffee"
}

export const menuData: MenuItem[] = [
  // === COFFEE ===
  {
    id: "c1",
    name: "Brown Sugar",
    price: "Rp 15.000",
    description: "Kopi susu espresso premium dengan sirup gula aren asli yang manis gurih alami.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c2",
    name: "Cappuccino",
    price: "Rp 15.000",
    description: "Kombinasi klasik double espresso, steamed milk, dan foam tebal lembut di atasnya.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c3",
    name: "Americano",
    price: "Rp 15.000",
    description: "Espresso shot premium yang dilarutkan dengan air panas menghasilkan cita rasa kopi hitam murni.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c4",
    name: "Hazelnut",
    price: "Rp 18.000",
    description: "Espresso dengan paduan susu segar hangat dan sirup rasa hazelnut panggang aromatik.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c5",
    name: "Vanilla Latte",
    price: "Rp 18.000",
    description: "Latte lembut beraroma vanila premium yang manis, menenangkan, dan seimbang.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c6",
    name: "Coffee Lemon",
    price: "Rp 18.000",
    description: "Sensasi unik kopi espresso segar berpadu dengan sirup lemon masam segar dan soda dingin.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c7",
    name: "Caramel Latte",
    price: "Rp 18.000",
    description: "Espresso premium dengan susu segar dan siraman sirup karamel gurih nan manis melimpah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c8",
    name: "Special Blend",
    price: "Rp 18.000",
    description: "Racikan kopi spesial house blend khas Denbiz dengan Aftertaste manis cokelat pekat.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c9",
    name: "Honey Long Black",
    price: "Rp 18.000",
    description: "Kopi hitam Long Black pekat dengan tambahan pemanis madu alami segar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c10",
    name: "Red Velvet",
    price: "Rp 18.000",
    description: "Kopi dengan sensasi rasa manis kue Red Velvet beludru merah yang lembut di lidah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c11",
    name: "Klepon Coffee",
    price: "Rp 18.000",
    description: "Kopi susu dengan cita rasa pandan, santan kelapa, dan saus gula aren layaknya kue klepon tradisional.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe",
    subCategory: "Coffee"
  },
  {
    id: "c12",
    name: "Coffee Beer",
    price: "Rp 15.000",
    description: "Minuman kopi bersoda non-alkohol yang menyegarkan dengan sentuhan manis yang seimbang.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe",
    subCategory: "Coffee"
  },

  // === MANUAL BREW V60 ===
  {
    id: "mb1",
    name: "Gayo Wine",
    price: "Rp 20.000",
    description: "Kopi V60 specialty beans dengan fermentasi winey alami beraroma anggur pekat masam segar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Manual Brew V60"
  },
  {
    id: "mb2",
    name: "Gayo Honey",
    price: "Rp 20.000",
    description: "Single origin dengan proses Honey yang manis alami dan keasaman buah yang lembut.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Manual Brew V60"
  },
  {
    id: "mb3",
    name: "Puntang Wine",
    price: "Rp 20.000",
    description: "Kopi Gunung Puntang Jawa Barat hasil fermentasi wine yang wangi buah berry dan manis pekat.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Manual Brew V60"
  },
  {
    id: "mb4",
    name: "Kerinci",
    price: "Rp 20.000",
    description: "Biji kopi single origin asal Kerinci dengan notes sitrus segar dan clean aftertaste.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe",
    subCategory: "Manual Brew V60"
  },

  // === TEA ===
  {
    id: "t1",
    name: "Ice Tea",
    price: "Rp 7.000",
    description: "Es teh manis jasmine segar pelepas dahaga klasik.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe",
    subCategory: "Tea"
  },
  {
    id: "t2",
    name: "Lychee Tea",
    price: "Rp 15.000",
    description: "Es teh manis rasa buah leci segar dengan buah leci utuh di dalamnya.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe",
    subCategory: "Tea"
  },
  {
    id: "t3",
    name: "Lemon Tea",
    price: "Rp 15.000",
    description: "Es teh dengan perasan air lemon segar yang kaya vitamin C dan menyegarkan.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe",
    subCategory: "Tea"
  },
  {
    id: "t4",
    name: "Honey Lemon Tea",
    price: "Rp 15.000",
    description: "Paduan es teh, lemon segar, dan madu manis alami berkhasiat tinggi.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe",
    subCategory: "Tea"
  },

  // === NON-COFFEE ===
  {
    id: "nc1",
    name: "Matcha Latte",
    price: "Rp 15.000",
    description: "Bubuk matcha premium Jepang berpadu dengan susu segar menghasilkan rasa manis lembut beraroma teh hijau.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Mu5q5vwgN8J69sl-Ppj2iBKifIAutW3nfamjNldVAa43V_XTpZ3X4N4XVUj7mQ_Q1VGwZqK7T4yX_d7V4CaDwPPyuM2arf-hcd7frljby6f1K_Uj3fPxnOXG1JLoSzp4QdEkj5qf7ltFQ789kwz_266Mfb_QgYBnhl6KQsXixWRfK10454wsSIslCaPtGizXIcSJWGZLliKiOALIz52iIekianAjbnv7eTkiftem4_GorSGmPu-WL9lpEGynRNmEyeov8Rm8JRUv",
    category: "Non Coffe",
    subCategory: "Non-Coffee"
  },
  {
    id: "nc2",
    name: "Chocolatte",
    price: "Rp 15.000",
    description: "Minuman cokelat premium pekat yang disajikan creamy dengan steamed milk lembut.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Mu5q5vwgN8J69sl-Ppj2iBKifIAutW3nfamjNldVAa43V_XTpZ3X4N4XVUj7mQ_Q1VGwZqK7T4yX_d7V4CaDwPPyuM2arf-hcd7frljby6f1K_Uj3fPxnOXG1JLoSzp4QdEkj5qf7ltFQ789kwz_266Mfb_QgYBnhl6KQsXixWRfK10454wsSIslCaPtGizXIcSJWGZLliKiOALIz52iIekianAjbnv7eTkiftem4_GorSGmPu-WL9lpEGynRNmEyeov8Rm8JRUv",
    category: "Non Coffe",
    subCategory: "Non-Coffee"
  },
  {
    id: "nc3",
    name: "Ocean Blue",
    price: "Rp 18.000",
    description: "Minuman soda biru dengan sirup jeruk citrus curacao yang masam, manis, dan menyegarkan.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe",
    subCategory: "Non-Coffee"
  },

  // === FOOD ===
  {
    id: "f1",
    name: "Dimsum (Original / Mentai)",
    price: "Rp 12.000",
    description: "Dimsum ayam kukus premium yang gurih disajikan dengan saus original atau saus mentai creamy pedas.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "f2",
    name: "French Fries (Original)",
    price: "Rp 10.000",
    description: "Kentang goreng renyah bumbu garam gurih klasik.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "f3",
    name: "Indomie (Goreng / Rebus)",
    price: "Rp 12.000",
    description: "Mie legendaris favorit disajikan goreng kering atau rebus hangat berkuah gurih dengan telur mata sapi dan sayuran.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "f4",
    name: "Croffle (Original / Saus Caramel)",
    price: "Rp 12.000",
    description: "Croissant waffle manis renyah dengan siraman karamel wangi melimpah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVHGHqwJFrGnPGR7h_og9M3XAmh0rOCe-B43qU9hiUXv6I22DolQK4FFn0zX7ZuPscWeX9Qd0EviWJtVtqYt-ZTA-N7g0W_EXZjZaxpO1ATQMIQl0KtmjlleQ68df536KVUIdZVbiM4N3PEF8MnvHrDnKKAfRZoo5R_f4vsoSOaRbnHoRnPLBFJh9MBSrAqOIrenJNKs5hx_sNiA4HR85Ih2xH6XQvGZDbhnrZ07iiKT2jivE5sOIXo534r7U_tHAxal_WtS-J34GX",
    category: "Makanan"
  },
  {
    id: "f5",
    name: "Cheese Cassava (Original)",
    price: "Rp 12.000",
    description: "Singkong keju lembut renyah bertabur keju cheddar parut melimpah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "f6",
    name: "Burger",
    price: "Rp 12.000",
    description: "Roti burger empuk diisi patty daging panggang juicy, keju, selada, dan saus lezat.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "f7",
    name: "Hotdog",
    price: "Rp 12.000",
    description: "Roti hotdog panjang isi sosis sapi panggang premium dengan mayones dan saus mustard segar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "f8",
    name: "French Fries (Cheese)",
    price: "Rp 12.000",
    description: "Kentang goreng renyah yang dilumuri saus keju cheddar creamy meleleh melimpah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  }
];
