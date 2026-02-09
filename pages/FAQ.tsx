
import React, { useState } from 'react';
import { faqs } from '../data';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 md:pt-56 pb-24 md:pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[10px] font-black text-[#B6AE9F] uppercase tracking-[0.3em] mb-4 block">Knowledge Base</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-[#111] tracking-tighter">Support & Insights.</h1>
            <p className="text-base md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">Expert answers for buying, selling, and managing global property assets.</p>
          </div>

          <div className="bg-gray-50/50 p-2 md:p-3 rounded-[2rem] md:rounded-[3rem] shadow-sm mb-12 md:mb-16 flex items-center gap-2 border border-gray-100/50">
             <div className="pl-6 pr-4 text-[#B6AE9F]">
                <Search size={22} strokeWidth={3} />
             </div>
             <input type="text" placeholder="Search knowledge base..." className="w-full py-4 md:py-5 outline-none text-[#111] font-bold text-base md:text-lg placeholder-gray-300 bg-transparent" />
          </div>

          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white rounded-[1.8rem] md:rounded-[2.5rem] border transition-all duration-500 ${openIndex === i ? 'border-[#B6AE9F] shadow-xl' : 'border-gray-100 shadow-sm hover:border-[#B6AE9F]/30'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 md:p-10 text-left flex justify-between items-center group"
                >
                  <span className={`font-black text-lg md:text-xl tracking-tight transition-colors ${openIndex === i ? 'text-[#B6AE9F]' : 'text-[#111]'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#B6AE9F] text-white rotate-180' : 'bg-gray-50 text-[#B6AE9F] group-hover:bg-gray-100'}`}>
                    {openIndex === i ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 md:px-10 pb-8 md:pb-12 text-gray-400 font-medium text-sm md:text-lg leading-relaxed border-t border-gray-50 pt-6 md:pt-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-32 p-10 md:p-20 bg-[#111] rounded-[3rem] md:rounded-[5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#B6AE9F]/10 blur-[100px] rounded-full"></div>
             <div className="flex items-center gap-8 md:gap-10 relative z-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#B6AE9F] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-white shadow-2xl">
                   <HelpCircle size={32} md:size={48} strokeWidth={1.5} />
                </div>
                <div>
                   <h4 className="text-xl md:text-3xl font-black mb-1 md:mb-2 tracking-tighter text-white">Need deep expertise?</h4>
                   <p className="text-white/40 font-medium text-sm md:text-lg">Our specialized legal and financial teams are here to help.</p>
                </div>
             </div>
             <button className="bg-[#B6AE9F] text-white px-8 md:px-12 py-4 md:py-6 rounded-[1.2rem] md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#111] transition-all shadow-xl relative z-10">
                Speak to Advisor
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
