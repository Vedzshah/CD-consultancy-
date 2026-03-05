import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-slate-800 font-sans">
      {/* Top Bar */}
      <div className="bg-brand-900 text-stone-300 py-2 text-xs font-medium tracking-wide border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-brand-500" /> +91 9969202648
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-brand-500" /> cdconsultancy@gmail.com
            </span>
          </div>
          <div className="hidden md:block text-stone-400">
            Established 1993 | IT & Security Solutions
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Image: Ensure 'logo.png' is placed in your public directory */}
              <img
                src="/logo.png"
                alt="CDCS Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none tracking-tight group-hover:text-brand-600 transition-colors">CDCS</span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mt-1">CD Consultancy & Services</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${isActive(link.path)
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-stone-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-stone-200">
                <Link
                  to="/contact"
                  className="bg-brand-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-brand-500/20 hover:bg-brand-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                >
                  Get Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-700 hover:text-brand-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 shadow-xl absolute w-full">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-600 hover:bg-stone-50 hover:text-brand-600'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 text-center bg-brand-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-brand-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                  <img src="/logo.png" alt="CDCS Logo" className="h-8 w-auto brightness-200 grayscale contrast-200" />
                </div>
                <span className="text-xl font-bold tracking-tight">CDCS</span>
              </div>
              <p className="text-sm leading-relaxed text-stone-400">
                Providing end-to-end IT, hardware, software, and security solutions since 1993. Your trusted partner in safety and efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase border-b border-stone-800 pb-2 inline-block">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">Access Control</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">CCTV Surveillance</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">Biometric Systems</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">Attendance Management</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase border-b border-stone-800 pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                <li><Link to="/industries" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">Industries Served</Link></li>
                <li><Link to="/clients" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">Our Clients</Link></li>
                <li><Link to="/contact" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase border-b border-stone-800 pb-2 inline-block">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-500" />
                  <span>Corporate Office, Mumbai, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-500" />
                  <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-500" />
                  <a href="mailto:sales@cdcs.example.com" className="hover:text-white transition-colors">sales@cdcs.example.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <p>&copy; {new Date().getFullYear()} CD Consultancy & Services. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-stone-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-stone-300 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;