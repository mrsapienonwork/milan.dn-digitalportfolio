/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectPage from './pages/ProjectPage';
import CertificationsPage from './pages/CertificationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Preloader />
      <div className="bg-navy-800 text-slate-300 font-sans min-h-screen selection:bg-electric-blue/30 selection:text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/certification" element={<CertificationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
