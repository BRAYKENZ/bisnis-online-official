
# Bisnis Online Official — Investasi Barang (Dark + Gold)

Fitur:
- Landing page premium (dark + aksen emas)
- Katalog, keranjang, checkout
- Integrasi **Midtrans Snap** (Sandbox/Production) via API Route
- **Dashboard investor** (ringkasan portofolio, kepemilikan, riwayat transaksi)
- Form kontak (Formspree)
- Halaman **Syarat & Ketentuan** dan **Kebijakan Privasi**
- Siap deploy ke **Vercel**

## Cara pakai
1. Download & ekstrak ZIP.
2. Install & jalankan dev:
   ```bash
   npm i
   cp .env.example .env
   # Isi MIDTRANS_SERVER_KEY dan NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
   npm run dev
   ```
3. Deploy ke Vercel → set Environment Variables:
   - `MIDTRANS_SERVER_KEY`
   - `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY`
   - `NEXT_PUBLIC_BASE_URL` (opsional)
   - `FORMSPREE_ENDPOINT` (opsional atau gunakan Next API sendiri)

> Gambar pada `public/` adalah placeholder—ganti dengan aset asli brand Anda.
