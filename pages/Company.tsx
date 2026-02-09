
import React from 'react';
import { milestones } from '../data';
import { Award, Globe, Heart, Users } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center mb-24 md:mb-32">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 mb-5 text-[10px] font-black text-[#B6AE9F] bg-[#B6AE9F]/10 border border-[#B6AE9F]/30 rounded-full uppercase tracking-widest">
              Our Journey
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-[#111] tracking-tighter">Legacy Of Excellence</h1>
            <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-medium">
              LuxeEstate was born from a vision to redefine the global real estate landscape. What started as a small boutique agency has evolved into an international powerhouse, driven by integrity, innovation, and an unwavering commitment to our clients.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: <Award size={20} className="text-[#B6AE9F]" />, label: 'Awards', val: '45+' },
                { icon: <Globe size={20} className="text-[#B6AE9F]" />, label: 'Countries', val: '24' },
                { icon: <Users size={20} className="text-[#B6AE9F]" />, label: 'Clients', val: '15k+' },
                { icon: <Heart size={20} className="text-[#B6AE9F]" />, label: 'Retention', val: '94%' },
              ].map((stat, i) => (
                <div key={i} className="p-6 md:p-8 bg-gray-50/50 rounded-[2rem] border border-gray-100/50">
                  {stat.icon}
                  <p className="text-2xl md:text-3xl font-black text-[#111] mt-3 tracking-tighter">{stat.val}</p>
                  <p className="text-[9px] md:text-[10px] text-gray-400 font-black uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Company Office" />
            </div>
          </div>
        </div>

        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-black text-[#111] tracking-tighter uppercase">Journey Milestones</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-32">
          {milestones.map((m, i) => (
            <div key={i} className="relative p-6 md:p-8 break-words h-auto: h-full min-h-fit overflow-hidden text-base md:text-lg  bg-white border border-gray-100 rounded-[2.5rem] depth-1 floating-effect">
              <span className="text-[#B6AE9F] font-black text-3xl md:text-4xl mb-4 block opacity-15">{m.year}</span>
              <h4 className="text-lg md:text-xl font-black mb-2 text-[#111] tracking-tight leading-tight">{m.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#B6AE9F]/10 p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] border border-[#B6AE9F]/20 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-[#111] tracking-tighter uppercase">Strategic Partners</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            We collaborate with world-renowned architects, legal firms, and financial institutions to ensure every aspect of your real estate journey is supported by top-tier expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 grayscale opacity-30 hover:opacity-100 transition-all duration-1000">
             <div className="text-xl md:text-3xl font-black tracking-tighter text-[#111] italic">ARCHI-STUDIO</div>
             <div className="text-xl md:text-3xl font-black tracking-tighter text-[#111] italic">GLOBAL BANK</div>
             <div className="text-xl md:text-3xl font-black tracking-tighter text-[#111] italic">LUXE-LEGAL</div>
             <div className="text-xl md:text-3xl font-black tracking-tighter text-[#111] italic">SECURE-ESCROW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
