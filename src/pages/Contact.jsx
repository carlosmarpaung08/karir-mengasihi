import React from 'react';

function Contact() {
  const whatsappNumber = "6285369435057";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailAddress = "info@karirmengasihi.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Hubungi
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Kami
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami. 
              Kami siap membantu perjalanan mengASIhi Anda!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-2xl font-bold text-pink-600">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Siap Membantu</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">1-2 Hari</div>
              <div className="text-sm text-gray-600 font-medium">Respon Cepat</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-2xl font-bold text-pink-600">Gratis</div>
              <div className="text-sm text-gray-600 font-medium">Konsultasi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Chat WhatsApp</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Konsultasi langsung dengan tim ahli kami melalui WhatsApp. 
                    Dapatkan jawaban cepat untuk pertanyaan Anda!
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Respon dalam hitungan menit
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Konsultasi gratis
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tersedia 24/7
                    </div>
                  </div>

                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/btn w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Mulai Chat WhatsApp</span>
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kirim Email</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Untuk pertanyaan yang lebih detail atau kolaborasi bisnis, 
                    kirimkan email kepada kami dan kami akan merespons segera.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Respon dalam 1-2 hari kerja
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Detail dan komprehensif
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cocok untuk kolaborasi
                    </div>
                  </div>

                  <a 
                    href={`mailto:${emailAddress}`} 
                    className="group/btn w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Kirim Email Sekarang</span>
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Informasi Tambahan
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Kami berkomitmen untuk memberikan dukungan terbaik bagi para ibu bekerja yang ingin memberikan ASI Eksklusif. 
                  Tim kami terdiri dari konsultan laktasi berpengalaman dan para ibu yang telah berhasil menjalani perjalanan mengASIhi 
                  sambil berkarir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Konsultasi Profesional</h4>
                        <p className="text-gray-600 text-sm">Dapatkan saran dari konsultan laktasi bersertifikat</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Sharing Experience</h4>
                        <p className="text-gray-600 text-sm">Berbagi pengalaman dengan ibu bekerja lainnya</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Tips Praktis</h4>
                        <p className="text-gray-600 text-sm">Solusi nyata untuk tantangan sehari-hari</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Dukungan Berkelanjutan</h4>
                        <p className="text-gray-600 text-sm">Pendampingan sepanjang perjalanan mengASIhi</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                  <p className="text-gray-700 font-medium">
                    💝 Terima kasih atas kunjungan Anda ke <span className="font-bold text-pink-600">Sukses ASI dan Bekerja</span>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;