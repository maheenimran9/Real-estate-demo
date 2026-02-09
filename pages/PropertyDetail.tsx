
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties, agents } from '../data';
import { BedDouble, Bath, Square, MapPin, Share2, Heart, Phone, Mail, ArrowLeft, ArrowRight, Play, Calculator, X, Shield, Globe, Award } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const agent = agents[0];

  const [downPayment, setDownPayment] = useState(property?.price ? property.price * 0.25 : 0);
  const [interestRate, setInterestRate] = useState(4.25);
  const [term, setTerm] = useState(25);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!property) return <div className="pt-48 text-center text-4xl font-black text-[#1A1A1A]">ASSET NOT FOUND</div>;

  const monthlyPayment = (() => {
    const p = property.price - downPayment;
    const r = (interestRate / 100) / 12;
    const n = term * 12;
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  })();

  return (
    <div className="pt-24 lg:pt-40 pb-20 lg:pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-16 lg:mb-24 gap-6">
          <Link to="/listings" className="flex items-center gap-4 lg:gap-6 text-[11px] lg:text-[12px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[#1A1A1A] hover:text-[#B6AE9F] transition-all group">
            <ArrowLeft size={20} lg:size={24} strokeWidth={3} className="group-hover:translate-x-[-8px] transition-transform" />
            Portfolio Hub
          </Link>
          <div className="flex gap-4 lg:gap-6">
            <button className="p-4 lg:p-5 bg-[#F8F8F7] rounded-2xl hover:bg-[#1A1A1A] hover:text-white transition-all shadow-premium">
              <Share2 size={20} lg:size={24} />
            </button>
            <button className="p-4 lg:p-5 bg-[#F8F8F7] rounded-2xl hover:bg-[#B6AE9F] hover:text-white transition-all shadow-premium">
              <Heart size={20} lg:size={24} />
            </button>
          </div>
        </div>

        {/* Title and Price Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-16 lg:mb-24">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-8 lg:mb-12">
              <span className="bg-[#1A1A1A] text-white text-[9px] lg:text-[11px] font-black px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl uppercase tracking-[0.4em] lg:tracking-[0.5em]">{property.status}</span>
              <span className="bg-[#B6AE9F]/10 text-[#B6AE9F] text-[9px] lg:text-[11px] font-black px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl uppercase tracking-[0.4em] lg:tracking-[0.5em] border border-[#B6AE9F]/20">{property.type}</span>
            </div>
            <h1 className="text-[#1A1A1A] tracking-tighter mb-6 lg:mb-10 uppercase leading-[0.9] font-black">{property.title}</h1>
            <div className="flex items-center text-gray-400 font-bold text-xl lg:text-2xl">
              <MapPin size={24} lg:size={32} className="mr-4 lg:mr-6 text-[#B6AE9F]" strokeWidth={2.5} />
              <span className="tracking-tight">Elite International Jurisdiction • Signature Hub</span>
            </div>
          </div>
          <div className="lg:text-right w-full lg:w-auto">
            <div className="text-5xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-2 lg:mb-4 leading-none">
              ${property.price.toLocaleString()}
            </div>
            <p className="text-[11px] lg:text-[13px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] lg:tracking-[0.8em]">Estimated Market Value</p>
          </div>
        </div>

        {/* Panoramic 16:9 Interactive Gallery - Responsive Stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 mb-24 lg:mb-40">
          <div className="lg:col-span-2 aspect-video overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl relative group cursor-pointer ambient-depth" onClick={() => setIsPlayingVideo(true)}>
            <img src={property.image} className="w-full h-full object-cover transition-transform duration-[3.5s] lg:group-hover:scale-105" alt="Main Aspect" />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 lg:w-32 lg:h-32 bg-[#B6AE9F] rounded-full flex items-center justify-center text-white shadow-2xl transform scale-90 lg:group-hover:scale-100 transition-transform">
                <Play size={40} lg:size={56} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12">
              <span className="bg-white/95 backdrop-blur-2xl px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl text-[10px] lg:text-[12px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[#1A1A1A] shadow-2xl">Access Video Tour</span>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 lg:gap-12">
            {(property.gallery.length > 0 ? property.gallery : [property.image, property.image, property.image, property.image]).slice(0, 4).map((img, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] shadow-xl">
                <img src={img} className="w-full h-full object-cover" alt={`View ${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-40 items-start">
          <div className="lg:col-span-2">
            {/* Spec Console - Responsive Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 p-10 lg:p-16 bg-[#F8F8F7] rounded-[2.5rem] lg:rounded-[4rem] mb-20 lg:mb-32 border border-gray-100 shadow-inner">
              <div className="text-center sm:border-r border-gray-200 lg:px-10">
                <BedDouble className="mx-auto mb-6 lg:mb-8 text-[#B6AE9F]" size={36} lg:size={48} strokeWidth={1.5} />
                <span className="block text-4xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter mb-2">{property.beds}</span>
                <span className="text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] lg:tracking-[0.5em]">Suites</span>
              </div>
              <div className="text-center sm:border-r border-gray-200 lg:px-10">
                <Bath className="mx-auto mb-6 lg:mb-8 text-[#B6AE9F]" size={36} lg:size={48} strokeWidth={1.5} />
                <span className="block text-4xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter mb-2">{property.baths}</span>
                <span className="text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] lg:tracking-[0.5em]">Bathrooms</span>
              </div>
              <div className="text-center lg:px-10">
                <Square className="mx-auto mb-6 lg:mb-8 text-[#B6AE9F]" size={36} lg:size={48} strokeWidth={1.5} />
                <span className="block text-4xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter mb-2">{property.sqft.toLocaleString()}</span>
                <span className="text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] lg:tracking-[0.5em]">Footprint ft²</span>
              </div>
            </div>

            {/* Narrative - Readable on all sizes */}
            <div className="mb-20 lg:mb-32">
              <h3 className="mb-10 lg:mb-16 text-[#1A1A1A] tracking-tighter normal-case font-black border-l-[8px] lg:border-l-[12px] border-[#B6AE9F] pl-6 lg:pl-12 text-3xl lg:text-4xl">Asset Analysis</h3>
              <p className="text-gray-500 font-medium text-lg lg:text-3xl leading-relaxed tracking-tight mb-12 lg:mb-16">
                {property.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 lg:gap-6 p-6 lg:p-8 bg-gray-50 rounded-2xl lg:rounded-3xl border border-gray-100 group transition-all">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#B6AE9F]/10 rounded-lg lg:rounded-xl flex items-center justify-center text-[#B6AE9F]">
                      <Shield size={18} lg:size={20} />
                    </div>
                    <span className="text-lg lg:text-xl font-bold text-[#1A1A1A] tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cinematic Showcase Section */}
            <section className="mb-20 lg:mb-32">
              <h3 className="mb-10 lg:mb-16 text-[#1A1A1A] tracking-tighter normal-case font-black border-l-[8px] lg:border-l-[12px] border-[#B6AE9F] pl-6 lg:pl-12 text-3xl lg:text-4xl">
                Cinematic Showcase
              </h3>
              <div className="relative aspect-video rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer bg-black ambient-depth">
                {!isPlayingVideo ? (
                  <>
                    <img 
                      src={property.image} 
                      className="w-full h-full object-cover opacity-50" 
                      alt="Film Production" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-20 h-20 lg:w-32 lg:h-32 bg-[#B6AE9F] rounded-full flex items-center justify-center text-white shadow-2xl z-10"
                      >
                        <Play size={40} lg:size={56} fill="currentColor" />
                      </button>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                    </div>
                    <div className="absolute bottom-8 lg:bottom-16 left-8 lg:left-16 text-white px-4">
                      <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[#B6AE9F] block mb-2 lg:mb-4">Exclusive Screening</span>
                      <h4 className="text-2xl lg:text-4xl font-black tracking-tighter text-white uppercase leading-none">The {property.title} Production</h4>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full">
                    <video 
                      src={property.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsPlayingVideo(false); }}
                      className="absolute top-6 lg:top-10 right-6 lg:right-10 p-4 lg:p-6 bg-white/10 backdrop-blur-2xl rounded-full text-white hover:bg-[#B6AE9F] transition-all z-20"
                    >
                      <X size={20} lg:size={24} strokeWidth={4} />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Neighborhood Intelligence - Responsive Grid */}
            <div className="mb-20 lg:mb-32 p-10 lg:p-20 bg-[#F8F8F7] rounded-[3rem] lg:rounded-[5rem] border border-gray-100">
               <h3 className="mb-10 lg:mb-16 text-[#1A1A1A] tracking-tighter normal-case font-black uppercase text-2xl lg:text-3xl">Neighborhood Intelligence</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16">
                 {[
                   { icon: <Shield />, title: 'Privacy Index', val: 'Elite Signature' },
                   { icon: <Globe />, title: 'Jurisdiction', val: 'Favorable Tier-1' },
                   { icon: <Award />, title: 'Lifestyle Hub', val: 'Ultra-Premium' },
                   { icon: <MapPin />, title: 'Accessibility', val: 'Private Transit' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 lg:gap-8 items-start">
                     <div className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center text-[#B6AE9F] shadow-sm">
                        {item.icon}
                     </div>
                     <div>
                       <span className="text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2 block">{item.title}</span>
                       <span className="text-xl lg:text-3xl font-black text-[#1A1A1A] tracking-tighter leading-tight">{item.val}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Mortgage Calculator - Mobile Stacking */}
            <div className="mb-20 lg:mb-32 p-10 lg:p-20 bg-white border border-gray-100 rounded-[3rem] lg:rounded-[5rem] shadow-premium">
              <div className="flex items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
                <Calculator className="text-[#B6AE9F]" size={36} lg:size={48} />
                <h3 className="text-[#1A1A1A] tracking-tighter normal-case font-black uppercase text-2xl lg:text-3xl">Strategic Finance Console</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12 lg:mb-16">
                <div className="space-y-10 lg:space-y-12">
                  <div>
                    <label className="block text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-widest mb-4 lg:mb-6">Equity Commitment ($)</label>
                    <input 
                      type="range" min="0" max={property.price} step="50000" 
                      value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#B6AE9F]" 
                    />
                    <div className="mt-4 lg:mt-6 text-2xl lg:text-3xl font-black text-[#1A1A1A] tracking-tight">${downPayment.toLocaleString()}</div>
                  </div>
                  <div>
                    <label className="block text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-widest mb-4 lg:mb-6">Strategic Rate (%)</label>
                    <input 
                      type="range" min="1" max="10" step="0.05" 
                      value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#B6AE9F]" 
                    />
                    <div className="mt-4 lg:mt-6 text-2xl lg:text-3xl font-black text-[#1A1A1A] tracking-tight">{interestRate}%</div>
                  </div>
                </div>
                <div className="bg-[#F8F8F7] p-10 lg:p-16 rounded-[2.5rem] lg:rounded-[3.5rem] text-center flex flex-col justify-center items-center shadow-inner">
                  <span className="text-[10px] lg:text-[12px] font-black text-gray-400 uppercase tracking-widest mb-4 lg:mb-6">Estimated Monthly Liability</span>
                  <div className="text-5xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-4 leading-none">${Math.round(monthlyPayment).toLocaleString()}</div>
                  <p className="text-xs lg:text-sm text-gray-400 font-medium italic">Based on a bespoke {term}-year wealth allocation plan.</p>
                </div>
              </div>
              <button className="w-full bg-[#1A1A1A] text-white py-6 lg:py-10 rounded-2xl lg:rounded-3xl font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[11px] lg:text-[13px] hover:bg-[#B6AE9F] transition-all shadow-2xl active:scale-95 btn-premium">
                Engage Finance Partner
              </button>
            </div>
          </div>

          {/* Sidebar - Stays Sticky on Large, Stacks on Mobile */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-16 lg:space-y-24">
              <div className="bg-[#1A1A1A] p-10 lg:p-20 rounded-[3rem] lg:rounded-[5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-[#B6AE9F]/10 blur-[100px] lg:blur-[150px] rounded-full"></div>
                <h4 className="mb-10 lg:mb-16 tracking-tighter text-white uppercase text-3xl lg:text-4xl font-black leading-[0.85]">Consult <br /><span className="text-[#B6AE9F]">Advisor</span></h4>
                <div className="flex items-center gap-6 lg:gap-8 mb-10 lg:mb-16 p-6 lg:p-8 bg-white/5 rounded-[2rem] lg:rounded-[2.5rem] border border-white/10">
                  <img src={agent.image} className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl object-cover grayscale brightness-125" alt={agent.name} />
                  <div>
                    <h5 className="font-black text-xl lg:text-2xl text-white normal-case mb-1 tracking-tighter">{agent.name}</h5>
                    <span className="text-[#B6AE9F] text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em]">{agent.role} Hub</span>
                  </div>
                </div>
                
                <form className="space-y-6 lg:space-y-8">
                  <div className="space-y-2 lg:space-y-3">
                    <label className="text-[9px] lg:text-[10px] font-black text-white/30 uppercase tracking-widest">Client Identity</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl py-5 lg:py-7 px-6 lg:px-10 text-white text-base lg:text-lg outline-none focus:ring-2 focus:ring-[#B6AE9F] transition-all font-bold placeholder-white/10" />
                  </div>
                  <div className="space-y-2 lg:space-y-3">
                    <label className="text-[9px] lg:text-[10px] font-black text-white/30 uppercase tracking-widest">Corporate Access</label>
                    <input type="email" placeholder="Professional Domain" className="w-full bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl py-5 lg:py-7 px-6 lg:px-10 text-white text-base lg:text-lg outline-none focus:ring-2 focus:ring-[#B6AE9F] transition-all font-bold placeholder-white/10" />
                  </div>
                  <button className="w-full bg-[#B6AE9F] hover:bg-white hover:text-[#1A1A1A] text-white font-black py-7 lg:py-9 rounded-2xl lg:rounded-3xl transition-all uppercase text-[10px] lg:text-[12px] tracking-[0.5em] lg:tracking-[0.7em] shadow-2xl active:scale-95 btn-premium">
                    Request Dossier
                  </button>
                </form>
              </div>

              {/* Download Brochure CTA */}
              <div className="p-10 lg:p-16 bg-[#F8F8F7] rounded-[3rem] lg:rounded-[4rem] border border-gray-100 flex flex-col items-center text-center">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl lg:rounded-3xl flex items-center justify-center text-[#B6AE9F] mb-8 lg:mb-10 shadow-premium">
                    <Globe size={32} lg:size={40} />
                 </div>
                 <h4 className="text-xl lg:text-2xl font-black text-[#1A1A1A] mb-4 tracking-tighter">Full Asset Dossier</h4>
                 <p className="text-gray-400 font-medium mb-8 lg:mb-10 text-base lg:text-lg leading-relaxed">Access structural blue prints, high-res media, and jurisdictional insights.</p>
                 <button className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[#B6AE9F] hover:text-[#1A1A1A] flex items-center gap-3 lg:gap-4 transition-all">
                   Download Brochure <ArrowRight size={18} lg:size={20} />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
