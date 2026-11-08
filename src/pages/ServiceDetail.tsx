import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/business';
import { getComboPage } from '@/data/combos';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  // 1. If this matches a combo (e.g. mold-inspection-oakwood-oh), redirect directly to clean root URL (e.g. /mold-inspection-oakwood-oh)
  const combo = serviceSlug ? getComboPage(`/${serviceSlug}`) || getComboPage(`/services/${serviceSlug}`) : undefined;
  if (combo) {
    return <Navigate to={combo.path} replace />;
  }

  // 2. If this is a base service slug (e.g. mold-inspection), redirect to the main location clean URL without /services/
  const service = services.find((s) => s.slug === serviceSlug);
  if (service) {
    return <Navigate to={`/${service.slug}-oakwood-oh`} replace />;
  }

  return <Navigate to="/404" replace />;
}
