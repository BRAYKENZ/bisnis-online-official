
"use client";
import { Product } from "@/lib/products";
import { useCart } from "./CartContext";

export default function ProductCard({ p }: { p: Product }){
  const { add } = useCart();
  return (
    <div className="card overflow-hidden">
      <img src={p.image} alt={p.name} className="h-40 w-full object-cover"/>
      <div className="p-5">
        <h4 className="font-semibold">{p.name}</h4>
        <p className="text-sm text-gray-400">{p.roi}</p>
        <p className="mt-2 font-semibold text-brand">Rp {new Intl.NumberFormat("id-ID").format(p.price)}</p>
        <p className="text-sm text-gray-300 mt-2">{p.description}</p>
        <button onClick={()=>add(p)} className="btn btn-primary w-full mt-4">Tambah ke Keranjang</button>
      </div>
    </div>
  );
}
