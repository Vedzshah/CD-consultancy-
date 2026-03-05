import React from 'react';
import { Stethoscope, Factory, PhoneCall, GraduationCap, ShoppingBag, Briefcase, Hotel, HardHat, RadioTower, CheckCircle2 } from 'lucide-react';

const industries = [
  { name: 'Hospitals', icon: Stethoscope },
  { name: 'Call Centres', icon: PhoneCall },
  { name: 'Pharmaceutical Industry', icon: Stethoscope },
  { name: 'Manufacturing Industry', icon: Factory },
  { name: 'Corporate Offices', icon: Briefcase },
  { name: 'Hotels', icon: Hotel },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Educational Institutions', icon: GraduationCap },
  { name: 'Builders / Real Estate', icon: HardHat },
  { name: 'Telecom & Service Industries', icon: RadioTower },
];

const Industries: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-stone-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Industries Served</h1>
          <p className="text-xl text-brand-200 max-w-2xl mx-auto font-light">
            Versatile security and IT solutions adapted for diverse operational environments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Tailored Solutions for Every Sector</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            CDCS understands that a hospital requires different security protocols than a manufacturing plant. 
            We leverage our decades of experience to provide industry-specific implementations of Access Control, 
            Attendance Management, and Surveillance systems.
          </p>
        </div>

        {/* Industry Grid - Static Clean Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-stone-50 border border-stone-100 rounded-2xl text-center hover:bg-white hover:shadow-lg hover:border-brand-200 transition-all duration-300"
            >
              <div className="bg-white text-brand-600 p-4 rounded-xl mb-4 shadow-sm border border-stone-100">
                <ind.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-tight">{ind.name}</h3>
            </div>
          ))}
        </div>

        {/* Why Us for Industries */}
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Industries Trust CDCS</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-brand-50 p-1 rounded-full text-brand-600 mt-1"><CheckCircle2 size={20} /></div>
                            <div>
                                <strong className="block text-slate-900 text-lg mb-1">Scalable Solutions</strong>
                                <span className="text-slate-600 leading-relaxed">From single offices to large manufacturing complexes.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                             <div className="bg-brand-50 p-1 rounded-full text-brand-600 mt-1"><CheckCircle2 size={20} /></div>
                            <div>
                                <strong className="block text-slate-900 text-lg mb-1">Integration</strong>
                                <span className="text-slate-600 leading-relaxed">Seamlessly connecting hardware with software management.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                             <div className="bg-brand-50 p-1 rounded-full text-brand-600 mt-1"><CheckCircle2 size={20} /></div>
                            <div>
                                <strong className="block text-slate-900 text-lg mb-1">Reliability</strong>
                                <span className="text-slate-600 leading-relaxed">Proven track record with established names like Kanakia Constructions and Hyatt.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-brand-900 text-white p-10 rounded-2xl text-center shadow-lg">
                    <h4 className="text-2xl font-bold mb-4">Need a Custom Solution?</h4>
                    <p className="mb-8 text-stone-300 leading-relaxed">
                        Our technical team is ready to assess your facility's specific requirements and design a tailored plan.
                    </p>
                    <a href="#/contact" className="inline-block bg-white text-brand-900 hover:bg-brand-50 font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
                        Request Site Visit
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;