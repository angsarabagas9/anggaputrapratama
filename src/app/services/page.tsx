import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Scissors, Ruler, Package, Clock, Star, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: <Package size={40} className="text-white" />,
      title: "Jas & Blazer Custom",
      description: "Jas formal dan blazer stylish untuk berbagai acara bisnis dan formal",
      features: ["Desain modern", "Bahan premium", "Ukuran presisi", "Finishing rapi"],
      price: "Mulai dari Rp 500.000"
    },
    {
      icon: <Scissors size={40} className="text-white" />,
      title: "Gaun & Dress",
      description: "Gaun pesta, dress casual, dan gaun malam yang elegan",
      features: ["Desain eksklusif", "Berbagai pilihan bahan", "Detail hand-made", "Custom size"],
      price: "Mulai dari Rp 400.000"
    },
    {
      icon: <Ruler size={40} className="text-white" />,
      title: "Kemeja Custom",
      description: "Kemeja formal, casual, dan kemeja batik dengan desain personal",
      features: ["Berbagai model", "Kualitas jahit terbaik", "Bahan nyaman", "Tahan lama"],
      price: "Mulai dari Rp 150.000"
    },
    {
      icon: <Package size={40} className="text-white" />,
      title: "Seragam",
      description: "Seragam kantor, sekolah, organisasi, dan komunitas",
      features: ["Desain profesional", "Harga grosir", "Consistent quality", "Delivery on time"],
      price: "Mulai dari Rp 100.000/pcs"
    },
    {
      icon: <Scissors size={40} className="text-white" />,
      title: "Jubah & Baju Muslim",
      description: "Jubah modern, baju muslim, dan pakaian syar'i yang modis",
      features: ["Desain syar'i", "Bahan adem", "Model terkini", "Nyaman dipakai"],
      price: "Mulai dari Rp 200.000"
    },
    {
      icon: <Ruler size={40} className="text-white" />,
      title: "Perbaikan & Alteration",
      description: "Perbaikan pakaian dan penyesuaian ukuran",
      features: ["Perbaikan cepat", "Hasil rapi", "Harga terjangkau", "Garansi"],
      price: "Mulai dari Rp 25.000"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Konsultasi Desain",
      description: "Diskusikan kebutuhan dan preferensi desain Anda dengan tim kami"
    },
    {
      step: "2", 
      title: "Pengukuran Detail",
      description: "Pengukuran tubuh yang presisi untuk hasil yang sempurna"
    },
    {
      step: "3",
      title: "Pemilihan Bahan",
      description: "Pilih bahan berkualitas dari koleksi kami atau bawa sendiri"
    },
    {
      step: "4",
      title: "Proses Produksi",
      description: "Pengerjaan oleh tim ahli dengan quality control ketat"
    },
    {
      step: "5",
      title: "Fitting & Revisi",
      description: "Sesi fitting untuk memastikan hasil sesuai harapan"
    },
    {
      step: "6",
      title: "Finishing & Delivery",
      description: "Final touch dan pengiriman atau pengambilan pesanan"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Layanan <span className="text-amber-900">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai layanan pembuatan pakaian custom dengan kualitas premium untuk memenuhi kebutuhan fashion Anda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Utama Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan pakaian custom Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-amber-100">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-amber-800 font-bold text-lg mb-3">{service.price}</p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-amber-700 font-semibold hover:text-amber-900 transition-colors group-hover:translate-x-1"
                    >
                      Pesan Sekarang
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Pemesanan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mudah dan transparan, dari konsultasi hingga pengiriman
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-amber-600" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Layanan Kami</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mengapa memilih <span className="text-amber-900 font-semibold">ANGGA PUTRA PRATAMA</span> untuk kebutuhan pakaian Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md text-center">
              <Star className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Kualitas Premium</h3>
              <p className="text-gray-600 text-sm">
                Hasil jahitan rapi dengan finishing sempurna
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Pengerjaan Tepat Waktu</h3>
              <p className="text-gray-600 text-sm">
                Deadline yang disepakati selalu dipenuhi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Garansi Kepuasan</h3>
              <p className="text-gray-600 text-sm">
                Revisi gratis jika hasil tidak sesuai
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-lg shadow-md text-center">
              <Package className="w-12 h-12 text-amber-800 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600 text-sm">
                Kualitas premium dengan harga terjangkau
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Membuat Pakaian Custom Impian Anda?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan fashion Anda dengan tim profesional kami dan dapatkan 
            hasil terbaik dengan kualitas premium
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
              href="/portfolio" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-all flex items-center justify-center"
            >
              Lihat Portfolio Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}