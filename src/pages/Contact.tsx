import { Phone, MapPin, ExternalLink, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import { business } from '@/data/business';
import { localBusinessJsonLd, breadcrumbJsonLd } from '@/lib/structuredData';

export default function Contact() {
  const crumbs = [{ name: 'Contact', path: '/contact' }];
  return (
    <>
      <Seo
        title="Contact The Dome Mold Removal Experts | Oakwood, Ohio Service Area"
        description="Call The Dome Mold Removal Experts at 937-967-3264 to connect with independent mold inspection and remediation contractors in Oakwood, OH and the Miami Valley. Service-area business with no walk-in office."
        path="/contact"
        jsonLd={[localBusinessJsonLd, breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal immediate className="max-w-3xl">
            <span className="eyebrow">Contact Information</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Contact The Dome Mold Removal Experts
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              We are available by phone only. There are no online forms, email, chat, or booking systems on this
              website. Call us directly to discuss your mold or moisture concerns.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact details */}
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-forest-800 p-8 text-white shadow-lift">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">Call Us</h2>
                <p className="mt-2 text-forest-200">A direct phone call is the only way to reach us.</p>
              </div>
              <a
                href={business.phoneHref}
                className="group flex items-center gap-4 rounded-2xl bg-teal-400 px-6 py-5 font-semibold text-forest-950 transition-all hover:bg-teal-300 hover:shadow-card"
              >
                <Phone className="h-7 w-7" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-forest-700">Call Now</span>
                  <span className="block font-display text-2xl font-extrabold">{business.phoneDisplay}</span>
                </span>
              </a>

              <div className="space-y-5 border-t border-forest-700 pt-6">
                <div className="flex gap-3.5">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Service Area (No Walk-In Office)</p>
                    <p className="text-forest-200">{business.serviceAreaLabel}</p>
                    <p className="mt-1 text-xs text-forest-300">
                      Referral service connecting property owners with independent local inspection and remediation contractors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Scheduling</p>
                    <p className="text-forest-200">On-site visits scheduled by phone with local contractors</p>
                    <p className="text-forest-300 text-sm">Serving Oakwood, Dayton &amp; Montgomery / Greene Counties</p>
                  </div>
                </div>
              </div>

              <a
                href={business.googleMapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 rounded-full border border-forest-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-forest-700"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View 5.0 ★ Google Business Reviews
              </a>
            </div>
          </Reveal>

          {/* Service-Area Info Panel (No walk-in office) */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-card ring-1 ring-charcoal-100/60">
              <div>
                <span className="eyebrow">Service-Area Referral Network</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-charcoal-900">
                  Local Service Across Oakwood &amp; the Miami Valley
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  The Dome Mold Removal Experts operates as a service-area referral network—not a walk-in retail
                  storefront. Independent mold inspectors, testing specialists, and remediation contractors travel
                  directly to residential and commercial properties arranged by phone.
                </p>
                <div className="mt-6 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                    Explore Services &amp; Locations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      to="/mold-inspection"
                      className="rounded-lg bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-700 hover:bg-forest-100"
                    >
                      Core Mold Inspection Services
                    </Link>
                    <Link
                      to="/mold-testing"
                      className="rounded-lg bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-700 hover:bg-forest-100"
                    >
                      Core Mold Testing Services
                    </Link>
                    <Link
                      to="/oakwood-oh"
                      className="rounded-lg bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-700 hover:bg-forest-100"
                    >
                      Oakwood, OH Mold Services
                    </Link>
                    <Link
                      to="/dayton-oh"
                      className="rounded-lg bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-700 hover:bg-forest-100"
                    >
                      Dayton, OH Mold Services
                    </Link>
                    <Link
                      to="/service-areas"
                      className="rounded-lg bg-charcoal-50 px-3.5 py-2 text-xs font-semibold text-charcoal-700 hover:bg-charcoal-100"
                    >
                      View All Miami Valley Service Areas
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-charcoal-100 pt-5">
                <p className="text-sm font-semibold text-charcoal-900">{business.name}</p>
                <p className="mt-1 text-sm text-charcoal-600">
                  Service Area: {business.serviceAreaLabel} · Phone: {business.phoneDisplay}
                </p>
                <a
                  href={business.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-600"
                >
                  Read Verified Google Reviews (5.0 / 5) <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
