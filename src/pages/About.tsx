import {useTranslation} from 'react-i18next';

export default function About() {
  const {t} = useTranslation();

  return (
    <section className="py-20" style={{background: 'var(--bg-dark)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{color: 'var(--text-light)'}}>{t('about.title')}</h2>
          <p className="text-base mb-4 leading-relaxed" style={{color: 'var(--text-dim)'}}>{t('about.p1')}</p>
          <p className="text-base mb-4 leading-relaxed" style={{color: 'var(--text-dim)'}}>{t('about.p2')}</p>
          <p className="text-base leading-relaxed" style={{color: 'var(--text-dim)'}}>{t('about.p3')}</p>
        </div>
      </div>
    </section>
  );
}
