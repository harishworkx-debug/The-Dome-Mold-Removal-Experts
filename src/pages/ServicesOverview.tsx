import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Search, ClipboardList, Sparkles, ShieldCheck, Droplets, HousePlus, ArrowDownToLine, Home, Wind, Building2, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business, services, locations } from '@/data/business';
import { combosForService } from '@/data/combos';
import { breadcrumbJsonLd } from '@/lib/structuredData';

const iconMap: Record<string, typeof Search> = {
  Search, ClipboardList, Sparkles, ShieldCheck, Droplets, HousePlus, ArrowDownToLine, Home, Wind, Building2,
};

export default function ServicesOverview() {
  const crumbs = [{ name: 'Services', path: '/services' }];
  return (
    <>
      <Seo
        title="Mold Inspection & Removal Services | The Dome Mold Removal Experts"
        description="Overview of mold inspection, assessment, removal, remediation, moisture inspection, water intrusion inspection, and basement mold inspection services in Dayton, Ohio. Call 937-967-3264."
        path="/services"
        jsonLd={[breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Our Services</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Mold Inspection and Removal Services
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              The Dome Mold Removal Experts offers mold-related inspection, assessment, and removal services for
              residential and commercial properties in Oakwood, Dayton, and the surrounding Miami Valley. Each service
              has its own page with detailed information, and each is available across our verified service areas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-wide space-y-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Search;
            const combos = combosForService(service.slug).slice(0, 6);
            return (
              <Reveal key={service.slug} delay={i * 40}>
                <article className="card-base grid grid-cols-1 overflow-hidden lg:grid-cols-3">
                  <div className="relative h-56 lg:h-auto">
                    <img src={service.image} alt={service.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-charcoal-900">{service.name}</h2>
                    </div>
                    <p className="mt-4 text-charcoal-600 leading-relaxed">{service.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      <Link to={`/services/${service.slug}`} className="btn-secondary !py-2.5 !text-sm">
                        {service.name} Details
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <a href={business.phoneHref} className="btn-call !py-2.5 !text-sm">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        {service.ctaLabel}
                      </a>
                    </div>

                    <div className="mt-6 border-t border-charcoal-100 pt-5">
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Available in
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {combos.map((c) => (
                          <Link
                            key={c.path}
                            to={c.path}
                            className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700 transition-colors hover:bg-forest-100"
                          >
                            {c.locationName}, {c.locationState}
                          </Link>
                        ))}
                        <Link to="/service-areas" className="rounded-full bg-charcoal-50 px-3 py-1 text-xs font-medium text-charcoal-600 transition-colors hover:bg-charcoal-100">
                          All areas
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
