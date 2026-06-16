import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Youtube, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSubmission } from '../types';

interface ContactProps {
  onNewSubmission: (submission: ContactSubmission) => void;
}

export default function Contact({ onNewSubmission }: ContactProps) {
  // Preset defaults requested in the prompt
  const [formData, setFormData] = useState({
    name: 'DIGITIDE',
    phone: '7356135118',
    email: 'asmaaacreates@gmail.com',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesDropdownOptions = [
    'Search Engine Optimization (SEO)',
    'Digital Marketing & Social Media Management',
    'Graphic Designing & Branding',
    'Professional Video Editing',
    'Dropshipping & E-Commerce Solutions',
    'Digital Marketing Masterclass Track',
    'SEO & Website Growth Class',
    'Graphic Design Training Program',
    'Professional Video Editing Suite Class',
    'Social Media Content Creation Track',
    'E-Commerce & Dropshipping Masterclass'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please type inside the Name field.');
      return;
    }
    if (!formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('A Phone number is required.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.service) {
      setStatus('error');
      setErrorMessage('Please select a topic/service interested in.');
      return;
    }

    const submission: ContactSubmission = {
      id: 'sub-' + Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message || 'Interested in learning/scaling with DIGITIDE.',
      date: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString('en-US')
    };

    onNewSubmission(submission);
    setStatus('success');
    
    // Reset specific parts but keep basic settings
    setFormData((prev) => ({
      ...prev,
      service: '',
      message: ''
    }));

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#030614] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-500/20">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
            Let&apos;s Create Your Digital Success Story
          </h2>
          <p className="text-[#94a3b8] text-base">
            Drop us a message, schedule a Perinthalmanna studio tour, or register for class seats. Our growth advisers will trace back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto" id="contact-outer-grid">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            <div className="bg-[#0c1228]/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white tracking-tight">DIGITIDE Headquarters</h3>
              
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 mt-0.5 border border-blue-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-semibold text-slate-200 mt-1">Perinthalmanna, Malappuram, Kerala</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 mt-0.5 border border-cyan-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Hotline</h4>
                    <p className="text-sm font-semibold hover:text-cyan-300 transition-colors text-slate-200 mt-1">
                      <a href="tel:7356135118">7356135118</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 mt-0.5 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Inquiries Email</h4>
                    <p className="text-sm font-semibold hover:text-indigo-300 transition-colors text-slate-200 mt-1">
                      <a href="mailto:asmaaacreates@gmail.com">asmaaacreates@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-slate-850">
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Follow Wave Channels</h4>
                <div className="flex space-x-3.5">
                  {[
                    { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: 'https://instagram.com' },
                    { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', href: 'https://facebook.com' },
                    { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', href: 'https://youtube.com' },
                    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com' }
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all transform hover:-translate-y-1"
                      title={soc.label}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick alert about premium studio setup */}
            <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-start space-x-3 text-xs text-slate-400">
              <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>We arrange interactive onboarding sessions for students and complimentary SEO diagnostics audits for established commercial local stores!</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-[#0b0f24] border border-blue-500/10 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
              
              <form onSubmit={handleSubmit} className="space-y-5" id="digitide-contact-form">
                
                {/* Form row 1: Name and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Business / Student Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#030614] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/40"
                      placeholder="e.g. DIGITIDE"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Contact Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#030614] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/40"
                      placeholder="e.g. 7356135118"
                    />
                  </div>
                </div>

                {/* Form row 2: Email */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#030614] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/40"
                    placeholder="e.g. asmaaacreates@gmail.com"
                  />
                </div>

                {/* Form row 3: Topic selection */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Service or Course Interested In</label>
                  <select
                    id="contact-service-select"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-[#030614] border border-slate-800 rounded-xl px-4 py-3 text-sm text-[#94a3b8] focus:outline-none focus:border-cyan-500/40"
                  >
                    <option value="">-- Choose Segment --</option>
                    {servicesDropdownOptions.map((opt, id) => (
                      <option key={id} value={opt} className="bg-[#0b0f24] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Form row 4: Message */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message Details (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#030614] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/40 placeholder-slate-500"
                    placeholder="Describe your digital marketing challenges, brand details, or learning outcomes..."
                  ></textarea>
                </div>

                {/* Action feedback elements */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-xl flex items-center space-x-2 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Form submitted successfully! Check Admin Log in the header to view live records.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-rose-500/10 border border-rose-500/25 text-rose-400 rounded-xl flex items-center space-x-2 text-xs"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl tracking-wide flex items-center justify-center space-x-2 text-sm shadow-xl shadow-blue-500/10 transform hover:-translate-y-0.5 transition-all"
                  id="submit-form-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Professional Message</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
