import { Phone, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { LANDING_IDENTITY, TRUST_STATS, VERIFIED_IMAGES } from './data';

export default function StandaloneHero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-white">
      {/* Background Image with Rich Forest/Charcoal Gradient Overlays */}
      <div className="absolute inset-0">
        <img
          src={VERIFIED_IMAGES.hero}
          alt={VERIFIED_IMAGES.heroAlt}
          width={1600}
          height={900}
          className="h-full w-full object-cover opacity-25 object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="container-wide relative py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-forest-800/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 border border-teal-500/30 shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
              <span>Dedicated Local Service · {LANDING_IDENTITY.location} ({LANDING_IDENTITY.primaryZip})</span>
            </div>

            {/* Strict Niche + Location H1 */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_IDENTITY.niche} in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-200">
                {LANDING_IDENTITY.location}
              </span>
            </h1>

            {/* Natural, Informative Description */}
            <p className="max-w-2xl text-base sm:text-lg text-forest-100 leading-relaxed font-normal">
              Prompt, certified structural mold remediation, negative-air containment, and non-invasive moisture diagnostics.
              We specialize in Oakwood’s historic 1920s–1950s masonry basements, crawl space vapor control, and attic condensation issues across Montgomery County.
            </p>

            {/* Trust Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-forest-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span>IICRC S520-Aligned Containment Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span>Non-Destructive Thermal &amp; Moisture Tracing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span>100% Upfront, Written Scope of Work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span>Direct Phone Dispatch Across Montgomery County</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300 shadow-lift flex items-center justify-center gap-3 font-bold"
              >
                <Phone className="h-5 w-5 text-forest-950" aria-hidden="true" />
                <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-400/60 bg-forest-900/60 backdrop-blur-sm px-6 py-4 text-base font-semibold text-white hover:bg-forest-800 transition-colors"
              >
                <span>Request Inspection Scope</span>
                <ArrowRight className="h-4 w-4 text-teal-300" aria-hidden="true" />
              </a>
            </div>

            {/* Emergency & Hours Reassurance */}
            <div className="flex items-center gap-3 pt-2 text-xs text-forest-300">
              <Clock className="h-4 w-4 text-teal-400" />
              <span>{LANDING_IDENTITY.hours} · Direct Phone Response</span>
            </div>
          </div>

          {/* Quick Dispatch Card / Trust Box (4 cols on lg) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-forest-900/90 border border-forest-700/70 p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-6">
              <div className="flex items-center gap-3 border-b border-forest-800 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/20 text-teal-300 border border-teal-400/30">
                  <ShieldCheck className="h-6 w-6 text-teal-300" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white">Local Mold Removal Services</h2>
                  <p className="text-xs text-forest-300">Oakwood, OH &amp; Montgomery County</p>
                </div>
              </div>

              {/* 4 Verified Stats */}
              <div className="grid grid-cols-2 gap-4">
                {TRUST_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-forest-950/60 p-3.5 border border-forest-800">
                    <div className="font-display text-lg sm:text-xl font-extrabold text-teal-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-forest-200 mt-0.5 leading-snug font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-forest-950/80 p-4 border border-teal-500/20 text-xs text-forest-200 leading-relaxed space-y-2">
                <p className="font-semibold text-teal-300 flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  Have an Active Leak or Odor Concern?
                </p>
                <p>
                  Microscopic mold spores can colonize damp drywall within 24 to 48 hours. Speak directly with a local specialist to schedule containment or an on-site moisture evaluation.
                </p>
              </div>

              <a
                href={LANDING_IDENTITY.phoneHref}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-teal-400 px-5 py-3.5 text-sm font-bold text-forest-950 hover:bg-teal-300 transition-colors shadow-md text-center"
              >
                <Phone className="h-4 w-4" />
                Speak to a Technician Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
