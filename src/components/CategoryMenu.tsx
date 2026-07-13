import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';
import drinkImg from '../public/assets/drink.jpg';

export default function CategoryMenu() {
  const { t } = useLanguage();
  const categories = [
    { name: t('category.breakfast'), image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', description: t('home.startDay'), items: 12 },
    { name: t('category.lunch'), image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', description: t('home.midday'), items: 18 },
    { name: t('category.dinner'), image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80', description: t('home.evening'), items: 24 },
    { name: t('category.drinks'), image: drinkImg, description: t('home.refreshing'), items: 15 },
  ];

  return (
    <section className="bg-gray-950 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
              {t('home.ourMenu')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t('home.menuTitle')}
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 100}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 h-48 md:h-56 lg:h-72 shadow-lg shadow-black/20">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">{category.name}</h3>
                    <p className="text-gray-300 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <p className="text-red-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.items} {t('home.items')}
                    </p>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white text-center group-hover:text-red-500 transition-colors">
                  {category.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
