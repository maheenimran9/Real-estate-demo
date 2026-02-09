import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Square, ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 ambient-depth hover-lift h-full flex flex-col">
      {/* Cinematic 16:9 Visual Container */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
        />
        
        {/* CRITICAL: Scrim for 100% white text legibility */}
        <div className="absolute inset-0 scrim-bottom opacity-100 transition-opacity duration-700"></div>
        
        {/* Status Badges */}
        <div className="absolute top-8 left-8 flex gap-3 z-10">
          <span className="bg-white/95 px-4 py-2 rounded-xl text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest shadow-sm">
            {property.type}
          </span>
          <span className="bg-[#B6AE9F] px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
            {property.status}
          </span>
        </div>

        {/* Pricing Info Overlay */}
        <div className="absolute bottom-8 left-10 right-10 flex justify-between items-end text-white z-10">
          <div className="max-w-[70%]">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B6AE9F] mb-2 drop-shadow-md">Valuation Tier</p>
            <p className="text-3xl font-black tracking-tighter leading-none drop-shadow-lg">
              ${property.price.toLocaleString()}
              {property.status === 'For Rent' && <span className="text-sm font-medium opacity-60 ml-1">/mo</span>}
            </p>
          </div>
          <div className="bg-[#B6AE9F] p-4 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl">
            <ArrowUpRight size={24} strokeWidth={3} />
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-10 lg:p-12 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <MapPin size={14} className="text-[#B6AE9F]" />
          <span className="text-[10px] font-black uppercase tracking-widest">Global Hub • Private Mandate</span>
        </div>
        
        <Link to={`/property/${property.id}`} className="block mb-8">
          <h4 className="text-[#1A1A1A] group-hover:text-[#B6AE9F] transition-all duration-300 tracking-tight normal-case leading-snug font-black line-clamp-2 min-h-[2.8em] text-2xl">
            {property.title}
          </h4>
        </Link>
        
        {/* Specification Icons */}
        <div className="grid grid-cols-3 gap-1 p-6 bg-[#F8F8F7] rounded-[2rem] border border-gray-100 mt-auto shadow-inner">
          <div className="flex flex-col items-center border-r border-gray-200">
            <BedDouble size={22} className="text-[#B6AE9F] mb-2" />
            <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">{property.beds} Bed</span>
          </div>
          <div className="flex flex-col items-center border-r border-gray-200">
            <Bath size={22} className="text-[#B6AE9F] mb-2" />
            <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">{property.baths} Bath</span>
          </div>
          <div className="flex flex-col items-center">
            <Square size={22} className="text-[#B6AE9F] mb-2" />
            <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">{property.sqft.toLocaleString()} ft²</span>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link 
            to={`/property/${property.id}`}
            className="text-[11px] font-black uppercase tracking-[0.5em] text-[#1A1A1A] hover:text-[#B6AE9F] transition-all flex items-center gap-4 group/link"
          >
            Access Asset <ArrowRight size={18} strokeWidth={4} className="group-hover/link:translate-x-3 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;