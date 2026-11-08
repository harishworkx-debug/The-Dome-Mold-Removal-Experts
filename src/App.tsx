import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ServicesOverview from '@/pages/ServicesOverview';
import ServiceDetail from '@/pages/ServiceDetail';
import ServiceAreasOverview from '@/pages/ServiceAreasOverview';
import ServiceAreaDetail from '@/pages/ServiceAreaDetail';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import About from '@/pages/About';
import Reviews from '@/pages/Reviews';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

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
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          {/* Service-location combo pages: /{service-slug}-{location-slug} */}
          <Route path="/*" element={<ServiceLocationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
