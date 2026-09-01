'use client'

import { useState } from 'react'

const faqData = [
  {
    question: 'Apakah harus punya domain?',
    answer: 'Tidak harus. Kami siapkan domain sementara gratis. Kalau sudah punya domain, kami bantu pasangkan.',
  },
  {
    question: 'Berapa lama pengerjaannya?',
    answer: 'Estimasi 2–3 hari kerja setelah data lengkap. Untuk paket Custom bisa lebih, tergantung kompleksitas.',
  },
  {
    question: 'Apakah bisa revisi?',
    answer: 'Bisa. Kami berikan 2 kali revisi untuk paket Starter dan Business, serta fleksibel untuk Custom.',
  },
  {
    question: 'Apakah website bisa dibuka di HP?',
    answer: 'Pasti. Semua website kami dibuat responsive, jadi tampil baik di HP, tablet, dan komputer.',
  },
  {
    question: 'Apakah bisa update produk sendiri?',
    answer: 'Untuk paket Business dan Custom, kami sediakan panduan sederhana agar Anda bisa update konten sendiri.',
  },
  {
    question: 'Bagaimana cara memesan?',
    answer: 'Klik tombol "Buat Website" di bawah ini, kami akan terhubung via WhatsApp untuk diskusi kebutuhan Anda.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-sm">Pertanyaan</span>
          <h2 className="heading-lg">Yang sering ditanyakan</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-black/5 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 md:px-7 md:py-4.5 flex justify-between items-center gap-4 font-semibold text-[1rem] text-dark hover:bg-black/5 transition-colors focus:outline-none"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span
                    className={`text-gold text-xl font-bold transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? 'max-h-[300px] px-6 pb-5 md:px-7 md:pb-6' : 'max-h-0 px-6'
                  } overflow-hidden`}
                >
                  <p className="text-[0.9375rem] text-[#4a4a4a] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
