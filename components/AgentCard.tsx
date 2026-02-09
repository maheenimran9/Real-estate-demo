
import React from 'react';
import { Mail, Phone, Award, ArrowRight } from 'lucide-react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-premium h-full flex flex-col">
      {/* 16:9 Rectangular Profile Perspective */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        
        {/* Protective Scrim */}
        <div className="absolute inset-0 scrim-bottom opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-[#B6AE9F] px-3 py-1.5 rounded-lg text-[9px] font-black text-white uppercase tracking-widest shadow-lg">
            Senior Advisor
          </span>
        </div>

        {/* Name and Role on Scrim - Explicit Z-Index for Readability */}
        <div className="absolute bottom-6 left-8 right-8 text-white z-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B6AE9F] mb-1">Direct Mandate</p>
          <h3 className="text-2xl font-black tracking-tighter mb-0 text-white normal-case leading-tight drop-shadow-sm">{agent.name}</h3>
          <p className="text-xs font-bold opacity-70 uppercase tracking-widest">{agent.role}</p>
        </div>
      </div>
      
      <div className="p-8 lg:p-10 flex flex-col flex-grow bg-white">
        <div className="flex items-center justify-between mb-8 p-4 bg-[#F8F8F7] rounded-2xl border border-gray-100/50">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Experience</span>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#B6AE9F]" />
              <span className="text-sm font-black text-[#1A1A1A]">{agent.experience}</span>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Availability</span>
            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Active
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <a href={`tel:${agent.phone}`} className="flex items-center gap-4 text-gray-500 hover:text-[#B6AE9F] transition-all group/link">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover/link:bg-[#B6AE9F]/10">
              <Phone size={18} className="text-[#B6AE9F]" />
            </div>
            <span className="text-sm font-bold tracking-tight">{agent.phone}</span>
          </a>
          <a href={`mailto:${agent.email}`} className="flex items-center gap-4 text-gray-500 hover:text-[#B6AE9F] transition-all group/link">
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover/link:bg-[#B6AE9F]/10">
              <Mail size={18} className="text-[#B6AE9F]" />
            </div>
            <span className="text-sm font-bold tracking-tight">Direct Email</span>
          </a>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-50">
          <button className="w-full bg-[#1A1A1A] hover:bg-[#B6AE9F] text-white font-black py-4 rounded-xl transition-all uppercase text-[9px] tracking-[0.3em] flex items-center justify-center gap-3 active:scale-95 shadow-xl">
            Book Briefing <ArrowRight size={14} strokeWidth={4} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
