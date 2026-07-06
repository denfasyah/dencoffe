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
    value: "Jl. Lembah Kopi No. 123, Bandung, Jawa Barat"
  },
  hours: {
    icon: "Clock",
    title: "Jam Operasional",
    value: "Senin - Minggu: 07:00 - 22:00 WIB"
  },
  phone: {
    icon: "Phone",
    title: "Hubungi Langsung",
    value: "+62 (22) 555-1234"
  },
  email: "hello@denbizcoffee.com",
  footerDescription: "Meningkatkan ritual harian menjadi pengalaman yang luar biasa. Bergabunglah dengan kami untuk secangkir keunggulan kopi, dibuat dengan semangat dan disajikan dengan sepenuh hati.",
  socials: {
    instagram: "https://instagram.com/denbizcoffee",
    tiktok: "https://tiktok.com/@denbizcoffee",
    whatsapp: "https://wa.me/6281234567890?text=Halo%20Denbiz%20Coffee%2C%20saya%20ingin%20melakukan%20reservasi%20meja%20untuk%20nongkrong%20/%20bekerja."
  }
};
