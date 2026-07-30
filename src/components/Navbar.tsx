import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/useLanguage';

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryNav = (cat: string) => {
    navigate(`/menu?cat=${cat}`);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo">
            <div className="logo-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M7 2v20"/>
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
              </svg>
            </div>
            <div className="brand-title">
              <span className="lang-heading">{t.nav.brandName}</span>
              <span className="brand-sub">RESTAURANT</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-menu">
            <li><button className="nav-link" onClick={() => handleCategoryNav('all')}>{t.menu.allCats}</button></li>
            <li><button className="nav-link" onClick={() => handleCategoryNav('starters')}>{t.nav.starters}</button></li>
            <li><button className="nav-link" onClick={() => handleCategoryNav('mains')}>{t.nav.mains}</button></li>
            <li><button className="nav-link" onClick={() => handleCategoryNav('desserts')}>{t.nav.desserts}</button></li>
            <li><button className="nav-link" onClick={() => handleCategoryNav('drinks')}>{t.nav.drinks}</button></li>
            <li><a href="#qr-section" className="nav-link">{t.nav.qr}</a></li>
            <li><a href="#contact" className="nav-link">{t.nav.contact}</a></li>
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            <button className="lang-toggle-btn" onClick={toggleLanguage} aria-label="Toggle Language">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            <button
              className="mobile-hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`}>
        <button className="modal-close-btn" onClick={() => setMobileOpen(false)}>✕</button>
        <ul className="mobile-nav-links">
          <li><button className="mobile-nav-link" onClick={() => handleCategoryNav('all')}>{t.menu.allCats}</button></li>
          <li><button className="mobile-nav-link" onClick={() => handleCategoryNav('starters')}>{t.nav.starters}</button></li>
          <li><button className="mobile-nav-link" onClick={() => handleCategoryNav('mains')}>{t.nav.mains}</button></li>
          <li><button className="mobile-nav-link" onClick={() => handleCategoryNav('desserts')}>{t.nav.desserts}</button></li>
          <li><button className="mobile-nav-link" onClick={() => handleCategoryNav('drinks')}>{t.nav.drinks}</button></li>
          <li><a href="#qr-section" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t.nav.qr}</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{t.nav.contact}</a></li>
        </ul>
      </div>
    </>
  );
}
