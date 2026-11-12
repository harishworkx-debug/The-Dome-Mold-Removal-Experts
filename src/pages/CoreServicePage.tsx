import { Link, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, BookOpen } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { ServiceIcon } from '@/components/ServiceIcon';
import { ServiceBodySections } from '@/components/ServiceBodySections';
import { business, services, locations } from '@/data/business';
import { guides } from '@/data/guides';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/structuredData';

export default function CoreServicePage({ serviceSlug }: { serviceSlug: string }) {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return <Navigate to="/404" replace />;

  const pagePath = service.corePath;
  const crumbs = [
    { name: 'Services', path: '/services' },
    { name: service.name, path: pagePath },
  ];

  const relatedCoreServices = services.filter((s) => s.slug !== service.slug);
  const relatedGuides = guides.filter((g) => service.relatedGuideSlugs.includes(g.slug));
  const availableLocations = service.comboLocationSlugs
    ? locations.filter((l) => service.comboLocationSlugs!.includes(l.slug))
    : locations;
  const primaryHeroLocation = availableLocations[0] ?? locations[0];

  return (
    <>
      <Seo
        title={service.coreSeoTitle}
        description={service.coreMetaDescription}
        path={pagePath}
        jsonLd={[
          breadcrumbJsonLd(crumbs),
          faqJsonLd(service.faqs),
          serviceJsonLd(service.name, `${business.primaryCity} & Miami Valley`, pagePath),
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
              Core Service · Oakwood &amp; Miami Valley
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl text-balance">
            {service.coreH1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-100">{service.summary}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {service.ctaLabel}
            </a>
            <Link to={`/${primaryHeroLocation.slug}`} className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-800/60">
              {primaryHeroLocation.name}, {primaryHeroLocation.stateAbbr} Location Page
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-mold">
            <ServiceBodySections
              service={service}
              cityLabel={service.comboLocationSlugs ? 'Dayton and Moraine' : 'the Miami Valley'}
              locShortLabel={service.comboLocationSlugs ? 'Dayton & Moraine, OH' : 'Oakwood & Dayton, OH'}
              articleCityLabel={service.comboLocationSlugs ? 'a Dayton or Moraine' : 'a Miami Valley'}
              beforeFaq={
                relatedGuides.length > 0 ? (
                  <Reveal delay={180}>
                    <div className="not-prose mt-8 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
                      <h2 className="flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
                        <BookOpen className="h-5 w-5 text-forest-600" aria-hidden="true" />
                        Helpful Supporting Guides
                      </h2>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {relatedGuides.map((guide) => (
                          <Link
                            key={guide.slug}
                            to={`/${guide.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-forest-700 ring-1 ring-forest-200 hover:bg-forest-100"
                          >
                            {guide.title}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        ))}
                        <Link
                          to="/guides"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-forest-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-forest-700"
                        >
                          All Mold &amp; Moisture Guides
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ) : undefined
              }
            />

            <Reveal delay={200}>
              <h2>{service.name} Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
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
                <h3 className="font-display text-lg font-bold">Request a Phone Referral</h3>
                <p className="mt-2 text-sm text-forest-200">
                  Call {business.phoneDisplay} to connect with independent local {service.shortName.toLowerCase()} specialists
                  serving Oakwood and surrounding Miami Valley communities.
                </p>
                <a href={business.phoneHref} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-semibold text-forest-950 transition-colors hover:bg-teal-300">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {service.ctaLabel}
                </a>
                <Link to="/contact" className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-forest-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-700">
                  Contact &amp; Service-Area Info
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">All Core Mold Services</h3>
                <ul className="mt-4 space-y-2">
                  {relatedCoreServices.map((s) => (
                    <li key={s.slug}>
                      <Link to={s.corePath} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        <span>{s.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-forest-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">Key Location Pages</h3>
                <ul className="mt-4 space-y-2">
                  {locations.slice(0, 6).map((loc) => (
                    <li key={loc.slug}>
                      <Link to={`/${loc.slug}`} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        <span>Mold Services in {loc.name}, {loc.stateAbbr}</span>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-forest-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/service-areas" className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-50">
                      <span>Explore All 10 Service Areas</span>
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Local city pages for this core service */}
      <section className="bg-charcoal-50 py-14 lg:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Local {service.name} Pages by Community
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-charcoal-600">
              Select your community below for housing-era context, drainage notes, and local {service.shortName.toLowerCase()} referral details.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {availableLocations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 30}>
                <Link
                  to={`/${service.slug}-${loc.slug}`}
                  className="group flex items-center justify-between rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-charcoal-700 shadow-card ring-1 ring-charcoal-100/60 transition-all hover:text-forest-700 hover:ring-forest-300"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-forest-500" aria-hidden="true" />
                    {service.shortName} in {loc.name}, {loc.stateAbbr}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}

