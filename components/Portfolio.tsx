import Link from 'next/link'

const portfolioData = [
  {
    id: 1,
    name: 'INFRAME.STUDIO',
    category: 'Studio Foto',
    description: 'Self-photo & photobox studio. Booking praktis via WhatsApp.',
    url: 'https://fajarnurkholiq.github.io/inframestudio/',
    icon: '📷',
  },
  {
    id: 2,
    name: 'Homestudio',
    category: 'Studio Foto',
    description: 'Self photo & fotobox di Cilimus, Kuningan. Berbagai paket foto.',
    url: 'https://fajarnurkholiq.github.io/homestudio.ido/',
    icon: '📸',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-sm">Portfolio</span>
          <h2 className="heading-lg">Beberapa website yang sudah kami buat</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {portfolioData.map((item) => (
            <article
              key={item.id}
              className="bg-cream rounded-lg overflow-hidden border border-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="aspect-[16/9] bg-[#e8e4df] flex flex-col items-center justify-center gap-2 p-5 min-h-[180px]"
                aria-hidden="true"
              >
                <span className="text-5xl leading-none">{item.icon}</span>
                <span className="text-sm font-medium text-[#6b6b6b] text-center">
                  Klik tombol di bawah
                  <br />
                  untuk melihat website
                </span>
              </div>
              <div className="p-6 md:p-7">
                <span className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-gold">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-1">{item.name}</h3>
                <p className="text-[0.9375rem] text-[#4a4a4a] mt-1.5 mb-4">
                  {item.description}
                </p>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dark border border-dark rounded px-6 py-2.5 min-h-[44px] hover:bg-dark hover:text-cream transition-colors"
                >
                  Lihat Website →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
