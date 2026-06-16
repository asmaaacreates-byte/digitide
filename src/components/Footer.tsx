import React from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook, Linkedin, Waves } from 'lucide-react';
import DigitideLogo from './DigitideLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#02040b] border-t border-slate-900 pt-16 pb-8 text-slate-400 relative overflow-hidden" id="digitide-footer">
      
      {/* Background vector */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo Column */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 p-0.5 overflow-hidden shadow-md">
                <span className="absolute inset-0 bg-gradient-to-b from-[#0b132b] to-[#010204] rounded-[8px] m-px"></span>
                <DigitideLogo className="w-6 h-6 relative z-10" />
              </div>
              <span className="font-sans font-bold text-lg tracking-wider text-white">
                DIGI<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TIDE</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 italic mt-1 font-mono uppercase tracking-widest">
              “Ride the Wave of Growth”
            </p>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Premium digital marketing agency and industry skill-learning workspace based in Perinthalmanna, Malappuram. Combine strategy and creativity to scale.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home Entrance', href: '#home' },
                { label: 'Who We Are', href: '#about' },
                { label: 'Why Partner With Us', href: '#why-us' },
                { label: 'Success Indicators', href: '#stats' },
                { label: 'Success Stories', href: '#testimonials' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-cyan-400 transition-colors py-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 font-bold">Agency & Classes</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Organic Search (SEO)', href: '#services' },
                { label: 'Campaign Ads & Marketing', href: '#services' },
                { label: 'Logo & Graphic Branding', href: '#services' },
                { label: 'Cinematic Video Editing', href: '#services' },
                { label: 'Shopify E-Commerce Training', href: '#courses' }
              ].map((act, i) => (
                <li key={i}>
                  <a
                    href={act.href}
                    onClick={(e) => handleScrollTo(e, act.href)}
                    className="hover:text-cyan-400 transition-colors py-1 block"
                  >
                    {act.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details list */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 font-bold">Hub Context</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs">Perinthalmanna, Malappuram, Kerala</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-cyan-500 flex-shrink-0" />
                <span className="text-xs">7356135118</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-indigo-400 flex-shrink-0" />
                <span className="text-xs">asmaaacreates@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="border-t border-slate-900/60 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <p>© {currentYear} DIGITIDE Digital Solutions Core. All rights reserved.</p>
          <p className="flex items-center space-x-1.5 mt-2 sm:mt-0">
            <span>Powered by</span>
            <span className="text-white hover:text-cyan-400 transition-colors font-bold">DIGITIDE Agency</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
