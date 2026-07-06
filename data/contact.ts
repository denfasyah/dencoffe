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
    facebook: string;
    emailAddress: string;
  };
}

export const contactData: ContactData = {
  address: {
    icon: "location_on",
    title: "Alamat Kami",
    value: "Jl. Lembah Kopi No. 123, Bandung, Jawa Barat"
  },
  hours: {
    icon: "schedule",
    title: "Jam Operasional",
    value: "Senin - Minggu: 07:00 - 22:00 WIB"
  },
  phone: {
    icon: "call",
    title: "Hubungi Langsung",
    value: "+62 (22) 555-1234"
  },
  email: "hello@denbizcoffee.com",
  footerDescription: "Meningkatkan ritual harian menjadi pengalaman yang luar biasa. Bergabunglah dengan kami untuk secangkir keunggulan kopi, dibuat dengan semangat dan disajikan dengan sepenuh hati.",
  socials: {
    instagram: "https://instagram.com/denbizcoffee",
    facebook: "https://facebook.com/denbizcoffee",
    emailAddress: "mailto:hello@denbizcoffee.com"
  }
};
