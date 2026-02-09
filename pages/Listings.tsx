
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data';
import { Search, ChevronDown, X } from 'lucide-react';

const Listings: React.FC = () => {
  const [filterType, setFilterType] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce effect: updates searchQuery 300ms after the last keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const filteredProperties = properties.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const clearSearch = () => {
    setInputValue('');
  };

  const resetTerminal = () => {
    setFilterType('All');
    setInputValue('');
  };

  return (
    <div className="pt-32 lg:pt-48 pb-24 lg:pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-12 lg:mb-20 max-w-4xl animate-reveal">
          <span className="text-[10px] lg:text-[11px] font-black text-[#B6AE9F] uppercase tracking-[0.4em] lg:tracking-[0.6em] mb-4 lg:mb-5 block">International Portfolio</span>
          <h1 className="text-[#1A1A1A] tracking-tighter">Asset Hub.</h1>
          <p className="text-gray-400 font-medium text-lg lg:text-xl max-w-2xl leading-relaxed">Access the world's most architectural assets through our unified international mandate network.</p>
        </div>

        {/* Console Console - Mobile Stacked */}
        <div className="bg-[#F8F8F7] p-4 lg:p-6 rounded-2xl shadow-sm mb-16 lg:mb-24 flex flex-col lg:flex-row items-center gap-4 lg:gap-5 justify-between border border-gray-100 ambient-depth">
          <div className="flex items-center bg-white px-6 lg:px-8 py-4 lg:py-5 rounded-xl flex-1 w-full lg:max-w-2xl border border-gray-200 group shadow-inner relative">
            <Search className="text-[#B6AE9F] mr-4 lg:mr-5 shrink-0" size={20} lg:size={24} strokeWidth={3} />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="bg-transparent outline-none w-full font-black text-sm text-[#1A1A1A] placeholder-gray-300 tracking-tight pr-8"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <button 
                onClick={clearSearch}
                className="absolute right-6 text-gray-300 hover:text-[#B6AE9F] transition-colors duration-200"
                aria-label="Clear search"
              >
                <X size={18} strokeWidth={3} />
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {['All', 'Villa', 'Mansion', 'Penthouse', 'Apartment'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-[9px] lg:text-[10px] font-black uppercase tracking-[0.1em] lg:tracking-[0.2em] transition-all whitespace-nowrap ${
                  filterType === type 
                  ? 'bg-[#1A1A1A] text-white shadow-xl translate-y-[-2px]' 
                  : 'bg-white text-gray-400 border border-gray-200 hover:text-[#B6AE9F]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-3 lg:gap-4 text-[#1A1A1A] font-black text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] px-8 lg:px-10 py-4 lg:py-5 rounded-xl border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all w-full lg:w-auto justify-center group shadow-md active:scale-95">
            <span>Filter</span>
            <ChevronDown size={18} strokeWidth={4} className="group-hover:rotate-180 transition-transform" />
          </button>
        </div>

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 lg:py-56 bg-[#F8F8F7] rounded-[2.5rem] lg:rounded-[3rem] border-4 border-dashed border-gray-100 px-6">
            <Search size={48} lg:size={64} className="text-gray-200 mx-auto mb-6 lg:mb-8" strokeWidth={1} />
            <h3 className="text-[#1A1A1A] tracking-tighter normal-case font-black mb-4 uppercase text-2xl lg:text-3xl">Asset Not Found.</h3>
            <p className="text-gray-400 font-medium max-w-lg mx-auto text-base lg:text-lg leading-relaxed mb-8 lg:mb-12">Please refine your search criteria or engage our senior partners for off-market access to the global vault.</p>
            <button 
              onClick={resetTerminal}
              className="text-[#B6AE9F] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[10px] lg:text-xs hover:underline underline-offset-[12px] decoration-2 transition-all"
            >
              Reset Terminal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
