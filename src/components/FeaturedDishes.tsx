import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';
import boomImg from '../public/assets/boom.jpg';
import drinkImg from '../public/assets/drink.jpg';

interface Dish {
  name: string;
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const dishCategories: Record<string, Dish[]> = {
  STARTERS: [
    { name: 'SPICED POTATO WEDGES', description: 'Crispy potato wedges with house spice and garlic dip.', price: 'ETB 220', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80', isNew: true },
    { name: 'GARLIC MUSHROOMS', description: 'Sauteed mushrooms with garlic butter and fresh herbs.', price: 'ETB 240', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
    { name: 'FRESH GARDEN SALAD', description: 'Crisp greens, tomato, cucumber, onion, and house dressing.', price: 'ETB 210', image: boomImg },
    { name: 'LOADED FRIES', description: 'Hand-cut fries with cheese, peppers, and Fegegta sauce.', price: 'ETB 260', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
  ],
  BURGERS: [
    { name: 'FEGEGTA CLASSIC BURGER', description: 'Grilled beef patty, cheese, lettuce, tomato, onion, and signature sauce.', price: 'ETB 390', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', isNew: true },
    { name: 'DOUBLE SMASH BURGER', description: 'Two beef patties, double cheese, caramelized onion, and house sauce.', price: 'ETB 520', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80' },
    { name: 'SPICY ADAMA BURGER', description: 'Beef patty, local green chili, cheese, tomato, and spicy Fegegta sauce.', price: 'ETB 430', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80' },
    { name: 'GRILLED CHICKEN BURGER', description: 'Marinated chicken, crisp lettuce, tomato, pickles, and garlic sauce.', price: 'ETB 360', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
  ],
  SPECIAL: [
    { name: 'FEGEGTA FAMILY BOX', description: 'Four classic burgers, loaded fries, wings, and four soft drinks.', price: 'ETB 1,650', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80', isNew: true },
    { name: 'ETHIOPIAN GRILL PLATE', description: 'Seasoned grilled beef, vegetables, fries, and house sauce.', price: 'ETB 580', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { name: 'GRILLED CHICKEN PLATE', description: 'Marinated chicken, garden salad, fries, and garlic sauce.', price: 'ETB 460', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80' },
    { name: 'CRISPY WINGS', description: 'Crispy chicken wings tossed in your choice of signature sauce.', price: 'ETB 390', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
  ],
  DESSERTS: [
    { name: 'CHOCOLATE CAKE', description: 'Rich chocolate cake with vanilla ice cream.', price: 'ETB 240', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80', isNew: true },
    { name: 'CARAMEL CUSTARD', description: 'Smooth vanilla custard with caramel sauce.', price: 'ETB 210', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80' },
    { name: 'COFFEE TIRAMISU', description: 'Coffee-soaked cake, cream, and cocoa.', price: 'ETB 230', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
    { name: 'FEGEGTA CHEESECAKE', description: 'Creamy cheesecake with seasonal fruit sauce.', price: 'ETB 230', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80' },
  ],
  DRINKS: [
    { name: 'FEGEGTA SPECIAL JUICE', description: 'Fresh blended seasonal fruits, served chilled.', price: 'ETB 120', image: drinkImg, isNew: true },
    { name: 'MANGO SMOOTHIE', description: 'Creamy mango blended with milk and a hint of honey.', price: 'ETB 110', image: drinkImg },
    { name: 'FRESH LEMONADE', description: 'Squeezed lemon, sugar, and sparkling water over ice.', price: 'ETB 90', image: drinkImg },
    { name: 'COLD BREW COFFEE', description: 'Slow-steeped Ethiopian cold brew, served over ice.', price: 'ETB 130', image: drinkImg },
  ],
};

export default function FeaturedDishes() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('STARTERS');
  const [animating, setAnimating] = useState(false);
  const tabs = [
    { key: 'STARTERS', label: t('category.starters') },
    { key: 'BURGERS', label: t('category.burgers') },
    { key: 'SPECIAL', label: t('category.special') },
    { key: 'DESSERTS', label: t('category.desserts') },
  ];

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => setAnimating(false), 50);
    }, 200);
  };

  const dishes = dishCategories[activeTab];

  return (
    <section className="bg-gray-900 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
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

        {/* Tab Navigation */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-2 md:gap-4 mb-12 md:mb-16 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-red-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dishes Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 transition-all duration-300 ${
            animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {dishes.map((dish, index) => (
            <ScrollReveal key={dish.name} delay={index * 100}>
              <div className="bg-gray-800 hover:bg-gray-750 rounded-2xl overflow-hidden transition-all duration-300 group border border-gray-700 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 md:p-6">
                  {/* Image Column */}
                  <div className="md:col-span-1 relative overflow-hidden rounded-xl">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-40 md:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {dish.isNew && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full animate-pulse-glow">
                        {t('menu.new')}
                      </div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-sm leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-end mt-4 pt-3 border-t border-gray-700/50">
                      <span className="text-red-500 font-bold text-xl md:text-2xl">{dish.price}</span>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 transform hover:scale-105 active:scale-95">
                        {t('menu.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
