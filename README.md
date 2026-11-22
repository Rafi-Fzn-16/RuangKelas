# RuangKelas API

![Status](https://shields.io)
![Version](https://shields.io)
![Runtime](https://shields.io)

**RuangKelas API** adalah layanan backend (RESTful API) berbasis Node.js untuk sistem informasi dan manajemen data sekolah. Project ini hanya untuk testing, not a real project.

>  **Status Pengembangan:** Proyek ini baru saja diinisiasi (*early stage*). Struktur direktori, skema database, dan *endpoint* utama sedang dalam tahap pembangunan aktif.

---

##  Struktur Proyek Saat Ini

```text
RuangKelas-API/
├── database/
│   └── schema.sql       # Rancangan skema tabel database SQL
├── .gitignore           # Daftar file/folder yang diabaikan Git
├── index.js             # Entry point utama aplikasi server
├── package.json         # Konfigurasi proyek dan dependensi
└── package-lock.json    # Lockfile dependensi npm
```

---

##  Teknologi

* **Runtime:** Node.js
* **Database:** SQL (Skema tersedia di `database/schema.sql`)

---

##  Cara Menjalankan (Local Setup)

1. **Clone repositori**
   ```bash
   git clone https://github.com
   cd RuangKelas-API
   ```

2. **Install dependensi**
   ```bash
   npm install
   ```

3. **Setup Database**
   Impor file `database/schema.sql` ke dalam database SQL lokal Anda.

4. **Jalankan server**
   ```bash
   node index.js
   ```

---

##  Roadmap Pengembangan

- [x] Inisialisasi proyek Node.js (`package.json` & `index.js`)
- [x] Perancangan awal skema database (`database/schema.sql`)
- [ ] Koneksi database & konfigurasi `.env`
- [ ] Pembuatan *endpoint* CRUD (Siswa, Guru, Kelas, Mapel)
- [ ] Sistem Autentikasi & Otorisasi (JWT)
- [ ] Dokumentasi API

---

##  Kontribusi

Proyek ini masih sangat terbuka untuk pengembangan lebih lanjut. Silakan buat *Issue* atau *Pull Request* jika ingin berdiskusi atau membantu menambahkan fitur.
