import {useTranslation} from 'react-i18next';

interface Props {
  id: string;
  onClick: () => void;
}

export default function DishCard({id, onClick}: Props) {
  const {t, i18n} = useTranslation();
  const isRTL = i18n.language === 'ar';

  const item = t(`items.${id}`, {returnObjects: true}) as {name: string; desc: string; price: string};
  const image = t(`images.${id}`);

  return (
    <button
      onClick={onClick}
      className="group w-full rounded-2xl overflow-hidden transition-all cursor-pointer"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-saffron)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-sm font-bold" style={{background: 'var(--accent-saffron)', color: 'var(--bg-dark)'}}>
          {item.price} MAD
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold mb-2" style={{color: 'var(--text-light)'}}>{item.name}</h3>
        <p className="text-sm leading-relaxed" style={{color: 'var(--text-dim)'}}>{item.desc}</p>
      </div>
    </button>
  );
}
