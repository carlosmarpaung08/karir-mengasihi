import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

function ArticleList() {
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
                Artikel
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Edukasi
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Temukan berbagai informasi penting dan tips praktis seputar ASI Eksklusif 
              untuk mendukung perjalanan Sukses ASI dan Bekerja Anda.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-2xl font-bold text-pink-600">{articles.length}+</div>
              <div className="text-sm text-gray-600 font-medium">Artikel Tersedia</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600 font-medium">Gratis</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-2xl font-bold text-pink-600">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Akses</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div 
                key={article.id} 
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                
                <div className="p-8">
                  <div className="absolute top-4 right-6 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>

                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>

                  <Link 
                    to={`/article/${article.slug}`} 
                    className="group/btn relative inline-flex items-center justify-center w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="flex items-center">
                      <span className="mr-2">Baca Selengkapnya</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Artikel</h3>
              <p className="text-gray-600">Artikel sedang dalam proses pembuatan. Silakan kembali lagi nanti.</p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Punya Pertanyaan Khusus?
            </h3>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
              Jangan ragu untuk berkonsultasi langsung dengan kami melalui WhatsApp. 
              Kami siap membantu perjalanan mengASIhi Anda!
            </p>
            <a 
              href="https://wa.me/6285369435057"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleList;