import {useTranslation} from 'react-i18next';

interface Props {
  id: string;
  onClose: () => void;
}

export default function DishModal({id, onClose}: Props) {
  const {t, i18n} = useTranslation();

  const item = t(`items.${id}`, {returnObjects: true}) as {name: string; desc: string; ingredients: string; pairing: string; price: string};
  const image = t(`images.${id}`);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
        style={{background: 'var(--bg-card)', border: '1px solid var(--border-subtle)'}}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
          style={{background: 'rgba(0,0,0,0.5)', color: '#fff'}}
        >
          ✕
        </button>

        <img src={image} alt={item.name} className="w-full h-56 object-cover" />

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="text-xl font-bold" style={{color: 'var(--text-light)'}}>{item.name}</h2>
            <span className="text-lg font-bold whitespace-nowrap" style={{color: 'var(--accent-saffron)'}}>{item.price} MAD</span>
          </div>

          <p className="text-sm mb-5 leading-relaxed" style={{color: 'var(--text-dim)'}}>{item.desc}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1" style={{color: 'var(--text-muted)'}}>{t('menu.ingredients')}</h4>
            <p className="text-sm" style={{color: 'var(--text-dim)'}}>{item.ingredients}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-1" style={{color: 'var(--text-muted)'}}>{t('menu.pairing')}</h4>
            <p className="text-sm" style={{color: 'var(--text-dim)'}}>{item.pairing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
