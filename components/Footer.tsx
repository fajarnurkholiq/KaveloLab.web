import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-8 text-white/30 text-sm">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="font-semibold text-white/50">
          Kavelo<span className="text-gold">Lab</span> — digital studio untuk UMKM
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="#layanan" className="hover:text-white/70 transition-colors">
            Layanan
          </Link>
          <Link href="#portfolio" className="hover:text-white/70 transition-colors">
            Portfolio
          </Link>
          <Link href="#harga" className="hover:text-white/70 transition-colors">
            Harga
          </Link>
          <Link href="#faq" className="hover:text-white/70 transition-colors">
            FAQ
          </Link>
        </div>
        <div>&copy; 2026 KaveloLab</div>
      </div>
    </footer>
  )
}
