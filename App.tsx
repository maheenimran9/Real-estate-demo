
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Management from './pages/Management';
import Company from './pages/Company';
import Achievements from './pages/Achievements';
import FAQ from './pages/FAQ';
import Consultation from './pages/Consultation';
import Agents from './pages/Agents';
import Guides from './pages/Guides';
import Insights from './pages/Insights';
import Investment from './pages/Investment';

// Scroll to top component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/management" element={<Management />} />
            <Route path="/company" element={<Company />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/careers" element={<Home />} /> {/* Demo placeholder */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
