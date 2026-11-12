import type { ReactNode } from 'react';
import { Phone, CheckCircle2, AlertCircle, ClipboardCheck, Wrench } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { business, formatServiceTemplate, MoldService } from '@/data/business';

type ServiceBodySectionsProps = {
  service: MoldService;
  cityLabel: string;
  locShortLabel: string;
  articleCityLabel?: string;
  afterIntro?: ReactNode;
  beforeFaq?: ReactNode;
};

/**
 * Shared 12-point service content blocks shared by CoreServicePage and ServiceLocationPage.
 * Avoids duplicating service-angle, verified-methods, written-scope, and FAQ prose markup.
 */
export function ServiceBodySections({
  service,
  cityLabel,
  locShortLabel,
  articleCityLabel,
  afterIntro,
  beforeFaq,
}: ServiceBodySectionsProps) {
  const concernsHeading = formatServiceTemplate(
    service.concernsHeading,
    cityLabel,
    locShortLabel,
    articleCityLabel,
  );

  return (
    <>
      <Reveal>
        <h2>How {service.name} Works</h2>
        {service.introParagraphs.map((paragraph, index) => (
          <p key={index}>{formatServiceTemplate(paragraph, cityLabel, locShortLabel)}</p>
        ))}

        <figure className="not-prose my-6 overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-card">
          <img
            src={service.image}
            alt={service.imageAlt}
            width={940}
            height={650}
            loading="lazy"
            decoding="async"
            className="h-56 w-full object-cover sm:h-64"
          />
          <figcaption className="border-t border-charcoal-100 bg-charcoal-50/70 px-4 py-3 text-xs leading-relaxed text-charcoal-600">
            {service.imageAlt} — representative inspection &amp; contractor referral work in our Miami Valley service area.
          </figcaption>
        </figure>

        <div className="not-prose mt-4 rounded-xl bg-forest-50 p-4 text-sm text-forest-900 ring-1 ring-forest-200">
          <strong className="font-semibold">Scope &amp; Distinction:</strong> {service.scopeBoundary}
        </div>
        {afterIntro}
      </Reveal>

      <Reveal delay={60}>
        <h2>{concernsHeading}</h2>
        <ul>
          {service.concerns.map((concern) => (
            <li key={concern}>
              <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
              <span>{concern}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={100}>
        <div className="not-prose my-8 rounded-2xl border border-forest-200/80 bg-white p-6 shadow-card">
          <h2 className="font-display text-xl font-bold text-charcoal-900">
            {service.angleSection.heading}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal-700">
            {service.angleSection.paragraphs.map((p, idx) => (
              <p key={idx}>{formatServiceTemplate(p, cityLabel, locShortLabel)}</p>
            ))}
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal-700">
            {service.angleSection.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
                <span>{formatServiceTemplate(bullet, cityLabel, locShortLabel)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={130}>
        <h2>What Independent Professionals Evaluate or Handle</h2>
        <ul>
          {service.workPerformed.map((item) => (
            <li key={item}>
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-forest-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={150}>
        <div className="not-prose my-7 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
            <Wrench className="h-5 w-5 text-forest-700" aria-hidden="true" />
            Tools &amp; Evaluation Methods Used
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-charcoal-700">
            {formatServiceTemplate(service.methodsNote, cityLabel, locShortLabel)}
          </p>
          <h3 className="mt-5 flex items-center gap-2 font-display text-lg font-bold text-charcoal-900">
            <ClipboardCheck className="h-5 w-5 text-forest-700" aria-hidden="true" />
            {service.afterInspection.heading}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
            {formatServiceTemplate(service.afterInspection.body, cityLabel, locShortLabel)}
          </p>
        </div>
      </Reveal>

      <Reveal delay={170}>
        <h2>Important Limitations &amp; Referral Disclosure</h2>
        <ul>
          {service.considerations.map((consideration) => (
            <li key={consideration}>
              <AlertCircle className="mt-1 h-4 w-4 flex-shrink-0 text-sand-400" aria-hidden="true" />
              <span>{consideration}</span>
            </li>
          ))}
        </ul>
        <div className="not-prose mt-5 rounded-xl bg-sand-50 p-5 text-sm text-charcoal-700 ring-1 ring-sand-200">
          <p className="font-semibold text-charcoal-900">
            Need help with a suspected mold concern in {cityLabel}?
          </p>
          <p className="mt-1.5 leading-relaxed">
            The Dome Mold Removal Experts is a referral service connecting property owners with independent local
            specialists—we do not diagnose health conditions or directly perform physical remediation. Call{' '}
            <a href={business.phoneHref} className="font-semibold text-forest-700 underline underline-offset-4 hover:text-forest-600">
              {business.phoneDisplay}
            </a>{' '}
            to discuss your property concern and connect with an appropriate local contractor.
          </p>
          <a
            href={business.phoneHref}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-forest-800 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-forest-700"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </Reveal>

      {beforeFaq}
    </>
  );
}
