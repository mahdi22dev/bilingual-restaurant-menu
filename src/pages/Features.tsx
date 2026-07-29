import {useTranslation} from 'react-i18next';

export default function Features() {
  const {t} = useTranslation();

  const features = [
    {icon: '🏛️', title: t('features.f1Title'), desc: t('features.f1Desc')},
    {icon: '🌿', title: t('features.f2Title'), desc: t('features.f2Desc')},
    {icon: '👑', title: t('features.f3Title'), desc: t('features.f3Desc')},
  ];

  return (
    <section className="py-20" style={{background: 'var(--bg-card)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: 'var(--text-light)'}}>{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-8 rounded-2xl text-center" style={{background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)'}}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-3" style={{color: 'var(--text-light)'}}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--text-dim)'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
