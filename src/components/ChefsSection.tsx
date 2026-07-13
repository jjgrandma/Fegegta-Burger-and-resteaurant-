import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const chefs = [
  {
    name: 'Yohannes Alemu',
    title: 'Master Chef',
    experience: '25+ years',
    bio: 'A master chef with 25 years of experience in Ethiopian and international cuisine.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80',
    specialty: 'Burgers & Grill',
  },
  {
    name: 'Selam Tesfaye',
    title: 'Pastry Chef',
    experience: '15+ years',
    bio: 'Award-winning pastry chef known for her exquisite dessert creations.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    specialty: 'Desserts & Baking',
  },
  {
    name: 'Biruk Mengistu',
    title: 'Sous Chef',
    experience: '12+ years',
    bio: 'Culinary expert specializing in grilled dishes and traditional Adama flavors.',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&q=80',
    specialty: 'Seafood & Pasta',
  },
];

export default function ChefsSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-gray-950 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
              {t('home.ourChef')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t('home.chefsTitle')}
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {chefs.map((chef, index) => (
            <ScrollReveal key={chef.name} delay={index * 150}>
              <div className="text-center group cursor-pointer">
                {/* Chef Photo */}
                <div className="mb-6 md:mb-8">
                  <div className="w-48 h-48 md:w-56 md:h-56 mx-auto relative overflow-hidden rounded-full border-4 border-gray-800 group-hover:border-red-500 transition-all duration-500 shadow-xl shadow-black/30">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Chef Info */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                  {chef.name}
                </h3>
                <p className="text-red-500 font-semibold text-sm md:text-base mb-1">{chef.title}</p>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{chef.experience} {t('home.experience')}</p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {chef.bio}
                </p>
                <p className="text-gray-500 text-xs mt-3 font-medium uppercase tracking-wider">
                  {t('home.specialty')}: {chef.specialty}
                </p>

                {/* Call to Action */}
                <Link
                  to="/chefs"
                  className="mt-4 inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold text-sm transition-colors group/link"
                >
                  {t('home.meetTeam')}
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
