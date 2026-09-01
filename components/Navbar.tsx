'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/5">
        <div className="container flex items-center justify-between h-[72px]">
          <Link href="/" className="text-xl font-bold tracking-[-0.02em] text-dark">
            Kavelo<span className="text-gold">Lab</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
            <Link href="#layanan" className="text-sm font-medium text-[#4a4a4a] hover:text-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full">
              Layanan
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-[#4a4a4a] hover:text-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full">
              Portfolio
            </Link>
            <Link href="#harga" className="text-sm font-medium text-[#4a4a4a] hover:text-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full">
              Harga
            </Link>
            <Link href="#faq" className="text-sm font-medium text-[#4a4a4a] hover:text-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full">
              FAQ
            </Link>
          </nav>

          <Link href="#buat-website" className="hidden md:inline-flex btn btn-primary">
            Buat Website
          </Link>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={toggleMenu}
            aria-label="Buka menu"
            aria-expanded={isOpen}
          >
            <span className={`block w-6 h-[2px] bg-dark rounded transition-all ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] bg-dark rounded transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-dark rounded transition-all ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-cream p-6 transform transition-transform duration-350 ease-in-out z-40 md:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Navigasi mobile">
          <Link href="#layanan" className="text-xl font-medium text-dark border-b border-black/5 pb-3" onClick={closeMenu}>
            Layanan
          </Link>
          <Link href="#portfolio" className="text-xl font-medium text-dark border-b border-black/5 pb-3" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link href="#harga" className="text-xl font-medium text-dark border-b border-black/5 pb-3" onClick={closeMenu}>
            Harga
          </Link>
          <Link href="#faq" className="text-xl font-medium text-dark border-b border-black/5 pb-3" onClick={closeMenu}>
            FAQ
          </Link>
          <Link href="#buat-website" className="btn btn-primary mt-4 self-start" onClick={closeMenu}>
            Buat Website
          </Link>
        </nav>
      </div>
    </>
  )
}
