import { motion } from 'motion/react';
import { ArrowRight, BookOpen, BarChart3, TrendingUp, Play, ShoppingCart, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-36 flex items-center bg-[#030614] overflow-hidden"
    >
      {/* Background digital wave anim/shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>

        {/* Dynamic Wave Grid SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Grid Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin text-cyan-300" />
              <span>Next-Gen Digital Marketing Hub</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans leading-tight text-white tracking-tight"
              id="hero-main-title"
            >
              Ride research-driven <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent italic tracking-normal">
                Waves of Digital Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal"
              id="hero-subdescription"
            >
              DIGITIDE helps businesses, entrepreneurs, and future digital professionals succeed through innovative digital marketing solutions, creative agency services, and practical skill-based training.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-cta-group"
            >
              <button
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-sans font-semibold rounded-xl flex items-center justify-center space-x-2.5 transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-blue-500/20 group"
              >
                <span>Start Your Growth Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('#courses')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/30 font-sans font-semibold rounded-xl flex items-center justify-center space-x-2.5 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Explore Our Courses</span>
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-white/5 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <p className="text-2xl font-bold text-white font-sans">98%</p>
                <p className="text-xs text-[#64748b]">Success Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-sans">24/7</p>
                <p className="text-xs text-[#64748b]">Mentorship</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-sans">Live</p>
                <p className="text-xs text-[#64748b]">Client Accounts</p>
              </div>
            </motion.div>
          </div>

          {/* Right Bento Visual Graphic */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-graphics-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square max-w-[450px] mx-auto w-full rounded-2xl border border-blue-500/10 bg-slate-900/40 p-6 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(3,7,24,0.6)]"
            >
              {/* Glass dashboard visual header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                </div>
                <div className="text-[10px] font-mono text-[#475569] uppercase tracking-widest bg-slate-950/55 px-2.5 py-0.5 rounded-md border border-slate-800/60">
                  DIGITIDE AGENCY ENGINE v2.0
                </div>
              </div>

              {/* Bento Content Blocks (Simulated Widgets requested: Search, SEO, Web development, creator desk) */}
              <div className="grid grid-cols-2 gap-4 h-[86%]">
                {/* SEO Metrics widget */}
                <div className="bg-[#0b132b]/80 border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">SEO Rankings</span>
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white tracking-tight mt-2">#1 Rank</p>
                    <p className="text-[10px] text-emerald-400 flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 mr-0.5 inline" fill="currentColor" /> +340% organic reach
                    </p>
                  </div>
                </div>

                {/* Video Editor timeline simulator widget */}
                <div className="bg-[#0b132b]/80 border border-blue-500/20 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Media Desk</span>
                    <Play className="w-4 h-4 text-rose-400 animate-pulse" />
                  </div>
                  <div className="space-y-1.5 mt-2">
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[80%] h-full bg-rose-500"></div>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[60%] h-full bg-cyan-400"></div>
                    </div>
                    <div className="h-1 w-[80%] bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-blue-500"></div>
                    </div>
                    <p className="text-[8px] font-mono text-slate-500 mt-1">Timeline Multi-Track Clicks</p>
                  </div>
                </div>

                {/* Campaign Conversion metrics widget */}
                <div className="col-span-2 bg-[#060b1b]/95 border border-blue-500/20 rounded-xl p-4 relative overflow-hidden flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                  {/* Glowing absolute background circle */}
                  <div className="absolute right-[-20px] top-[-20px] w-28 h-28 bg-blue-600/20 rounded-full blur-xl"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-1.5">
                      <ShoppingCart className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold font-sans">E-Commerce Growth</span>
                    </div>
                    <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Store Optimized</span>
                  </div>

                  <div className="my-3 relative z-10">
                    <p className="text-3xl font-extrabold text-white font-sans tracking-tight">₹4,82k+ <span className="text-xs font-mono font-normal text-slate-400">Revenue</span></p>
                    <p className="text-[10px] text-slate-400 mt-1">Based on dropshipping & local Shopify pipelines taught in classes.</p>
                  </div>

                  {/* Tiny simulated horizontal progress bar points */}
                  <div className="flex justify-between space-x-1 text-[8px] font-mono text-[#64748b] bg-slate-950/65 p-2 rounded-lg border border-slate-800">
                    <div>CTR: <span className="text-white font-bold">4.8%</span></div>
                    <div>ROAS: <span className="text-emerald-400 font-bold">5.2x</span></div>
                    <div>CPA: <span className="text-white font-bold">₹110.0</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Float badges for high-end feel */}
            <div className="absolute -top-3 -left-3 animate-bounce">
              <div className="bg-slate-950/80 border border-cyan-500/30 px-3 py-1.5 rounded-xl text-xs font-semibold text-cyan-300 flex items-center space-x-1 backdrop-blur-sm shadow-lg">
                <span>⚡ SEO Dashboard Live</span>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="bg-slate-950/80 border border-blue-500/30 px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-300 flex items-center space-x-1 backdrop-blur-sm shadow-lg">
                <span>📚 6 Practical Tracks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
