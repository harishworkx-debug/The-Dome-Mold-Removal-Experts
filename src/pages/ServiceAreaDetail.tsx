import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business, locations, services } from '@/data/business';
import { combosForLocation } from '@/data/combos';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/structuredData';

function locationFaqs(name: string, stateAbbr: string) {
  return [
    {
      q: `Does The Dome Mold Removal Experts serve ${name}, ${stateAbbr}?`,
      a: `Yes. ${name}, ${stateAbbr} is part of our verified service area in the Miami Valley. Call ${business.phoneDisplay} to discuss your property.`,
    },
    {
      q: `What mold services are available in ${name}?`,
      a: `The mold inspection, assessment, removal, remediation, moisture inspection, water intrusion inspection, and basement mold inspection services listed on this page are available in ${name}. Each has its own dedicated ${name} page linked below.`,
    },
    {
      q: `Can you identify the type of mold in my ${name} property?`,
      a: `A visual inspection alone cannot identify mold species or determine toxicity. Sampling and laboratory analysis are separate from a visual inspection. Call to ask whether sampling is available for your situation.`,
    },
    {
      q: `How do I schedule a mold inspection in ${name}?`,
      a: `Call ${business.phoneDisplay}. We do not use online forms, booking systems, or email, a direct phone call is the only way to reach us.`,
    },
  ];
}

export default function ServiceAreaDetail() {
  const { locationSlug } = useParams();
  const location = locations.find((l) => l.slug === locationSlug);
  if (!location) return <Navigate to="/404" replace />;

  const combos = combosForLocation(location.slug);
  const crumbs = [
    { name: 'Service Areas', path: '/service-areas' },
    { name: `${location.name}, ${location.stateAbbr}`, path: `/service-areas/${location.slug}` },
  ];
  const faqs = locationFaqs(location.name, location.stateAbbr);

  return (
    <>
      <Seo
        title={`Mold Inspection & Removal in ${location.name}, ${location.stateAbbr} | The Dome Mold Removal Experts`}
        description={`Mold inspection, assessment, removal, and moisture inspection services in ${location.name}, ${location.stateAbbr}. Call The Dome Mold Removal Experts at 937-967-3264.`}
        path={`/service-areas/${location.slug}`}
        jsonLd={[breadcrumbJsonLd(crumbs), faqJsonLd(faqs)]}
      />
      <Breadcrumbs items={crumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
        <div className="container-page relative py-14 lg:py-20">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-card">
              <MapPin className="h-7 w-7 text-forest-700" aria-hidden="true" />
            </div>
            <span className="rounded-full bg-forest-800/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 ring-1 ring-teal-500/30">
              {location.county}
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl text-balance">
            Mold Inspection and Removal in {location.name}, {location.stateAbbr}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-100">{location.blurb}</p>
          <div className="mt-7">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-mold">
            <Reveal>
              <h2>Serving {location.name} Homeowners and Property Owners</h2>
              <p>
                {location.name} is part of the verified service area for The Dome Mold Removal Experts. We are based
                in Oakwood and serve {location.name} and the surrounding {location.county} communities. We talk with
                homeowners, landlords, and commercial property managers about mold, moisture, and indoor conditions,
                and we explain what an inspection or removal does and does not cover for your property.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2>Local Property Concerns in {location.name}</h2>
              <p>Properties in {location.name} share some common conditions that prompt calls about mold and moisture:</p>
              <ul>
                {location.concerns.map((c) => (
                  <li key={c}>
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2>Mold Services Available in {location.name}</h2>
              <p>
                Each service below has a dedicated {location.name} page with service-specific and location-specific
                information. Click any service to view its {location.name} page, or call to discuss which one fits
                your situation.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <h2>{location.name} Mold FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group rounded-xl border border-charcoal-100 bg-white p-5 open:bg-forest-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-charcoal-900">
                      {faq.q}
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-charcoal-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal delay={80}>
              <div className="rounded-2xl bg-forest-800 p-6 text-white shadow-card">
                <h3 className="font-display text-lg font-bold">Call About Your {location.name} Property</h3>
                <p className="mt-2 text-sm text-forest-200">
                  A direct phone call is the only way to reach us. Tell us what you are seeing and where your property
                  is located.
                </p>
                <a href={business.phoneHref} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-semibold text-forest-950 transition-colors hover:bg-teal-300">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">Other Service Areas</h3>
                <ul className="mt-4 space-y-2">
                  {locations.filter((l) => l.slug !== location.slug).map((l) => (
                    <li key={l.slug}>
                      <Link to={`/service-areas/${l.slug}`} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        {l.name}, {l.stateAbbr}
                        <ArrowRight className="h-3.5 w-3.5 text-forest-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Service-location combos for this area */}
      <section className="bg-charcoal-50 py-14 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Mold Services in {location.name}, {location.stateAbbr}
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal-600">
              Each service has its own dedicated {location.name} page with service-specific and location-specific
              content.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {combos.map((c, i) => (
              <Reveal key={c.path} delay={i * 30}>
                <Link to={c.path} className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 text-sm font-semibold text-charcoal-700 shadow-card ring-1 ring-charcoal-100/60 transition-all hover:text-forest-700 hover:ring-forest-300">
                  <span>{c.serviceName} in {location.name}</span>
                  <ArrowRight className="h-4 w-4 text-forest-500 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        headline={`Concerned About Mold in Your ${location.name} Property?`}
        subtext={`Call The Dome Mold Removal Experts to discuss your inspection or mold-related concerns in ${location.name}, ${location.stateAbbr}.`}
      />
    </>
  );
}
