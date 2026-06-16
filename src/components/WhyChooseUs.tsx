import { Check, ShieldCheck, Zap, Laptop, Briefcase, HelpCircle, GraduationCap } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Experienced mentors':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Real-world projects':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Practical training approach':
        return <Laptop className="w-5 h-5 text-indigo-400" />;
      case 'Creative solutions':
        return <Zap className="w-5 h-5 text-rose-400" />;
      case 'Latest digital tools and strategies':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Check className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#030614] relative overflow-hidden">
      {/* Absolute decor spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#06b6d4] bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-500/20">
            THE DIGITIDE ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Why Partner with DIGITIDE?
          </h2>
          <p className="text-[#94a3b8] text-base">
            We operate at the intersection of professional agency results and career-ready learning. Here is the architecture of how we build digital wave success.
          </p>
        </div>

        {/* Feature Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="why-choose-us-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/35 border border-slate-800/80 p-6 sm:p-8 rounded-2xl hover:border-slate-700/60 transition-all duration-300 flex flex-col items-start space-y-4 group"
              id={`why-us-card-${index}`}
            >
              {/* Feature Icon Header */}
              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.title)}
              </div>

              {/* Text content details */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-100 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
