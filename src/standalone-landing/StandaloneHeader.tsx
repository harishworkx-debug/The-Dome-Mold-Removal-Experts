import { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldAlert, Clock, MapPin } from 'lucide-react';
import { LANDING_IDENTITY } from './data';

export default function StandaloneHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Local Building Focus', href: '#about' },
    { label: 'Service Areas', href: '#service-area' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-950/95 shadow-card backdrop-blur-md border-b border-forest-800/80 py-2.5'
          : 'bg-forest-950 border-b border-forest-900 py-3.5'
      }`}
    >
      {/* Top micro-bar for emergency phone and dispatch signal */}
      <div className="container-wide hidden sm:flex items-center justify-between text-xs text-forest-200 pb-2 border-b border-forest-800/50 mb-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-teal-300 font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Active Dispatch · Oakwood & Montgomery County, OH
          </span>
          <span className="text-forest-400">|</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-teal-400" />
            {LANDING_IDENTITY.hours}
          </span>
        </div>
        <div className="flex items-center gap-1 text-forest-300">
          <MapPin className="h-3 w-3 text-teal-400" />
          <span>ZIP: {LANDING_IDENTITY.primaryZip} Hub</span>
        </div>
      </div>

      <div className="container-wide flex items-center justify-between">
        {/* Strict Text Identity: SERVICE NICHE + LOCATION */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label={LANDING_IDENTITY.fullTitle}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-forest-700 to-forest-900 text-teal-300 shadow-card border border-teal-500/30 group-hover:border-teal-400 transition-colors">
            <ShieldAlert className="h-6 w-6 text-teal-300" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-teal-300 transition-colors">
              {LANDING_IDENTITY.niche}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              in {LANDING_IDENTITY.location}
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest-100 hover:text-teal-300 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direct Call Button & Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={LANDING_IDENTITY.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-forest-950 shadow-lift hover:bg-teal-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xs:inline">Call Now:</span>
            <span>{LANDING_IDENTITY.phoneDisplay}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-forest-200 hover:text-white hover:bg-forest-800 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-forest-800/80 bg-forest-950/98 px-5 py-6 mt-3 shadow-2xl backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col gap-3">
            <div className="mb-2 pb-2 border-b border-forest-800/60 text-xs text-teal-300 flex items-center justify-between">
              <span>{LANDING_IDENTITY.location} Fast Mobile Dispatch</span>
              <span>Mon–Sat 7AM–7PM</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-4 py-2.5 text-base font-medium text-forest-100 hover:bg-forest-800/70 hover:text-teal-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-forest-800/70">
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="flex items-center justify-center gap-2.5 w-full rounded-full bg-teal-400 px-5 py-3.5 text-base font-bold text-forest-950 hover:bg-teal-300 shadow-md"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {LANDING_IDENTITY.phoneDisplay}
              </a>
              <p className="mt-2 text-center text-xs text-forest-300">
                {LANDING_IDENTITY.emergencyAvailability}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
