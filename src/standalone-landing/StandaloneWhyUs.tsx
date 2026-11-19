import React from 'react';
import { ShieldCheck, MapPin, FileText, Droplets, Phone, CheckCircle2, Award } from 'lucide-react';
import { LANDING_IDENTITY, WHY_CHOOSE_US } from './data';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  MapPin,
  FileText,
  Droplets,
};

export const StandaloneWhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            Verified Standards & Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Property Owners Trust Our Oakwood Remediation Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every remediation project is backed by standardized engineering protocols, upfront written documentation,
            and deep understanding of Montgomery County residential structures.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-7 sm:p-8 hover:border-emerald-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-amber-300 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                        Pillar 0{idx + 1} &bull; {pillar.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Trust Assurance */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                Guaranteed Written Scope Prior to Any Work
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                No Guesswork. No High-Pressure Tactics. Just Transparent Remediation.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are managing a real estate transaction clearance in Oakwood, remediating basement stone
                seepage, or addressing attic condensation in Kettering, you receive direct communication from
                qualified technicians every step of the way.
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-6 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>EPA-Registered Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>HEPA Air Scrubbing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Certified Moisture Meters</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-4">
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                Speak Directly with an Oakwood Specialist
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
                {LANDING_IDENTITY.phoneDisplay}
              </div>
              <p className="text-xs text-slate-300">
                Mon–Sat 7AM–7PM &bull; 24/7 Moisture Dispatch
              </p>
              <div className="pt-2">
                <a
                  href={LANDING_IDENTITY.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call For Immediate Help</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
