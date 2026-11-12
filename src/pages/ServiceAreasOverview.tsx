import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { locations, getLocationPath } from '@/data/business';
import { breadcrumbJsonLd } from '@/lib/structuredData';

export default function ServiceAreasOverview() {
  const crumbs = [{ name: 'Service Areas', path: '/service-areas' }];
  return (
    <>
      <Seo
        title="Mold Inspection & Removal Service Areas | The Dome Mold Removal Experts"
        description="The Dome Mold Removal Experts serves Oakwood, Dayton, Kettering, Centerville, Beavercreek, Miamisburg, and the Miami Valley. Find your area and call 937-967-3264."
        path="/service-areas"
        jsonLd={[breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal immediate className="max-w-3xl">
            <span className="eyebrow">Where We Work</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Mold Inspection and Removal Service Areas
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              The Dome Mold Removal Experts serves Oakwood, OH as a primary service-area referral network connecting
              homeowners across Dayton and surrounding Miami Valley communities with independent local mold inspectors
              and remediation contractors. Select any community below to view local services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 50}>
              <Link
                to={getLocationPath(loc.slug)}
                className="card-base group flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-forest-500 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-charcoal-900">
                  {loc.name}, {loc.stateAbbr}
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-charcoal-400">{loc.county}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">{loc.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                  Mold Inspection &amp; Removal in {loc.name}, {loc.stateAbbr}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        headline="Don't See Your Community?"
        subtext="Call The Dome Mold Removal Experts and tell us where your property is. We will let you know whether we serve your area."
      />
    </>
  );
}
