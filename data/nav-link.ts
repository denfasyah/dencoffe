export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Galeri", href: "#gallery" },
  { label: "Kontak", href: "#contact" },
];