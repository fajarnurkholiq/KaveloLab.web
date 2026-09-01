import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-20 md:pt-[140px] md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <span className="label-sm">KaveloLab — Digital Studio</span>
            <h1 className="heading-xl max-w-[12ch]">
              Punya usaha, tapi belum punya website?
            </h1>
            <p className="text-body text-[1.125rem] max-w-[50ch]">
              Kami bantu UMKM punya website profesional yang simpel, cepat,
              dan langsung terhubung ke pelanggan.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="#buat-website" className="btn btn-primary">
                Buat Website
              </Link>
              <Link href="#portfolio" className="btn btn-secondary">
                Lihat Portfolio
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center" aria-hidden="true">
            <div className="w-full max-w-[560px] aspect-[16/10] bg-dark rounded-xl p-5 md:p-6 flex flex-col gap-4 shadow-2xl border border-white/5 relative overflow-hidden">
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e85a5a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8c45a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5ae87a]" />
              </div>
              <div className="flex-1 flex flex-col justify-center gap-3 py-2">
                <div className="h-2 rounded w-[55%] bg-gold/25" />
                <div className="h-2 rounded w-[80%] bg-white/5" />
                <div className="h-2 rounded w-[65%] bg-white/5" />
                <div className="h-10 rounded w-[90%] bg-white/5 mt-2" />
                <div className="h-8 rounded w-[40%] bg-gold/20 mt-1" />
              </div>
              <span className="absolute bottom-5 right-6 text-[0.6rem] font-medium tracking-[0.06em] uppercase text-white/20">
                Website UMKM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
