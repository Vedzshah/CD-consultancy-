import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, History, Headphones, Settings } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero / Header */}
      <div className="bg-brand-900 relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">About CDconsultancy</h1>
            <p className="text-xl text-brand-100 max-w-2xl mx-auto font-light leading-relaxed">
              Delivering Excellence in Security & IT Solutions Since 1993
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Company Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <div>
            <div className="inline-block bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Company Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Your Trusted Partner for <br />
              <span className="text-brand-600">End-to-End Technology Solutions</span>
            </h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-6">
                CD Consultancy & Services (CDconsultancy) was established in 1993 and has since grown into a premier provider of IT, hardware, software, and security solutions.
              </p>
              <p>
                We specialize in critical business infrastructure including Attendance Management, Access Control, and comprehensive Security Systems. Our goal is to deliver technology that empowers your organization to operate safely and efficiently.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: History, title: "Since 1993", desc: "Decades of industry stability" },
              { icon: Settings, title: "End-to-End", desc: "Complete implementation" },
              { icon: Users, title: "Expert Team", desc: "Trained & energetic professionals" },
              { icon: Headphones, title: "Support", desc: "Reliable pre & post-sales service" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 hover:border-brand-200 hover:shadow-lg transition-all group">
                <item.icon className="text-brand-500 mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Strengths - Detailed List */}
        <div className="bg-brand-900 rounded-3xl p-8 md:p-16 mb-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Strengths</h2>
              <p className="text-stone-400 max-w-2xl mx-auto text-lg">
                We distinguish ourselves through a commitment to quality and a customer-centric service philosophy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Established Industry Presence", desc: "Serving clients with stability and trust since 1993." },
                { title: "Technical Expertise", desc: "A trained, competent, and energetic technical team ready to solve complex challenges." },
                { title: "Comprehensive Implementation", desc: "We handle everything from consultation to installation and maintenance." },
                { title: "Full Lifecycle Support", desc: "Reliable pre-sales advice to choose the right product, backed by strong post-sales support." },
                { title: "Customer-Focused", desc: "A service approach designed around your specific needs and satisfaction." }
              ].map((strength, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-stone-800/50 transition-colors">
                  <div className="mt-1 flex-shrink-0 text-brand-500">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{strength.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{strength.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy / Team Section */}
        <div className="max-w-4xl mx-auto text-center bg-brand-50 p-12 rounded-3xl border border-brand-100">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-brand-600">
            <Award size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The CDconsultancy Difference</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            At CD Consultancy & Services, we believe that technology is only as effective as the support behind it.
            Our <span className="text-brand-700">trained and experienced technical team</span> ensures that every solution—whether it's
            Biometric Attendance, Access Control, or CCTV Surveillance—is implemented seamlessly.
            We pride ourselves on our <span className="text-brand-700">strong pre-sales and post-sales service</span>,
            ensuring you have a partner you can rely on long after the installation is complete.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
