# JokiSurik Website

Website statis promosi jasa pembuatan website, Odoo ERP, dan entri data. Bahasa Indonesia, responsif, tanpa database, tanpa `npm install`, dan tidak membutuhkan build.

## Kontak bawaan
- Brand: **JokiSurik Website**
- WhatsApp: **082286750339** → `6282286750339`
- Email: **jokisurik@gmail.com**
- GitHub: **https://github.com/sarimarlina**

## File dan cara mengubahnya
- `index.html`: semua konten landing page (headline, daftar jasa, FAQ, dll.)
- `styles.css`: warna, tata letak, responsif, tipografi
- `config.js`: **nomor WA, email, nama bisnis, URL GitHub, opsi analytics**
- `script.js`: menu HP, tombol konsultasi, pembuatan pesan WhatsApp
- `privasi.html`: kebijakan privasi (sesuaikan dengan praktik nyata)
- `ketentuan.html`: ketentuan layanan (sesuaikan dengan praktik nyata)
- `assets/favicon.svg` dan `assets/og-cover.svg`: ikon dan gambar pratinjau berbagi

Setelah mengubah `config.js`, simpan dan muat ulang halaman.

## Jalankan di komputer
Buka `index.html` di browser, atau gunakan ekstensi Live Server di VS Code.

## Deploy Cloudflare Pages (opsi gratis yang perlu diperiksa syaratnya)
1. Buat repository GitHub baru, misalnya `jokisurik-website`.
2. Upload semua file **isi folder** ini ke root repository.
3. Masuk ke Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
4. Pilih repository tersebut. Pilih preset **None**, kosongkan Build command, dan set output directory ke `/` bila diminta (untuk proyek statis, kadang UI menggunakan nama root atau `.`).
5. Deploy dan uji alamat yang diberikan.
6. Baca kebijakan penggunaan Cloudflare saat mendaftar, terutama bila digunakan untuk pemasaran berbayar.

## Deploy Vercel (harus paket yang mengizinkan komersial)
1. Push seluruh isi folder ke repository GitHub.
2. Vercel → Add New Project → Import repo GitHub.
3. Framework Preset: **Other**; Build Command: kosong; Output Directory: kosong/default root.
4. Deploy, lalu uji semua tautan.
5. **Penting:** Vercel Hobby gratis hanya untuk penggunaan personal/nonkomersial. Untuk iklan dan penawaran jasa, gunakan paket yang mengizinkan komersial, seperti Vercel Pro, sesuai syarat terbaru.

## GitHub Pages
GitHub Pages dapat menyajikan file HTML/CSS/JS ini secara teknis, tetapi **GitHub menyatakan Pages tidak dimaksudkan/diizinkan sebagai hosting gratis untuk menjalankan bisnis online atau website yang terutama memfasilitasi transaksi komersial**. Karena website ini mempromosikan jasa berbayar, jangan gunakan GitHub Pages sebagai hosting produksi tanpa memastikan kepatuhan kebijakan. GitHub tetap dapat digunakan untuk menyimpan kode/repository.

## Sebelum Google Ads
1. Pastikan isi layanan sesuai kemampuan dan ketersediaan yang benar.
2. Periksa jam layanan pada `config.js`; tampilan saat ini tidak menampilkan jam operasional agar tidak memberi janji yang belum dikonfirmasi.
3. Ganti contoh visual di hero jika ingin menampilkan portofolio nyata.
4. Uji formulir (WA terbuka dengan pesan yang benar), tombol WA, menu HP, email, halaman privasi dan ketentuan.
5. Pertimbangkan domain profesional dan halaman landing terpisah untuk keyword Website / Odoo / Entri Data.
6. Analytics dan Google Ads belum aktif. Bila memasang pelacakan, perbarui kebijakan privasi dan implementasikan persetujuan sesuai kebutuhan hukum.
7. Jangan mencantumkan testimoni, jumlah klien, sertifikasi, atau status partner resmi jika tidak bisa dibuktikan.

## Cara kontak bekerja
Formulir **tidak** mengirim informasi ke server atau database. Saat ditekan, browser membuka WhatsApp dengan pesan terisi; pengunjung masih perlu mengirim pesan secara manual. Nomor diset di `config.js`.

## Catatan lisensi visual
Ilustrasi halaman adalah komposisi HTML/CSS/SVG buatan untuk template ini; tidak mewakili proyek klien nyata. Font Google adalah layanan eksternal dan membutuhkan koneksi internet agar tampil sebagaimana dirancang. Jika offline, font fallback tetap digunakan.
