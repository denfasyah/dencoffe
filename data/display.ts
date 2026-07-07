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
    id: "d2",
    title: "Artisan Pastry & Coffee Combo",
    subtitle: "Promo Sarapan Istimewa",
    description: "Nikmati perpaduan sempurna dari kue croissant mentega segar yang dipanggang hari ini dengan secangkir Velvet Cloud Latte hangat.",
    price: "Rp 75.000",
    promoBadge: "PROMO HEMAT 20%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Mu5q5vwgN8J69sl-Ppj2iBKifIAutW3nfamjNldVAa43V_XTpZ3X4N4XVUj7mQ_Q1VGwZqK7T4yX_d7V4CaDwPPyuM2arf-hcd7frljby6f1K_Uj3fPxnOXG1JLoSzp4QdEkj5qf7ltFQ789kwz_266Mfb_QgYBnhl6KQsXixWRfK10454wsSIslCaPtGizXIcSJWGZLliKiOALIz52iIekianAjbnv7eTkiftem4_GorSGmPu-WL9lpEGynRNmEyeov8Rm8JRUv"
  },
  {
    id: "d1",
    title: "Denbiz Signature Brew",
    subtitle: "Rekomendasi Barista Terbaik",
    description: "Racikan eksklusif barista kami: campuran double espresso Arabika Flores, susu segar, dan sirup rempah racikan rahasia.",
    price: "Rp 55.000",
    promoBadge: "BEST SELLER",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De"
  }
];
