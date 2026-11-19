import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { services, locations, getLocationPath } from '@/data/business';
import { guides } from '@/data/guides';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';

const StandaloneLandingPage = lazy(() => import('@/standalone-landing/StandaloneLandingPage'));
const ServicesOverview = lazy(() => import('@/pages/ServicesOverview'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const CoreServicePage = lazy(() => import('@/pages/CoreServicePage'));
const ServiceAreasOverview = lazy(() => import('@/pages/ServiceAreasOverview'));
const ServiceAreaDetail = lazy(() => import('@/pages/ServiceAreaDetail'));
const ServiceLocationPage = lazy(() => import('@/pages/ServiceLocationPage'));
const GuidesOverview = lazy(() => import('@/pages/GuidesOverview'));
const GuideDetail = lazy(() => import('@/pages/GuideDetail'));
const About = lazy(() => import('@/pages/About'));
const Reviews = lazy(() => import('@/pages/Reviews'));
const Contact = lazy(() => import('@/pages/Contact'));

export default function App() {
  const standaloneLandingElement = (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <StandaloneLandingPage />
    </Suspense>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone Landing Page Standby / Preview Route (Always Accessible) */}
        <Route path="/home-page" element={standaloneLandingElement} />

        {/* When Switcher is TRUE: Serve Standalone Landing at Root and Primary Location URL */}
        {USE_LANDING_PAGE_AS_HOME && (
          <>
            <Route path="/" element={standaloneLandingElement} />
            <Route path="/mold-removal-oakwood-oh" element={standaloneLandingElement} />
          </>
        )}

        {/* Main Website System (Preserved 100% Intact with Layout) */}
        <Route element={<Layout />}>
          {!USE_LANDING_PAGE_AS_HOME && <Route path="/" element={<Home />} />}
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/service-areas" element={<ServiceAreasOverview />} />
          <Route path="/service-areas/:locationSlug" element={<ServiceAreaDetail />} />
          <Route path="/guides" element={<GuidesOverview />} />
          {guides.map((guide) => (
            <Route
              key={guide.slug}
              path={`/${guide.slug}`}
              element={<GuideDetail guideSlug={guide.slug} />}
            />
          ))}
          {services
            .filter((service) => service.slug !== 'mold-removal')
            .map((service) => (
              <Route
                key={service.corePath}
                path={service.corePath}
                element={<CoreServicePage serviceSlug={service.slug} />}
              />
            ))}
          {locations.map((loc) => (
            <Route
              key={loc.slug}
              path={getLocationPath(loc.slug)}
              element={<ServiceAreaDetail locationSlugOverride={loc.slug} />}
            />
          ))}
          {locations.map((loc) => (
            <Route
              key={`legacy-${loc.slug}`}
              path={`/${loc.slug}`}
              element={<Navigate to={getLocationPath(loc.slug)} replace />}
            />
          ))}
          {/* Legacy bare core service paths -> canonical Oakwood service URLs */}
          {services.map((service) => (
            <Route
              key={`legacy-service-${service.slug}`}
              path={`/${service.slug}`}
              element={<Navigate to={service.corePath} replace />}
            />
          ))}
          {/* Consolidated overlapping service base paths -> core canonical Oakwood services */}
          <Route path="/mold-assessment" element={<Navigate to="/mold-inspection-oakwood-oh" replace />} />
          <Route path="/property-mold-inspection" element={<Navigate to="/mold-inspection-oakwood-oh" replace />} />
          <Route path="/water-intrusion-inspection" element={<Navigate to="/moisture-inspection-oakwood-oh" replace />} />
          <Route path="/indoor-air-quality" element={<Navigate to="/indoor-air-quality-inspection-oakwood-oh" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          {/* Service-location combos & legacy redirect fallbacks */}
          <Route path="/*" element={<ServiceLocationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
