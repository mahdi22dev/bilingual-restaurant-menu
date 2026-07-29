import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

export default function Footer() {
  const {t} = useTranslation();

  return (
    <footer className="pt-16 pb-8" style={{backgroundColor: 'var(--bg-dark)', borderTop: '1px solid var(--border-subtle)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3" style={{color: 'var(--text-light)'}}>{t('brandName')}</h3>
            <p className="text-sm mb-4" style={{color: 'var(--text-dim)'}}>{t('footer.about')}</p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center no-underline text-sm" style={{border: '1px solid var(--border-subtle)', color: 'var(--text-muted)'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center no-underline text-sm" style={{border: '1px solid var(--border-subtle)', color: 'var(--text-muted)'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.26 1.654 6.107l-1.685 6.153 6.293-1.65c1.782.971 3.8 1.48 5.738 1.48 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center no-underline text-sm" style={{border: '1px solid var(--border-subtle)', color: 'var(--text-muted)'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{color: 'var(--text-muted)'}}>{t('contact.hours')}</h4>
            <p className="text-sm mb-4" style={{color: 'var(--text-dim)'}}>{t('contact.hours').includes('12:00') ? t('contact.hours') : t('contact.hours')}</p>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold no-underline transition-all"
              style={{background: 'rgba(37,211,102,0.15)', border: '1px solid #25D366', color: '#25D366'}}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.26 1.654 6.107l-1.685 6.153 6.293-1.65c1.782.971 3.8 1.48 5.738 1.48 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
              {t('contact.whatsapp')}
            </a>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{color: 'var(--text-muted)'}}>{t('nav.contact')}</h4>
            <p className="text-sm mb-2" style={{color: 'var(--text-dim)'}}>{t('contact.address')}</p>
            <p className="text-sm mb-4" style={{color: 'var(--text-dim)'}}>{t('contact.phone')}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold no-underline transition-all"
              style={{background: 'rgba(232,160,32,0.1)', border: '1px solid var(--accent-saffron)', color: 'var(--accent-saffron)'}}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {t('contact.map')}
            </a>
          </div>
        </div>

        <div className="pt-6 text-center text-xs" style={{borderTop: '1px solid var(--border-subtle)', color: 'var(--text-dim)'}}>
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
