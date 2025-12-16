import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Award, Users, Target, Heart, Star, MapPin, Phone, Mail } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-amber-900">ANGGA PUTRA PRATAMA</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ahli dalam pembuatan pakaian custom dengan kualitas premium dan dedikasi untuk kepuasan pelanggan
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-amber-900">ANGGA PUTRA PRATAMA</span> adalah usaha jasa penjahit 
                  yang telah berdiri sejak tahun 2010 di Karangnunggal, Tasikmalaya. Berawal dari passion 
                  dalam dunia fashion dan keahlian dalam menjahit, kami telah melayani ribuan pelanggan 
                  dengan berbagai kebutuhan pakaian custom.
                </p>
                <p>
                  Kami percaya bahwa setiap orang berhak memiliki pakaian yang tidak hanya nyaman dipakai, 
                  tetapi juga mencerminkan kepribadian dan gaya unik mereka. Dengan pengalaman lebih dari 
                  satu dekade, kami terus mengembangkan teknik dan desain untuk memberikan hasil terbaik 
                  bagi setiap pelanggan.
                </p>
                <p>
                  Komitmen kami terhadap kualitas dan kepuasan pelanggan telah menjadikan kami salah satu 
                  jasa penjahit terpercaya di Tasikmalaya dan sekitarnya.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-amber-900 mb-2">14+</div>
                    <p className="text-gray-600">Tahun Pengalaman</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-900 mb-2">5000+</div>
                    <p className="text-gray-600">Pelanggan Puas</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-900 mb-2">100+</div>
                    <p className="text-gray-600">Desain Custom</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-900 mb-2">98%</div>
                    <p className="text-gray-600">Tingkat Kepuasan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visi & Misi Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Panduan kami dalam memberikan layanan terbaik untuk Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi jasa penjahit terkemuka di Indonesia yang menghadirkan solusi fashion custom 
                dengan kualitas premium, inovasi desain, dan pelayanan terbaik untuk memenuhi kebutuhan 
                fashion setiap pelanggan.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  Memberikan hasil jahitan dengan kualitas terbaik dan finishing yang rapi
                </li>
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  Menggunakan bahan berkualitas tinggi untuk kenyamanan dan ketahanan
                </li>
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  Memberikan pelayanan yang ramah, profesional, dan responsif
                </li>
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  Terus berinovasi dalam desain dan teknik jahit modern
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prinsip yang memandu setiap jahitan dan pelayanan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kualitas</h3>
              <p className="text-gray-600 text-sm">
                Selalu memberikan hasil terbaik dengan standar kualitas tinggi
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kepercayaan</h3>
              <p className="text-gray-600 text-sm">
                Membangun kepercayaan melalui konsistensi dan transparansi
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">
                Bekerja dengan cinta dan dedikasi pada setiap detail
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kepuasan</h3>
              <p className="text-gray-600 text-sm">
                Prioritas utama adalah kepuasan pelanggan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Profesional Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Didukung oleh tim ahli yang berpengalaman dan berdedikasi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-900">APP</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Angga Putra Pratama</h3>
              <p className="text-amber-700 mb-2">Founder & Head Tailor</p>
              <p className="text-gray-600 text-sm">
                Ahli dalam desain dan teknik jahit dengan pengalaman 14+ tahun
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-900">TM</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tim Ahli Jahit</h3>
              <p className="text-amber-700 mb-2">Professional Tailors</p>
              <p className="text-gray-600 text-sm">
                Tim berpengalaman yang menguasai berbagai teknik jahit modern
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-900">CS</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Service</h3>
              <p className="text-amber-700 mb-2">Support Team</p>
              <p className="text-gray-600 text-sm">
                Siap membantu dan memberikan konsultasi terbaik untuk Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hubungi Kami</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-amber-800" size={20} />
                  <span className="text-gray-600">
                    KP SINDANGRERET, Karangnunggal, Tasikmalaya, Jawa Barat 44117
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="text-amber-800" size={20} />
                  <span className="text-gray-600">0877-2988-7794</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-amber-800" size={20} />
                  <span className="text-gray-600">info@anggaputratr.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}