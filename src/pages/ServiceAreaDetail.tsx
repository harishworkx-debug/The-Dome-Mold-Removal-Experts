import { Link, useParams, useLocation, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, CheckCircle2, BookOpen, ShieldQuestion, Building2 } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business, locations, services, getLocationPath } from '@/data/business';
import { combosForLocation } from '@/data/combos';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/structuredData';

const SERVICE_AREA_PREFIX = 'mold-inspection-and-removal-';

const SHARED_CONTRACTOR_QUESTIONS = [
  'Will a clear written scope be provided before any tear-out, containment, or treatment work begins?',
  'Is visual moisture tracing or independent lab testing separated from physical remediation contracting?',
  'Which underlying plumbing, roofing, or exterior drainage repairs should happen outside the cleanup scope so mold does not return?',
];

export default function ServiceAreaDetail({ locationSlugOverride }: { locationSlugOverride?: string } = {}) {
  const params = useParams();
  const locationHook = useLocation();

  let rawSlug = locationSlugOverride || params.locationSlug;
  if (!rawSlug) {
    const path = locationHook.pathname.replace(/^\//, '');
    if (path.startsWith(SERVICE_AREA_PREFIX)) {
      rawSlug = path;
    }
  }

  const cleanSlug = rawSlug?.startsWith(SERVICE_AREA_PREFIX)
    ? rawSlug.slice(SERVICE_AREA_PREFIX.length)
    : rawSlug;

  const location = locations.find((l) => l.slug === cleanSlug);
  if (!location) return <Navigate to="/404" replace />;

  const pagePath = getLocationPath(location.slug);

  // Redirect legacy /service-areas/*, /mold-inspection-and-removal-*, or bare /{city}-oh URLs to /mold-removal-{city}-oh
  if (
    locationHook.pathname.startsWith('/service-areas/') ||
    locationHook.pathname.startsWith(`/${SERVICE_AREA_PREFIX}`) ||
    locationHook.pathname === `/${location.slug}`
  ) {
    return <Navigate to={pagePath} replace />;
  }

  const combos = combosForLocation(location.slug);
  const hasCommercial = combos.some((c) => c.serviceSlug === 'commercial-mold-inspection');
  const seoTitle =
    location.seoTitle ??
    `Mold Removal in ${location.name}, ${location.stateAbbr} | Inspection & Remediation | The Dome`;
  const seoDescription =
    location.metaDescription ??
    `Connect with independent mold removal, inspection, testing, and remediation contractors in ${location.name}, ${location.stateAbbr}. Call The Dome at 937-967-3264.`;
  const pageHeading =
    location.h1 ?? `Mold Removal & Inspection in ${location.name}, ${location.stateAbbr}`;

  const crumbs = [
    { name: 'Service Areas', path: '/service-areas' },
    { name: pageHeading, path: pagePath },
  ];
  const { locationOverview } = location;
  const faqs = locationOverview.faqs;
  const allContractorQuestions = [
    ...SHARED_CONTRACTOR_QUESTIONS,
    ...locationOverview.localContractorQuestions,
  ];

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={pagePath}
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
            {pageHeading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-100">{location.blurb}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-800/60">
              Contact Us for {location.name} Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-mold">
            <Reveal>
              <h2>Mold Referral Network Serving {location.name}, {location.stateAbbr}</h2>
              <p>
                {location.name}, {location.stateAbbr} is part of the service area for The Dome Mold Removal Experts. We
                operate as a service-area referral network connecting {location.name} homeowners, landlords, and
                property managers with independent local contractors for mold inspection, mold testing, mold removal,
                and mold remediation across {location.county}. The Dome connects callers with qualified independent
                specialists rather than directly performing physical remediation work.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div className="not-prose my-8 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
                <h2 className="font-display text-xl font-bold text-charcoal-900">
                  Popular Mold Services in {location.name}, {location.stateAbbr}
                </h2>
                <p className="mt-2 text-sm text-charcoal-600">
                  Go directly to the local service page you need in {location.name} or explore our core service overviews:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { label: `Mold Inspection in ${location.name}`, to: `/mold-inspection-${location.slug}` },
                    { label: `Mold Testing in ${location.name}`, to: `/mold-testing-${location.slug}` },
                    { label: 'Mold Removal Service Overview', to: '/mold-removal' },
                    { label: `Mold Remediation in ${location.name}`, to: `/mold-remediation-${location.slug}` },
                    { label: `Basement Mold Inspection in ${location.name}`, to: `/basement-mold-inspection-${location.slug}` },
                    ...(hasCommercial
                      ? [{ label: `Commercial Mold Inspection in ${location.name}`, to: `/commercial-mold-inspection-${location.slug}` }]
                      : []),
                    { label: 'Contact The Dome', to: '/contact' },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-forest-700 ring-1 ring-forest-200 transition-colors hover:bg-forest-100"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <div className="mt-5 border-t border-forest-200/70 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-800">
                    Core Service Overviews &amp; Moisture Guides
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {services.slice(0, 6).map((s) => (
                      <Link
                        key={s.corePath}
                        to={s.corePath}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal-700 ring-1 ring-charcoal-200 transition-colors hover:bg-forest-100 hover:text-forest-800"
                      >
                        {s.name} Guide
                      </Link>
                    ))}
                    <Link
                      to="/causes-of-mold-growth-ohio-basements"
                      className="inline-flex items-center gap-1 rounded-full bg-forest-800 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
                    >
                      <BookOpen className="h-3 w-3" aria-hidden="true" />
                      Ohio Basement Mold Causes
                    </Link>
                    <Link
                      to="/what-happens-during-professional-mold-inspection"
                      className="inline-flex items-center gap-1 rounded-full bg-forest-800 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
                    >
                      <BookOpen className="h-3 w-3" aria-hidden="true" />
                      Mold Inspection Process
                    </Link>
                    <Link
                      to="/basement-moisture-guide"
                      className="inline-flex items-center gap-1 rounded-full bg-forest-800 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
                    >
                      <BookOpen className="h-3 w-3" aria-hidden="true" />
                      Basement Moisture Guide
                    </Link>
                    <Link
                      to="/mold-prevention-guide"
                      className="inline-flex items-center gap-1 rounded-full bg-forest-800 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
                    >
                      <BookOpen className="h-3 w-3" aria-hidden="true" />
                      Mold Prevention Guide
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2>Local Property Conditions in {location.name}</h2>
              <div className="not-prose my-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-700">Housing Stock &amp; Construction</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">{location.housingEra}</p>
                </div>
                <div className="rounded-xl border border-charcoal-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest-700">Soil, Drainage &amp; Moisture</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">{location.soilAndDrainage}</p>
                </div>
              </div>

              <h3>Mold Concerns in {location.name} Residential Properties</h3>
              <p>{locationOverview.residentialConcernsBody}</p>

              <h3>Basement Moisture and Water Intrusion</h3>
              <p>{locationOverview.basementAndWaterBody}</p>

              <h3>Mold Concerns Following Plumbing and Roof Leaks</h3>
              <p>{locationOverview.plumbingAndRoofBody}</p>

              <p className="rounded-xl bg-sand-50 p-4 text-sm text-charcoal-700 ring-1 ring-sand-200">
                <strong>What local calls focus on in {location.name}:</strong> {location.localFocusNote}
              </p>
              <ul>
                {location.concerns.map((c) => (
                  <li key={c}>
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="not-prose my-8 rounded-2xl border border-forest-100 bg-white p-6 shadow-card">
                <h2 className="flex items-center gap-2 font-display text-xl font-bold text-charcoal-900">
                  <Building2 className="h-5 w-5 text-forest-700" aria-hidden="true" />
                  Residential and Commercial Property Assistance
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal-700">
                  {locationOverview.propertyTypesBody}
                </p>
                {hasCommercial && (
                  <Link
                    to={`/commercial-mold-inspection-${location.slug}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600"
                  >
                    Explore Commercial Mold Inspection in {location.name}, {location.stateAbbr}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )}

                <h3 className="mt-6 font-display text-lg font-bold text-charcoal-900">
                  How to Arrange an Inspection in {location.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                  {locationOverview.arrangeNote}
                </p>
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-charcoal-700">
                  <li>Call {business.phoneDisplay} directly by phone—no web form queues or walk-in office visits needed.</li>
                  <li>Share what you are noticing (musty odors, basement dampness, staining, or past water intrusion) and your {location.name} property type.</li>
                  <li>Connect with an independent local inspector or remediation contractor serving {location.county} to schedule an on-site estimate.</li>
                </ol>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="not-prose my-8 rounded-2xl border border-sand-200 bg-sand-50/70 p-6">
                <h2 className="flex items-center gap-2 font-display text-xl font-bold text-charcoal-900">
                  <ShieldQuestion className="h-5 w-5 text-forest-700" aria-hidden="true" />
                  What {location.name} Homeowners Should Ask Before Hiring a Contractor
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-charcoal-700">
                  {allContractorQuestions.map((question) => (
                    <li key={question} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2>Frequently Asked Questions for {location.name} Properties</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group rounded-xl border border-charcoal-100 bg-white p-5 open:bg-forest-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-charcoal-900">
                      {faq.q}
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-charcoal-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Reveal delay={80}>
              <div className="rounded-2xl bg-forest-800 p-6 text-white shadow-card">
                <h3 className="font-display text-lg font-bold">Need Mold Services in {location.name}?</h3>
                <p className="mt-2 text-sm text-forest-200">
                  Call our referral line directly to connect with independent local mold inspectors and remediation
                  contractors serving {location.name}.
                </p>
                <a href={business.phoneHref} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-semibold text-forest-950 transition-colors hover:bg-teal-300">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
                <Link to="/contact" className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-forest-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-700">
                  Contact Page &amp; Service Area Info
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">Other Service Areas</h3>
                <ul className="mt-4 space-y-2">
                  {locations.filter((l) => l.slug !== location.slug).map((l) => (
                    <li key={l.slug}>
                      <Link to={getLocationPath(l.slug)} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        <span>Mold Removal in {l.name}, {l.stateAbbr}</span>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-forest-500" aria-hidden="true" />
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
