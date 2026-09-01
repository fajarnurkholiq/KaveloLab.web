export default function Problem() {
  const problems = [
    'Informasi bisnis tersebar',
    'Katalog tidak rapi',
    'Pelanggan sulit menemukan lokasi',
    'Hanya mengandalkan media sosial',
    'Bisnis terlihat kurang profesional',
  ]

  return (
    <section className="section-padding bg-white border-y border-black/5">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <span className="label-sm">Masalah</span>
          <h2 className="heading-lg">
            Pelanggan mencari bisnis Anda. Apa yang mereka temukan?
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 list-none p-0">
          {problems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-[#4a4a4a]">
              <span className="text-gold font-bold text-sm flex-shrink-0 mt-0.5">✕</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
