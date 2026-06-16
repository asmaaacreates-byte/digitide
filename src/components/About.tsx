import { motion } from 'motion/react';
import { MapPin, Target, Compass, Sparkles, Pin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050a1d] relative overflow-hidden border-t border-slate-900">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual card content (Interactive Blueprint of physical space location) */}
          <div className="lg:col-span-5 relative" id="about-location-card">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl relative shadow-2xl backdrop-blur-sm"
            >
              {/* Regional marker tag */}
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-[#0b1534] text-cyan-400 text-[10px] font-mono border border-cyan-500/20 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                <span>Malappuram, KL</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#64748b] uppercase">HQ & LEARNING STUDIO</h4>
                  <p className="text-lg font-bold text-white mt-1">Perinthalmanna Center</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 bg-[#0a0f24] p-4 rounded-xl border border-blue-500/5">
                    <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 mt-0.5">
                      <Pin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Central Hub Access</p>
                      <p className="text-xs text-slate-400 mt-0.5">Located in the heart of Perinthalmanna, easily accessible for local student tracks and corporate partners.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-[#0a0f24] p-4 rounded-xl border border-blue-500/5">
                    <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">High-Speed Workstations</p>
                      <p className="text-xs text-slate-400 mt-0.5">Equipped with state-of-the-art editing bays, high-speed agency nodes, and creative collaboration desks.</p>
                    </div>
                  </div>
                </div>

                {/* Simulated agency live state */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>LIVE STATUS:</span>
                  <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>ACTIVE TRAINING HELD DAILY</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text content of WHO WE ARE */}
          <div className="lg:col-span-7 space-y-6" id="about-info-text-container">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
                Empowering Growth & <br />
                Skill Innovation in Malappuram
              </h2>
            </div>

            <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              <strong>DIGITIDE</strong> is a modern digital marketing and creative learning hub based in{' '}
              <span className="text-white border-b-2 border-cyan-400/30">Perinthalmanna, Malappuram</span>. We help businesses establish a strong online presence while empowering students and professionals with industry-relevant digital skills.
            </p>

            <p className="text-[#94a3b8] text-base leading-relaxed">
              We combine creativity, strategy, and technology to deliver impactful digital solutions and hands-on training that prepares learners for real-world opportunities.
            </p>

            <p className="text-[#94a3b8] text-base leading-relaxed">
              Whether you are an aspiring designer desiring to craft beautiful brands, a video enthusiast pursuing Cinematic Video Editing track, or a local business wanting to rank #1 on Google — DIGITIDE is your premium growth engine.
            </p>

            {/* Icons indicators representing values: Strategy, Tech, Creativity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-200">Agency & Learning Synchronized</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-200">Practical Direct Mentorship</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
