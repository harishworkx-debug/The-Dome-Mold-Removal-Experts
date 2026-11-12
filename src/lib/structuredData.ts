import { business, locations } from '@/data/business';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${business.website}#organization`,
  name: business.name,
  url: business.website,
  telephone: business.phoneDisplay,
  sameAs: [business.googleMapsListing],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${business.website}#website`,
  name: business.name,
  url: business.website,
  publisher: { '@id': `${business.website}#organization` },
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${business.website}#business`,
  name: business.name,
  description:
    'Service-area referral service connecting Oakwood, OH and Miami Valley property owners with independent local mold inspectors, testing professionals, and remediation contractors.',
  url: business.website,
  telephone: business.phoneDisplay,
  sameAs: [business.googleMapsListing],
  areaServed: locations.map((l) => ({ '@type': 'City', name: `${l.name}, ${l.stateAbbr}` })),
};

export function serviceJsonLd(serviceName: string, locationName: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${locationName}, OH`,
    description: `Referral service connecting ${locationName}, OH property owners with independent local ${serviceName.toLowerCase()} specialists.`,
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

export function articleJsonLd(article: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: `${business.website}${article.path}`,
    author: { '@id': `${business.website}#organization` },
    publisher: { '@id': `${business.website}#organization` },
  };
}
