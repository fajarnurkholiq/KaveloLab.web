export default function Solution() {
  const benefits = [
    'Profil bisnis',
    'Produk / layanan',
    'Galeri',
    'Lokasi',
    'WhatsApp',
    'Informasi penting lainnya',
  ]

  return (
    <section id="layanan" className="section-padding bg-cream">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <span className="label-sm">Solusi</span>
          <h2 className="heading-lg">Satu website untuk merapikan semuanya.</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-3 list-none p-0">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-dark">
                <span className="text-gold font-bold text-base flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center" aria-hidden="true">
          <div className="w-full max-w-[500px] aspect-[16/11] bg-dark rounded-xl p-5 md:p-6 flex flex-col gap-4 border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-semibold text-white/50 tracking-wider">Bisnis Anda</span>
              <div className="flex gap-4">
                <span className="text-[0.6rem] text-white/20 uppercase tracking-wider">Beranda</span>
                <span className="text-[0.6rem] text-white/20 uppercase tracking-wider">Produk</span>
                <span className="text-[0.6rem] text-white/20 uppercase tracking-wider">Kontak</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2.5 py-1">
              <div className="h-1.5 rounded w-[45%] bg-gold/25" />
              <div className="h-1.5 rounded w-[75%] bg-white/5" />
              <div className="h-1.5 rounded w-[60%] bg-white/5" />
              <div className="grid grid-cols-3 gap-3 mt-2">
                <div className="h-10 rounded bg-gold/10 border border-gold/10" />
                <div className="h-10 rounded bg-white/5 border border-white/5" />
                <div className="h-10 rounded bg-white/5 border border-white/5" />
              </div>
            </div>
            <div className="text-[0.55rem] font-medium tracking-[0.06em] uppercase text-white/15 text-right pt-2 border-t border-white/5">
              — semua dalam satu halaman
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
