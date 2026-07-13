import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

interface Chef {
  id: number;
  name: string;
  title: string;
  experience: string;
  bio: string;
  fullBio: string;
  image: string;
  specialty: string;
  awards: string[];
  social: { platform: string; handle: string }[];
}

const chefs: Chef[] = [
  {
    id: 1,
    name: 'Yohannes Alemu',
    title: 'Master Chef & Founder',
    experience: '25+ years',
    bio: 'A master chef with 25 years of experience in Ethiopian and international cuisine.',
    fullBio: 'Chef Yohannes Alemu leads the kitchen at YO Burger in Adama. With years of experience in busy restaurant kitchens, he brings care and consistency to every order. His philosophy is simple: use fresh ingredients, cook with confidence, and make every guest smile.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&q=80',
    specialty: 'Burgers & Grill',
    awards: ['YO Team Leader', 'Burger Craft Award', 'Culinary Excellence Recognition'],
    social: [
      { platform: 'Instagram', handle: '@chefyohannes' },
      { platform: 'Twitter', handle: '@yohannesalemu' },
    ],
  },
  {
    id: 2,
    name: 'Selam Tesfaye',
    title: 'Executive Pastry Chef',
    experience: '15+ years',
    bio: 'Award-winning pastry chef known for her exquisite dessert creations.',
    fullBio: 'Chef Selam Tesfaye brings a refined touch to every dessert at YO Burger. Her innovative approach combines traditional Ethiopian flavors with modern pastry techniques. She has earned recognition for her signature creations and continues to delight guests with every plate.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80',
    specialty: 'Desserts & Baking',
    awards: ['Pastry Chef of the Year 2021', 'Best Dessert Award 2019', 'Adama Culinary Award 2017'],
    social: [
      { platform: 'Instagram', handle: '@selamtestaye' },
      { platform: 'Twitter', handle: '@selamchef' },
    ],
  },
  {
    id: 3,
    name: 'Biruk Mengistu',
    title: 'Sous Chef',
    experience: '12+ years',
    bio: 'Culinary expert specializing in grilled dishes and traditional Adama flavors.',
    fullBio: 'Chef Biruk Mengistu brings bold grill flavors to Fegegta. His passion for fresh ingredients, careful preparation, and fast service has made him an invaluable member of our kitchen team in Adama.',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&q=80',
    specialty: 'Grill & Local Flavors',
    awards: ['Adama Chef Championship 2018', 'Best Grill Award 2020'],
    social: [
      { platform: 'Instagram', handle: '@chefbiruk' },
      { platform: 'Twitter', handle: '@birukmengistu' },
    ],
  },
  {
    id: 4,
    name: 'Tigist Haile',
    title: 'Beverage Specialist',
    experience: '10+ years',
    bio: 'Expert in beverage curation with deep knowledge of Ethiopian and regional drinks.',
    fullBio: 'Tigist Haile is our resident beverage expert, curating a drink menu that perfectly complements our food. With years of experience in hospitality, she ensures every guest finds the perfect pairing for their meal at YO Burger.',
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=600&q=80',
    specialty: 'Beverage Pairing',
    awards: ['Beverage Service Award', 'Guest Choice Recognition'],
    social: [
      { platform: 'Instagram', handle: '@tigistdrinks' },
      { platform: 'Twitter', handle: '@tigisthaile' },
    ],
  },
  {
    id: 5,
    name: 'Dawit Bekele',
    title: 'Grill Master',
    experience: '18+ years',
    bio: 'Specialist in charcoal grilling and Ethiopian BBQ techniques.',
    fullBio: 'Chef Dawit Bekele is our grill master, specializing in flame-grilled cooking techniques that bring out the best in every burger and cut of meat. His expertise in temperature control, seasoning, and timing ensures every order leaves the kitchen perfectly cooked.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&q=80',
    specialty: 'Charcoal Grilling',
    awards: ['BBQ Championship Winner 2019', 'Grill Master Award 2021'],
    social: [
      { platform: 'Instagram', handle: '@grillmasterdawit' },
      { platform: 'Twitter', handle: '@dawitbekele' },
    ],
  },
  {
    id: 6,
    name: 'Meron Tadesse',
    title: 'Pastry Chef',
    experience: '8+ years',
    bio: 'Creative pastry artist known for beautiful and delicious creations.',
    fullBio: 'Chef Meron Tadesse brings artistry and innovation to our pastry kitchen. She combines classic techniques with local Ethiopian flavors to create desserts that are as beautiful as they are delicious.',
    image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=600&q=80',
    specialty: 'Artisan Pastries',
    awards: ['Young Pastry Chef Award 2020', 'Creative Dessert Competition 2019'],
    social: [
      { platform: 'Instagram', handle: '@meronpastry' },
      { platform: 'Twitter', handle: '@merontadesse' },
    ],
  },
];

export default function ChefsPage() {
  const { t } = useLanguage();
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);

  return (
    <div className="min-h-screen bg-gray-950 pt-14 md:pt-[62px] pb-12">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-16 md:py-20 px-4" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556911073-a525e7100f18?w=1600&q=80)',
      }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">{t('chefs.kicker')}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{t('chefs.title')}</h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Chefs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {chefs.map((chef, index) => (
            <ScrollReveal key={chef.id} delay={index * 100}>
              <div
                className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-red-500/5"
                onClick={() => setSelectedChef(chef)}
              >
                {/* Chef Photo */}
                <div className="relative overflow-hidden h-64 md:h-72">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {chef.name}
                    </h3>
                    <p className="text-red-500 text-sm font-semibold">{chef.title}</p>
                  </div>
                </div>

                {/* Chef Info */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-500 text-xs uppercase tracking-wider">{t('home.experience')}:</span>
                    <span className="text-white text-sm font-semibold">{chef.experience}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {chef.bio}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs uppercase tracking-wider">{t('home.specialty')}: {chef.specialty}</span>
                    <span className="text-red-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      {t('chefs.view')} →
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedChef && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedChef(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50 animate-fadeInScale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedChef(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedChef.image}
                  alt={selectedChef.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedChef.name}</h2>
                <p className="text-red-500 font-semibold text-base md:text-lg mb-1">{selectedChef.title}</p>
                <p className="text-gray-500 text-sm mb-4">{selectedChef.experience} {t('home.experience')} | {t('home.specialty')}: {selectedChef.specialty}</p>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {selectedChef.fullBio}
                </p>

                {/* Awards */}
                <div className="mb-6">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">{t('chefs.awards')}</h4>
                  <div className="space-y-2">
                    {selectedChef.awards.map((award) => (
                      <div key={award} className="flex items-center gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {award}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">{t('chefs.follow')}</h4>
                  <div className="flex gap-3">
                    {selectedChef.social.map((s) => (
                      <a
                        key={s.platform}
                        href="#"
                        className="text-gray-400 hover:text-red-500 text-sm transition-colors bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
                      >
                        {s.handle}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
