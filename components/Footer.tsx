
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 lg:pt-32 pb-12 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 lg:mb-24">
          <div className="space-y-8 lg:space-y-10">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#B6AE9F] rounded-xl flex items-center justify-center text-white font-black text-xl lg:text-2xl group-hover:rotate-6 transition-transform">L</div>
              <span className="text-2xl lg:text-3xl font-black tracking-tighter uppercase">Luxe<span className="text-[#B6AE9F]">Estate</span></span>
            </Link>
            <p className="text-white/40 leading-relaxed font-medium text-base lg:text-lg">
              The world's foremost authority in high-value real estate. We unite extraordinary homes with extraordinary people.
            </p>
            <div className="flex space-x-4 lg:space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#B6AE9F] hover:border-[#B6AE9F] transition-all transform hover:scale-110">
                  <Icon size={18} lg:size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] lg:text-[12px] font-black mb-8 lg:mb-10 text-white uppercase tracking-[0.3em] lg:tracking-[0.4em]">Strategic Links</h4>
            <ul className="space-y-4 lg:space-y-6 text-white/40 font-bold uppercase tracking-widest text-[10px] lg:text-[11px]">
              <li><Link to="/listings" className="hover:text-[#B6AE9F] transition-colors">Portfolio Search</Link></li>
              <li><Link to="/agents" className="hover:text-[#B6AE9F] transition-colors">Senior Partners</Link></li>
              <li><Link to="/services" className="hover:text-[#B6AE9F] transition-colors">Institutional Services</Link></li>
              <li><Link to="/insights" className="hover:text-[#B6AE9F] transition-colors">Global Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#B6AE9F] transition-colors">Contact Hub</Link></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-[10px] lg:text-[12px] font-black mb-8 lg:mb-10 text-white uppercase tracking-[0.3em] lg:tracking-[0.4em]">Asset Classes</h4>
            <ul className="space-y-4 lg:space-y-6 text-white/40 font-bold uppercase tracking-widest text-[10px] lg:text-[11px]">
              <li><Link to="/listings" className="hover:text-[#B6AE9F] transition-colors">Coastal Mansions</Link></li>
              <li><Link to="/listings" className="hover:text-[#B6AE9F] transition-colors">Urban Sky-Palaces</Link></li>
              <li><Link to="/listings" className="hover:text-[#B6AE9F] transition-colors">Heritage Estates</Link></li>
              <li><Link to="/listings" className="hover:text-[#B6AE9F] transition-colors">Modern Minimalism</Link></li>
              <li><Link to="/listings" className="hover:text-[#B6AE9F] transition-colors">Private Islands</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] lg:text-[12px] font-black mb-8 lg:mb-10 text-white uppercase tracking-[0.3em] lg:tracking-[0.4em]">Intelligence</h4>
            <p className="text-white/40 mb-6 lg:mb-8 font-medium text-sm lg:text-base">Subscribe to our quarterly market analysis and pre-listing alerts.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 lg:py-5 px-6 lg:px-8 text-white focus:ring-4 focus:ring-[#B6AE9F]/30 outline-none transition-all placeholder-white/20 font-bold text-sm lg:text-base"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#B6AE9F] px-4 lg:px-5 rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all shadow-xl shadow-[#B6AE9F]/20">
                <Send size={20} lg:size={24} strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 lg:pt-12 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between text-white/20 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] mb-8 lg:mb-10 space-y-4 md:space-y-0">
            <p className="text-center md:text-left">© 2024 LuxeEstate International Group. All rights reserved.</p>
            <div className="flex space-x-6 lg:space-x-10">
              <Link to="/company" className="hover:text-[#B6AE9F] transition-colors">Security</Link>
              <Link to="/faq" className="hover:text-[#B6AE9F] transition-colors">Compliance</Link>
              <Link to="/faq" className="hover:text-[#B6AE9F] transition-colors">Privacy</Link>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
