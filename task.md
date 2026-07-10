# Fase Pengembangan & Deployment: Kedai Kopi Bang Jenggot

Dokumen ini berisi daftar tugas (*task list*) dari tahap saat ini hingga rilis ke domain `.com` (menggunakan layanan Rumahweb). 
Di sini juga dirincikan pembagian tugas antara Anda (Klien/Pemilik) dan saya (Agent AI).

## Fase 1: Finalisasi Fitur & Tampilan (Local Development)
*Fase ini sedang kita jalankan, memastikan semua komponen siap sebelum online.*

- [x] Refactor dan perbaiki Digital Menu Board (Animasi, tata letak, resolusi).
- [x] Perbaikan responsive desain di HP/Mobile (Gambar tidak terpotong).
- [x] Perbaikan peramban Smart TV (Crossfade, mencegah layar berkedip/flicker).
- [ ] Pengecekan ulang halaman-halaman lain (Beranda, Menu Utama, Tentang Kami, dll) agar seragam.
- [ ] Optimasi performa dan gambar (Kompresi ukuran aset untuk loading cepat).
  > **Yang Agent kerjakan:** Melakukan coding, perbaikan bug, dan optimasi performa Next.js.
  > **Yang Anda lakukan:** Me-review hasil tampilan, memberikan masukan, dan memastikan data konten (harga/menu) sudah valid.

## Fase 2: Optimasi SEO Dasar
*Meskipun konfigurasi awal SEO sudah ada, kita akan memastikannya maksimal agar mudah ditemukan di Google.*

- [x] Konfigurasi Meta Tags dasar di `layout.tsx` (Title, Description, Keywords).
- [ ] Menambahkan *Open Graph* image agar bagus saat link di-share ke WhatsApp/Sosmed.
- [ ] Memastikan `robots.txt` dan `sitemap.xml` di-generate agar Google bot mudah mengindeks situs.
  > **Yang Agent kerjakan:** Membuat/mengedit file untuk keperluan struktur SEO sesuai standar Google.
  > **Yang Anda lakukan:** Menyediakan deskripsi bisnis, kata kunci yang diinginkan, serta logo/gambar untuk *Open Graph* jika belum ada.

## Fase 3: Deployment ke Vercel
*Karena Anda memilih Vercel untuk hosting, prosesnya jauh lebih mudah dan mendukung penuh semua fitur Next.js.*

- [ ] (Opsional) Mengunggah kode proyek ini ke repositori **GitHub** Anda.
- [ ] Mendaftar/Login ke **Vercel** menggunakan akun GitHub Anda.
- [ ] Mengimpor repositori proyek dari GitHub ke Vercel dan menekan tombol *Deploy*.
- [ ] Menunggu proses *build* di server Vercel (biasanya hanya 1-2 menit).
- [ ] Aplikasi Anda sudah live dengan domain sementara (contoh: `kedaikopi.vercel.app`).
  > **Yang Agent kerjakan:** Membantu Anda melakukan proses inisialisasi Git dan GitHub jika diperlukan, serta memastikan tidak ada error *build* saat di Vercel.
  > **Yang Anda lakukan:** Membuat akun GitHub & Vercel, lalu melakukan klik deploy di dashboard Vercel.

## Fase 4: Pembelian Domain di Rumahweb
*Proses ini murni harus dilakukan oleh Anda karena menyangkut pendaftaran akun pribadi dan pembayaran.*

- [ ] Membuka situs **Rumahweb** dan mencari ketersediaan domain `.com` (misal: `kedaikopibangjenggot.com`).
- [ ] Menyelesaikan proses pembelian *hanya untuk Domain* saja (tidak perlu beli hosting jika menggunakan Vercel).
- [ ] Memastikan status Domain sudah aktif di *Client Area* Rumahweb.
  > **Yang Agent kerjakan:** Memberikan rekomendasi nama domain jika diperlukan.
  > **Yang Anda lakukan:** Mendaftar dan melakukan pembayaran.

## Fase 5: Konfigurasi DNS (Menyambungkan Rumahweb ke Vercel)
*Tahap ini untuk menghubungkan domain yang dibeli di Rumahweb agar mengarah ke hosting Vercel Anda.*

- [ ] Buka dashboard Vercel Anda, masuk ke pengaturan proyek -> **Domains**.
- [ ] Tambahkan nama domain Anda (misal: `kedaikopibangjenggot.com`). Vercel akan memberikan *A Record* dan *CNAME Record*.
- [ ] Buka *Client Area* Rumahweb, masuk ke menu **DNS Management**.
- [ ] Masukkan *A Record* dan *CNAME Record* dari Vercel ke dalam pengaturan DNS Rumahweb.
- [ ] Tunggu propagasi DNS (biasanya 10 menit hingga beberapa jam).
  > **Yang Agent kerjakan:** Saya akan memandu Anda langkah demi langkah (bahkan bisa mengecek jika ada kesalahan *record*).
  > **Yang Anda lakukan:** Melakukan *copy-paste* nilai DNS dari Vercel ke panel Rumahweb Anda.

## Fase 6: Testing & Go Live!
*Website sudah online dan bisa diakses seluruh dunia dengan domain `.com` Anda.*

- [ ] Akses nama domain Anda (misal: `www.kedaikopibangjenggot.com`) dari browser dan HP.
- [ ] Memastikan SSL (Gembok hijau/HTTPS) sudah aktif (disediakan otomatis oleh Vercel).
- [ ] Memastikan performa, SEO, dan fungsionalitas berjalan normal.
  > **Yang Agent kerjakan:** Jika Anda menemukan kendala saat *testing* di server live, saya akan menganalisis penyebabnya dan memberikan perbaikannya.
  > **Yang Anda lakukan:** Melakukan pengecekan akhir dan mulai mempromosikan website Anda!
