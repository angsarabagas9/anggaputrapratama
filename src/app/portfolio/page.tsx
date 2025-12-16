"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Eye, ArrowRight, Star, Filter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'jas', name: 'Jas & Blazer' },
    { id: 'dress', name: 'Gaun & Dress' },
    { id: 'kemeja', name: 'Kemeja' },
    { id: 'seragam', name: 'Seragam' },
    { id: 'muslim', name: 'Muslim Wear' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'jas',
      title: 'Jas Formal Navy',
      description: 'Jas formal dengan desain modern untuk acara bisnis',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Budi Santoso'
    },
    {
      id: 2,
      category: 'dress',
      title: 'Gaun Malam Merah',
      description: 'Gaun malam elegan untuk acara pesta',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Siti Nurhaliza'
    },
    {
      id: 3,
      category: 'kemeja',
      title: 'Kemeja Batik Modern',
      description: 'Kemeja batik dengan sentuhan desain kontemporer',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Ahmad Fauzi'
    },
    {
      id: 4,
      category: 'seragam',
      title: 'Seragam Kantor Profesional',
      description: 'Desain seragam kantor yang elegan dan profesional',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'PT. Maju Bersama'
    },
    {
      id: 5,
      category: 'muslim',
      title: 'Jubah Modern Premium',
      description: 'Jubah dengan desain modern dan bahan premium',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Rina Permata'
    },
    {
      id: 6,
      category: 'jas',
      title: 'Blazer Wanita Chic',
      description: 'Blazer stylish untuk wanita karir modern',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Maya Putri'
    },
    {
      id: 7,
      category: 'dress',
      title: 'Dress Casual Summer',
      description: 'Dress casual yang nyaman untuk daily wear',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Diana Kartika'
    },
    {
      id: 8,
      category: 'kemeja',
      title: 'Kemeja Formal White',
      description: 'Kemeja formal putih dengan kualitas premium',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'Rizky Ahmad'
    },
    {
      id: 9,
      category: 'seragam',
      title: 'Seragam Sekolah Modern',
      description: 'Desain seragam sekolah yang nyaman dan modis',
      image: '/api/placeholder/400/500',
      rating: 5,
      client: 'SMK Nusantara'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Portfolio <span className="text-amber-900">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hasil karya terbaik dari <span className="text-amber-900 font-semibold">ANGGA PUTRA PRATAMA</span> 
            yang telah memuaskan ribuan pelanggan
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-amber-900 font-bold text-lg">APP</span>
                      </div>
                      <p className="text-amber-800 font-medium">Sample Image</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium capitalize">{item.category}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-200">Client: {item.client}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-amber-700 font-semibold hover:text-amber-900 transition-colors"
                    >
                      Pesan Seperti Ini
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                    <button className="text-gray-500 hover:text-amber-700 transition-colors">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Tidak ada portfolio dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Angka-angka yang menunjukkan dedikasi kami dalam memberikan yang terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">5000+</div>
              <p className="text-gray-600">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">98%</div>
              <p className="text-gray-600">Kepuasan Pelanggan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">50+</div>
              <p className="text-gray-600">Desain Baru/Bulan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-900 mb-2">14+</div>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Testimoni dari pelanggan yang telah puas dengan layanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Hasil jahitannya sangat rapi dan sesuai dengan yang saya inginkan. 
                Pelayanannya juga ramah dan profesional. Highly recommended!"
              </p>
              <p className="font-semibold text-gray-900">- Siti Nurhaliza</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Jas pesanan saya sangat pas dan nyaman dipakai. Kualitas bahan juga bagus. 
                ANGGA PUTRA PRATAMA memang yang terbaik!"
              </p>
              <p className="font-semibold text-gray-900">- Budi Santoso</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Gaun pesta saya sangat cantik dan banyak yang memuji. 
                Terima kasih atas kerja kerasnya!"
              </p>
              <p className="font-semibold text-gray-900">- Maya Putri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ingin Menjadi Bagian dari Portfolio Kami?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan fashion Anda dan dapatkan hasil terbaik dari 
            tim profesional <span className="font-semibold">ANGGA PUTRA PRATAMA</span>
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}