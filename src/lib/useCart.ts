"use client";

import { useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // opsional kalau mau simpan gambar produk
};

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  // Tambah produk ke cart
  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  // Hapus produk berdasarkan id
  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Kosongkan semua isi cart
  const clearCart = () => setItems([]);

  // Total harga
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Jumlah semua item
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return { items, addItem, removeItem, clearCart, total, itemCount };
}
