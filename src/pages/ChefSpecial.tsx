import {useTranslation} from 'react-i18next';

export default function ChefSpecial() {
  const {t} = useTranslation();

  return (
    <section className="py-20" style={{background: 'var(--bg-card)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden" style={{border: '1px solid var(--border-subtle)'}}>
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
              alt={t('chefSpecial.title')}
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4" style={{background: 'rgba(232,160,32,0.12)', color: 'var(--accent-saffron)', border: '1px solid var(--border-saffron)'}}>
              {t('chefSpecial.badge')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: 'var(--text-light)'}}>{t('chefSpecial.title')}</h2>
            <p className="text-sm mb-4 leading-relaxed" style={{color: 'var(--text-dim)'}}>{t('chefSpecial.desc')}</p>
            <div className="text-2xl font-bold mb-6" style={{color: 'var(--accent-saffron)'}}>{t('chefSpecial.price')}</div>
            <a
              href="https://wa.me/212600000000?text=I%20would%20like%20to%20reserve%20a%20table%20for%20the%20Chef%20Special"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold no-underline transition-all"
              style={{background: 'var(--accent-saffron)', color: 'var(--bg-dark)'}}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-saffron-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-saffron)')}
            >
              {t('chefSpecial.cta')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
