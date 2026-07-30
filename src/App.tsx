/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/useLanguage';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </LanguageProvider>
  );
}
