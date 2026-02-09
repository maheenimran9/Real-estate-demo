import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Explore', 
      path: '/listings',
      submenu: [
        { name: 'Portfolio', path: '/listings' },
        { name: 'New Developments', path: '/projects' },
        { name: 'Advisors', path: '/agents' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/services',
      submenu: [
        { name: 'Expertise', path: '/services' },
        { name: 'Investment', path: '/investment' },
        { name: 'Management', path: '/management' },
        { name: 'Consultation', path: '/consultation' }
      ]
    },
    { 
      name: 'Resources', 
      path: '/guides',
      submenu: [
        { name: 'Guides', path: '/guides' },
        { name: 'Market Insights', path: '/insights' },
        { name: 'Support', path: '/faq' }
      ]
    },
    { 
      name: 'Company', 
      path: '/company',
      submenu: [
        { name: 'Heritage', path: '/company' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'glass-nav py-2 translate-y-2 mx-auto w-[94%] max-w-7xl rounded-2xl shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 bg-[#1A1A1A] rounded flex items-center justify-center text-white font-black text-sm transition-all group-hover:bg-[#B6AE9F]">L</div>
          <span className={`text-base font-black tracking-tighter uppercase transition-colors duration-500 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Luxe<span className="text-[#B6AE9F]">Estate</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative px-4 py-2"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all flex items-center gap-1.5 hover:text-[#B6AE9F] ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#1A1A1A]'}`}>
                {item.name}
                <ChevronDown size={10} className={`transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100 p-2 transition-all duration-300 origin-top-left ${activeMenu === item.name ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-[-10px] pointer-events-none'}`}>
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block px-4 py-3 text-[9px] font-black uppercase tracking-widest text-[#1A1A1A] hover:bg-gray-50 hover:text-[#B6AE9F] rounded-lg transition-all"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="w-px h-4 bg-gray-200 mx-4"></div>
          <Link to="/consultation" className="bg-[#B6AE9F] hover:bg-white text-white hover:text-[#1A1A1A] px-7 py-2.5 rounded-lg text-[9px] uppercase tracking-[0.3em] font-black transition-all transform hover:translate-y-[-1px] shadow-xl">
            Book Briefing
          </Link>
        </div>

        {/* Mobile Toggle with Instant Feedback (200ms) */}
        <button 
          className={`lg:hidden transition-colors duration-500 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#1A1A1A]'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Instant Mobile Menu - Optimized 200ms Transition */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[110] transition-all duration-200 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col p-10 pt-24 space-y-8 overflow-y-auto h-full">
          <div className="flex justify-end mb-4">
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#1A1A1A] p-2 hover:bg-gray-100 rounded-full transition-all">
                <X size={36} />
             </button>
          </div>
          {menuItems.map((item) => (
            <div key={item.name} className="space-y-4">
              <span className="text-[10px] font-black text-[#B6AE9F] uppercase tracking-[0.5em]">{item.name}</span>
              <div className="flex flex-col space-y-4 pl-4 border-l-2 border-[#B6AE9F]/10">
                {item.submenu.map((sub) => (
                  <Link 
                    key={sub.name} 
                    to={sub.path} 
                    className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter hover:text-[#B6AE9F] transition-all" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/consultation" className="bg-[#1A1A1A] text-white py-6 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-2xl mt-8 hover:bg-[#B6AE9F] transition-all active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>
            Book Briefing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;