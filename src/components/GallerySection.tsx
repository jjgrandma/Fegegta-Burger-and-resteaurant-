import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85', alt: 'YO CLASSIC BURGER' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=85', alt: 'Mixed Grill Platter' },
  { src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=85', alt: 'Grilled Chicken' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85', alt: 'Gourmet Dish' },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=85', alt: 'Chocolate Cake' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85', alt: 'Fresh Salad' },
  { src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=85', alt: 'Double Smash Burger' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=85', alt: 'Signature Drink' },
  { src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=85', alt: 'Loaded Fries' },
];

function GalleryItem({
  src,
  alt,
  className,
  index,
}: {
  src: string;
  alt: string;
  className: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger by index
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl group cursor-zoom-in ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.88)',
        transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover brightness-90 group-hover:brightness-105 group-hover:[animation-play-state:paused]"
        style={{
          animationName: 'kenBurns',
          animationDuration: '6s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: `${index * 0.7}s`,
        }}
        loading="lazy"
      />
      {/* hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
        <span className="text-white text-sm font-semibold tracking-wide">{alt}</span>
      </div>
      {/* red accent border on hover */}
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-red-500/60 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-950 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
            {t('home.gallery')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('home.galleryTitle')}
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* ── Bento Gallery Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-3 md:gap-4">

          {/* Row 1: big left | small top-right stack | big right */}
          {/* [0] Large left — tall */}
          <GalleryItem
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            index={0}
            className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-56 md:h-full min-h-[280px]"
          />

          {/* [1] Top middle-right */}
          <GalleryItem
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            index={1}
            className="col-span-1 h-40 md:h-auto"
          />

          {/* [2] Top far-right */}
          <GalleryItem
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            index={2}
            className="col-span-1 h-40 md:h-auto"
          />

          {/* [3] Bottom middle-right */}
          <GalleryItem
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            index={3}
            className="col-span-1 h-40 md:h-auto"
          />

          {/* [4] Bottom far-right */}
          <GalleryItem
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            index={4}
            className="col-span-1 h-40 md:h-auto"
          />

          {/* Row 2: small left | wide center | small right */}
          {/* [5] Small bottom-left */}
          <GalleryItem
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            index={5}
            className="col-span-1 h-44 md:h-56"
          />

          {/* [6] Wide center bottom */}
          <GalleryItem
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            index={6}
            className="col-span-1 md:col-span-2 h-44 md:h-56"
          />

          {/* [7] Small bottom-right */}
          <GalleryItem
            src={galleryImages[7].src}
            alt={galleryImages[7].alt}
            index={7}
            className="col-span-1 h-44 md:h-56"
          />

          {/* [8] Full-width bottom strip */}
          <GalleryItem
            src={galleryImages[8].src}
            alt={galleryImages[8].alt}
            index={8}
            className="col-span-2 md:col-span-4 h-44 md:h-60"
          />
        </div>
      </div>
    </section>
  );
}
