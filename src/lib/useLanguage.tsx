import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang, Translations, TRANSLATIONS } from './data/translations';

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  setLanguage: (lang: Lang) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  const setLanguage = (newLang: Lang) => {
    setLang(newLang);
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Apply dir/lang to the HTML element whenever language changes
  useEffect(() => {
    const t = TRANSLATIONS[lang];
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: TRANSLATIONS[lang], setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
