
import React from 'react';
import { investmentOpportunities } from '../data';
import { TrendingUp, ShieldCheck, Globe, ArrowRight, Zap, Target, BarChart3, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Investment: React.FC = () => {
  return (
    <div className="pt-32 lg:pt-48 pb-24 lg:pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Institutional Branding Header */}
        <div className="mb-20 lg:mb-32 max-w-4xl animate-reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-[#B6AE9F]/10 border border-[#B6AE9F]/20 rounded-full">
            <Lock size={14} className="text-[#B6AE9F]" />
            <span className="text-[10px] font-black text-[#B6AE9F] uppercase tracking-[0.4em]">Qualified Investors Only</span>
          </div>
          <h1 className="text-[#1A1A1A] tracking-tighter mb-8 leading-none">
            Investment <br className="hidden lg:block" />
            <span className="text-[#B6AE9F]">Opportunities.</span>
          </h1>
          <p className="text-gray-400 font-medium text-lg lg:text-2xl max-w-2xl leading-relaxed">
            Strategic wealth preservation through institutional-grade real estate assets. Access a world of exclusive yields and jurisdictional stability.
          </p>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-32 lg:mb-48">
          {[
            { icon: <ShieldCheck />, title: 'Asset Protection', desc: 'Sovereign-level security and fiduciary oversight on every capital placement.' },
            { icon: <TrendingUp />, title: 'Enhanced Alpha', desc: 'Superior returns generated through off-market precision and strategic timing.' },
            { icon: <BarChart3 />, title: 'Dynamic Yields', desc: 'Inflation-hedged income streams optimized for long-term wealth compounding.' }
          ].map((item, i) => (
            <div key={i} className="p-10 lg:p-12 bg-[#F8F8F7] rounded-[2.5rem] lg:rounded-[3rem] border border-gray-100 group transition-all hover:shadow-premium">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center text-[#B6AE9F] mb-8 lg:mb-10 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl lg:text-2xl font-black mb-4 text-[#1A1A1A] tracking-tight uppercase">{item.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Portfolio Highlights Section */}
        <section className="py-24 border-t border-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-[10px] lg:text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-4 block">Institutional Access</span>
              <h2 className="text-[#1A1A1A] tracking-tighter mb-0">Global Portfolio <br className="hidden lg:block" />Highlights.</h2>
            </div>
            <Link to="/consultation" className="group flex items-center gap-4 lg:gap-6 bg-[#1A1A1A] px-10 lg:px-14 py-5 lg:py-7 rounded-2xl text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] text-white hover:bg-[#B6AE9F] transition-all shadow-2xl btn-premium w-full md:w-auto justify-center">
              <span>Access Private Vault</span>
              <ArrowRight size={20} lg:size={24} strokeWidth={4} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {investmentOpportunities.map((opp) => (
              <div key={opp.id} className="group relative aspect-video rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-premium hover-lift bg-black">
                <img 
                  src={opp.image} 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-[3s] lg:group-hover:scale-110" 
                  alt={opp.title} 
                />
                <div className="absolute inset-0 scrim-bottom opacity-100"></div>
                
                <div className="absolute top-8 left-8 z-10">
                  <span className="bg-white/95 backdrop-blur-xl px-5 py-2 rounded-xl text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest shadow-xl">
                    {opp.category} Mandate
                  </span>
                </div>

                <div className="absolute bottom-10 left-10 right-10 text-white z-20">
                  <div className="flex items-center gap-3 mb-4 text-[#B6AE9F]">
                    <Globe size={18} />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">{opp.location}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 tracking-tighter normal-case text-white leading-tight drop-shadow-md">{opp.title}</h3>
                  <p className="text-white/80 font-medium max-w-md mb-8 text-sm lg:text-base line-clamp-2 drop-shadow-sm">{opp.summary}</p>
                  
                  <div className="flex items-center gap-10 lg:gap-16 pt-8 border-t border-white/10">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 block mb-1">Target Yield</span>
                      <span className="text-xl lg:text-2xl font-black text-[#B6AE9F]">{opp.expectedYield}</span>
                    </div>
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 block mb-1">Min. Commitment</span>
                      <span className="text-xl lg:text-2xl font-black text-white">{opp.minInvestment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exclusive Syndication Offerings Section */}
        <section className="py-32 lg:py-56">
          <div className="bg-[#1A1A1A] rounded-[4rem] lg:rounded-[6rem] p-10 lg:p-32 text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B6AE9F]/10 via-transparent to-transparent opacity-50"></div>
            <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#B6AE9F]/5 blur-[120px] rounded-full"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div>
                <span className="text-[10px] lg:text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] mb-8 block">Limited Placement</span>
                <h2 className="text-white tracking-tighter mb-10 leading-[0.9]">Exclusive <br className="hidden lg:block" />Syndication <br className="hidden lg:block" /><span className="text-[#B6AE9F]">Offerings.</span></h2>
                <p className="text-white/40 text-lg lg:text-xl font-medium leading-relaxed mb-12 max-w-xl">
                  Co-invest alongside the world's most sophisticated family offices and sovereign wealth funds. Our syndication model offers granular access to trophy assets with prioritized exit windows.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Asset Tier', val: 'Trophy Grade' },
                    { label: 'Investment Window', val: 'Q3 - Q4 2024' },
                    { label: 'Max Capacity', val: '$50M per Asset' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-5 border-b border-white/5">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">{item.label}</span>
                      <span className="text-lg font-black tracking-tighter uppercase">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-3xl p-10 lg:p-20 rounded-[3rem] lg:rounded-[4.5rem] text-[#1A1A1A] shadow-premium relative">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#B6AE9F] rounded-full flex items-center justify-center text-white shadow-2xl border-8 border-white">
                  <Zap size={32} fill="currentColor" />
                </div>
                <h4 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase mb-10 leading-none">Request Access <br />to Ledger</h4>
                <form className="space-y-6 lg:space-y-10">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Mandate Profile</label>
                    <div className="relative">
                      <select className="w-full bg-[#F8F8F7] border border-gray-100 rounded-2xl py-5 lg:py-6 px-6 lg:px-8 text-[#1A1A1A] font-black text-xs lg:text-sm outline-none appearance-none cursor-pointer">
                        <option>Private Wealth Holder</option>
                        <option>Institutional Entity</option>
                        <option>Registered Family Office</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <Target size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Anticipated Ticket Size</label>
                    <input type="text" placeholder="USD $1.0M+" className="w-full bg-[#F8F8F7] border border-gray-100 rounded-2xl py-5 lg:py-6 px-6 lg:px-8 text-[#1A1A1A] font-black text-xs lg:text-sm outline-none placeholder-gray-300" />
                  </div>
                  <button className="w-full bg-[#1A1A1A] text-white font-black py-7 lg:py-9 rounded-2xl lg:rounded-3xl uppercase tracking-[0.5em] text-[10px] lg:text-[11px] transition-all hover:bg-[#B6AE9F] shadow-2xl active:scale-95 btn-premium">
                    Authenticate & View Offerings
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="text-center py-20 lg:py-32">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="w-12 h-px bg-[#B6AE9F]"></div>
            <span className="text-[12px] font-black text-[#B6AE9F] uppercase tracking-[0.6em]">World-Class Mandates</span>
            <div className="w-12 h-px bg-[#B6AE9F]"></div>
          </div>
          <h2 className="text-[#1A1A1A] tracking-tighter mb-16 leading-none">Capital Efficiency <br />Across All Hubs.</h2>
          <div className="bg-[#F8F8F7] rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-24 border border-gray-100 relative overflow-hidden">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
                {[
                  { label: 'Managed Capital', val: '$12.5B' },
                  { label: 'Active Projects', val: '140+' },
                  { label: 'Strategic Hubs', val: '24' },
                  { label: 'Investor ROI', val: '14.2%' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-3xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter mb-3 group-hover:text-[#B6AE9F] transition-colors">{stat.val}</div>
                    <div className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Investment;
