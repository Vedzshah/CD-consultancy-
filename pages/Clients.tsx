import React from 'react';
import { Star, Building2 } from 'lucide-react';

const Clients: React.FC = () => {
  const clientList = [
    'Kanakia Constructions',
    'Cinemax Cinemas',
    'K J Somaiya Group',
    'Hyatt',
  ];

  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3 block">Trust & Reliability</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Esteemed Clients</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            We are proud to serve leading organizations across various sectors with our dedicated security solutions.
          </p>
        </div>

        {/* Client Logos / Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {clientList.map((client, index) => (
            <div key={index} className="bg-white p-12 rounded-2xl shadow-sm border border-stone-200 flex flex-col items-center justify-center text-center h-64 hover:shadow-xl hover:border-brand-300 transition-all duration-300 group">
              <div className="bg-stone-50 p-4 rounded-full mb-6 text-stone-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-800 transition-colors">{client}</h3>
            </div>
          ))}
        </div>

        {/* Additional Info / Testimonial Style Box */}
        <div className="bg-white p-12 rounded-3xl shadow-lg text-center border-t-4 border-brand-500 max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 mb-6 text-amber-400">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Serving Corporate & Institutional Sectors</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In addition to the names above, we service a wide array of corporate offices and institutional clients, ensuring their security and data management needs are met with precision and unwavering dedication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;