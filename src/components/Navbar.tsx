import {useTranslation} from 'react-i18next';
import {Link, useLocation} from 'react-router-dom';

export default function Navbar() {
  const {t, i18n} = useTranslation();
  const location = useLocation();
  const isRTL = i18n.language === 'ar';

  const toggleLang = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{background: 'rgba(26,26,26,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245,240,232,0.1)'}}>
      <div className="flex items-center justify-between h-20 px-6 max-w-[1240px] mx-auto">
        <Link to="/" className="flex items-center gap-3 no-underline" style={{color: 'var(--text-light)'}}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center text-base font-extrabold" style={{background: 'linear-gradient(135deg, var(--accent-saffron), #B87B10)', color: 'var(--bg-dark)', boxShadow: '0 4px 12px rgba(232,160,32,0.3)'}}>
            ي
          </div>
          <div className="flex flex-col" style={{lineHeight: 1.2}}>
            <span className="text-lg font-bold" style={{color: 'var(--text-light)'}}>{t('brandName')}</span>
            <span className="text-xs font-medium tracking-widest" style={{color: 'var(--accent-saffron)'}}>{t('brandSub')}</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium no-underline transition-colors"
            style={{color: location.pathname === '/' ? 'var(--accent-saffron)' : 'var(--text-muted)'}}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/menu"
            className="text-sm font-medium no-underline transition-colors"
            style={{color: location.pathname === '/menu' ? 'var(--accent-saffron)' : 'var(--text-muted)'}}
          >
            {t('nav.menu')}
          </Link>
          <Link
            to="/#contact"
            className="text-sm font-medium no-underline transition-colors hidden sm:block"
            style={{color: 'var(--text-muted)'}}
          >
            {t('nav.contact')}
          </Link>

          <button
            onClick={toggleLang}
            className="px-3.5 py-1.5 rounded-full text-sm font-bold transition-all"
            style={{background: 'rgba(232,160,32,0.1)', border: '1px solid var(--accent-saffron)', color: 'var(--accent-saffron)'}}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-saffron)'; e.currentTarget.style.color = '#1A1A1A'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(232,160,32,0.1)'; e.currentTarget.style.color = 'var(--accent-saffron)'; }}
          >
            {isRTL ? 'EN' : 'عربي'}
          </button>
        </div>
      </div>
    </nav>
  );
}
