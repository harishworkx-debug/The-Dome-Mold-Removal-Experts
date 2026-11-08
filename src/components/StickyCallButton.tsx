import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function StickyCallButton() {
  return (
    <a
      href={business.phoneHref}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-forest-600 px-5 py-4 font-semibold text-white shadow-lift transition-all hover:bg-forest-700 active:scale-95 lg:hidden"
      aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-60 animate-pulse-ring" />
        <Phone className="relative h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm">Call Now</span>
    </a>
  );
}
