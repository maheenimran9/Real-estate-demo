
import React, { useState } from 'react';
import AgentCard from '../components/AgentCard';
import { agents } from '../data';
import { Search, ChevronDown, Users } from 'lucide-react';

const Agents: React.FC = () => {
  const [filterRole, setFilterRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const roles = ['All', ...Array.from(new Set(agents.map(a => a.role)))];

  const filteredAgents = agents.filter(a => {
    const matchesRole = filterRole === 'All' || a.role === filterRole;
    const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="pt-48 pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20 max-w-4xl animate-reveal">
          <span className="text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.6em] mb-5 block">Senior Council</span>
          <h1 className="text-[#1A1A1A] tracking-tighter">Advisory Hub.</h1>
          <p className="text-gray-400 font-medium text-xl max-w-2xl leading-relaxed">Connect with our elite global partners specializing in high-value asset strategy and cross-border acquisitions.</p>
        </div>

        {/* Advisory Console */}
        <div className="bg-[#F8F8F7] p-4 rounded-2xl shadow-sm mb-24 flex flex-col lg:flex-row items-center gap-5 justify-between border border-gray-100 shadow-premium">
          <div className="flex items-center bg-white px-8 py-5 rounded-xl flex-1 w-full lg:max-w-2xl border border-gray-200 group shadow-inner">
            <Search className="text-[#B6AE9F] mr-5" size={24} strokeWidth={3} />
            <input 
              type="text" 
              placeholder="Search advisors by name..." 
              className="bg-transparent outline-none w-full font-black text-sm text-[#1A1A1A] placeholder-gray-300 tracking-tight"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setFilterRole(role)}
                className={`px-8 py-4 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-sm ${
                  filterRole === role 
                  ? 'bg-[#1A1A1A] text-white shadow-xl translate-y-[-2px]' 
                  : 'bg-white text-gray-400 border border-gray-200 hover:text-[#B6AE9F]'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-4 text-[#1A1A1A] font-black text-[10px] uppercase tracking-[0.4em] px-10 py-5 rounded-xl border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all w-full lg:w-auto justify-center group shadow-md active:scale-95">
            <span>Filter</span>
            <ChevronDown size={18} strokeWidth={4} className="group-hover:rotate-180 transition-transform" />
          </button>
        </div>

        {/* Advisors Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {filteredAgents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        ) : (
          <div className="text-center py-56 bg-[#F8F8F7] rounded-[3rem] border-4 border-dashed border-gray-100">
            <Users size={64} className="text-gray-200 mx-auto mb-8" strokeWidth={1} />
            <h3 className="text-[#1A1A1A] tracking-tighter normal-case font-black mb-6 uppercase text-3xl">No Advisor Found.</h3>
            <p className="text-gray-400 font-medium max-w-lg mx-auto text-lg leading-relaxed mb-12">Our advisors may be engaged in private mandates. Please contact the global desk for a direct introduction.</p>
            <button 
              onClick={() => {setFilterRole('All'); setSearchQuery('');}}
              className="text-[#B6AE9F] font-black uppercase tracking-[0.6em] text-xs hover:underline underline-offset-[12px] decoration-2 transition-all"
            >
              Reset Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;
