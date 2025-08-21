
export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-tight py-10 text-sm text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Bisnis Online Official. All rights reserved.</p>
        <p>Kualitas Premium • Keamanan Transaksi • Transparansi</p>
      </div>
    </footer>
  )
}
