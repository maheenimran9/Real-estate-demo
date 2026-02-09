import React from 'react';
import { developments } from '../data';
import { Calendar, Building, ArrowRight, Download } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-5 text-[10px] font-black text-[#B6AE9F] bg-[#B6AE9F]/10 border border-[#B6AE9F]/30 rounded-full uppercase tracking-widest">
            Future Horizons
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 text-[#111] tracking-tighter">Luxury Developments</h1>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">Exclusive early-access opportunities to the world's most anticipated architectural marvels.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {developments.map((project) => (
            <div key={project.id} className="group relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl floating-effect">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={project.name} />
              </div>
              
              {/* FIXED: Darker Gradient Overlay for 100% Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                <div className="flex justify-between items-end gap-6">
                  <div className="w-full">
                    <span className="inline-block px-3 py-1 bg-[#B6AE9F] rounded-full text-[9px] font-black mb-4 uppercase tracking-widest text-white shadow-sm">
                      {project.status}
                    </span>
                    
                    {/* FIXED: Added Drop Shadow and stronger white contrast */}
                    <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight text-white drop-shadow-xl">
                      {project.name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/90">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-[#B6AE9F]" />
                        <span className="text-sm font-bold uppercase tracking-widest">{project.delivery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building size={18} className="text-[#B6AE9F]" />
                        <span className="text-sm font-bold uppercase tracking-widest">Mixed-Use</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="shrink-0 bg-white text-[#111] w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center hover:bg-[#B6AE9F] hover:text-white transition-all transform hover:rotate-45 shadow-lg group">
                    <ArrowRight size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section (Responsive Fix) */}
        <div className="mt-20 md:mt-32 bg-gray-50/50 p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] border border-gray-100/50 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#111] tracking-tighter uppercase">Download Dossier</h2>
            <p className="text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-medium">
              Get the full dossier on our upcoming developments, including floor plans, material palettes, and investment projections.
            </p>
            <button className="flex items-center gap-4 bg-[#111] text-white px-10 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-widest hover:bg-[#B6AE9F] transition-all shadow-xl">
              <Download size={22} />
              <span>Download Brochures</span>
            </button>
          </div>
          <div className="hidden md:grid lg:w-1/3 grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=200',
                'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=200'
              ].map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-white depth-1 hover:scale-105 transition-transform duration-500 aspect-square">
                   <img src={img} className="w-full h-full object-cover" alt="Perspective" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;