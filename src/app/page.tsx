
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/Contact";

export default function Home(){
  return (
    <CartProvider>
      <Nav/>
      <main>
        <section className="container-tight pt-12">
          <div className="card p-10 md:p-16 text-center bg-gradient-to-br from-black/40 to-brand-dim/50">
            <span className="badge mb-4 border border-brand/40 text-brand">Platform Investasi Barang</span>
            <h1 className="text-3xl md:text-5xl font-bold">Bisnis Online Official<br/><span className="text-brand">Investasi Aset Riil Premium</span></h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Bangun portofolio aset berwujud dengan proses yang aman, transparan, dan modern. Cocok untuk diversifikasi & lindung nilai.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#produk" className="btn btn-primary">Jelajahi Produk</a>
              <a href="#kontak" className="btn btn-outline">Konsultasi Gratis</a>
            </div>
          </div>
        </section>

        <section id="keunggulan" className="container-tight mt-16 grid md:grid-cols-3 gap-6">
          {[
            ["Legalitas & escrow", "Dana ditahan di penyedia pembayaran berizin hingga aset terverifikasi."],
            ["Transparansi harga", "Setiap produk memiliki laporan valuasi dan biaya yang jelas."],
            ["Likuiditas fleksibel", "Fitur jual kembali P2P (coming soon) untuk fleksibilitas exit."]
          ].map(([t,d]) => (
            <div key={t} className="card p-6">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="text-gray-300 mt-2">{d}</p>
            </div>
          ))}
        </section>

        <section id="produk" className="container-tight mt-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Pilihan Produk</h2>
              <p className="text-gray-400">Mulai dari komoditas hingga aset koleksi.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map(p => <ProductCard key={p.id} p={p}/>)}
          </div>
        </section>

        <ContactSection/>
      </main>
      <Footer/>
    </CartProvider>
  )
}
