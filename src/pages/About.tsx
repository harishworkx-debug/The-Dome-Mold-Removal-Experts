import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, AlertCircle, Home, Building2, Search, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business, homeImages } from '@/data/business';
import { breadcrumbJsonLd, organizationJsonLd } from '@/lib/structuredData';

export default function About() {
  const crumbs = [{ name: 'About', path: '/about' }];
  return (
    <>
      <Seo
        title="About The Dome Mold Removal Experts | Oakwood, OH Referral Network"
        description="The Dome Mold Removal Experts is a service-area referral network based in Oakwood, Ohio connecting property owners with independent local mold inspection, testing, and remediation contractors. Call 937-967-3264."
        path="/about"
        jsonLd={[organizationJsonLd, breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal immediate>
            <span className="eyebrow">About Us</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              The Dome Mold Removal Experts
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              We are a home inspection and mold referral service serving Oakwood, Ohio and surrounding Miami Valley
              communities. Property owners call us to connect with independent local mold inspectors, testing
              specialists, and remediation contractors for honest assessments and clear answers.
            </p>
            <div className="mt-6 space-y-3 text-charcoal-700">
              <p className="flex items-center gap-2.5"><MapPin className="h-5 w-5 text-forest-600" aria-hidden="true" /> Service-Area Business · {business.serviceAreaLabel}</p>
              <p className="flex items-center gap-2.5"><Phone className="h-5 w-5 text-forest-600" aria-hidden="true" /> <a href={business.phoneHref} className="font-semibold text-forest-700 hover:text-forest-600">{business.phoneDisplay}</a></p>
              <p className="flex items-center gap-2.5"><ShieldCheck className="h-5 w-5 text-forest-600" aria-hidden="true" /> Business category: {business.category}</p>
            </div>
            <a href={business.phoneHref} className="btn-call mt-7">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </Reveal>
          <Reveal immediate delay={120}>
            <img src={homeImages.inspector} alt={homeImages.inspectorAlt} width={1200} height={800} loading="eager" decoding="async" className="rounded-3xl object-cover shadow-lift" />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-50 py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Home, title: 'Homeowners', text: 'We talk with homeowners about visible mold, musty odors, damp basements, and past water events, and explain what an inspection can assess.' },
            { icon: Building2, title: 'Landlords & Investors', text: 'For rental and investment properties, we discuss conditions that may have gone unnoticed between tenants and what an assessment covers.' },
            { icon: Search, title: 'Commercial Property', text: 'We connect office, retail, and facility managers with independent specialists for commercial mold inspection and remediation estimates.' },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-charcoal-100/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-charcoal-900">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{card.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Our Approach</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl text-balance">
              A Responsible, Conversation-First Approach
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              We do not diagnose health conditions, and we do not claim that a visual inspection can identify the
              specific species of mold present or determine whether any mold is toxigenic. What we do is talk with you
              about what you are seeing, assess accessible areas of your property, and explain what the findings may
              mean.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl bg-forest-50 p-7 ring-1 ring-forest-100">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold text-forest-800">
                  <ShieldCheck className="h-6 w-6 text-forest-600" aria-hidden="true" /> What We Do
                </h3>
                <ul className="mt-4 space-y-3 text-charcoal-700">
                  <li className="flex gap-3"><span className="text-forest-600">•</span> Connect Oakwood homeowners with independent local mold inspection and testing specialists</li>
                  <li className="flex gap-3"><span className="text-forest-600">•</span> Match property owners with qualified local contractors for mold removal and remediation estimates</li>
                  <li className="flex gap-3"><span className="text-forest-600">•</span> Help identify moisture, basement seepage, and ventilation concerns before scope decisions</li>
                  <li className="flex gap-3"><span className="text-forest-600">•</span> Clarify honestly that independent local contractors perform on-site testing and remediation work</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl bg-sand-50 p-7 ring-1 ring-sand-200">
                <h3 className="flex items-center gap-2 font-display text-xl font-bold text-charcoal-900">
                  <AlertCircle className="h-6 w-6 text-sand-400" aria-hidden="true" /> What We Do Not Do
                </h3>
                <ul className="mt-4 space-y-3 text-charcoal-700">
                  <li className="flex gap-3"><span className="text-sand-500">•</span> Diagnose health conditions or make health claims</li>
                  <li className="flex gap-3"><span className="text-sand-500">•</span> Identify mold species or toxicity from a visual inspection alone</li>
                  <li className="flex gap-3"><span className="text-sand-500">•</span> Claim certifications, licenses, or laboratory partnerships we have not verified</li>
                  <li className="flex gap-3"><span className="text-sand-500">•</span> Use online forms, email, chat, or booking systems, calls only</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className="btn-secondary">
              View Mold Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/service-areas" className="btn-secondary">
              View Service Areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
