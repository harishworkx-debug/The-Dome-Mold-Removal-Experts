import { Link } from 'react-router-dom';
import { Star, ExternalLink, Phone, ShieldCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business } from '@/data/business';
import { breadcrumbJsonLd } from '@/lib/structuredData';

export default function Reviews() {
  const crumbs = [{ name: 'Reviews', path: '/reviews' }];
  return (
    <>
      <Seo
        title="Reviews | The Dome Mold Removal Experts | Dayton, Ohio"
        description="Read verified customer reviews for The Dome Mold Removal Experts on our Google Maps listing. See what Dayton-area property owners say, then call 937-967-3264."
        path="/reviews"
        jsonLd={[breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Reviews</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Customer Reviews
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              The Dome Mold Removal Experts has a Google Maps listing with customer reviews. We do not republish
              reviews on this site. To read authentic, verified reviews from our customers, please visit our Google
              listing directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container-page">
          <Reveal>
            <a
              href={business.googleMapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-forest-800 to-forest-950 p-10 text-center text-white shadow-lift transition-all hover:shadow-cardHover sm:flex-row sm:text-left"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-teal-400 text-teal-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-forest-300">Verified on Google</p>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-white">Read Reviews on Google Maps</h2>
                <p className="mt-2 text-forest-200">
                  Customer reviews for The Dome Mold Removal Experts are available on our Google Maps listing. Visit
                  the listing to read what Dayton-area property owners have said.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 font-semibold text-forest-950 transition-colors group-hover:bg-teal-300">
                  Open Google Maps Listing
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={120} className="mt-8 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
              <ShieldCheck className="h-5 w-5 text-forest-600" aria-hidden="true" />
              Our Review Policy
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-charcoal-700">
              <li>We do not generate or publish fake testimonials on this website.</li>
              <li>We do not republish customer reviews, we link to the authentic Google listing instead.</li>
              <li>Review counts and ratings change over time. Please verify the current rating and review count on Google before relying on them.</li>
              <li>We do not claim certifications, licenses, or awards that we have not independently verified.</li>
            </ul>
          </Reveal>

          <div className="mt-10 text-center">
            <p className="text-charcoal-600">Ready to discuss your property?</p>
            <a href={business.phoneHref} className="btn-call-lg mt-4">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <p className="mt-4 text-sm text-charcoal-500">
              Or explore our{' '}
              <Link to="/services" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">services</Link>{' '}
              and{' '}
              <Link to="/service-areas" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">service areas</Link>.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
