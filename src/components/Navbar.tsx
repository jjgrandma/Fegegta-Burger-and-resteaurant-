import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, type Language } from '../i18n/LanguageContext';

const langOptions: { value: Language; label: string }[] = [
  { value: 'am', label: 'አማ' },
  { value: 'om', label: 'OR' },
  { value: 'en', label: 'EN' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // separate dropdown state for desktop and mobile
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const location = useLocation();
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close everything on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  // close desktop dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // close mobile dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

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
      {/* ── DESKTOP / TABLET (md+) ── */}
      <div className="hidden md:block">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center h-[62px] gap-3">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group flex items-center gap-2.5">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center shadow-md shadow-red-600/40 group-hover:bg-red-700 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                  <path d="M5 9.5C5 6.5 8 4 12 4s7 2.5 7 5.5H5Z" />
                  <path d="M5 9.5h14" />
                  <path d="M7 12h10" />
                  <path d="M4.5 15h15" />
                  <path d="M6 18h12a2 2 0 0 0 2-2v-1H4v1a2 2 0 0 0 2 2Z" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-white font-bold italic text-lg md:text-xl tracking-wide lowercase">{t('brand.name')}</div>
                <div className="text-red-500 text-[9px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                  &amp; RESTAURANT • {t('brand.location')}
                </div>
              </div>
            </Link>

            {/* Language pills */}
            <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden flex-shrink-0">
              {langOptions.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setLanguage(value)}
                  className={`px-2.5 py-1.5 text-[11px] font-bold transition-colors whitespace-nowrap ${
                    language === value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Nav pill */}
            <div className="flex-1 min-w-0 overflow-hidden" ref={desktopRef}>
              <div
                className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-2 py-1 overflow-x-auto"
                style={{ scrollbarWidth: 'none' }}
              >
                {navLinks.map((link) => (
                  <div key={link.name} className="relative flex-shrink-0">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setDesktopDropdown(desktopDropdown === link.name ? null : link.name)
                          }
                          className={`flex items-center gap-0.5 font-semibold text-[13px] px-3 py-1.5 transition-colors whitespace-nowrap ${
                            isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                          }`}
                        >
                          {link.name}
                          <svg className="w-3 h-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {desktopDropdown === link.name && (
                          <div className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl shadow-black/30 py-2 min-w-[180px] z-50">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-colors"
                                onClick={() => setDesktopDropdown(null)}
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
                        className={`font-semibold text-[13px] px-3 py-1.5 transition-colors whitespace-nowrap block ${
                          isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/reservation"
              className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-[13px] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30 whitespace-nowrap"
            >
              {t('nav.findTable')}
            </Link>
          </div>
        </div>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className="md:hidden">
        <div className="px-3">
          <div className="flex items-center h-14 gap-2">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-md shadow-red-600/40 group-hover:bg-red-700 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                  <path d="M5 9.5C5 6.5 8 4 12 4s7 2.5 7 5.5H5Z" />
                  <path d="M5 9.5h14" />
                  <path d="M7 12h10" />
                  <path d="M4.5 15h15" />
                  <path d="M6 18h12a2 2 0 0 0 2-2v-1H4v1a2 2 0 0 0 2 2Z" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-white font-bold italic text-sm tracking-wide lowercase">{t('brand.name')}</div>
                <div className="text-red-500 text-[8px] font-semibold tracking-[0.15em] uppercase mt-0.5">&amp; RESTAURANT</div>
              </div>
            </Link>

            <div className="flex-1" />

            {/* Lang pills */}
            <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden flex-shrink-0">
              {langOptions.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setLanguage(value)}
                  className={`px-2 py-1 text-[10px] font-bold transition-colors whitespace-nowrap ${
                    language === value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/reservation"
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full font-bold text-[11px] whitespace-nowrap"
            >
              {t('nav.findTable')}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => {
                setIsMobileOpen(!isMobileOpen);
                setMobileDropdown(null);
              }}
              className="text-white hover:text-red-500 p-1.5 transition-colors"
              aria-label={t('nav.toggle')}
            >
              {isMobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown panel */}
        <div
          className={`border-t border-gray-800 bg-gray-950 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-3 py-3" ref={mobileRef}>
            {/* Horizontal scrollable pill */}
            <div
              className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-2 py-1 overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {navLinks.map((link) => (
                <div key={link.name} className="relative flex-shrink-0">
                  {link.dropdown ? (
                    <button
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === link.name ? null : link.name)
                      }
                      className={`flex items-center gap-0.5 font-semibold text-[12px] px-3 py-1.5 transition-colors whitespace-nowrap ${
                        isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-3 h-3 mt-0.5 flex-shrink-0 transition-transform duration-200 ${
                          mobileDropdown === link.name ? 'rotate-180' : ''
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-semibold text-[12px] px-3 py-1.5 transition-colors whitespace-nowrap block ${
                        isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Dropdown sub-items rendered below the pill */}
            {mobileDropdown && (
              <div className="mt-2 bg-gray-900 border border-gray-700 rounded-lg py-2">
                {navLinks
                  .find((l) => l.name === mobileDropdown)
                  ?.dropdown?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-colors"
                      onClick={() => { setMobileDropdown(null); setIsMobileOpen(false); }}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
