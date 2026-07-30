import { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../lib/useLanguage';
import { MENU_ITEMS, MenuItem } from '../lib/data/menuItems';
import DishCard from '../components/DishCard';
import DishModal from '../components/DishModal';

export default function MenuPage() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [searchParams] = useSearchParams();

  const initialCat = searchParams.get('cat') || 'all';
  const [category, setCategory] = useState(initialCat);
  const [dietFilter, setDietFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);

  // Sync category with URL param on navigation
  useEffect(() => {
    const cat = searchParams.get('cat') || 'all';
    setCategory(cat);
  }, [searchParams]);

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchCat = category === 'all' || item.category === category;
    const matchDiet = dietFilter === 'all' || item.diet === dietFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      item.name.ar.toLowerCase().includes(q) ||
      item.name.en.toLowerCase().includes(q) ||
      item.desc.ar.toLowerCase().includes(q) ||
      item.desc.en.toLowerCase().includes(q);
    return matchCat && matchDiet && matchSearch;
  });

  const openModal = useCallback((id: string) => {
    const item = MENU_ITEMS.find(m => m.id === id) || null;
    setModalItem(item);
  }, []);

  const cats = [
    { key: 'all', label: t.menu.allCats },
    { key: 'starters', label: t.menu.startersCat },
    { key: 'mains', label: t.menu.mainsCat },
    { key: 'desserts', label: t.menu.dessertsCat },
    { key: 'drinks', label: t.menu.drinksCat },
  ];

  const diets = [
    { key: 'all', label: t.menu.allDiet },
    { key: 'popular', label: t.menu.popularDiet },
    { key: 'vegetarian', label: t.menu.vegDiet },
    { key: 'spicy', label: t.menu.spicyDiet },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* ── STICKY HEADER ── */}
      <header className="menu-page-header">
        <div className="container">
          <div className="menu-page-header-inner">
            <Link to="/" className="brand-logo">
              <div className="brand-icon">✦</div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-light)' }}>
                {t.nav.brandName}
              </span>
            </Link>

            <div className="header-actions">
              <Link to="/" className="btn-back-home">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>{t.nav.home}</span>
              </Link>
              <button className="btn-lang-toggle" onClick={toggleLanguage}>
                <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="menu-hero">
        <div className="container">
          <span className="menu-hero-badge">{t.hero.menuBadge}</span>
          <h1 className="menu-hero-title">{t.hero.menuTitle}</h1>
          <p className="menu-hero-subtitle">{t.hero.menuSubtitle}</p>

          <div>
            <div className="wifi-pill">
              📶 <span>{t.hero.wifi}</span>{' '}
              <span>AlYasmineGuest</span>
              {lang === 'ar' ? ' (كلمة السر: ' : ' (Password: '}
              <span>Yasmine2026</span>)
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTROLS (STICKY) ── */}
      <section className="controls-section">
        <div className="container">
          <div className="search-box">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              id="search-input"
              className="search-input"
              placeholder={t.menu.searchPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="cat-scroll">
            {cats.map(c => (
              <button
                key={c.key}
                className={`cat-btn${category === c.key ? ' active' : ''}`}
                onClick={() => setCategory(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="diet-scroll">
            {diets.map(d => (
              <button
                key={d.key}
                className={`diet-btn${dietFilter === d.key ? ' active' : ''}`}
                onClick={() => setDietFilter(d.key)}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU GRID ── */}
      <main className="menu-container" style={{ flexGrow: 1 }}>
        <div className="container">
          <div className="dish-grid">
            {filteredItems.length === 0 ? (
              <div className="no-dishes">{t.menu.noResults}</div>
            ) : (
              filteredItems.map(item => (
                <DishCard
                  key={item.id}
                  item={item}
                  lang={lang}
                  t={t}
                  onOpenModal={openModal}
                  variant="menu"
                />
              ))
            )}
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="menu-footer">
        <div className="container">
          <div className="footer-brand">{t.footer.aboutTitle}</div>
          <div className="footer-sub">{t.footer.subtitle}</div>
          <div className="footer-links">
            <Link to="/">{t.nav.home}</Link>
            <Link to="/#contact">{t.nav.contact}</Link>
            <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer">{t.footer.whatsapp}</a>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{t.footer.rights}</p>
        </div>
      </footer>

      {/* ── DISH MODAL ── */}
      <DishModal
        item={modalItem}
        lang={lang}
        t={t}
        onClose={() => setModalItem(null)}
      />
    </div>
  );
}
