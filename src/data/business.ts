export const business = {
  name: 'The Dome Mold Removal Experts',
  category: 'Home Inspector',
  tagline: 'Connecting Oakwood, OH Homeowners With Local Mold Inspection & Removal Professionals',
  serviceAreaLabel: 'Oakwood, OH & Surrounding Miami Valley',
  isServiceAreaBusiness: true,
  phoneDisplay: '937-967-3264',
  phoneHref: 'tel:+19379673264',
  website: 'https://www.moldremoval-oakwood.com',
  existingUrl: 'http://www.moldremoval-oakwood.com/',
  googleMapsListing: 'https://maps.app.goo.gl/73PAk7wk8AxiMjCFA',
  primaryCity: 'Oakwood',
  primaryStateAbbr: 'OH',
  primaryCounty: 'Montgomery County',
  primaryRegion: 'Miami Valley',
  reviewCountExternal: 6,
  ratingExternal: 5.0,
  reviewListingUrl: 'https://maps.app.goo.gl/73PAk7wk8AxiMjCFA',
};

export type CustomerReview = {
  author: string;
  rating: number;
  timeAgo: string;
  reviewCount: string;
  serviceMentioned?: string;
  text: string;
};

export const reviewsData: CustomerReview[] = [
  {
    author: 'Prasant Wilson',
    rating: 5,
    timeAgo: '5 months ago',
    reviewCount: '2 reviews',
    serviceMentioned: 'Mold Removal',
    text: 'The flood damage clean up crew was outstanding. They removed standing water, sanitized affected areas, and checked for mold growth. Their mold removal services were thorough and effective. I highly recommended this company.',
  },
  {
    author: 'Bonnie Ellis',
    rating: 5,
    timeAgo: '4 years ago',
    reviewCount: '2 reviews',
    serviceMentioned: 'Mold Remediation',
    text: 'The company gave good support when we were suffering from a severe mold attack in our house. The black toxic mold could have damaged the house, but they came to the rescue with their effective mold remediation service.',
  },
  {
    author: 'Neal Partsons',
    rating: 5,
    timeAgo: '4 years ago',
    reviewCount: '2 reviews',
    serviceMentioned: 'Mold Testing & Sampling',
    text: "My strong recommendation goes to this company. They're very customer-friendly, their service policies are worth appreciating. I found cost-effective solutions from them for testing mold.",
  },
  {
    author: 'Carlton Quinn',
    rating: 5,
    timeAgo: '4 years ago',
    reviewCount: '4 reviews',
    serviceMentioned: 'Mold Inspection',
    text: "As they took responsibility, I didn't have to do anything except watch their work. They inspected everything attentively to decide on the proper way of preventing mold growth.",
  },
];

export type LocationOverview = {
  residentialConcernsBody: string;
  basementAndWaterBody: string;
  plumbingAndRoofBody: string;
  propertyTypesBody: string;
  arrangeNote: string;
  localContractorQuestions: string[];
  faqs: { q: string; a: string }[];
};

export type ServiceLocation = {
  slug: string;
  name: string;
  stateAbbr: string;
  county: string;
  seoTitle?: string;
  metaDescription?: string;
  h1?: string;
  housingEra: string;
  soilAndDrainage: string;
  localFocusNote: string;
  blurb: string;
  concerns: string[];
  locationOverview: LocationOverview;
};

export const locations: ServiceLocation[] = [
  {
    slug: 'oakwood-oh',
    name: 'Oakwood',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    seoTitle: 'Oakwood, OH Local Service Guide & Mold Resources | The Dome',
    metaDescription:
      'Local guide for Oakwood, Ohio homeowners covering 1920s–1950s masonry, stone basements, addition crawlspaces, contractor questions, and independent mold referrals.',
    h1: 'Oakwood, Ohio Home Mold & Moisture Resource Guide',
    housingEra: '1920s–1950s brick, Tudor, and Colonial homes alongside updated residences along Far Hills Ave',
    soilAndDrainage: 'Mature tree canopy shade, leaf-prone gutters, and glacial clay soils that retain moisture along stone and block foundations',
    localFocusNote: 'Finished lower levels and older unvented crawlspaces under additions in Oakwood often trap summer humidity cleanly missed by surface cleaning.',
    blurb:
      'Oakwood is our primary service area. Many calls involve classic 1920s–1950s Oakwood homes where seasonal humidity, finished lower levels, and shaded lots combine to create basement, crawlspace, or attic moisture concerns.',
    concerns: [
      'Mature, shaded Oakwood lots that slow sun-driven drying of exterior masonry walls',
      'Finished basements used as family rooms where lower-level humidity builds unnoticed',
      'Original stone or block foundations and crawlspace additions with limited vapor barriers',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Oakwood homes built between the 1920s and 1950s along tree-lined streets combine classic brick or frame masonry with older additions and remodeled lower levels. Because tall shade trees keep exterior masonry damp longer after summer rains, subtle moisture buildup along perimeter trim, window sills, and finished basements is a frequent starting concern.',
      basementAndWaterBody:
        'Many Oakwood residences feature original stone, poured, or block basements paired with shallower crawlspaces beneath rear family-room additions. When leaf-clogged gutters overflow beside cool foundation walls, water intrusion along cove joints or damp summer humidity condensation creates musty lower-level odors before surface staining appears.',
      plumbingAndRoofBody:
        'Older galvanized or copper bathroom supply risers concealed behind original plaster, together with steep valley flashing on Tudor and Colonial rooflines, can allow slow intermittent drips to dampen joists and upper-floor closet framing unnoticed.',
      propertyTypesBody:
        'Oakwood requests are overwhelmingly single-family residential homeowners, home buyers performing pre-closing due diligence, and landlords caring for duplexes or neighborhood small-office buildings along Far Hills Ave.',
      arrangeNote:
        'Oakwood homeowners call directly to describe whether staining appears in an original stone basement, an addition crawlspace, or an upper attic before scheduling with an independent local specialist.',
      localContractorQuestions: [
        'If staining sits near original plaster walls or older crawlspace additions, what minimal access is needed to inspect concealed joists safely?',
        'Can a visual inspection and exterior drainage check be reviewed before ordering optional third-party laboratory air testing?',
      ],
      faqs: [
        {
          q: 'Why do finished lower levels in older Oakwood homes develop a musty smell every summer?',
          a: 'Cool below-grade masonry walls meet warm humid air migrating from crawlspace additions or unsealed sump crocks, causing localized condensation behind paneling or carpets unless humidity and gutter runoff are controlled.',
        },
        {
          q: 'Do Oakwood home buyers typically request visual mold inspection or mold testing first?',
          a: 'Many buyers start with a whole-home visual mold and moisture inspection to spot active leaks, bath-fan attic exhaust issues, or foundation seepage, and add separate lab sampling only if hidden growth is suspected.',
        },
        {
          q: 'Does The Dome maintain a storefront office in Oakwood for walk-in visits?',
          a: 'No. We operate strictly as a service-area referral service serving Oakwood and surrounding Miami Valley homes by phone at 937-967-3264 so callers connect directly with independent local professionals.',
        },
      ],
    },
  },
  {
    slug: 'dayton-oh',
    name: 'Dayton',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    seoTitle: 'Mold Removal Dayton OH | Inspection & Remediation | The Dome',
    metaDescription:
      'Need mold removal Dayton OH, mold inspection, or commercial mold assessment? Connect directly with independent local Dayton contractors at 937-967-3264.',
    h1: 'Mold Removal & Inspection in Dayton, OH',
    housingEra: 'Historic brick districts (Oakwood border, South Park, St. Anne’s Hill) to mid-century bungalows and multi-unit rentals',
    soilAndDrainage: 'River valley topography across the Great Miami and Mad rivers paired with older foundation drainage tiles',
    localFocusNote: 'Older Dayton masonry basements, flat roof commercial units, and tenant-occupied rentals often develop concealed moisture after storm cycles.',
    blurb:
      'Dayton is our largest metro market outside Oakwood. From historic downtown districts to commercial properties and residential neighborhoods, our referral network connects Dayton property owners with independent mold removal, inspection, and remediation contractors.',
    concerns: [
      'Historic Dayton foundations and masonry walls prone to storm-driven seepage',
      'Summer thunderstorms and winter freeze-thaw roof flashing leaks causing intermittent damage',
      'Multi-unit and office properties where hidden plumbing drips or flat-roof pooling go unreported',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Dayton properties range from multi-story historic brick residences in neighborhoods like South Park and St. Anne’s Hill to mid-century frame bungalows and multi-family conversions. Aging window glazing, settled porch ties, and stacked kitchen-bath plumbing configurations commonly trigger calls from Dayton homeowners and landlords seeking removal or inspection help.',
      basementAndWaterBody:
        'Sitting across the Great Miami and Mad river valleys, many older Dayton basements rely on aging mortar joints, stone footings, and older footer tiles that struggle during sustained Ohio downpours. Surface seepage, damp lower framing, and sump backups often drive secondary cellar mold unless perimeter grading and drainage are checked first.',
      plumbingAndRoofBody:
        'In older Dayton homes and rental buildings, slow sink drain leaks, deteriorated wax rings, and freeze-thaw separation along chimney or porch flashing quietly wet subfloors and attic decking long before drywall bubbles through.',
      propertyTypesBody:
        'Our Dayton referral coverage supports both residential dwellings (single-family homes, duplexes, and rental portfolios) and commercial spaces including office suites, neighborhood retail storefronts, and light industrial units via dedicated Commercial Mold Inspection.',
      arrangeNote:
        'Dayton homeowners, landlords, and commercial facility managers call 937-967-3264 directly to outline property size and whether residential remediation or commercial office scoping is required.',
      localContractorQuestions: [
        'For multi-unit Dayton properties or occupied suites, how will containment barriers protect shared hallways or adjacent units during cleanup?',
        'If foundation seepage or flat-roof ponding caused the mold growth, which moisture repairs must happen prior to remediation build-back?',
      ],
      faqs: [
        {
          q: 'Does your Dayton network connect landlords and property managers with commercial inspectors?',
          a: 'Yes. In addition to single-family Dayton residential mold removal and remediation referrals, callers can request commercial mold inspection and office mold assessment connections.',
        },
        {
          q: 'Should Dayton homeowners request an inspection before hiring a mold removal contractor?',
          a: 'Starting with an objective visual inspection or moisture trace helps confirm how far basement or plumbing dampness extends so independent contractor estimates focus on the true affected area.',
        },
        {
          q: 'How are estimates scheduled for Dayton properties?',
          a: 'Call 937-967-3264 directly. We keep intake phone-first so your Dayton neighborhood, access schedule, and property details reach independent local contractors quickly.',
        },
      ],
    },
  },
  {
    slug: 'kettering-oh',
    name: 'Kettering',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    seoTitle: 'Mold Removal Kettering OH | Basement & Home Help | The Dome',
    metaDescription:
      'Connect with independent local contractors for mold removal Kettering OH, basement moisture checks, and remediation estimates. Call 937-967-3264.',
    h1: 'Mold Removal & Inspection in Kettering, OH',
    housingEra: '1950s–1970s post-war ranches, split-levels, and brick Cape Cods with lower-level rec rooms',
    soilAndDrainage: 'Clay-heavy suburban soil that slows perimeter runoff and presses moisture toward block basement walls',
    localFocusNote: 'Split-level crawlspaces and paneled lower rec rooms common in Kettering frequently harbor musty odors long before visible mold appears.',
    blurb:
      'Kettering residents call about mold removal for damp split-level crawlspaces, musty basement rec rooms, and moisture that shows up after heavy Montgomery County rainstorms.',
    concerns: [
      'Clay-heavy Kettering soil that holds stormwater against lower block walls',
      'Walkout and split-level foundations where backyard grading slopes inward',
      'Crawlspaces under mid-century ranches lacking continuous sealed vapor barriers',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Kettering neighborhoods contain thousands of 1950s–1970s brick Cape Cods, post-war ranches, and split-level floor plans with finished lower rec rooms and half-grade utility areas. Wood furring strips and paneling fastened directly against block foundation walls often hide mold activity until occupants notice persistent earthy odors.',
      basementAndWaterBody:
        'Heavy Montgomery County clay soils hold rainwater slowly beside block foundation walls and shallow crawlspaces beneath living rooms. When patios, driveways, or backyard lawns slope inward toward window wells, hydrostatic pressure pushes moisture right into lower baseboards and carpeted slabs.',
      plumbingAndRoofBody:
        'Mid-century Kettering residences often have second-floor or split-level bathroom plumbing routed cleanly above lower rec-room drop ceilings alongside compact attic knee-walls where disconnected bath fan flex ducts dump humid air against roof framing.',
      propertyTypesBody:
        'Kettering calls center on residential single-family homeowners renovating older split-levels, families noticing lower rec-room odors, and neighborhood retail or small medical/dental office suites along Wilmington Pike and Far Hills.',
      arrangeNote:
        'Kettering property owners describe whether the odor centers in a split-level crawlspace, finished rec room, or knee-wall attic when calling 937-967-3264.',
      localContractorQuestions: [
        'For finished wood paneling in a Kettering split-level basement, will sections need controlled removal so underlying block masonry can dry completely?',
        'Are exterior downspout extensions and crawlspace vapor barriers outside the contractor remediation estimate?',
      ],
      faqs: [
        {
          q: 'Why do Kettering split-level homes get moldy odors in lower family rooms?',
          a: 'Lower rec rooms frequently sit adjacent to unsealed crawlspaces under the main living level. Cool masonry walls and clay soil moisture drive musty odors behind older wood paneling and tack strips.',
        },
        {
          q: 'Can independent contractors check bath fan ducts above Kettering Cape Cod knee-walls?',
          a: 'Yes. Visual attic and inspection referrals include checking accessible knee-wall spaces and bath exhaust duct termination paths when safe access exists.',
        },
        {
          q: 'Who performs the actual mold removal in Kettering if damaged drywall needs tear-out?',
          a: 'The Dome connects you with independent local mold removal and remediation contractors serving Kettering who inspect the site, provide a written estimate, and handle physical work.',
        },
      ],
    },
  },
  {
    slug: 'centerville-oh',
    name: 'Centerville',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    seoTitle: 'Mold Inspection Centerville OH | Attic & Home Checks | The Dome',
    metaDescription:
      'Schedule an independent mold inspection Centerville OH homeowners rely on for attic condensation, finished basements, and leak checks. Call 937-967-3264.',
    h1: 'Mold Inspection & Removal in Centerville, OH',
    housingEra: 'Historic limestone cores surrounded by late-1970s to 2000s two-story colonials and finished basements',
    soilAndDrainage: 'Limestone bedrock ledges and compacted subdivision grading along sloped lots',
    localFocusNote: 'Centerville homeowners frequently call about recessed-light attic bypasses causing upper-level roof sheathing condensation and finished lower-level drywall leaks.',
    blurb:
      'Centerville homeowners regularly reach out for mold inspections covering finished lower levels, hidden plumbing moisture behind drywall, and attic condensation in multi-level homes.',
    concerns: [
      'Attic roof-decking staining driven by bath fans or bypass air leaks in large two-story homes',
      'Finished basement drywall concealing slow pinhole plumbing or sump-discharge moisture',
      'Appliance supply-line drips under first-floor kitchens draining into joists',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Across Centerville’s two-story colonials and sloped subdivisions, complex multi-room basements and tall vaulted attics introduce distinct moisture concerns compared with smaller historic bungalows. Many homeowners first notice subtle discoloration around upper-level ceiling hatches or lingering dampness inside lower utility closets.',
      basementAndWaterBody:
        'Sloped lots and limestone shelves can funnel hillside runoff toward walkout foundations or overwhelmed sump pits during heavy seasonal storms. Because lower levels in Centerville are heavily finished with drywall and carpeting, dampness around rear utility rooms can stay concealed well after external rain subsides.',
      plumbingAndRoofBody:
        'First-floor kitchen refrigerator lines, second-floor hall baths above hardwood floors, and recessed ceiling fixtures exhausting warm air into cold two-story roof framing are frequent water and condensation triggers evaluated during Centerville inspections.',
      propertyTypesBody:
        'Services in Centerville focus primarily on suburban single-family residential homes, pre-sale buyer inspections, and professional office suites around town.',
      arrangeNote:
        'When calling from Centerville, mention whether you need a whole-home inspection for a two-story colonial, finished-basement leak evaluation, or attic decking check.',
      localContractorQuestions: [
        'If darkened roof sheathing is found in a two-story Centerville attic, how does the remediation scope coordinate with fixing recessed-light air leaks or bath vents?',
        'How will dust and containment barriers be set up if finished basement drywall near carpeted areas needs opening?',
      ],
      faqs: [
        {
          q: 'Are Centerville attic mold stains always caused by a leaking roof?',
          a: 'Not always. In larger two-story Centerville homes, warm indoor vapor escaping through attic hatches, bathroom exhaust fans, or recessed lights often condenses on cold winter roof sheathing.',
        },
        {
          q: 'How do Centerville homeowners inspect a fully finished basement without tearing down walls first?',
          a: 'Independent inspectors start with accessible mechanical closets, sump pits, perimeter baseboards, and flooring transitions—and may use non-invasive surface checks before recommending targeted opening.',
        },
        {
          q: 'Can I request independent mold testing for a Centerville home under contract?',
          a: 'Yes. Call 937-967-3264 to request visual inspection and optional accredited laboratory air or swab sampling referrals during real-estate contingencies.',
        },
      ],
    },
  },
  {
    slug: 'beavercreek-oh',
    name: 'Beavercreek',
    stateAbbr: 'OH',
    county: 'Greene County',
    seoTitle: 'Mold Inspection Beavercreek OH | Roof & Home Checks | The Dome',
    metaDescription:
      'Looking for mold inspection Beavercreek OH? Connect with independent local inspectors for roof valley leaks, attic checks, and moisture evaluations at 937-967-3264.',
    h1: 'Mold Inspection & Removal in Beavercreek, OH',
    housingEra: '1980s–modern suburban builds, tri-levels, and expansive custom homes with complex multi-gable roofs',
    soilAndDrainage: 'High Greene County seasonal water tables and tight building envelopes that hold indoor vapor',
    localFocusNote: 'Multiple complex roof valleys and high-efficiency insulated envelopes in Beavercreek homes require careful flashing and mechanical ventilation checks.',
    blurb:
      'In Beavercreek, property owners connect with our network for newer tightly sealed homes trapping interior humidity as well as complex rooflines prone to valley flashing leaks.',
    concerns: [
      'Complex roof valleys, dormer flashing, and skylights vulnerable to slow wind-driven rain entry',
      'Tighter modern framing envelopes holding winter condensation around windows and attics',
      'Sump pumps and foundation drains challenged by high Greene County water tables',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Although Beavercreek includes many newer 1980s-to-modern Greene County subdivisions alongside tri-level homes, tight synthetic building envelopes and complex multi-gable roof geometry still experience localized moisture traps around window condensation, skylights, and unfinished basement edges.',
      basementAndWaterBody:
        'High seasonal Greene County water tables place heavier demand on footer drains and sump pumps during wet spring and fall months. Slow weeping along basement window wells or finished lower utility walls can elevate basement relative humidity whenever mechanical dehumidification isn’t balanced.',
      plumbingAndRoofBody:
        'Intersecting roof valleys, dormer flashing seams, HVAC condensate lines inside attic air handlers, and upstairs laundry closets are top leak and moisture inspection points across Beavercreek residential properties.',
      propertyTypesBody:
        'Beavercreek referrals cover homeowners, military and contractor relocation buyers near the Greene County corridor, and low-rise office parks.',
      arrangeNote:
        'Callers in Beavercreek can request focused roof-valley moisture tracing, whole-home relocation buyer inspections, or contractor remediation estimates directly at 937-967-3264.',
      localContractorQuestions: [
        'For newer insulated Beavercreek framing envelopes, is indoor relative humidity or mechanical fresh-air balancing contributing alongside visible staining?',
        'If skylight or dormer flashing moisture is identified overhead, how should roofing repairs be sequenced before drywall cleanup?',
      ],
      faqs: [
        {
          q: 'Why can newer tightly sealed Beavercreek homes still develop mold concerns?',
          a: 'Modern energy-efficient homes trap everyday shower and cooking humidity indoors unless bath fans, sump covers, and HVAC dehumidification operate effectively—and complex roof valleys still remain vulnerable to flashing drips.',
        },
        {
          q: 'Does your referral coverage extend into Greene County for Beavercreek neighborhoods?',
          a: 'Yes. Beavercreek and nearby Fairborn in Greene County are active parts of our Miami Valley independent inspector and contractor referral network.',
        },
        {
          q: 'How fast can I speak with someone about a Beavercreek inspection before closing?',
          a: 'Call 937-967-3264 directly by phone so we can match your Beavercreek address and contingency timeline with available independent local specialists.',
        },
      ],
    },
  },
  {
    slug: 'miamisburg-oh',
    name: 'Miamisburg',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    housingEra: 'Historic 1800s river-corridor brick homes alongside mid-century neighborhoods and hillside subdivisions',
    soilAndDrainage: 'Great Miami River floodplain proximity and hillside stormwater runoff channels',
    localFocusNote: 'Miamisburg properties near the river corridor often deal with elevated groundwater humidity in stone or older masonry cellars.',
    blurb:
      'Miamisburg sits along the Great Miami River, creating distinct groundwater, flood-recovery, and stone-foundation humidity profiles across both historic districts and hill properties.',
    concerns: [
      'River-adjacent lots experiencing seasonal groundwater rise and persistent cellar humidity',
      'Historic district stone foundations with aging mortar joints allowing moisture wicking',
      'Low-lying yards and driveways funneling rainwater toward basement window wells',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Miamisburg pairs nineteenth-century river-corridor brick homes near downtown with mid-century hillside neighborhoods climbing away from the Great Miami River valley. Downslope stormwater runoff and high seasonal water tables create markedly different lower-level moisture issues than flatter suburbs.',
      basementAndWaterBody:
        'River-adjacent basements and stone cellars often experience lateral moisture wicking through older mortar joints, while hillside properties deal with driveway and yard runoff collecting around basement window wells during heavy rains.',
      plumbingAndRoofBody:
        'Steep historic porches, aging box gutters or chimney flashings, and older basement stack drains can introduce intermittent hidden leakage alongside groundwater dampness.',
      propertyTypesBody:
        'Miamisburg callers include owners of historic brick homes, hillside ranch families, and downtown commercial or Main Street mixed-use building stewards.',
      arrangeNote:
        'Call 937-967-3264 directly and let us know whether your Miamisburg property has a stone cellar near the valley floor or hillside drainage entry.',
      localContractorQuestions: [
        'For older Miamisburg stone or brick cellars, is breathable masonry drying or exterior footer drainage needed before finishing walls?',
        'Are window-well covers and hill-slope runoff paths evaluated separately from interior contractor cleanup?',
      ],
      faqs: [
        {
          q: 'Why do historic stone basements in Miamisburg stay damp even when no puddles form?',
          a: 'Porous masonry along river corridors draws ground humidity via capillary action, leaving white efflorescence salts and elevated indoor relative humidity even without standing floodwater.',
        },
        {
          q: 'Can hillside runoff into a Miamisburg window well trigger hidden basement drywall mold?',
          a: 'Yes. Water pooling inside window wells often wicks behind lower basement framing and insulation around window bucks before homeowners notice visible staining.',
        },
        {
          q: 'Does The Dome send a direct crew or refer independent contractors to Miamisburg?',
          a: 'The Dome operates strictly as a referral service connecting Miamisburg property owners with independent local mold inspectors and remediation contractors.',
        },
      ],
    },
  },
  {
    slug: 'washington-township-oh',
    name: 'Washington Township',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    housingEra: 'Custom estate homes, 1990s–2010s developments, and multi-zone finished walkout basements',
    soilAndDrainage: 'Settled backfill soil and extensive landscaped berms that alter original subdivision grading',
    localFocusNote: 'Mulch beds built above siding brick-weep holes and dense landscaped perimeters often bridge moisture right into Washington Township framing.',
    blurb:
      'Washington Township homeowners frequently connect with independent specialists regarding finished lower levels, settling landscape grading, and complex multi-zone HVAC ductwork.',
    concerns: [
      'Landscape berms and high mulch beds redirecting yard drainage toward foundation walls',
      'Large finished basements with multi-zone HVAC condensation or home-theater humidity',
      'Sill-plate and walkout threshold leaks along expansive rear elevations',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Across Washington Township developments and custom estate subdivisions, large multi-zone homes feature expansive walkout lower levels, finished recreation suites, and thick exterior landscaping beds. Even on newer foundations, settling backfill soil and raised mulch borders routinely trap perimeter moisture against masonry brick veneers.',
      basementAndWaterBody:
        'Deep walkout rear walls, French doors lacking proper threshold flashing, and heavy landscaped berms can pitch stormwater back toward lower finished rooms, threatening sill plates, theater carpet pads, and drywall bottom edges.',
      plumbingAndRoofBody:
        'Multiple upstairs bath groups, complex foyer roof valleys, and dual-zone HVAC equipment located inside utility rooms or tight attics require clear leakage tracing before opening intact finishes.',
      propertyTypesBody:
        'Referral requests in Washington Township serve custom single-family residences, condo/HOA properties, and low-rise office or medical complexes near township commercial corridors.',
      arrangeNote:
        'Washington Township callers can reach 937-967-3264 directly by phone to describe walkout lower-level symptoms, utility room odors, or pre-sale inspection needs.',
      localContractorQuestions: [
        'For finished walkout basements with carpeted lower suites, how do independent specialists separate sill-plate rainwater leaks from HVAC condensate humidity?',
        'Can contractors evaluate raised exterior landscaping berms or blocked brick-weep holes alongside interior framing checks?',
      ],
      faqs: [
        {
          q: 'How can exterior landscaping cause mold in a newer Washington Township home?',
          a: 'Deep mulch beds or decorative landscape berms stacked above brick-weep holes hold moisture directly against sheathing and sill plates, bypassing waterproofing membranes over time.',
        },
        {
          q: 'What should Washington Township homeowners check if a large finished basement smells stale?',
          a: 'Focus on utility closets housing multi-zone air handlers, rear walkout sliding thresholds, and closed-off finished storage alcoves with limited supply-air circulation.',
        },
        {
          q: 'How do estimates work for large custom homes in Washington Township?',
          a: 'Call 937-967-3264 to connect with independent local inspectors or remediation contractors who review affected zones on-site and issue written project scopes.',
        },
      ],
    },
  },
  {
    slug: 'moraine-oh',
    name: 'Moraine',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    housingEra: 'Post-war residential cottages and duplexes alongside commercial/warehouse buildings',
    soilAndDrainage: 'Flat valley-floor industrial corridor along the Great Miami River with heavy pavement runoff',
    localFocusNote: 'Commercial flat roofs and slab-on-grade structures in Moraine require targeted moisture tracing to separate roof ponding from groundwater wicking.',
    blurb:
      'Moraine combines older residential neighborhoods and commercial facilities where flat roof membranes, storm drainage, and concrete slab moisture are key triggers.',
    concerns: [
      'Low-slope and flat commercial roof assemblies prone to ponding and seam seepage',
      'Older residential foundations and utility basements with minimal exterior waterproofing',
      'Concrete floor moisture migration beneath commercial carpet or vinyl tile',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Moraine blends compact post-war residential bungalows and duplexes with an extensive industrial and commercial corridor along the flat Great Miami River valley floor. Both residential cottages and slab-on-grade utility buildings contend with high valley water tables and heavy paved parking runoff.',
      basementAndWaterBody:
        'Slab-on-grade residential homes and shallow older utility basements without exterior damp-proofing frequently experience upward concrete moisture migration beneath vinyl flooring, area rugs, or stored office inventory.',
      plumbingAndRoofBody:
        'Commercial low-slope roof seams, overflowing scupper drains, and aging galvanized residential supply lines contribute heavily to concealed ceiling-grid staining and wall-baseboard dampness.',
      propertyTypesBody:
        'Moraine receives dedicated support for both residential homeowners and facility contacts requiring Commercial Mold Inspection across offices, warehouses, and tenant suites.',
      arrangeNote:
        'Call 937-967-3264 directly and specify whether your Moraine concern involves a residential slab home, utility basement, or commercial flat-roof building.',
      localContractorQuestions: [
        'For Moraine commercial suites on concrete slabs, does the contractor review sub-floor vapor migration and drop-ceiling plenums separately?',
        'Can flat-roof seam ponding repairs be verified dry before replacing ceiling tiles or drywall?',
      ],
      faqs: [
        {
          q: 'Do you connect Moraine commercial warehouses and offices with inspection specialists?',
          a: 'Yes. Along with Dayton, Moraine has dedicated commercial mold inspection referral coverage for offices, light industrial suites, and commercial roofs.',
        },
        {
          q: 'Why can concrete slab floors in Moraine cause mold under vinyl or carpet?',
          a: 'Flat river-valley lots sitting over shallow water tables push vapor upward through older concrete slabs lacking sub-slab vapor barriers, trapping moisture under low-permeability flooring.',
        },
        {
          q: 'What does an inspection estimate process cost to initiate in Moraine?',
          a: 'Calling 937-967-3264 connects you with independent local specialists at no upfront referral charge; independent inspectors and contractors set any on-site fees directly.',
        },
      ],
    },
  },
  {
    slug: 'riverside-oh',
    name: 'Riverside',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    housingEra: '1940s–1960s ranch homes, slab foundations, and neighborhoods near Wright-Patterson corridor',
    soilAndDrainage: 'Confluence corridor of the Stillwater and Great Miami rivers with high alluvial groundwater',
    localFocusNote: 'Slab-on-grade homes and older ducted crawlspaces in Riverside frequently experience sub-slab vapor migration or post-storm incomplete drying.',
    blurb:
      'Located near the Stillwater and Great Miami rivers, Riverside properties face recurring groundwater dampness, slab moisture wicking, and post-storm recovery concerns.',
    concerns: [
      'High groundwater corridors causing persistent lower-level dampness after sustained rains',
      'Slab-on-grade homes where moisture wicks beneath laminate flooring or baseboards',
      'Flood-adjacent properties where hidden wall cavities failed to dry completely',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Riverside neighborhoods near the Stillwater and Great Miami river corridor feature predominantly mid-century single-level ranches, slab foundations, and vented crawlspaces built cleanly on flat terrain near the Wright-Patterson corridor.',
      basementAndWaterBody:
        'With shallow groundwater and storm runoff crossing flat valley lots, crawlspaces housing heating ductwork—as well as concrete slab edges lacking perimeter thermal breaks—frequently develop localized condensation and lingering dampness after prolonged wet weather.',
      plumbingAndRoofBody:
        'Low-pitch mid-century rooflines, clogged porch valleys, and compact utility-room water heater or washer drain connections behind drywall often dampen adjacent bedrooms along concrete slabs.',
      propertyTypesBody:
        'Calls from Riverside involve owner-occupied ranches, base-adjacent military rental residences, and corridor small business buildings.',
      arrangeNote:
        'Riverside callers can call 937-967-3264 by phone to discuss slab baseboard staining, ducted crawlspace humidity, or past storm drying concerns.',
      localContractorQuestions: [
        'If HVAC ducts run through a damp Riverside crawlspace, will contractors examine duct insulation sweating alongside floor joists?',
        'How is slab-edge drywall drying verified after minor water heater or storm intrusion events?',
      ],
      faqs: [
        {
          q: 'Why do Riverside homes on slabs sometimes show mold behind closet baseboards?',
          a: 'Cool slab edges draw warm room humidity downward, while stagnant closet air prevents drying along paper-backed drywall sitting flush on concrete.',
        },
        {
          q: 'Do inspectors evaluate crawlspace ductwork condensation in Riverside ranches?',
          a: 'Yes. Visual crawlspace checks inspect exposed subfloors, joists, vapor barriers, and accessible HVAC duct jackets where dampness commonly forms.',
        },
        {
          q: 'How should Riverside property owners prepare before an independent contractor visits?',
          a: 'Note any past storm intrusion dates, water heater swaps, or rooms where smells intensify after air conditioning turns on, then share those details directly during the walkthrough.',
        },
      ],
    },
  },
  {
    slug: 'fairborn-oh',
    name: 'Fairborn',
    stateAbbr: 'OH',
    county: 'Greene County',
    housingEra: 'Mid-century military-corridor ranches, university rentals near Wright State, and newer suburban additions',
    soilAndDrainage: 'Greene County glacial till soils and uneven surface drainage near older curb lines',
    localFocusNote: 'Crawlspace humidity beneath older pier-and-beam homes and rental turnover moisture issues are among the most common Fairborn inspection calls.',
    blurb:
      'Fairborn’s mix of older mid-century homes, rental housing near Wright-Patterson AFB and Wright State, and modern subdivisions drives frequent calls for crawlspace, attic, and rental inspections.',
    concerns: [
      'Vented crawlspaces with sagging fiberglass insulation and missing ground vapor barriers',
      'Aging plumbing fixtures and exhaust fans in mid-century rental homes',
      'Newer two-story Greene County homes experiencing upper-floor bath fan attic moisture',
    ],
    locationOverview: {
      residentialConcernsBody:
        'Fairborn combines 1950s pier-and-beam or crawlspace military-corridor homes, high-turnover student and base rental housing near Wright State and Wright-Patterson AFB, and modern Greene County subdivisions. High occupancy turnover can allow bath condensation or minor leaks to go unreported until staining expands.',
      basementAndWaterBody:
        'Open vented crawlspaces over Greene County glacial till soil allow humid spring and summer air to condense inside fiberglass subfloor batts, dampening wooden floor joists across older Fairborn ranches.',
      plumbingAndRoofBody:
        'Disabled or clogged bathroom exhaust fans in rental units, older tub tile grout gaps, and attic bath-fan ducts terminating inside unvented roof decking are leading leak and vapor triggers in Fairborn.',
      propertyTypesBody:
        'Referrals in Fairborn support homeowners, off-base military families, university-area landlords, and property managers preparing units between leases.',
      arrangeNote:
        'Property owners and managers in Fairborn can call 937-967-3264 directly to coordinate between-tenant inspections or residential removal quotes.',
      localContractorQuestions: [
        'For vented Fairborn crawlspaces with hanging damp fiberglass insulation, should damaged batts be removed before structural drying and treatment?',
        'How will independent inspectors distinguish tenant shower-humidity mildew from hidden roof or plumbing leakage?',
      ],
      faqs: [
        {
          q: 'Why do Fairborn crawlspaces with open foundation vents often get moldy in summer?',
          a: 'Letting hot humid July air blow directly under cooler subfloor joists raises relative humidity in the crawlspace rather than drying it—soaking exposed wood joists and fiberglass insulation.',
        },
        {
          q: 'Can Fairborn landlords arrange independent documentation between tenants?',
          a: 'Yes. Landlords and property managers call 937-967-3264 to connect with local inspectors for objective visual evaluations and optional accredited lab sampling.',
        },
        {
          q: 'Does Fairborn fall inside your Greene County referral zone?',
          a: 'Yes. Both Fairborn and Beavercreek in Greene County are active residential service areas connected directly by phone.',
        },
      ],
    },
  },
];

export type MoldService = {
  slug: string;
  corePath: string;
  coreSeoTitle: string;
  coreH1: string;
  coreMetaDescription: string;
  comboTitleTemplate: string;
  comboMetaTemplate: string;
  comboH1Template: string;
  comboLocationSlugs?: string[];
  name: string;
  shortName: string;
  ctaLabel: string;
  icon: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  introParagraphs: string[];
  scopeBoundary: string;
  concernsHeading: string;
  concerns: string[];
  workPerformed: string[];
  angleSection: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  methodsNote: string;
  afterInspection: {
    heading: string;
    body: string;
  };
  considerations: string[];
  faqs: { q: string; a: string }[];
  relatedGuideSlugs: string[];
};

export function formatServiceTemplate(
  template: string,
  city: string,
  locShort: string,
  customArticleCity?: string,
): string {
  const aCity = customArticleCity ?? (/^[aeiou]/i.test(city.trim()) ? `an ${city}` : `a ${city}`);
  return template
    .replace(/\{aCity\}/g, aCity)
    .replace(/\{city\}/g, city)
    .replace(/\{locShort\}/g, locShort);
}

export const consolidatedServiceRedirects: Record<string, string> = {
  'mold-assessment': 'mold-inspection',
  'property-mold-inspection': 'mold-inspection',
  'water-intrusion-inspection': 'moisture-inspection',
};

export const services: MoldService[] = [
  {
    slug: 'mold-inspection',
    corePath: '/mold-inspection',
    coreSeoTitle: 'Professional Mold Inspection & Home Assessment | Miami Valley | The Dome',
    coreH1: 'Professional Mold Inspection & Home Assessment',
    coreMetaDescription:
      'Searching for a mold assessment near me across Oakwood or Dayton? Connect with independent local professionals for a thorough home mold inspection at 937-967-3264.',
    comboTitleTemplate: 'Mold Inspection in {locShort} | Local Mold Assessment',
    comboMetaTemplate:
      'Concerned about mold in your {city} home? Learn about mold inspections, moisture assessment and identifying potential problem areas. Connect with local professionals.',
    comboH1Template: 'Professional Mold Inspection in {city}, Ohio',
    name: 'Mold Inspection',
    shortName: 'Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'Search',
    image:
      'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A mold inspector wearing protective gear examines an interior wall during a mold inspection in an Oakwood, Ohio home',
    summary:
      'A visual, property-wide home mold inspection connecting homeowners and buyers with independent specialists when they search for a trusted mold assessment near me.',
    description:
      'A professional mold inspection is a comprehensive, on-site visual evaluation of your property—covering both isolated room concerns and whole-home pre-purchase assessments. When property owners look for a mold assessment near me in Oakwood or the Dayton metro area, we connect them directly with independent local mold inspectors who check accessible interior rooms, basements, crawlspaces, attics, plumbing zones, and exterior drainage clues. Neither The Dome nor a visual inspection diagnoses health conditions or directly performs remediation; separate testing handles lab species identification, and independent local contractors handle remediation estimates if cleanup is needed.',
    introParagraphs: [
      'A persistent musty smell, water stains or recurring dampness can indicate a moisture problem inside a property. In some situations, mold may develop in areas that are not immediately visible, including basements, attic spaces and areas affected by previous leaks.',
      'Homeowners in {city} can use a professional mold inspection to investigate suspected growth, identify areas of concern and understand whether additional testing or remediation may be appropriate.',
      'The Dome Mold Removal Experts helps homeowners connect with independent local contractors for mold-related inspection and assessment services. The appropriate inspection process depends on the property’s condition, the history of water intrusion and the areas where moisture problems are suspected.',
    ],
    scopeBoundary:
      'Covers both focused visible-mold walkthroughs and whole-property pre-purchase assessments; does not include laboratory air sampling (see Mold Testing) or physical contractor cleanup (see Mold Removal & Mold Remediation).',
    concernsHeading: 'What can {aCity} mold inspection investigate?',
    concerns: [
      'Visible discoloration and suspected mold growth',
      'Musty odors in living spaces',
      'Previous plumbing or roof leaks',
      'Basement and crawl-space moisture',
      'Attic condensation and ventilation concerns',
      'Damp building materials following water damage',
    ],
    workPerformed: [
      'Visual room-by-room walkthrough covering living spaces, basement, crawlspace, and attic',
      'Documentation of visible mold locations, extent, and contributing moisture triggers',
      'Evaluation of ventilation, plumbing clues, and building conditions supporting dampness',
      'Whole-property mold assessment context for home buyers, sellers, landlords, and managers',
    ],
    angleSection: {
      heading: 'Affected-Area Scope & Whole-Property Assessment',
      paragraphs: [
        'In addition to checking a single discolored wall or musty closet, an independent inspection maps how far dampness extends across adjoining framing, subfloors, and ductwork—answering broader mold assessment and pre-purchase property mold inspection questions on one coordinated visit.',
      ],
      bullets: [
        'Whole-building review across main living levels, lower foundations, and overhead attic decking',
        'Distinguishing isolated condensation spots from systemic drainage or plumbing issues',
        'Pre-purchase buyer and pre-listing seller clarity before committing to lab testing or remediation',
      ],
    },
    methodsNote:
      'Evaluations begin with structured visual inspection of accessible rooms, basements, crawlspaces, and attics. Depending on the independent contractor and property access, basic moisture-checking tools may be used to verify damp surfaces; specialized cameras or laboratory sampling instruments are only performed when verified and agreed upon with the assigned local specialist.',
    afterInspection: {
      heading: 'What happens after an inspection?',
      body: 'The findings can help determine whether further investigation, moisture correction, material removal or remediation should be considered. Any proposed work should be explained in a written scope before it begins.',
    },
    considerations: [
      'A visual inspection cannot identify mold species or determine toxicity without lab analysis',
      'Mold hidden behind finished drywall or under flooring may not be visible without opening the assembly',
      'Laboratory air and swab sampling are separate from a visual inspection—ask about Mold Testing if needed',
    ],
    faqs: [
      {
        q: 'Does a mold inspection also cover whole-property or pre-purchase assessments?',
        a: 'Yes. Through our referral network, independent inspectors evaluate single rooms or the entire building system—including accessible interiors, basements, crawlspaces, and attics—so homeowners, buyers, and sellers get a clear scope overview.',
      },
      {
        q: 'Can you tell me what type of mold it is from a visual inspection?',
        a: 'No. A visual inspection alone cannot identify mold species or determine whether mold is toxigenic. Identifying specific species requires separate mold testing and laboratory analysis.',
      },
      {
        q: 'Do I need a mold inspection if I already see mold?',
        a: 'Yes. Even when surface staining is visible, an independent inspection maps how far accessible dampness reaches, pinpoints the moisture source, and helps avoid overpaying for unnecessary remediation work.',
      },
      {
        q: 'How long does a mold inspection take?',
        a: 'A typical residential visual inspection takes roughly an hour to an hour and a half depending on home size, basement finishings, and attic access.',
      },
    ],
    relatedGuideSlugs: [
      'what-happens-during-professional-mold-inspection',
      'mold-testing-vs-mold-inspection-difference',
      'mold-inspection-faqs',
    ],
  },
  {
    slug: 'mold-testing',
    corePath: '/mold-testing',
    coreSeoTitle: 'Indoor Mold Testing, Air Quality Testing & Mold Sampling | Miami Valley',
    coreH1: 'Indoor Mold Testing & Air Quality Mold Sampling',
    coreMetaDescription:
      'Coordinate independent indoor mold testing, air quality mold testing, and surface mold sampling across Oakwood and Dayton, OH via accredited labs. Call 937-967-3264.',
    comboTitleTemplate: 'Mold Testing in {locShort} | Air & Surface Sampling',
    comboMetaTemplate:
      'Considering mold testing in {city}? Understand when air or surface sampling helps, sampling options, lab limitations, and local referral options.',
    comboH1Template: 'Mold Testing & Sampling in {locShort}',
    name: 'Mold Testing',
    shortName: 'Mold Testing',
    ctaLabel: 'Call About Mold Testing',
    icon: 'FlaskConical',
    image:
      'https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Air and surface sample collection preparation for mold testing in an Oakwood, Ohio home',
    summary:
      'Independent indoor mold testing, air quality mold testing, and surface mold sampling coordinated with third-party accredited laboratories to verify spore counts.',
    description:
      'Indoor mold testing in Oakwood and the Miami Valley connects homeowners, buyers, and property managers with independent specialists who perform air quality mold testing and surface mold sampling for accredited laboratory analysis. While a visual inspection checks accessible rooms for moisture issues, structured mold sampling compares indoor airborne spore levels against outdoor controls when hidden mold is suspected, clearance testing is requested, or documentation is needed for a home sale.',
    introParagraphs: [
      'Not every moisture or staining question requires laboratory sampling, especially when visible mold and its leak source are already clear. However, when a lingering odor in {city} has no obvious visible source—or when written third-party spore data is needed for a real-estate closing or post-work review—targeted sampling helps clarify what is in the air or on a surface.',
      'The Dome Mold Removal Experts connects callers with independent local testing specialists who collect samples and submit them to accredited third-party laboratories rather than performing visual guesses about mold species.',
    ],
    scopeBoundary:
      'Provides third-party lab air and swab sampling via independent technicians; does not replace locating plumbing leaks or damp building assemblies (see Mold Inspection & Moisture Inspection).',
    concernsHeading: 'When {city} property owners consider mold sampling',
    concerns: [
      'Musty odors with no obvious visible mold growth',
      'Confirming indoor air spore levels during a real estate transaction',
      'Post-remediation clearance verification after contractor cleanup',
      'Suspected hidden mold behind walls, ceilings, or HVAC pathways',
    ],
    workPerformed: [
      'Connection with independent local professionals for targeted air or surface sampling',
      'Indoor-versus-outdoor baseline air comparisons collected by testing technicians',
      'Third-party accredited laboratory analysis to identify mold spore groups',
      'Clear explanation of lab results alongside moisture and visual inspection findings',
    ],
    angleSection: {
      heading: 'Sampling Options & Important Limitations',
      paragraphs: [
        'Independent technicians typically select between two primary methods depending on what your {city} property needs: spore-trap air cassettes (paired with an outdoor control sample) or direct surface swab/tape lifts on suspicious staining.',
      ],
      bullets: [
        'Air samples capture airborne spores present during a short collection window and can fluctuate with HVAC operation or open windows',
        'Surface swabs identify spore types on a specific spot, but cannot measure air quality elsewhere in the building',
        'Laboratory spore reports are building-science data—neither The Dome nor lab technicians provide medical diagnoses',
      ],
    },
    methodsNote:
      'Sample collection methods (such as calibrated air-pump cassettes, bulk samples, or sterile surface swabs) depend on the independent testing specialist assigned to your property and third-party laboratory chain-of-custody protocols.',
    afterInspection: {
      heading: 'What happens after sampling and lab results?',
      body: 'Once accredited laboratory results return, findings help clarify whether elevated indoor spore counts justify locating hidden moisture, adjusting ventilation, or scoping cleanup. Any proposed mitigation or remediation work should be explained in a clear written scope before it begins.',
    },
    considerations: [
      'Mold testing alone does not locate moisture sources; pairing it with a visual mold inspection is often recommended',
      'Independent third-party laboratory turnaround time varies depending on sample volume',
      'Neither The Dome nor lab reports diagnose medical symptoms or health conditions',
    ],
    faqs: [
      {
        q: 'When should homeowners in Oakwood, OH request mold testing?',
        a: 'Mold testing is helpful when there is a persistent musty smell with no visible growth, during a home purchase, or to confirm conditions after independent contractors complete mold remediation.',
      },
      {
        q: 'Does The Dome perform the lab testing directly?',
        a: 'The Dome Mold Removal Experts is a referral service that connects property owners with independent local testing and inspection professionals who work with accredited laboratories.',
      },
      {
        q: 'How is mold testing different from a visual mold inspection?',
        a: 'A visual inspection looks for visible mold, water staining, and moisture sources. Mold testing collects air or surface samples for laboratory analysis to report spore counts and sample categories.',
      },
    ],
    relatedGuideSlugs: [
      'mold-testing-vs-mold-inspection-difference',
      'what-happens-during-professional-mold-inspection',
      'mold-inspection-faqs',
    ],
  },
  {
    slug: 'mold-removal',
    corePath: '/mold-removal',
    coreSeoTitle: 'Mold Removal Services & Local Contractor Referrals | Miami Valley',
    coreH1: 'Physical Mold Removal by Independent Local Contractors',
    coreMetaDescription:
      'Connect with independent local contractors for targeted mold removal from affected drywall, framing, and lower-level materials across Dayton and the Miami Valley.',
    comboTitleTemplate: 'Mold Removal in {locShort} | Affected Material Cleanup',
    comboMetaTemplate:
      'Planning mold removal in {city}? Connect with independent contractors to assess damaged porous materials, removal scope, and moisture prevention steps.',
    comboH1Template: 'Mold Removal in {locShort}',
    name: 'Mold Removal',
    shortName: 'Mold Removal',
    ctaLabel: 'Call for Mold Removal',
    icon: 'Sparkles',
    image:
      'https://images.pexels.com/photos/4099092/pexels-photo-4099092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'An independent contractor in protective gear cleans and treats an interior surface during mold removal work in Oakwood, Ohio',
    summary:
      'Get connected with independent local mold removal contractors who physically remove visible mold growth from affected surfaces while helping address underlying moisture conditions.',
    description:
      'Mold removal is the physical removal of visible mold growth from affected surfaces and building materials. The Dome Mold Removal Experts operates as a referral service connecting Oakwood and Miami Valley property owners with qualified independent contractors who handle residential and commercial mold removal—from basement framing and drywall to structural surfaces. We do not directly perform physical removal or remediation work; callers are connected directly with independent local professionals to review scope and estimates.',
    introParagraphs: [
      'When visible mold has penetrated porous drywall, carpet padding, baseboards, or stored items in {city}, household wiping rarely solves the underlying problem—and scrubbing without preparation can stir dormant spores throughout living spaces.',
      'The Dome Mold Removal Experts connects property owners in {city} directly with independent local mold removal contractors to review affected materials, containment needs, and safe disposal plans rather than performing removal directly.',
    ],
    scopeBoundary:
      'Focuses on physical contractor removal of visible mold on affected materials; larger contaminated zones requiring negative-air containment chambers fall under Mold Remediation.',
    concernsHeading: 'Situations calling for physical mold removal in {city}',
    concerns: [
      'Visible mold on drywall, trim, framing, or basement walls',
      'Mold returning after surface cleaning',
      'Mold behind or under materials following a water event',
      'Mold in a basement, crawlspace, or attic',
    ],
    workPerformed: [
      'Referral to independent contractors experienced in physical mold removal',
      'Safe removal and disposal of porous materials that cannot be salvaged',
      'Targeted cleaning of adjacent accessible surfaces by local remediation technicians',
      'Coordination with moisture identification so underlying dampness can be addressed',
    ],
    angleSection: {
      heading: 'Material Removal & Project Planning',
      paragraphs: [
        'Effective project planning separates materials that can be cleaned structurally from compromised porous finishes that should be removed and bagged safely during a {city} removal job.',
      ],
      bullets: [
        'Porous items such as saturated drywall, fiberglass batts, and cardboard typically require controlled removal',
        'Solid wood studs, joists, and masonry are often evaluated for scraping, HEPA vacuuming, and damp-wiping',
        'Planning work-zone access, occupant occupancy timing, and moisture shut-off before tearing out materials',
      ],
    },
    methodsNote:
      'Physical removal steps—including sealed waste bagging, HEPA surface vacuuming, or localized poly isolation—vary with project size and are determined by the independent local contractor providing your on-site estimate.',
    afterInspection: {
      heading: 'What happens after material removal scoping?',
      body: 'Your assigned contractor outlines which materials can be saved, which sections need replacement after drying, and what moisture source must stay fixed. Any proposed removal work should be explained in a written scope before it begins.',
    },
    considerations: [
      'The Dome is a referral service connecting homeowners with independent local contractors who perform removal work',
      'The underlying moisture source must be corrected to prevent mold recurrence',
      'Physical mold removal is separate from laboratory species testing',
    ],
    faqs: [
      {
        q: 'Who performs the physical mold removal work?',
        a: 'The Dome Mold Removal Experts is a referral service connecting Oakwood and Miami Valley property owners with independent local contractors who perform the on-site mold removal and cleanup.',
      },
      {
        q: 'What is the difference between mold removal and mold remediation?',
        a: 'Mold removal focuses on physically removing visible mold from affected surfaces. Mold remediation is a broader contractor process including containment, filtration, removal, cleaning, and moisture-source correction.',
      },
      {
        q: 'Do I need to leave my home during mold removal?',
        a: 'Occupancy recommendations depend on the work scope and containment setup. The independent contractor assigned to your estimate will review containment and safety protocols directly with you.',
      },
      {
        q: 'Will the mold come back after removal?',
        a: 'Mold can return if the underlying moisture source is not fixed. Contractors and inspectors help identify the moisture problem so it can be corrected alongside removal.',
      },
    ],
    relatedGuideSlugs: [
      'recognize-mold-after-water-damage',
      'causes-of-mold-growth-ohio-basements',
      'water-damage-and-mold-guide',
    ],
  },
  {
    slug: 'mold-remediation',
    corePath: '/mold-remediation',
    coreSeoTitle: 'Mold Remediation & Containment Contractors | Dayton & Oakwood, OH',
    coreH1: 'Full Mold Remediation & Containment Services',
    coreMetaDescription:
      'Connect with independent local mold remediation contractors for negative-air containment, HEPA air filtration, damaged material removal, and moisture resolution.',
    comboTitleTemplate: 'Mold Remediation in {locShort} | Containment & Cleanup',
    comboMetaTemplate:
      'Need full mold remediation in {city}? Independent contractors manage containment barriers, HEPA filtration, damaged material removal, and moisture resolution.',
    comboH1Template: 'Mold Remediation in {locShort}',
    name: 'Mold Remediation',
    shortName: 'Mold Remediation',
    ctaLabel: 'Call for Mold Remediation',
    icon: 'ShieldCheck',
    image:
      'https://images.pexels.com/photos/4098000/pexels-photo-4098000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'An independent remediation technician performs containment and treatment work inside an Oakwood, Ohio residential room',
    summary:
      'Connect with independent local mold remediation contractors for full containment, damaged material removal, air scrubbing, surface treatment, and moisture-source resolution.',
    description:
      'Mold remediation is a structured process broader than surface removal alone. It addresses the contaminated work zone, containment to limit cross-contamination, safe removal of compromised porous materials, detailed surface cleaning, and addressing the moisture source that allowed mold to establish. The Dome Mold Removal Experts connects Oakwood, Dayton, and Miami Valley property owners with independent local remediation contractors equipped for residential and commercial projects—from flooded basements to affected drywall and framing. Because The Dome is a referral service, independent contractors inspect the scope, provide estimates, and perform all physical remediation work.',
    introParagraphs: [
      'When mold covers multiple rooms, spreads through finished wall cavities, or affects occupied living spaces in {city}, structured remediation goes beyond wiping surfaces—prioritizing airflow control, safe isolation, and moisture repair so the issue does not bounce back.',
      'We connect property owners across {city} directly with independent local remediation contractors who establish containment protocols, evaluate building materials, and handle physical cleanup under an itemized estimate.',
    ],
    scopeBoundary:
      'Multi-step contractor remediation using containment and HEPA air filtration for wider interior contamination; initial moisture diagnosis sits under Mold Inspection & Moisture Inspection.',
    concernsHeading: 'When full remediation is typically considered in {city}',
    concerns: [
      'A significant water event followed by mold growth',
      'Mold affecting multiple rooms or building materials',
      'Mold in occupied or finished living spaces',
      'A recurring mold problem that basic cleaning has not resolved',
    ],
    workPerformed: [
      'Matching property owners with independent local remediation specialists',
      'Work-zone containment and airflow control set up by independent contractors',
      'Removal and disposal of mold-damaged materials that cannot be saved',
      'Cleaning of affected structural materials paired with moisture-source guidance',
    ],
    angleSection: {
      heading: 'Containment, Moisture Correction & Post-Work Verification',
      paragraphs: [
        'A reliable remediation plan treats containment, dampness repair, and post-work verification as linked stages rather than rushing straight to tear-out or fogging.',
      ],
      bullets: [
        'Isolating active work rooms with poly barriers and controlled airflow to help protect clean rooms',
        'Coordinating plumbing, drainage, or ventilation repairs before closing walls back up',
        'Optional third-party post-remediation clearance sampling to verify airborne conditions afterward',
      ],
    },
    methodsNote:
      'Containment barriers, air scrubbers, and cleaning methods vary based on square footage and construction layout and are specified directly by the independent remediation contractor assigned to your {city} property.',
    afterInspection: {
      heading: 'What happens after a remediation estimate and cleanup?',
      body: 'Before contractors mobilize, any proposed containment, tear-out, drying, or antimicrobial treatment steps should be explained in a written scope—followed by ensuring the underlying moisture source stays corrected before reconstruction begins.',
    },
    considerations: [
      'The Dome connects callers with independent local contractors and does not directly perform remediation work',
      'Remediation is a multi-step contractor process whose scope depends on affected materials',
      'Moisture sources must be repaired or corrected so conditions do not return',
    ],
    faqs: [
      {
        q: 'Does The Dome directly perform mold remediation?',
        a: 'No. The Dome Mold Removal Experts acts as a referral service connecting homeowners and property owners with independent local mold remediation contractors who perform estimates and remediation work.',
      },
      {
        q: 'What does a typical mold remediation scope include?',
        a: 'Independent remediation contractors typically establish containment, remove damaged non-salvageable materials, clean structural surfaces, and identify the moisture source driving growth.',
      },
      {
        q: 'How long does mold remediation take?',
        a: 'Timeline depends on affected square footage, drying needs, and materials involved. Your assigned local contractor outlines schedule expectations during the on-site estimate.',
      },
      {
        q: 'Will remediation stop the mold from coming back?',
        a: 'When independent contractors remove affected growth and you correct the underlying moisture issue (plumbing leak, seepage, or humidity), recurrence risk drops substantially.',
      },
    ],
    relatedGuideSlugs: [
      'recognize-mold-after-water-damage',
      'prevent-recurring-moisture-problems-crawl-spaces',
      'basement-moisture-guide',
    ],
  },
  {
    slug: 'moisture-inspection',
    corePath: '/moisture-inspection',
    coreSeoTitle: 'Moisture Detection & Water Intrusion Inspection | Dayton Area',
    coreH1: 'Moisture Detection & Water Intrusion Inspection',
    coreMetaDescription:
      'Stop leaks and mold after water damage with independent moisture detection and water intrusion inspection services across Oakwood, Dayton, and the Miami Valley.',
    comboTitleTemplate: 'Moisture & Water Intrusion Inspection in {locShort} | Leak Tracing',
    comboMetaTemplate:
      'Tracing damp walls, roof leaks, or water intrusion in {city}? Connect with independent inspectors pinpointing moisture sources before mold returns.',
    comboH1Template: 'Moisture & Water Intrusion Inspection in {locShort}',
    name: 'Moisture Inspection',
    shortName: 'Moisture Inspection',
    ctaLabel: 'Call for Moisture Inspection',
    icon: 'Droplets',
    image:
      'https://images.pexels.com/photos/8293646/pexels-photo-8293646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'An independent inspector checks a floor vent during a moisture inspection in an Oakwood, Ohio home',
    summary:
      'Targeted moisture detection and water intrusion inspection to trace roof flashing, grading, plumbing leaks, and mold after water damage back to the source.',
    description:
      'A moisture inspection combines indoor moisture detection with thorough water intrusion inspection so property owners stop leaks before mold spreads. When homeowners deal with staining, condensation, or potential mold after water damage, independent inspectors in our network check accessible plumbing lines, roof edges, flashing, window trim, exterior grading, gutters, foundation walls, and crawlspaces to pinpoint entry paths.',
    introParagraphs: [
      'Removing visible staining without stopping how water enters a structure almost guarantees recurring dampness. In {city}, roof flashing gaps, overflowing gutters, negative yard slope, and concealed supply-line drips frequently keep wall cavities wet long after storm puddles disappear.',
      'The Dome Mold Removal Experts connects homeowners and property managers in {city} with independent inspectors who focus on tracing moisture migration and storm-driven water intrusion back to likely exterior or plumbing causes.',
    ],
    scopeBoundary:
      'Traces exterior rainwater entry, grading, plumbing leaks, and interior condensation sources; separate from mold species lab testing (Mold Testing) or localized mold cleanup (Mold Removal).',
    concernsHeading: 'Water intrusion and dampness signs evaluated in {city}',
    concerns: [
      'Damp or wet basement walls and floors during or after storms',
      'Water stains or peeling paint near windows, ceilings, flashing, or pipes',
      'Condensation on windows, pipes, or HVAC ductwork',
      'Gutter overflow, poor grading, or ice-dam melt leaking indoors',
      'A past leak, flood, or overflow that may not have dried inside wall cavities',
    ],
    workPerformed: [
      'Evaluation of interior plumbing zones, basements, crawlspaces, and attics for hidden dampness',
      'Tracing roof flashing, window seals, foundation cracks, and gutter grading back to entry points',
      'Checking humidity, condensation, and structural ventilation balance across accessible spaces',
      'Clear walkthrough of entry points so repairs address causes before remediation begins',
    ],
    angleSection: {
      heading: 'Flooding, Roof Flashing & Plumbing Water Intrusion',
      paragraphs: [
        'Whether moisture followed a sudden pipe burst or builds gradually during Ohio rainstorms, distinguishing active plumbing, roof, and exterior water intrusion prevents tearing out unaffected walls in {city}.',
      ],
      bullets: [
        'Tracing stained window trim, chimney edges, and roof valleys after wind-driven rain',
        'Checking sump backups, cove-joint seepage, and downspout discharge next to foundation walls',
        'Identifying hidden subfloor or wall dampness left behind after plumbing overflows',
      ],
    },
    methodsNote:
      'Inspectors review exterior drainage paths alongside interior staining patterns; where carried by the independent specialist, handheld moisture meters help verify whether damp drywall or framing has dried cleanly.',
    afterInspection: {
      heading: 'What happens after a moisture evaluation?',
      body: 'Findings point toward targeted plumbing, roofing, or exterior drainage fixes before cosmetic repairs or remediation. Any proposed drying, tear-out, or mold remediation should be explained in a clear written scope before work starts.',
    },
    considerations: [
      'Visual moisture tracing identifies likely entry paths; active concealed wall leaks may require targeted opening by licensed plumbing or roofing trades',
      'Moisture inspection focuses on water sources rather than laboratory spore counts',
      'Stopping the water entry first prevents repeat damage and recurring mold',
    ],
    faqs: [
      {
        q: 'Why focus on moisture and water intrusion instead of only cleaning visible mold?',
        a: 'Mold cannot grow without sustained dampness. Finding and fixing how rainwater, seepage, or condensation enters the structure keeps mold from returning after contractor cleanup.',
      },
      {
        q: 'Can an inspection trace a rain leak even when the wall looks dry today?',
        a: 'Yes. Inspectors check staining halos, efflorescence mineral deposits, warped trim, flashing gaps, and clogged drainage paths left behind after storm intrusion.',
      },
      {
        q: 'Should water entry be repaired before drywall or mold remediation?',
        a: 'Yes. Repairing drywall or removing surface mold before stopping an active roof, flashing, or foundation leak allows moisture to return rapidly.',
      },
    ],
    relatedGuideSlugs: [
      'recognize-mold-after-water-damage',
      'prevent-recurring-moisture-problems-crawl-spaces',
      'water-damage-and-mold-guide',
    ],
  },
  {
    slug: 'basement-mold-inspection',
    corePath: '/basement-mold-inspection',
    coreSeoTitle: 'Basement Mold Inspection & Moisture Problems | Miami Valley',
    coreH1: 'Basement Mold Inspection & Moisture Assessment',
    coreMetaDescription:
      'Resolve basement moisture problems with an independent basement mold inspection and basement mold assessment across Oakwood, Dayton, and nearby communities.',
    comboTitleTemplate: 'Basement Mold Inspection in {locShort} | Cellar & Crawlspace Checks',
    comboMetaTemplate:
      'Dealing with damp basement walls, musty odors, or seepage in {city}? Schedule an independent basement mold inspection through The Dome at 937-967-3264.',
    comboH1Template: 'Basement Mold Inspection in {locShort}',
    name: 'Basement Mold Inspection',
    shortName: 'Basement Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'ArrowDownToLine',
    image:
      'https://images.pexels.com/photos/32497163/pexels-photo-32497163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'An independent inspector examines a basement and crawlspace area during a basement mold inspection in Oakwood, Ohio',
    summary:
      'Focused basement mold assessment and crawlspace evaluations helping homeowners solve basement moisture problems, foundation seepage, and finished lower-level humidity.',
    description:
      'A basement mold inspection focuses on the below-grade areas most vulnerable to recurring basement moisture problems across the Miami Valley. Independent local specialists perform a careful basement mold assessment examining foundation walls, floor joists, crawlspaces, sump areas, and finished lower-level rooms where accessible for visible growth, seepage, and humidity conditions.',
    introParagraphs: [
      'Below-grade foundations in {city} sit directly against cool clay soil while humid Ohio air enters through bulkhead doors, utility penetrations, or unsealed crawlspaces—making basements and lower levels the first place musty odors typically appear.',
      'We connect {city} homeowners with independent local inspectors who examine masonry walls, floor joists, sump zones, and accessible finished basement perimeters to pinpoint dampness before it damages framing or flooring.',
    ],
    scopeBoundary:
      'Targets below-grade foundations, sill plates, joists, sump zones, and finished basement perimeters; overhead roof framing sits under Attic Mold Inspection.',
    concernsHeading: 'Common basement and crawlspace signs in {city}',
    concerns: [
      'A musty smell coming up from the basement or crawlspace',
      'Visible mold on basement walls, floors, joists, or stored items',
      'Damp or wet basement walls and floors',
      'Efflorescence or white mineral deposits on foundation walls',
      'A finished basement with a past water event',
    ],
    workPerformed: [
      'Visual inspection of basement and crawlspace areas for visible mold and dampness',
      'Evaluation of seepage, condensation, vapor barriers, and ventilation conditions',
      'Check of exposed framing, joists, and accessible finished basement perimeters',
      'Referral guidance if laboratory mold testing or contractor remediation is needed',
    ],
    angleSection: {
      heading: 'Humidity, Exterior Seepage & Musty Lower-Level Odors',
      paragraphs: [
        'Identifying whether basement moisture in {city} stems from summer humidity condensation, exterior storm seepage, or plumbing leaks avoids spending money on fixes that target the wrong cause.',
      ],
      bullets: [
        'Distinguishing white chalky efflorescence salts left by seepage from active biological growth',
        'Evaluating finished drywall baseboards, mechanical closets, and carpeted slabs for concealed dampness',
        'Checking unvented or dirt-floor crawlspaces under home additions lacking vapor barriers',
      ],
    },
    methodsNote:
      'Basement inspections center on accessible sill plates, joists, sump crocks, and perimeter walls. Independent contractors may check surface moisture along lower baseboards or walls using standard handheld meters when needed.',
    afterInspection: {
      heading: 'What happens after a basement inspection?',
      body: 'Inspection notes clarify whether exterior grading, dehumidification, waterproofing, material tear-out, or contractor cleanup makes sense first. Any proposed waterproofing or remediation work should be outlined in a written scope before starting.',
    },
    considerations: [
      'Mold behind finished basement drywall or under flooring may require targeted access',
      'A visual inspection cannot identify mold species without separate laboratory testing',
      'Foundation seepage often requires drainage, grading, or waterproofing alongside cleanup',
    ],
    faqs: [
      {
        q: 'Why are Oakwood basements prone to mold?',
        a: 'Older Oakwood foundations and shaded lots often experience cool below-grade walls, humid summer air condensation, and storm seepage—creating ideal conditions for basement mold when airflow is limited.',
      },
      {
        q: 'Can you inspect a finished basement?',
        a: 'Independent inspectors evaluate all accessible areas of a finished basement and look for moisture clues along baseboards and mechanical closets.',
      },
      {
        q: 'What is efflorescence and is it mold?',
        a: 'Efflorescence is a white chalky mineral deposit left as water seeps through masonry and evaporates. It is not mold, but it proves moisture is passing through foundation walls.',
      },
    ],
    relatedGuideSlugs: [
      'causes-of-mold-growth-ohio-basements',
      'prevent-recurring-moisture-problems-crawl-spaces',
      'basement-moisture-guide',
    ],
  },
  {
    slug: 'attic-mold-inspection',
    corePath: '/attic-mold-inspection',
    coreSeoTitle: 'Attic Mold & Attic Moisture Inspection | Roof Leak Mold Concerns',
    coreH1: 'Attic Mold & Moisture Inspection',
    coreMetaDescription:
      'Investigate dark decking stains, attic moisture inspection issues, and roof leak mold concerns with independent inspectors in Oakwood and Dayton, OH.',
    comboTitleTemplate: 'Attic Mold Inspection in {locShort} | Roof Sheathing & Ventilation',
    comboMetaTemplate:
      'Seeing darkened roof decking or attic condensation in {city}? Connect with local inspectors evaluating roof leaks, bath-fan venting, and airflow at 937-967-3264.',
    comboH1Template: 'Attic Mold Inspection in {locShort}',
    name: 'Attic Mold Inspection',
    shortName: 'Attic Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'Home',
    image:
      'https://images.pexels.com/photos/8082327/pexels-photo-8082327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'An attic space evaluated for roof sheathing staining, condensation, and ventilation during an attic mold inspection in Oakwood, Ohio',
    summary:
      'Dedicated attic moisture inspection and overhead decking checks addressing condensation, improperly vented bath fans, and roof leak mold concerns.',
    description:
      'An attic mold inspection combines overhead structural viewing with an attic moisture inspection where warm indoor humidity condenses against cold roof decking. Whether properties face bathroom fan exhaust discharge into the attic or roof leak mold concerns around flashing and valleys, independent local inspectors evaluate accessible sheathing, rafters, soffit vents, and insulation coverage.',
    introParagraphs: [
      'Overhead attics stay out of sight day to day, allowing bath-fan exhaust steam, winter frost condensation, or slow roof-flashing drips in {city} homes to darken roof decking quietly across several seasons.',
      'Through our local referral network, independent inspectors check accessible rafters, sheathing boards, soffit baffles, and exhaust duct routing so {city} homeowners understand both ventilation causes and remediation scope.',
    ],
    scopeBoundary:
      'Evaluates overhead roof decking, rafters, soffit/ridge baffles, and bath-fan exhaust ducts; lower foundation dampness sits under Basement Mold Inspection.',
    concernsHeading: 'Attic warning signs evaluated across {city}',
    concerns: [
      'Dark staining or discoloration on the underside of roof sheathing',
      'A musty smell coming from the attic or upper floor',
      'Frost or condensation visible on roof boards or nails in cold weather',
      'Bathroom or kitchen fans that discharge into the attic instead of outside',
      'Insufficient, blocked, or unbalanced attic ventilation',
    ],
    workPerformed: [
      'Visual inspection of accessible attic decking, rafters, and insulation',
      'Identification of sheathing discoloration, condensation, and frost patterns',
      'Check of soffit/ridge vents and bathroom exhaust duct routing',
      'Findings walkthrough to coordinate ventilation repairs or remediation contractors',
    ],
    angleSection: {
      heading: 'Roof Leaks, Condensation & Attic Ventilation Balance',
      paragraphs: [
        'Inspecting an attic focuses on separating localized exterior rain entry—around chimneys, dormers, and plumbing boots—from widespread north-slope condensation caused by warm indoor air leaking overhead in {city}.',
      ],
      bullets: [
        'Checking whether bath and kitchen exhaust flex ducts terminate outdoors rather than inside insulation',
        'Reviewing soffit intake vents blocked by blown insulation alongside ridge or gable exhaust balance',
        'Spotting halo water stains near chimney flashing, skylights, and roof valleys',
      ],
    },
    methodsNote:
      'Attic inspections are conducted safely from accessible catwalks, pull-down stairs, or exposed framing using visual checks and standard inspection lighting rather than disturbing insulated concealed cavities unnecessarily.',
    afterInspection: {
      heading: 'What happens after an attic evaluation?',
      body: 'Results clarify whether roof flashing repair, proper exterior bath-fan ducting, soffit baffle upgrades, or localized decking cleaning is needed first. Any proposed ventilation or treatment work should be detailed in a written scope before starting.',
    },
    considerations: [
      'Hidden framing behind finished knee-walls or thick blown insulation may have limited visibility',
      'Visual attic checks do not identify species without separate sampling',
      'Fixing exhaust ducting and attic airflow is essential or attic mold returns',
    ],
    faqs: [
      {
        q: 'Why do attics get mold?',
        a: 'Warm moist household air leaks upward into cold attic framing. Without balanced intake and exhaust ventilation, moisture condenses on wood decking and supports mold growth.',
      },
      {
        q: 'Can bathroom fans cause attic mold?',
        a: 'Yes. Exhaust fans venting directly into the attic dump humid shower moisture onto cold roof sheathing—one of the most common findings in attic mold inspections.',
      },
      {
        q: 'Will fixing ventilation remove existing attic mold?',
        a: 'Improving ventilation stops new condensation, while independent mold remediation contractors handle safe physical cleaning or treatment of stained roof decking.',
      },
    ],
    relatedGuideSlugs: [
      'signs-your-attic-has-mold-or-moisture-problem',
      'what-happens-during-professional-mold-inspection',
      'mold-prevention-guide',
    ],
  },
  {
    slug: 'indoor-air-quality-inspection',
    corePath: '/indoor-air-quality',
    coreSeoTitle: 'Indoor Air Quality Inspection & Musty Smell in House | Miami Valley',
    coreH1: 'Indoor Air Quality Inspection & Musty Odor Evaluation',
    coreMetaDescription:
      'Investigate a persistent musty smell in house and indoor mold concerns with an independent indoor air quality inspection in Oakwood and Dayton, OH.',
    comboTitleTemplate: 'Indoor Air Quality Inspection in {locShort} | Musty Odor & Airflow',
    comboMetaTemplate:
      'Dealing with stale or musty indoor air in {city}? Learn how building moisture checks and optional accredited lab air testing work together.',
    comboH1Template: 'Indoor Air Quality Inspection in {locShort}',
    name: 'Indoor Air Quality Inspection',
    shortName: 'Indoor Air Quality',
    ctaLabel: 'Call About Indoor Air Quality',
    icon: 'Wind',
    image:
      'https://images.pexels.com/photos/11538226/pexels-photo-11538226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Close-up view of an HVAC air duct during an indoor air quality inspection in an Oakwood, Ohio home',
    summary:
      'Visual indoor air quality inspection connecting homeowners with specialists when a musty smell in house or indoor mold concerns point to HVAC airflow or hidden humidity.',
    description:
      'An indoor air quality inspection connects Oakwood and Miami Valley property owners with independent specialists when a stubborn musty smell in house or broader indoor mold concerns warrant whole-building evaluation. Because air circulates from basements and crawlspaces through HVAC closets, inspectors review airflow paths, humidity sources, and optional air testing referrals without making medical diagnoses.',
    introParagraphs: [
      'When rooms feel stale or smell musty with no obvious wet wall, the issue often travels upward from a damp basement, unsealed crawlspace, or condensation near air-handling closets into central ductwork throughout {city} properties.',
      'Independent specialists in our referral network evaluate how building humidity, ventilation, and accessible HVAC paths interact—and can coordinate separate third-party air sampling if quantitative spore comparison is needed.',
    ],
    scopeBoundary:
      'Examines HVAC closets, ductwork, airflow pathways, and building-wide humidity contributing to stuffy or musty air; lab air sampling is coordinated separately via Mold Testing.',
    concernsHeading: 'Indoor air and odor conditions reviewed in {city}',
    concerns: [
      'A persistent musty or stale smell in the home',
      'Visible mold growth in any area of the property',
      'HVAC or ductwork conditions that may distribute moisture or odors',
      'High indoor humidity or condensation on windows and surfaces',
      'Concerns about indoor air after a water leak or basement flood',
    ],
    workPerformed: [
      'Visual check of accessible HVAC closets, duct connections, and ventilation paths',
      'Identification of hidden humidity sources and musty odor contributors',
      'Coordination with independent mold testing specialists if lab air sampling is wanted',
      'Practical findings walkthrough without medical claims or sales pressure',
    ],
    angleSection: {
      heading: 'Sampling Options, Airflow & Result Interpretation',
      paragraphs: [
        'Lasting indoor air improvement starts by finding moisture and stack-effect pathways in {city}, rather than spraying fragrance over an odor source or ordering unnecessary tests blindly.',
      ],
      bullets: [
        'Inspecting lower-level return leaks that draw crawlspace or basement air into living rooms',
        'Coordinating optional indoor-versus-outdoor spore-trap air comparisons through independent labs when requested',
        'Providing clear, non-medical interpretation focused solely on building moisture and filtration fixes',
      ],
    },
    methodsNote:
      'Initial indoor air evaluations focus on visual HVAC-closet, return-plenum, and humidity reviews. Air cassette sampling requires separate testing equipment coordinated through independent testing specialists when requested.',
    afterInspection: {
      heading: 'What happens after an indoor air assessment?',
      body: 'Findings indicate whether dehumidification, return-duct sealing, optional lab air testing, or localized mold removal should come next. Any proposed HVAC cleaning or remediation work should be provided in a clear written scope beforehand.',
    },
    considerations: [
      'A visual indoor air quality inspection does not include lab air sampling unless separately requested',
      'Inspectors evaluate building conditions, not medical symptoms or health diagnoses',
      'Resolving moisture and ventilation issues is key to lasting indoor air improvement',
    ],
    faqs: [
      {
        q: 'Does an indoor air quality inspection include lab air testing?',
        a: 'A visual building inspection looks for moisture, HVAC, and mold-supporting conditions. Separate laboratory air sampling can be requested through our testing referral network—call to discuss options.',
      },
      {
        q: 'Can you tell me if the indoor air is causing health symptoms?',
        a: 'No. Neither The Dome nor local home inspectors diagnose medical conditions. We help identify building moisture and mold factors and coordinate laboratory sampling if needed.',
      },
      {
        q: 'What building conditions affect indoor air?',
        a: 'Damp basements, condensation around HVAC equipment, restricted ventilation, and active water leaks commonly drive musty odors and indoor air concerns.',
      },
    ],
    relatedGuideSlugs: [
      'mold-testing-vs-mold-inspection-difference',
      'what-happens-during-professional-mold-inspection',
      'mold-prevention-guide',
    ],
  },
  {
    slug: 'commercial-mold-inspection',
    corePath: '/commercial-mold-inspection',
    coreSeoTitle: 'Commercial Mold Inspection & Office Mold Assessment | Dayton, OH',
    coreH1: 'Commercial Mold Inspection & Office Mold Assessment',
    coreMetaDescription:
      'Connect facility managers and property owners with independent specialists for commercial mold inspection, office mold assessment, and commercial mold remediation scoping in Dayton and Moraine, OH.',
    comboTitleTemplate: 'Commercial Mold Inspection in {locShort} | Office & Facility Assessment',
    comboMetaTemplate:
      'Managing an office suite, retail unit, or warehouse in {city}? Connect with independent specialists for commercial mold assessment and remediation quotes at 937-967-3264.',
    comboH1Template: 'Commercial Mold Inspection in {locShort}',
    comboLocationSlugs: ['dayton-oh', 'moraine-oh'],
    name: 'Commercial Mold Inspection',
    shortName: 'Commercial Mold Inspection',
    ctaLabel: 'Call for Commercial Inspection',
    icon: 'Building2',
    image:
      'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    imageAlt:
      'An independent building inspector evaluates exterior and structural envelope conditions during a commercial mold inspection',
    summary:
      'Connecting office managers, landlords, and facility owners with independent specialists for commercial mold inspection, office mold assessment, and commercial mold remediation estimates.',
    description:
      'A commercial mold inspection evaluates non-residential and multi-unit structures—including office suites, retail spaces, warehouse corridors, and medical or professional buildings across the Dayton and Moraine commercial corridor. Whether you need an objective office mold assessment after a ceiling tile leak, flat-roof ponding evaluation, or commercial mold remediation scoping by independent contractors, our referral network matches facility contacts directly by phone without automated delays.',
    introParagraphs: [
      'Moisture issues in {city} office buildings, retail spaces, and warehouse suites rarely behave like residential rooms—often traveling above suspended ceiling grids, inside shared mechanical chases, or beneath low-slope roof assemblies.',
      'The Dome Mold Removal Experts connects facility contacts and commercial landlords in {city} directly with independent local inspectors and commercial mold remediation contractors rather than routing requests through slow web queues.',
    ],
    scopeBoundary:
      'Built specifically for offices, retail units, warehouses, and multi-tenant commercial buildings in Dayton and Moraine; single-family residential walkthroughs sit under Mold Inspection.',
    concernsHeading: 'Commercial and office mold scenarios evaluated in {city}',
    concerns: [
      'Stained suspended ceiling tiles or drywall around commercial HVAC diffusers',
      'Flat roof membrane leaks and parapet flashing drips in office or warehouse suites',
      'Musty suite odors impacting tenant spaces, breakrooms, or basement mechanical rooms',
      'Pre-lease due diligence or moisture documentation after commercial plumbing overflows',
    ],
    workPerformed: [
      'Structured visual commercial mold inspection covering accessible suites, mechanical closets, and roof-access signs',
      'Targeted office mold assessment to map moisture boundaries before engaging licensed trades',
      'Coordination with independent commercial mold remediation contractors for containment estimates',
      'Optional third-party lab air sampling referrals for multi-suite or tenant documentation',
    ],
    angleSection: {
      heading: 'Office Suites, Flat Roofs & Commercial Remediation Planning',
      paragraphs: [
        'Coordinating work inside occupied commercial properties in {city} requires separating active building-envelope leaks from isolated suite spills so tenant disruption stays minimal.',
      ],
      bullets: [
        'Reviewing drop-ceiling plenums, condensate drain pans, and exterior parapet flashing lines',
        'Coordinating off-hours inspection walkthroughs or multi-zone containment scheduling with independent contractors',
        'Documenting clear scope separation between facility maintenance repairs and contractor mold remediation',
      ],
    },
    methodsNote:
      'Commercial walkthroughs cover accessible interior suites, ceiling grid openings, mechanical closets, and visible drainage points; specialized testing equipment or lift access varies by independent contractor and property access.',
    afterInspection: {
      heading: 'What happens after a commercial property walkthrough?',
      body: 'Findings help facility managers prioritize flat-roof, HVAC condensate, or plumbing repairs before interior finishes are restored. Any proposed commercial cleanup or containment work should be detailed in a written scope before mobilization.',
    },
    considerations: [
      'The Dome is a referral service; independent local inspectors and remediation contractors perform all on-site commercial work',
      'Complex multi-zone commercial HVAC chases may require coordination with facility maintenance personnel',
      'Resolving flat-roof drainage, HVAC condensate pans, or plumbing leaks is necessary before interior build-back',
    ],
    faqs: [
      {
        q: 'Which types of properties are covered under commercial mold inspection?',
        a: 'Independent specialists in our Dayton and Moraine network evaluate office suites, retail storefronts, multi-unit residential common areas, medical/professional offices, and warehouse spaces.',
      },
      {
        q: 'What happens after an office mold assessment finds moisture or growth?',
        a: 'Inspectors walk property managers through the likely moisture entry path and affected framing. When cleanup is needed, we connect you with independent commercial mold remediation contractors for formal containment quotes.',
      },
      {
        q: 'Can commercial mold inspections be scheduled outside peak business hours?',
        a: 'Call 937-967-3264 directly to discuss timing with independent local specialists; after-hours walkthrough availability depends on contractor schedules.',
      },
    ],
    relatedGuideSlugs: [
      'what-happens-during-professional-mold-inspection',
      'recognize-mold-after-water-damage',
      'mold-inspection-faqs',
    ],
  },
];

export const homeImages = {
  hero: 'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  heroAlt:
    'A local mold inspector wearing protective gear examines an interior wall in an Oakwood, Ohio home',
  inspector: 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  inspectorAlt:
    'An independent property inspector evaluates exterior conditions in the Oakwood, Ohio area',
  house: 'https://images.pexels.com/photos/8583638/pexels-photo-8583638.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  houseAlt: 'A detached residential property in the Oakwood and Miami Valley service area',
  room: 'https://images.pexels.com/photos/8146336/pexels-photo-8146336.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  roomAlt: 'Interior view of an unfinished room being assessed for moisture and mold conditions',
  cleanup: 'https://images.pexels.com/photos/4098000/pexels-photo-4098000.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  cleanupAlt: 'An independent remediation technician performs containment and treatment work inside a residential room',
};
