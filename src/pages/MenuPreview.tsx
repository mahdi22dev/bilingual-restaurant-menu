import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import DishCard from '@/src/components/DishCard';

const previewIds = ['m1', 'd1', 'dr1'];

export default function MenuPreview() {
  const {t} = useTranslation();

  return (
    <section className="py-20" style={{background: 'var(--bg-dark)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--text-light)'}}>{t('menuPreview.title')}</h2>
          <p className="text-sm max-w-xl mx-auto" style={{color: 'var(--text-dim)'}}>{t('menuPreview.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewIds.map((id) => (
            <DishCard key={id} id={id} onClick={() => {}} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold no-underline transition-all"
            style={{background: 'var(--accent-saffron)', color: 'var(--bg-dark)'}}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-saffron-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-saffron)')}
          >
            {t('menuPreview.cta')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
