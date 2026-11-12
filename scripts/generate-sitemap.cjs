const fs = require('fs');
const path = require('path');

// Core service pages anchored in main service area (Oakwood, OH).
// Note: /mold-removal-oakwood-oh is emitted once in Section 4 (Service Area locations).
const coreServices = [
  '/mold-inspection-oakwood-oh',
  '/mold-testing-oakwood-oh',
  '/mold-remediation-oakwood-oh',
  '/moisture-inspection-oakwood-oh',
  '/basement-mold-inspection-oakwood-oh',
  '/attic-mold-inspection-oakwood-oh',
  '/indoor-air-quality-inspection-oakwood-oh',
  '/commercial-mold-inspection-oakwood-oh',
];

const comboServices = [
  'mold-inspection',
  'mold-testing',
  'mold-remediation',
  'moisture-inspection',
  'basement-mold-inspection',
  'attic-mold-inspection',
  'indoor-air-quality-inspection',
];

const commercialComboLocations = ['dayton-oh', 'moraine-oh'];

const locations = [
  'oakwood-oh',
  'dayton-oh',
  'kettering-oh',
  'centerville-oh',
  'beavercreek-oh',
  'miamisburg-oh',
  'washington-township-oh',
  'moraine-oh',
  'riverside-oh',
  'fairborn-oh',
];

const guideSlugs = [
  '/guides',
  '/causes-of-mold-growth-ohio-basements',
  '/signs-your-attic-has-mold-or-moisture-problem',
  '/what-happens-during-professional-mold-inspection',
  '/recognize-mold-after-water-damage',
  '/mold-testing-vs-mold-inspection-difference',
  '/prevent-recurring-moisture-problems-crawl-spaces',
  '/mold-prevention-guide',
  '/basement-moisture-guide',
  '/mold-inspection-faqs',
  '/water-damage-and-mold-guide',
];

const base = 'https://www.moldremoval-oakwood.com';
// Update these dates only when meaningful content edits happen on those route groups.
const CONTENT_UPDATED = {
  topLevel: '2026-11-12',
  guides: '2026-11-12',
  coreServices: '2026-11-12',
  locations: '2026-11-12',
  combos: '2026-11-12',
};

const urls = [];

// 1. Canonical Indexable Top-Level Pages (excludes 404/noindex or redirected URLs)
urls.push({ loc: `${base}/`, lastmod: CONTENT_UPDATED.topLevel });
urls.push({ loc: `${base}/services`, lastmod: CONTENT_UPDATED.topLevel });
urls.push({ loc: `${base}/service-areas`, lastmod: CONTENT_UPDATED.topLevel });
urls.push({ loc: `${base}/about`, lastmod: CONTENT_UPDATED.topLevel });
urls.push({ loc: `${base}/reviews`, lastmod: CONTENT_UPDATED.topLevel });
urls.push({ loc: `${base}/contact`, lastmod: CONTENT_UPDATED.topLevel });

// 2. Supporting Content Guides & FAQs
guideSlugs.forEach((guidePath) => {
  urls.push({
    loc: `${base}${guidePath}`,
    lastmod: CONTENT_UPDATED.guides,
  });
});

// 3. Canonical Core Service Pages
coreServices.forEach((servicePath) => {
  urls.push({
    loc: `${base}${servicePath}`,
    lastmod: CONTENT_UPDATED.coreServices,
  });
});

// 4. Canonical Service Area Location Pages (/mold-removal-{city}-oh)
locations.forEach((loc) => {
  urls.push({
    loc: `${base}/mold-removal-${loc}`,
    lastmod: CONTENT_UPDATED.locations,
  });
});

// 5. Active Non-Oakwood Service-Location Pages (7 residential x 9 cities + 2 commercial = 65 pages)
comboServices.forEach((service) => {
  locations
    .filter((loc) => loc !== 'oakwood-oh')
    .forEach((loc) => {
      urls.push({
        loc: `${base}/${service}-${loc}`,
        lastmod: CONTENT_UPDATED.combos,
      });
    });
});

commercialComboLocations.forEach((loc) => {
  urls.push({
    loc: `${base}/commercial-mold-inspection-${loc}`,
    lastmod: CONTENT_UPDATED.combos,
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${urls.length} pages at ${outputPath}`);
