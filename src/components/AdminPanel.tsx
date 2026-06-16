import { Trash2, Check, CheckCircle2, User, Phone, Mail, FileText, Sparkles, X, Database, Eye } from 'lucide-react';
import { ContactSubmission, CounterStat } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: ContactSubmission[];
  onClearSubmissions: () => void;
  onDeleteSubmission: (id: string) => void;
  stats: CounterStat[];
  onUpdateFullStats: (stats: CounterStat[]) => void;
}

export default function AdminPanel({
  isOpen,
  onClose,
  submissions,
  onClearSubmissions,
  onDeleteSubmission,
  stats,
  onUpdateFullStats
}: AdminPanelProps) {
  if (!isOpen) return null;

  const handleStatChange = (id: string, valueStr: string) => {
    const value = Math.max(0, parseInt(valueStr) || 0);
    const updated = stats.map((s) => (s.id === id ? { ...s, value } : s));
    onUpdateFullStats(updated);
  };

  return (
    <div
      className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-[#090f28] border-l border-cyan-500/10 shadow-2xl flex flex-col justify-between"
      id="mock-admin-panel"
    >
      {/* Header of Panel */}
      <div className="p-6 border-b border-white/5 bg-[#070b1e]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              DIGITIDE Admin Console
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 text-slate-400 hover:text-white bg-white/5 border border-white/5 hover:border-slate-800 rounded-lg text-xs"
            id="close-admin-btn"
          >
            <X className="w-4 h-4 inline mr-1" /> Close
          </button>
        </div>
        <p className="text-[11px] text-slate-400 mt-2 font-mono">
          Local Storage State Engine — Verify incoming inquiries & adjust live stats counters dynamically.
        </p>
      </div>

      {/* Body contents */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        
        {/* Section 1: Stats Counters Manager */}
        <div className="space-y-4">
          <div className="flex items-center space-x-1.5 text-cyan-400">
            <Database className="w-4 h-4" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest">Counters Editor</h4>
          </div>

          <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-4 space-y-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center justify-between space-x-4">
                <span className="text-xs text-slate-300 font-sans">{stat.label}:</span>
                <div className="flex items-center space-x-1">
                  <input
                    type="number"
                    value={stat.value}
                    onChange={(e) => handleStatChange(stat.id, e.target.value)}
                    className="w-20 bg-[#060b1e] border border-slate-800 rounded px-2 py-1 text-xs text-white text-center font-mono focus:outline-none focus:border-cyan-500/50"
                  />
                  <span className="text-xs text-cyan-400 font-bold ml-1">{stat.suffix}</span>
                </div>
              </div>
            ))}
            <p className="text-[10px] text-slate-500 font-mono italic text-right pt-1">
              * Changes publish instantly to the counters section of the page!
            </p>
          </div>
        </div>

        {/* Section 2: Contact message inquiries logs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-cyan-400">
            <div className="flex items-center space-x-1.5">
              <Eye className="w-4 h-4" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest">Inquiry Leads ({submissions.length})</h4>
            </div>
            {submissions.length > 0 && (
              <button
                onClick={onClearSubmissions}
                className="text-[10px] text-rose-400 hover:text-rose-300 font-mono flex items-center space-x-1 bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Logs</span>
              </button>
            )}
          </div>

          <div className="space-y-3">
            {submissions.length === 0 ? (
              <div className="border border-dashed border-slate-800 p-8 rounded-xl text-center bg-slate-950/20">
                <FileText className="w-8 h-8 text-slate-600 mx-auto.5 opacity-30 mb-2.5 block" />
                <p className="text-slate-400 text-xs">No entries received yet.</p>
                <p className="text-[10px] text-slate-600 mt-1">Submit the contact form below to see real-time updates.</p>
              </div>
            ) : (
              submissions.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2.5 relative group"
                >
                  <button
                    onClick={() => onDeleteSubmission(sub.id)}
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 p-1 bg-white/5 hover:bg-rose-500/10 rounded transition-all"
                    title="Delete record details"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[10px] text-slate-500 font-mono flex justify-between pr-4">
                    <span>RECEIVED • {sub.date}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white flex items-center">
                      <User className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      <span>{sub.name}</span>
                    </p>
                    <p className="text-xs text-slate-300 flex items-center">
                      <Phone className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                      <a href={`tel:${sub.phone}`} className="hover:underline">{sub.phone}</a>
                    </p>
                    <p className="text-xs text-slate-300 flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                      <a href={`mailto:${sub.email}`} className="hover:underline">{sub.email}</a>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-900 space-y-1">
                    <p className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 p-1 rounded border border-cyan-900/30 w-fit">
                      Interested: {sub.service}
                    </p>
                    <p className="text-xs text-slate-400 italic bg-[#040713] p-2 rounded border border-slate-900 mt-1">
                      &ldquo;{sub.message}&rdquo;
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* Footer of Panel */}
      <div className="p-4 border-t border-white/5 bg-[#070b1e] text-center text-[10px] font-mono text-slate-500">
        <Sparkles className="w-4.5 h-4.5 text-cyan-400 inline mx-0.5 animate-spin vertical-middle" />
        <span> DIGITIDE State Machinery Sync Approved 2026</span>
      </div>
    </div>
  );
}
