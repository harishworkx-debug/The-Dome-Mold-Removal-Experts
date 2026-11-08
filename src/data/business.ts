export const business = {
  name: 'The Dome Mold Removal Experts',
  category: 'Home Inspector',
  tagline: 'Professional Mold Inspection and Removal in Dayton, Ohio',
  addressLine: '2533 Far Hills Ave',
  addressCity: 'Dayton',
  addressState: 'OH',
  addressZip: '45419',
  addressCountry: 'United States',
  fullAddress: '2533 Far Hills Ave, Dayton, OH 45419, United States',
  phoneDisplay: '937-967-3264',
  phoneHref: 'tel:+19379673264',
  website: 'https://www.moldremoval-oakwood.com',
  existingUrl: 'http://www.moldremoval-oakwood.com/',
  googleMapsListing: 'https://maps.app.goo.gl/73PAk7wk8AxiMjCFA',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.407077397186!2d-84.1712002!3d39.7080334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884085abb3243c95%3A0x1172d25921c8b401!2sThe%20Dome%20Mold%20Removal%20Experts!5e0!3m2!1sen!2sin!4v1794106688599!5m2!1sen!2sin',
  geoLat: 39.7080334,
  geoLng: -84.1712002,
  primaryCity: 'Oakwood',
  primaryStateAbbr: 'OH',
  primaryCounty: 'Montgomery County',
  primaryRegion: 'Dayton',
  reviewCountExternal: 6,
  reviewListingUrl: 'https://maps.app.goo.gl/73PAk7wk8AxiMjCFA',
};

export type ServiceLocation = {
  slug: string;
  name: string;
  stateAbbr: string;
  county: string;
  blurb: string;
  concerns: string[];
};

export const locations: ServiceLocation[] = [
  {
    slug: 'oakwood-oh',
    name: 'Oakwood',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Oakwood is home to The Dome Mold Removal Experts, and many of our calls come from older, well-built homes in the area where seasonal humidity, finished basements, and mature tree cover can combine to create persistent moisture conditions worth inspecting.',
    concerns: [
      'Mature, shaded neighborhoods that limit sun-driven drying of exterior walls',
      'Finished basements used as living space where humidity can build unnoticed',
      'Older homes with original crawlspaces and limited vapor barriers',
    ],
  },
  {
    slug: 'dayton-oh',
    name: 'Dayton',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Dayton is our primary service market. From historic neighborhoods near downtown to the surrounding subdivisions, we talk with property owners about moisture, visible discoloration, and past water intrusion events that may warrant a closer look.',
    concerns: [
      'Historic homes with aging foundations prone to seepage',
      'Summer thunderstorms and ice-dam melt causing intermittent water intrusion',
      'Rental and investment properties where maintenance gaps can go unnoticed',
    ],
  },
  {
    slug: 'kettering-oh',
    name: 'Kettering',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Kettering residents call us about damp basements, musty odors, and moisture that appears after heavy rains. Many Kettering homes share the same Dayton-area clay soil conditions that keep basements and crawlspaces consistently damp.',
    concerns: [
      'Clay-heavy soil that holds moisture against foundation walls',
      'Homes with walkout basements where grading directs water inward',
      'Crawlspaces without proper ventilation or vapor barriers',
    ],
  },
  {
    slug: 'centerville-oh',
    name: 'Centerville',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Centerville homeowners reach out about finished lower levels and attics that are not ventilating well. We discuss the warning signs that justify a professional inspection and what an inspection does and does not cover.',
    concerns: [
      'Attic condensation from undersized or blocked ventilation',
      'Finished basements with concealed moisture behind walls',
      'Plumbing and appliance leaks that ran before being noticed',
    ],
  },
  {
    slug: 'beavercreek-oh',
    name: 'Beavercreek',
    stateAbbr: 'OH',
    county: 'Greene County',
    blurb:
      'In Beavercreek, calls often involve newer construction where water found its way in anyway, as well as larger homes with complex rooflines and multiple attic spaces. We walk property owners through what an inspection can assess.',
    concerns: [
      'Complex roof valleys and flashing details prone to slow leaks',
      'Newer homes with tight envelopes that trap interior humidity',
      'Basements tied to high local water tables',
    ],
  },
  {
    slug: 'miamisburg-oh',
    name: 'Miamisburg',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Miamisburg sits along the Great Miami River, and river-adjacent properties have distinct moisture profiles. We discuss how proximity to water and flood-prone areas relates to ongoing moisture and mold concerns.',
    concerns: [
      'River-adjacent properties with elevated groundwater and humidity',
      'Historic district homes with stone foundations and aging mortar',
      'Low-lying lots where stormwater pools near the foundation',
    ],
  },
  {
    slug: 'washington-township-oh',
    name: 'Washington Township',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Washington Township is a fast-growing suburban area south of Dayton. Many calls involve newer construction with finished basements and homes where landscaping and grading have shifted over time, directing water toward the foundation rather than away from it.',
    concerns: [
      'Newer subdivisions where settling and grading changes direct runoff inward',
      'Finished basements in tight-envelope homes that trap interior humidity',
      'Large lots with extensive landscaping that can channel stormwater unpredictably',
    ],
  },
  {
    slug: 'moraine-oh',
    name: 'Moraine',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Moraine is an industrial and residential community along the Great Miami River. Property owners call about a mix of older residential housing stock and commercial buildings where roof systems, drainage, and long-term moisture exposure are the primary concerns.',
    concerns: [
      'Flat and low-slope commercial roofs prone to ponding and slow leaks',
      'Older residential foundations with limited waterproofing',
      'Industrial-adjacent properties where runoff and drainage patterns are complex',
    ],
  },
  {
    slug: 'riverside-oh',
    name: 'Riverside',
    stateAbbr: 'OH',
    county: 'Montgomery County',
    blurb:
      'Riverside sits north of Dayton along the Stillwater and Great Miami rivers. As the name suggests, river proximity and flood-prone positioning shape the moisture concerns property owners face, from elevated groundwater to periodic flooding after heavy storms.',
    concerns: [
      'River-adjacent lots with recurring high groundwater and post-flood dampness',
      'Homes on slab foundations where moisture wicks upward through concrete',
      'Properties in flood-adjacent zones where drying after an event can be incomplete',
    ],
  },
  {
    slug: 'fairborn-oh',
    name: 'Fairborn',
    stateAbbr: 'OH',
    county: 'Greene County',
    blurb:
      'Fairborn is in Greene County, near Wright-Patterson Air Force Base. The mix of military housing, older neighborhoods, and newer developments produces a wide range of mold and moisture calls, from crawlspace humidity to roof and flashing concerns on larger homes.',
    concerns: [
      'Crawlspaces with inadequate ventilation and missing vapor barriers',
      'Military-era housing stock with aging mechanical systems and ventilation',
      'Larger newer homes with complex rooflines and multiple attic spaces',
    ],
  },
];

export type MoldService = {
  slug: string;
  name: string;
  shortName: string;
  ctaLabel: string;
  icon: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  concerns: string[];
  workPerformed: string[];
  considerations: string[];
  faqs: { q: string; a: string }[];
};

export const services: MoldService[] = [
  {
    slug: 'mold-inspection',
    name: 'Mold Inspection',
    shortName: 'Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'Search',
    image:
      'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A home inspector wearing protective gear examines an interior wall during a mold inspection in a Dayton, Ohio home',
    summary:
      'A visual, room-by-room inspection of your property for conditions that support mold growth and for visible signs of mold or moisture, performed by a home inspector who understands Dayton-area housing stock.',
    description:
      'A mold inspection is a visual, on-site assessment of your property. As a home inspector, The Dome Mold Removal Experts walks through accessible interior and exterior areas looking for visible mold growth, moisture intrusion, water staining, and the building conditions that allow mold to take hold. We look at basements, crawlspaces, attics, around plumbing, near windows and exterior doors, and anywhere humidity tends to collect. The inspection focuses on what can be seen and accessed, and on identifying the moisture sources that drive mold growth, because without a moisture source mold cannot persist. We discuss what we observe and what it may mean for your property, and we answer your questions on the spot. We do not diagnose health conditions, and a visual inspection alone cannot identify the specific species of mold present or whether any mold is toxigenic.',
    concerns: [
      'Visible discoloration or staining on walls, ceilings, or trim',
      'A persistent musty odor in one or more rooms',
      'Recent or past water intrusion from a leak, overflow, or storm',
      'Damp or humid basements and crawlspaces',
      'Condensation on windows, pipes, or ductwork',
    ],
    workPerformed: [
      'A visual walkthrough of accessible interior rooms, basement, crawlspace, and attic',
      'Identification of visible mold growth and the moisture sources that support it',
      'Assessment of building conditions that contribute to humidity and condensation',
      'An on-site discussion of findings and what they may mean for your property',
    ],
    considerations: [
      'A visual inspection cannot identify mold species or determine toxicity',
      'Mold hidden behind walls, under flooring, or inside cavities may not be visible without opening the assembly',
      'Testing and sampling are separate from a visual inspection, call to ask whether sampling is available for your situation',
    ],
    faqs: [
      {
        q: 'What does a mold inspection include?',
        a: 'A visual, room-by-room walkthrough of accessible areas of your property to identify visible mold growth, moisture sources, and the building conditions that support mold. It includes an on-site discussion of what we find.',
      },
      {
        q: 'Can you tell me what type of mold it is from a visual inspection?',
        a: 'No. A visual inspection alone cannot identify mold species or determine whether mold is toxigenic. Identifying specific species requires sampling and laboratory analysis, which is a separate process.',
      },
      {
        q: 'Do I need a mold inspection if I already see mold?',
        a: 'Even when mold is visible, an inspection helps map the full extent of what is accessible, identify the moisture source causing it, and locate other affected areas you may not have noticed.',
      },
      {
        q: 'How long does a mold inspection take?',
        a: 'It depends on the size and layout of the property. A typical residential inspection takes roughly an hour to an hour and a half, but larger or more complex properties can take longer.',
      },
    ],
  },
  {
    slug: 'mold-assessment',
    name: 'Mold Assessment',
    shortName: 'Mold Assessment',
    ctaLabel: 'Call About Mold Assessment',
    icon: 'ClipboardList',
    image:
      'https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A home inspector reviews findings on a clipboard during a mold assessment of an Oakwood, Ohio property',
    summary:
      'A broader assessment that documents the location, extent, and contributing conditions of mold and moisture across your property, so you understand the scope of the situation before deciding on next steps.',
    description:
      'A mold assessment goes beyond a single room and looks at the property as a system. We document where mold and moisture are present, how widespread the conditions are, and what building, grading, ventilation, or plumbing factors are contributing. The goal is to give you a clear picture of the scope of the situation, what can be addressed directly, and what underlying conditions may need attention to keep the problem from returning. An assessment is informational, you decide what to act on and when. We do not diagnose health conditions, and any reference to extent is based on what is visually accessible unless sampling is separately requested and available.',
    concerns: [
      'Mold or moisture appearing in more than one area of the property',
      'Recurring issues that come back after cleaning',
      'Uncertainty about how far a known problem extends',
      'Preparing to buy or sell a property with a mold history',
    ],
    workPerformed: [
      'Documentation of visible mold and moisture locations across accessible areas',
      'Identification of contributing conditions such as ventilation, grading, and plumbing',
      'An on-site summary of the scope and contributing factors',
      'A discussion of what an inspection can and cannot determine without sampling',
    ],
    considerations: [
      'An assessment reports on what is visually accessible, hidden mold may exist behind walls or under finishes',
      'Sampling to identify species or quantify spores is separate from a visual assessment, call to ask if it is available for your situation',
      'An assessment does not include remediation work',
    ],
    faqs: [
      {
        q: 'What is the difference between a mold inspection and a mold assessment?',
        a: 'A mold inspection is a visual walkthrough to identify mold and moisture. A mold assessment takes a wider view, documenting the extent and contributing conditions across the property so you understand the full scope before acting.',
      },
      {
        q: 'Is a mold assessment the same as testing?',
        a: 'No. An assessment is a visual, on-site evaluation. Testing and sampling to identify species or quantify spore levels are separate processes and require laboratory analysis.',
      },
      {
        q: 'When should I ask for an assessment instead of an inspection?',
        a: 'When mold or moisture appears in multiple areas, keeps coming back after cleaning, or you need a broader picture of the scope before deciding what to do.',
      },
    ],
  },
  {
    slug: 'mold-removal',
    name: 'Mold Removal',
    shortName: 'Mold Removal',
    ctaLabel: 'Call for Mold Removal',
    icon: 'Sparkles',
    image:
      'https://images.pexels.com/photos/4099092/pexels-photo-4099092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A professional in protective gear cleans and treats an interior surface during mold removal work in a Dayton-area home',
    summary:
      'Physical removal of visible mold growth from affected surfaces and materials, addressing both the mold present and the conditions that allowed it to grow.',
    description:
      'Mold removal is the physical removal of visible mold growth from affected surfaces and materials. We work on residential and commercial properties, tackling everything from basement mold to drywall and other building materials where mold has taken hold. Removal addresses the growth that is present, while the underlying moisture source is identified so that conditions do not simply return. The scope of removal depends on which materials are affected and how far the growth extends, which is why an inspection or assessment first helps define the work. We discuss the scope directly with you and answer questions about what the removal process will and will not include for your property.',
    concerns: [
      'Visible mold on drywall, trim, framing, or basement walls',
      'Mold returning after surface cleaning',
      'Mold behind or under materials following a water event',
      'Mold in a basement, crawlspace, or attic',
    ],
    workPerformed: [
      'Physical removal of visible mold growth from affected surfaces and materials',
      'Removal and disposal of materials that cannot be effectively cleaned',
      'Cleaning of adjacent areas to address settled spores on accessible surfaces',
      'Identification of the moisture source so conditions can be addressed',
    ],
    considerations: [
      'Removal addresses visible growth, the underlying moisture source must also be corrected to prevent recurrence',
      'The scope of removal depends on which materials are affected and the extent of growth',
      'Removal of mold is separate from laboratory testing to identify species',
    ],
    faqs: [
      {
        q: 'What is the difference between mold removal and mold remediation?',
        a: 'Mold removal is the physical removal of visible mold from affected surfaces and materials. Mold remediation is a broader process that includes removal along with containment, cleaning, and addressing the conditions that caused the mold, with the goal of returning the area to a normal condition.',
      },
      {
        q: 'Can you remove all mold from my property?',
        a: 'Mold spores are present in every indoor environment, so complete elimination of all spores is not a realistic goal. Removal focuses on visible growth and the conditions that allowed it to take hold.',
      },
      {
        q: 'Do I need to leave my home during mold removal?',
        a: 'That depends on the scope and location of the work. We discuss containment and occupancy considerations for your specific situation when we review the scope with you.',
      },
      {
        q: 'Will the mold come back after removal?',
        a: 'Mold can return if the underlying moisture source is not corrected. Part of the removal process is identifying that moisture source so it can be addressed.',
      },
    ],
  },
  {
    slug: 'mold-remediation',
    name: 'Mold Remediation',
    shortName: 'Mold Remediation',
    ctaLabel: 'Call for Mold Remediation',
    icon: 'ShieldCheck',
    image:
      'https://images.pexels.com/photos/4098000/pexels-photo-4098000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A professional in protective gear performs remediation and treatment work inside a Dayton-area residential room',
    summary:
      'A broader process than removal alone: remediation addresses the affected area, the source of the moisture, and the conditions that allowed mold to establish, with the goal of returning the area to a normal condition.',
    description:
      'Mold remediation is a broader process than removal alone. It addresses the affected area, the source of the moisture driving the growth, and the conditions that allowed mold to establish. Remediation typically includes containing the work area, removing mold-damaged materials that cannot be saved, cleaning affected and adjacent surfaces, and addressing the moisture source so the conditions do not simply return. Because remediation scope depends on what materials are affected and how far growth extends, an inspection or assessment first helps define the work. We handle residential and commercial projects, from flooded basements to affected drywall and framing, and we discuss the scope and process with you directly. We do not make health claims, and remediation is separate from laboratory species identification.',
    concerns: [
      'A significant water event followed by mold growth',
      'Mold affecting multiple rooms or building materials',
      'Mold in occupied or finished living spaces',
      'A recurring mold problem that cleaning has not resolved',
    ],
    workPerformed: [
      'Containment of the affected work area',
      'Removal and disposal of mold-damaged materials that cannot be saved',
      'Cleaning of affected and adjacent accessible surfaces',
      'Identification and discussion of the moisture source to address underlying conditions',
    ],
    considerations: [
      'Remediation is a process, not a one-step treatment, and scope depends on the extent of growth',
      'The moisture source must be corrected or conditions can return',
      'Remediation does not include identifying mold species, that requires separate sampling and lab analysis',
    ],
    faqs: [
      {
        q: 'What does mold remediation include?',
        a: 'Remediation typically includes containing the work area, removing materials that cannot be saved, cleaning affected and adjacent surfaces, and addressing the moisture source so the conditions do not return.',
      },
      {
        q: 'How is remediation different from just cleaning the mold?',
        a: 'Surface cleaning removes visible mold from a surface. Remediation addresses the full affected area, including removing damaged materials, containing the work area, and correcting the moisture source that caused the growth.',
      },
      {
        q: 'How long does mold remediation take?',
        a: 'It depends on the size of the affected area, the materials involved, and the extent of growth. We discuss the expected timeline with you when we review the scope.',
      },
      {
        q: 'Will remediation stop the mold from coming back?',
        a: 'Remediation addresses both the mold and the moisture source. As long as the underlying moisture condition is corrected, the risk of recurrence is significantly reduced.',
      },
    ],
  },
  {
    slug: 'moisture-inspection',
    name: 'Moisture Inspection',
    shortName: 'Moisture Inspection',
    ctaLabel: 'Call for Moisture Inspection',
    icon: 'Droplets',
    image:
      'https://images.pexels.com/photos/8293646/pexels-photo-8293646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A construction worker inspects a floor vent during a moisture inspection in a Dayton, Ohio area home',
    summary:
      'An inspection focused on finding the sources of moisture in your property, from plumbing leaks and seepage to condensation and ventilation issues, since moisture is the single condition mold requires to grow.',
    description:
      'A moisture inspection focuses on finding the sources of moisture in your property. Because mold cannot grow without moisture, locating and understanding the moisture source is often the most important step. We look for plumbing leaks, foundation seepage, condensation, poor ventilation, grading issues, and the aftermath of water intrusion events. We assess basements, crawlspaces, attics, around windows and doors, near plumbing fixtures, and at the building exterior where accessible. The inspection identifies where moisture is coming from and how it is moving through the building. We discuss what we find and what it may mean, so you can address the source before it leads to mold growth or structural concerns.',
    concerns: [
      'Damp or wet basement walls and floors',
      'Water stains or peeling paint near windows, ceilings, or pipes',
      'Condensation on windows, pipes, or HVAC ductwork',
      'A past leak, flood, or overflow that may not have fully dried',
      'High indoor humidity or poor airflow in certain rooms',
    ],
    workPerformed: [
      'A visual inspection of interior and exterior areas for moisture sources',
      'Identification of plumbing leaks, seepage, condensation, and ventilation issues',
      'Assessment of basements, crawlspaces, attics, and exterior grading where accessible',
      'An on-site discussion of moisture sources and what they may mean',
    ],
    considerations: [
      'A visual moisture inspection identifies sources; some leaks inside walls or under slabs may require further investigation',
      'Moisture inspection is focused on finding the source, not on identifying mold species',
      'Correcting the moisture source is essential to preventing mold growth',
    ],
    faqs: [
      {
        q: 'Why focus on moisture instead of just mold?',
        a: 'Mold cannot grow without moisture. Finding and correcting the moisture source is the most important step in preventing mold, so a moisture inspection often comes first.',
      },
      {
        q: 'Can you find a leak behind a wall?',
        a: 'A visual inspection can identify signs of a hidden leak, such as staining, swelling, or dampness. Confirming a leak inside a wall assembly may require further investigation or opening the assembly.',
      },
      {
        q: 'Is a moisture inspection the same as a mold inspection?',
        a: 'They overlap but have different focus. A moisture inspection centers on finding where moisture is coming from. A mold inspection centers on identifying visible mold and the conditions that support it. Many properties benefit from both.',
      },
    ],
  },
  {
    slug: 'water-intrusion-inspection',
    name: 'Water Intrusion Inspection',
    shortName: 'Water Intrusion Inspection',
    ctaLabel: 'Call About Water Damage',
    icon: 'HousePlus',
    image:
      'https://images.pexels.com/photos/8146336/pexels-photo-8146336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'An interior view of a room being inspected for water intrusion in a Dayton, Ohio area property',
    summary:
      'An inspection to determine how and where water is entering your property, from roof and foundation leaks to poor drainage and window flashing, so the entry point can be corrected at the source.',
    description:
      'A water intrusion inspection determines how and where water is entering your property. Water intrusion is the precursor to moisture problems and mold, so finding the entry point is essential. We look at the roof, flashing, windows and exterior doors, foundation, grading, gutters and downspouts, and the building exterior where accessible. We trace visible water staining and damage back to likely entry points. Common findings include failed flashing, poor grading, clogged or undersized gutters, foundation cracks, and window or door leaks. We discuss what we find and what it may mean, so you can correct the entry point at its source rather than only addressing the damage it leaves behind.',
    concerns: [
      'Water stains on ceilings or walls after rain',
      'Wet basement floors or walls during or after storms',
      'Ice dam damage in winter or spring melt',
      'Window or door leaks during wind-driven rain',
      'Gutter overflow or poor drainage near the foundation',
    ],
    workPerformed: [
      'A visual inspection of roof, flashing, windows, doors, foundation, and exterior where accessible',
      'Tracing of visible water staining and damage to likely entry points',
      'Assessment of grading, gutters, and downspouts',
      'An on-site discussion of how water is entering and what it may mean',
    ],
    considerations: [
      'Some entry points are only active during specific conditions and may not be visibly active at the time of inspection',
      'A visual inspection identifies likely entry points; confirming concealed paths may require further investigation',
      'Correcting the entry point is essential, repairs to damage alone will not stop ongoing intrusion',
    ],
    faqs: [
      {
        q: 'How is a water intrusion inspection different from a moisture inspection?',
        a: 'A water intrusion inspection focuses on how water is entering the building from outside or from plumbing. A moisture inspection is broader and also covers condensation and humidity. The two often overlap.',
      },
      {
        q: 'Can you find the source if the leak only happens during heavy rain?',
        a: 'We look for the staining and damage left by past intrusion to trace likely entry points. Some sources are only active during specific conditions, so signs of past events are often the best indicator.',
      },
      {
        q: 'Should I fix the water entry before repairing the damage?',
        a: 'Yes. Repairing damage without correcting the entry point will lead to the same damage returning. The entry point should be addressed first.',
      },
    ],
  },
  {
    slug: 'basement-mold-inspection',
    name: 'Basement Mold Inspection',
    shortName: 'Basement Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'ArrowDownToLine',
    image:
      'https://images.pexels.com/photos/32497163/pexels-photo-32497163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A home inspector examines a crawlspace and basement access point during a basement mold inspection in the Dayton area',
    summary:
      'A focused inspection of basements and crawlspaces, the areas most prone to mold in Dayton-area homes, for visible mold growth, moisture seepage, and the ventilation and vapor-barrier conditions that allow mold to establish.',
    description:
      'A basement mold inspection is a focused evaluation of the areas most prone to mold in Dayton-area homes. Basements and crawlspaces sit below grade, against soil that stays cool and damp, and they often have limited airflow. We look for visible mold growth on walls, floors, framing, and stored materials, for moisture seepage through foundation walls and floors, and for the ventilation and vapor-barrier conditions that allow humidity to build. Because so many local homes have finished or partially finished basements used as living space, we also look at concealed areas behind finished walls and under flooring where accessible. We discuss what we find and what it may mean for your property, and we do not diagnose health conditions.',
    concerns: [
      'A musty smell in the basement',
      'Visible mold on basement walls, floors, joists, or stored items',
      'Damp or wet basement walls and floors',
      'Efflorescence or white mineral deposits on foundation walls',
      'A finished basement with a past water event',
    ],
    workPerformed: [
      'A visual inspection of basement and crawlspace areas for mold and moisture',
      'Identification of seepage, condensation, and ventilation conditions',
      'Assessment of visible mold on walls, floors, framing, and stored materials',
      'An on-site discussion of findings and what they may mean',
    ],
    considerations: [
      'Mold behind finished basement walls or under flooring may not be visible without opening the assembly',
      'A basement inspection cannot identify mold species, that requires separate sampling',
      'Seepage through foundation walls often requires exterior or drainage corrections to resolve',
    ],
    faqs: [
      {
        q: 'Why are basements so prone to mold?',
        a: 'Basements sit below grade against cool, damp soil, often have limited airflow, and are common sites for seepage and condensation. Those conditions together make basements one of the most common areas for mold in Dayton-area homes.',
      },
      {
        q: 'Can you inspect a finished basement?',
        a: 'We inspect the accessible areas of a finished basement. Mold concealed behind finished walls or under flooring may not be visible without opening the assembly.',
      },
      {
        q: 'What is efflorescence and is it mold?',
        a: 'Efflorescence is a white or chalky mineral deposit left on foundation walls as water seeps through and evaporates. It is not mold, but it is a sign that moisture is moving through the foundation, which is a condition worth inspecting.',
      },
    ],
  },
  {
    slug: 'attic-mold-inspection',
    name: 'Attic Mold Inspection',
    shortName: 'Attic Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'Home',
    image:
      'https://images.pexels.com/photos/8082327/pexels-photo-8082327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A spacious attic with natural light from skylights, the type of space assessed during an attic mold inspection in the Dayton, Ohio area',
    summary:
      'A focused inspection of attics and roof spaces for visible mold growth, condensation, and the ventilation and insulation conditions that allow moisture to build and mold to establish overhead.',
    description:
      'An attic mold inspection is a focused evaluation of the roof space and attic area. Attics are a common but often-overlooked site for mold in Dayton-area homes. Warm, moist air from living spaces rises into the attic, and when ventilation is undersized, blocked, or unbalanced, that moisture condenses on cold roof sheathing and creates the damp conditions mold needs. We look for visible mold growth on roof sheathing, rafters, and insulation, for condensation and frost patterns, and for the ventilation, insulation, and air-sealing conditions that allow moisture to build. We also check bathroom and kitchen fan discharge paths, since fans vented into the attic rather than outside are a frequent cause of attic moisture. We discuss what we find and what it may mean for your property, and we do not diagnose health conditions.',
    concerns: [
      'Dark staining or discoloration on the underside of roof sheathing',
      'A musty smell coming from the attic or upper floor',
      'Frost or condensation visible on roof boards or nails in cold weather',
      'Bathroom or kitchen fans that discharge into the attic instead of outside',
      'Insufficient, blocked, or unbalanced attic ventilation',
    ],
    workPerformed: [
      'A visual inspection of the attic, roof sheathing, rafters, and insulation',
      'Identification of visible mold growth, condensation, and moisture patterns',
      'Assessment of ventilation, insulation, and fan discharge conditions',
      'An on-site discussion of findings and what they may mean for your property',
    ],
    considerations: [
      'Mold behind finished attic walls or under fixed insulation may not be fully visible',
      'An attic inspection cannot identify mold species, that requires separate sampling',
      'Correcting ventilation and air-sealing issues is essential to preventing recurrence',
    ],
    faqs: [
      {
        q: 'Why do attics get mold?',
        a: 'Warm, moist air from living spaces rises into the attic. When ventilation is undersized or blocked, that moisture condenses on cold roof sheathing and creates the damp conditions mold needs to grow.',
      },
      {
        q: 'Can bathroom fans cause attic mold?',
        a: 'Yes. Bathroom and kitchen fans that discharge into the attic instead of routing outside introduce a large amount of warm, moist air directly into the attic space, which is a common cause of attic mold.',
      },
      {
        q: 'Will fixing ventilation stop attic mold?',
        a: 'Correcting ventilation and air-sealing issues is essential. If the moisture source, whether it is poor ventilation or a vented fan, is not addressed, the conditions that allowed mold to grow will persist.',
      },
    ],
  },
  {
    slug: 'indoor-air-quality-inspection',
    name: 'Indoor Air Quality Inspection',
    shortName: 'Indoor Air Quality Inspection',
    ctaLabel: 'Call About Indoor Air Quality',
    icon: 'Wind',
    image:
      'https://images.pexels.com/photos/11538226/pexels-photo-11538226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Close-up view of an HVAC air duct during an indoor air quality inspection in a Dayton, Ohio area property',
    summary:
      'A visual inspection focused on the building conditions that affect indoor air, from HVAC and ventilation issues to moisture sources and visible mold, helping you understand what may be impacting the air in your property.',
    description:
      'An indoor air quality inspection is a visual assessment of the building conditions that affect the air inside your property. We look at HVAC systems and ductwork where accessible, ventilation paths, moisture sources, visible mold growth, and the overall conditions that can contribute to stale, damp, or musty air. Because indoor air is shaped by the whole building, from the basement to the attic, this inspection connects conditions in different areas to what you may be experiencing. We do not perform laboratory air testing as part of a visual inspection, and we do not diagnose health conditions. What we do is identify the visible building conditions that may be affecting your indoor air and discuss what they may mean, so you can decide on next steps.',
    concerns: [
      'A persistent musty or stale smell in the home',
      'Visible mold growth in any area of the property',
      'HVAC or ductwork conditions that may be distributing moisture or odors',
      'High indoor humidity or condensation on windows and surfaces',
      'Concerns about air quality after a water event or moisture discovery',
    ],
    workPerformed: [
      'A visual inspection of HVAC, ventilation, and moisture conditions across the property',
      'Identification of visible mold growth and the building conditions affecting indoor air',
      'Assessment of humidity, condensation, and airflow patterns where accessible',
      'An on-site discussion of findings and what they may mean for your property',
    ],
    considerations: [
      'A visual inspection does not include laboratory air sampling or spore quantification',
      'We do not diagnose health conditions or attribute symptoms to specific air conditions',
      'Air quality concerns often require correcting the underlying moisture and ventilation sources',
    ],
    faqs: [
      {
        q: 'Does an indoor air quality inspection include air testing?',
        a: 'A visual indoor air quality inspection does not include laboratory air sampling or spore quantification. We assess the visible building conditions that affect indoor air. Call to ask whether sampling is available for your situation.',
      },
      {
        q: 'Can you tell me if the air is making me sick?',
        a: 'No. We do not diagnose health conditions or attribute symptoms to specific air conditions. We identify visible building conditions that may be affecting indoor air and discuss what they may mean.',
      },
      {
        q: 'What building conditions affect indoor air?',
        a: 'HVAC and ductwork, ventilation paths, moisture sources, visible mold, humidity levels, and condensation patterns all shape indoor air quality. An inspection connects conditions in different areas to what you may be experiencing.',
      },
    ],
  },
  {
    slug: 'property-mold-inspection',
    name: 'Property Mold Inspection',
    shortName: 'Property Mold Inspection',
    ctaLabel: 'Call for Mold Inspection',
    icon: 'Building2',
    image:
      'https://images.pexels.com/photos/8482518/pexels-photo-8482518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A residential property being assessed during a property mold inspection in the Dayton, Ohio area',
    summary:
      'A complete property-wide mold inspection for buyers, sellers, owners, and investors who want a visual assessment of the entire property for mold and moisture conditions before making a decision.',
    description:
      'A property mold inspection is a complete, property-wide visual assessment for mold and moisture conditions. It is often requested by buyers during a real estate transaction, by sellers preparing to list, by owners with ongoing concerns, and by investors evaluating a property. The inspection covers accessible interior areas, basement and crawlspace, attic, exterior where accessible, and the building conditions that contribute to mold. We document visible mold growth, moisture sources, water staining, and the ventilation, grading, and plumbing factors that allow mold to take hold. Because this is a visual inspection, we cannot identify mold hidden behind walls or under finishes without further investigation, and we cannot identify mold species without sampling. We discuss what we find and what it may mean for your decision.',
    concerns: [
      'Buying or selling a property with a known or suspected mold history',
      'A property with a history of water intrusion, leaks, or flooding',
      'Investment or rental properties where conditions may have gone unaddressed',
      'A general concern about moisture or mold across the whole property',
    ],
    workPerformed: [
      'A complete visual walkthrough of accessible interior, basement, crawlspace, and attic areas',
      'Documentation of visible mold growth, moisture sources, and water staining',
      'Assessment of ventilation, grading, and plumbing conditions that contribute to mold',
      'An on-site discussion of findings and what they may mean for your decision',
    ],
    considerations: [
      'A visual inspection cannot identify mold species or determine toxicity',
      'Mold hidden behind walls, under flooring, or inside cavities may not be visible without opening the assembly',
      'Sampling and laboratory analysis are separate from a visual inspection, call to ask whether sampling is available',
    ],
    faqs: [
      {
        q: 'Should I get a property mold inspection before buying a home?',
        a: 'If the property has a history of water intrusion, visible mold, or moisture conditions, a mold inspection before purchase can help you understand what you are buying and what may need attention. We discuss findings on-site so you can make an informed decision.',
      },
      {
        q: 'Is a property mold inspection the same as a general home inspection?',
        a: 'No. A general home inspection covers the major systems of a home. A property mold inspection focuses specifically on mold growth, moisture sources, and the conditions that support mold. The two are complementary.',
      },
      {
        q: 'Can you inspect a property I am preparing to sell?',
        a: 'Yes. A pre-listing mold inspection can identify conditions that a buyer may find, giving you the opportunity to address them before listing or to disclose them transparently.',
      },
    ],
  },
];

export const homeImages = {
  hero: 'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  heroAlt:
    'A home inspector in protective gear examines an interior wall during a mold inspection in a Dayton, Ohio home',
  inspector: 'https://images.pexels.com/photos/8293667/pexels-photo-8293667.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  inspectorAlt:
    'A home inspector in a hard hat conducts a property inspection outdoors in the Dayton, Ohio area',
  house: 'https://images.pexels.com/photos/8583638/pexels-photo-8583638.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  houseAlt: 'A modern detached suburban house in the Dayton, Ohio area under a bright sky',
  room: 'https://images.pexels.com/photos/8146336/pexels-photo-8146336.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  roomAlt: 'Interior view of an unfinished room being assessed for moisture and mold conditions',
  cleanup: 'https://images.pexels.com/photos/4098000/pexels-photo-4098000.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  cleanupAlt: 'A professional in protective gear performs remediation and treatment work inside a residential room',
};
