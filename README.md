# Almira Gadget & DRSTORE — Website Informasi

Website informasi publik untuk jaringan toko smartphone **Almira Gadget**, **DRSTORE Sidoarjo**, dan **DRSTORE Tropodo**. Website ini 100% frontend statis (tanpa backend, tanpa database, tanpa login) dan dapat dihosting di hampir semua layanan hosting statis.

---

## 1. Cara instalasi proyek

Syarat: [Node.js](https://nodejs.org/) versi 18 atau lebih baru.

```bash
npm install
```

## 2. Cara menjalankan secara lokal

```bash
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## 3. Cara membangun website (build produksi)

```bash
npm run build
```

## 4. Lokasi hasil produksi

Semua file statis siap unggah dihasilkan di folder:

```
dist/
```

Unggah **seluruh isi folder `dist`** ke hosting Anda.

## 5. Cara mengubah informasi toko

Semua data bisnis berada di satu file:

```
src/data/siteData.js
```

Di file ini Anda dapat mengubah: alamat, jam operasional, username Instagram/TikTok, tautan Google Maps, deskripsi toko, layanan, FAQ, teks SEO, dan lainnya. Kolom yang dibiarkan kosong (`""`) akan otomatis tampil sebagai placeholder seperti `[Alamat toko belum ditambahkan]` di website.

## 6. Cara mengubah nomor WhatsApp

Buka `src/data/siteData.js`, lalu isi kolom `whatsapp` pada setiap toko dengan **format internasional tanpa tanda + dan tanpa spasi**:

```js
whatsapp: "6281234567890",
```

Nomor hanya ditulis **satu kali per toko** di file ini — seluruh tombol WhatsApp di website otomatis memakai nomor tersebut. Selama nomor masih kosong, tombol akan menampilkan placeholder dan formulir kontak menampilkan peringatan konfigurasi saat mode development.

## 7. Cara mengganti logo dan gambar

Semua gambar placeholder berada di folder `public/assets/`:

| File | Kegunaan | Rasio |
| --- | --- | --- |
| `site-logo.svg` | Logo website di header & footer | 1:1 |
| `logo-almira.svg` | Logo Almira Gadget | 1:1 |
| `logo-drstore-sidoarjo.svg` | Logo DRSTORE Sidoarjo | 1:1 |
| `logo-drstore-tropodo.svg` | Logo DRSTORE Tropodo | 1:1 |
| `store-photo-placeholder.svg` | Foto depan toko | 4:3 |
| `hero-illustration.svg` | Gambar utama beranda | 4:3 |
| `og-image.svg` | Gambar pratinjau media sosial | 1.91:1 (1200×630) |

Cara mengganti: simpan gambar baru (JPG/PNG/WebP/SVG) di `public/assets/`, lalu ubah path-nya di `src/data/siteData.js` pada kolom `logo`, `photo`, atau `site.ogImage`. Pertahankan rasio aspek di atas agar tata letak tetap rapi.

## 8. Cara mengganti tema warna

Semua warna utama ada di bagian atas file `src/styles/global.css` sebagai variabel CSS:

```css
:root {
  --color-navy: #101d33;    /* warna utama gelap */
  --color-accent: #1f6feb;  /* aksen biru */
  --color-cta: #f59e0b;     /* aksen hangat untuk tombol CTA */
  --color-whatsapp: #16a34a;
  /* ... */
}
```

Ubah nilai warna di satu tempat ini dan seluruh website ikut berubah.

## 9. Cara menambah toko baru

1. Buka `src/data/siteData.js`.
2. Salin satu objek di dalam array `stores`, lalu ubah `id` (harus unik, huruf kecil tanpa spasi) dan seluruh isinya.
3. (Opsional) Tambahkan logo baru di `public/assets/`.

Kartu toko, pemilih toko, formulir kontak, footer, dan structured data otomatis menyertakan toko baru.

## 9b. Cara menambah artikel baru

1. Buka `src/data/articles-1.js` atau `src/data/articles-2.js` dan salin satu objek artikel.
2. Isi field: `slug` (URL, unik, huruf kecil dengan tanda hubung), `title`, `excerpt`, `category`, tanggal, `featuredImage`, `seoTitle`, `metaDescription`, `keywords`, `relatedArticles`, dan `content` (blok `h2`, `h3`, `p`, `ul`, `warning`; tautan internal ditulis `[teks](/halaman)`).
3. Buat gambar sampul di `public/assets/artikel/<slug>.svg` (rasio 16:9).
4. Tambahkan URL artikel ke `public/sitemap.xml`.
5. Jalankan `npm run build`.

Daftar isi, artikel terkait, estimasi waktu baca, breadcrumb, dan structured data dibuat otomatis dari data tersebut.

## 10. Deploy ke cPanel

1. Jalankan `npm run build`.
2. Buka **File Manager** di cPanel, masuk ke `public_html` (atau subfolder domain).
3. Unggah **seluruh isi** folder `dist` (termasuk file tersembunyi `.htaccess` yang sudah disertakan — file ini mengatur agar semua halaman React tetap berfungsi).
4. Selesai. Website langsung online.

## 11. Deploy ke Cloudflare Pages

1. Masuk ke dashboard Cloudflare → **Workers & Pages** → **Create** → **Pages**.
2. Hubungkan repositori Git, atau gunakan **Direct Upload** dengan mengunggah folder `dist`.
3. Jika via Git: build command `npm run build`, output directory `dist`.
4. File `public/_redirects` sudah disertakan agar routing SPA berfungsi.

## 12. Deploy ke Netlify

1. Seret folder `dist` ke [app.netlify.com/drop](https://app.netlify.com/drop), atau hubungkan repositori Git.
2. Jika via Git: build command `npm run build`, publish directory `dist`.
3. File `_redirects` sudah disertakan.

## 13. Deploy ke Vercel

1. `npm i -g vercel`, lalu jalankan `vercel` di folder proyek, atau impor repositori via dashboard.
2. Framework terdeteksi otomatis sebagai **Vite** (build `npm run build`, output `dist`).

### GitHub Pages & VPS

- **GitHub Pages**: untuk GitHub Pages *project site* (URL `username.github.io/nama-repo/`), ubah `base` di `vite.config.js` menjadi `"/nama-repo/"` sebelum build, lalu salin `dist/index.html` menjadi `dist/404.html` agar routing SPA berfungsi. Untuk domain sendiri di root (seperti drgroup.com), konfigurasi bawaan sudah tepat.
- **VPS**: salin isi `dist` ke root web server (Nginx/Apache) dan arahkan semua rute ke `index.html`.

---

## Struktur proyek

```
src/
├── components/     # Komponen reusable (Header, Footer, StoreCard, dll.)
├── pages/          # Enam halaman + halaman 404
├── data/siteData.js# PUSAT SEMUA DATA BISNIS (edit di sini)
├── hooks/          # (tersedia untuk pengembangan lanjutan)
├── utils/          # Generator pesan WhatsApp, helper, structured data
└── styles/         # global.css berisi seluruh tema
```

## Data yang masih berupa placeholder

Sebelum online, isi data resmi berikut di `src/data/siteData.js`: alamat lengkap, nomor WhatsApp, jam operasional, tautan Google Maps, username Instagram/TikTok, kebijakan garansi/pengembalian/pembayaran, serta domain resmi di `site.url` dan `public/sitemap.xml`.
