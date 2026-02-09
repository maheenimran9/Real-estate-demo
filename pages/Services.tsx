
import React from 'react';
import { Building2, Landmark, Briefcase, Key, Compass, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <Building2 size={32} />,
      title: 'Luxury Brokerage',
      description: 'Exclusive access to the most prestigious off-market properties globally. We handle acquisitions and sales with total discretion.'
    },
    {
      icon: <Landmark size={32} />,
      title: 'Portfolio Advisory',
      description: 'Strategic guidance for real estate asset allocation, helping institutional and private investors diversify across global markets.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Corporate Relocation',
      description: 'Comprehensive support for global organizations, ensuring executive moves are seamless, secure, and stress-free.'
    },
    {
      icon: <Key size={32} />,
      title: 'Property Management',
      description: 'Full-service management for high-net-worth property portfolios, from maintenance to tenant relations and yield optimization.'
    },
    {
      icon: <Compass size={32} />,
      title: 'Market Intelligence',
      description: 'Actionable insights based on real-time global market data, providing our clients with a distinct competitive advantage.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Legal & Escrow',
      description: 'Streamlined legal processing and secure escrow services to protect our clients through every stage of the transaction.'
    }
  ];

  return (
    <div className="pt-32 lg:pt-48 pb-24 lg:pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black text-[#B6AE9F] bg-[#B6AE9F]/10 border border-[#B6AE9F]/30 rounded-full uppercase tracking-widest">
            Expertise & Excellence
          </span>
          <h1 className="text-[#111] tracking-tighter mb-6">Comprehensive <br className="hidden lg:block" />Solutions</h1>
          <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed">
            From individual acquisitions to managing complex global portfolios, LuxeEstate offers a full spectrum of premium services tailored to the needs of the modern investor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesList.map((service, i) => (
            <div key={i} className="group p-8 lg:p-12 bg-gray-50/50 rounded-[2.5rem] lg:rounded-[3rem] hover:bg-white lg:hover:shadow-2xl lg:hover:shadow-[#B6AE9F]/10 transition-all duration-500 border border-gray-100/50">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center text-[#B6AE9F] mb-8 group-hover:bg-[#1A1A1A] group-hover:text-white transition-all shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-black mb-4 text-[#111] tracking-tight">{service.title}</h3>
              <p className="text-base text-gray-400 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 lg:mt-40 p-10 lg:p-24 bg-[#111] rounded-[3rem] lg:rounded-[5rem] text-white flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B6AE9F]/10 blur-[100px] rounded-full"></div>
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-white tracking-tighter mb-8 leading-none">Bespoke <br /><span className="text-[#B6AE9F]">Concierge.</span></h2>
            <p className="text-white/40 text-lg lg:text-xl leading-relaxed mb-10 font-medium">
              We understand that luxury property is a lifestyle choice. Our dedicated concierge team handles everything from interior design and private security to lifestyle management.
            </p>
            <ul className="space-y-5">
              {['Exclusive Interior Design Partnerships', 'Private Security Consultation', 'Chartered Transport Services', 'Pre-Arrival Management'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <div className="w-2 h-2 bg-[#B6AE9F] rounded-full"></div>
                  <span className="font-bold text-base lg:text-lg tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative z-10">
            <div className="rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl shadow-black/50">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Elite Office" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
