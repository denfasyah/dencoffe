export interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  tagline: string;
  title: string;
  mainParagraph: string;
  extendedParagraph: string;
  yearsOfCraft: string;
  yearsLabel: string;
  imageUrl: string;
  imageAlt: string;
  features: AboutFeature[];
}

export const aboutData: AboutData = {
  tagline: "Kisah Kami",
  title: "Dibuat untuk Penikmat Kopi, Dicintai Lintas Generasi",
  mainParagraph: "Denbiz Coffee bukan sekadar kedai kopi; ini adalah perlindungan bagi panca indera Anda. Kami percaya setiap biji kopi menceritakan kisah tanah tempat ia tumbuh dan tangan-tangan yang merawatnya. Master roaster kami dengan cermat menghadirkan narasi ini dalam setiap racikan kopi.",
  extendedParagraph: "Berdiri sejak tahun 1998, kami terus menjaga komitmen untuk menghadirkan biji kopi pilihan dari berbagai penjuru Nusantara dan dunia. Dari proses pemilihan ceri kopi merah yang matang sempurna, fermentasi yang terkontrol, pemanggangan dengan profil presisi, hingga penyajian oleh barista berpengalaman, kami memastikan setiap cangkir memberikan pengalaman tak terlupakan. Kami percaya bahwa secangkir kopi yang baik mampu menyatukan hati, menginspirasi ide-ide cemerlang, dan menemani setiap momen berharga Anda.",
  yearsOfCraft: "25+",
  yearsLabel: "Tahun Dedikasi",
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRKxu1X3z4iC2U3xzrBZqdTdZHHcThIa5rEFyqLmGKsB5Vts-KkMWkFNXO5F140JxMvcqIkbjRK8DWcJnLHC7z9_z-n-qUykVzk4tpH21su2vl2jm1LDJctjrH4BFfNgHrQRubV7wJeKSUswCkp2put8wtsPjhP3itb1h8_3qAdiZ1loszjIKUoWFMKI_Qhw6gIQumrleCpyypmK7hznw4W-ZgqvuL5E70SfshIJMo_Py9xfCFnu1zhDyHyNLSL13F6FH4BaEvb2uY",
  imageAlt: "Barista sedang menyeduh kopi dengan metode manual brew",
  features: [
    {
      icon: "Leaf",
      title: "Sumber yang Berkelanjutan",
      description: "100% biji kopi organik pilihan yang diperoleh langsung dari petani lokal dengan prinsip keadilan perdagangan (fair-trade)."
    },
    {
      icon: "Award",
      title: "Racikan Pemenang Penghargaan",
      description: "Terpilih sebagai kedai pemanggangan kopi (roastery) terbaik di kota ini selama lima tahun berturut-turut."
    }
  ]
};
