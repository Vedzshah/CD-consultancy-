import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Reach out to our technical team for inquiries about our security solutions and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <div className="lg:col-span-2 bg-brand-900 text-white p-10 rounded-3xl h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-stone-400 mb-12">We are here to answer your questions.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <MapPin size={24} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Corporate Office</h3>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      Mumbai, India<br />
                      1, Ruxmani Niwas, Subhash Lane, Daftary Road, Malad East, B/H Solanki Sadan, Malad East, Mumbai, Maharashtra 400097
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Phone size={24} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <p className="text-stone-300 text-sm">+91 9869022648</p>
                    <p className="text-stone-300 text-sm">+91 9969570135</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Mail size={24} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-stone-300 text-sm">cdconsultancy@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="font-bold text-white mb-2">Business Hours</h3>
              <p className="text-stone-400 text-sm">Monday - Saturday: 10:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 bg-white p-10 md:p-12 rounded-3xl border border-stone-200 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Request a Quote</h2>
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center border border-green-100">
                <div className="mb-4 bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you! We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" required placeholder="John Doe" className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" required placeholder="john@example.com" className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Interested Service</label>
                  <div className="relative">
                    <select id="subject" className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none text-slate-600">
                      <option>Access Control Systems</option>
                      <option>Attendance Management</option>
                      <option>CCTV Surveillance</option>
                      <option>Biometric Systems</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-stone-400">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your project requirements..." className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-500 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;