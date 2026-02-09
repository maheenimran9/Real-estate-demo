
import React from 'react';
import { Mail, Phone, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <span className="inline-block px-3 py-1 mb-5 text-[10px] font-black text-[#B6AE9F] bg-[#B6AE9F]/10 border border-[#B6AE9F]/30 rounded-full uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-[#111] tracking-tighter">Discuss Your Vision.</h1>
            <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed mb-10 md:mb-12">
              Our advisors are available around the clock to support your international real estate needs. Whether you're looking to buy, sell, or manage, we are here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="p-8 bg-gray-50/50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#B6AE9F] shadow-sm mb-6">
                  <MessageSquare size={20} />
                </div>
                <h4 className="font-black text-lg md:text-xl mb-2 text-[#111] tracking-tight">Live Hub</h4>
                <p className="text-sm md:text-base text-gray-400 mb-4 font-medium">Chat with our online advisors for immediate assistance.</p>
                <button className="text-[#B6AE9F] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Start Chat <Globe size={14} />
                </button>
              </div>
              <div className="p-8 bg-gray-50/50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#B6AE9F] shadow-sm mb-6">
                  <Clock size={20} />
                </div>
                <h4 className="font-black text-lg md:text-xl mb-2 text-[#111] tracking-tight">Global Availability</h4>
                <p className="text-sm md:text-base text-gray-400 font-medium">24/7 International Desk</p>
                <p className="text-sm md:text-base text-gray-400 font-medium">Multilingual Support</p>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#B6AE9F]/10 rounded-full flex items-center justify-center text-[#B6AE9F]">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-gray-300 text-[10px] uppercase font-black tracking-widest">Phone</span>
                  <p className="text-lg md:text-2xl font-black text-[#111] tracking-tighter">+1 (555) Luxe-Est</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#B6AE9F]/10 rounded-full flex items-center justify-center text-[#B6AE9F]">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-gray-300 text-[10px] uppercase font-black tracking-widest">Email</span>
                  <p className="text-lg md:text-2xl font-black text-[#111] tracking-tighter">inquiry@luxeestate.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl shadow-gray-200 rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-[#111] tracking-tighter">Direct Inquiry</h3>
            <form className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] py-4 px-6 outline-none focus:ring-2 focus:ring-[#B6AE9F] transition-all font-bold text-sm md:text-base text-[#111] placeholder-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] py-4 px-6 outline-none focus:ring-2 focus:ring-[#B6AE9F] transition-all font-bold text-sm md:text-base text-[#111] placeholder-gray-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] py-4 px-6 outline-none focus:ring-2 focus:ring-[#B6AE9F] transition-all font-bold text-sm md:text-base text-[#111] placeholder-gray-300" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] py-4 px-6 outline-none focus:ring-2 focus:ring-[#B6AE9F] appearance-none font-bold text-sm md:text-base text-[#111]">
                  <option>Property Acquisition</option>
                  <option>Listing My Property</option>
                  <option>Portfolio Management</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Message</label>
                <textarea rows={5} className="w-full bg-gray-50/50 border border-gray-100 rounded-[1.2rem] md:rounded-[1.5rem] py-4 px-6 outline-none focus:ring-2 focus:ring-[#B6AE9F] transition-all font-bold text-sm md:text-base text-[#111] placeholder-gray-300 resize-none"></textarea>
              </div>
              <button className="w-full bg-[#111] hover:bg-[#B6AE9F] text-white font-black py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl transition-all text-sm md:text-base uppercase tracking-widest">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
