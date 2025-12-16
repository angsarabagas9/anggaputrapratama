import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Kebijakan <span className="text-amber-900">Privasi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kebijakan privasi <span className="text-amber-900 font-semibold">ANGGA PUTRA PRATAMA</span> 
            untuk melindungi data pribadi pelanggan
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p className="text-gray-600 mb-4">
                  Selamat datang di website ANGGA PUTRA PRATAMA. Kami sangat menghargai privasi Anda 
                  dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
                  melindungi informasi Anda saat menggunakan layanan kami.
                </p>
                <p className="text-gray-600">
                  Dengan menggunakan website dan layanan kami, Anda menyetujui praktik yang dijelaskan 
                  dalam kebijakan ini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Informasi Pribadi</h3>
                    <p className="text-gray-600 mb-2">Kami dapat mengumpulkan informasi pribadi berikut:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat lengkap</li>
                      <li>Informasi pengukuran tubuh</li>
                      <li>Preferensi desain dan warna</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Informasi Teknis</h3>
                    <p className="text-gray-600 mb-2">Kami juga dapat mengumpulkan informasi teknis:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Informasi perangkat</li>
                      <li>Data penggunaan website</li>
                      <li>Cookies dan teknologi serupa</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
                <p className="text-gray-600 mb-4">Kami menggunakan informasi yang Anda berikan untuk:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Memproses pesanan dan layanan yang Anda minta</li>
                  <li>Mengkomunikasikan status pesanan Anda</li>
                  <li>Memberikan layanan pelanggan dan dukungan teknis</li>
                  <li>Mengirim informasi tentang produk dan layanan kami</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                  <li>Mencegah aktivitas ilegal dan penipuan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
                <p className="text-gray-600 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali dalam situasi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Untuk memproses pesanan (misalnya, pengiriman)</li>
                  <li>Dengan penyedia layanan tepercaya yang membantu operasi bisnis kami</li>
                  <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  <li>Dengan afiliasi perusahaan kami dengan tujuan konsisten dengan kebijakan ini</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
                <p className="text-gray-600 mb-4">
                  Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda 
                  dari akses tidak sah, penggunaan, atau perubahan. Langkah-langkah keamanan kami meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Firewall dan sistem keamanan yang kuat</li>
                  <li>Audit keamanan reguler</li>
                  <li>Pelatihan staf tentang keamanan data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah 
                  file teks kecil yang disimpan di browser Anda. Kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis penggunaan website</li>
                  <li>Menyediakan konten yang dipersonalisasi</li>
                  <li>Meningkatkan keamanan website</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Anda dapat mengontrol cookies melalui pengaturan browser Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak Anda</h2>
                <p className="text-gray-600 mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbarui informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
                  <li>Meminta salinan informasi pribadi Anda</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Penyimpanan Data</h2>
                <p className="text-gray-600 mb-4">
                  Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan yang 
                  dijelaskan dalam kebijakan ini, kecuali periode penyimpanan yang lebih lama diperlukan 
                  atau diizinkan oleh hukum.
                </p>
                <p className="text-gray-600">
                  Informasi pesanan biasanya disimpan selama 5 tahun untuk tujuan garansi dan layanan pelanggan.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Anak di Bawah Umur</h2>
                <p className="text-gray-600">
                  Website kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak secara sadar 
                  mengumpulkan informasi pribadi dari anak di bawah umur. Jika kami mengetahui bahwa 
                  kami telah mengumpulkan informasi dari anak di bawah umur, kami akan mengambil langkah 
                  untuk menghapus informasi tersebut segera.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Perubahan Kebijakan</h2>
                <p className="text-gray-600">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                  diposting di halaman ini dengan tanggal revisi terbaru. Kami menyarankan Anda untuk 
                  secara berkala meninjau kebijakan ini untuk tetap mendapat informasi tentang cara 
                  kami melindungi informasi Anda.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Hubungi Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau praktik privasi kami, 
                  silakan hubungi kami:
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>ANGGA PUTRA PRATAMA</strong></p>
                  <p className="text-gray-600">Email: info@anggaputratr.com</p>
                  <p className="text-gray-600">Telepon: 0877-2988-7794</p>
                  <p className="text-gray-600">
                    Alamat: KP SINDANGRERET, Karangnunggal, Tasikmalaya, Jawa Barat 44117
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}