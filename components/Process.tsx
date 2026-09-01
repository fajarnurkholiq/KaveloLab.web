const steps = [
  {
    title: 'Kirim informasi bisnis',
    description: 'Isi data usaha, produk, dan kebutuhan Anda.',
  },
  {
    title: 'Kami buat website',
    description: 'Tim kami merancang dan mengembangkan website Anda.',
  },
  {
    title: 'Revisi',
    description: 'Kami sesuaikan hingga Anda puas dengan hasilnya.',
  },
  {
    title: 'Website online',
    description: 'Website siap diakses pelanggan Anda.',
  },
]

export default function Process() {
  return (
    <section id="proses" className="section-padding bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-sm">Cara Kerja</span>
          <h2 className="heading-lg">Dari ide sampai online, tanpa ribet.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-7 md:p-8 border border-black/5 relative counter-step"
            >
              <span className="block text-[2.6rem] font-bold text-gold/15 leading-none mb-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[1.15rem] font-semibold mb-1">{step.title}</h3>
              <p className="text-[0.9375rem] text-[#4a4a4a]">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto mt-10 bg-dark text-cream rounded-lg p-5 text-center">
          <p className="text-body-sm">
            ⏱️ Estimasi pengerjaan <strong className="text-gold">2–3 hari kerja</strong> setelah data lengkap.
          </p>
        </div>
      </div>
    </section>
  )
}
