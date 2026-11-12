import { Link } from 'react-router-dom';
import {
  Phone,
  Search,
  ClipboardList,
  ShieldCheck,
  Droplets,
  HousePlus,
  ArrowDownToLine,
  Home as HomeIcon,
  Wind,
  ArrowRight,
  Star,
  MapPin,
  ShieldAlert,
  Eye,
  BookOpen,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { ServiceIcon } from '@/components/ServiceIcon';
import { business, services, locations, homeImages, reviewsData, getLocationPath } from '@/data/business';
import { guides } from '@/data/guides';
import { organizationJsonLd, websiteJsonLd, localBusinessJsonLd } from '@/lib/structuredData';

const concernSigns = [
  { icon: Eye, title: 'Visible discoloration', text: 'Staining or discoloration on walls, ceilings, trim, or grout can indicate moisture and potential mold growth worth a closer look.' },
  { icon: Wind, title: 'Musty odors', text: 'A persistent musty smell in a room, basement, or crawlspace is often the first sign of hidden moisture and mold activity.' },
  { icon: Droplets, title: 'Persistent moisture', text: 'Condensation on windows, pipes, or ductwork, and damp spots that never fully dry, create the conditions mold needs to grow.' },
  { icon: ShieldAlert, title: 'Past water intrusion', text: 'A previous leak, overflow, or storm event, even if it seemed to dry, may have left moisture behind in building materials.' },
  { icon: ArrowDownToLine, title: 'Damp basements', text: 'Basements and crawlspaces below grade stay cool and humid, making them the most common areas for mold in Oakwood and Miami Valley homes.' },
  { icon: HousePlus, title: 'Moisture-related concerns', text: 'Any ongoing property condition that keeps materials wet or humid is a condition that can support mold and warrants a discussion.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Mold Inspection & Removal in Oakwood, OH | The Dome Mold Removal Experts"
        description="Connect with local mold inspection and remediation professionals in Oakwood, OH. Get help assessing mold concerns, moisture problems and property damage. Request an estimate today."
        path="/"
        jsonLd={[organizationJsonLd, websiteJsonLd, localBusinessJsonLd]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950">
        <div className="absolute inset-0">
          <img src={homeImages.hero} alt={homeImages.heroAlt} width={1600} height={900} className="h-full w-full object-cover opacity-30" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900/85 to-forest-800/70" />
        </div>
        <div className="container-wide relative flex flex-col items-start gap-6 py-20 lg:py-28">
          <Reveal immediate>
            <span className="inline-flex items-center gap-2 rounded-full bg-forest-800/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300 ring-1 ring-teal-500/30">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Oakwood, OH · Local Referral Network
            </span>
          </Reveal>
          <Reveal immediate>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Mold Inspection &amp; Removal in Oakwood, Ohio
            </h1>
          </Reveal>
          <Reveal immediate>
            <p className="max-w-xl text-lg leading-relaxed text-forest-100">
              Need reliable mold removal Oakwood OH homeowners trust? We are a local referral service connecting property
              owners with independent mold inspection and remediation contractors in Oakwood. Call directly to request
              an estimate today.
            </p>
          </Reveal>
          <Reveal immediate className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <Link to="/services" className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-800/60">
              Explore Mold Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal immediate className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-forest-200">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-400" aria-hidden="true" /> Home Inspector · Independent Contractor Network</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-400" aria-hidden="true" /> Service-Area Business · Oakwood, OH</span>
            <a href={business.googleMapsListing} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Star className="h-4 w-4 fill-teal-400 text-teal-400" aria-hidden="true" /> 5.0 Rated on Google (6 Reviews)
            </a>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-wide grid grid-cols-2 divide-x divide-charcoal-100 py-6 text-center lg:grid-cols-4">
          {[
            { label: 'Service Model', value: 'Independent Referral Network' },
            { label: 'Primary Service Area', value: 'Oakwood, OH' },
            { label: 'Call for Estimates', value: business.phoneDisplay, href: business.phoneHref },
            { label: 'Customer Rating', value: '5.0 / 5 (6 Google Reviews)', href: business.googleMapsListing },
          ].map((item) => (
            <div key={item.label} className="px-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">{item.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-forest-800">
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-forest-600 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Oakwood Mold Services</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Mold Inspection, Testing &amp; Remediation in Oakwood, OH
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Explore dedicated core pages for visual inspections, accredited lab testing, basement checks, or contractor
              remediation below. Serving neighboring cities? Visit{' '}
              <Link
                to="/mold-removal-dayton-oh"
                className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600"
              >
                Mold Removal &amp; Inspection in Dayton, OH
              </Link>{' '}
              or view all{' '}
              <Link
                to="/service-areas"
                className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600"
              >
                Miami Valley Service Areas
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
              {[
                { label: 'Mold Inspection (Oakwood, OH)', to: '/mold-inspection-oakwood-oh' },
                { label: 'Mold Testing (Oakwood, OH)', to: '/mold-testing-oakwood-oh' },
                { label: 'Mold Removal (Oakwood, OH)', to: '/mold-removal-oakwood-oh' },
                { label: 'Mold Remediation (Oakwood, OH)', to: '/mold-remediation-oakwood-oh' },
                { label: 'Indoor Air Quality (Oakwood, OH)', to: '/indoor-air-quality-inspection-oakwood-oh' },
                { label: 'Commercial Mold Inspection (Oakwood, OH)', to: '/commercial-mold-inspection-oakwood-oh' },
                { label: 'Dayton, OH', to: '/mold-removal-dayton-oh' },
                { label: 'Service Areas', to: '/service-areas' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full bg-forest-50 px-3.5 py-1.5 font-semibold text-forest-700 ring-1 ring-forest-200/80 transition-colors hover:bg-forest-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const secondaryCitySlug =
                service.comboLocationSlugs?.[0] ?? 'dayton-oh';
              const secondaryLinkTo = `/${service.slug}-${secondaryCitySlug}`;
              const secondaryLinkLabel = `${service.shortName} in Dayton, OH`;
              return (
                <Reveal key={service.slug} delay={i * 60}>
                  <article className="card-base group flex h-full flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        width={940}
                        height={650}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-card">
                        <ServiceIcon name={service.icon} className="h-5 w-5 text-forest-700" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-charcoal-900">{service.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">{service.summary}</p>
                      <div className="mt-5 flex flex-col gap-2.5">
                        <Link
                          to={service.corePath}
                          className="flex items-center justify-between rounded-lg bg-forest-50 px-4 py-3 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-100"
                        >
                          {service.name} in Oakwood, OH
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                        <Link
                          to={secondaryLinkTo}
                          className="text-center text-xs font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600"
                        >
                          {secondaryLinkLabel}
                        </Link>
                        <a href={business.phoneHref} className="flex items-center justify-center gap-2 rounded-lg border border-forest-200 px-4 py-3 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-50">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          {service.ctaLabel}
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common concerns */}
      <section className="bg-charcoal-50 py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Know the Signs</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Common Signs That May Justify a Professional Inspection
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              These signs point to moisture and potential mold conditions worth discussing with a professional. Visual
              appearance alone does not confirm mold type, toxicity, or health effects.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concernSigns.map((sign, i) => {
              const Icon = sign.icon;
              return (
                <Reveal key={sign.title} delay={i * 50}>
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-charcoal-900">{sign.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{sign.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={homeImages.inspector} alt={homeImages.inspectorAlt} width={1200} height={800} loading="lazy" decoding="async" className="rounded-3xl object-cover shadow-lift" />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-cardHover ring-1 ring-charcoal-100 sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-600 text-white">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-charcoal-900">Local to Oakwood</p>
                    <p className="text-xs text-charcoal-500">Serving the Miami Valley</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">How Our Referral Service Works</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Find a Mold Removal Company in Oakwood With Honest Guidance
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Looking for a dependable mold removal company Oakwood homeowners recommend starts with transparent
              facts. The Dome Mold Removal Experts is a service-area referral service serving Oakwood, OH—connecting
              homeowners, landlords, and buyers with independent local mold inspectors, testing specialists, and
              remediation contractors. We do not claim to perform physical remediation ourselves; independent contractors
              handle testing and remediation while walking you through scope and moisture control.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                'A visual, room-by-room approach that looks at the whole property, not just the obvious spot',
                'Direct conversation about what we find and what it may mean for your property',
                'Responsible guidance, we do not claim a visual inspection can identify mold species or toxicity',
                'Residential and commercial properties, from single-room concerns to broader assessment and removal',
              ].map((point) => (
                <li key={point} className="flex gap-3 text-charcoal-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" aria-hidden="true" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn-call">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {business.phoneDisplay}
              </a>
              <Link to="/about" className="btn-secondary">
                About The Dome Mold Removal Experts
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-forest-900 py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-teal-300">How It Works</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              A Simple, Call-First Process
            </h2>
            <p className="mt-4 text-lg text-forest-200">
              No forms, no booking systems, no email. Just a direct phone call to discuss your concerns and schedule a visit.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', icon: Phone, title: 'Call Us', text: 'Call 937-967-3264 and tell us what you see in your Oakwood property and which areas are affected.' },
              { num: '02', icon: Search, title: 'Local Connection', text: 'We match you with independent local specialists for mold inspection Oakwood OH, testing, or estimates.' },
              { num: '03', icon: ClipboardList, title: 'On-Site Review', text: 'An independent local inspector or contractor assesses moisture conditions and accessible mold growth.' },
              { num: '04', icon: ShieldCheck, title: 'Estimate & Next Steps', text: 'Review clear options directly with the contractor—whether targeted testing or mold removal Oakwood OH.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 70}>
                  <div className="relative flex h-full flex-col rounded-2xl bg-forest-800 p-6 ring-1 ring-forest-700/50">
                    <span className="font-display text-3xl font-extrabold text-forest-600/40">{step.num}</span>
                    <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-200">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mold education */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Understanding Mold</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              What Causes Mold and Why Moisture Matters
            </h2>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              Mold is a type of fungus that occurs naturally indoors and outdoors. It becomes a problem when conditions
              allow it to grow rapidly on building materials. The single most important condition for mold growth is
              moisture. Without a moisture source, mold cannot establish and persist on surfaces in your property.
            </p>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              Moisture enters buildings through many paths: plumbing leaks, foundation seepage, roof and flashing
              failures, condensation from humid air, poor ventilation, and water intrusion from storms or floods. When
              materials stay damp, mold can begin to grow within 24 to 48 hours. That is why finding and correcting the
              moisture source is the most important step in any inspection or removal process.
            </p>
            <div className="mt-6 rounded-xl bg-forest-50 p-5 ring-1 ring-forest-100">
              <p className="text-sm text-charcoal-700">
                <strong className="text-forest-800">Important:</strong> A visual inspection cannot identify the specific
                species of mold present or determine whether any mold is toxigenic. We do not diagnose health
                conditions or make health claims. If you have health concerns, consult a qualified medical professional.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
                <Droplets className="h-5 w-5 text-teal-500" aria-hidden="true" />
                Common Moisture Sources
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-600">
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Plumbing leaks and appliance failures</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Foundation seepage and basement water entry</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Roof, flashing, and window leaks</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Condensation from high indoor humidity</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Poor ventilation in attics, basements, and crawlspaces</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Water intrusion from storms, floods, or ice dams</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
                <HomeIcon className="h-5 w-5 text-forest-600" aria-hidden="true" />
                Where Mold Commonly Appears
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-charcoal-600">
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Basements and crawlspaces below grade</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Attics with poor ventilation or vented fans</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Around plumbing fixtures and under sinks</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> Near windows and exterior doors with condensation</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> On drywall, trim, and framing after water events</li>
                <li className="flex gap-2.5"><span className="text-forest-500">&#9679;</span> In HVAC and ductwork where moisture collects</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-forest-50 py-12 lg:py-16">
        <div className="container-wide grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {[
            { value: '10', label: 'Mold & Moisture Services' },
            { value: '10', label: 'Miami Valley Service Areas' },
            { value: '100%', label: 'Call-Only Contact' },
            { value: '1', label: 'Direct Phone Call Away' },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <div>
                <p className="font-display text-4xl font-extrabold text-forest-700 lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-charcoal-600">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Questions & Answers</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Common questions about mold inspection, removal, and how we work. For specific concerns about your
              property, call us directly.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {[
              { q: 'Does The Dome perform physical mold remediation directly?', a: 'No. The Dome Mold Removal Experts operates as a referral service connecting homeowners and property owners in Oakwood, OH and nearby areas with independent local mold inspectors, testing professionals, and remediation contractors.' },
              { q: 'Can you tell me what type of mold it is from a visual inspection?', a: 'No. A visual inspection alone cannot identify mold species or determine whether mold is toxigenic. Identifying specific species requires separate mold testing and laboratory analysis through an independent testing specialist.' },
              { q: 'What is the difference between mold removal and mold remediation?', a: 'Mold removal focuses on physically removing visible mold from affected surfaces. Mold remediation is a broader contractor process including containment, air filtration, material removal, cleaning, and correcting moisture sources.' },
              { q: 'How do I schedule mold inspection or removal in Oakwood, OH?', a: 'Call 937-967-3264. We connect you directly by phone with independent local specialists—no automated booking queues or waiting on email forms.' },
              { q: 'Do you serve Oakwood and Dayton as well as nearby cities?', a: 'Yes. Oakwood, OH is our primary focus on this homepage, and our referral network also covers Dayton, Kettering, Centerville, Beavercreek, Miamisburg, Washington Township, Moraine, Riverside, and Fairborn. Explore our dedicated Dayton location page or call to confirm coverage.' },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 40}>
                <details className="group rounded-xl border border-charcoal-100 bg-white p-5 shadow-card open:bg-forest-50/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-charcoal-900">
                    {faq.q}
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-charcoal-700 leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 text-center">
            <a href={business.phoneHref} className="btn-call">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay} With Your Question
            </a>
          </Reveal>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="bg-forest-50 py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Customer Reviews</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Verified 5.0 Star Reviews on Google
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Read authentic Google customer reviews from Oakwood and Miami Valley property owners who called our network.
            </p>
          </Reveal>

          {/* Real Reviews Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviewsData.map((review, i) => {
              const initials = review.author.split(' ').map((n) => n[0]).join('');
              return (
                <Reveal key={review.author} delay={i * 60}>
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60 transition-all hover:shadow-cardHover">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 font-display text-sm font-bold text-forest-800">
                          {initials}
                        </div>
                        <div>
                          <p className="font-display text-sm font-bold text-charcoal-900">{review.author}</p>
                          <p className="text-[0.7rem] text-charcoal-400">{review.timeAgo}</p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-charcoal-600">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="mt-4 border-t border-charcoal-100/60 pt-3 text-[0.7rem] font-medium text-forest-700">
                      Verified Google Review
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.googleMapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-call !bg-forest-800 !text-white hover:!bg-forest-900"
            >
              <Star className="h-4 w-4 fill-teal-400 text-teal-400" aria-hidden="true" />
              View 5.0 Rating on Google Maps (6 reviews)
            </a>
            <Link to="/reviews" className="btn-secondary">
              Read All Customer Reviews
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Service area preview */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Where We Work</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Verified Service Areas in the Miami Valley
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Each location has its own page with local property concerns and the services available there.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 40}>
                <Link
                  to={getLocationPath(loc.slug)}
                  className="group flex flex-col items-center justify-center rounded-2xl bg-forest-50 p-6 text-center ring-1 ring-forest-100 transition-all hover:bg-forest-100 hover:ring-forest-300"
                >
                  <MapPin className="h-7 w-7 text-forest-600 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span className="mt-3 text-[0.7rem] font-semibold uppercase tracking-wider text-forest-600">
                    Mold Inspection &amp; Removal in
                  </span>
                  <span className="mt-1 font-display text-base font-bold text-charcoal-900">
                    {loc.name}, {loc.stateAbbr}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 text-center">
            <Link to="/service-areas" className="btn-secondary">
              View All Service Areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Mold & moisture guides */}
      <section className="bg-charcoal-50 py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Homeowner Research Articles</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Ohio Basement, Attic, Crawl Space &amp; Inspection Articles
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              In-depth articles written for Oakwood and Dayton-area homeowners investigating moisture causes, testing differences, and post-water-damage mold signs.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides
              .filter((g) => g.featured)
              .map((guide, i) => (
                <Reveal key={guide.slug} delay={i * 50}>
                  <Link
                    to={`/${guide.slug}`}
                    className="card-base group flex h-full flex-col p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                        <BookOpen className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold text-charcoal-400">{guide.readingTime}</span>
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-forest-600">{guide.eyebrow}</p>
                    <h3 className="mt-1 font-display text-lg font-bold text-charcoal-900 group-hover:text-forest-700">
                      {guide.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-600">{guide.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                      Read {guide.title}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
          <Reveal delay={180} className="mt-8 text-center">
            <Link to="/guides" className="btn-secondary">
              Browse All {guides.length} Mold Articles &amp; Guides
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
