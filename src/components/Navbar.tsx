import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    {
      name: t('nav.menus'),
      path: '/menu',
      dropdown: [
        { name: t('category.starters'), path: '/menu?category=starters' },
        { name: t('category.burgers'), path: '/menu?category=burgers' },
        { name: t('category.special'), path: '/menu?category=special' },
        { name: t('category.desserts'), path: '/menu?category=desserts' },
      ],
    },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.chefs'), path: '/chefs' },
    {
      name: t('nav.blog'),
      path: '/blog',
      dropdown: [
        { name: t('nav.latest'), path: '/blog' },
        { name: t('nav.blogDetails'), path: '/blog/1' },
      ],
    },
    {
      name: t('nav.pages'),
      path: '#',
      dropdown: [
        { name: t('nav.reservation'), path: '/reservation' },
        { name: t('nav.contact'), path: '/contact' },
        { name: t('nav.reviews'), path: '/reviews' },
      ],
    },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-black/20'
          : 'bg-gray-950 border-b border-gray-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 text-red-500 text-xl md:text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 md:w-8 md:h-8">
                  <path strokeLinecap="round" d="M5 9.5h14M4.5 15h15M6 18h12a2 2 0 0 0 2-2v-1H4v1a2 2 0 0 0 2 2ZM5 9.5C5 6.5 8 4 12 4s7 2.5 7 5.5H5Z" />
                  <path strokeLinecap="round" d="M7 12h10" />
                </svg>
              </div>
              <div>
                <h1 className="text-white font-bold text-base md:text-xl tracking-wide">{t('brand.name')}</h1>
                <p className="text-red-500 text-[9px] md:text-[10px] font-semibold tracking-[0.16em]">{t('brand.location')}</p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group" ref={link.dropdown ? dropdownRef : undefined}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center gap-1 font-medium text-sm py-2 transition-colors ${
                        isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                      }`}
                    >
                      {link.name}
                      <svg className="w-3 h-3 mt-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-xl shadow-black/30 py-2 min-w-[180px] animate-slideInDown z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium text-sm py-2 transition-colors ${
                      isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+251911234567"
              className="text-gray-300 hover:text-red-500 text-sm transition-colors hidden xl:block"
            >
              +251 911 234 567
            </a>
            <Link
              to="/reservation"
              className="bg-red-600 hover:bg-red-700 text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-lg font-bold text-sm transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/25"
            >
              {t('nav.findTable')}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-white hover:text-red-500 text-2xl p-2 transition-colors"
              aria-label={t('nav.toggle')}
            >
              {isMobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-x-0 top-16 md:top-20 bg-gray-950 border-b border-gray-800 transition-all duration-300 ease-in-out ${
          isMobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full text-white hover:text-red-500 font-medium text-sm py-3 px-2 transition-colors"
                  >
                    {link.name}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 space-y-1 pb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-gray-400 hover:text-red-500 text-sm py-2 px-2 transition-colors"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="block text-white hover:text-red-500 font-medium text-sm py-3 px-2 transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 pb-2 space-y-3">
            <LanguageSwitcher mobile />
            <a href="tel:+251911234567" className="block text-gray-300 text-sm text-center">
              +251 911 234 567
            </a>
            <Link
              to="/reservation"
              className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-sm text-center transition-all duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              {t('nav.findTable')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
