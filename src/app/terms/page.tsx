import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Syarat & <span className="text-amber-900">Ketentuan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Syarat dan ketentuan layanan <span className="text-amber-900 font-semibold">ANGGA PUTRA PRATAMA</span>
          </p>
        </div>
      </section>

      {/* Terms Content */}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
                <p className="text-gray-600 mb-4">
                  Dengan mengakses dan menggunakan website ANGGA PUTRA PRATAMA, Anda menyetujui 
                  dan terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat ini, 
                  jangan gunakan website atau layanan kami.
                </p>
                <p className="text-gray-600">
                  Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
                  berlaku segera setelah diposting di website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Layanan Kami</h2>
                <p className="text-gray-600 mb-4">
                  ANGGA PUTRA PRATAMA menyediakan layanan penjahit dan pembuatan pakaian custom, 
                  meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Jas dan blazer custom</li>
                  <li>Gaun dan dress</li>
                  <li>Kemeja custom</li>
                  <li>Seragam untuk berbagai keperluan</li>
                  <li>Jubah dan baju muslim</li>
                  <li>Layanan perbaikan dan alterasi</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proses Pemesanan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Konsultasi</h3>
                    <p className="text-gray-600">
                      Setiap pemesanan dimulai dengan konsultasi untuk memahami kebutuhan dan 
                      preferensi Anda. Konsultasi dapat dilakukan melalui telepon, WhatsApp, 
                      atau langsung di workshop kami.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Pengukuran</h3>
                    <p className="text-gray-600">
                      Pengukuran detail diperlukan untuk hasil yang sempurna. Kami menyediakan 
                      layanan pengukuran di tempat untuk area tertentu atau Anda dapat datang 
                      langsung ke workshop kami.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Pemilihan Bahan</h3>
                    <p className="text-gray-600">
                      Anda dapat memilih bahan dari koleksi kami atau membawa bahan sendiri. 
                      Kami akan memberikan rekomendasi bahan yang sesuai dengan kebutuhan Anda.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Uang Muka (DP)</h3>
                    <p className="text-gray-600">
                      Uang muka minimal 50% dari total harga harus dibayar saat konfirmasi pemesanan. 
                      Pemesanan akan diproses setelah DP diterima.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Pelunasan</h3>
                    <p className="text-gray-600">
                      Sisa pembayaran harus dilunasi sebelum atau saat pengambilan barang. 
                      Barang tidak akan diserahkan sebelum pembayaran lunas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 Metode Pembayaran</h3>
                    <p className="text-gray-600">
                      Kami menerima pembayaran melalui transfer bank, tunai, atau e-wallet. 
                      Detail pembayaran akan diberikan saat konfirmasi pemesanan.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Waktu Pengerjaan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Estimasi Waktu</h3>
                    <p className="text-gray-600">
                      Waktu pengerjaan bervariasi tergantung tingkat kesulitan dan jumlah pesanan:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                      <li>Pesanan sederhana: 7-10 hari</li>
                      <li>Pesanan standar: 10-14 hari</li>
                      <li>Pesanan kompleks: 2-4 minggu</li>
                      <li> Pesanan besar/grosir: disesuaikan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Keterlambatan</h3>
                    <p className="text-gray-600">
                      Kami akan memberikan informasi jika terjadi keterlambatan yang tidak dapat dihindari. 
                      Keterlambatan karena force majeure tidak menjadi tanggung jawab kami.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kebijakan Pengembalian dan Revisi</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 Revisi</h3>
                    <p className="text-gray-600">
                      Kami menyediakan revisi gratis jika hasil tidak sesuai dengan spesifikasi yang 
                      disepakati. Revisi harus diminta dalam waktu 7 hari setelah pengambilan barang.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2 Pengembalian Uang</h3>
                    <p className="text-gray-600">
                      Pengembalian uang hanya dipertimbangkan jika:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                      <li>Kesalahan terletak pada pihak kami</li>
                      <li>Revisi tidak dapat memperbaiki masalah</li>
                      <li>Kesalahan material yang kami sediakan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.3 Pembatalan</h3>
                    <p className="text-gray-600">
                      Pembatalan pesanan dapat dilakukan dengan ketentuan:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                      <li>Pembatalan sebelum proses produksi: DP dikembalikan 50%</li>
                      <li>Pembatalan saat proses produksi: DP hangus</li>
                      <li>Pembatalan setelah barang selesai: tidak ada pengembalian</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak Kekayaan Intelektual</h2>
                <p className="text-gray-600 mb-4">
                  Semua desain, pattern, dan kreksi asli yang dibuat oleh ANGGA PUTRA PRATAMA 
                  merupakan hak kekayaan intelektual kami. Pelanggan tidak boleh mereproduksi, 
                  mendistribusikan, atau menggunakan desain kami untuk tujuan komersial tanpa 
                  izin tertulis.
                </p>
                <p className="text-gray-600">
                  Pelanggan tetap memiliki hak atas pakaian yang telah dibayar lunas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Batasan Tanggung Jawab</h2>
                <p className="text-gray-600 mb-4">
                  ANGGA PUTRA PRATAMA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Kerusakan akibat penggunaan yang tidak tepat</li>
                  <li>Perubahan warna akibat proses pencucian</li>
                  <li>Kesalahan pengukuran yang disediakan pelanggan</li>
                  <li>Keterlambatan karena force majeure (bencana alam, dll)</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privasi Data</h2>
                <p className="text-gray-600">
                  Kami melindungi data pribadi Anda sesuai dengan Kebijakan Privasi kami. 
                  Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan 
                  data sesuai kebijakan privasi yang berlaku.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Hukum yang Berlaku</h2>
                <p className="text-gray-600">
                  Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu, 
                  dan jika tidak mencapai kesepakatan, akan diselesaikan melalui pengadilan 
                  yang berwenang di wilayah Tasikmalaya.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Hubungi Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
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