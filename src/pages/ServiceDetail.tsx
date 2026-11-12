import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/business';
import { getComboPage, resolveLegacyRedirect } from '@/data/combos';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();

  if (!serviceSlug) return <Navigate to="/404" replace />;

  const redirectTarget = resolveLegacyRedirect(`/services/${serviceSlug}`);
  if (redirectTarget) {
    return <Navigate to={redirectTarget} replace />;
  }

  // Matches an active core service slug -> redirect cleanly to its canonical core path
  const coreService = services.find((s) => s.slug === serviceSlug || s.corePath === `/${serviceSlug}`);
  if (coreService) {
    return <Navigate to={coreService.corePath} replace />;
  }

  // Matches a remaining active combo slug -> redirect cleanly to /{service}-{city}-oh
  const combo = getComboPage(`/${serviceSlug}`);
  if (combo) {
    return <Navigate to={combo.path} replace />;
  }

  return <Navigate to="/404" replace />;
}
