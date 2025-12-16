'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgent: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const services = [
    'Jas & Blazer Custom',
    'Gaun & Dress',
    'Kemeja Custom',
    'Seragam',
    'Jubah & Baju Muslim',
    'Perbaikan & Alteration',
    'Lainnya'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hubungi <span className="text-amber-900">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konsultasikan kebutuhan fashion Anda dengan tim profesional 
            <span className="text-amber-900 font-semibold"> ANGGA PUTRA PRATAMA</span>
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Form Pemesanan</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Pesan Terkirim!</h3>
                  <p className="text-green-600">
                    Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda dalam 24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Layanan yang Dibutuhkan *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Pilih Layanan</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Detail Pesanan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      placeholder="Jelaskan detail kebutuhan Anda, seperti: ukuran, warna, desain, acara, dll..."
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="urgent"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleChange}
                      className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                    />
                    <label htmlFor="urgent" className="ml-2 text-sm text-gray-700">
                      Pesanan ini mendesak (dapat mempengaruhi harga dan waktu pengerjaan)
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-900 transition-all transform hover:scale-[1.02] flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Kirim Pesanan
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Alamat Workshop</h3>
                      <p className="text-gray-600">
                        KP SINDANGRERET<br />
                        Desa/Kelurahan Karangnunggal<br />
                        Kec. Karangnunggal, Kab. Tasikmalaya<br />
                        Provinsi Jawa Barat 44117
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Telepon</h3>
                      <p className="text-gray-600">0877-2988-7794</p>
                      <p className="text-sm text-gray-500">WhatsApp available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@anggaputratr.com</p>
                      <p className="text-sm text-gray-500">Response time: 24 jam</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Senin - Sabtu: 08:00 - 17:00<br />
                        Minggu: 09:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cepat Hubungi Kami</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:087729887794" 
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Telepon Sekarang
                  </a>
                  <a 
                    href="https://wa.me/6287729887794" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:info@anggaputratr.com" 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Mail className="mr-2" size={20} />
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Informasi penting tentang layanan kami
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Berapa lama waktu pengerjaan?</h3>
              <p className="text-gray-600">
                Waktu pengerjaan bervariasi tergantung tingkat kesulitan dan jumlah pesanan. 
                Untuk pesanan standar biasanya 7-14 hari, sedangkan untuk pesanan kompleks bisa 3-4 minggu.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Apakah tersedia layanan pengukuran di tempat?</h3>
              <p className="text-gray-600">
                Ya, kami menyediakan layanan pengukuran di tempat untuk area Tasikmalaya dan sekitarnya 
                dengan minimal order tertentu. Silakan hubungi kami untuk informasi lebih lanjut.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Bagaimana sistem pembayarannya?</h3>
              <p className="text-gray-600">
                Kami menggunakan sistem DP 50% saat pemesanan dan pelunasan 50% setelah pesanan selesai. 
                Pembayaran dapat dilakukan melalui transfer bank atau tunai.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Apakah ada garansi untuk hasil jahitan?</h3>
              <p className="text-gray-600">
                Ya, kami memberikan garansi kepuasan pelanggan. Jika ada yang tidak sesuai, 
                kami akan melakukan revisi gratis sesuai dengan kesepakatan awal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}