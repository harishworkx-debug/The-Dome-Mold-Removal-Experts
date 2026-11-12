export type GuideSource = {
  label: string;
  publisher: string;
  url: string;
};

export type MoldGuide = {
  slug: string;
  category: 'article' | 'guide';
  featured?: boolean;
  publishedAt: string;
  updatedAt: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  readingTime: string;
  primaryService: {
    label: string;
    to: string;
  };
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedLinks: { label: string; to: string }[];
  sources: GuideSource[];
  faqs: { q: string; a: string }[];
};

const EPA_MOLD_SOURCE: GuideSource = {
  label: 'Mold, Moisture, and Your Home (EPA Mold Guidance)',
  publisher: 'U.S. Environmental Protection Agency',
  url: 'https://www.epa.gov/mold',
};

const CDC_MOLD_SOURCE: GuideSource = {
  label: 'Basic Facts About Mold and Health',
  publisher: 'Centers for Disease Control and Prevention (CDC)',
  url: 'https://www.cdc.gov/mold-health/',
};

export const guides: MoldGuide[] = [
  {
    slug: 'causes-of-mold-growth-ohio-basements',
    category: 'article',
    featured: true,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'What Causes Mold Growth in Ohio Basements?',
    seoTitle: 'What Causes Mold Growth in Ohio Basements? | The Dome',
    metaDescription:
      'Discover the main causes of basement mold and moisture problems in Ohio—from summer dew-point condensation and clay-soil seepage to finished drywall traps—and when to schedule a basement mold inspection.',
    eyebrow: 'Basement Mold & Moisture Article',
    summary:
      'Understanding why below-grade basements across Oakwood and Ohio develop musty odors, damp masonry, and mold growth helps homeowners stop recurring moisture instead of merely wiping surface stains.',
    readingTime: '6 min read',
    primaryService: {
      label: 'Basement Mold Inspection in the Miami Valley',
      to: '/basement-mold-inspection',
    },
    sections: [
      {
        heading: 'Why Ohio Basements Trap Moisture Year-Round',
        paragraphs: [
          'Mold spores are naturally present in outdoor and indoor air in every home. According to U.S. EPA guidance, mold cannot grow indoors unless spores land on damp or wet building materials for a sustained window—often 24 to 48 hours or longer.',
          'Ohio basements face two competing moisture pressures throughout the year: humid summer air meeting cool below-grade masonry walls, and spring or autumn rainfall saturating heavy regional clay soils directly outside foundation footings.',
        ],
      },
      {
        heading: 'Summer Condensation & Dew-Point Sweating',
        paragraphs: [
          'Below-grade concrete and stone foundation walls naturally stay much cooler than summer air temperatures—typically in the upper 50s to low 60s Fahrenheit. When warm, humid Ohio air enters through open basement windows, loose rim joists, or frequent walkout doors, airborne water vapor reaches its dew point directly against cool concrete.',
          'Even without a single rain leak, this micro-condensation dampens dust layers, wood sill plates, and paper-backed storage boxes stacked against exterior walls.',
        ],
        bullets: [
          'Keep basement windows closed during muggy June–September weather rather than trying to air out dampness with outdoor humidity.',
          'Run a properly drained dehumidifier paired with a calibrated hygrometer to hold relative humidity under 50% (EPA recommends keeping indoor humidity between 30% and 50%).',
          'Air-seal gaps around sill plates and rim-joist utility penetrations so humid outdoor air cannot bypass into joist bays.',
        ],
      },
      {
        heading: 'Clay-Soil Hydrostatic Pressure & Exterior Runoff',
        paragraphs: [
          'Much of the Miami Valley sits over dense glacial clay that drains slowly after heavy downpours. When downspouts discharge close to the house, clogged leaf guards overflow, or backyard soil pitches toward the foundation, water pools alongside exterior walls and pushes inward through cold joints, porous block, and cove seams.',
        ],
        bullets: [
          'Extend gutters and solid downspout lines well past the backfill zone.',
          'Maintain positive perimeter soil slope away from brickwork and window wells.',
          'Inspect sump pump pit lids, float switches, and discharge piping before spring storm seasons.',
        ],
      },
      {
        heading: 'Hidden Mold Behind Finished Basement Walls',
        paragraphs: [
          'Older renovations commonly placed wood stud framing and fiberglass batt insulation directly against uninsulated poured concrete or cinder block without a continuous vapor retarder or capillary break. Whenever minor groundwater wicks through the masonry behind closed drywall, dampness stays concealed inside the cavity while musty odors migrate into finished rooms.',
          'Carpet laid directly over bare concrete slabs without an insulated subfloor panel also traps slab moisture under organic carpet padding.',
        ],
      },
      {
        heading: 'Next Steps: Separate Moisture Diagnosis From Cleanup',
        paragraphs: [
          'If basement walls show fuzzy staining, peeling paint near the floor, or persistent mustiness, wiping exposed drywall rarely reaches damp backing paper or hidden sill plates. Calling our Oakwood referral line or visiting our Contact page connects you with independent local specialists who evaluate moisture entry paths and outline safe basement mold inspection or remediation steps.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Basement Mold Inspection Services', to: '/basement-mold-inspection' },
      { label: 'Moisture Inspection Services', to: '/moisture-inspection' },
      { label: 'Oakwood, OH Mold Removal', to: '/mold-removal-oakwood-oh' },
      { label: 'Foundation Seepage & Efflorescence Guide', to: '/basement-moisture-guide' },
      { label: 'Contact & Referral Information', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'Why does basement mold return in Ohio even after scrubbing visible spots?',
        a: 'Surface wiping removes loose spores temporarily, but if high basement relative humidity, exterior gutter overflow, or concealed masonry seepage continues dampening drywall or wood framing, remaining spores re-establish quickly.',
      },
      {
        q: 'Is white chalky powder on Ohio basement block walls always mold?',
        a: 'Often white crystalline powder on unpainted masonry is efflorescence—mineral salts left behind when groundwater migrates through block and evaporates. It signals moisture travel through the wall even when no mold is present on the powder itself.',
      },
      {
        q: 'Can basement mold cause respiratory discomfort even if hidden behind walls?',
        a: 'CDC guidance notes that damp indoor environments and mold exposure can irritate sensitive airways or worsen asthma symptoms in some individuals. Always consult a healthcare professional for personal health questions, and address hidden moisture causes promptly.',
      },
    ],
  },
  {
    slug: 'signs-your-attic-has-mold-or-moisture-problem',
    category: 'article',
    featured: true,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'Signs Your Attic May Have a Mold or Moisture Problem',
    seoTitle: 'Signs Your Attic May Have a Mold or Moisture Problem | The Dome',
    metaDescription:
      'Spot early signs of attic mold and moisture problems in Ohio homes: dark roof-sheathing staining, winter frost, rusted roofing nails, detached bathroom exhaust ducts, and blocked soffit vents.',
    eyebrow: 'Attic Mold & Ventilation Article',
    summary:
      'Because few homeowners climb into the attic outside seasonal storage trips, winter condensation, misrouted bath fans, and slow roof leaks frequently stain roof decking long before ceiling spots show downstairs.',
    readingTime: '6 min read',
    primaryService: {
      label: 'Attic Mold Inspection in the Miami Valley',
      to: '/attic-mold-inspection',
    },
    sections: [
      {
        heading: 'Why Attic Mold Often Develops Unnoticed',
        paragraphs: [
          'Attics respond rapidly to temperature swings between conditioned living spaces below and outdoor Ohio weather above. Warm, moisture-laden indoor air naturally rises through recessed light fixtures, attic hatch gaps, plumbing chases, and disconnected exhaust ducts.',
          'During cold winter mornings, that escaping vapor hits sub-freezing roof sheathing—particularly on shaded north- and west-facing roof slopes—condensing into frost that thaws in sunshine and saturates wood grain repeatedly.',
        ],
      },
      {
        heading: 'Visual Warning Signs on Roof Sheathing & Rafters',
        paragraphs: [
          'A bright flashlight check from the attic access hatch or walkway often reveals moisture stress months or years before drywall stains appear in bedrooms below:',
        ],
        bullets: [
          'Dark gray, black, or bleached-looking fungal blotches scattered evenly across plywood or OSB roof decking rather than right around a single leak.',
          'Rusty protruding roofing nail tips ("frosting" nails that oxidize from repeated winter condensation drip).',
          'Matted, compressed, or water-stained attic insulation sitting underneath discolored roof rafters.',
          'Localized dark water rings encircling brick chimneys, plumbing vent boots, bath-fan housings, or roof valley rafters.',
        ],
      },
      {
        heading: 'Common Attic Moisture Culprits in Local Homes',
        paragraphs: [
          'Across mid-century and newer homes alike in Oakwood, Kettering, and surrounding neighborhoods, three preventable airflow issues account for a large share of attic mold calls:',
        ],
        bullets: [
          'Bathroom & Laundry Exhaust Terminating in the Attic: Flexible foil hoses vented onto insulation or soffit screens pump hot shower steam directly under the roof deck instead of through an insulated exterior roof cap.',
          'Blocked Soffit Intake Baffles: When blown-in cellulose or fiberglass insulation gets pushed tightly into the eaves without foam or rigid baffles, warm moist attic air cannot cycle out smoothly through the ridge or box vents.',
          'Unsealed Ceiling Penetrations & Attic Pull-Down Stairs: Recessed cans, wire chases, and unweatherstripped attic pull-down frames act like vertical chimneys feeding interior moisture upward.',
        ],
      },
      {
        heading: 'Why DIY Bleach Spraying Rarely Solves Attic Sheathing Mold',
        paragraphs: [
          'Homeowners sometimes climb into unfinished attics and mist household chlorine bleach onto darkened roof boards. Beyond safety hazards in tight, poorly ventilated workspaces, EPA guidance advises against routine biocides for porous wood framing because moisture from spraying does not correct bath-fan ducting or blocked eaves, and porous decking absorbs discoloration deeply.',
          'Independent contractors typically combine correcting exhaust routing and air sealing with controlled HEPA vacuuming and dry-ice, media, or EPA-registered physical cleaning methods tailored to wood decking.',
        ],
      },
      {
        heading: 'When to Arrange an Attic & Moisture Inspection',
        paragraphs: [
          'If you spot dark staining on roof boards, rusted nails, or musty odors upstairs during winter thaws or warm spring afternoons—especially before buying or selling a home—review our Attic Mold Inspection overview or reach our team on the Contact page to connect with independent local professionals.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Attic Mold Inspection Services', to: '/attic-mold-inspection' },
      { label: 'Moisture Inspection Services', to: '/moisture-inspection' },
      { label: 'Mold Remediation Services', to: '/mold-remediation' },
      { label: 'Homeowner Mold Prevention Guide', to: '/mold-prevention-guide' },
      { label: 'Contact & Referral Information', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'How do I tell a roof leak apart from attic condensation mold?',
        a: 'Roof leaks usually leave concentrated watermark rings and sodden decking beneath a specific chimney flashing, vent pipe, or valley. Condensation mold tends to appear broadly across cooler north/west roof slopes, nail shanks, and sheathing bays near bath fans.',
      },
      {
        q: 'Can attic mold affect air quality inside bedrooms below?',
        a: 'Although air normally moves upward from living spaces into the attic, depressurization from leaky return ducts, whole-house fans, or wind changes can pull attic air and musty odors back through recessed fixtures and hatch gaps.',
      },
      {
        q: 'Do inspectors check bathroom fan duct routing during an attic mold inspection?',
        a: 'Yes, accessible bath and laundry exhaust termination, soffit airflow obstruction, insulation dampness, and visible decking staining are key checkpoints during an attic moisture walkthrough.',
      },
    ],
  },
  {
    slug: 'what-happens-during-professional-mold-inspection',
    category: 'article',
    featured: true,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'What Happens During a Professional Mold Inspection?',
    seoTitle: 'What Happens During a Professional Mold Inspection? | The Dome',
    metaDescription:
      'Learn step by step what happens during a professional mold inspection and mold assessment—from intake questions and moisture meter checks to findings, limitations, and next steps.',
    eyebrow: 'Mold Inspection Process Article',
    summary:
      'Knowing what an independent mold inspection covers—and what visual walkthroughs can and cannot tell you—helps homeowners prepare rooms, ask sharper questions, and avoid unnecessary upsells.',
    readingTime: '6 min read',
    primaryService: {
      label: 'Core Mold Inspection Services',
      to: '/mold-inspection',
    },
    sections: [
      {
        heading: 'Step 1: Property History & Homeowner Intake',
        paragraphs: [
          'A thorough mold inspection begins with conversation before any tool leaves the bag. Expect an independent specialist to ask about past plumbing repairs, basement water entry during spring storms, roof age, lingering musty odors in specific rooms, and whether concerns follow recent home buying or remodeling.',
          'Sharing exact dates of spills, sump backups, or condensation along windows narrows down where hidden dampness is most likely to sit.',
        ],
      },
      {
        heading: 'Step 2: Interior & Exterior Visual Walkthrough',
        paragraphs: [
          'The inspector evaluates accessible living areas, utility closets, basements, crawl spaces, and attic access hatches while cross-checking exterior drainage cues outside the home:',
        ],
        bullets: [
          'Basement walls, sill plates, floor joists, sump crocks, and finished lower-level baseboards.',
          'Under-sink vanity cabinets, shower surrounds, laundry hookups, and around HVAC condensate drains.',
          'Attic roof decking, flashing lines, soffit baffles, and exhaust vent ducts.',
          'Exterior downspout discharge points, foundation grading slope, window wells, and siding penetrations.',
        ],
      },
      {
        heading: 'Step 3: Moisture Mapping & Diagnostic Instruments',
        paragraphs: [
          'Visual stains tell only half the story because old water marks from a fixed leak can look nearly identical to fresh active dampness. Independent inspectors commonly rely on non-destructive diagnostic readings to separate dormant history from active moisture:',
        ],
        bullets: [
          'Digital hygrometers to compare relative humidity and dew point between upstairs, basement, and outdoors.',
          'Pinless and pin-type moisture meters to test moisture content inside drywall, baseboards, and exposed framing.',
          'Thermal imaging cameras (where verified and appropriate) to spot temperature anomalies suggestive of evaporative cooling behind intact surfaces.',
        ],
      },
      {
        heading: 'What Visual Inspections Cannot Do on Their Own',
        paragraphs: [
          'Setting clear expectations protects homeowners from unrealistic promises. Non-invasive inspections inspect accessible areas; an inspector does not demolish finished drywall or lift hardwood floors without owner authorization.',
          'Additionally, no visual glance can determine exact mold genus or toxicity, and building inspectors do not provide medical opinions. When lab confirmation or concealed cavity evaluation makes sense, the inspector explains optional separate sampling or targeted access steps transparently.',
        ],
      },
      {
        heading: 'Step 4: Practical Findings & Next Steps',
        paragraphs: [
          'Following the walkthrough, homeowners should understand where suspect growth or elevated moisture exists, what plumbing, drainage, or ventilation issue appears to feed it, and whether straightforward homeowner maintenance suffices or independent containment and remediation contractor bids are warranted.',
          'Need to arrange an independent inspection in Oakwood or anywhere in the Miami Valley? Explore our Mold Inspection page or visit Contact to speak directly by phone.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Core Mold Inspection Services', to: '/mold-inspection' },
      { label: 'Core Moisture Inspection Services', to: '/moisture-inspection' },
      { label: 'Mold Testing Services', to: '/mold-testing' },
      { label: 'Oakwood, OH Mold Removal', to: '/mold-removal-oakwood-oh' },
      { label: 'Contact & Phone Scheduling', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'How should I prepare my house before a mold inspection?',
        a: 'Avoid painting over stains, running heavy scented candles or sprays before arrival, or clearing away clues around leaky fixtures. Clear safe walking access to basement walls, utility closets, sump pits, and attic hatches.',
      },
      {
        q: 'Do inspectors automatically force you into an expensive remediation contract?',
        a: 'The Dome connects callers with independent local specialists so you can evaluate moisture triggers and inspection scope first—and compare contractor remediation estimates separately when physical removal is actually needed.',
      },
      {
        q: 'How long does an inspection normally take?',
        a: 'Most single-family home visual inspections take roughly 60 to 90 minutes depending on square footage, basement finishing, crawl spaces, and attic access.',
      },
    ],
  },
  {
    slug: 'recognize-mold-after-water-damage',
    category: 'article',
    featured: true,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'How to Recognize Mold Problems After Water Damage',
    seoTitle: 'How to Recognize Mold Problems After Water Damage | The Dome',
    metaDescription:
      'Learn how to spot mold after water damage in drywall, baseboards, flooring, and ceilings—and when a water intrusion inspection prevents hidden structural mold growth.',
    eyebrow: 'Post-Leak & Water Intrusion Article',
    summary:
      'After a pipe leak, roof drip, or basement backup appears dry on top, trapped moisture behind baseboards, drywall paper, and subflooring can support hidden mold within 24 to 48 hours.',
    readingTime: '5 min read',
    primaryService: {
      label: 'Moisture & Water Intrusion Inspection',
      to: '/moisture-inspection',
    },
    sections: [
      {
        heading: 'Why Surface Drying Frequently Misses Hidden Mold',
        paragraphs: [
          'After mopping up a burst supply line or overflowing appliance, tile or hardwood surfaces often feel dry within hours. Yet water runs along floor joists, wicks up the porous paper backing of drywall, and settles underneath vapor barriers and carpet padding where room fans cannot reach.',
          'Both EPA and CDC guidance emphasize drying wet materials thoroughly within 24 to 48 hours whenever possible to discourage mold colonization.',
        ],
      },
      {
        heading: 'Early Material Clues After Plumbing Leaks or Storms',
        paragraphs: [
          'Even before obvious black or green fuzzy colonies surface, damaged building finishes give away trapped moisture:',
        ],
        bullets: [
          'Swollen, softening, or gapping MDF baseboards along hallways, bathrooms, or exterior basement walls.',
          'Bubbling, blistering, or peeling interior latex paint where vapor tries to escape damp plaster or drywall.',
          'Cupping, crowning, or dark edge discoloration along hardwood boards and laminate flooring seams.',
          'Persistent sweet, earthy, or musty odors around vanities, kitchen toe-kicks, or basement utility rooms—especially when heating or AC kicks on.',
          'Discolored water rings on ceilings beneath second-floor showers, tubs, toilets, or chimney flashing.',
        ],
      },
      {
        heading: 'What to Avoid Disturbing After Water Intrusion',
        paragraphs: [
          'If you discover water-damaged drywall showing visible fuzzy growth behind a vanity or carpet tack strip, resist ripping open wide sections of uncontained wallboard or aiming high-speed box fans directly across moldy surfaces.',
          'Agitating dry or semi-dry mold colonies without plastic containment and HEPA filtration scatters dormant spores and dust fragments into hallways, HVAC returns, and clean living areas.',
        ],
      },
      {
        heading: 'Connecting With Moisture Verification & Remediation Pros',
        paragraphs: [
          'When previous water events leave uncertainty about how far dampness migrated behind finished walls or under basement flooring, a water intrusion inspection maps exact wet boundaries using moisture meters so repair crews replace only compromised materials.',
          'Compare symptoms with our Water Damage Timeline Guide, explore Mold Remediation services, or visit our Contact page to speak with an independent specialist serving Oakwood and Greater Dayton.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Moisture Inspection Services', to: '/moisture-inspection' },
      { label: 'Mold Remediation Services', to: '/mold-remediation' },
      { label: 'Mold Removal Services', to: '/mold-removal' },
      { label: '24–48 Hour Water Damage Timeline Guide', to: '/water-damage-and-mold-guide' },
      { label: 'Contact & Referral Information', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'If drywall gets wet from a clean supply line, does it always grow mold?',
        a: 'Not always—if the leak stops immediately and the wall assembly dries completely within roughly 24 to 48 hours using air movement and dehumidification, mold may not establish. Delayed drying or dirty storm/sewage water sharply raises risk.',
      },
      {
        q: 'Should I run central heat or AC to help dry a water-damaged basement?',
        a: 'If visible mold is already present near returns or damp demolition is underway, circulating HVAC air across affected rooms can distribute spores through ductwork. Standalone dehumidifiers and isolated ventilation are safer during active containment.',
      },
      {
        q: 'Who inspects moisture after a water event vs. who repairs drywall?',
        a: 'Independent moisture/mold inspectors pinpoint remaining damp cavities and suspect growth boundaries first; remediation and restoration contractors perform containment, safe removal, and rebuild steps.',
      },
    ],
  },
  {
    slug: 'mold-testing-vs-mold-inspection-difference',
    category: 'article',
    featured: true,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: "Mold Testing vs. Mold Inspection: What's the Difference?",
    seoTitle: "Mold Testing vs. Mold Inspection: What's the Difference? | The Dome",
    metaDescription:
      'Compare mold testing vs mold inspection cleanly: when a visual moisture inspection gives clear answers on its own, when air or surface sampling adds value, and key EPA/CDC testing limitations.',
    eyebrow: 'Diagnostic Comparison Article',
    summary:
      'Homeowners frequently use “mold inspection” and “mold testing” interchangeably, yet they answer different questions. Choosing the right step first avoids paying for unnecessary lab swabs when visible moisture clues are already obvious.',
    readingTime: '6 min read',
    primaryService: {
      label: 'Core Mold Testing & Inspection Options',
      to: '/mold-testing',
    },
    sections: [
      {
        heading: 'Visual Mold Inspection: Finding Moisture & Affected Materials',
        paragraphs: [
          'A visual mold inspection examines the building as a whole system. Rather than guessing from one air pump reading alone, the inspector checks accessible basements, attics, plumbing cavities, window frames, and HVAC surroundings alongside moisture meters and humidity logs.',
          'The core deliverable of an inspection is identifying where visible mold growth exists, why moisture entered or condensed there, and how extensive the affected area appears.',
        ],
      },
      {
        heading: 'Laboratory Mold Testing: Gathering Samples for Lab Counts',
        paragraphs: [
          'Mold testing focuses on sampling—drawing indoor air through spore-trap cassettes alongside an outdoor control sample on the same day, or collecting surface tape lifts or sterile swabs on suspect discoloration.',
          'Those sealed samples are shipped to an independent accredited microbiology laboratory, which counts visible spore structures under microscopy and groups broad mold categories.',
        ],
      },
      {
        heading: 'When Testing Makes Sense vs. When Inspection Alone Suffices',
        paragraphs: [
          'Per EPA mold guidance, when visible mold and its moisture source are unmistakably clear on basement drywall or attic sheathing, extensive testing is not always necessary before removing affected materials and fixing the leak—because safe physical removal practices remain similar regardless of exact species name.',
          'Still, independent testing can add targeted documentation in several real-world situations:',
        ],
        bullets: [
          'Persistent musty indoor odors with no visible mold during initial walkthroughs.',
          'Pre-purchase home inspections or lease/property management disputes needing third-party lab documentation.',
          'Post-remediation clearance checks verifying indoor spore counts align closely with outdoor baseline air before containment plastic comes down.',
        ],
      },
      {
        heading: 'Important Limitations of Mold Air & DIY Kits',
        paragraphs: [
          'Because outdoor mold counts swing sharply from wind, rain, mowed grass, and autumn leaves in Ohio, one-off DIY settle plates placed on a coffee table almost always grow stray background spores—providing little actionable diagnostic value.',
          'Moreover, federal health and environmental agencies (CDC and EPA) emphasize there are no universal regulatory "safe numerical exposure limits" for indoor airborne mold counts, and test reports cannot diagnose individual medical sensitivities.',
        ],
      },
      {
        heading: 'Which One Should You Book First?',
        paragraphs: [
          'Starting with an independent visual mold inspection almost always comes first—because without understanding moisture paths and context, raw lab numbers lack meaning. Visit our Mold Testing service overview, browse Mold Inspection options, or go to our Contact page to speak by phone.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Mold Testing Services', to: '/mold-testing' },
      { label: 'Mold Inspection Services', to: '/mold-inspection' },
      { label: 'Indoor Air Quality Inspection', to: '/indoor-air-quality' },
      { label: 'Mold Inspection & Testing FAQs', to: '/mold-inspection-faqs' },
      { label: 'Contact & Referral Information', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'Do DIY Petri-dish mold test kits accurately tell whether my home has a mold problem?',
        a: 'Usually no. Gravity settle plates catch harmless background outdoor spores drifting through open doors or clothing without measuring cubic meters of air or comparing an outdoor control sample.',
      },
      {
        q: 'Does lab mold testing prove whether mold is affecting my family’s health?',
        a: 'No. CDC guidance notes that health effects depend heavily on individual sensitivity and underlying conditions; laboratory spore reports characterize sample counts and categories, not medical diagnoses.',
      },
      {
        q: 'Should mold testing and mold remediation come from the same contractor?',
        a: 'For real estate transactions or post-remediation clearance verification, many homeowners prefer an independent inspector handling testing separately from the contractor performing demolition and cleanup.',
      },
    ],
  },
  {
    slug: 'prevent-recurring-moisture-problems-crawl-spaces',
    category: 'article',
    featured: true,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'How to Prevent Recurring Moisture Problems in Crawl Spaces',
    seoTitle: 'How to Prevent Recurring Moisture Problems in Crawl Spaces | The Dome',
    metaDescription:
      'Learn how to prevent crawl space moisture and mold in Ohio homes—sealed ground vapor barriers, why open summer foundation vents worsen dampness, rim-joist sealing, and dehumidification.',
    eyebrow: 'Crawl Space Prevention Article',
    summary:
      'Damp crawl spaces quietly drive musty downstairs odors, sagging subfloor insulation, and rotting floor joists across Ohio homes—and leaving traditional foundation vents propped open in summer often accelerates condensation rather than drying them.',
    readingTime: '6 min read',
    primaryService: {
      label: 'Moisture & Crawl Space Inspection',
      to: '/moisture-inspection',
    },
    sections: [
      {
        heading: 'Why Traditional Vented Crawl Spaces Trap Summer Humidity',
        paragraphs: [
          'For decades, building practice called for screened perimeter foundation vents to cross-ventilate crawl spaces beneath first-floor framing. In dry regions that worked adequately—but in humid Ohio summers, pulling 80°F–85°F outdoor air carrying heavy moisture across 60°F ductwork, copper pipes, and cool subfloor joists raises relative humidity inside the crawl space dramatically.',
          'As air cools under the floor, condensation forms on cold metal trunks, band boards, and wooden floor framing—creating ideal conditions for surface mold and wood-decay fungi.',
        ],
      },
      {
        heading: 'Five Practical Pillars of Crawl Space Moisture Control',
        paragraphs: [
          'Stopping recurring crawl space mold requires cutting off both ground evaporation and humid outdoor air exchange simultaneously:',
        ],
        bullets: [
          'Exterior Drainage First: Confirm gutters, buried drain tiles, and yard grading direct roof runoff away from crawl space perimeter walls before closing anything indoors.',
          'Continuous Ground Vapor Barrier: Cover exposed earth with heavy reinforced polyethylene sheeting overlapped at seams and sealed neatly up perimeter block walls and masonry piers.',
          'Air-Seal Rim Joists & Access Doors: Seal wire holes, plumbing cutouts, and loose exterior crawl doors so sticky outdoor air cannot stream inward.',
          'Remove Saturated Batt Insulation: Fiberglass batts hanging from floor joists absorb crawl space moisture and hold dampness directly against subflooring; sagging wet batts should be evaluated and safely removed.',
          'Controlled Drying or Conditioning: Pair a sealed crawl space with dedicated crawl-space dehumidification (or properly engineered HVAC conditioning per contractor evaluation) to keep wood moisture content low year-round.',
        ],
      },
      {
        heading: 'Signs Your Crawl Space Already Has Moisture Stress',
        paragraphs: [
          'Even if you rarely look past the access hatch, upstairs symptoms frequently point straight below:',
        ],
        bullets: [
          'Cupping oak or hardwood floor boards over unconditioned bays.',
          'Fiberglass floor insulation falling down from between joists onto the dirt floor.',
          'Sweating AC supply trunks or dripping water droplets on ductwork boots.',
          'Musty odors noticed inside lower-level closets or around return grilles.',
        ],
      },
      {
        heading: 'Inspecting Crawl Space Framing Safely',
        paragraphs: [
          'Low clearance, electrical wiring, fallen batts, and standing water make crawl spaces awkward to inspect casually. Connecting with an independent moisture or basement mold inspector gives you photographic documentation of joist moisture content, subfloor staining, and drainage issues before soliciting vapor-barrier or remediation bids.',
          'Review our Moisture Inspection and Mold Remediation service guides, or call us directly through our Contact page.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Moisture Inspection Services', to: '/moisture-inspection' },
      { label: 'Basement & Crawl Space Mold Inspection', to: '/basement-mold-inspection' },
      { label: 'Mold Remediation Services', to: '/mold-remediation' },
      { label: 'Foundation Seepage & Efflorescence Guide', to: '/basement-moisture-guide' },
      { label: 'Contact & Referral Information', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'Should I open or close my crawl space vents during humid Ohio summers?',
        a: 'Opening foundation vents during warm, humid summer days pulls humid outdoor air into a cooler subfloor zone and frequently increases condensation. Long-term control usually requires sealed ground vapor barriers, drainage correction, air sealing, and managed drying rather than seasonal vent toggling.',
      },
      {
        q: 'Can laying thin hardware-store plastic on top of dirt stop crawl space mold?',
        a: 'Loose, unsealed thin plastic rips quickly during service visits and still leaves perimeter gaps where soil moisture evaporates around piers and walls. Durable reinforced vapor barriers sealed at seams and masonry perform far better once bulk water intrusion is managed.',
      },
      {
        q: 'Will encapsulating or drying a crawl space fix active mold on joists by itself?',
        a: 'Stopping moisture prevents future growth, while existing mold colonies on joists or subflooring should be assessed for safe physical cleaning/HEPA vacuuming and removal of saturated insulation before sealing up.',
      },
    ],
  },
  {
    slug: 'mold-prevention-guide',
    category: 'guide',
    featured: false,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'Mold Prevention Guide for Oakwood & Miami Valley Homes',
    seoTitle: 'Mold Prevention Guide | Oakwood, OH Homeowners | The Dome',
    metaDescription:
      'Practical mold prevention tips for Oakwood, OH homes: indoor humidity targets, bathroom exhaust routing, gutter maintenance, and when to schedule a mold inspection.',
    eyebrow: 'Prevention Guide',
    summary:
      'Because indoor mold cannot establish without sustained moisture, practical prevention in Oakwood and Montgomery County homes centers on humidity control, exterior drainage, and proper exhaust ventilation.',
    readingTime: '5 min read',
    primaryService: {
      label: 'Core Mold Inspection Services',
      to: '/mold-inspection',
    },
    sections: [
      {
        heading: 'Why Humidity Control Matters Most in Oakwood Homes',
        paragraphs: [
          'Mold spores exist naturally in both outdoor and indoor air everywhere. What turns stray spores into active interior mold growth is moisture staying trapped on wood, drywall paper, dust, or framing for more than 24 to 48 hours.',
          'Mature tree canopy in Oakwood neighborhoods slows down sun-drying along shaded brick and siding, while humid Ohio summers push sticky outdoor air into cool basements where moisture readily condenses.',
        ],
        bullets: [
          'Keep indoor relative humidity between 30% and 50% year-round (and under 55% in lower levels).',
          'Use a dedicated digital hygrometer in finished basements and crawlspaces rather than guessing.',
          'Empty and maintain basement dehumidifiers—or route continuous condensate lines neatly to a floor drain.',
        ],
      },
      {
        heading: 'Exterior Drainage, Gutters & Roof Edges',
        paragraphs: [
          'Most recurring basement seepage begins outside the foundation wall. Leaf-clogged gutters and short downspouts dump roof runoff right against porous block or stone walls.',
        ],
        bullets: [
          'Clean leaf guards and gutters every spring and autumn beneath Oakwood’s shade trees.',
          'Extend downspouts at least 6 feet away from the foundation wall using solid extensions.',
          'Maintain positive soil slope away from the perimeter so storm runoff drains away instead of pooling.',
        ],
      },
      {
        heading: 'Bathroom, Laundry & Attic Ventilation Habits',
        paragraphs: [
          'Warm showers and vented clothes dryers release gallons of water vapor each week. Whenever an exhaust duct stops inside an attic or detaches in a joist bay, moisture condenses on cold roof sheathing during winter.',
        ],
        bullets: [
          'Verify bathroom exhaust fans vent all the way outdoors through the roof or gable—never into the attic.',
          'Run bath fans during showers and for at least 20 minutes afterward.',
          'Check soffit baffles during attic walkthroughs so insulation does not block intake airflow.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Core Mold Inspection Services', to: '/mold-inspection' },
      { label: 'Signs Your Attic May Have Mold or Moisture', to: '/signs-your-attic-has-mold-or-moisture-problem' },
      { label: 'What Causes Mold in Ohio Basements?', to: '/causes-of-mold-growth-ohio-basements' },
      { label: 'Oakwood, OH Mold Removal', to: '/mold-removal-oakwood-oh' },
      { label: 'Contact & Phone Referral Info', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'What indoor humidity percentage prevents household mold?',
        a: 'Keeping indoor relative humidity between 30% and 50% helps prevent condensation on cool basement walls and attic framing. Once indoor humidity rises above 60% for sustained periods, dust and paper-faced drywall can support mold.',
      },
      {
        q: 'Can painting over small spots with stain-blocker stop mold permanently?',
        a: 'No. Encapsulating paint alone does not resolve active mold growth or stop the moisture source behind the wall. If moisture remains trapped inside drywall or framing, mold continues growing underneath.',
      },
    ],
  },
  {
    slug: 'basement-moisture-guide',
    category: 'guide',
    featured: false,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'Foundation Seepage, Efflorescence & Basement Waterproofing Basics',
    seoTitle: 'Basement Seepage & Efflorescence Guide | Oakwood & Dayton, OH',
    metaDescription:
      'Understand foundation hydrostatic pressure, cove-joint seepage, efflorescence vs. active mold, and how to separate waterproofing fixes from basement mold inspection in Oakwood and Dayton.',
    eyebrow: 'Foundation & Seepage Guide',
    summary:
      'Below-grade foundations sit directly against clay-heavy Miami Valley soil. Knowing how to distinguish mineral efflorescence, hydrostatic wall seepage, and sump failures helps prioritize foundation drainage before refinishing.',
    readingTime: '6 min read',
    primaryService: {
      label: 'Basement Mold & Moisture Inspection',
      to: '/basement-mold-inspection',
    },
    sections: [
      {
        heading: 'Three Distinct Sources of Foundation Dampness',
        paragraphs: [
          'Before hiring a waterproofing crew or remediation contractor, identifying how water enters a lower level saves substantial money. Foundation dampness almost always falls into one of three categories:',
        ],
        bullets: [
          'Interior Humidity & Condensation: Warm summer air entering through open windows, loose bulkheads, or sill plates cools against 60°F foundation walls and sweats.',
          'Exterior Seepage & Hydrostatic Pressure: Clay soil holds rainwater against aging concrete block or masonry joints, pushing water through cove joints or hairline cracks.',
          'Internal Plumbing or Sump Failures: Slow pinhole leaks, weeping drain lines, condensation on uninsulated cold-water lines, or backup sump pump failures.',
        ],
      },
      {
        heading: 'Efflorescence vs. Visible Mold Growth',
        paragraphs: [
          'Homeowners frequently mistake white powdery streaks along unpainted basement masonry for white mold. In many cases, that chalky crystalline layer is efflorescence—mineral salts left behind after groundwater wicks through concrete and evaporates.',
          'While efflorescence itself is mineral salt rather than biological mold, it is a reliable warning indicator that exterior groundwater is passing through the foundation wall.',
        ],
      },
      {
        heading: 'Hidden Risk Behind Finished Basement Drywall',
        paragraphs: [
          'Finished basements in Oakwood, Kettering, and Centerville often combine wood framing and fiberglass batt insulation pressed directly against below-grade concrete. Any slow cove-joint seepage stays concealed behind paneling until musty odors develop.',
        ],
        bullets: [
          'Keep cardboard storage boxes raised off concrete floors on metal or plastic shelving.',
          'Inspect behind utility closets, sump pits, and exterior hose-bib penetrations after heavy storms.',
          'Schedule a visual basement mold or moisture check before framing a basement or buying an older home.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Core Basement Mold Inspection Services', to: '/basement-mold-inspection' },
      { label: 'What Causes Mold in Ohio Basements?', to: '/causes-of-mold-growth-ohio-basements' },
      { label: 'Prevent Recurring Crawl Space Moisture', to: '/prevent-recurring-moisture-problems-crawl-spaces' },
      { label: 'Dayton, OH Mold Removal', to: '/mold-removal-dayton-oh' },
      { label: 'Contact & Phone Referral Info', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'Why does a dehumidifier alone sometimes fail to eliminate basement mustiness?',
        a: 'If crawlspace dirt floors lack a sealed vapor barrier or groundwater is actively seeping along the foundation cove joint, moisture keeps entering faster than a portable unit can dry the room.',
      },
      {
        q: 'Should I schedule basement mold inspection or mold testing first?',
        a: 'Starting with a visual basement and moisture inspection helps locate active dampness, leaks, or hidden staining first. If visual sources are unclear or real-estate documentation is needed, separate laboratory testing can follow.',
      },
    ],
  },
  {
    slug: 'mold-inspection-faqs',
    category: 'guide',
    featured: false,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: 'Mold Inspection, Testing & Remediation FAQs',
    seoTitle: 'Mold Inspection & Remediation FAQs | The Dome Mold Removal Experts',
    metaDescription:
      'Straightforward answers to common questions about mold inspections, laboratory mold testing, contractor removal vs remediation, and how our Oakwood referral service works.',
    eyebrow: 'Frequently Asked Questions',
    summary:
      'Clear answers explaining what visual inspections cover, when lab testing makes sense, how physical removal differs from full remediation, and how our independent referral service operates.',
    readingTime: '5 min read',
    primaryService: {
      label: 'Core Mold Inspection Services',
      to: '/mold-inspection',
    },
    sections: [
      {
        heading: 'How Our Referral Model Works',
        paragraphs: [
          'The Dome Mold Removal Experts operates as a service-area referral service serving Oakwood, OH and the surrounding Miami Valley. Rather than maintaining a walk-in storefront or directly performing physical demolition or remediation crews ourselves, we connect property owners by phone with independent local mold inspectors, testing professionals, and remediation contractors.',
          'Why does that distinction matter? Independent evaluation helps homeowners get straightforward information about moisture conditions first without bundled sales pressure.',
        ],
      },
      {
        heading: 'Visual Inspection vs. Laboratory Mold Testing',
        paragraphs: [
          'A visual mold inspection examines accessible rooms, basements, crawlspaces, attics, plumbing runs, and exterior drainage signs to locate visible growth and moisture triggers.',
          'Laboratory mold testing is a separate diagnostic step where an independent technician gathers targeted air or surface swab samples and sends them to an accredited laboratory to compare indoor spore counts with outdoor baselines.',
        ],
        bullets: [
          'Choose a visual mold inspection when you want to locate moisture leaks, dampness, or extent of visible staining.',
          'Consider mold testing when there is a lingering musty odor without visible mold, during property due diligence, or for post-remediation clearance.',
          'Remember: no visual inspection alone can determine mold species or toxicity.',
        ],
      },
      {
        heading: 'Mold Removal vs. Mold Remediation Scope',
        paragraphs: [
          'Although homeowners often search both phrases interchangeably, contractors treat them slightly differently on job scopes. Mold removal refers specifically to physically clearing visible mold from affected materials and disposing of non-salvageable items.',
          'Mold remediation encompasses broader containment practices: negative air scrubbing with HEPA filtration, isolating the work area, removing compromised drywall or trim, antimicrobial detailing, and coordinating moisture fixes so growth does not resume.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Core Mold Inspection Services', to: '/mold-inspection' },
      { label: 'What Happens During a Mold Inspection?', to: '/what-happens-during-professional-mold-inspection' },
      { label: 'Mold Testing vs. Mold Inspection', to: '/mold-testing-vs-mold-inspection-difference' },
      { label: 'Oakwood, OH Mold Removal', to: '/mold-removal-oakwood-oh' },
      { label: 'Contact & Phone Referral Info', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'Can you diagnose whether mold is affecting my family’s health?',
        a: 'No. Neither The Dome Mold Removal Experts nor independent home inspectors diagnose medical symptoms or provide medical opinions. Consult a qualified physician for health questions.',
      },
      {
        q: 'Do you perform the physical remediation work directly?',
        a: 'No. We connect Oakwood and Miami Valley callers with independent local contractors who perform inspections, testing, estimates, and physical remediation work directly on-site.',
      },
      {
        q: 'How do I connect with a specialist by phone?',
        a: 'Call 937-967-3264 directly. We keep communication simple with direct phone scheduling—no web forms or automated email delays.',
      },
    ],
  },
  {
    slug: 'water-damage-and-mold-guide',
    category: 'guide',
    featured: false,
    publishedAt: '2026-11-12',
    updatedAt: '2026-11-12',
    title: '24–48 Hour Water Damage & Structural Drying Timeline Guide',
    seoTitle: 'Water Damage & Drying Timeline Guide | Oakwood & Dayton, OH',
    metaDescription:
      'Understand the 24-to-48-hour drying window after a leak or flood, steps to stabilize wet rooms safely, and when independent moisture inspection or remediation contractors are needed.',
    eyebrow: 'Drying & Stabilization Guide',
    summary:
      'From burst supply lines and roof flashing leaks to basement storm backups, acting within the first 24 to 48 hours of water intrusion helps protect drywall, subfloors, and framing from secondary mold.',
    readingTime: '5 min read',
    primaryService: {
      label: 'Moisture Inspection Services',
      to: '/moisture-inspection',
    },
    sections: [
      {
        heading: 'The 24-to-48-Hour Moisture Window',
        paragraphs: [
          'Clean water intrusion does not instantly create heavy mold colonies on day one. However, porous materials like drywall paper backing, carpet padding, particleboard cabinets, and framing lumber absorb moisture deeply if left wet beyond 24 to 48 hours.',
          'Even after visible puddles disappear, trapped moisture behind baseboards, beneath engineered wood flooring, or inside insulated exterior wall cavities stays wet for weeks.',
        ],
      },
      {
        heading: 'Tracing Slow Leaks vs. Sudden Floods',
        paragraphs: [
          'Sudden pipe bursts and heavy basement storm backups require immediate water extraction and structural drying before reconstruction. By contrast, slow flashing drips around chimneys, dormer valleys, or shower pans quietly dampen framing over months.',
        ],
        bullets: [
          'Stop the source first: shut off leaking plumbing fixtures, clear overflowing gutters, or repair roof flashing.',
          'Avoid running central HVAC blowers across actively saturated mold-damaged areas so spores do not spread through return ducts.',
          'Never seal over damp drywall or subfloors with new flooring or fresh paint before verifying moisture levels have dried cleanly.',
        ],
      },
      {
        heading: 'Coordinating Moisture Checks & Remediation Contractors',
        paragraphs: [
          'Whenever property owners are unsure how far water migrated under finished basement floors or inside ceiling joists, an independent moisture inspection maps out wet building boundaries so remediation contractors only remove materials that truly require intervention.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Core Moisture Inspection Services', to: '/moisture-inspection' },
      { label: 'How to Recognize Mold After Water Damage', to: '/recognize-mold-after-water-damage' },
      { label: 'Core Mold Remediation Services', to: '/mold-remediation' },
      { label: 'Dayton, OH Mold Removal', to: '/mold-removal-dayton-oh' },
      { label: 'Contact & Phone Referral Info', to: '/contact' },
    ],
    sources: [EPA_MOLD_SOURCE, CDC_MOLD_SOURCE],
    faqs: [
      {
        q: 'If drywall gets wet during a minor leak and dries on the surface, is it safe?',
        a: 'Surface touch alone can be misleading. Backing paper on the rear face of drywall holds dampness next to wall insulation. An independent moisture inspection helps verify whether cavities dried thoroughly.',
      },
      {
        q: 'Do independent contractors handle both wet material removal and mold remediation?',
        a: 'Yes, qualified local mold remediation contractors evaluate affected drywall, framing, and subflooring after water events and outline drying, containment, and removal steps on-site.',
      },
    ],
  },
];
