import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

export default function QRSection() {
  const {t} = useTranslation();

  return (
    <section id="qr-section" className="py-20" style={{background: 'var(--bg-dark)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-48 h-48 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{background: '#fff', border: '1px solid var(--border-subtle)'}}>
            <div className="text-4xl" style={{color: 'var(--bg-dark)'}}>📱</div>
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{color: 'var(--text-light)'}}>{t('qr.title')}</h2>
          <p className="text-sm mb-6" style={{color: 'var(--text-dim)'}}>{t('qr.desc')}</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold no-underline transition-all"
            style={{background: 'var(--accent-saffron)', color: 'var(--bg-dark)'}}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-saffron-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-saffron)')}
          >
            {t('qr.cta')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
