import { Phone, MapPin, ExternalLink, Clock, Navigation } from 'lucide-react';
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
        title="Contact The Dome Mold Removal Experts | Dayton, Ohio"
        description="Contact The Dome Mold Removal Experts by phone at 937-967-3264. Located at 2533 Far Hills Ave, Dayton, OH 45419. No forms, email, or chat, calls only."
        path="/contact"
        jsonLd={[localBusinessJsonLd, breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal className="max-w-3xl">
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
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-forest-200">{business.fullAddress}</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-forest-200">Open by appointment</p>
                    <p className="text-forest-300 text-sm">Serving Oakwood, Dayton & the Miami Valley</p>
                  </div>
                </div>
              </div>

              <a
                href={business.googleMapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 rounded-full border border-forest-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-forest-700"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Open Google Maps Listing
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-3 shadow-card ring-1 ring-charcoal-100/60">
              <div className="relative w-full flex-1 overflow-hidden rounded-2xl" style={{ minHeight: '420px' }}>
                <iframe
                  title="Map showing The Dome Mold Removal Experts at 2533 Far Hills Ave, Dayton, OH 45419"
                  src={business.googleMapsEmbed}
                  width="600"
                  height="450"
                  style={{ border: 0, width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-charcoal-600">
                  <span className="font-semibold text-charcoal-900">{business.name}</span>
                  <br />
                  {business.fullAddress}
                </p>
                <a
                  href={business.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-600"
                >
                  Get directions <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
