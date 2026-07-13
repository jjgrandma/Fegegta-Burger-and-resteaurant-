import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', alt: 'Fegegta burger',  height: 'h-64', width: 'w-[220px]' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', alt: 'Mixed grill',      height: 'h-80', width: 'w-[280px]' },
  { src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80', alt: 'Fine dining',   height: 'h-56', width: 'w-[200px]' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Gourmet dish',  height: 'h-72', width: 'w-[260px]' },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80', alt: 'Dessert',          height: 'h-48', width: 'w-[180px]' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', alt: 'Salad',            height: 'h-64', width: 'w-[240px]' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', alt: 'Pizza',         height: 'h-56', width: 'w-[200px]' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80', alt: 'Cocktail',         height: 'h-72', width: 'w-[220px]' },
];

// Duplicate for seamless infinite loop
const allImages = [...galleryImages, ...galleryImages];

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-950 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
              {t('home.gallery')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t('home.galleryTitle')}
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width marquee strip — no side padding */}
      <div className="overflow-hidden gallery-track">
        <div className="flex items-end gap-4 animate-marquee" style={{ width: 'max-content' }}>
          {allImages.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border-2 border-gray-800 group shadow-lg shadow-black/20 flex-shrink-0 ${img.width} ${img.height}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
