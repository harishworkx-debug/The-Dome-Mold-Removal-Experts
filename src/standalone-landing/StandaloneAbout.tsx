import { MapPin, ShieldAlert, CheckCircle2, Home, Droplets } from 'lucide-react';
import { LANDING_IDENTITY, VERIFIED_IMAGES } from './data';

export default function StandaloneAbout() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-charcoal-100">
              <img
                src={VERIFIED_IMAGES.basement}
                alt={VERIFIED_IMAGES.basementAlt}
                width={650}
                height={940}
                className="w-full h-auto object-cover max-h-[520px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-forest-950/80 backdrop-blur-md border border-forest-700/60">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Oakwood Architectural Focus
                </p>
                <p className="text-sm text-forest-100 mt-1 font-medium">
                  Historic stone basements, addition crawl spaces &amp; clay soil moisture mitigation
                </p>
              </div>
            </div>

            {/* Overlapping Trust Pill */}
            <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-3 bg-white p-4 rounded-2xl shadow-lift border border-forest-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-charcoal-900">IICRC S520 Compliant</p>
                <p className="text-[11px] text-charcoal-500">Standard for Mold Remediation</p>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-forest-800 border border-forest-200">
              <Home className="h-3.5 w-3.5 text-forest-600" />
              <span>Local Building &amp; Climate Diagnostics</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              Engineered Remediation for {LANDING_IDENTITY.location} Architectural Challenges
            </h2>

            <p className="text-base text-charcoal-700 leading-relaxed">
              Oakwood is renowned for its historic 1920s through 1950s Tudor, colonial, and stone residences.
              However, these classic architectural structures present unique moisture vulnerabilities that generic surface cleaning fails to address.
            </p>

            {/* 3 Specific Local Challenge Cards */}
            <div className="space-y-4 pt-2">
              <div className="rounded-2xl bg-sand-50/70 border border-sand-200 p-5 space-y-2">
                <h3 className="font-display text-base font-bold text-charcoal-900 flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-forest-600" />
                  1. Dense Glacial Till Clay Soil &amp; Hydrostatic Pressure
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  Montgomery County soil consists of heavy glacial till that expands during rainy periods and holds runoff tightly against foundation walls.
                  In older Oakwood stone basements without modern exterior perimeter drainage tiles, hydrostatic pressure forces moisture through mortar joints, depositing chalky white efflorescence and promoting mold colonies.
                </p>
              </div>

              <div className="rounded-2xl bg-sand-50/70 border border-sand-200 p-5 space-y-2">
                <h3 className="font-display text-base font-bold text-charcoal-900 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-forest-600" />
                  2. Historic Unvented Addition Crawl Spaces
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  Many Oakwood properties have kitchen or family room additions built over shallow, dirt-floor crawl spaces lacking polyethylene ground vapor barriers.
                  Ground evaporation saturates subfloors and framing, fostering wood-decay fungi and sending musty odors up into living rooms.
                </p>
              </div>

              <div className="rounded-2xl bg-sand-50/70 border border-sand-200 p-5 space-y-2">
                <h3 className="font-display text-base font-bold text-charcoal-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-forest-600" />
                  3. Humid Ohio Summers &amp; Stack-Effect Airflow
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  During peak Miami Valley summer humidity, the thermal "stack effect" draws damp basement air up through wall cavities and into attics.
                  If bathroom exhaust ducts terminate inside roof framing rather than outside, warm moist air condenses on roof sheathing, requiring structural remediation.
                </p>
              </div>
            </div>

            {/* Reassurance Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-charcoal-600 border-t border-charcoal-100 pt-5">
              <span className="font-semibold text-charcoal-900">Standard of Care:</span>
              <span>All protocols incorporate EPA recommendations, negative pressure containment, and zero toxic chemical cover-ups.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
