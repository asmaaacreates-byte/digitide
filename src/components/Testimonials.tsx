import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, GraduationCap, Users } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [filter, setFilter] = useState<'all' | 'client' | 'student'>('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredList = TESTIMONIALS.filter((t) => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  // Keep index synchronized if filter changes length
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#050a1d] relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-500/20">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Loved By Students & Clients
          </h2>
          <p className="text-[#94a3b8] text-base">
            Read from the digital professionals who transformed their skillsets, and local business owners scaling their retail profits.
          </p>
        </div>

        {/* Categories Tab switches */}
        <div className="flex justify-center space-x-2 mb-12" id="testimonial-filter-tabs">
          {[
            { id: 'all', label: 'All Reviews', icon: <Quote className="w-3.5 h-3.5" /> },
            { id: 'client', label: 'Client Partners', icon: <Users className="w-3.5 h-3.5" /> },
            { id: 'student', label: 'Student Graduates', icon: <GraduationCap className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all flex items-center space-x-1.5 ${
                filter === tab.id
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/35'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Carousel Slider */}
        <div className="max-w-3xl mx-auto relative px-4" id="testimonial-carousel-container">
          <AnimatePresence mode="wait">
            {filteredList.length > 0 && (
              <motion.div
                key={filteredList[activeIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-10 relative shadow-2xl backdrop-blur-sm"
              >
                {/* Large background Quote decoration */}
                <Quote className="absolute right-6 top-6 w-20 h-20 text-blue-500/5 rotate-180 pointer-events-none" />

                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(filteredList[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Comment contents */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{filteredList[activeIndex].content}&rdquo;
                  </p>

                  {/* User Profile Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/60">
                    <img
                      src={filteredList[activeIndex].avatar}
                      alt={filteredList[activeIndex].name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full border border-blue-500/20 object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">{filteredList[activeIndex].name}</h4>
                      <p className="text-xs text-slate-400 font-mono flex items-center space-x-1.5 mt-0.5">
                        <span className="text-cyan-400">@{filteredList[activeIndex].role}</span>
                        <span>•</span>
                        <span className="uppercase text-[9px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
                          {filteredList[activeIndex].type}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slider Controllers */}
          <div className="flex justify-between items-center mt-8 px-2">
            <div className="text-xs font-mono text-slate-500">
              Review <span className="text-slate-300 font-bold">{activeIndex + 1}</span> of{' '}
              <span className="text-slate-300">{filteredList.length}</span>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-[#94a3b8] hover:text-white hover:border-slate-705 transition-all"
                title="Previous testimonial review"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-[#94a3b8] hover:text-white hover:border-slate-705 transition-all"
                title="Next testimonial review"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
