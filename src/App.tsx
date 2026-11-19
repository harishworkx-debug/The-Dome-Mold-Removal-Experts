import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { services, locations, getLocationPath } from '@/data/business';
import { guides } from '@/data/guides';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
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
