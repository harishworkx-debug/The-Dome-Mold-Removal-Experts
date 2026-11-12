import { Link, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, CheckCircle2, Clock, ExternalLink, ShieldAlert } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import PageCta from '@/components/PageCta';
import { business } from '@/data/business';
import { guides } from '@/data/guides';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/structuredData';

export default function GuideDetail({ guideSlug }: { guideSlug: string }) {
  const guide = guides.find((g) => g.slug === guideSlug);
  if (!guide) return <Navigate to="/404" replace />;

  const pagePath = `/${guide.slug}`;
  const crumbs = [
    { name: 'Guides', path: '/guides' },
    { name: guide.title, path: pagePath },
  ];
  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <Seo
        title={guide.seoTitle}
        description={guide.metaDescription}
        path={pagePath}
        ogType="article"
        jsonLd={[
          articleJsonLd({
            title: guide.title,
            description: guide.metaDescription,
            path: pagePath,
            publishedAt: guide.publishedAt,
            updatedAt: guide.updatedAt,
          }),
          breadcrumbJsonLd(crumbs),
          faqJsonLd(guide.faqs),
        ]}
      />
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-forest-950">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />
        <div className="container-page relative py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 ring-1 ring-teal-500/30">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {guide.eyebrow}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-forest-200">
              <Clock className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
              {guide.readingTime} · Updated {guide.updatedAt}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-5xl text-balance">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-forest-100">{guide.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={guide.primaryService.to}
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-teal-300"
            >
              {guide.primaryService.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-forest-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800/60"
            >
              Request Phone Estimate / Contact
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-mold">
            {guide.sections.map((section, idx) => (
              <Reveal key={section.heading} delay={idx * 50}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b) => (
                      <li key={b}>
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            <Reveal delay={120}>
              <div className="not-prose mt-10 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
                  <ShieldAlert className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  Health, Safety &amp; Reliable Public Health Sources
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal-700">
                  This article provides general educational property-maintenance information—not medical advice or health outcome guarantees. Independent local inspectors and remediation contractors evaluate moisture and building materials rather than diagnosing health symptoms. For medical questions, consult a qualified physician, and follow published federal guidance:
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {guide.sources.map((src) => (
                    <li key={src.url}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-forest-800 underline decoration-forest-300 underline-offset-2 hover:text-forest-600"
                      >
                        {src.publisher}: {src.label}
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="not-prose mt-8 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
                <h2 className="font-display text-xl font-bold text-charcoal-900">Related Services, Next Steps &amp; Contact</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.relatedLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-forest-700 ring-1 ring-forest-200 transition-colors hover:bg-forest-100"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <h2>Common Questions</h2>
              <div className="space-y-4">
                {guide.faqs.map((faq) => (
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
                <h3 className="font-display text-lg font-bold">Need a Local Inspection or Estimate?</h3>
                <p className="mt-2 text-sm text-forest-200">
                  The Dome Mold Removal Experts connects Oakwood and Miami Valley property owners with independent local
                  mold inspectors, testing specialists, and remediation contractors.
                </p>
                <a href={business.phoneHref} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-semibold text-forest-950 transition-colors hover:bg-teal-300">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
                <Link
                  to="/contact"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-forest-500 px-4 py-2.5 text-sm font-semibold text-forest-100 transition-colors hover:bg-forest-700"
                >
                  Contact &amp; Referral Details
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-charcoal-100/60">
                <h3 className="font-display text-lg font-bold text-charcoal-900">More Homeowner Articles &amp; Guides</h3>
                <ul className="mt-4 space-y-2">
                  {otherGuides.map((g) => (
                    <li key={g.slug}>
                      <Link to={`/${g.slug}`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">
                        <span>{g.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-forest-500" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/guides" className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-50">
                      <span>View All Mold Articles &amp; Guides</span>
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <PageCta />
    </>
  );
}
