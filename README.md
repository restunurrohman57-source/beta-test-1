# Portofolio — Restu Nurrokhman (v3.0)

Situs statis HTML/CSS/JS. Buka `index.html` langsung.

## Yang berubah di v3.0

- **Intro baru**: logo "RN" sirkuit (96 frame, ~4 detik) + audio MP3 yang
  main bareng. Ada tombol "Lewati" kalau mau langsung skip. Kalau audio
  diblokir browser (aturan autoplay), animasinya tetap jalan tanpa suara.
- **Light mode dihapus total** — dark mode jadi satu-satunya tema
  (tombol ganti tema juga sudah dibuang).
- **Animasi masuk bervariasi**: elemen muncul dari kiri (`reveal-left`),
  kanan (`reveal-right`), atau bawah (`reveal-up`) tergantung section.
- **Kartu bio dipindah ke atas** slideshow foto kenangan (di section
  Latar, kartu gantungnya duluan).
- **Navbar**: sekarang mengambang dengan sudut melengkung, ada efek
  pendaran LED (2 titik cahaya cyan mengalir di tepinya, teknik dari
  referensi yang kamu kirim).
- **Search bar** dipasang lagi lengkap dengan ikon kaca pembesar.
- **Hubungi Saya** diganti 3 ikon langsung (WhatsApp, Instagram, Email)
  di sebelah tombol "Lihat Project".
- **Footer** teksnya rata tengah.
- **Frame mobil lama sudah dihapus**, diganti frame logo baru. Ukuran
  project sekarang ~15MB (dominan dari audio + 96 frame baru).

## Struktur

```
index.html
assets/css/style.css     — 15 bagian bernomor
assets/js/main.js         — 12 bagian bernomor
assets/frames/               — 96 frame logo (intro)
assets/audio/intro.mp3         — audio intro
assets/img/profile.jpg           — foto hero & kartu bio
assets/img/memories/               — 7 foto kenangan
```

## Placeholder yang masih perlu diisi

- `CERTS`, `FIELDS` (`main.js` bagian 0) — masih kosong.
