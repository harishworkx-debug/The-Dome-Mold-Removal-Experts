import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { guides } from '@/data/guides';
import { breadcrumbJsonLd } from '@/lib/structuredData';

export default function GuidesOverview() {
  const crumbs = [{ name: 'Mold & Moisture Guides', path: '/guides' }];
  const articles = guides.filter((g) => g.category === 'article');
  const referenceGuides = guides.filter((g) => g.category === 'guide');

  return (
    <>
      <Seo
        title="Mold & Moisture Articles, Guides & FAQs | Oakwood, OH | The Dome"
        description="Read homeowner articles on Ohio basement mold causes, attic moisture signs, inspection processes, post-water-damage mold, testing vs. inspection, and crawl space prevention."
        path="/guides"
        jsonLd={[breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <Reveal immediate className="max-w-3xl">
            <span className="eyebrow">Homeowner Resource Hub</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-charcoal-900 sm:text-5xl text-balance">
              Mold Research Articles, Moisture Guides &amp; FAQs
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              In-depth educational articles and reference guides for Oakwood, Dayton, and Ohio property owners evaluating
              basement dampness, attic condensation, post-leak mold symptoms, crawl space moisture, and independent
              inspection options—with citations to EPA and CDC guidance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Homeowner Mold &amp; Moisture Articles
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-charcoal-600">
              Topic-focused articles answering specific moisture, inspection, and diagnostic questions before you call an independent contractor.
            </p>
          </Reveal>
          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((guide, i) => (
              <Reveal key={guide.slug} delay={i * 50}>
                <article className="card-base flex h-full flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700 ring-1 ring-forest-200/70">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {guide.eyebrow}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-charcoal-400">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {guide.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-charcoal-900">{guide.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{guide.summary}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-charcoal-100 pt-5">
                    <Link
                      to={`/${guide.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-600"
                    >
                      Read {guide.title}
                      <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Foundational Prevention Guides &amp; FAQs
            </h2>
          </Reveal>
          <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
            {referenceGuides.map((guide, i) => (
              <Reveal key={guide.slug} delay={i * 50}>
                <article className="card-base flex h-full flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1 text-xs font-semibold text-forest-700 ring-1 ring-forest-200/70">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {guide.eyebrow}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-charcoal-400">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {guide.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-charcoal-900">{guide.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{guide.summary}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-charcoal-100 pt-5">
                    <Link
                      to={`/${guide.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-600"
                    >
                      Read {guide.title}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container-page mt-12">
          <div className="rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
              <ShieldCheck className="h-5 w-5 text-forest-600" aria-hidden="true" />
              Looking for Core Mold Services, Local Hubs or Phone Contact?
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5 text-sm">
              <Link to="/mold-inspection" className="rounded-lg bg-white px-3.5 py-2 font-semibold text-forest-700 ring-1 ring-forest-200 hover:bg-forest-100">
                Mold Inspection Services
              </Link>
              <Link to="/mold-testing" className="rounded-lg bg-white px-3.5 py-2 font-semibold text-forest-700 ring-1 ring-forest-200 hover:bg-forest-100">
                Mold Testing Services
              </Link>
              <Link to="/basement-mold-inspection" className="rounded-lg bg-white px-3.5 py-2 font-semibold text-forest-700 ring-1 ring-forest-200 hover:bg-forest-100">
                Basement Mold Inspection
              </Link>
              <Link to="/attic-mold-inspection" className="rounded-lg bg-white px-3.5 py-2 font-semibold text-forest-700 ring-1 ring-forest-200 hover:bg-forest-100">
                Attic Mold Inspection
              </Link>
              <Link to="/oakwood-oh" className="rounded-lg bg-forest-800 px-3.5 py-2 font-semibold text-white hover:bg-forest-700">
                Oakwood, OH Location Page
              </Link>
              <Link to="/dayton-oh" className="rounded-lg bg-forest-800 px-3.5 py-2 font-semibold text-white hover:bg-forest-700">
                Dayton, OH Location Page
              </Link>
              <Link to="/contact" className="rounded-lg bg-teal-400 px-3.5 py-2 font-semibold text-forest-950 hover:bg-teal-300">
                Contact &amp; Phone Scheduling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
