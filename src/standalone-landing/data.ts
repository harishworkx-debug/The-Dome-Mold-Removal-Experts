export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  checklist: string[];
  icon: string;
  badge: string;
}

export interface NearbyCity {
  name: string;
  county: string;
  zip: string;
  notes: string;
}

export interface PillarItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const LANDING_IDENTITY = {
  niche: 'Mold Removal',
  location: 'Oakwood, OH',
  fullTitle: 'Mold Removal in Oakwood',
  city: 'Oakwood',
  state: 'OH',
  stateFullName: 'Ohio',
  county: 'Montgomery County',
  primaryZip: '45419',
  phoneDisplay: '(937) 967-3264',
  phoneHref: 'tel:+19379673264',
  rawPhone: '937-967-3264',
  hours: 'Monday – Saturday: 7:00 AM – 7:00 PM',
  emergencyAvailability: '24/7 Phone Dispatch for Active Moisture Emergencies',
  serviceType: 'Mobile Field Remediation & Moisture Inspection Dispatch',
  serviceAreaLabel: 'Oakwood, Montgomery County & Surrounding Miami Valley, OH',
};

export const LANDING_SERVICES: ServiceItem[] = [
  {
    id: 'mold-removal',
    title: 'Complete Mold Removal & Surface Sanitization',
    tagline: 'Physical extraction of active fungal growth',
    description:
      'Targeted physical extraction of visible mold colonies from drywall, baseboards, floor joists, and structural framing using HEPA-filtered vacuuming and EPA-registered antimicrobial wash treatments.',
    checklist: [
      'Controlled removal of unsalvageable porous drywall & trim',
      'Structural HEPA sanding and abrasive wire brushing',
      'EPA-registered antimicrobial sanitizing wash',
      'Antimicrobial encapsulant coating on exposed wood framing',
    ],
    icon: 'Sparkles',
    badge: 'Core Service',
  },
  {
    id: 'mold-remediation',
    title: 'Full Containment & Structural Remediation',
    tagline: 'Critical containment barrier & HEPA air scrubbing',
    description:
      'Strict adherence to IICRC S520 standards with floor-to-ceiling polyethylene containment chambers, zipper airlocks, and negative-pressure HEPA air scrubbers to prevent cross-contamination into clean living spaces.',
    checklist: [
      '6-mil polyethylene isolation chambers with zipper airlocks',
      'Continuous negative air pressure with industrial HEPA scrubbers',
      'HVAC supply and return register sealing during work',
      'Final clearance preparation and airborne particle removal',
    ],
    icon: 'ShieldCheck',
    badge: 'IICRC Aligned',
  },
  {
    id: 'mold-inspection',
    title: 'Visual Mold Inspection & Moisture Mapping',
    tagline: 'Comprehensive property-wide moisture diagnostic',
    description:
      'Systematic on-site visual assessment evaluating suspect discoloration, musty odors, plumbing supply leaks, foundation grading defects, and hidden moisture migration behind walls and beneath floor assemblies.',
    checklist: [
      'Non-invasive digital moisture meter surface probing',
      'Infrared thermal leak imaging for cold moisture pockets',
      'Exterior perimeter grading and roof drainage evaluation',
      'Itemized written findings and actionable scope of work',
    ],
    icon: 'Search',
    badge: 'Diagnostics',
  },
  {
    id: 'mold-testing',
    title: 'Indoor Air Quality & Spore Testing',
    tagline: 'Objective third-party accredited lab sampling',
    description:
      'Quantitative indoor-versus-outdoor baseline air cassette sampling and surface tape lifts submitted to third-party accredited environmental laboratories for detailed spore identification and concentration reports.',
    checklist: [
      'Calibrated baseline indoor vs. outdoor spore-trap air sampling',
      'Sterile swab and tape-lift surface contact sampling',
      'Chain-of-custody processing with accredited microbiology labs',
      'Objective lab analysis for real estate transactions or clearance',
    ],
    icon: 'FlaskConical',
    badge: 'Lab Certified',
  },
  {
    id: 'basement-mold',
    title: 'Basement & Crawl Space Moisture Control',
    tagline: 'Engineered solutions for below-grade foundations',
    description:
      'Engineered remediation for older stone foundations, concrete masonry block walls, and unvented crawl spaces experiencing exterior rainwater seepage, efflorescence mineral leaching, and seasonal humidity buildup.',
    checklist: [
      'Masonry efflorescence and foundation seepage diagnosis',
      'Subfloor framing decontamination & joist HEPA cleaning',
      'Heavy-duty crawl space vapor barrier barrier installation',
      'Commercial-grade dehumidification & humidity stabilization',
    ],
    icon: 'ArrowDownToLine',
    badge: 'Basement Specialist',
  },
  {
    id: 'attic-mold',
    title: 'Attic Condensation & Decking Remediation',
    tagline: 'Overhead roof sheathing and ventilation correction',
    description:
      'Specialized dry-ice or HEPA treatment for darkened roof decking, sheathing mold, winter frost condensation, and improperly terminated bathroom exhaust ductwork dumping shower moisture into attic spaces.',
    checklist: [
      'Roof sheathing & rafter surface mold extraction',
      'Bathroom and kitchen exhaust fan duct termination audit',
      'Soffit intake baffle & ridge vent airflow verification',
      'Protective vapor-resistant wood sealing treatment',
    ],
    icon: 'Home',
    badge: 'Attic Solutions',
  },
];

export const NEARBY_CITIES: NearbyCity[] = [
  {
    name: 'Oakwood',
    county: 'Montgomery County',
    zip: '45419',
    notes: 'Primary dispatch hub; historic 1920s–1950s stone basements & brick residences',
  },
  {
    name: 'Dayton',
    county: 'Montgomery County',
    zip: '45402, 45403, 45405, 45424',
    notes: 'Urban residences, historic districts, and commercial facility mold assessments',
  },
  {
    name: 'Kettering',
    county: 'Montgomery County',
    zip: '45429, 45440',
    notes: 'Mid-century residential basements, addition crawl spaces, and attic ventilation',
  },
  {
    name: 'Centerville',
    county: 'Montgomery County',
    zip: '45458, 45459',
    notes: 'Suburban multi-level homes, finished basement moisture, and bathroom exhaust audits',
  },
  {
    name: 'Beavercreek',
    county: 'Greene County',
    zip: '45431, 45434',
    notes: 'Greene County residential developments, crawl space encapsulation, and leak repairs',
  },
  {
    name: 'Miamisburg',
    county: 'Montgomery County',
    zip: '45342',
    notes: 'River-corridor moisture levels, older foundation seepage, and musty basement odors',
  },
  {
    name: 'Washington Township',
    county: 'Montgomery County',
    zip: '45458',
    notes: 'Executive homes, finished basements, sump pump backups, and attic condensation',
  },
  {
    name: 'Moraine',
    county: 'Montgomery County',
    zip: '45439',
    notes: 'Residential and light commercial industrial facility moisture assessments',
  },
  {
    name: 'Riverside',
    county: 'Montgomery County',
    zip: '45431',
    notes: 'Post-war family homes, crawl space moisture barrier upgrades, and leak cleanup',
  },
  {
    name: 'Fairborn',
    county: 'Greene County',
    zip: '45324',
    notes: 'Military and university corridor residences, rental turnover inspections, and drying',
  },
];

export const WHY_CHOOSE_US: PillarItem[] = [
  {
    title: 'IICRC S520 Certified Protocols',
    subtitle: 'Standard-Compliant Safety',
    description:
      'Every remediation project strictly adheres to IICRC S520 procedural standards and EPA safety guidelines. Technicians isolate contaminated zones using negative air pressure and HEPA filtration to safeguard your family’s indoor air.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Local Architecture Expertise',
    subtitle: 'Specialized for Oakwood Homes',
    description:
      'We understand the specific building envelopes of Oakwood and Montgomery County—from 1920s Tudor stone foundations and clay-heavy glacial till soils to humid Ohio summer stack-effect moisture issues.',
    icon: 'MapPin',
  },
  {
    title: '100% Upfront, Written Scope',
    subtitle: 'No Surprises, No Upselling',
    description:
      'Before any containment barrier is erected or material is removed, you receive a detailed, written breakdown of affected areas, diagnostic findings, and transparent project pricing.',
    icon: 'FileText',
  },
  {
    title: 'Root-Cause Moisture Diagnostics',
    subtitle: 'Identifying Water Sources',
    description:
      'Surface cleaning without addressing water intrusion leaves underlying conditions unresolved. Specialists inspect plumbing lines, roof flashing, foundation perimeter grading, and crawl space humidity to identify and address the moisture sources supporting fungal growth.',
    icon: 'Droplets',
  },
];

export const LANDING_FAQS: FaqItem[] = [
  {
    question: 'How quickly can specialists respond to mold emergencies in Oakwood, OH?',
    answer:
      'Technicians provide rapid phone dispatch across Oakwood and Montgomery County. For urgent flooding, active pipe bursts, or severe indoor mold outbreaks, same-day evaluation appointments can typically be arranged by calling (937) 967-3264 directly.',
  },
  {
    question: 'What is the key difference between simple mold removal and full mold remediation?',
    answer:
      'Mold removal refers to physically scrubbing or disposing of visibly contaminated materials. Full mold remediation is a comprehensive engineering standard (IICRC S520) that establishes negative-air containment barriers, HEPA air scrubbers to capture microscopic spores, antimicrobial surface treatment, and moisture-source identification to help prevent cross-contamination and address the moisture conditions supporting mold.',
  },
  {
    question: 'Why do Oakwood homes and basements experience frequent moisture problems?',
    answer:
      'Oakwood features beautiful historic homes built between the 1920s and 1950s with stone masonry, brick foundations, and shaded lots. The region’s dense glacial till clay soil retains moisture after storms, creating hydrostatic pressure against foundation walls. Combined with humid Miami Valley summers, cool below-grade basements naturally attract condensation.',
  },
  {
    question: 'Is laboratory air sampling or mold testing necessary before starting work?',
    answer:
      'If visible mold and an obvious moisture source (such as a plumbing leak or roof leak) are present, immediate remediation is often the priority without delaying for tests. However, if unexplainable musty odors exist, hidden mold is suspected behind drywall, or formal documentation is needed for a real estate closing, third-party accredited lab sampling is available.',
  },
  {
    question: 'How do I arrange an on-site mold assessment or request an estimate?',
    answer:
      'Simply call our local dispatch number at (937) 967-3264 or fill out the service request form on this page. You will speak directly with an experienced specialist who will review your property type, discuss what you are observing, and coordinate an on-site evaluation.',
  },
];

export const TRUST_STATS = [
  { value: 'IICRC S520', label: 'Standards Compliant' },
  { value: '100%', label: 'Upfront Written Quotes' },
  { value: 'Same-Day', label: 'Emergency Phone Dispatch' },
  { value: '10+', label: 'Montgomery County Areas' },
];

export const VERIFIED_IMAGES = {
  hero: 'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  heroAlt: 'Professional technician in protective safety gear inspecting an interior wall during mold remediation in Oakwood, Ohio',
  inspector: 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  inspectorAlt: 'Property specialist evaluating building envelope conditions in Oakwood, OH',
  containment: 'https://images.pexels.com/photos/4098000/pexels-photo-4098000.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  containmentAlt: 'Negative air pressure containment chamber and structural drying equipment',
  basement: 'https://images.pexels.com/photos/32497163/pexels-photo-32497163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  basementAlt: 'Below-grade foundation wall inspection and moisture detection in an older home basement',
  attic: 'https://images.pexels.com/photos/8082327/pexels-photo-8082327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  atticAlt: 'Attic roof sheathing and ventilation inspection for condensation and fungal staining',
};
