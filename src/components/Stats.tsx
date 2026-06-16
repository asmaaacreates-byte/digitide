import { useState } from 'react';
import { Award, Code2, Users2, TrendingUp, Plus, Minus, Check, RefreshCw } from 'lucide-react';
import { CounterStat } from '../types';

interface StatsProps {
  stats: CounterStat[];
  onUpdateStat: (id: string, newValue: number) => void;
  onResetStats: () => void;
}

export default function Stats({ stats, onUpdateStat, onResetStats }: StatsProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<number>(0);

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'students':
        return <Users2 className="w-8 h-8 text-cyan-400" />;
      case 'projects':
        return <Code2 className="w-8 h-8 text-blue-400" />;
      case 'partners':
        return <Award className="w-8 h-8 text-rose-400" />;
      default:
        return <TrendingUp className="w-8 h-8 text-emerald-400" />;
    }
  };

  const handleEditClick = (stat: CounterStat) => {
    setEditingId(stat.id);
    setTempValue(stat.value);
  };

  const handleSave = (id: string) => {
    onUpdateStat(id, tempValue);
    setEditingId(null);
  };

  const getBgClass = (id: string) => {
    switch (id) {
      case 'students':
        return 'from-cyan-500/10 to-blue-600/5 border-cyan-500/20';
      case 'projects':
        return 'from-blue-600/10 to-indigo-600/5 border-blue-500/20';
      case 'partners':
        return 'from-rose-500/10 to-pink-600/5 border-rose-500/20';
      default:
        return 'from-emerald-500/10 to-teal-600/5 border-emerald-500/20';
    }
  };

  return (
    <section id="stats" className="py-20 bg-[#060b1f] relative overflow-hidden border-t border-b border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-white tracking-tight">Our Success Blueprint</h2>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            Numbers that demonstrate DIGITIDE growth. Click any value to quick-edit and test live update.
          </p>
        </div>

        {/* Counter cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto align-middle" id="stats-counter-grid">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-gradient-to-br ${getBgClass(stat.id)} border p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative group overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.3)]`}
              id={`stat-counter-card-${stat.id}`}
            >
              {/* Subtle visual glow on card hover */}
              <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-white/5 rounded-full blur-xl group-hover:bg-cyan-500/5 transition-all duration-300"></div>

              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="p-2.5 bg-slate-950/80 rounded-xl w-fit border border-slate-800">
                    {getStatIcon(stat.id)}
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold tracking-wider text-[#94a3b8] uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Edit controller or saving interface */}
                {editingId === stat.id ? (
                  <div className="bg-slate-950 p-3 rounded-xl border border-blue-500/30 flex flex-col items-center space-y-2.5 z-20">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setTempValue(Math.max(0, tempValue - 1))}
                        className="p-1 px-2 bg-slate-900 border border-slate-800 text-slate-300 rounded hover:text-white"
                        title="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <input
                        type="number"
                        value={tempValue}
                        onChange={(e) => setTempValue(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-14 bg-[#0a0f25] text-white text-center font-mono font-bold border border-slate-800 p-0.5 rounded text-sm"
                      />
                      <button
                        onClick={() => setTempValue(tempValue + 1)}
                        className="p-1 px-2 bg-slate-900 border border-slate-800 text-slate-300 rounded hover:text-white"
                        title="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex space-x-1.5 w-full">
                      <button
                        onClick={() => handleSave(stat.id)}
                        className="flex-1 text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-1 rounded font-bold flex items-center justify-center space-x-0.5"
                      >
                        <Check className="w-3 h-3" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex-1 text-[10px] bg-white/5 text-slate-400 border border-white/10 py-1 rounded font-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditClick(stat)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/80 hover:bg-slate-900 text-cyan-400 hover:text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-cyan-500/10 flex items-center space-x-1"
                    title="Click here or go to Admin Panel to update counters"
                  >
                    <span>Edit Value</span>
                  </button>
                )}
              </div>

              {/* Counter Display value */}
              {editingId !== stat.id && (
                <div className="mt-8">
                  <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
                    {stat.value}
                    <span className="text-cyan-400 ml-0.5">{stat.suffix}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Small live reset controller indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onResetStats}
            className="text-xs font-mono text-slate-500 hover:text-[#94a3b8] flex items-center space-x-1.5 bg-slate-950/30 px-3 py-1.5 rounded-full border border-slate-900 transition-colors"
            title="Reset counter variables to default values"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Counters to Defaults</span>
          </button>
        </div>

      </div>
    </section>
  );
}
