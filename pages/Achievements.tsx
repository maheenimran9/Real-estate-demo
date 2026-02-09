
import React from 'react';
import { awards } from '../data';
import { Award as AwardIcon, Star, Target, ShieldCheck } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="pt-48 pb-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-32 max-w-4xl animate-reveal">
          <span className="text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] mb-5 block">Company Excellence</span>
          <h1 className="text-[#1A1A1A] tracking-tighter mb-8">Achievements.</h1>
          <p className="text-gray-400 font-medium text-xl lg:text-2xl max-w-2xl leading-relaxed">
            Our commitment to architectural integrity and fiduciary excellence has earned us recognition from the world's most prestigious institutions.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-40">
          {[
            { icon: <Star />, val: '45+', label: 'Global Awards' },
            { icon: <Target />, val: '$12B+', label: 'Managed Assets' },
            { icon: <ShieldCheck />, val: '98%', label: 'Retention Rate' },
            { icon: <AwardIcon />, val: '20+', label: 'Years Excellence' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#F8F8F7] rounded-2xl flex items-center justify-center text-[#B6AE9F] mb-6 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-[#1A1A1A] tracking-tighter mb-2">{stat.val}</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards & Recognitions Section */}
        <section className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] mb-4 block">Institutional Recognition</span>
              <h2 className="text-[#1A1A1A] tracking-tighter mb-0">Awards & <br />Recognitions.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {awards.map((award) => (
              <div key={award.id} className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 ambient-depth hover-lift flex flex-col">
                <div className="relative aspect-video overflow-hidden shrink-0">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                  />
                  {/* Scrim for text legibility */}
                  <div className="absolute inset-0 scrim-bottom opacity-80"></div>
                  
                  <div className="absolute bottom-10 left-10">
                    <span className="bg-[#B6AE9F] px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                      {award.year} Laureate
                    </span>
                  </div>
                </div>
                
                <div className="p-12 flex-grow flex flex-col">
                  <h3 className="text-[#1A1A1A] tracking-tighter normal-case font-black mb-4 text-3xl leading-tight">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#B6AE9F]">
                      <AwardIcon size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Awarding Body</span>
                      <span className="text-lg font-bold text-[#1A1A1A] tracking-tight">{award.body}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Impact CTA */}
        <section className="mt-40 bg-[#1A1A1A] p-20 lg:p-32 rounded-[5rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B6AE9F]/10 blur-[150px] rounded-full"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-white tracking-tighter mb-12 leading-none uppercase">A Legacy of <br /><span className="text-[#B6AE9F]">Trust.</span></h2>
            <p className="text-white/40 text-xl lg:text-2xl font-medium leading-relaxed mb-16">
              Our accolades are more than just trophies; they are a testament to the enduring partnerships we build with our global clientele.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button className="bg-[#B6AE9F] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.5em] text-[11px] hover:bg-white hover:text-[#1A1A1A] transition-all shadow-2xl shadow-[#B6AE9F]/20 active:scale-95">
                Our Heritage
              </button>
              <button className="border-2 border-white/20 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.5em] text-[11px] hover:bg-white hover:text-[#1A1A1A] transition-all active:scale-95">
                Contact Advisors
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;
