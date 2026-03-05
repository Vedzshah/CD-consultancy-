import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-brand-900/95 to-brand-800/80 z-10"></div>
          <img src="https://picsum.photos/1920/1080?random=1" alt="Background" className="w-full h-full object-cover grayscale opacity-50" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-white/10 text-brand-200">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Established 1993
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Advanced Security & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">IT Solutions</span> for Business
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed font-light">
              From end-to-end technology implementation to robust security systems,
              CD Consultancy & Services delivers reliability and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group">
                Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white hover:bg-stone-50 text-brand-900 px-8 py-4 rounded-lg font-bold transition-all shadow-md flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Core Competencies</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Specializing in Attendance Management, Access Control, and comprehensive Security Systems designed for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security Systems',
                desc: 'State-of-the-art CCTV and online monitoring solutions to safeguard your premises.'
              },
              {
                icon: Clock,
                title: 'Attendance Management',
                desc: 'Automated biometric and card-based systems to streamline workforce tracking.'
              },
              {
                icon: Users,
                title: 'Access Control',
                desc: 'Secure entry management using RFID, smart cards, and advanced biometrics.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-10 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all group"
              >
                <div className="bg-brand-50 w-16 h-16 rounded-xl flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12 translate-x-20"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border border-stone-700 bg-stone-800/50 rounded-full px-4 py-1 text-sm text-brand-400 font-medium mb-6">
                Why CDconsultancy?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Decades of Experience,<br />Unmatched Reliability.
              </h2>
              <p className="text-stone-400 mb-10 text-lg leading-relaxed">
                With over three decades of experience, our technical team provides unmatched pre-sales advice and robust post-sales support. We don't just sell products; we build long-term security partnerships.
              </p>

              <div className="grid gap-6">
                {[
                  'Established industry presence since 1993',
                  'Trained, competent, and energetic technical team',
                  'End-to-end solution implementation',
                  'Reliable pre-sales and post-sales support',
                  'Customer-focused service approach'
                ].map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-stone-800/50 p-4 rounded-lg border border-stone-700/50">
                    <div className="bg-brand-500/10 p-2 rounded-full text-brand-500">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-stone-200 font-medium">{strength}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link to="/about" className="text-white font-semibold hover:text-brand-400 inline-flex items-center gap-2 group transition-colors">
                  Learn more about our history <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-brand-700 rounded-3xl transform rotate-3 opacity-20 blur-sm"></div>
              <img
                src="https://picsum.photos/600/800?random=2"
                alt="Technical Team"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover border-4 border-stone-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-orange-50 to-white py-24 border-t border-stone-200">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Ready to secure your infrastructure?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Get in touch with our experts today for a comprehensive consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-secondary/20 transition-all hover:-translate-y-1">
              Request a Consultation <ChevronRight size={20} />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-slate-700 border border-stone-200 px-10 py-4 rounded-full font-bold shadow-sm transition-all hover:border-stone-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
