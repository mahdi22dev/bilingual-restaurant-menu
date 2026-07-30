import {useTranslation} from 'react-i18next';

export default function Features() {
  const {t} = useTranslation();

  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-saffron)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
        </svg>
      ),
      title: t('features.f1Title'), desc: t('features.f1Desc'),
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-saffron)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8.7-7.3 8-13-3.2 0-5.8 1.4-7.5 3.5C9.3 8.7 6.7 7.2 3.5 7.2c-.7 5.7 2.5 10.5 8 12.8z" /><path d="M10 14c1.5-1 3.5-1 5 0" />
        </svg>
      ),
      title: t('features.f2Title'), desc: t('features.f2Desc'),
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-saffron)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: t('features.f3Title'), desc: t('features.f3Desc'),
    },
  ];

  return (
    <section className="py-24" style={{background: 'var(--bg-card)'}}>
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{color: 'var(--text-light)'}}>{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-8 rounded-2xl text-center" style={{background: 'var(--bg-dark)', border: '1px solid var(--border-subtle)'}}>
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-3" style={{color: 'var(--text-light)'}}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--text-dim)'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
