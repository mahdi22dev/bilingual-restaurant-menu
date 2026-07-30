import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';
import { useLanguage } from '../lib/useLanguage';
import { MENU_ITEMS, MenuItem } from '../lib/data/menuItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard';
import DishModal from '../components/DishModal';

export default function LandingPage() {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const [qrUrl, setQrUrl] = useState('');
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  // Build the menu URL for QR code
  useEffect(() => {
    const menuUrl = `${window.location.origin}/menu`;
    setQrUrl(menuUrl);
  }, []);

  // Render QR code whenever qrUrl changes
  useEffect(() => {
    if (!qrUrl || !qrCanvasRef.current) return;
    QRCode.toCanvas(qrCanvasRef.current, qrUrl, {
      width: 170,
      color: { dark: '#1A1A1A', light: '#F5F0E8' },
      errorCorrectionLevel: 'H',
    }).catch(console.error);
  }, [qrUrl]);

  // Scroll fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const handleDownloadQr = () => {
    if (!qrCanvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'Al-Yasmine-Palace-Menu-QR.png';
    link.href = qrCanvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(qrUrl).then(() => alert(t.qrSection.copiedMsg));
  };

  const cats = [
    { key: 'all', label: t.menu.allCats },
    { key: 'starters', label: t.menu.startersCat },
    { key: 'mains', label: t.menu.mainsCat },
    { key: 'desserts', label: t.menu.dessertsCat },
    { key: 'drinks', label: t.menu.drinksCat },
  ];

  const diets = [
    { key: 'all', label: t.menu.allDiet },
    { key: 'vegetarian', label: t.menu.vegDiet },
    { key: 'spicy', label: t.menu.spicyDiet },
    { key: 'popular', label: t.menu.popularDiet },
  ];

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-content fade-in">
          <span className="hero-badge">{t.hero.badge}</span>
          <h1 className="hero-title lang-heading">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">
              <span>{t.hero.ctaMenu}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="#qr-section" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              <span>{t.hero.ctaQr}</span>
            </a>
          </div>

          <div className="hero-info-pills">
            <div className="info-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{t.hero.location}</span>
            </div>
            <div className="info-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{t.hero.hours}</span>
            </div>
            <div className="info-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{t.hero.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU SECTION ── */}
      <section id="menu" className="section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title lang-heading">{t.menu.title}</h2>
            <p className="section-subtitle">{t.menu.subtitle}</p>
            <div className="divider-gold" />
          </div>

          {/* Filter Toolbar */}
          <div className="filter-toolbar fade-in">
            <div className="search-box">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder={t.menu.searchPlaceholder}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-tabs-row">
              {cats.map(c => (
                <button
                  key={c.key}
                  className={`cat-tab-btn${category === c.key ? ' active' : ''}`}
                  onClick={() => setCategory(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="dietary-pills-row">
              {diets.map(d => (
                <button
                  key={d.key}
                  className={`diet-pill${dietFilter === d.key ? ' active' : ''}`}
                  onClick={() => setDietFilter(d.key)}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {filteredItems.length === 0 ? (
              <div className="no-results">{t.menu.noResults}</div>
            ) : (
              filteredItems.map(item => (
                <DishCard
                  key={item.id}
                  item={item}
                  lang={lang}
                  t={t}
                  onOpenModal={openModal}
                  variant="landing"
                />
              ))
            )}
          </div>

          {/* Chef's Special */}
          <div className="special-banner fade-in">
            <div>
              <span className="special-badge">{t.special.badge}</span>
              <h3 className="special-title lang-heading">{t.special.title}</h3>
              <p className="special-desc">{t.special.desc}</p>
              <div className="special-price-row">
                <span className="special-price">{t.special.price}</span>
                <a
                  href="https://wa.me/212600000000?text=I%20would%20like%20to%20reserve%20a%20table%20for%20the%20Chef%20Special"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  {t.special.cta}
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
              alt="Royal Tagine Special"
              className="special-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── QR SECTION ── */}
      <section id="qr-section" className="qr-section">
        <div className="container">
          <div className="qr-card-wrapper fade-in">

            <div className="qr-box">
              <canvas ref={qrCanvasRef} />
            </div>

            <div className="qr-info-content">
              <h3 className="qr-heading lang-heading">{t.qrSection.title}</h3>
              <p className="qr-desc">{t.qrSection.subtitle}</p>

              <div className="qr-input-group">
                <input
                  type="text"
                  className="qr-url-input"
                  value={qrUrl}
                  onChange={e => setQrUrl(e.target.value)}
                />
              </div>

              <div className="qr-actions-row">
                <Link
                  to="/menu"
                  className="btn-qr-action"
                  style={{ background: 'var(--accent-saffron)', color: '#1A1A1A', fontWeight: 800, borderColor: 'var(--accent-saffron)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  <span>{t.qrSection.openMenuBtn}</span>
                </Link>

                <button className="btn-qr-action" onClick={handleDownloadQr}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>{t.qrSection.downloadBtn}</span>
                </button>

                <button className="btn-qr-action" onClick={() => window.print()}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9"/>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                    <rect x="6" y="14" width="12" height="8"/>
                  </svg>
                  <span>{t.qrSection.printBtn}</span>
                </button>

                <button className="btn-qr-action" onClick={handleCopyUrl}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <span>{t.qrSection.copyBtn}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      {/* Dish Modal */}
      <DishModal item={modalItem} lang={lang} t={t} onClose={() => setModalItem(null)} />
    </>
  );
}
