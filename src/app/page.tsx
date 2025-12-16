import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Scissors, Ruler, Package, Star, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-amber-900">ANGGA PUTRA</span><br />
                <span className="text-amber-800">PRATAMA</span>
              </h1>
              <h2 className="text-2xl text-amber-700 mb-6">Professional Tailor & Fashion Designer</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Wujudkan gaun impian Anda dengan sentuhan profesional. 
                Kami adalah ahli dalam pembuatan pakaian custom dengan kualitas terbaik 
                dan desain yang elegan untuk setiap kesempatan istimewa Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-amber-800 to-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-900 hover:to-amber-950 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Pesan Sekarang
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="/portfolio" 
                  className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 hover:text-white transition-all flex items-center justify-center"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                      <Scissors size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Kualitas Terjamin</h3>
                  <p className="text-center text-gray-600">100% Tangan Ahli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan pelayanan terbaik dengan kualitas jahitan yang sempurna
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6">
                <Scissors size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ahli Jahit Profesional</h3>
              <p className="text-gray-600">
                Dikerjakan oleh penjahit berpengalaman dengan teknik jahit modern dan presisi tinggi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6">
                <Ruler size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ukuran Sempurna</h3>
              <p className="text-gray-600">
                Pengukuran detail dan akurat untuk hasil pakaian yang pas dan nyaman dipakai
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6">
                <Package size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kualitas Premium</h3>
              <p className="text-gray-600">
                Menggunakan bahan berkualitas tinggi dengan finishing yang rapi dan tahan lama
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Berbagai layanan pembuatan pakaian untuk memenuhi kebutuhan fashion Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Jas & Blazer</h3>
              <p className="text-gray-600 text-sm">Jas formal dan blazer stylish untuk berbagai acara</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Gaun & Dress</h3>
              <p className="text-gray-600 text-sm">Gaun pesta dan dress elegan untuk wanita modern</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Kemeja Custom</h3>
              <p className="text-gray-600 text-sm">Kemeja custom dengan desain dan ukuran personal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Seragam</h3>
              <p className="text-gray-600 text-sm">Seragam kantor, sekolah, atau komunitas</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/services" 
              className="inline-flex items-center text-amber-800 font-semibold hover:text-amber-900 transition-colors"
            >
              Lihat Semua Layanan
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Apa kata pelanggan setia kami tentang layanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Hasil jahitannya sangat rapi dan sesuai dengan yang saya inginkan. 
                Pelayanannya juga ramah dan profesional."
              </p>
              <p className="font-semibold text-gray-900">- Siti Nurhaliza</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Jas pesanan saya sangat pas dan nyaman dipakai. Kualitas bahan juga bagus. 
                Highly recommended!"
              </p>
              <p className="font-semibold text-gray-900">- Budi Santoso</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Gaun pesta saya sangat cantik dan banyak yang memuji. 
                Terima kasih ANGGA PUTRA PRATAMA!"
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
            Siap Mewujudkan Pakaian Impian Anda?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan fashion Anda dengan kami dan dapatkan hasil terbaik 
            dengan kualitas premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Hubungi Kami Sekarang
            </Link>
            <Link 
              href="mailto:info@anggaputratr.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-all flex items-center justify-center"
            >
              <Mail className="mr-2" size={20} />
              Kirim Email
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Jam Operasional</h3>
              <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
              <p className="text-gray-600">Minggu: 09:00 - 15:00</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Garansi Kualitas</h3>
              <p className="text-gray-600">Hasil jahitan rapi dan tahan lama</p>
              <p className="text-gray-600">Kepuasan pelanggan prioritas kami</p>
            </div>
            <div className="text-center">
              <Package className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Pengerjaan Cepat</h3>
              <p className="text-gray-600">Waktu pengerjaan sesuai kesepakatan</p>
              <p className="text-gray-600">Update progress berkala</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}