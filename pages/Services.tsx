import React from 'react';
import { ScanBarcode, CreditCard, UserCheck, Lock, Video, Database, MonitorPlay, Fingerprint, ArrowRight, IdCard } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    title: 'Auto Identification & Data Capture',
    description: 'Streamline operations with advanced automated data capture technologies for accuracy and efficiency.',
    icon: Database
  },
  {
    title: 'RFID & Smart Card Solutions',
    description: 'Comprehensive range of RFID, Proximity Cards, Access Cards, and ID Cards for various organizational needs.',
    icon: CreditCard
  },
  {
    title: 'Barcode Solutions',
    description: 'End-to-end barcode scanning and printing solutions for inventory management and retail.',
    icon: ScanBarcode
  },
  {
    title: 'Biometric Systems',
    description: 'High-security Fingerprint and Palm Readers ensuring identity verification with precision.',
    icon: Fingerprint
  },
  {
    title: 'Access Control Systems',
    description: 'Robust hardware and software to restrict and monitor entry to your facilities.',
    icon: Lock
  },
  {
    title: 'Attendance Management',
    description: 'Automated time-tracking systems to manage workforce attendance seamlessly.',
    icon: UserCheck
  },
  {
    title: 'CCTV Surveillance',
    description: 'High-definition video surveillance systems for round-the-clock security monitoring.',
    icon: Video
  },
  {
    title: 'ID Cards',
    description: 'We provide high-quality ID cards for schools, colleges, corporate offices.',
    icon: IdCard
  },
  {
    title: 'Online Recording & Monitoring',
    description: 'Remote monitoring solutions allowing you to keep an eye on your assets from anywhere.',
    icon: MonitorPlay
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3 block">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            We deliver end-to-end technology solutions tailored to your specific security and operational needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="bg-brand-50 w-14 h-14 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="mt-24">
          <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Not sure which solution fits your needs?</h2>
              <p className="text-brand-100 mb-10 text-lg leading-relaxed">
                Our technical team is ready to provide pre-sales advice to help you select the perfect system for your facility.
              </p>
              <a href="#/contact" className="inline-flex items-center gap-2 bg-secondary text-white hover:bg-red-600 font-bold py-4 px-10 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                Contact Our Technical Team <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
