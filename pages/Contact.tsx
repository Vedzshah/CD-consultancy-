import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Save form ref BEFORE any await — React nullifies e.currentTarget
    // when the synchronous handler returns on the first await
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // Always read the JSON body — Web3Forms may return non-200 even on success;
      // the only reliable indicator is the 'success' field in the response body
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form?.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to submit the form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen py-24 lg:py-32">
      <SEO
        title="Contact Us — Get a Free Security Consultation in Mumbai"
        description="Contact CD Consultancy & Services for expert security and IT advice. Located in Malad East, Mumbai. Call +91 9869022648 or email cdconsultancy@gmail.com to request a free quote."
        keywords="contact CDCS Mumbai, security consultation Mumbai, access control quote, CCTV installation Mumbai, biometric system Malad East"
        canonicalUrl="https://cdcs.co.in/contact"
      />
      <div className="container mx-auto px-6 lg:px-8">
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
                    <p className="text-stone-300 text-sm">Jayesh: +91 9869022648</p>
                    <p className="text-stone-300 text-sm">Chintan:+91 9969570135</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Mail size={24} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-stone-300 text-sm">cdconsultancy@gmail.com </p>
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
                    <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Interested Service</label>
                  <div className="relative">
                    <select id="subject" name="subject" className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none text-slate-600">
                      <option value="Access Control Systems">Access Control Systems</option>
                      <option value="Attendance Management">Attendance Management</option>
                      <option value="CCTV Surveillance">CCTV Surveillance</option>
                      <option value="Biometric Systems">Biometric Systems</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-stone-400">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project requirements..." className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-stone-400 resize-none"></textarea>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button type="submit" disabled={isSubmitting} className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-red-600 disabled:bg-red-400 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={18} />}
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
