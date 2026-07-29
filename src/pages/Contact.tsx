import {useTranslation} from 'react-i18next';

export default function Contact() {
  const {t} = useTranslation();

  return (
    <section id="contact" className="py-20" style={{background: 'var(--bg-card)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: 'var(--text-light)'}}>{t('contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl text-center" style={{background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)'}}>
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-base font-bold mb-2" style={{color: 'var(--text-light)'}}>{t('nav.contact')}</h3>
            <p className="text-sm" style={{color: 'var(--text-dim)'}}>{t('contact.address')}</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)'}}>
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="text-base font-bold mb-2" style={{color: 'var(--text-light)'}}>{t('contact.hours')}</h3>
            <p className="text-sm" style={{color: 'var(--text-dim)'}}>{t('contact.hours')}</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)'}}>
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-base font-bold mb-2" style={{color: 'var(--text-light)'}}>{t('contact.phone')}</h3>
            <a href="tel:+212524400123" className="text-sm no-underline" style={{color: 'var(--accent-saffron)'}}>{t('contact.phone')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
