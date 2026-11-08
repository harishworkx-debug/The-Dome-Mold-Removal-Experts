import { Link, useParams, useLocation, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, CheckCircle2, AlertCircle, Search, ClipboardList, Sparkles, ShieldCheck, Droplets, HousePlus, ArrowDownToLine, Home, Wind, Building2 } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta, { ServiceLocationLinks } from '@/components/PageCta';
import { business, services, locations } from '@/data/business';
import { ComboPage, getComboPage, combosForService, combosForLocation } from '@/data/combos';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/structuredData';
import ServiceAreaDetail from './ServiceAreaDetail';

const iconMap: Record<string, typeof Search> = {
  Search, ClipboardList, Sparkles, ShieldCheck, Droplets, HousePlus, ArrowDownToLine, Home, Wind, Building2,
};

export default function ServiceLocationPage({ comboOverride }: { comboOverride?: ComboPage } = {}) {
  const params = useParams();
  const locationHook = useLocation();
  const currentPath = comboOverride ? comboOverride.path : (params['*'] ? `/${params['*']}` : locationHook.pathname);

  if (currentPath.startsWith('/mold-inspection-and-removal-')) {
    return <ServiceAreaDetail />;
  }

  const combo = comboOverride || getComboPage(currentPath);
  if (!combo) return <Navigate to="/404" replace />;

  const service = services.find((s) => s.slug === combo.serviceSlug)!;
  const location = locations.find((l) => l.slug === combo.locationSlug)!;
  const Icon = iconMap[service.icon] ?? Search;
  const locShort = `${location.name}, ${location.stateAbbr}`;

  const isMainLocation = location.slug === 'oakwood-oh';

  const crumbs = isMainLocation
    ? [
        { name: 'Services', path: '/services' },
        { name: `${service.name} (${locShort})`, path: combo.path },
      ]
    : [
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/${service.slug}-oakwood-oh` },
        { name: locShort, path: combo.path },
      ];

  // Location-aware FAQ
  const faqs = [
    ...service.faqs.map((f) => ({
      q: f.q,
      a: f.a.replace('Dayton, Ohio', locShort).replace('Dayton-area', `${location.name}-area`).replace('Dayton area', `${location.name} area`),
    })),
    {
      q: `Do you offer ${service.shortName.toLowerCase()} in ${locShort}?`,
      a: `Yes. ${locShort} is part of our verified service area. Call ${business.phoneDisplay} to discuss your ${service.shortName.toLowerCase()} concerns in ${location.name}.`,
    },
    {
      q: `How do I schedule ${service.shortName.toLowerCase()} in ${location.name}?`,
      a: `Call ${business.phoneDisplay}. We do not use online forms, booking systems, or email. A direct phone call is the only way to reach us.`,
    },
  ];

  const otherServicesHere = combosForLocation(location.slug).filter((c) => c.serviceSlug !== service.slug);
  const thisServiceElsewhere = combosForService(service.slug).filter((c) => c.locationSlug !== location.slug);

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
          <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900/90 to-forest-800/70" />
        </div>
        <div className="container-page relative py-14 lg:py-20">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-card">
              <Icon className="h-7 w-7 text-forest-700" aria-hidden="true" />
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
            {service.summary.replace('Dayton, Ohio', locShort).replace('Dayton-area', `${location.name}-area`).replace('Dayton area', `${location.name} area`)}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {service.ctaLabel}
            </a>
            <Link to={`/mold-inspection-and-removal-${location.slug}`} className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-800/60">
              More {location.name} Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-mold">
            <Reveal>
              <h2>{service.name} for {location.name} Properties</h2>
              <p>
                {location.blurb} {service.description.split('.')[0]}. In {location.name}, this service focuses on the
                building conditions and moisture sources most relevant to {location.county} properties.
              </p>
              <p>{service.description.split('.').slice(1).join('.').trim()}.</p>
            </Reveal>

            <Reveal delay={80}>
              <h2>What {location.name} Property Owners Call About</h2>
              <p>Common concerns that prompt a {service.shortName.toLowerCase()} call from {location.name} include:</p>
              <ul>
                {[...service.concerns, ...location.concerns.slice(0, 2)].map((c, i) => (
                  <li key={i}>
                    <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2>What This Service Includes</h2>
              <ul>
                {service.workPerformed.map((w) => (
                  <li key={w}>
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <h2>Considerations for {location.name} Properties</h2>
              <ul>
                {service.considerations.map((c) => (
                  <li key={c}>
                    <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-sand-400" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="rounded-xl bg-sand-50 p-4 text-sm text-charcoal-700 ring-1 ring-sand-200">
                We do not diagnose health conditions, and a visual inspection alone cannot identify the specific
                species of mold present or determine whether any mold is toxigenic. Sampling and laboratory analysis
                are separate from a visual inspection, call to ask whether sampling is available for your situation.
              </p>
            </Reveal>

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
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">Other Services in {location.name}</h3>
                <ul className="mt-4 space-y-2">
                  {otherServicesHere.map((c) => (
                    <li key={c.path}>
                      <Link to={c.path} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        {c.serviceName}
                        <ArrowRight className="h-3.5 w-3.5 text-forest-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ServiceLocationLinks serviceSlug={service.slug} currentLocationSlug={location.slug} />
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
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {thisServiceElsewhere.map((c, i) => (
              <Reveal key={c.path} delay={i * 30}>
                <Link to={c.path} className="group flex items-center justify-between rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-charcoal-700 shadow-card ring-1 ring-charcoal-100/60 transition-all hover:text-forest-700 hover:ring-forest-300">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-forest-500" aria-hidden="true" />
                    {c.locationName}, {c.locationState}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        headline={`Concerned About Mold in Your ${location.name} Property?`}
        subtext={`Call The Dome Mold Removal Experts to discuss ${service.shortName.toLowerCase()} or any mold-related concerns in ${location.name}, ${location.stateAbbr}.`}
      />
    </>
  );
}
