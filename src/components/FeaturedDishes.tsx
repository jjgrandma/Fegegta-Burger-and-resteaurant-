import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'CRISPY CHICKEN BITES', description: 'Golden chicken bites with a choice of dipping sauce.', price: 'ETB 290', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
    { name: 'ONION RINGS', description: 'Golden battered onion rings with smoky dipping sauce.', price: 'ETB 200', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80' },
  ],
  BURGERS: [
    { name: 'FEGEGTA CLASSIC BURGER', description: 'Grilled beef patty, cheese, lettuce, tomato, onion, and signature sauce.', price: 'ETB 390', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', isNew: true },
    { name: 'DOUBLE SMASH BURGER', description: 'Two beef patties, double cheese, caramelized onion, and house sauce.', price: 'ETB 520', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80' },
    { name: 'SPICY ADAMA BURGER', description: 'Beef patty, local green chili, cheese, tomato, and spicy Fegegta sauce.', price: 'ETB 430', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80' },
    { name: 'GRILLED CHICKEN BURGER', description: 'Marinated chicken, crisp lettuce, tomato, pickles, and garlic sauce.', price: 'ETB 360', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
    { name: 'VEGGIE CRUNCH BURGER', description: 'Crispy vegetable patty, fresh salad, pickles, and herb sauce.', price: 'ETB 320', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80' },
    { name: 'BBQ BEEF BURGER', description: 'Smoky BBQ beef patty with crispy onions and tangy sauce.', price: 'ETB 450', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80' },
  ],
  SPECIAL: [
    { name: 'FEGEGTA FAMILY BOX', description: 'Four classic burgers, loaded fries, wings, and four soft drinks.', price: 'ETB 1,650', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80', isNew: true },
    { name: 'ETHIOPIAN GRILL PLATE', description: 'Seasoned grilled beef, vegetables, fries, and house sauce.', price: 'ETB 580', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { name: 'GRILLED CHICKEN PLATE', description: 'Marinated chicken, garden salad, fries, and garlic sauce.', price: 'ETB 460', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80' },
    { name: 'CRISPY WINGS', description: 'Crispy chicken wings tossed in your choice of signature sauce.', price: 'ETB 390', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
    { name: 'FEGEGTA COMBO', description: 'Classic burger, fries, crispy wings, and a soft drink.', price: 'ETB 620', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80' },
    { name: 'ADAMA MIXED GRILL', description: 'Mixed grilled meats with sides and house dipping sauces.', price: 'ETB 780', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
  ],
  DESSERTS: [
    { name: 'CHOCOLATE CAKE', description: 'Rich chocolate cake with vanilla ice cream.', price: 'ETB 240', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80', isNew: true },
    { name: 'CARAMEL CUSTARD', description: 'Smooth vanilla custard with caramel sauce.', price: 'ETB 210', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80' },
    { name: 'COFFEE TIRAMISU', description: 'Coffee-soaked cake, cream, and cocoa.', price: 'ETB 230', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
    { name: 'FEGEGTA CHEESECAKE', description: 'Creamy cheesecake with seasonal fruit sauce.', price: 'ETB 230', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80' },
    { name: 'APPLE TART', description: 'Warm caramelized apple tart with vanilla ice cream.', price: 'ETB 240', image: 'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=400&q=80' },
    { name: 'MANGO SORBET', description: 'Refreshing mango sorbet with mint garnish.', price: 'ETB 180', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80' },
  ],
  DRINKS: [
    { name: 'FEGEGTA SPECIAL DRINK', description: 'Our signature house blend drink, fresh and refreshing.', price: 'ETB 120', image: drinkImg, isNew: true },
    { name: 'FRESH MANGO JUICE', description: 'Cold-pressed fresh mango juice, no sugar added.', price: 'ETB 90', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80' },
    { name: 'AVOCADO SMOOTHIE', description: 'Creamy avocado blended with milk and a hint of honey.', price: 'ETB 110', image: drinkImg },
    { name: 'STRAWBERRY SHAKE', description: 'Thick strawberry milkshake topped with whipped cream.', price: 'ETB 130', image: drinkImg },
    { name: 'COLD BREW COFFEE', description: 'Smooth slow-brewed Ethiopian coffee served over ice.', price: 'ETB 100', image: drinkImg },
    { name: 'SPARKLING LEMONADE', description: 'Freshly squeezed lemon with sparkling water and mint.', price: 'ETB 80', image: drinkImg },
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
    { key: 'DRINKS', label: t('category.drinks') },
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

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="flex items-start justify-between mb-10 md:mb-14">
            <div>
              <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-2">
                {t('home.ourMenu')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {t('home.menuTitle')}
              </h2>
              <div className="w-16 h-1 bg-red-500 mt-4 rounded-full"></div>
            </div>
            <Link
              to="/menu"
              className="mt-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-500 text-sm font-semibold px-5 py-2 rounded transition-colors duration-200 whitespace-nowrap"
            >
              View All
            </Link>
          </div>
        </ScrollReveal>

        {/* ── Tab Navigation ── */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap">
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

        {/* ── Featured Grid ── */}
        <div
          className={`transition-all duration-300 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          {/* Grid with divider lines between cells */}
          <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-gray-700/60">
            {dishes.map((dish, index) => (
              <ScrollReveal key={dish.name} delay={index * 80}>
                <div className="group flex flex-col items-center text-center px-4 py-8 md:py-10 cursor-pointer hover:bg-gray-800/40 transition-colors duration-300 relative">

                  {/* NEW badge */}
                  {dish.isNew && (
                    <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {t('menu.new')}
                    </span>
                  )}

                  {/* Food image — large, centered, slightly raised on hover */}
                  <div className="w-36 h-36 md:w-44 md:h-44 mb-5 transition-transform duration-500 group-hover:-translate-y-2">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover rounded-full shadow-xl shadow-black/30"
                      loading="lazy"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-bold text-sm md:text-base tracking-wider uppercase mb-2 group-hover:text-red-400 transition-colors">
                    {dish.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-3 max-w-[180px]">
                    {dish.description}
                  </p>

                  {/* Price */}
                  <span className="text-red-500 font-bold text-lg md:text-xl">
                    {dish.price}
                  </span>

                  {/* Add button — appears on hover */}
                  <button className="mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {t('menu.add')}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
