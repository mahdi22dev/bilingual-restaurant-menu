import { useEffect } from 'react';
import { MenuItem } from '../lib/data/menuItems';
import { Translations } from '../lib/data/translations';
import { Lang } from '../lib/data/translations';

interface DishModalProps {
  item: MenuItem | null;
  lang: Lang;
  t: Translations;
  onClose: () => void;
}

export default function DishModal({ item, lang, t, onClose }: DishModalProps) {
  const isOpen = item !== null;

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!item) return null;

  const namePrimary = lang === 'ar' ? item.name.ar : item.name.en;
  const priceFormatted = `${item.price} ${t.menu.currency}`;

  return (
    <div
      className={`modal-backdrop${isOpen ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={namePrimary}
    >
      <div className="modal-card">
        <button className="modal-close-btn" onClick={onClose} aria-label={t.modal.close}>✕</button>

        <img src={item.image} alt={namePrimary} className="modal-img" />

        <div className="modal-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.75rem' }}>
            <h3 className="lang-heading" style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>
              {item.name.ar}
            </h3>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-saffron)', whiteSpace: 'nowrap' }}>
              {priceFormatted}
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-heading-en)', fontSize: '0.9rem' }}>
            {item.name.en}
          </p>

          <p style={{ color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.9rem' }}>
            {item.desc[lang]}
          </p>

          <div className="modal-section-title">{t.modal.ingredients}</div>
          <p className="modal-text">{item.ingredients[lang]}</p>

          <div className="modal-section-title">{t.modal.pairing}</div>
          <p className="modal-text">{item.pairing[lang]}</p>
        </div>
      </div>
    </div>
  );
}
