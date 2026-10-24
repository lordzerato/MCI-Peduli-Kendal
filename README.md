# MCI Peduli Kendal

Situs profil Mualaf Center Indonesia Peduli Kendal. Aplikasi satu halaman (SPA) untuk memperkenalkan lembaga, program, rekening donasi, dan jalur konsultasi syahadat.

Formulir donasi dan syahadat tidak menyimpan data di server. Setelah dikirim, isinya dibuka di WhatsApp.

## Menjalankan

Butuh Node.js 22.

```bash
npm install
npm run dev
```

Buka http://127.0.0.1:5173.

```bash
npm run build
npm run preview
```

`npm run build` menghasilkan folder `dist/`.

## Halaman

| Alamat | Isi |
| --- | --- |
| `/` | Beranda: program, kegiatan, video, dan ajakan bergabung |
| `/tentang` | Visi, misi, legalitas, dan struktur organisasi |
| `/kontak` | Alamat, jam layanan, dan kontak |
| `/cabang` | Pengurus dan relawan daerah |
| `/rekening` | Rekening donasi dan QRIS |
| `/donasi` | Formulir donasi, lalu lanjut ke WhatsApp |
| `/syahadat` | Syarat dokumen dan formulir ikrar, lalu lanjut ke WhatsApp |

Tautan Berita di navigasi mengarah ke situs berita terpisah, bukan halaman di aplikasi ini.

## Mengubah isi

Hampir semua teks, nomor, dan daftar ada di `src/data.js`:

- program, visi, misi, dan legalitas
- pengurus di `leaders` (nama, jabatan, nama file foto)
- rekening di `donationGroups`
- alamat, telepon, email, dan media sosial
- cabang dan syarat dokumen syahadat

Nomor WhatsApp yang dibuka formulir ada di `src/utils.js` (`WHATSAPP` dan `openWhatsapp`).

Gambar diletakkan di `public/` dan dipanggil lewat `asset()`, supaya tetap benar saat situs dipasang di subpath GitHub Pages:

- `public/logo-kendal.png` — logo header, footer, dan bagian kegiatan
- `public/images/qris-kendal.jpg` — poster QRIS
- `public/images/pengurus/` — foto kartu pengurus, rasio potret 3:4
- `public/images/foto-bersama.webp` — foto di ajakan bergabung
- `public/images/bsi.svg` (dan logo bank lain) — logo di kartu rekening

Judul tiap halaman diatur di `src/router/index.js`.

## Deploy

Push ke cabang `main` menjalankan `.github/workflows/deploy.yml`. Workflow memasang dependensi, membangun situs, lalu menerbitkannya ke GitHub Pages.

Path produksi mengikuti nama repositori: `/MCI-Peduli-Kendal/` (lihat `base` di `vite.config.js`). Jika nama repositori berubah, sesuaikan nilai itu. Saat `npm run dev`, path-nya tetap `/`.

GitHub Pages tidak mendukung fallback SPA secara bawaan. Saat build, `index.html` disalin menjadi `dist/404.html`, dan `public/.nojekyll` ikut terbit, supaya rute seperti `/tentang` tetap terbuka setelah di-refresh.

Alamat situs: https://lordzerato.github.io/MCI-Peduli-Kendal/

Di repositori GitHub, Pages harus memakai sumber **GitHub Actions**.
