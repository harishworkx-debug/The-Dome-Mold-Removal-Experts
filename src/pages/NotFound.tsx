import { Link } from 'react-router-dom';
import { Phone, Home, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import { business } from '@/data/business';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | The Dome Mold Removal Experts"
        description="The page you are looking for could not be found. Call The Dome Mold Removal Experts at 937-967-3264 or return to the homepage."
        path="/404"
      />
      <section className="flex min-h-[70vh] items-center bg-forest-50 py-16">
        <div className="container-page text-center">
          <p className="font-display text-7xl font-extrabold text-forest-200 sm:text-9xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-charcoal-600">
            The page you are looking for may have moved or no longer exists. You can return to the homepage or call us
            directly to discuss your mold or moisture concerns.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-secondary">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
            <a href={business.phoneHref} className="btn-call">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <Link to="/services" className="flex items-center gap-1 font-semibold text-forest-700 hover:text-forest-600">Services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
            <span className="text-charcoal-300">|</span>
            <Link to="/service-areas" className="flex items-center gap-1 font-semibold text-forest-700 hover:text-forest-600">Service Areas <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
            <span className="text-charcoal-300">|</span>
            <Link to="/contact" className="flex items-center gap-1 font-semibold text-forest-700 hover:text-forest-600">Contact <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
