import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { business, services } from '@/data/business';
import { combosForService } from '@/data/combos';

export default function PageCta({
  headline = 'Concerned About Mold in Your Property?',
  subtext = 'Call The Dome Mold Removal Experts to connect with local mold inspection and remediation professionals.',
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-800 py-16 lg:py-20">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(93,213,189,0.4), transparent 50%)' }} />
      <div className="container-page relative text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-forest-200">{subtext}</p>
        <a href={business.phoneHref} className="btn-call-lg mt-7 bg-teal-400 !text-forest-950 hover:bg-teal-300">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call {business.phoneDisplay}
        </a>
      </div>
    </section>
  );
}

export function ServiceLocationLinks({
  serviceSlug,
  serviceName,
  currentLocationSlug,
}: {
  serviceSlug: string;
  serviceName?: string;
  currentLocationSlug?: string;
}) {
  const resolvedServiceName =
    serviceName ?? services.find((s) => s.slug === serviceSlug)?.shortName ?? 'Mold Service';
  const others = combosForService(serviceSlug).filter((c) => c.locationSlug !== currentLocationSlug);
  if (others.length === 0) return null;
  return (
    <div className="rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
        <MapPin className="h-5 w-5 text-forest-600" aria-hidden="true" />
        {resolvedServiceName} in Other Service Areas
      </h3>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {others.map((c) => (
          <li key={c.path}>
            <Link
              to={c.path}
              className="flex items-center justify-between rounded-lg bg-white px-3.5 py-2.5 text-sm font-medium text-charcoal-700 ring-1 ring-charcoal-100 transition-all hover:text-forest-700 hover:ring-forest-300"
            >
              <span>{resolvedServiceName} in {c.locationName}, {c.locationState}</span>
              <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-forest-500" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
