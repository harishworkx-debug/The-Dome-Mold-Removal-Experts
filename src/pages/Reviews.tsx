import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Phone, ShieldCheck, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business, reviewsData } from '@/data/business';
import { breadcrumbJsonLd } from '@/lib/structuredData';

const topics = [
  { label: 'All', count: 6 },
  { label: 'Mold Removal', count: 5 },
  { label: 'Company', count: 2 },
  { label: 'Mold Sampling', count: 2 },
];

export default function Reviews() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const crumbs = [{ name: 'Reviews', path: '/reviews' }];

  const filteredReviews = reviewsData.filter((r) => {
    if (selectedTopic === 'All') return true;
    if (selectedTopic === 'Mold Removal') return r.text.toLowerCase().includes('mold removal') || r.text.toLowerCase().includes('flood');
    if (selectedTopic === 'Company') return r.text.toLowerCase().includes('company');
    if (selectedTopic === 'Mold Sampling') return r.text.toLowerCase().includes('testing') || r.text.toLowerCase().includes('sampling') || r.text.toLowerCase().includes('inspected');
    return true;
  });

  return (
    <>
      <Seo
        title="5.0 Star Customer Reviews | The Dome Mold Removal Experts | Oakwood & Dayton, OH"
        description="Read authentic 5.0-star Google customer reviews for The Dome Mold Removal Experts in Oakwood and Dayton, OH. Verified mold inspection and removal feedback."
        path="/reviews"
        jsonLd={[breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Customer Reviews</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Verified 5.0 Star Reviews
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              Read authentic feedback from homeowners and property owners across Oakwood, Dayton, and the Miami Valley who trusted The Dome Mold Removal Experts with their mold inspection, remediation, and moisture issues.
            </p>
          </Reveal>

          {/* Google rating overview banner */}
          <Reveal delay={80} className="mt-10">
            <div className="flex flex-col gap-6 rounded-3xl bg-forest-950 p-8 text-white shadow-lift sm:flex-row sm:items-center sm:justify-between lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex flex-col items-center justify-center rounded-2xl bg-forest-900/80 px-6 py-4 ring-1 ring-forest-700/50">
                  <span className="font-display text-5xl font-extrabold text-white">5.0</span>
                  <div className="mt-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-teal-400 text-teal-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="mt-1 text-xs text-forest-300">6 Google reviews</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300 ring-1 ring-teal-500/40">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    100% 5-Star Customer Rating
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold text-white">
                    The Dome Mold Removal Experts
                  </h2>
                  <p className="mt-1 text-sm text-forest-200">
                    Home inspector & mold specialist serving Oakwood, Dayton & surrounding communities
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={business.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-call !bg-teal-400 !text-forest-950 hover:!bg-teal-300"
                >
                  Write a Review
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={business.googleMapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !border-forest-600 !bg-transparent !text-white hover:!bg-forest-900/80"
                >
                  View on Google Maps
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Topic filters */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mr-2">Topics:</span>
            {topics.map((t) => (
              <button
                key={t.label}
                onClick={() => setSelectedTopic(t.label)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedTopic === t.label
                    ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-800'
                    : 'bg-white text-charcoal-700 ring-1 ring-charcoal-200 hover:bg-forest-50 hover:text-forest-800'
                }`}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>

          {/* Review cards grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredReviews.map((review, i) => {
              const initials = review.author
                .split(' ')
                .map((n) => n[0])
                .join('');
              return (
                <Reveal key={review.author} delay={i * 60}>
                  <div className="flex h-full flex-col justify-between rounded-3xl bg-white p-7 shadow-card ring-1 ring-charcoal-100/70 transition-all hover:shadow-cardHover">
                    <div>
                      {/* Review top row */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 font-display text-base font-bold text-forest-800 ring-2 ring-forest-200/60">
                            {initials}
                          </div>
                          <div>
                            <p className="font-display text-base font-bold text-charcoal-900">{review.author}</p>
                            <p className="text-xs text-charcoal-500">
                              {review.reviewCount} · {review.timeAgo}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-[0.7rem] font-semibold text-teal-800 ring-1 ring-teal-200/60">
                          <CheckCircle2 className="h-3 w-3 text-teal-600" aria-hidden="true" />
                          Verified
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                        {review.serviceMentioned && (
                          <span className="ml-2 rounded-md bg-forest-50 px-2 py-0.5 text-[0.7rem] font-medium text-forest-700">
                            {review.serviceMentioned}
                          </span>
                        )}
                      </div>

                      {/* Quote text */}
                      <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-charcoal-100/80 pt-4 text-xs text-charcoal-400">
                      <span className="inline-flex items-center gap-1">
                        <MessageSquareQuote className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
                        Google Maps Review
                      </span>
                      <a
                        href={business.googleMapsListing}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-forest-700 hover:text-forest-800 transition-colors"
                      >
                        View on Google &rarr;
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Authenticity notice */}
          <Reveal delay={120} className="mt-12 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
              <ShieldCheck className="h-5 w-5 text-forest-600" aria-hidden="true" />
              Verified Review Policy
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-charcoal-700">
              <li>All reviews presented above are authentic customer feedback submitted to our Google Maps profile.</li>
              <li>We do not create, pay for, or publish unverified testimonials.</li>
              <li>Every homeowner or property owner is encouraged to leave an honest review on our public Google Maps listing.</li>
            </ul>
          </Reveal>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-charcoal-600">Have mold or moisture concerns in your property?</p>
            <a href={business.phoneHref} className="btn-call-lg mt-4">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <p className="mt-4 text-sm text-charcoal-500">
              Or explore our{' '}
              <Link to="/services" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
                services
              </Link>{' '}
              and{' '}
              <Link to="/service-areas" className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
                service areas
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
