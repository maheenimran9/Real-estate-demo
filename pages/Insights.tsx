
import React from 'react';
import { marketInsights } from '../data';
import { TrendingUp, FileText, ArrowUpRight } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="pt-48 pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20 max-w-4xl animate-reveal">
          <span className="text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] mb-5 block">Intelligence Bureau</span>
          <h1 className="text-[#1A1A1A] tracking-tighter">Market Insights.</h1>
          <p className="text-gray-400 font-medium text-xl max-w-2xl leading-relaxed">Actionable data and strategic analysis regarding the flow of global private capital into high-value real estate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-32">
          {marketInsights.map((insight) => (
            <div key={insight.id} className="group relative aspect-video rounded-[3rem] overflow-hidden shadow-premium">
              <img src={insight.image} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" alt={insight.title} />
              <div className="absolute inset-0 scrim-bottom"></div>
              <div className="absolute top-10 left-10 right-10 flex justify-between items-start">
                <span className="bg-[#B6AE9F] px-5 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.4em]">{insight.category}</span>
                <span className="text-[11px] font-black text-white/60 uppercase tracking-widest">{insight.date}</span>
              </div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-3xl font-black mb-4 tracking-tighter normal-case text-white leading-tight max-w-xl">{insight.title}</h3>
                <p className="text-white/60 font-medium mb-10 max-w-lg">{insight.summary}</p>
                <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.6em] text-[#B6AE9F] hover:text-white transition-all">
                  Read Analysis <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            { icon: <TrendingUp size={24} />, title: 'Quarterly Reports', desc: 'Comprehensive jurisdictional analysis and yield projections.' },
            { icon: <FileText size={24} />, title: 'Mandate Alerts', desc: 'Pre-market access notifications for institutional mandates.' },
            { icon: <TrendingUp size={24} />, title: 'Wealth Flow', desc: 'Monitoring the movement of private capital across global hubs.' }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-[#F8F8F7] rounded-[2.5rem] border border-gray-100 hover:shadow-premium transition-all">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#B6AE9F] mb-8 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-xl font-black mb-4 text-[#1A1A1A] normal-case tracking-tight">{item.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed mb-8">{item.desc}</p>
              <button className="text-[9px] font-black uppercase tracking-[0.4em] text-[#1A1A1A] hover:text-[#B6AE9F] transition-all">Explore Category</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
