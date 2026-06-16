import React, { useState, useEffect } from 'react';
import { Menu, X, Settings2, Sparkles, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import DigitideLogo from './DigitideLogo';

interface HeaderProps {
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  submissionsCount: number;
}

export default function Header({ isAdminOpen, setIsAdminOpen, submissionsCount }: HeaderProps) {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Who We Are', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollActive
          ? 'bg-[#060b1e]/90 backdrop-blur-md border-b border-blue-500/10 py-3 shadow-[0_10px_30px_rgba(3,7,18,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="digitide-logo-link"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 p-0.5 overflow-hidden shadow-lg shadow-blue-500/10 group-hover:shadow-cyan-400/20 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-b from-[#0b132b] to-[#010204] rounded-[10px] m-px z-0"></span>
              <DigitideLogo className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xl tracking-wider text-white flex items-center leading-none">
                DIGI
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TIDE</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#94a3b8] uppercase leading-none mt-1">
                Ride the Wave of Growth
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-navigation">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-[#94a3b8] hover:text-white transition-colors relative py-2 focus:outline-none focus:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className={`flex items-center space-x-2 text-xs font-mono px-3 py-2 rounded-lg border transition-all duration-300 relative ${
                isAdminOpen
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                  : 'bg-white/5 text-[#94a3b8] border-white/10 hover:border-cyan-500/30 hover:text-white'
              }`}
              id="admin-dashboard-toggle-btn"
              title="Open Mock Admin Panel to edit counters and verify messages"
            >
              <Settings2 className="w-4 h-4" />
              <span>Admin Center</span>
              {submissionsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                  {submissionsCount}
                </span>
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium text-xs tracking-wide px-4 py-2 border border-blue-400/20 rounded-xl transition-all duration-300 shadow-md shadow-blue-500/10 focus:outline-none"
              id="header-cta-btn"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu & Admin Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="relative p-2 text-[#94a3b8] bg-white/5 border border-white/10 rounded-lg hover:text-white focus:outline-none"
              title="Admin Mode"
              id="mobile-admin-toggle"
            >
              <Settings2 className="w-5 h-5" />
              {submissionsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94a3b8] hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none"
              id="mobile-menu-burger-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#060b1e]/95 backdrop-blur-lg border-b border-blue-500/15 overflow-hidden"
            id="mobile-navigation-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-base font-medium text-[#94a3b8] hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col space-y-3 px-3">
                <button
                  onClick={() => {
                    setIsAdminOpen(!isAdminOpen);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-sm font-mono text-cyan-400"
                >
                  <span className="flex items-center space-x-2">
                    <Settings2 className="w-4 h-4" />
                    <span>Mock Admin Console</span>
                  </span>
                  {submissionsCount > 0 && (
                    <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                      {submissionsCount} New
                    </span>
                  )}
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 text-white font-medium text-sm py-2.5 rounded-lg shadow-md transition-all focus:outline-none"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
