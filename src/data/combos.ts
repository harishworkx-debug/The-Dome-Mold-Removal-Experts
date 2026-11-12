import { services, locations, consolidatedServiceRedirects, formatServiceTemplate, getLocationPath } from './business';

export type ComboPage = {
  path: string;
  serviceSlug: string;
  serviceName: string;
  serviceCta: string;
  locationSlug: string;
  locationName: string;
  locationState: string;
  locationCounty: string;
  title: string;
  metaDescription: string;
  h1: string;
};

const COMBO_SEO_OVERRIDES: Record<
  string,
  Partial<Pick<ComboPage, 'title' | 'metaDescription' | 'h1'>>
> = {};

export const comboPages: ComboPage[] = services
  .filter((service) => service.slug !== 'mold-removal')
  .flatMap((service) =>
  locations
    .filter(
      (location) =>
        location.slug !== 'oakwood-oh' &&
        (!service.comboLocationSlugs || service.comboLocationSlugs.includes(location.slug)),
    )
    .map((location) => {
      const locShort = `${location.name}, ${location.stateAbbr}`;
      const path = `/${service.slug}-${location.slug}`;
      const override = COMBO_SEO_OVERRIDES[path];
      return {
        path,
        serviceSlug: service.slug,
        serviceName: service.name,
        serviceCta: service.ctaLabel,
        locationSlug: location.slug,
        locationName: location.name,
        locationState: location.stateAbbr,
        locationCounty: location.county,
        title: override?.title ?? formatServiceTemplate(service.comboTitleTemplate, location.name, locShort),
        metaDescription:
          override?.metaDescription ??
          formatServiceTemplate(service.comboMetaTemplate, location.name, locShort),
        h1: override?.h1 ?? formatServiceTemplate(service.comboH1Template, location.name, locShort),
      };
    }),
);

export function resolveLegacyRedirect(rawPath: string): string | undefined {
  if (!rawPath) return undefined;
  let path = rawPath.replace(/\/$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  const hadLegacyPrefix =
    path.startsWith('/services/') || path.startsWith('/service-areas/');
  if (path.startsWith('/services/')) path = path.replace(/^\/services/, '');
  if (path.startsWith('/service-areas/')) path = path.replace(/^\/service-areas/, '');

  // Legacy /mold-inspection-and-removal-{city}-oh -> /mold-removal-{city}-oh
  if (path.startsWith('/mold-inspection-and-removal-')) {
    const citySlug = path.slice('/mold-inspection-and-removal-'.length);
    const loc = locations.find((l) => l.slug === citySlug || `${l.slug}` === `${citySlug}-oh`);
    if (loc) return getLocationPath(loc.slug);
  }

  // Legacy /services/mold-removal-{city}-oh or shortened /mold-removal-{city} -> /mold-removal-{city}-oh
  if (path.startsWith('/mold-removal-')) {
    const cityPart = path.slice('/mold-removal-'.length);
    const shortMatch = locations.find((l) => l.slug === `${cityPart}-oh`);
    if (shortMatch) return getLocationPath(shortMatch.slug);
    if (hadLegacyPrefix) {
      const exactMatch = locations.find((l) => l.slug === cityPart);
      if (exactMatch) return getLocationPath(exactMatch.slug);
    }
  }

  // Legacy /{city}-oh or /service-areas/{city}-oh -> /mold-removal-{city}-oh
  const bareSlug = path.slice(1);
  const bareLoc = locations.find((l) => l.slug === bareSlug || l.slug === `${bareSlug}-oh`);
  if (bareLoc) {
    return getLocationPath(bareLoc.slug);
  }

  // Legacy /indoor-air-quality or /indoor-air-quality-inspection base URL -> Oakwood canonical URL
  if (path === '/indoor-air-quality' || path === '/indoor-air-quality-inspection') {
    return '/indoor-air-quality-inspection-oakwood-oh';
  }

  // Legacy /services/{service}-oakwood-oh -> canonical Oakwood service URL
  if (hadLegacyPrefix) {
    const coreMatch = services.find((s) => s.corePath === path);
    if (coreMatch) return coreMatch.corePath;
  }

  // Legacy bare core service URLs (/mold-inspection, /mold-removal, etc.) -> /{service}-oakwood-oh
  const bareService = services.find((s) => `/${s.slug}` === path);
  if (bareService) {
    return bareService.corePath;
  }

  // Consolidated overlapping service paths
  for (const [oldPrefix, newPrefix] of Object.entries(consolidatedServiceRedirects)) {
    if (path === `/${oldPrefix}`) {
      const targetService = services.find((s) => s.slug === newPrefix);
      return targetService?.corePath ?? `/${newPrefix}`;
    }
    if (path.startsWith(`/${oldPrefix}-`)) {
      const locPart = path.slice(`/${oldPrefix}-`.length);
      const matchedLoc = locations.find((l) => l.slug === locPart || l.slug === `${locPart}-oh`);
      if (matchedLoc) {
        return `/${newPrefix}-${matchedLoc.slug}`;
      }
      const targetService = services.find((s) => s.slug === newPrefix);
      return targetService?.corePath ?? `/${newPrefix}`;
    }
  }

  return undefined;
}

export function getComboPage(rawPath: string): ComboPage | undefined {
  if (!rawPath) return undefined;
  let path = rawPath.replace(/\/$/, '');
  if (!path.startsWith('/')) path = '/' + path;

  const direct = comboPages.find((p) => p.path === path);
  if (direct) return direct;

  if (path.startsWith('/services/')) {
    const withoutServices = path.replace(/^\/services/, '');
    const found = comboPages.find((p) => p.path === withoutServices);
    if (found) return found;
    const withOh = `${withoutServices}-oh`;
    return comboPages.find((p) => p.path === withOh);
  }

  const withOh = `${path}-oh`;
  return comboPages.find((p) => p.path === withOh);
}

function buildOakwoodCoreCombo(service: (typeof services)[number], oakwood: (typeof locations)[number]): ComboPage {
  return {
    path: service.corePath,
    serviceSlug: service.slug,
    serviceName: service.name,
    serviceCta: service.ctaLabel,
    locationSlug: oakwood.slug,
    locationName: oakwood.name,
    locationState: oakwood.stateAbbr,
    locationCounty: oakwood.county,
    title: service.coreSeoTitle,
    metaDescription: service.coreMetaDescription,
    h1: service.coreH1,
  };
}

export function combosForService(serviceSlug: string): ComboPage[] {
  const service = services.find((s) => s.slug === serviceSlug);
  const oakwood = locations.find((l) => l.slug === 'oakwood-oh');
  if (serviceSlug === 'mold-removal' && service) {
    return locations.map((loc) => ({
      path: getLocationPath(loc.slug),
      serviceSlug: service.slug,
      serviceName: service.name,
      serviceCta: service.ctaLabel,
      locationSlug: loc.slug,
      locationName: loc.name,
      locationState: loc.stateAbbr,
      locationCounty: loc.county,
      title: loc.seoTitle ?? `Mold Removal in ${loc.name}, ${loc.stateAbbr} | Inspection & Remediation | The Dome`,
      metaDescription:
        loc.metaDescription ??
        `Connect with independent mold removal, inspection, testing, and remediation contractors in ${loc.name}, ${loc.stateAbbr}. Call The Dome at 937-967-3264.`,
      h1: loc.h1 ?? `Mold Removal & Inspection in ${loc.name}, ${loc.stateAbbr}`,
    }));
  }
  const rest = comboPages.filter((p) => p.serviceSlug === serviceSlug);
  if (service && oakwood) {
    return [buildOakwoodCoreCombo(service, oakwood), ...rest];
  }
  return rest;
}

export function combosForLocation(locationSlug: string): ComboPage[] {
  if (locationSlug === 'oakwood-oh') {
    const oakwood = locations.find((l) => l.slug === 'oakwood-oh');
    if (!oakwood) return [];
    return services
      .filter((s) => s.slug !== 'mold-removal')
      .map((s) => buildOakwoodCoreCombo(s, oakwood));
  }
  return comboPages.filter((p) => p.locationSlug === locationSlug);
}
