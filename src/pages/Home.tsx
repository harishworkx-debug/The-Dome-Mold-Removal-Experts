import { Link } from 'react-router-dom';
import {
  Phone,
  Search,
  ClipboardList,
  Sparkles,
  ShieldCheck,
  Droplets,
  HousePlus,
  ArrowDownToLine,
  Home,
  Wind,
  Building2,
  ArrowRight,
  Star,
  MapPin,
  ShieldAlert,
  Eye,
  ChevronRight,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business, services, locations, homeImages } from '@/data/business';
import { localBusinessJsonLd, breadcrumbJsonLd } from '@/lib/structuredData';

const iconMap: Record<string, typeof Search> = {
  Search,
  ClipboardList,
  Sparkles,
  ShieldCheck,
  Droplets,
  HousePlus,
  ArrowDownToLine,
  Home,
  Wind,
  Building2,
};

const concernSigns = [
  { icon: Eye, title: 'Visible discoloration', text: 'Staining or discoloration on walls, ceilings, trim, or grout can indicate moisture and potential mold growth worth a closer look.' },
  { icon: Wind, title: 'Musty odors', text: 'A persistent musty smell in a room, basement, or crawlspace is often the first sign of hidden moisture and mold activity.' },
  { icon: Droplets, title: 'Persistent moisture', text: 'Condensation on windows, pipes, or ductwork, and damp spots that never fully dry, create the conditions mold needs to grow.' },
  { icon: ShieldAlert, title: 'Past water intrusion', text: 'A previous leak, overflow, or storm event, even if it seemed to dry, may have left moisture behind in building materials.' },
  { icon: ArrowDownToLine, title: 'Damp basements', text: 'Basements and crawlspaces below grade stay cool and humid, making them the most common areas for mold in Dayton-area homes.' },
  { icon: HousePlus, title: 'Moisture-related concerns', text: 'Any ongoing property condition that keeps materials wet or humid is a condition that can support mold and warrants a discussion.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Mold Inspection & Removal in Dayton, Ohio | The Dome Mold Removal Experts"
        description="Professional mold inspection, assessment, and removal in Dayton, Oakwood, and the Miami Valley. Call The Dome Mold Removal Experts at 937-967-3264 to discuss your mold or moisture concerns."
        path="/"
        jsonLd={[localBusinessJsonLd]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-950">
        <div className="absolute inset-0">
          <img src={homeImages.hero} alt={homeImages.heroAlt} className="h-full w-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900/85 to-forest-800/70" />
        </div>
        <div className="container-wide relative flex flex-col items-start gap-6 py-20 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-forest-800/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300 ring-1 ring-teal-500/30">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Oakwood & Dayton, Ohio
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Professional Mold Inspection and Removal in Dayton, Ohio
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xl text-lg leading-relaxed text-forest-100">
              Concerned about mold, moisture, or indoor property conditions? Call The Dome Mold Removal Experts to
              discuss your concerns and available services.
            </p>
          </Reveal>
          <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <Link to="/services" className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-800/60">
              Explore Mold Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={320} className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-forest-200">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-400" aria-hidden="true" /> Home Inspector</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-400" aria-hidden="true" /> {business.addressLine}, {business.addressCity}</span>
            <a href={business.googleMapsListing} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Star className="h-4 w-4 fill-teal-400 text-teal-400" aria-hidden="true" /> See reviews on Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-wide grid grid-cols-2 divide-x divide-charcoal-100 py-6 text-center lg:grid-cols-4">
          {[
            { label: 'Business', value: 'Home Inspector' },
            { label: 'Location', value: 'Oakwood / Dayton, OH' },
            { label: 'Phone', value: business.phoneDisplay, href: business.phoneHref },
            { label: 'Reviews', value: 'See on Google', href: business.googleMapsListing },
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
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Mold and Moisture Services for Dayton-Area Properties
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              From a single-room inspection to broader assessment and removal, we offer the mold-related services
              property owners in the Miami Valley call us about most.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Search;
              return (
                <Reveal key={service.slug} delay={i * 60}>
                  <article className="card-base group flex h-full flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-card">
                        <Icon className="h-5 w-5 text-forest-700" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-charcoal-900">{service.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">{service.summary}</p>
                      <div className="mt-5 flex flex-col gap-2.5">
                        <Link
                          to={`/services/${service.slug}`}
                          className="flex items-center justify-between rounded-lg bg-forest-50 px-4 py-3 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-100"
                        >
                          {service.name} Details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
              <img src={homeImages.inspector} alt={homeImages.inspectorAlt} loading="lazy" className="rounded-3xl object-cover shadow-lift" />
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
            <span className="eyebrow">Why Call Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              Discuss Your Property Concerns With a Qualified Professional
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              The Dome Mold Removal Experts is a home inspector based in Oakwood, serving Dayton and the surrounding
              area. We talk with homeowners, landlords, and property managers about mold, moisture, and indoor
              conditions, and we explain what an inspection or removal process does and does not cover.
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
              { num: '01', icon: Phone, title: 'Call Us', text: 'Pick up the phone and call 937-967-3264. Tell us what you are seeing and where your property is located.' },
              { num: '02', icon: Search, title: 'We Inspect', text: 'We visit your property and perform a visual, room-by-room assessment of mold and moisture conditions.' },
              { num: '03', icon: ClipboardList, title: 'Discuss Findings', text: 'We walk you through what we found, what it may mean, and what options are available to you.' },
              { num: '04', icon: ShieldCheck, title: 'Next Steps', text: 'You decide what to act on and when. We answer your questions and help you understand the path forward.' },
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
                <Home className="h-5 w-5 text-forest-600" aria-hidden="true" />
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
              { q: 'What does a mold inspection include?', a: 'A visual, room-by-room walkthrough of accessible areas of your property to identify visible mold growth, moisture sources, and the building conditions that support mold. It includes an on-site discussion of what we find.' },
              { q: 'Can you tell me what type of mold it is from a visual inspection?', a: 'No. A visual inspection alone cannot identify mold species or determine whether mold is toxigenic. Identifying specific species requires sampling and laboratory analysis, which is a separate process.' },
              { q: 'What is the difference between mold removal and mold remediation?', a: 'Mold removal is the physical removal of visible mold from affected surfaces. Mold remediation is a broader process that includes removal along with containment, cleaning, and addressing the conditions that caused the mold.' },
              { q: 'How do I schedule an inspection?', a: 'Call 937-967-3264. We do not use online forms, email, chat, or booking systems. A direct phone call is the only way to reach us.' },
              { q: 'Do you serve my area?', a: 'We serve Oakwood, Dayton, Kettering, Centerville, Beavercreek, Miamisburg, Washington Township, Moraine, Riverside, and Fairborn. Call to confirm we cover your specific location.' },
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
            <span className="eyebrow">Reviews</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              See What Customers Say on Google
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Reviews for The Dome Mold Removal Experts are available on our Google Maps listing. We invite you to
              read them there before you call.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <a
              href={business.googleMapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 rounded-3xl bg-white px-10 py-8 shadow-card ring-1 ring-charcoal-100/60 transition-all hover:shadow-cardHover sm:flex-row sm:gap-8"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 fill-teal-400 text-teal-400" aria-hidden="true" />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display text-lg font-bold text-charcoal-900">Read Reviews on Google Maps</p>
                <p className="mt-1 text-sm text-charcoal-500">Verified customer reviews on our Google listing</p>
              </div>
              <ChevronRight className="hidden h-6 w-6 text-forest-600 sm:block" aria-hidden="true" />
            </a>
          </Reveal>
          <p className="mt-6 text-center text-sm text-charcoal-500">
            Visit our{' '}
            <Link to="/reviews" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">Reviews page</Link>{' '}
            for our review policy and a direct link to the listing.
          </p>
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
                  to={`/service-areas/${loc.slug}`}
                  className="group flex flex-col items-center justify-center rounded-2xl bg-forest-50 p-6 text-center ring-1 ring-forest-100 transition-all hover:bg-forest-100 hover:ring-forest-300"
                >
                  <MapPin className="h-7 w-7 text-forest-600 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span className="mt-3 font-display text-base font-bold text-charcoal-900">{loc.name}</span>
                  <span className="text-xs text-charcoal-500">{loc.stateAbbr}</span>
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

      <PageCta />
    </>
  );
}
