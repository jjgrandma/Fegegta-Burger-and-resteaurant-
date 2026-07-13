import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  source: string;
  date: string;
  helpful: number;
  category: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Harry Christina',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: "It's a great experience. The ambiance is really very welcoming and charming. Amazing food, service and atmosphere. Highly recommended!",
    source: 'Google Review',
    date: '2 weeks ago',
    helpful: 24,
    category: 'Dinner',
  },
  {
    id: 2,
    name: 'Sophia Lauren',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'The burger was cooked perfectly. One of the best dining experiences I have had in Adama, and the service was exceptional.',
    source: 'TripAdvisor',
    date: '1 month ago',
    helpful: 18,
    category: 'Dinner',
  },
  {
    id: 3,
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'Absolutely love this place! The atmosphere is cozy and elegant. Their BBQ ribs are to die for. Will definitely come back again with my family.',
    source: 'Yelp',
    date: '3 weeks ago',
    helpful: 15,
    category: 'Lunch',
  },
  {
    id: 4,
    name: 'Emily Rose',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: "Fegegta never disappoints! We celebrated our anniversary there and everything was perfect from start to finish. The dessert platter was excellent and the service attentive.",
    source: 'Google Review',
    date: '1 week ago',
    helpful: 31,
    category: 'Dinner',
  },
  {
    id: 5,
    name: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 4,
    text: 'Great food and excellent service. The portions are generous and the prices are reasonable for the quality. A must-visit for burger lovers in Adama.',
    source: 'TripAdvisor',
    date: '2 months ago',
    helpful: 12,
    category: 'Dinner',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
    text: "The Sunday brunch is amazing! So many options and everything is fresh and delicious. The eggs benedict is the best I've ever had.",
    source: 'Yelp',
    date: '3 weeks ago',
    helpful: 20,
    category: 'Brunch',
  },
  {
    id: 7,
    name: 'David Martinez',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    rating: 5,
    text: 'Outstanding dining experience. The double smash burger was cooked perfectly and the loaded fries are addictive. I will be coming back regularly.',
    source: 'Google Review',
    date: '1 month ago',
    helpful: 27,
    category: 'Dinner',
  },
  {
    id: 8,
    name: 'Rachel Kim',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 4,
    text: 'Beautiful restaurant with a warm atmosphere. The seafood platter was fresh and beautifully presented. The service was attentive without being intrusive.',
    source: 'TripAdvisor',
    date: '2 weeks ago',
    helpful: 9,
    category: 'Lunch',
  },
];

const categories = ['All', 'Dinner', 'Lunch', 'Brunch'];

export default function ReviewsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<number, number>>({});

  const filteredReviews = reviews.filter(
    (review) => activeCategory === 'All' || review.category === activeCategory
  );

  const handleHelpful = (reviewId: number) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }));
  };

  const getHelpfulCount = (review: Review) => {
    return review.helpful + (helpfulCounts[review.id] || 0);
  };

  // Calculate stats
  const totalReviews = reviews.length;
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;

  return (
    <div className="min-h-screen bg-gray-950 pt-14 md:pt-[62px] pb-12">
      {/* Hero Section */}
      <div className="bg-gray-900 border-b border-gray-800 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
            {t('reviews.kicker')}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{t('reviews.title')}</h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">{totalReviews}</p>
              <p className="text-gray-400 text-sm">{t('reviews.total')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">{averageRating}</div>
              <p className="text-gray-400 text-sm">{t('reviews.average')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-400">{fiveStarCount}</p>
              <p className="text-gray-400 text-sm">{t('reviews.fiveStar')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-red-500">100%</p>
              <p className="text-gray-400 text-sm">{t('reviews.recommend')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
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

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredReviews.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 100}>
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-red-500 transition-all duration-300 group shadow-lg shadow-black/10">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-red-500/50 group-hover:border-red-500 transition-colors flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-base md:text-lg">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.source} • {review.date}</p>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-700 text-xs font-medium uppercase">{review.category}</span>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center gap-2 text-gray-400 hover:text-red-500 text-sm transition-colors group/help"
                  >
                    <svg className="w-4 h-4 group-hover/help:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    {t('reviews.helpful')} ({getHelpfulCount(review)})
                  </button>
                  <span className="text-gray-600 text-xs">ID: #{review.id}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
