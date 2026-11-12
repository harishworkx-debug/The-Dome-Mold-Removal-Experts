import { Link, useParams, useLocation, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, BookOpen } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta, { ServiceLocationLinks } from '@/components/PageCta';
import { ServiceIcon } from '@/components/ServiceIcon';
import { ServiceBodySections } from '@/components/ServiceBodySections';
import { business, services, locations, getLocationPath } from '@/data/business';
import { guides } from '@/data/guides';
import { ComboPage, getComboPage, combosForService, combosForLocation, resolveLegacyRedirect } from '@/data/combos';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/structuredData';

const CORE_RELATED_SLUGS = [
  'mold-testing',
  'moisture-inspection',
  'basement-mold-inspection',
  'attic-mold-inspection',
  'mold-removal',
  'mold-remediation',
];

function localizeServiceText(text: string, locationName: string, locShort: string): string {
  return text
    .replace(/Oakwood and Miami Valley/g, `${locationName} and the Miami Valley`)
    .replace(/Oakwood, Ohio/g, locShort)
    .replace(/Oakwood, OH/g, locShort)
    .replace(/Oakwood homes/g, `${locationName} homes`)
    .replace(/Oakwood basements/g, `${locationName} basements`)
    .replace(/Dayton and Moraine/g, locationName)
    .replace(/Dayton, Ohio/g, locShort)
    .replace(/Dayton-area/g, `${locationName}-area`)
    .replace(/Dayton area/g, `${locationName} area`);
}

export default function ServiceLocationPage({ comboOverride }: { comboOverride?: ComboPage } = {}) {
  const params = useParams();
  const locationHook = useLocation();
  const currentPath = comboOverride ? comboOverride.path : (params['*'] ? `/${params['*']}` : locationHook.pathname);

  const redirectTarget = !comboOverride ? resolveLegacyRedirect(currentPath) : undefined;
  if (redirectTarget) {
    return <Navigate to={redirectTarget} replace />;
  }

  const combo = comboOverride || getComboPage(currentPath);
  if (!combo) return <Navigate to="/404" replace />;

  const service = services.find((s) => s.slug === combo.serviceSlug)!;
  const location = locations.find((l) => l.slug === combo.locationSlug)!;
  const locShort = `${location.name}, ${location.stateAbbr}`;

  const crumbs = [
    { name: 'Services', path: '/services' },
    { name: service.name, path: service.corePath },
    { name: `${service.name} in ${locShort}`, path: combo.path },
  ];

  const faqs = [
    ...service.faqs.map((f) => ({
      q: localizeServiceText(f.q, location.name, locShort),
      a: localizeServiceText(f.a, location.name, locShort),
    })),
    {
      q: `Do you connect homeowners with ${service.shortName.toLowerCase()} pros in ${locShort}?`,
      a: `Yes. ${locShort} is within our referral service area. Call ${business.phoneDisplay} to connect with independent local ${service.shortName.toLowerCase()} specialists serving ${location.name}.`,
    },
    {
      q: `How do I schedule ${service.shortName.toLowerCase()} in ${location.name}?`,
      a: `Call ${business.phoneDisplay}. A direct phone call connects you with independent local specialists serving ${location.name}—no email queues or online booking forms required.`,
    },
  ];

  const allServicesHere = combosForLocation(location.slug);
  const relatedServicesHere = CORE_RELATED_SLUGS
    .filter((slug) => slug !== service.slug)
    .map((slug) => allServicesHere.find((c) => c.serviceSlug === slug))
    .filter((c): c is ComboPage => Boolean(c));
  const otherServicesHere = allServicesHere.filter((c) => c.serviceSlug !== service.slug);
  const thisServiceElsewhere = combosForService(service.slug).filter((c) => c.locationSlug !== location.slug);
  const relatedGuides = guides.filter((g) => service.relatedGuideSlugs.includes(g.slug));

  const localizedSummary = localizeServiceText(service.summary, location.name, locShort);

  return (
    <>
      <Seo
        title={combo.title}
        description={combo.metaDescription}
        path={combo.path}
        jsonLd={[
          breadcrumbJsonLd(crumbs),
          faqJsonLd(faqs),
          serviceJsonLd(service.name, location.name, combo.path),
        ]}
      />
      <Breadcrumbs items={crumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} width={940} height={650} className="h-full w-full object-cover opacity-25" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900/90 to-forest-800/70" />
        </div>
        <div className="container-page relative py-14 lg:py-20">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-card">
              <ServiceIcon name={service.icon} className="h-7 w-7 text-forest-700" />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 ring-1 ring-teal-500/30">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {location.county}
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl text-balance">
            {combo.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-100">
            {localizedSummary}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {service.ctaLabel}
            </a>
            <Link to={getLocationPath(location.slug)} className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-800/60">
              All Mold Services in {locShort}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-mold">
            <ServiceBodySections
              service={service}
              cityLabel={location.name}
              locShortLabel={locShort}
              afterIntro={
                <div className="not-prose mt-6 rounded-2xl border border-forest-100 bg-forest-50/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-800">
                    {location.name}, {location.stateAbbr} Local Property &amp; Moisture Context
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{location.blurb}</p>
                  <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-charcoal-700 sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-charcoal-900">Typical Housing Stock</p>
                      <p className="mt-1 leading-relaxed">{location.housingEra}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-900">Drainage &amp; Site Factors</p>
                      <p className="mt-1 leading-relaxed">{location.soilAndDrainage}</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 border-t border-forest-200/70 pt-3 text-xs text-charcoal-700">
                    {location.concerns.map((concern) => (
                      <li key={concern} className="flex items-start gap-2">
                        <span className="font-bold text-forest-600">•</span>
                        <span>{concern}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 border-t border-forest-200/70 pt-3 text-sm leading-relaxed text-charcoal-700">
                    <strong className="text-charcoal-900">Local Focus:</strong> {location.localFocusNote}{' '}
                    <Link to={service.corePath} className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
                      Read the {service.name} Overview
                    </Link>
                  </p>
                </div>
              }
              beforeFaq={
                <>
                  <Reveal delay={180}>
                    <div className="rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100 not-prose mt-8">
                      <h2 className="font-display text-xl font-bold text-charcoal-900">
                        Related {location.name} Services &amp; Location Pages
                      </h2>
                      <p className="mt-2 text-sm text-charcoal-600">
                        Explore closely related services in {locShort} or compare local coverage in Oakwood and Dayton:
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {relatedServicesHere.map((rel) => (
                          <Link
                            key={rel.path}
                            to={rel.path}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-forest-700 ring-1 ring-forest-200 transition-colors hover:bg-forest-100"
                          >
                            {rel.serviceName} in {location.name}, {location.stateAbbr}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        ))}
                        <Link
                          to={service.corePath}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-charcoal-800 ring-1 ring-charcoal-200 transition-colors hover:bg-forest-100 hover:text-forest-800"
                        >
                          Overview: {service.name} Guide
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                        <Link
                          to="/mold-removal-oakwood-oh"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-forest-800 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
                        >
                          Oakwood, OH Mold Services
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                        <Link
                          to="/mold-removal-dayton-oh"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-forest-800 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
                        >
                          Dayton, OH Mold Services
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>

                  {relatedGuides.length > 0 && (
                    <Reveal delay={190}>
                      <div className="not-prose mt-6 rounded-2xl border border-charcoal-100 bg-white p-6 shadow-card">
                        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
                          <BookOpen className="h-5 w-5 text-forest-600" aria-hidden="true" />
                          Related Homeowner Articles for {service.shortName}
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {relatedGuides.map((guide) => (
                            <Link
                              key={guide.slug}
                              to={`/${guide.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-800 ring-1 ring-forest-200 transition-colors hover:bg-forest-100"
                            >
                              {guide.title}
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          ))}
                          <Link
                            to="/guides"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-charcoal-50 px-3.5 py-2 text-xs font-semibold text-charcoal-700 ring-1 ring-charcoal-200 transition-colors hover:bg-charcoal-100"
                          >
                            All Mold Research Articles
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  )}
                </>
              }
            />

            <Reveal delay={200}>
              <h2>{service.shortName} in {location.name} FAQs</h2>
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
                <h3 className="font-display text-lg font-bold">Call About {service.shortName} in {location.name}</h3>
                <p className="mt-2 text-sm text-forest-200">
                  Tell us what you are seeing and where your {location.name} property is located.
                </p>
                <a href={business.phoneHref} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-semibold text-forest-950 transition-colors hover:bg-teal-300">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {service.ctaLabel}
                </a>
                <Link
                  to="/contact"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-forest-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-700"
                >
                  Contact &amp; Service Area Info
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">Other Services in {location.name}</h3>
                <ul className="mt-4 space-y-2">
                  {otherServicesHere.map((c) => (
                    <li key={c.path}>
                      <Link to={c.path} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        <span>{c.serviceName} in {location.name}, {location.stateAbbr}</span>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-forest-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ServiceLocationLinks serviceSlug={service.slug} serviceName={service.name} currentLocationSlug={location.slug} />
            </Reveal>
          </aside>
        </div>
      </section>

      {/* This service elsewhere */}
      <section className="bg-charcoal-50 py-14 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
              {service.name} in Other Service Areas
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {thisServiceElsewhere.map((c, i) => (
              <Reveal key={c.path} delay={i * 30}>
                <Link to={c.path} className="group flex items-center justify-between rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-charcoal-700 shadow-card ring-1 ring-charcoal-100/60 transition-all hover:text-forest-700 hover:ring-forest-300">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-forest-500" aria-hidden="true" />
                    {service.shortName} in {c.locationName}, {c.locationState}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link to="/mold-removal-oakwood-oh" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
              Oakwood, OH Location Page
            </Link>
            <Link to="/mold-removal-dayton-oh" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
              Dayton, OH Location Page
            </Link>
            <Link to="/contact" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
              Contact The Dome ({business.phoneDisplay})
            </Link>
          </div>
        </div>
      </section>

      <PageCta
        headline={`Need ${service.shortName} in ${locShort}?`}
        subtext={`Call ${business.phoneDisplay} to connect with independent local ${service.shortName.toLowerCase()} specialists serving ${locShort}.`}
      />
    </>
  );
}
