
import { Property, Agent, MarketInsight, Guide, ProcessStep, SuccessStory, Development, Award, InvestmentOpportunity } from './types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Azure Horizon Villa',
    type: 'Villa',
    status: 'For Sale',
    price: 4500000,
    beds: 5,
    baths: 6,
    sqft: 6500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of contemporary architecture, this villa offers panoramic views and seamless indoor-outdoor living. Built with sustainable materials and smart home technology.',
    features: ['Infinity Pool', 'Home Cinema', 'Wine Cellar', 'Private Gym', 'Smart Automation'],
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    ],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: '2',
    title: 'The Glass Pavilion',
    type: 'Mansion',
    status: 'For Sale',
    price: 12800000,
    beds: 7,
    baths: 9,
    sqft: 12000,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
    description: 'An iconic glass-fronted estate nestled in a secluded landscape. This property redefines luxury with its minimalist aesthetic and grand proportions.',
    features: ['Guest House', 'Helipad', 'Ten-car Garage', 'Olympic Pool'],
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '3',
    title: 'Metropolitan Sky Penthouse',
    type: 'Penthouse',
    status: 'For Sale',
    price: 3200000,
    beds: 3,
    baths: 3,
    sqft: 3400,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
    description: 'Breathtaking skyline views from the highest point in the city.',
    features: ['Private Elevator', '24/7 Concierge', 'Rooftop Spa'],
    gallery: []
  }
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Alexandra Vance',
    role: 'Principal Consultant',
    image: 'https://i.pinimg.com/1200x/ff/b4/83/ffb483977733979ffb0789379aac06ee.jpg',
    phone: '+1 (555) 012-3456',
    email: 'alexandra@luxeestate.com', 
    experience: '12 Years',
    bio: 'Specializing in ultra-high-net-worth acquisitions across Europe and the Middle East.'
  }
];

export const marketInsights: MarketInsight[] = [
  { 
    id: '1',
    title: 'Global Luxury Real Estate Report 2024',
    date: 'Nov 12, 2024',
    category: 'Market Analysis',
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg',
    summary: 'A deep dive into emerging markets and capital flow in the premium sector.'
  }
];

export const guides: Guide[] = [
  {
    id: '1',
    title: 'The International Buyer Guide',
    category: 'Buyer',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600',
    summary: 'Everything you need to know about acquiring property in foreign jurisdictions.'
  }
];

export const buyingProcess: ProcessStep[] = [
  { id: 1, title: 'Strategic Consultation', description: 'Define your investment goals and jurisdictional preferences with a senior partner.' },
  { id: 2, title: 'Portfolio Selection', description: 'Access our private, off-market database of curated luxury assets.' },
  { id: 3, title: 'Due Diligence', description: 'Rigorous legal and financial verification through our elite partner network.' },
  { id: 4, title: 'Asset Acquisition', description: 'Expert negotiation and secure transaction management.' }
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    quote: "The strategic insight provided by LuxeEstate allowed us to secure a landmark asset before it even hit the market.",
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  }
];

export const milestones = [
  { year: '2005', title: 'Foundation', desc: 'LuxeEstate founded in London with a vision for global transparency.' },
  { year: '2012', title: 'Global Expansion', desc: 'Established hubs in Dubai, Singapore, and New York.' },
  { year: '2023', title: 'Managed Assets', desc: 'Total portfolio value surpassed $25 Billion.' }
];

export const faqs = [
  { q: 'How do I access off-market listings?', a: 'Off-market listings are exclusive to registered clients who have completed our initial strategic consultation.' },
  { q: 'What are the fees for portfolio management?', a: 'Management fees are tailored based on the scale and jurisdiction of the assets involved.' }
];

export const developments: Development[] = [
  {
    id: '1',
    name: 'The Obsidian Tower',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    status: 'In Construction',
    delivery: 'Q4 2026'
  },
  {
    id: '2',
    name: 'Azure Marina',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
    status: 'Planning',
    delivery: 'Q2 2027'
  },
  {
    id: '3',
    name: 'Neo Genesis Plaza',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    status: 'Completed',
    delivery: 'Q1 2024'
  }
];

export const communities = [
  { id: '1', name: 'Emerald Bay', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', description: 'Serene waterfront living with private docks.' }
];

export const awards: Award[] = [
  {
    id: 'a1',
    title: 'Best Luxury Brokerage',
    body: 'International Property Awards',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'a2',
    title: 'Excellence in Client Discretion',
    body: 'Global Finance Review',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'a3',
    title: 'Global Real Estate Innovator',
    body: 'Tech Frontier Summit',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1770064319727-7a5361023791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdsb2JhbCUyMFJlYWwlMjBFc3RhdGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 'a4',
    title: 'Leader in Sustainable Development',
    body: 'World Green Building Council',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1562041523-c183c8b95c3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V29ybGQlMjBHcmVlbiUyMEJ1aWxkaW5nfGVufDB8fDB8fHww'
  }
];

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    id: 'io1',
    title: 'Global Logistics Hub Portfolio',
    category: 'Commercial',
    expectedYield: '8.5% p.a.',
    minInvestment: '$2.5M',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    summary: 'A diversified fund focusing on strategic logistics assets in Europe and Southeast Asia.',
    location: 'Global / Multi-Jurisdictional'
  },
  {
    id: 'io2',
    title: 'The Sky-Residences Syndication',
    category: 'Residential',
    expectedYield: '12% IRR',
    minInvestment: '$500K',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    summary: 'Co-investment opportunity for a new luxury skyscraper project in the heart of London.',
    location: 'London, UK'
  },
  {
    id: 'io3',
    title: 'Premium Hospitality Collective',
    category: 'Mixed-Use',
    expectedYield: '9.2% p.a.',
    minInvestment: '$1M',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    summary: 'Join an elite group of owners in a portfolio of five-star boutique hotels across the Mediterranean.',
    location: 'Mediterranean Basin'
  }
];
