import { MenuItem } from '../lib/data/menuItems';
import { Translations } from '../lib/data/translations';
import { Lang } from '../lib/data/translations';

interface DishCardProps {
  item: MenuItem;
  lang: Lang;
  t: Translations;
  onOpenModal: (id: string) => void;
  /** 'landing' = quick-view only; 'menu' = full card layout */
  variant?: 'landing' | 'menu';
}

export default function DishCard({
  item,
  lang,
  t,
  onOpenModal,
  variant = 'landing',
}: DishCardProps) {
  const namePrimary = lang === 'ar' ? item.name.ar : item.name.en;
  const nameSecondary = lang === 'ar' ? item.name.en : item.name.ar;
  const descText = item.desc[lang];
  const priceFormatted = `${item.price} ${t.menu.currency}`;

  const badgeClass =
    item.diet === 'vegetarian' ? 'badge-vegetarian' :
    item.diet === 'spicy' ? 'badge-spicy' :
    'badge-popular';

  if (variant === 'menu') {
    return (
      <div className="dish-card">
        <div className="dish-img-wrapper">
          <img src={item.image} alt={namePrimary} className="dish-img" loading="lazy" />
          <span className={`dish-badge ${badgeClass}`}>{t.badges[item.diet]}</span>
        </div>
        <div className="dish-body">
          <div className="dish-header">
            <div>
              <h3 className="dish-title-primary">{namePrimary}</h3>
              <div className="dish-title-secondary">{nameSecondary}</div>
            </div>
            <span className="dish-price">{priceFormatted}</span>
          </div>
          <p className="dish-desc-clamp">{descText}</p>
          <div className="dish-actions">
            <button className="btn-detail" onClick={() => onOpenModal(item.id)}>
              <span>{t.menu.detailsBtn}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Landing page variant
  return (
    <div className="menu-card fade-in visible">
      <div className="card-img-wrapper">
        <img src={item.image} alt={namePrimary} className="card-img" loading="lazy" />
        <span className={`card-badge ${badgeClass}`}>{t.badges[item.diet]}</span>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div>
            <h3 className="dish-title-ar lang-heading">{namePrimary}</h3>
            <div className="dish-title-en">{nameSecondary}</div>
          </div>
          <span className="dish-price">{priceFormatted}</span>
        </div>
        <p className="dish-desc">{descText}</p>
        <div className="card-footer">
          <button className="btn-quick-view" onClick={() => onOpenModal(item.id)}>
            <span>{t.menu.quickView}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
