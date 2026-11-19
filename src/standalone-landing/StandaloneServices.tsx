import { Phone, Check, ArrowRight, Sparkles, ShieldCheck, Search, FlaskConical, ArrowDownToLine, Home } from 'lucide-react';
import { LANDING_SERVICES, LANDING_IDENTITY } from './data';

interface StandaloneServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function StandaloneServices({ onSelectService }: StandaloneServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-teal-400" aria-hidden="true" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-teal-400" aria-hidden="true" />;
      case 'Search':
        return <Search className="h-6 w-6 text-teal-400" aria-hidden="true" />;
      case 'FlaskConical':
        return <FlaskConical className="h-6 w-6 text-teal-400" aria-hidden="true" />;
      case 'ArrowDownToLine':
        return <ArrowDownToLine className="h-6 w-6 text-teal-400" aria-hidden="true" />;
      case 'Home':
        return <Home className="h-6 w-6 text-teal-400" aria-hidden="true" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-teal-400" aria-hidden="true" />;
    }
  };

  const handleCardClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-forest-50/50 scroll-mt-20">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-forest-800">
            Certified Remediation &amp; Diagnostic Scope
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Comprehensive Mold Services in {LANDING_IDENTITY.location}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            From isolated surface contamination to complex historic basement seepage and whole-home air filtration, every protocol is engineered to eradicate mold and correct moisture triggers.
          </p>
        </div>

        {/* 6 Responsive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDING_SERVICES.map((service) => (
            <article
              key={service.id}
              className="card-base group flex flex-col justify-between p-7 bg-white hover:-translate-y-1 transition-all duration-300 border border-charcoal-100 hover:border-forest-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-forest-600 via-teal-500 to-forest-500 opacity-90" />

              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900 text-teal-300 shadow-md">
                    {getIcon(service.icon)}
                  </div>
                  <span className="rounded-full bg-forest-100/80 px-3 py-1 text-xs font-semibold text-forest-800">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Checklist */}
                <div className="border-t border-charcoal-100/80 pt-5 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-3">
                    Protocol Inclusions:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-700">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="flex h-4 w-4 rounded-full bg-teal-100 text-teal-700 items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleCardClick(service.title)}
                  className="flex items-center justify-between w-full rounded-xl bg-forest-50 hover:bg-forest-100 px-4 py-3 text-xs sm:text-sm font-semibold text-forest-800 transition-colors group/btn"
                >
                  <span>Request Scope for This Service</span>
                  <ArrowRight className="h-4 w-4 text-forest-600 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <a
                  href={LANDING_IDENTITY.phoneHref}
                  className="flex items-center justify-center gap-2 text-xs font-semibold text-forest-600 hover:text-forest-800 py-1"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call {LANDING_IDENTITY.phoneDisplay} to Schedule</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner within Services Section */}
        <div className="mt-14 rounded-3xl bg-forest-900 text-white p-8 sm:p-10 shadow-xl border border-forest-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Unsure which protocol fits your Oakwood property?
            </h3>
            <p className="text-sm text-forest-200 max-w-xl">
              Describe what you are seeing or smelling (musty odor, dark wall staining, efflorescence, or basement seepage) and speak directly with a local specialist.
            </p>
          </div>
          <a
            href={LANDING_IDENTITY.phoneHref}
            className="btn-call bg-teal-400 !text-forest-950 hover:bg-teal-300 shadow-md flex-shrink-0 font-bold"
          >
            <Phone className="h-4 w-4" />
            <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
