
export interface Property {
  id: string;
  title: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Mansion';
  status: 'For Sale' | 'For Rent';
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  features: string[];
  gallery: string[];
  videoUrl?: string;
  virtualTourUrl?: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  experience: string;
  bio?: string;
}

export interface Guide {
  id: string;
  title: string;
  category: 'Buyer' | 'Seller' | 'Investor';
  image: string;
  summary: string;
}

export interface MarketInsight {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  quote: string;
  location: string;
  image: string;
}

export interface Development {
  id: string;
  name: string;
  image: string;
  status: string;
  delivery: string;
}

export interface Award {
  id: string;
  title: string;
  body: string;
  year: string;
  image: string;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Mixed-Use' | 'Land';
  expectedYield: string;
  minInvestment: string;
  image: string;
  summary: string;
  location: string;
}
