
"use client";
import { useState } from "react";

export default function ContactSection(){
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || process.env.FORMSPREE_ENDPOINT;
  const [sent, setSent] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!endpoint) { alert("Endpoint Formspree belum diatur."); return; }
    await fetch(endpoint as string, { method:"POST", body: fd, headers: { Accept: "application/json" } });
    setSent(true);
    e.currentTarget.reset();
  }
  return (
    <section id="kontak" className="container-tight mt-24">
      <div className="card p-8">
        <h3 className="text-2xl font-semibold mb-2">Hubungi Kami</h3>
        <p className="text-gray-400 mb-6">Tim kami akan membalas dalam 1×24 jam kerja.</p>
        {sent && <p className="p-3 rounded-lg bg-green-500/10 text-green-400 mb-4">Pesan terkirim. Terima kasih!</p>}
        <form onSubmit={onSubmit} className="grid md:grid-cols-3 gap-4">
          <input required name="nama" placeholder="Nama lengkap" className="input md:col-span-1"/>
          <input required name="email" type="email" placeholder="Email" className="input md:col-span-1"/>
          <input name="telepon" placeholder="No. Telepon (opsional)" className="input md:col-span-1"/>
          <textarea required name="pesan" placeholder="Tulis pesan" className="input md:col-span-3 h-28"></textarea>
          <button className="btn btn-primary md:col-span-3 w-full">Kirim Pesan</button>
        </form>
      </div>
    </section>
  )
}
