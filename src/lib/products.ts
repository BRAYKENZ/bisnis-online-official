
export type Product = {
  id: string;
  name: string;
  price: number; // IDR
  roi: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "BOO-GLD-10",
    name: "Emas Batangan 10g",
    price: 11500000,
    roi: "Estimasi 6–10%/tahun",
    image: "/gold.jpg",
    description: "Sertifikat resmi. Cocok untuk lindung nilai & diversifikasi."
  },
  {
    id: "BOO-COP-50",
    name: "Komoditas Kopi 50kg",
    price: 4750000,
    roi: "Estimasi 8–15%/tahun",
    image: "/coffee.jpg",
    description: "Aset riil agrikultur. Harga mengikuti pasar komoditas."
  },
  {
    id: "BOO-ART-01",
    name: "Koleksi Karya Seni",
    price: 8000000,
    roi: "Estimasi variatif",
    image: "/art.jpg",
    description: "Edisi terbatas, kurasi komunitas seniman lokal."
  }
];
