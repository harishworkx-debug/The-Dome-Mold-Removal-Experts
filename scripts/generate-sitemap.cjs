const fs = require('fs');
const path = require('path');

const services = [
  'mold-inspection',
  'mold-assessment',
  'mold-removal',
  'mold-remediation',
  'moisture-inspection',
  'water-intrusion-inspection',
  'basement-mold-inspection',
  'attic-mold-inspection',
  'indoor-air-quality-inspection',
  'property-mold-inspection',
];

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

const base = 'https://www.moldremoval-oakwood.com';
const today = new Date().toISOString().split('T')[0];

const urls = [];

// 1. Core Pages
urls.push({ loc: `${base}/`, changefreq: 'daily', priority: '1.0' });
urls.push({ loc: `${base}/services`, changefreq: 'weekly', priority: '0.9' });
urls.push({ loc: `${base}/service-areas`, changefreq: 'weekly', priority: '0.9' });
urls.push({ loc: `${base}/about`, changefreq: 'monthly', priority: '0.8' });
urls.push({ loc: `${base}/reviews`, changefreq: 'weekly', priority: '0.8' });
urls.push({ loc: `${base}/contact`, changefreq: 'monthly', priority: '0.8' });

// 2. Service Area Detail Pages (Service Name + Location Name without /service-areas/)
locations.forEach((loc) => {
  urls.push({
    loc: `${base}/mold-inspection-and-removal-${loc}`,
    changefreq: 'weekly',
    priority: '0.85',
  });
});

// 3. Service-Location Combo Pages (All 10 services x 10 locations = 100 pages without /services/)
services.forEach((service) => {
  locations.forEach((loc) => {
    urls.push({
      loc: `${base}/${service}-${loc}`,
      changefreq: loc === 'oakwood-oh' ? 'weekly' : 'monthly',
      priority: loc === 'oakwood-oh' ? '0.9' : '0.75',
    });
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${urls.length} pages at ${outputPath}`);

const distPath = path.resolve(__dirname, '../dist/sitemap.xml');
if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  fs.writeFileSync(distPath, xml, 'utf8');
  console.log(`Also copied sitemap.xml to ${distPath}`);
}

