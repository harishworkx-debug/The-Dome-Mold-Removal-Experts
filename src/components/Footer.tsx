import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, Home } from 'lucide-react';
import { business } from '@/data/business';
import { services, locations } from '@/data/business';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      {/* Main CTA band */}
      <div className="border-b border-forest-800/60">
        <div className="container-wide flex flex-col items-center gap-6 py-10 text-center lg:py-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Concerned About Mold in Your Property?
          </h2>
          <p className="max-w-xl text-forest-200">
            Call The Dome Mold Removal Experts to discuss your inspection or mold-related concerns.
          </p>
          <a href={business.phoneHref} className="btn-call-lg bg-teal-400 !text-forest-950 hover:bg-teal-300">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-wide grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/favicon.svg" alt="" className="h-11 w-11 rounded-lg" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-white">The Dome</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-forest-300">
                Mold Removal Experts
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-forest-300">
            Professional mold inspection, assessment, and removal serving Oakwood, Dayton, and the surrounding
            Miami Valley.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={business.phoneHref} className="flex items-center gap-2.5 font-semibold text-white hover:text-teal-300 transition-colors">
              <Phone className="h-4 w-4 text-teal-400" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <a
              href={business.googleMapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-forest-300 hover:text-white transition-colors"
            >
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" aria-hidden="true" />
              {business.fullAddress}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal-300">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services" className="text-forest-200 hover:text-white transition-colors">All Mold Services</Link></li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}-oakwood-oh`} className="text-forest-200 hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal-300">Service Areas</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/service-areas" className="text-forest-200 hover:text-white transition-colors">All Service Areas</Link></li>
            {locations.map((l) => (
              <li key={l.slug}>
                <Link to={`/mold-inspection-and-removal-${l.slug}`} className="text-forest-200 hover:text-white transition-colors">
                  {l.name}, {l.stateAbbr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal-300">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="flex items-center gap-2 text-forest-200 hover:text-white transition-colors"><Home className="h-4 w-4 text-teal-400" aria-hidden="true" />Home</Link></li>
            <li><Link to="/about" className="text-forest-200 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/reviews" className="text-forest-200 hover:text-white transition-colors">Reviews</Link></li>
            <li><Link to="/contact" className="text-forest-200 hover:text-white transition-colors">Contact Information</Link></li>
            <li>
              <a href={business.googleMapsListing} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-forest-200 hover:text-white transition-colors">
                Google Maps Listing <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800/60">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-forest-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {business.fullAddress}
          </p>
        </div>
      </div>
    </footer>
  );
}
