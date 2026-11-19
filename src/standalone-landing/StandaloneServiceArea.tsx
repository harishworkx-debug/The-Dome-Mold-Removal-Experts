import React from 'react';
import { MapPin, Phone, CheckCircle, Navigation } from 'lucide-react';
import { LANDING_IDENTITY, NEARBY_CITIES } from './data';

export const StandaloneServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-slate-50 border-t border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5 text-teal-700" />
            Local Coverage & Field Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Service Area Across Oakwood & Montgomery County
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Rapid on-site response for residential and commercial mold assessments, containment, and structural drying
            throughout the greater Miami Valley region.
          </p>
        </div>

        {/* Primary Hub Spotlight */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Primary Service Hub
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {LANDING_IDENTITY.city}, {LANDING_IDENTITY.state} ({LANDING_IDENTITY.primaryZip})
              </h3>
              <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Same-day phone dispatch and priority on-site evaluations for historic homes, stone basements, and
                properties across Oakwood and adjacent neighborhoods.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 self-start md:self-center shrink-0">
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Grid of Genuine Nearby Communities */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-700" />
              Verified Nearby Service Communities
            </h4>
            <span className="text-xs sm:text-sm text-slate-700 font-semibold bg-white border border-slate-200 px-3 py-1 rounded-full">
              10 Regional Cities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEARBY_CITIES.map((city) => (
              <div
                key={city.name}
                className={`p-5 rounded-xl border transition-all duration-200 ${
                  city.name === 'Oakwood'
                    ? 'bg-emerald-50/60 border-emerald-300 shadow-sm ring-1 ring-emerald-200'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className={`w-4 h-4 shrink-0 ${
                        city.name === 'Oakwood' ? 'text-emerald-700' : 'text-teal-700'
                      }`}
                    />
                    <span className="font-bold text-slate-900 text-base">{city.name}, OH</span>
                  </div>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                    {city.zip}
                  </span>
                </div>
                <div className="text-xs text-slate-700 font-medium mb-1.5">{city.county}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{city.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Map Embed */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-sm font-bold text-slate-900">Regional Coverage Map: Oakwood & Montgomery County</span>
              <p className="text-xs text-slate-700">Centered on Oakwood, OH 45419 — mobile dispatch to all listed locations</p>
            </div>
            <a
              href="#contact"
              className="text-xs font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1 self-start sm:self-auto"
            >
              Request service for your address &rarr;
            </a>
          </div>
          <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
            <iframe
              title="Oakwood Ohio Regional Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24545.03923483981!2d-84.1852945!3d39.722557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884083cfc09fca1d%3A0xb6c76e271cfbbda8!2sOakwood%2C%20OH%2045419!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
            <span>Fast mobile field units stationed throughout Montgomery & Greene County</span>
            <a
              href={LANDING_IDENTITY.phoneHref}
              className="font-bold text-slate-900 hover:text-emerald-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              Direct Inquiries: {LANDING_IDENTITY.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
