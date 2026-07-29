import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

export default function Hero() {
  const {t} = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-20" style={{background: `linear-gradient(180deg, rgba(20,20,20,0.85) 0%, rgba(26,26,26,1) 100%), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80') center/cover no-repeat`}}>
      <div className="max-w-[1240px] mx-auto px-6 py-20 text-center">
        <div className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-wider mb-6" style={{background: 'rgba(232,160,32,0.12)', color: 'var(--accent-saffron)', border: '1px solid var(--border-saffron)'}}>
          {t('hero.badge')}
        </div>

        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6" style={{color: 'var(--text-light)', fontFamily: 'var(--font-heading-en)'}}>
          {t('hero.title')}
        </h1>

        <p className="max-w-2xl mx-auto text-lg mb-10" style={{color: 'var(--text-dim)'}}>
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/menu"
            className="px-8 py-3.5 rounded-full text-base font-bold no-underline transition-all"
            style={{background: 'var(--accent-saffron)', color: 'var(--bg-dark)'}}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-saffron-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-saffron)')}
          >
            {t('hero.cta1')} →
          </Link>
          <a
            href="#qr-section"
            className="px-8 py-3.5 rounded-full text-base font-bold no-underline transition-all"
            style={{background: 'transparent', color: 'var(--accent-saffron)', border: '1px solid var(--accent-saffron)'}}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(232,160,32,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            {t('hero.cta2')}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm" style={{color: 'var(--text-dim)'}}>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {t('hero.location')}
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {t('hero.hours')}
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {t('hero.phone')}
          </span>
        </div>
      </div>
    </section>
  );
}
