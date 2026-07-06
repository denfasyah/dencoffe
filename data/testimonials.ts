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
    name: "Eleanor Vance",
    role: "Kritikus Arsitektur",
    rating: 5,
    content: "Pengalaman minum kopi paling berkelas di kota ini. Desain tata suasananya menenangkan, dan stafnya adalah pengrajin sejati dalam meracik espresso.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRKxu1X3z4iC2U3xzrBZqdTdZHHcThIa5rEFyqLmGKsB5Vts-KkMWkFNXO5F140JxMvcqIkbjRK8DWcJnLHC7z9_z-n-qUykVzk4tpH21su2vl2jm1LDJctjrH4BFfNgHrQRubV7wJeKSUswCkp2put8wtsPjhP3itb1h8_3qAdiZ1loszjIKUoWFMKI_Qhw6gIQumrleCpyypmK7hznw4W-ZgqvuL5E70SfshIJMo_Py9xfCFnu1zhDyHyNLSL13F6FH4BaEvb2uY"
  },
  {
    id: "t2",
    name: "Julian Thorne",
    role: "Direktur Kreatif",
    rating: 5,
    content: "Saya datang ke sini hampir setiap pagi untuk bekerja. Wi-Fi berkecepatan tinggi, tempat duduk yang nyaman, dan kopinya selalu konsisten sempurna.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfSHaQdAnD3Vzq3z2jSly1_FZ0UkS4V8x26WBT2S6ovIAntgRG_VG469erkjML0IAsh_PqRu1k0YNQw5lvpooPejOBloM-nzkkTHbgLy8cXm_fPcrYa4p-3gLaKewUeJaDemPATLap4XashDDB9oRtUBoDsPdwMNgo6wmsQDWHmXGqI8wM1U0X-hpJHhVnhJQbKBB434tGHOxGB8yp6-imwpzdiCz24UxiYO1jGvcqxHfD0axAW8z2Od4NhYHPxlw4truUt3Ah5De"
  },
  {
    id: "t3",
    name: "Marcus Chen",
    role: "Pencinta Kopi",
    rating: 5,
    content: "Biji kopi single-origin yang mereka jual sangat luar biasa. Hasil seduhan saya di rumah meningkat drastis berkat dedikasi tim pemanggangan mereka.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO9WZQWO9Lb9QT7o-9-1objHAr6rxbctlrxXhnI86mOgEx9XFtmo9_MohW8P0UirGGrs8PvYOFDkIYBvzLUicxbt7rLRmhmpRrSmvSReZgOqHRmBJSUT_w89ILxmCSlthZDbUd3sfWJGrmSL48NQe_G4ik9MM1RQv-3kT3z9Qz_VC7X-xCVKrPmHw7328lCTM-LhuAAA66Dil34QucusGi718nijvSntq7lSe8Y2QqzKvOMJKDKSmt7nIanyRpuMPNp6C3OtzkVInT"
  },
  {
    id: "t4",
    name: "Sarah Utami",
    role: "Pekerja Lepas / Nomad",
    rating: 5,
    content: "Suasana kerja (work from cafe) yang sangat mendukung. Selain kopinya yang mantap, hidangan makanannya pun pas untuk menemani deadline.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNoqyF_S1ra7ZKsBLZn8n1pbLTeCA201R8jEaIvFBPwrARXHzKaAthXkUKnyQtKPEtvAQ9dPHdDCKyuiWOqfMrbqK43sWcRvcUHSYmtoGVHV711FBKmcK7fGUdMgmzQbDVO6v8Y-vFefVqKITQkveKhm0Vi_gHneN-YXr1CJJb6UOO36ksQw3CniqcwyVh9P4EWPqU4N10GqiN9naKAJMdsXVdh-WUL2Dba9reOOxbIMNwVZDgDyzmWmmcVaNaSR0AXPUR4zWZb1NA"
  },
  {
    id: "t5",
    name: "Budi Santoso",
    role: "Pengusaha Lokal",
    rating: 5,
    content: "Tempat andalan untuk mengadakan pertemuan bisnis santai. Lokasi strategis, area parkir luas, dan musholanya sangat bersih serta terjaga.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVHGHqwJFrGnPGR7h_og9M3XAmh0rOCe-B43qU9hiUXv6I22DolQK4FFn0zX7ZuPscWeX9Qd0EviWJtVtqYt-ZTA-N7g0W_EXZjZaxpO1ATQMIQl0KtmjlleQ68df536KVUIdZVbiM4N3PEF8MnvHrDnKKAfRZoo5R_f4vsoSOaRbnHoRnPLBFJh9MBSrAqOIrenJNKs5hx_sNiA4HR85Ih2xH6XQvGZDbhnrZ07iiKT2jivE5sOIXo534r7U_tHAxal_WtS-J34GX"
  }
];
