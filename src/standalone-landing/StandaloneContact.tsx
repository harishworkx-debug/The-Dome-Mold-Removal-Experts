import React, { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle, AlertCircle, Send, ArrowRight } from 'lucide-react';
import { LANDING_IDENTITY, LANDING_SERVICES } from './data';

export const StandaloneContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Inspection / Estimate',
    propertyType: 'Residential Single-Family',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number so our team can reach you.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: 'General Inspection / Estimate',
      propertyType: 'Residential Single-Family',
      notes: '',
    });
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone & Local Dispatch Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Direct Local Dispatch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Request an On-Site Assessment in Oakwood, OH
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Connect directly with certified remediation and moisture evaluation technicians. We evaluate
                active mold growth, persistent musty odors, and water damage throughout Oakwood and Montgomery County.
              </p>
            </div>

            {/* Emergency Hotline Card */}
            <div className="bg-gradient-to-br from-emerald-950/80 to-slate-800 border border-emerald-500/30 rounded-2xl p-6 sm:p-7 shadow-lg">
              <div className="flex items-center gap-3 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                Immediate Phone Consultation
              </div>
              <div className="text-sm text-slate-300 mb-2">
                For active leaks, immediate quotes, or rapid emergency scheduling:
              </div>
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="text-2xl sm:text-3xl font-black text-amber-400 hover:text-amber-300 tracking-tight transition-colors flex items-center gap-3"
              >
                <Phone className="w-6 h-6 fill-amber-400 shrink-0" />
                <span>{LANDING_IDENTITY.phoneDisplay}</span>
              </a>
              <div className="mt-4 pt-4 border-t border-slate-700/60 flex flex-col gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{LANDING_IDENTITY.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{LANDING_IDENTITY.emergencyAvailability}</span>
                </div>
              </div>
            </div>

            {/* Quick Commitments */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Upfront transparent written pricing before any physical work begins</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>IICRC S520 containment protocols to protect clean living areas</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fast response across Oakwood, Kettering, Dayton & Beavercreek</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-10 shadow-2xl border border-slate-200">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Request Received Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. A local field coordinator
                    will review your property details and contact you shortly at{' '}
                    <strong className="text-slate-900">{formData.phone}</strong> to confirm your assessment.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto">
                    Need immediate assistance right now? Call{' '}
                    <a href={LANDING_IDENTITY.phoneHref} className="font-bold text-teal-700 hover:underline">
                      {LANDING_IDENTITY.phoneDisplay}
                    </a>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Schedule Inspection or Request Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out this quick form or call directly for immediate dispatch.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="landing-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="landing-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Miller"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="landing-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="landing-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(937) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="landing-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="landing-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      >
                        <option value="General Inspection / Estimate">General Inspection / Estimate</option>
                        {LANDING_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="landing-property" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Property Type
                      </label>
                      <select
                        id="landing-property"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      >
                        <option value="Residential Single-Family">Residential Single-Family</option>
                        <option value="Historic Home (Stone / Masonry Basement)">
                          Historic Home (Stone / Masonry Basement)
                        </option>
                        <option value="Condominium / Townhouse">Condominium / Townhouse</option>
                        <option value="Commercial / Office Property">Commercial / Office Property</option>
                        <option value="Real Estate Inspection / Transaction">
                          Real Estate Inspection / Transaction
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="landing-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Describe the Issue or Area (Optional)
                    </label>
                    <textarea
                      id="landing-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Musty smell in basement, visible dark spots on drywall, recent water leak..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base shadow-lg transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>Request Assessment & Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-500 text-center">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your contact details are strictly kept private and used only for your estimate.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
