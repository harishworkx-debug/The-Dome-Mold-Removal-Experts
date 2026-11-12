import { services, locations, consolidatedServiceRedirects, formatServiceTemplate } from './business';

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
> = {
  '/mold-removal-dayton-oh': {
    title: 'Mold Removal in Dayton, OH | Mold Remediation Assistance',
    metaDescription:
      'Need mold removal and remediation assistance in Dayton, OH? Connect with independent local contractors evaluating affected materials, containment scope, and moisture causes.',
    h1: 'Mold Removal and Remediation Assistance in Dayton, Ohio',
  },
};

export const comboPages: ComboPage[] = services.flatMap((service) =>
  locations
    .filter((location) => !service.comboLocationSlugs || service.comboLocationSlugs.includes(location.slug))
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
  if (path.startsWith('/services/')) path = path.replace(/^\/services/, '');
  if (path.startsWith('/service-areas/')) path = path.replace(/^\/service-areas/, '');

  // Legacy /mold-inspection-and-removal-{city}-oh -> /{city}-oh
  if (path.startsWith('/mold-inspection-and-removal-')) {
    const citySlug = path.slice('/mold-inspection-and-removal-'.length);
    const loc = locations.find((l) => l.slug === citySlug || `${l.slug}` === `${citySlug}-oh`);
    if (loc) return `/${loc.slug}`;
  }

  // Legacy /indoor-air-quality-inspection base URL -> /indoor-air-quality
  if (path === '/indoor-air-quality-inspection') {
    return '/indoor-air-quality';
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

export function combosForService(serviceSlug: string): ComboPage[] {
  return comboPages.filter((p) => p.serviceSlug === serviceSlug);
}

export function combosForLocation(locationSlug: string): ComboPage[] {
  return comboPages.filter((p) => p.locationSlug === locationSlug);
}
