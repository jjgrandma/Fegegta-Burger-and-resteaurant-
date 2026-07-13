import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

const blogPosts = [
  {
    id: 1,
    title: 'THE STORY BEHIND YO Burger IN ADAMA',
    excerpt: "Dummy text of the printing and types editing industry lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

At YO Burger, we pride ourselves on delivering a warm dining experience in Adama. Our commitment to quality ingredients, careful preparation, and friendly service creates memories that last.

Whether you're celebrating a special occasion or simply enjoying a night out, our team ensures every detail is perfect. From the moment you step through our doors, you're welcomed into a world of culinary excellence.`,
    date: 'March 21, 2023',
    author: 'William Joe',
    authorImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&q=80',
    authorRole: 'Master Chef',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    category: 'Burgers',
  },
];

const recentPosts = [
  { id: 2, title: 'OUR SECRETS TO BUILDING THE PERFECT BURGER', date: 'March 15, 2023', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80' },
  { id: 3, title: 'THE ULTIMATE GUIDE TO WINE PAIRING FOR STEAK', date: 'March 10, 2023', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=80' },
  { id: 4, title: 'BEHIND THE SCENES: A DAY AT YO Kitchen', date: 'March 5, 2023', image: 'https://images.unsplash.com/photo-1556911073-a525e7100f18?w=200&q=80' },
];

export default function BlogDetailPage() {
  const { t } = useLanguage();
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id)) || blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-950 pt-14 md:pt-[62px] pb-12">
      {/* Hero Section */}
      <div className="bg-gray-900 border-b border-gray-800 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 text-base md:text-lg font-light tracking-[0.3em] uppercase mb-3">
            {t('blog.detailKicker')}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{t('blog.detailTitle')}</h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Article */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <article className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300 group">
                {/* Featured Image */}
                <div className="relative overflow-hidden h-64 md:h-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.date}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                </div>

                <div className="p-6 md:p-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-700/50">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
                    />
                    <div>
                      <p className="text-white font-bold text-base">{post.author}</p>
                      <p className="text-gray-500 text-sm">{post.authorRole}</p>
                    </div>
                    <div className="ml-auto text-gray-500 text-sm">{post.category}</div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-invert max-w-none">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags/Share */}
                  <div className="mt-8 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex gap-2">
                      {['Burger', 'BBQ', 'Adama', 'Food'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{t('blog.share')}:</span>
                      <div className="flex gap-2">
                        {['f', 'X', 'IG'].map((icon) => (
                          <a
                            key={icon}
                            href="#"
                            className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-xs transition-colors"
                          >
                            {icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">{t('blog.search')}</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('blog.search')}
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
                {recentPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/blog/${rp.id}`}
                    className="flex gap-3 pb-4 border-b border-gray-700/50 hover:border-red-500/50 transition-all group/recent last:border-0 last:pb-0"
                  >
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover/recent:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-sm mb-1 line-clamp-2 group-hover/recent:text-red-500 transition-colors">
                        {rp.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{rp.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">{t('blog.categories')}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['Burgers', 'BBQ', 'Family Food', 'Foodgram'].map((cat) => (
                  <li key={cat} className="hover:text-red-500 hover:pl-2 transition-all cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Blog */}
            <Link
              to="/blog"
              className="block bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-red-500 transition-all text-center group"
            >
              <span className="text-white font-bold text-sm group-hover:text-red-500 transition-colors">
                ← {t('blog.back')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
