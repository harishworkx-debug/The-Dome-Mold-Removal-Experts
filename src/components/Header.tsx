import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ChevronDown, Menu, X } from 'lucide-react';
import { business, services, locations, getLocationPath } from '@/data/business';

type DropdownProps = {
  label: string;
  overviewPath: string;
  items: { slug: string; name: string; path: string }[];
};

function Dropdown({ label, overviewPath, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const panelBase = 'absolute left-0 top-full z-50 w-72 pt-2 transition-all duration-200';
  const panelState = open ? ' visible opacity-100 translate-y-0' : ' invisible opacity-0 translate-y-1';
  const chevBase = 'h-3.5 w-3.5 transition-transform duration-200';
  const chevState = open ? ' rotate-180' : '';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={chevBase + chevState} aria-hidden="true" />
      </button>
      <div
        onMouseLeave={() => setOpen(false)}
        className={panelBase + panelState}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-cardHover ring-1 ring-charcoal-100">
          <Link
            to={overviewPath}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between bg-forest-50 px-4 py-3 text-sm font-bold text-forest-800 transition-colors hover:bg-forest-100"
          >
            View All {label}
            <span className="text-xs text-forest-600">&rarr;</span>
          </Link>
          <ul className="max-h-[420px] overflow-y-auto py-1">
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<'services' | 'areas' | null>(null);

  const linkClass = "block rounded-lg px-4 py-3 text-sm font-medium text-charcoal-700 hover:bg-forest-50 hover:text-forest-700";
  const subLinkClass = "block rounded-lg px-4 py-2.5 text-sm text-charcoal-600 hover:bg-forest-50 hover:text-forest-700";
  const chevronClass = "h-4 w-4 transition-transform";
  const btnClass = "flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-charcoal-700 hover:bg-forest-50";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-charcoal-700 transition-colors hover:bg-forest-50 xl:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-charcoal-100 px-5 py-4">
              <span className="font-display font-bold text-forest-800">Menu</span>
              <button onClick={() => { setOpen(false); setSection(null); }} className="flex h-9 w-9 items-center justify-center rounded-lg text-charcoal-600 hover:bg-charcoal-50" aria-label="Close menu">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="px-3 py-4" aria-label="Mobile">
              <Link to="/" onClick={() => setOpen(false)} className={linkClass}>Home</Link>

              <button onClick={() => setSection(section === 'services' ? null : 'services')} className={btnClass}>
                <span>Services</span>
                <ChevronDown className={chevronClass + (section === 'services' ? ' rotate-180' : '')} aria-hidden="true" />
              </button>
              {section === 'services' && (
                <div className="ml-3 border-l border-charcoal-100 pl-3">
                  <Link to="/services" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-forest-700 hover:bg-forest-50">All Services</Link>
                  {services.map((s) => (
                    <Link key={s.slug} to={s.corePath} onClick={() => setOpen(false)} className={subLinkClass}>{s.name}</Link>
                  ))}
                </div>
              )}

              <Link to="/mold-inspection" onClick={() => setOpen(false)} className={linkClass}>Mold Inspection</Link>
              <Link to="/mold-testing" onClick={() => setOpen(false)} className={linkClass}>Mold Testing</Link>
              <Link to="/mold-removal" onClick={() => setOpen(false)} className={linkClass}>Mold Removal</Link>

              <button onClick={() => setSection(section === 'areas' ? null : 'areas')} className={btnClass}>
                <span>Service Areas</span>
                <ChevronDown className={chevronClass + (section === 'areas' ? ' rotate-180' : '')} aria-hidden="true" />
              </button>
              {section === 'areas' && (
                <div className="ml-3 border-l border-charcoal-100 pl-3">
                  <Link to="/service-areas" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-forest-700 hover:bg-forest-50">All Service Areas</Link>
                  {locations.map((l) => (
                    <Link key={l.slug} to={getLocationPath(l.slug)} onClick={() => setOpen(false)} className={subLinkClass}>Mold Removal in {l.name}, {l.stateAbbr}</Link>
                  ))}
                </div>
              )}

              <Link to="/guides" onClick={() => setOpen(false)} className={linkClass}>Guides &amp; FAQs</Link>
              <Link to="/about" onClick={() => setOpen(false)} className={linkClass}>About</Link>
              <Link to="/reviews" onClick={() => setOpen(false)} className={linkClass}>Reviews</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</Link>

              <div className="mt-4 border-t border-charcoal-100 px-4 pt-4">
                <a href={business.phoneHref} className="btn-call w-full">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  const serviceItems = services.map((s) => ({ slug: s.slug, name: s.name, path: s.corePath }));
  const areaItems = locations.map((l) => ({ slug: l.slug, name: `Mold Removal in ${l.name}, ${l.stateAbbr}`, path: getLocationPath(l.slug) }));

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-forest-950 text-forest-100 lg:block">
        <div className="container-wide flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
            Service-Area Referral Network · Serving {business.serviceAreaLabel}
          </span>
          <a
            href={business.googleMapsListing}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            5.0 ★ Rated on Google (6 Reviews)
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 border-b border-charcoal-100 bg-white/95 backdrop-blur-md">
        <div className="container-wide flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-200 rounded-xl">
            <img src="/favicon.svg" alt="" width={48} height={48} decoding="async" className="h-10 w-10 rounded-lg lg:h-12 lg:w-12" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-forest-800 lg:text-lg">The Dome</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-charcoal-500 lg:text-xs">
                Mold Removal Experts
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">Home</Link>
            <Dropdown label="Services" overviewPath="/services" items={serviceItems} />
            <Dropdown label="Service Areas" overviewPath="/service-areas" items={areaItems} />
            <Link to="/guides" className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">Guides</Link>
            <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">About</Link>
            <Link to="/reviews" className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">Reviews</Link>
            <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:bg-forest-50 hover:text-forest-700">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href={business.phoneHref} className="btn-call !px-4 !py-2.5 !text-sm lg:!px-5 lg:!py-3 lg:!text-base">
              <Phone className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
              <span className="hidden sm:inline">Call </span>
              {business.phoneDisplay}
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
