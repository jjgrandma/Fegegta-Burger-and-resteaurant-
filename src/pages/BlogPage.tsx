import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorImage: string;
  authorRole: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'THE STORY BEHIND YO Burger IN ADAMA',
    excerpt: "Dummy text of the printing and types editing industry lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: "Full article content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: 'March 21, 2023',
    author: 'William Joe',
    authorImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&q=80',
    authorRole: 'Master Chef',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    category: 'Burgers',
  },
  {
    id: 2,
    title: 'OUR SECRETS TO BUILDING THE PERFECT BURGER',
    excerpt: 'Master the art of grilling with these professional tips from our head chef. From selecting the right cut to achieving the perfect sear, we cover everything you need to know.',
    date: 'March 15, 2023',
    author: 'Sarah Mitchell',
    authorImage: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=200&q=80',
    authorRole: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
    category: 'BBQ',
    content: 'Full article content here. Learn the secrets of perfect grilling from our experts.',
  },
  {
    id: 3,
    title: 'THE ULTIMATE GUIDE TO WINE PAIRING FOR STEAK',
    excerpt: 'Discover refreshing drink pairings for your favorite burgers and grilled meals. Our team shares recommendations for every taste.',
    date: 'March 10, 2023',
    author: 'Emma Watson',
    authorImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&q=80',
    authorRole: 'Sommelière',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    category: 'Foodgram',
    content: 'Full article content here. Discover the art of wine pairing from our expert sommelier.',
  },
  {
    id: 4,
    title: 'BEHIND THE SCENES: A DAY AT YO Kitchen',
    excerpt: 'Take a peek behind the curtain and see how our talented team prepares for a busy dinner service. From prep to plating, every detail matters.',
    date: 'March 5, 2023',
    author: 'Marco Rossi',
    authorImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=200&q=80',
    authorRole: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1556911073-a525e7100f18?w=800&q=80',
    category: 'Family Food',
    content: 'Full article content here. Experience a day in the life at YO Kitchen.',
  },
  {
    id: 5,
    title: 'FAMOUS DISHES OF DELICIOUS CUISINES AROUND THE WORLD',
    excerpt: 'Explore the most iconic dishes from different cuisines and how our chefs incorporate global flavors into our menu.',
    date: 'Feb 28, 2023',
    author: 'William Joe',
    authorImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&q=80',
    authorRole: 'Master Chef',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    category: 'Foodgram',
    content: 'Full article content here. Explore global cuisines and their iconic dishes.',
  },
  {
    id: 6,
    title: 'WHY OUR BURGERS ARE AN ADAMA FAVORITE',
    excerpt: 'Learn about our dry-aging process and why it makes a difference in flavor and tenderness. Quality starts with patience.',
    date: 'Feb 20, 2023',
    author: 'David Chen',
    authorImage: 'https://images.unsplash.com/photo-1556911073-a525e7100f18?w=200&q=80',
    authorRole: 'Grill Master',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
    category: 'Burgers',
    content: 'Full article content here. Learn about our premium dry-aging process.',
  },
];

const categories = ['All', 'Burgers', 'BBQ', 'Family Food', 'Foodgram'];

export default function BlogPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-950 pt-14 md:pt-[62px] pb-12">
      {/* Hero Section */}
      <div className="bg-gray-900 border-b border-gray-800 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">{t('blog.kicker')}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{t('blog.title')}</h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-red-500'
              }`}
            >
              {cat === 'All' ? t('blog.all') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">{t('blog.noPosts')}</p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <article className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300 group shadow-lg shadow-black/10">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden h-56 md:h-72">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {post.date}
                      </div>
                      <div className="absolute top-4 right-4 bg-gray-900/80 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors leading-tight">
                        {post.title}
                      </h2>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-700/50">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full object-cover border-2 border-red-500/50"
                        />
                        <div>
                          <p className="text-white font-semibold text-sm">{post.author}</p>
                          <p className="text-gray-500 text-xs">{post.authorRole}</p>
                        </div>
                      </div>

                      {/* Preview Text */}
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-red-500 hover:text-red-400 font-bold text-sm transition-colors inline-flex items-center gap-2 group/link"
                      >
                        {t('blog.read')}
                        <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8 md:space-y-10">
            {/* Search Box */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">{t('blog.search')}</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('blog.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 focus:border-red-500 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all text-sm"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">{t('blog.recent')}</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="flex gap-3 pb-4 border-b border-gray-700/50 hover:border-red-500/50 transition-all group/recent last:border-0 last:pb-0"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0 group-hover/recent:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-sm md:text-sm mb-1 line-clamp-2 group-hover/recent:text-red-500 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">{t('blog.categories')}</h3>
              <ul className="space-y-3">
                {categories.filter(c => c !== 'All').map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm transition-all cursor-pointer flex items-center gap-2 ${
                        activeCategory === cat ? 'text-red-500 pl-2' : 'text-gray-400 hover:text-red-500 hover:pl-2'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-60"></span>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
