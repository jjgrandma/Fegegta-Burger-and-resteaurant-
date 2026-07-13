import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const testimonials = [
  {
    name: 'ABEBE GIRMA',
    review: "It's a great experience. The ambiance is really very welcoming and charming. Amazing food, service and atmosphere. Highly recommended!",
    rating: 5,
    source: 'Google Review',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&q=80',
  },
  {
    name: 'TIGIST HAILE',
    review: 'The burger was cooked perfectly. One of the best dining experiences I have had in Adama, and the service was exceptional.',
    rating: 5,
    source: 'TripAdvisor',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
  },
  {
    name: 'DAWIT BEKELE',
    review: 'Absolutely love this place! The atmosphere is cozy and elegant. Their BBQ ribs are to die for. Will definitely come back again.',
    rating: 5,
    source: 'Yelp',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80',
  },
  {
    name: 'MERON TADESSE',
    review: "Fegegta never disappoints! We celebrated our anniversary there and everything was perfect from start to finish. The dessert platter was excellent.",
    rating: 5,
    source: 'Google Review',
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=200&q=80',
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
              {t('home.customerReviews')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t('home.reviewsTitle')}
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 150}>
              <div className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group">
                {/* Quote Icon */}
                <div className="text-4xl md:text-5xl text-red-500 mb-4 font-serif leading-none">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-red-500/50 group-hover:border-red-500 transition-colors"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-bold text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.source}</p>
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
