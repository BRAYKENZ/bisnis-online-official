
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bisnis Online Official — Investasi Barang",
  description: "Platform investasi aset riil bertema dark elegan dengan transaksi aman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;
  return (
    <html lang="id">
      <body>
        {clientKey && (
          <Script
            src="https://app.sandbox.midtrans.com/snap/snap.js"
            data-client-key={clientKey}
            strategy="beforeInteractive"
          />
        )}
        {children}
      </body>
    </html>
  );
}
