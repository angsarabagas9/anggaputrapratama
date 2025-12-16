import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
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
                <h3 className="text-xl font-bold">ANGGA PUTRA PRATAMA</h3>
                <p className="text-amber-100">Professional Tailor & Fashion</p>
              </div>
            </div>
            <p className="text-amber-100 mb-4 leading-relaxed">
              Kami adalah ahli dalam pembuatan pakaian custom dengan kualitas terbaik. 
              Dengan pengalaman bertahun-tahun, kami menghadirkan gaun impian Anda menjadi kenyataan.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                <Twitter size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-amber-100 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="text-amber-100 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/services" className="text-amber-100 hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="/portfolio" className="text-amber-100 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-amber-100 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-200" />
                <span className="text-amber-100 text-sm">
                  KP SINDANGRERET, Karangnunggal<br />
                  Kab. Tasikmalaya, Jawa Barat 44117
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-200" />
                <span className="text-amber-100 text-sm">0877-2988-7794</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-200" />
                <span className="text-amber-100 text-sm">info@anggaputratr.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-100 text-sm mb-4 md:mb-0">
              © 2024 ANGGA PUTRA PRATAMA. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-amber-100 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-amber-100 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}