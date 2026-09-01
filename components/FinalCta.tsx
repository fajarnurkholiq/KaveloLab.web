import Link from 'next/link'

export default function FinalCta() {
  const whatsappNumber = 'WHATSAPP_NUMBER' // Ganti dengan nomor asli
  const message =
    'Halo KaveloLab, saya tertarik membuat website untuk bisnis saya. Saya ingin konsultasi mengenai paket website.'
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section id="buat-website" className="py-20 md:py-24 bg-dark text-cream text-center">
      <div className="container">
        <h2 className="heading-lg max-w-[14ch] mx-auto mb-4">
          Sudah punya usaha. Sekarang waktunya punya rumah online.
        </h2>
        <p className="text-body max-w-[50ch] mx-auto mb-8 text-[#b0b0b0]">
          KaveloLab siap bantu Anda tampil lebih profesional dan mudah ditemukan pelanggan.
        </p>
        <Link
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-[1.0625rem] px-12 py-4 min-h-[60px] inline-flex"
        >
          Buat Website Saya
        </Link>
      </div>
    </section>
  )
}
