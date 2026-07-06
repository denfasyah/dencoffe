export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  category: "Makanan" | "Non Coffe" | "Coffe";
}

export const menuData: MenuItem[] = [
  // === COFFE ===
  {
    id: "m1",
    name: "Velvet Cloud Latte",
    price: "Rp 45.000",
    description: "Double shot espresso premium dengan microfoam susu organik yang lembut dan sentuhan vanila asli.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe"
  },
  {
    id: "m2",
    name: "Midnight Cold Brew",
    price: "Rp 38.000",
    description: "Proses ekstraksi dingin selama 24 jam yang menghasilkan cita rasa cokelat pekat alami dan keasaman rendah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe"
  },
  {
    id: "m7",
    name: "Classic Espresso",
    price: "Rp 28.000",
    description: "Single origin espresso murni dari biji Arabika Flores yang dipanggang medium-dark dengan aftertaste cokelat bitterseet.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe"
  },
  {
    id: "m8",
    name: "Caramel Macchiato",
    price: "Rp 50.000",
    description: "Espresso bertemu susu segar dengan siraman karamel madu yang manis dan lapisan foam lembut di atasnya.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe"
  },
  {
    id: "m9",
    name: "Denbiz Signature Brew",
    price: "Rp 55.000",
    description: "Racikan eksklusif barista kami: campuran espresso, kopi tubruk Toraja, susu segar, dan rempah pilihan.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De",
    category: "Coffe"
  },
  {
    id: "m10",
    name: "Flat White",
    price: "Rp 42.000",
    description: "Espresso ristretto dengan rasio susu yang tepat menciptakan harmoni rasa yang pekat namun lembut.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT",
    category: "Coffe"
  },
  // === NON COFFE ===
  {
    id: "m3",
    name: "Matcha Kyoto Oasis",
    price: "Rp 48.000",
    description: "Teh matcha Uji murni asal Kyoto yang diseduh dengan susu oat hangat berkualitas tinggi.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Mu5q5vwgN8J69sl-Ppj2iBKifIAutW3nfamjNldVAa43V_XTpZ3X4N4XVUj7mQ_Q1VGwZqK7T4yX_d7V4CaDwPPyuM2arf-hcd7frljby6f1K_Uj3fPxnOXG1JLoSzp4QdEkj5qf7ltFQ789kwz_266Mfb_QgYBnhl6KQsXixWRfK10454wsSIslCaPtGizXIcSJWGZLliKiOALIz52iIekianAjbnv7eTkiftem4_GorSGmPu-WL9lpEGynRNmEyeov8Rm8JRUv",
    category: "Non Coffe"
  },
  {
    id: "m6",
    name: "Crimson Berry Iced Tea",
    price: "Rp 35.000",
    description: "Seduhan dingin bunga rosella merah segar dipadukan dengan ekstrak stroberi dan perasan lemon segar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe"
  },
  {
    id: "m11",
    name: "Chocolate Lava Shake",
    price: "Rp 45.000",
    description: "Milkshake cokelat Belgian premium yang kaya rasa dengan lapisan cream cheese frosting di atas.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Mu5q5vwgN8J69sl-Ppj2iBKifIAutW3nfamjNldVAa43V_XTpZ3X4N4XVUj7mQ_Q1VGwZqK7T4yX_d7V4CaDwPPyuM2arf-hcd7frljby6f1K_Uj3fPxnOXG1JLoSzp4QdEkj5qf7ltFQ789kwz_266Mfb_QgYBnhl6KQsXixWRfK10454wsSIslCaPtGizXIcSJWGZLliKiOALIz52iIekianAjbnv7eTkiftem4_GorSGmPu-WL9lpEGynRNmEyeov8Rm8JRUv",
    category: "Non Coffe"
  },
  {
    id: "m12",
    name: "Sparkling Lychee",
    price: "Rp 32.000",
    description: "Minuman soda ringan dengan sirup leci asli, daun mint segar, dan irisan jeruk nipis yang menyegarkan.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA",
    category: "Non Coffe"
  },
  // === MAKANAN ===
  {
    id: "m4",
    name: "The Brunch Plate",
    price: "Rp 85.000",
    description: "Telur rebus setengah matang di atas roti sourdough panggang, disajikan dengan tomat heirloom dan alpukat mentega segar.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "m5",
    name: "Premium Butter Croissant",
    price: "Rp 32.000",
    description: "Pastry mentega khas Perancis yang renyah di luar, berongga sempurna, dan lembut di bagian dalam.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVHGHqwJFrGnPGR7h_og9M3XAmh0rOCe-B43qU9hiUXv6I22DolQK4FFn0zX7ZuPscWeX9Qd0EviWJtVtqYt-ZTA-N7g0W_EXZjZaxpO1ATQMIQl0KtmjlleQ68df536KVUIdZVbiM4N3PEF8MnvHrDnKKAfRZoo5R_f4vsoSOaRbnHoRnPLBFJh9MBSrAqOIrenJNKs5hx_sNiA4HR85Ih2xH6XQvGZDbhnrZ07iiKT2jivE5sOIXo534r7U_tHAxal_WtS-J34GX",
    category: "Makanan"
  },
  {
    id: "m13",
    name: "Avocado Toast Deluxe",
    price: "Rp 68.000",
    description: "Roti sourdough panggang tebal dengan selai alpukat mentega, telur mata sapi, biji wijen, dan flakes cabai merah.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc2WTstdLZ5_6akiyNA-gjeWnYod5PznZFtHzdSnyE7J3vnig1lT0-RypWb6rSxbhUhLB8IelRXJRDLoDpTv944zeH84oMar2yG3GabWgz-jizTSAYMWspT8AZrOK3t0VRJnlGVZ9rSITaP9SP2HMU0s7o-aroBLKEVwOF_rpLUrZRMB1DUu9E0r15LXuQO-jR0R4Vtj1rz0tAF2wuHu4bW1d-ZkGoFQBQoybc9wFLyFzct2B6_Z93byIDM3ABa-Gjj6cley0n4GN-",
    category: "Makanan"
  },
  {
    id: "m14",
    name: "Cheese Banana Pancake",
    price: "Rp 55.000",
    description: "Pancake fluffy dengan topping keju cheddar leleh, irisan pisang karamel, dan madu hutan pilihan.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVHGHqwJFrGnPGR7h_og9M3XAmh0rOCe-B43qU9hiUXv6I22DolQK4FFn0zX7ZuPscWeX9Qd0EviWJtVtqYt-ZTA-N7g0W_EXZjZaxpO1ATQMIQl0KtmjlleQ68df536KVUIdZVbiM4N3PEF8MnvHrDnKKAfRZoo5R_f4vsoSOaRbnHoRnPLBFJh9MBSrAqOIrenJNKs5hx_sNiA4HR85Ih2xH6XQvGZDbhnrZ07iiKT2jivE5sOIXo534r7U_tHAxal_WtS-J34GX",
    category: "Makanan"
  },
];
