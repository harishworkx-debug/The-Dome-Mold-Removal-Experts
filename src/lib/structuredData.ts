import { business, locations, reviewsData } from '@/data/business';

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${business.website}#business`,
  name: business.name,
  description: business.tagline,
  url: business.website,
  telephone: business.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.addressLine,
    addressLocality: business.addressCity,
    addressRegion: business.addressState,
    postalCode: business.addressZip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geoLat,
    longitude: business.geoLng,
  },
  hasMap: business.googleMapsListing,
  sameAs: [business.googleMapsListing],
  areaServed: locations.map((l) => ({ '@type': 'City', name: `${l.name}, ${l.stateAbbr}` })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '6',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviewsData.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: '5',
    },
    reviewBody: r.text,
  })),
};

export function serviceJsonLd(serviceName: string, locationName: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${locationName}, OH`,
    provider: { '@id': `${business.website}#business` },
    areaServed: { '@type': 'City', name: `${locationName}, OH` },
    url: `${business.website}${path}`,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${business.website}${item.path}`,
    })),
  };
}
