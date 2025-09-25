import React from 'react';
import { Link } from 'react-router-dom';

const heroImageUrl = "/images/hero-ibu-menyusui.jpg";

function Home() {
  return (
    <div className="home-page min-h-screen">
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Sukses
                  </span>{' '}
                  ASI{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    dan Bekerja
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Panduan lengkap ASI Eksklusif untuk ibu bekerja modern. 
                Wujudkan karir gemilang sambil memberikan yang terbaik untuk si Kecil.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-gray-700 font-medium">Tips Praktis</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-700 font-medium">Panduan Lengkap</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-gray-700 font-medium">Konsultasi Gratis</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/articles" 
                  className="group relative bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Mulai Baca Artikel
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <a 
                  href="https://wa.me/6285369435057"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg border-2 border-gray-200 hover:border-green-400 transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Kontak WhatsApp
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-50"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl transform -rotate-1 opacity-30"></div>
                
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img 
                    src={heroImageUrl} 
                    alt="Ibu Bekerja dan Menyusui - Panduan ASI Eksklusif" 
                    className="rounded-2xl shadow-lg max-w-full h-auto w-full max-w-md lg:max-w-lg object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/F3E8FF/8B5CF6?text=Ibu+Bekerja+%26+Menyusui";
                    }}
                  />
                </div>

                <div className="absolute -top-4 -left-4 bg-pink-500 text-white p-3 rounded-2xl shadow-lg transform rotate-12 animate-bounce">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white p-3 rounded-2xl shadow-lg transform -rotate-12 animate-pulse">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tips Praktis</h3>
              <p className="text-gray-600">Solusi nyata untuk ibu bekerja yang ingin memberikan ASI eksklusif</p>
            </div>
            
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Panduan Lengkap</h3>
              <p className="text-gray-600">Artikel mendalam tentang manajemen ASI dan career balance</p>
            </div>
            
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Konsultasi</h3>
              <p className="text-gray-600">Dukungan langsung melalui WhatsApp untuk pertanyaan Anda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;