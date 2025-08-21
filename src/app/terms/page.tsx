
"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";
import { useState } from "react";

declare global { interface Window { snap: any } }

export default function Checkout() {
  const { items, total, clear } = useCart();
  const [loading, setLoading] = useState(false);

  async function pay() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(i => ({ id:i.id, name:i.name, price:i.price, qty:i.qty })),
          total
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Gagal mendapatkan token pembayaran");
      const token = data.token;
      if (window.snap && token) {
        window.snap.pay(token, {
          onSuccess: function(){ alert("Pembayaran sukses!"); clear(); window.location.href = "/success"; },
          onPending: function(){ alert("Menunggu pembayaran."); window.location.href = "/pending"; },
          onError: function(){ alert("Terjadi kesalahan pembayaran."); },
          onClose: function(){ /* user closed */ }
        });
      } else {
        alert("Token tidak tersedia. Pastikan kunci Midtrans telah diatur.");
      }
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-tight py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <h3 className="font-semibold mb-4">Ringkasan Order</h3>
          <div className="space-y-3">
            {items.length === 0 && <p className="text-gray-400">Keranjang kosong. <Link href="/" className="text-brand">Belanja dulu</Link></p>}
            {items.map(i => (
              <div key={i.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{i.name}</p>
                  <p className="text-sm text-gray-400">x{i.qty}</p>
                </div>
                <p>Rp {new Intl.NumberFormat("id-ID").format(i.price * i.qty)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-4">Pembayaran</h3>
          <p className="text-sm text-gray-300">Dukungan Midtrans (Snap) Sandbox/Production.</p>
          <p className="mt-4 font-semibold text-brand">Total: Rp {new Intl.NumberFormat("id-ID").format(total)}</p>
          <button disabled={items.length===0 || loading} onClick={pay} className="btn btn-primary w-full mt-4">
            {loading ? "Memproses..." : "Bayar Sekarang"}
          </button>
          <p className="text-xs text-gray-500 mt-2">Gunakan kartu sandbox Midtrans saat pengujian.</p>
        </div>
      </div>
    </div>
  );
            }
