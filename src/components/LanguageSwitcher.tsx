import { useLanguage, type Language } from '../i18n/LanguageContext';

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <label className={`relative flex items-center ${mobile ? 'w-full' : ''}`}>
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className={`${mobile ? 'w-full' : 'w-[82px]'} appearance-none rounded-lg border border-gray-700 bg-gray-900 py-2 pl-3 pr-7 text-xs font-semibold text-white outline-none transition-colors hover:border-red-500 focus:border-red-500`}
        aria-label="Language"
      >
        <option value="en">EN</option>
        <option value="am">አማ</option>
        <option value="om">OR</option>
      </select>
      <svg className="pointer-events-none absolute right-2 h-3 w-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
      </svg>
    </label>
  );
}