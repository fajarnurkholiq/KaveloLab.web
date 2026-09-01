import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 'Rp299.000',
    badge: 'Starter',
    description: 'Cocok untuk bisnis yang baru mulai online.',
    features: [
      '1-page website',
      'Profil bisnis',
      'Produk / jasa',
      'Tombol WhatsApp',
      'Responsive mobile',
      'Deployment',
    ],
    cta: 'Pesan Website',
    featured: false,
  },
  {
    name: 'Business',
    price: 'Rp499.000',
    badge: '⭐ Recommended',
    description: 'Paling populer untuk UMKM yang ingin lebih profesional.',
    features: [
      'Semua Starter',
      'Katalog produk',
      'Galeri',
      'Google Maps',
      'CTA lebih lengkap',
      'Struktur website lebih profesional',
    ],
    cta: 'Pesan Website',
    featured: true,
  },
  {
    name: 'Custom',
    price: 'Mulai Rp799.000',
    badge: 'Custom',
    description: 'Untuk kebutuhan khusus yang tidak standar.',
    features: [
      'Kebutuhan khusus',
      'Halaman tambahan',
      'Fitur custom',
      'Konsultasi personal',
    ],
    cta: 'Pesan Website',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="harga" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-sm">Harga</span>
          <h2 className="heading-lg">Pilih paket yang sesuai</h2>
          <p className="text-body max-w-[48ch] mx-auto">
            Transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-7 md:p-8 flex flex-col border transition-all hover:-translate-y-1 hover:shadow-md ${
                plan.featured
                  ? 'bg-dark text-cream border-gold shadow-lg scale-[1.02]'
                  : 'bg-cream border-black/5'
              }`}
            >
              <span
                className={`text-[0.6rem] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full self-start mb-3 ${
                  plan.featured
                    ? 'bg-gold/10 text-gold'
                    : 'bg-gold/10 text-gold'
                }`}
              >
                {plan.badge}
              </span>
              <div className={`text-4xl font-bold tracking-[-0.02em] leading-tight ${plan.featured ? 'text-cream' : 'text-dark'}`}>
                {plan.price}
                <span className="text-base font-medium text-[#6b6b6b] ml-1">
                  {plan.featured ? '/ sekali' : '/ sekali'}
                </span>
              </div>
              <p className="text-[0.9375rem] text-[#4a4a4a] mt-1 mb-4">
                {plan.description}
              </p>
              <ul className="space-y-1.5 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-[0.875rem] text-[#4a4a4a]">
                    <span className="text-gold font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#buat-website"
                className={`btn text-center ${
                  plan.featured ? 'btn-primary' : 'btn-gold-outline'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
