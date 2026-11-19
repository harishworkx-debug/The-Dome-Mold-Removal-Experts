import React, { useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import StandaloneHeader from './StandaloneHeader';
import StandaloneHero from './StandaloneHero';
import StandaloneServices from './StandaloneServices';
import StandaloneAbout from './StandaloneAbout';
import { StandaloneServiceArea } from './StandaloneServiceArea';
import { StandaloneWhyUs } from './StandaloneWhyUs';
import { StandaloneFaq } from './StandaloneFaq';
import { StandaloneContact } from './StandaloneContact';
import { StandaloneFooter } from './StandaloneFooter';
import { LANDING_IDENTITY, NEARBY_CITIES, LANDING_SERVICES } from './data';

export const StandaloneLandingPage: React.FC = () => {
  useEffect(() => {
    // 1. Set Dedicated Document Title
    const originalTitle = document.title;
    document.title = `${LANDING_IDENTITY.fullTitle}, OH | Professional Mold Remediation & Inspection`;

    // 2. Set Dedicated Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : null;

    const landingDesc =
      'Professional mold removal, containment remediation, and moisture inspection in Oakwood, OH (45419). Fast phone dispatch across Montgomery County. Call (937) 967-3264 for an upfront written estimate.';

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', landingDesc);

    // 3. Inject Clean JSON-LD Schema (Zero Company Names, Pure Niche + Location Identity)
    const schemaScriptId = 'standalone-landing-schema';
    let scriptTag = document.getElementById(schemaScriptId) as HTMLScriptElement | null;

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: LANDING_IDENTITY.fullTitle,
      description: landingDesc,
      telephone: '+1-937-967-3264',
      address: {
        '@type': 'PostalAddress',
        addressLocality: LANDING_IDENTITY.city,
        addressRegion: LANDING_IDENTITY.state,
        postalCode: LANDING_IDENTITY.primaryZip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.7226,
        longitude: -84.1853,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '19:00',
        },
      ],
      areaServed: NEARBY_CITIES.map((city) => ({
        '@type': 'City',
        name: `${city.name}, OH`,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${LANDING_IDENTITY.niche} Services`,
        itemListElement: LANDING_SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
            description: s.description,
          },
        })),
      },
      priceRange: '$$',
    };

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaScriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc !== null) {
        metaDesc.setAttribute('content', originalDesc);
      }
      const existingScript = document.getElementById(schemaScriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white pb-16 md:pb-0">
      {/* 1. Header Navigation */}
      <StandaloneHeader />

      {/* 2. Hero Section */}
      <main>
        <StandaloneHero />

        {/* 3. Core Services */}
        <StandaloneServices />

        {/* 4. Local Architecture & Diagnostics */}
        <StandaloneAbout />

        {/* 5. Service Area & Geographic Coverage */}
        <StandaloneServiceArea />

        {/* 6. Why Choose Us / IICRC Pillars */}
        <StandaloneWhyUs />

        {/* 7. Frequently Asked Questions */}
        <StandaloneFaq />

        {/* 8. Contact & Request Form */}
        <StandaloneContact />
      </main>

      {/* 9. Footer with Modals */}
      <StandaloneFooter />

      {/* Mobile Sticky Floating Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl flex items-center justify-between gap-3">
        <a
          href={LANDING_IDENTITY.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow transition-colors"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call (937) 967-3264</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs transition-colors shrink-0"
        >
          <Calendar className="w-4 h-4" />
          <span>Get Quote</span>
        </a>
      </div>
    </div>
  );
};

export default StandaloneLandingPage;
