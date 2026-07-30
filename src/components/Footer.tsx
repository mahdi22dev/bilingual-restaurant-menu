import { useLanguage } from '../lib/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Col 1: Brand */}
          <div>
            <h4 className="footer-col-title lang-heading">{t.footer.aboutTitle}</h4>
            <p className="footer-text">{t.footer.aboutText}</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Hours */}
          <div>
            <h4 className="footer-col-title lang-heading">{t.footer.hoursTitle}</h4>
            <p className="footer-text">{t.footer.hoursText}</p>
            <a
              href="https://wa.me/212600000000?text=I%20would%20like%20to%20reserve%20a%20table"
              target="_blank"
              rel="noreferrer"
              className="btn-qr-action"
              style={{ marginTop: '0.5rem', display: 'inline-flex' }}
            >
              {t.footer.whatsappBtn}
            </a>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="footer-col-title lang-heading">{t.footer.contactTitle}</h4>
            <p className="footer-text">📍 <span>{t.footer.address}</span></p>
            <p className="footer-text">📞 <span>{t.footer.phone}</span></p>
          </div>

          {/* Col 4: Map */}
          <div>
            <h4 className="footer-col-title lang-heading">{t.footer.mapTitle}</h4>
            <div className="map-placeholder-box">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-saffron)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontSize: '0.85rem' }}>Gueliz, Marrakech</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-saffron)', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'underline' }}
              >
                {t.footer.mapBtn}
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
