import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BookOpen, Clock, Layers, CheckCircle, ArrowRight, Star, GraduationCap, X, Calendar, Sparkles } from 'lucide-react';
import { COURSES } from '../data';
import { Course } from '../types';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'marketing' | 'design'>('all');
  const [expandedSyllabusId, setExpandedSyllabusId] = useState<string | null>(null);
  const [selectedEnrollCourse, setSelectedEnrollCourse] = useState<Course | null>(null);

  // Filter courses
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Sort logic categories
    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'marketing') {
      return matchesSearch && [
        'dm-masterclass',
        'seo-growth',
        'social-media-content',
        'ecommerce-dropshipping-training'
      ].includes(course.id);
    }
    if (selectedCategory === 'design') {
      return matchesSearch && ['graphic-design', 'video-editing-pro'].includes(course.id);
    }
    return matchesSearch;
  });

  return (
    <section id="courses" className="py-24 bg-[#050a1d] relative overflow-hidden border-t border-slate-900">
      {/* Background vectors */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-500/20">
            DIGITAL TRAINING HUB
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Learn Skills That Build Careers
          </h2>
          <p className="text-[#94a3b8] text-base">
            Expert-led hands-on classrooms in Perinthalmanna designed to elevate your professional toolkit. Work on authentic live projects with industry syllabus.
          </p>
        </div>

        {/* Global Features Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto" id="courses-features-banner">
          {[
            { label: 'Practical Projects', desc: 'Hands-on training hubs' },
            { label: 'Industry Syllabus', desc: 'Constantly updated' },
            { label: 'Beginner-Friendly', desc: 'No coding required' },
            { label: 'Expert Mentors', desc: 'Personalized code/design feedback' }
          ].map((feat, i) => (
            <div key={i} className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-xl text-center">
              <CheckCircle className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <p className="text-slate-200 font-bold text-sm tracking-tight">{feat.label}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Filters and Search toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80 max-w-5xl mx-auto">
          {/* Category tabs */}
          <div className="flex space-x-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Fields' },
              { id: 'marketing', label: 'Marketing & Stores' },
              { id: 'design', label: 'Creative & Editing' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`flex-1 md:flex-none px-4 py-2 text-xs font-mono rounded-lg border transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search course title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#030614] border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40"
              id="course-search-field"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                title="Clear query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" id="courses-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0c1228]/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                id={`course-card-${course.id}`}
              >
                <div>
                  {/* Top Badge Image Frame */}
                  <div className="p-6 pb-2 relative">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-md font-mono uppercase tracking-wide">
                        {course.level}
                      </span>
                      {course.featured && (
                        <span className="flex items-center space-x-1 text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-md font-mono uppercase tracking-wide">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>Popular</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">{course.title}</h3>
                    <p className="text-xs text-[#94a3b8] mt-2.5 leading-relaxed">{course.description}</p>
                  </div>

                  {/* Syllabus / Module Peek Accordion */}
                  <div className="px-6 py-2 border-t border-slate-800/50 mt-4">
                    <button
                      onClick={() => setExpandedSyllabusId(expandedSyllabusId === course.id ? null : course.id)}
                      className="text-xs font-mono font-semibold text-slate-400 hover:text-white flex items-center justify-between w-full py-2 hover:bg-white/5 px-2 rounded-lg transition-colors border border-dashed border-slate-800"
                    >
                      <span>{expandedSyllabusId === course.id ? 'Hide Modules' : 'View Syllabus Outline'}</span>
                      <BookOpen className="w-4.5 h-4.5 text-cyan-400" />
                    </button>

                    <AnimatePresence>
                      {expandedSyllabusId === course.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden space-y-2 mt-3 pb-2"
                        >
                          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">COURSE CURRICULUM</p>
                          {course.syllabus.map((syl, sIdx) => (
                            <div key={sIdx} className="flex items-start space-x-2 bg-slate-950/40 p-2 rounded-lg border border-slate-900">
                              <span className="text-[10px] font-mono text-cyan-400 font-bold bg-[#0d2232] h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span className="text-xs text-slate-300 font-sans leading-tight">{syl}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Footer with Details */}
                <div className="p-6 pt-2 border-t border-slate-800/65 mt-4 bg-slate-950/20">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Layers className="w-3.5 h-3.5 text-slate-500" />
                      <span>{course.projectsCount} Hands-on Projects</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedEnrollCourse(course)}
                    className="w-full py-3 bg-white/5 hover:bg-cyan-500 hover:text-black hover:border-transparent text-white font-sans text-xs font-semibold rounded-xl border border-white/10 transition-all duration-300 flex items-center justify-center space-x-1.5"
                  >
                    <span>Instant Enquire</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCourses.length === 0 && (
            <div className="col-span-full text-center bg-slate-950/40 border border-dashed border-slate-850 p-12 rounded-2xl">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto.5 opacity-40 mb-4 block" />
              <p className="text-slate-300 font-bold">No tracks matched your filter.</p>
              <p className="text-xs text-slate-500 mt-1">Try broad matches or click &apos;All Fields&apos; above.</p>
            </div>
          )}
        </div>

        {/* Enroll simulation Modal popup */}
        <AnimatePresence>
          {selectedEnrollCourse && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedEnrollCourse(null)}
              id="course-enroll-overlay"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0b122e] border border-cyan-500/20 max-w-md w-full rounded-2xl overflow-hidden p-6 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                id="course-enroll-modal"
              >
                <button
                  onClick={() => setSelectedEnrollCourse(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-[#1e293b] p-1 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Enrollment Inquiry</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {selectedEnrollCourse.title}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                    <p>📍 Location: Offline Class, Perinthalmanna</p>
                    <p>🕒 Duration: {selectedEnrollCourse.duration}</p>
                    <p>✨ Level: {selectedEnrollCourse.level}</p>
                  </div>

                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/25 rounded-xl">
                    <p className="text-xs text-cyan-200">
                      We have auto-prefilled our contact information for easy reference on our form below:
                    </p>
                    <p className="text-xs text-white font-mono font-bold mt-1.5">
                      Phone: 7356135118
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedEnrollCourse(null);
                      // Scroll to contact form and prefill course selection
                      const contactSection = document.querySelector('#contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        // Fill select dropdown
                        const selectEl = document.querySelector('#contact-service-select') as HTMLSelectElement;
                        if (selectEl) {
                          selectEl.value = selectedEnrollCourse.title;
                          // Fire dynamic change event to update react state
                          const event = new Event('change', { bubbles: true });
                          selectEl.dispatchEvent(event);
                        }
                      }
                    }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 text-white font-sans font-semibold rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-1.5"
                  >
                    <span>Proceed to Application Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
