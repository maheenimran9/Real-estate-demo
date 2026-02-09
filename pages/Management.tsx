
import React from 'react';
import { Key, UserCheck, ShieldCheck, PieChart, PenTool, Zap } from 'lucide-react';

const Management: React.FC = () => {
  const features = [
    { icon: <UserCheck size={20} />, title: 'Tenant Screening', desc: 'Rigorous vetting process ensuring high-quality residency.' },
    { icon: <ShieldCheck size={20} />, title: 'Asset Upkeep', desc: '24/7 dedicated support for all property maintenance.' },
    { icon: <PieChart size={20} />, title: 'Fiscal Reporting', desc: 'Monthly performance analysis of your global assets.' },
    { icon: <Zap size={20} />, title: 'Yield Growth', desc: 'Active market monitoring to maximize rental returns.' },
  ];

  return (
    <div className="pt-32 pb-24 md:pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 mb-5 text-[10px] font-black text-[#B6AE9F] bg-[#B6AE9F]/10 border border-[#B6AE9F]/30 rounded-full uppercase tracking-widest">
              Passive Wealth
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 text-[#111] tracking-tighter">Portfolio Management</h1>
            <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-medium">
              We treat your properties like our own. Our end-to-end management solution allows investors to enjoy passive income while we handle the complexities of operations, legalities, and tenant relations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[#B6AE9F] shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-black text-lg text-[#111] mb-1 tracking-tight">{f.title}</h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.pexels.com/photos/19130094/pexels-photo-19130094.jpeg" className="w-full h-full object-cover" alt="Management" />
            </div>
            <div className="absolute -bottom-8 md:-bottom-12 -left-4 md:-left-12 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-center gap-5 md:gap-6 floating-effect">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#111] rounded-2xl flex items-center justify-center text-white shadow-xl">
                <PenTool size={20} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">Managed Assets</p>
                <p className="text-xl md:text-3xl font-black text-[#111] tracking-tighter">$12.5B+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111] rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B6AE9F]/10 blur-[100px] rounded-full"></div>
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter uppercase">Rental Program</h2>
            <p className="text-white/40 text-sm md:text-lg font-medium tracking-tight">Customized strategies for short-term luxury rentals and long-term residential leases.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
            {[
              { title: 'Dental Implants', desc: 'High-quality, long-lasting implants to restore your natural smile effectively.' },
              { title: 'Advanced Lab', desc: 'Direct on-site lab access for perfect fittings and faster treatment results.' },
              { title: 'Emergency Care', desc: 'Immediate support for dental pain, accidents, and urgent root canal needs.' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 p-6 md:p-10 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all flex flex-col h-auto min-h-fit"
              >
                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight text-white leading-tight break-words">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium break-words">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
