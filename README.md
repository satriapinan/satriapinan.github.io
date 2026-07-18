# Satria Pinandita Abyatarsyah — Portfolio

Website pribadi (React + Vite) berdasarkan CV dan PRD.

## Menjalankan secara lokal

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:5173`.

## Build produksi

```bash
pnpm build
pnpm preview
```

## Versi

- Node.js ≥ 20, pnpm 11.x
- React 19.2.7 · Vite 8.1.5 · @vitejs/plugin-react 6.0.3

## Struktur

- `src/data/content.js` — seluruh konten (profil, pengalaman, proyek, skill). Edit di sini untuk update data tanpa menyentuh UI.
- `src/components/` — tiap section (Hero, About, Experience, Projects, Skills, Contact) + elemen signature `RouteLine` (garis rute yang mengikuti scroll, terinspirasi dari modul Shipment Tracking).
- `src/styles/global.css` — design tokens (warna, tipografi) dan style global.

## Catatan

- File CV untuk tombol "Unduh CV" perlu ditaruh di `public/Satria_Pinandita_Abyatarsyah-CV.pdf` agar link unduhan aktif.
- Font: Space Grotesk (display), Inter (body), IBM Plex Mono (label/kode) — dimuat dari Google Fonts di `index.html`.
