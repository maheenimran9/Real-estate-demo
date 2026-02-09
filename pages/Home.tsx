
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Shield, Globe, Award, TrendingUp, Map, Video, Users } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties, buyingProcess, successStories } from '../data';

const Home: React.FC = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Cinematic Hero Section - Responsive Scaling */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" 
            className="w-full h-full object-cover scale-110 animate-[pulse_15s_infinite_ease-in-out]"
            alt="Luxury Architecture"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-20 animate-reveal">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
              <span className="w-2 h-2 bg-[#B6AE9F] rounded-full animate-pulse"></span>
              <span className="text-[9px] lg:text-[11px] font-black text-white uppercase tracking-[0.4em] lg:tracking-[0.6em]">The Global Real Estate Authority</span>
            </div>
            
            <h1 className="text-white uppercase tracking-tighter mb-8 lg:mb-10 leading-[0.85] drop-shadow-2xl">
              Curating <br />
              <span className="text-[#B6AE9F] italic font-light normal-case">extraordinary</span> <br />
              Living.
            </h1>
            
            <p className="max-w-2xl mb-10 lg:mb-14 font-medium text-white/80 text-lg lg:text-3xl leading-relaxed tracking-tight drop-shadow-md">
              A private collective of high-value assets managed through jurisdictional intelligence and absolute discretion.
            </p>
            
            {/* Glassmorphism Search Console - Mobile Optimized */}
            <div className="bg-white/10 backdrop-blur-3xl p-4 lg:p-6 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row gap-4 items-center border border-white/20 max-w-5xl ambient-depth group transition-all hover:bg-white/15">
              <div className="flex-1 w-full px-6 lg:px-10 py-3 lg:py-5">
                <label className="block text-[8px] lg:text-[9px] font-black text-white/50 uppercase tracking-widest mb-2">Location Hub</label>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-[#B6AE9F]" />
                  <input type="text" placeholder="Global Jurisdictions..." className="w-full text-white font-black text-base lg:text-lg outline-none bg-transparent placeholder-white/20" />
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10"></div>
              <div className="flex-1 w-full px-6 lg:px-10 py-3 lg:py-5">
                <label className="block text-[8px] lg:text-[9px] font-black text-white/50 uppercase tracking-widest mb-2">Portfolio Tier</label>
                <div className="flex items-center gap-3">
                  <TrendingUp size={18} className="text-[#B6AE9F]" />
                  <select className="w-full text-white font-black text-base lg:text-lg outline-none bg-transparent appearance-none cursor-pointer">
                    <option className="bg-[#1A1A1A]">Signature Portfolios</option>
                    <option className="bg-[#1A1A1A]">Off-Market Estates</option>
                    <option className="bg-[#1A1A1A]">Urban Mansions</option>
                  </select>
                </div>
              </div>
              <button className="w-full md:w-auto bg-[#B6AE9F] hover:bg-white text-white hover:text-[#1A1A1A] p-6 lg:p-8 rounded-[1.8rem] transition-all group shadow-2xl active:scale-95 btn-premium">
                <Search size={28} lg:size={32} strokeWidth={3} className="group-hover:scale-110 transition-transform mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats - Responsive Grid */}
      <section className="py-20 lg:py-32 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {[
              { val: '$12.5B+', label: 'Managed Assets' },
              { val: '450+', label: 'Global Mandates' },
              { val: '24', label: 'Strategic Hubs' },
              { val: '98%', label: 'Retention Rate' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter mb-2 lg:mb-4 group-hover:text-[#B6AE9F] transition-colors">{stat.val}</div>
                <div className="text-[9px] lg:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] lg:tracking-[0.5em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Landmark Assets */}
      <section className="py-24 lg:py-56 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-10 lg:gap-12">
            <div className="max-w-2xl">
               <span className="text-[11px] lg:text-[13px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-6 lg:mb-8 block">Curated Selection</span>
               <h2 className="text-[#1A1A1A] tracking-tighter">Iconic Architecture.</h2>
            </div>
            <Link to="/listings" className="group flex items-center gap-4 lg:gap-6 bg-[#1A1A1A] px-10 lg:px-14 py-5 lg:py-7 rounded-2xl text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] text-white hover:bg-[#B6AE9F] transition-all shadow-2xl btn-premium">
              <span>Explore Hub</span>
              <ArrowRight size={20} lg:size={24} strokeWidth={4} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {featuredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Responsive Flex Stacking */}
      <section className="py-32 lg:py-60 bg-[#F8F8F7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#B6AE9F]/5 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            <div>
              <span className="text-[11px] lg:text-[13px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-6 lg:mb-8 block">Our Operational Blueprint</span>
              <h2 className="text-[#1A1A1A] tracking-tighter mb-12 lg:mb-16">The Buying <br className="hidden lg:block" />Cycle.</h2>
              <div className="space-y-10 lg:space-y-12">
                {buyingProcess.map((step) => (
                  <div key={step.id} className="flex gap-6 lg:gap-10 group">
                    <div className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center text-[#B6AE9F] font-black text-xl lg:text-2xl shadow-premium border border-gray-100 group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                      0{step.id}
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-2 lg:mb-4 normal-case tracking-tight">{step.title}</h4>
                      <p className="text-gray-400 font-medium text-base lg:text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-first lg:order-last w-full">
  {/* Aspect ratio changed to 16:9 for cinematic laptop view */}
  <div className="relative aspect-video rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl ambient-depth w-full mx-auto">
    
    {/* Image with object-cover to prevent stretching */}
    <img 
      src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&auto=format&fit=crop&q=80" 
      className="w-full h-full object-cover" 
      alt="Methodology" 
    />
    
    {/* Stronger Gradient Scrim for 100% Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    
    {/* Responsive Text Overlay */}
    <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-white z-10">
      <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
        <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#B6AE9F]" />
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">
          Fiduciary Excellence
        </span>
      </div>
      
      {/* Headings now scale with screen size */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-white mb-1 md:mb-2 drop-shadow-lg">
        Absolute Privacy.
      </h3>
      
      <p className="text-white/90 font-medium text-xs md:text-sm lg:text-base max-w-md">
        Every transaction is handled through our secure legal infrastructure.
      </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Neighborhood Highlights - Grid Adaptation */}
      <section className="py-24 lg:py-56 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center mb-16 lg:mb-24">
          <span className="text-[11px] lg:text-[13px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-6 lg:mb-8 block">Global Ecosystems</span>
          <h2 className="text-[#1A1A1A] tracking-tighter">Elite Neighborhoods.</h2>
        </div>
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {[
              { title: 'The Platinum Belt', icon: <Map size={24} />, desc: 'Exclusive coastal retreats for the ultra-high-net-worth.', img: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
              { title: 'Skyline Hubs', icon: <Video size={24} />, desc: 'Ultra-modern vertical estates in global financial centers.', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' }
            ].map((item, i) => (
              <div key={i} className="relative aspect-video rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group shadow-premium">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-[3s] lg:group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 scrim-bottom opacity-100"></div>
                <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 text-white z-10">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 lg:mb-6 text-[#B6AE9F]">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-2 lg:mb-3 tracking-tighter normal-case text-white drop-shadow-md">{item.title}</h3>
                  <p className="text-white/80 font-medium max-w-sm text-sm lg:text-base drop-shadow-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats - Responsive Cards */}
      <section className="py-24 lg:py-56 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="bg-[#1A1A1A] rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-32 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B6AE9F]/10 blur-[150px] rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
              <div>
                <h2 className="text-white tracking-tighter mb-10 lg:mb-12 leading-[0.9]">Transforming <br /><span className="text-[#B6AE9F]">Capital.</span></h2>
                <div className="grid grid-cols-2 gap-6 lg:gap-12">
                  <div className="p-6 lg:p-8 bg-white/5 rounded-[2rem] lg:rounded-[2.5rem] border border-white/10">
                    <Users className="text-[#B6AE9F] mb-4 lg:mb-6" size={28} lg:size={32} />
                    <div className="text-3xl lg:text-4xl font-black mb-1 lg:mb-2 text-white">15k+</div>
                    <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white/40">Success Mandates</div>
                  </div>
                  <div className="p-6 lg:p-8 bg-white/5 rounded-[2rem] lg:rounded-[2.5rem] border border-white/10">
                    <Award className="text-[#B6AE9F] mb-4 lg:mb-6" size={28} lg:size={32} />
                    <div className="text-3xl lg:text-4xl font-black mb-1 lg:mb-2 text-white">45+</div>
                    <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white/40">Global Awards</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-2xl p-8 lg:p-16 rounded-[3rem] lg:rounded-[4rem] shadow-2xl transform lg:rotate-1">
                <p className="text-[#1A1A1A] italic font-medium text-xl lg:text-3xl mb-10 lg:mb-12 leading-relaxed">
                  "{successStories[0].quote}"
                </p>
                <div className="flex items-center gap-5 lg:gap-6">
                  <img src={successStories[0].image} className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl object-cover grayscale" alt={successStories[0].name} />
                  <div>
                    <span className="block font-black text-[#1A1A1A] text-lg lg:text-xl uppercase tracking-tighter">{successStories[0].name}</span>
                    <span className="text-[10px] lg:text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.5em]">{successStories[0].location} Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive CTA - Mobile Friendly Padding */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <span className="text-[11px] lg:text-[13px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-10 lg:mb-12 block">The Invitation</span>
          <h2 className="text-[#1A1A1A] tracking-tighter mb-12 lg:mb-16 leading-none">Your Journey <br />Starts Here.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-10">
            <Link to="/consultation" className="bg-[#B6AE9F] text-white px-12 lg:px-16 py-6 lg:py-8 rounded-2xl text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] transition-all transform hover:scale-105 shadow-2xl active:scale-95 shadow-[#B6AE9F]/30">
              Book Briefing
            </Link>
            <Link to="/listings" className="bg-[#1A1A1A] text-white px-12 lg:px-16 py-6 lg:py-8 rounded-2xl text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] transition-all transform hover:scale-105 shadow-2xl active:scale-95 shadow-black/30">
              Access Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
