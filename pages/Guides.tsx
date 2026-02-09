
import React from 'react';
import { guides } from '../data';
import { Download, ArrowRight, BookOpen } from 'lucide-react';

const Guides: React.FC = () => {
  return (
    <div className="pt-48 pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20 max-w-4xl animate-reveal">
          <span className="text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] mb-5 block">Knowledge Hub</span>
          <h1 className="text-[#1A1A1A] tracking-tighter">Intelligence Guides.</h1>
          <p className="text-gray-400 font-medium text-xl max-w-2xl leading-relaxed">Equipping global investors with the strategic knowledge required for extraordinary asset acquisition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-32">
          {guides.map((guide) => (
            <div key={guide.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-premium flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img src={guide.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={guide.title} />
                <div className="absolute inset-0 scrim-bottom"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-[#1A1A1A] px-4 py-1.5 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">{guide.category}</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 tracking-tighter normal-case text-[#1A1A1A] leading-tight">{guide.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8">{guide.summary}</p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#B6AE9F] hover:text-[#1A1A1A] transition-all">
                    Access Guide <ArrowRight size={16} />
                  </button>
                  <div className="w-10 h-10 bg-[#F8F8F7] rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#B6AE9F] hover:text-white transition-all cursor-pointer">
                    <Download size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1A1A] p-16 md:p-32 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B6AE9F]/10 blur-[120px] rounded-full"></div>
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-[#B6AE9F] rounded-2xl flex items-center justify-center mb-10 shadow-2xl">
              <BookOpen size={32} className="text-white" />
            </div>
            <h2 className="text-white mb-8 tracking-tighter">Bespoke Research.</h2>
            <p className="text-white/40 text-xl font-medium leading-relaxed mb-10">Require jurisdictional analysis for a specific region? Our research team produces custom intelligence reports for institutional mandates.</p>
            <button className="bg-[#B6AE9F] text-white px-12 py-6 rounded-2xl btn-premium shadow-2xl active:scale-95">
              Request Report
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl transform -translate-y-10">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Research 1" />
              </div>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl translate-y-10">
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Research 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
