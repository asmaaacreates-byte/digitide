import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Share2, Palette, Film, ShoppingBag, ArrowRight, CheckCircle2, ChevronRight, X, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon strings to Lucide icon components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6" />;
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Film':
        return <Film className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getIconColorClass = (id: string) => {
    switch (id) {
      case 'seo':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'digital-marketing':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'graphic-designing':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'video-editing':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'ecommerce-dropshipping':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      default:
        return 'text-[#94a3b8] bg-white/5 border-white/10';
    }
  };

  const getBorderColorHover = (id: string) => {
    switch (id) {
      case 'seo':
        return 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]';
      case 'digital-marketing':
        return 'hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]';
      case 'graphic-designing':
        return 'hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]';
      case 'video-editing':
        return 'hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]';
      case 'ecommerce-dropshipping':
        return 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]';
      default:
        return 'hover:border-white/20';
    }
  };

  return (
    <section id="services" className="py-24 bg-[#030614] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-500/20">
            OUR CORE SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            High-Impact Agency Services
          </h2>
          <p className="text-[#94a3b8] text-base">
            We deliver result-oriented digital solutions crafted meticulously to optimize store conversions, build vibrant branding narrative, and dominate search organic positions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="agency-services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className={`bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-cyan-500/30 flex flex-col justify-between ${getBorderColorHover(
                service.id
              )}`}
              id={`service-card-${service.id}`}
            >
              <div className="space-y-6">
                {/* Icon block */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${getIconColorClass(service.id)}`}>
                  {getIconComponent(service.icon)}
                </div>

                {/* Text Title */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center space-x-1.5 text-xs font-mono font-bold mt-6 text-cyan-400 group pt-4 border-t border-slate-800/60 w-full justify-between">
                <span>EXPLORE CAPABILITIES</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Modal (Drawer) */}
        <AnimatePresence>
          {selectedService && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
              id="service-modal-overlay"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0b122e] border border-blue-500/20 max-w-lg w-full rounded-2xl overflow-hidden relative shadow-2xl p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
                id="service-detail-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10"
                  id="close-services-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center ${getIconColorClass(selectedService.id)}`}>
                      {getIconComponent(selectedService.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#06b6d4] uppercase">AGENCY SOLUTIONS</span>
                      <h3 className="text-xl font-bold text-white leading-tight mt-0.5">{selectedService.title}</h3>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* Core checklist items */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase">Core Deliverables</h4>
                    <div className="grid gap-2.5">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-slate-950/45 p-3 rounded-lg border border-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-xs text-slate-200 font-sans">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact alignment action button */}
                  <div className="pt-4 flex justify-end">
                    <a
                      href="#contact"
                      onClick={() => {
                        setSelectedService(null);
                        // Small timeouts to wait for transition
                        setTimeout(() => {
                          const contactEl = document.querySelector('#contact');
                          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                        }, 200);
                      }}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-3 rounded-lg tracking-wide inline-flex items-center space-x-1.5 shadow-lg shadow-blue-500/10"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
