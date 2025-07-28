import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';

function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(art => art.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <section className="relative py-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-25 animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Artikel Tidak Ditemukan
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Maaf, artikel yang Anda cari tidak tersedia atau mungkin telah dipindahkan.
              </p>

              <Link 
                to="/articles" 
                className="group inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Daftar Artikel
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <section className="relative py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link 
              to="/" 
              className="text-gray-500 hover:text-pink-600 transition-colors duration-200"
            >
              Beranda
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              to="/articles" 
              className="text-gray-500 hover:text-pink-600 transition-colors duration-200"
            >
              Artikel
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">{article.title}</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {article.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center bg-pink-50 rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-pink-700 text-sm font-medium">Artikel Edukasi</span>
                </div>
                <div className="flex items-center bg-purple-50 rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-purple-700 text-sm font-medium">Baca 5-10 menit</span>
                </div>
              </div>

              {article.blocks && article.blocks.map((block, index) => (
                <React.Fragment key={index}>
                  {block.type === "text" && (
                    <div 
                      className="prose prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:mb-6 prose-p:leading-relaxed prose-strong:text-pink-700 prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700" 
                      dangerouslySetInnerHTML={{ __html: block.content }} 
                    />
                  )}
                  {block.type === "image" && (
                    <div className="block flex flex-col items-center justify-center mb-6"> 
                      <figure className="my-4 w-full">
                        <img 
                          src={block.src} 
                          alt={block.alt} 
                          className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                        />
                        {block.caption && (
                          <figcaption className="text-center text-sm text-gray-600 mt-2">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    </div>
                  )}
                </React.Fragment>
              ))}

            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-12">
              <Link 
                to="/articles" 
                className="group flex items-center bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-pink-300"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Artikel
              </Link>

              <a 
                href="https://wa.me/6285369435057"
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Punya Pertanyaan?
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ingin Membaca Artikel Lainnya?
              </h3>
              <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
                Temukan lebih banyak tips dan panduan seputar ASI Eksklusif untuk mendukung perjalanan mengASIhi Anda.
              </p>
              <Link 
                to="/articles" 
                className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleDetail;