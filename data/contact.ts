export interface ContactItem {
  icon: string;
  title: string;
  value: string;
}

export interface ContactData {
  address: ContactItem;
  hours: ContactItem;
  phone: ContactItem;
  email: string;
  footerDescription: string;
  socials: {
    instagram: string;
    tiktok: string;
    whatsapp: string;
  };
}

export const contactData: ContactData = {
  address: {
    icon: "MapPin",
    title: "Alamat Kami",
    value: "Jl. Kali Baru Barat No.1G, RT.007/RW.011, Kota Baru, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17133"
  },
  hours: {
    icon: "Clock",
    title: "Jam Operasional",
    value: `Selasa - Jum'at : 13:00 - 21:00 WIB \n Sabtu - Minggu : 10:00 - 22:00 WIB \n Senin : Libur`
  },
  phone: {
    icon: "Phone",
    title: "Hubungi Langsung",
    value: "+6287875330263"
  },
  email: "[EMAIL_ADDRESS]",
  footerDescription: "Meningkatkan ritual harian menjadi pengalaman yang luar biasa. Bergabunglah dengan kami untuk secangkir keunggulan kopi, dibuat dengan semangat dan disajikan dengan sepenuh hati.",
  socials: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    whatsapp: "https://wa.me/6287875330263?text=Halo%20Kedai%20Kopi%20Bang%20Jenggot%2C%20saya%20ingin%20melakukan%20reservasi%20meja%20untuk%20nongkrong%20/%20bekerja."
  }
};
