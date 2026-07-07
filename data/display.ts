export interface DisplayBoardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  promoBadge?: string;
  imageUrl: string;
}

export const displayBoardData: DisplayBoardItem[] = [
  {
    id: "d1",
    title: "Denbiz Signature Brew",
    subtitle: "Rekomendasi Barista Terbaik",
    description: "Racikan eksklusif barista kami: campuran double espresso Arabika Flores, susu segar, dan sirup rempah racikan rahasia.",
    price: "Rp 55.000",
    promoBadge: "Bestseller",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De"
  },
  {
    id: "d2",
    title: "Artisan Pastry & Coffee Combo",
    subtitle: "Menu Sarapan Istimewa",
    description: "Nikmati perpaduan sempurna dari kue croissant mentega segar yang dipanggang hari ini dengan secangkir Velvet Cloud Latte hangat.",
    price: "Mulai Rp 75.000",
    promoBadge: "Paket Hemat 20%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Mu5q5vwgN8J69sl-Ppj2iBKifIAutW3nfamjNldVAa43V_XTpZ3X4N4XVUj7mQ_Q1VGwZqK7T4yX_d7V4CaDwPPyuM2arf-hcd7frljby6f1K_Uj3fPxnOXG1JLoSzp4QdEkj5qf7ltFQ789kwz_266Mfb_QgYBnhl6KQsXixWRfK10454wsSIslCaPtGizXIcSJWGZLliKiOALIz52iIekianAjbnv7eTkiftem4_GorSGmPu-WL9lpEGynRNmEyeov8Rm8JRUv"
  },
  {
    id: "d3",
    title: "Midnight Cold Brew",
    subtitle: "Kesegaran Dingin 24 Jam",
    description: "Proses ekstraksi dingin yang sabar menghasilkan kopi hitam lembut tanpa rasa pahit berlebih. Sangat cocok menemani siang hari Anda.",
    price: "Rp 38.000",
    promoBadge: "Coffee of the Week",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT"
  },
  {
    id: "d4",
    title: "Matcha Latte Premium",
    subtitle: "Uji Matcha Asli Jepang",
    description: "Matcha grade upacara minum teh dari Kyoto dikocok tradisional dan disajikan dengan steamed milk bertekstur beludru lembut.",
    price: "Rp 46.000",
    promoBadge: "Non-Coffee Favorite",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA"
  }
];
