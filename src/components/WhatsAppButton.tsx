import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '917356135118';
  const welcomeMessage = encodeURIComponent(
    "Hi Digitide! I'd love to learn more about your digital agency services and courses. Let's discuss how we can ride the wave of growth! 🌊"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

  // Automatically show the tooltip with a welcoming message after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has previously dismissed the tooltip in this session
      const isDismissed = sessionStorage.getItem('digitide_whatsapp_dismissed');
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    sessionStorage.setItem('digitide_whatsapp_dismissed', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none" id="digitide-whatsapp-floater">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-3.5 mr-1 max-w-[280px] md:max-w-xs bg-[#0b132c] text-white border border-emerald-500/30 p-3.5 rounded-2xl shadow-2xl pointer-events-auto relative flex items-start space-x-3 backdrop-blur-md"
          >
            {/* Pulsing Emerald Dot */}
            <span className="absolute top-3.5 left-3.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            <div className="pl-3.5 pr-4 flex-1">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest font-mono leading-none mb-1">
                Active Support
              </p>
              <h4 className="text-sm font-bold text-slate-100 leading-tight mb-1">
                Let's discuss your project!
              </h4>
              <p className="text-xs text-slate-300 leading-normal">
                Ride the wave of growth. Connect with us on WhatsApp for a free expert consultation!
              </p>
            </div>

            <button
              onClick={handleDismissTooltip}
              className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800/60 transition-colors duration-200"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Speach bubble tail */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0b132c] border-r border-b border-emerald-500/30 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto relative">
        {/* Pulsing wave glow ring elements */}
        <span className="absolute -inset-2 rounded-full bg-emerald-500/10 animate-ping pointer-events-none duration-1000"></span>
        <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 pointer-events-none"></span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#030614]"
          title="Chat with Digitide on WhatsApp"
          id="whatsapp-connector-btn"
        >
          {/* Custom vector SVG high-quality WhatsApp logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-7 h-7 fill-white drop-shadow-md group-hover:rotate-12 transition-transform duration-300"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.1 480.9l112.5-29.5c32.9 17.9 69.8 27.3 108.2 27.3h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-66.8 17.5 17.8-65.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
