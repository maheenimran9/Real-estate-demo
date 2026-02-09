
import React from 'react';
import { Calendar, Video, Phone, Users, CheckCircle } from 'lucide-react';

const Consultation: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-5 text-[10px] font-black text-[#B6AE9F] bg-[#B6AE9F]/10 border border-[#B6AE9F]/30 rounded-full uppercase tracking-widest">
              Personal Advisory
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-[#111] tracking-tighter">Your Strategy Session.</h1>
            <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-medium">
              Book a complimentary 30-minute consultation with one of our senior portfolio advisors to discuss your global real estate objectives.
            </p>
            
            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
               {[
                 { icon: <Video size={20} className="text-[#B6AE9F]" />, text: 'Private Video Conference' },
                 { icon: <Phone size={20} className="text-[#B6AE9F]" />, text: 'Dedicated Phone Advisor' },
                 { icon: <Users size={20} className="text-[#B6AE9F]" />, text: 'Portfolio Review' },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-[#111] font-black text-base md:text-xl tracking-tight transition-all hover:translate-x-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100/50">{item.icon}</div>
                    {item.text}
                 </div>
               ))}
            </div>

            <div className="p-8 md:p-10 bg-[#B6AE9F]/5 rounded-[2rem] md:rounded-[3rem] border border-[#B6AE9F]/10">
               <div className="flex items-center gap-4 mb-4">
                  <CheckCircle className="text-[#B6AE9F]" size={20} />
                  <span className="font-black text-[#111] uppercase tracking-widest text-[10px]">No Obligation</span>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed font-medium">Our consultations are designed to provide institutional value and market insight, regardless of your immediate intent.</p>
            </div>
          </div>

          <div className="bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] md:rounded-[4.5rem] p-8 md:p-14 border border-gray-100">
             <div className="flex items-center gap-4 mb-10">
                <Calendar className="text-[#B6AE9F]" size={28} />
                <h3 className="text-2xl md:text-3xl font-black text-[#111] tracking-tighter uppercase">Schedule Now</h3>
             </div>
             
             <form className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">First Name</label>
                      <input type="text" className="w-full p-4 md:p-5 bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] outline-none focus:ring-2 focus:ring-[#B6AE9F] font-bold text-sm md:text-base text-[#111] placeholder-gray-300" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Last Name</label>
                      <input type="text" className="w-full p-4 md:p-5 bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] outline-none focus:ring-2 focus:ring-[#B6AE9F] font-bold text-sm md:text-base text-[#111] placeholder-gray-300" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Email Address</label>
                   <input type="email" className="w-full p-4 md:p-5 bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] outline-none focus:ring-2 focus:ring-[#B6AE9F] font-bold text-sm md:text-base text-[#111] placeholder-gray-300" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Select Date</label>
                      <input type="date" className="w-full p-4 md:p-5 bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] outline-none focus:ring-2 focus:ring-[#B6AE9F] font-bold text-sm md:text-base text-[#111]" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Timezone</label>
                      <select className="w-full p-4 md:p-5 bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] outline-none focus:ring-2 focus:ring-[#B6AE9F] appearance-none font-bold text-sm md:text-base text-[#111]">
                         <option>GMT / London</option>
                         <option>EST / New York</option>
                         <option>SGT / Singapore</option>
                         <option>GST / Dubai</option>
                      </select>
                   </div>
                </div>
                <button className="w-full bg-[#111] hover:bg-[#B6AE9F] text-white font-black py-5 md:py-6 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl transition-all text-sm md:text-base uppercase tracking-widest">
                   Confirm Session
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
