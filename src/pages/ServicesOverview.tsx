import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { ServiceIcon } from '@/components/ServiceIcon';
import { business, services } from '@/data/business';
import { combosForService } from '@/data/combos';
import { breadcrumbJsonLd } from '@/lib/structuredData';

export default function ServicesOverview() {
  const crumbs = [{ name: 'Services', path: '/services' }];
  return (
    <>
      <Seo
        title="Mold Inspection, Testing & Removal Services in Oakwood, OH | The Dome"
        description="Explore mold inspection, mold testing, mold removal, mold remediation, and moisture inspection referral services in Oakwood, OH and the Miami Valley. Call 937-967-3264."
        path="/services"
        jsonLd={[breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal immediate className="max-w-3xl">
            <span className="eyebrow">Our Services</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Mold Inspection, Testing &amp; Removal Services
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              The Dome Mold Removal Experts connects residential and commercial property owners in Oakwood, OH and
              surrounding Miami Valley communities with independent local mold inspectors, testing specialists, and
              remediation contractors. Explore any service below or view local pages by city.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-wide space-y-8">
          {services.map((service, i) => {
            const combos = combosForService(service.slug).slice(0, 6);
            return (
              <Reveal key={service.slug} delay={i * 40}>
                <article className="card-base grid grid-cols-1 overflow-hidden lg:grid-cols-3">
                  <div className="relative h-56 lg:h-auto">
                    <img src={service.image} alt={service.imageAlt} width={940} height={650} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-charcoal-900">{service.name}</h2>
                    </div>
                    <p className="mt-4 text-charcoal-600 leading-relaxed">{service.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      <Link to={service.corePath} className="btn-secondary !py-2.5 !text-sm">
                        Explore {service.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <a href={business.phoneHref} className="btn-call !py-2.5 !text-sm">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        {service.ctaLabel}
                      </a>
                    </div>

                    <div className="mt-6 border-t border-charcoal-100 pt-5">
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Available Service Locations
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {combos.map((c) => (
                          <Link
                            key={c.path}
                            to={c.path}
                            className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700 transition-colors hover:bg-forest-100"
                          >
                            {service.shortName} in {c.locationName}, {c.locationState}
                          </Link>
                        ))}
                        <Link to="/service-areas" className="rounded-full bg-charcoal-50 px-3 py-1 text-xs font-medium text-charcoal-600 transition-colors hover:bg-charcoal-100">
                          Explore All Mold Service Areas
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PageCta
        headline="Not Sure Which Service You Need?"
        subtext="Call The Dome Mold Removal Experts and describe what you are seeing. We will help you understand which inspection or removal service fits your situation."
      />
    </>
  );
}
