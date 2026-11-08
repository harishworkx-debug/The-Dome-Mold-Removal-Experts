import { services, locations } from './business';

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

// Verified service + location combinations.
// Every service is offered across the verified Dayton metro service area.
export const comboPages: ComboPage[] = services.flatMap((service) =>
  locations.map((location) => {
    const locShort = `${location.name}, ${location.stateAbbr}`;
    const path = `/${service.slug}-${location.slug}`;
    return {
      path,
      serviceSlug: service.slug,
      serviceName: service.name,
      serviceCta: service.ctaLabel,
      locationSlug: location.slug,
      locationName: location.name,
      locationState: location.stateAbbr,
      locationCounty: location.county,
      title: `${service.name} in ${locShort} | The Dome Mold Removal Experts`,
      metaDescription: `${service.name} in ${locShort} from The Dome Mold Removal Experts. Call 937-967-3264 to discuss your ${service.shortName.toLowerCase()} concerns with a local home inspector.`,
      h1: `${service.name} in ${locShort}`,
    };
  }),
);

export function getComboPage(path: string): ComboPage | undefined {
  return comboPages.find((p) => p.path === path);
}

export function combosForService(serviceSlug: string): ComboPage[] {
  return comboPages.filter((p) => p.serviceSlug === serviceSlug);
}

export function combosForLocation(locationSlug: string): ComboPage[] {
  return comboPages.filter((p) => p.locationSlug === locationSlug);
}
