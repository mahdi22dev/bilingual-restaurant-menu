import {useTranslation} from 'react-i18next';
import {Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import LandingPage from '@/src/pages/LandingPage';
import MenuPage from '@/src/pages/MenuPage';

function ScrollToTop() {
  const {pathname} = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HtmlDir() {
  const {i18n} = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return null;
}

export default function App() {
  return (
    <>
      <HtmlDir />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
