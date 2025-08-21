
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { items, total, remove, clear } = useCart();
  const formatted = new Intl.NumberFormat("id-ID").format(total);
  return (
    <header className="sticky top-0 z-30 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="container-tight flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Bisnis Online Official" className="w-8 h-8" />
          <span className="font-semibold">Bisnis Online Official</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#produk">Produk</a>
          <a href="#keunggulan">Keunggulan</a>
          <Link href="/dashboard">Dashboard</Link>
          <a href="#kontak">Kontak</a>
          <Link href="/terms">S&K</Link>
          <Link href="/privacy">Privasi</Link>
        </nav>
        <button onClick={() => setOpen(true)} className="btn btn-primary text-sm">
          Keranjang ({items.length})
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-full max-w-md card p-6" onClick={e=>e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">Keranjang</h3>
            <div className="space-y-3 max-h-[60vh] overflow-auto">
              {items.length === 0 && <p className="text-gray-400">Belum ada item.</p>}
              {items.map(i => (
                <div key={i.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{i.name}</p>
                    <p className="text-sm text-gray-400">x{i.qty}</p>
                  </div>
                  <div className="text-right">
                    <p>Rp {new Intl.NumberFormat("id-ID").format(i.price * i.qty)}</p>
                    <button className="text-xs text-red-400" onClick={()=>remove(i.id)}>hapus</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-white/10 pt-4 flex items-center justify-between">
              <p className="font-semibold">Total: Rp {formatted}</p>
              <div className="flex gap-2">
                <button className="btn btn-outline" onClick={clear}>Bersihkan</button>
                <Link href="/checkout" className="btn btn-primary" onClick={()=>setOpen(false)}>Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
