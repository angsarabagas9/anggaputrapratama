'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-amber-900 to-amber-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-lg">
              <div className="relative">
                {/* Needle */}
                <div className="w-1 h-6 bg-gray-800 rounded-sm"></div>
                <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[6px] border-t-gray-800 -mt-1"></div>
                {/* Thread Circle */}
                <div className="absolute inset-0 w-8 h-8 border-2 border-white/80 rounded-full -top-1 -left-3"></div>
                {/* Initials */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">APP</div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">ANGGA PUTRA PRATAMA</h1>
              <p className="text-xs text-amber-100">Professional Tailor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-amber-200 transition-colors">Beranda</Link>
            <Link href="/about" className="hover:text-amber-200 transition-colors">Tentang</Link>
            <Link href="/services" className="hover:text-amber-200 transition-colors">Layanan</Link>
            <Link href="/portfolio" className="hover:text-amber-200 transition-colors">Portfolio</Link>
            <Link href="/contact" className="hover:text-amber-200 transition-colors">Kontak</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-700">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-amber-200 transition-colors">Beranda</Link>
              <Link href="/about" className="hover:text-amber-200 transition-colors">Tentang</Link>
              <Link href="/services" className="hover:text-amber-200 transition-colors">Layanan</Link>
              <Link href="/portfolio" className="hover:text-amber-200 transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-amber-200 transition-colors">Kontak</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}