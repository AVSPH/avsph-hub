import { LucideIcon, Thermometer, Wrench, Sparkles, Star, Bug, Waves, Plug, Leaf, Home } from "lucide-react";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const ASSESSMENT_DATA: Record<string, Assessment> = {
  homeRemodeling: {
    id: "homeRemodeling",
    title: "Home Remodeling Assessment",
    description: "Verify your knowledge of home remodeling project management and client expectations.",
    questions: [
      {
        id: "hr_q1",
        text: "What is the first step in a home remodeling project assessment?",
        options: ["Ordering materials", "Site inspection and client consultation", "Demolition", "Finalizing the budget"],
        correctAnswer: 1
      },
      {
        id: "hr_q2",
        text: "Which of these is a critical safety protocol during remodeling?",
        options: ["Leaving tools plugged in overnight", "Ignoring load-bearing wall signs", "Proper PPE and dust containment", "Working without a permit"],
        correctAnswer: 2
      },
      {
        id: "hr_q3",
        text: "Which remodeling service is described as the highest-value service?",
        options: ["Basement Finishing", "Kitchen Remodeling", "Exterior Renovations", "Home Additions"],
        correctAnswer: 1
      },
      {
        id: "hr_q4",
        text: "Home remodeling differs from new construction because it:",
        options: ["Builds on undeveloped land only", "Works within and around an existing structure", "Requires no permits or inspections", "Avoids any electrical or plumbing updates"],
        correctAnswer: 1
      },
      {
        id: "hr_q5",
        text: "Which service increases usable square footage at a lower cost than additions?",
        options: ["Kitchen Remodeling", "Basement Finishing", "Exterior Renovations", "Bathroom Remodeling"],
        correctAnswer: 1
      },
      {
        id: "hr_q6",
        text: "Which service focuses on reconfiguring floor plans and whole-home transformations?",
        options: ["Interior Renovations", "Exterior Renovations", "Home Additions", "Basement Finishing"],
        correctAnswer: 0
      },
      {
        id: "hr_q7",
        text: "Exterior renovations are commonly associated with:",
        options: ["Roofing and siding improvements", "Only interior paint", "Garage door motor replacement", "Landscaping only"],
        correctAnswer: 0
      },
      {
        id: "hr_q8",
        text: "Home additions are described as:",
        options: ["Cosmetic refreshes only", "Entirely new living space above or attached to the home", "Only bathroom fixture swaps", "No structural changes"],
        correctAnswer: 1
      },
      {
        id: "hr_q9",
        text: "One reason homeowners remodel is to avoid:",
        options: ["Seasonal maintenance", "Move costs and transaction fees", "Hiring contractors", "Using permits"],
        correctAnswer: 1
      },
      {
        id: "hr_q10",
        text: "Modernizing systems in remodeling typically includes upgrading:",
        options: ["Electrical, plumbing, insulation, and HVAC", "Only paint colors", "Only furniture", "Only landscaping"],
        correctAnswer: 0
      }
    ]
  },
  hvac: {
    id: "hvac",
    title: "HVAC Knowledge Assessment",
    description: "Test your understanding of HVAC systems, troubleshooting, and maintenance protocols.",
    questions: [
      {
        id: "hvac_q1",
        text: "What does HVAC stand for?",
        options: ["Heat, Ventilation, Atmosphere, Cooling", "Heating, Ventilation, and Air Conditioning", "High Voltage Air Control", "Home Ventilation and Cooling"],
        correctAnswer: 1
      },
      {
        id: "hvac_q2",
        text: "What is the primary indicator of a refrigerant leak?",
        options: ["Loud whistling sound", "Ice buildup on the evaporator coil", "Frequent filter clogging", "The thermostat turning off"],
        correctAnswer: 1
      },
      {
        id: "hvac_q3",
        text: "Which is listed as a key purpose of HVAC systems?",
        options: ["Generate electricity", "Control humidity to prevent mold growth", "Store household water", "Provide plumbing drainage"],
        correctAnswer: 1
      },
      {
        id: "hvac_q4",
        text: "Ventilation in HVAC refers to:",
        options: ["Adding fresh air and removing stale air", "Heating water", "Compressing refrigerant", "Insulating roofs"],
        correctAnswer: 0
      },
      {
        id: "hvac_q5",
        text: "Air conditioning systems primarily:",
        options: ["Heat indoor air", "Cool and dehumidify indoor air", "Increase humidity", "Generate electricity"],
        correctAnswer: 1
      },
      {
        id: "hvac_q6",
        text: "Central air conditioning commonly uses:",
        options: ["A duct system to distribute cooled air", "Radiators only", "No blower", "Only window units"],
        correctAnswer: 0
      },
      {
        id: "hvac_q7",
        text: "HVAC businesses typically serve which markets?",
        options: ["Residential and commercial", "Only industrial", "Only automotive", "Only agriculture"],
        correctAnswer: 0
      },
      {
        id: "hvac_q8",
        text: "Demand for HVAC peaks in:",
        options: ["Summer for air conditioning and winter for heating", "Only spring", "Only fall", "Only weekends"],
        correctAnswer: 0
      },
      {
        id: "hvac_q9",
        text: "A key purpose of HVAC systems is to:",
        options: ["Filter dust, allergens, and airborne pollutants", "Increase noise levels", "Eliminate the need for ventilation", "Replace plumbing systems"],
        correctAnswer: 0
      },
      {
        id: "hvac_q10",
        text: "A split system HVAC setup typically consists of:",
        options: ["An indoor unit and an outdoor unit", "A single rooftop radiator only", "Only baseboard heaters", "No compressor"],
        correctAnswer: 0
      }
    ]
  },
  carpetCleaning: {
    id: "carpetCleaning",
    title: "Carpet Cleaning Assessment",
    description: "Knowledge check for carpet cleaning methods, chemicals, and equipment handling.",
    questions: [
      {
        id: "cc_q1",
        text: "What is the common pH level for a professional carpet cleaning solution?",
        options: ["pH 1-3 (Acidic)", "pH 7 (Neutral)", "pH 8-10 (Alkaline)", "pH 14 (Strong Base)"],
        correctAnswer: 2
      },
      {
        id: "cc_q2",
        text: "Which method is the most widely used and recommended for professional carpet cleaning?",
        options: ["Dry carpet cleaning", "Hot water extraction (steam cleaning)", "Bonnet cleaning only", "Vinegar spray"],
        correctAnswer: 1
      },
      {
        id: "cc_q3",
        text: "Typical drying time for hot water extraction is:",
        options: ["Near-instant", "4 to 12 hours", "24 to 48 hours", "Several days only"],
        correctAnswer: 1
      },
      {
        id: "cc_q4",
        text: "Professional carpet cleaning is needed because carpets trap:",
        options: ["Dust, allergens, and bacteria", "Only surface dirt that vacuums remove", "No odors or pollutants", "Only pet hair"],
        correctAnswer: 0
      },
      {
        id: "cc_q5",
        text: "Carpet cleaning services are provided for:",
        options: ["Residential and commercial clients", "Only homes", "Only hotels", "Only vehicles"],
        correctAnswer: 0
      },
      {
        id: "cc_q6",
        text: "Dry carpet cleaning uses:",
        options: ["High-moisture soaking", "A low-moisture compound or powder", "Steam only without extraction", "No cleaning solution"],
        correctAnswer: 1
      },
      {
        id: "cc_q7",
        text: "A key benefit of regular professional carpet cleaning is:",
        options: ["Extends carpet life", "Shortens carpet life", "Increases mold growth", "Voids warranties"],
        correctAnswer: 0
      },
      {
        id: "cc_q8",
        text: "A common reason for carpet cleaning in commercial properties is:",
        options: ["Health and cleanliness compliance", "Only decoration", "Prevent HVAC use", "Replace furniture"],
        correctAnswer: 0
      },
      {
        id: "cc_q9",
        text: "Hot water extraction works by:",
        options: ["Injecting hot solution and extracting with vacuum", "Spraying and letting it air dry for days", "Using only dry powder", "Scraping fibers with blades"],
        correctAnswer: 0
      },
      {
        id: "cc_q10",
        text: "The recommended method for most residential carpet cleaning is:",
        options: ["Hot water extraction (steam cleaning)", "Dry-only cleaning", "Vacuuming only", "No cleaning needed"],
        correctAnswer: 0
      }
    ]
  },
  cleaningBusiness: {
    id: "cleaningBusiness",
    title: "Cleaning Business Assessment",
    description: "Standard practices for professional residential and commercial cleaning.",
    questions: [
      {
        id: "cb_q1",
        text: "Which color code is typically used for restroom cleaning cloths to prevent cross-contamination?",
        options: ["Blue", "Yellow", "Red", "Green"],
        correctAnswer: 2
      },
      {
        id: "cb_q2",
        text: "According to the guide, what is the most important competitive advantage for a cleaning company?",
        options: ["Lowest price", "Reliability and trust", "Largest equipment inventory", "Longest contracts"],
        correctAnswer: 1
      },
      {
        id: "cb_q3",
        text: "Which task is commonly included in a deep cleaning service?",
        options: ["Only sweeping floors", "Inside appliances and behind furniture", "Outdoor pressure washing only", "Window tinting"],
        correctAnswer: 1
      },
      {
        id: "cb_q4",
        text: "Professional cleaning improves workplace productivity by:",
        options: ["Improving focus and morale", "Increasing clutter", "Reducing lighting", "Limiting air circulation"],
        correctAnswer: 0
      },
      {
        id: "cb_q5",
        text: "Deep cleaning is best described as:",
        options: ["A top-to-bottom clean beyond routine maintenance", "Only vacuuming carpets", "Only dusting shelves", "A quick surface wipe"],
        correctAnswer: 0
      },
      {
        id: "cb_q6",
        text: "Move-in/move-out cleaning is typically:",
        options: ["A one-time service during transitions", "A daily service for offices", "Only for hospitals", "Used only for outdoor areas"],
        correctAnswer: 0
      },
      {
        id: "cb_q7",
        text: "Recurring cleaning contracts are commonly scheduled:",
        options: ["Weekly, biweekly, or monthly", "Once every 5 years", "Only on holidays", "Only when a problem occurs"],
        correctAnswer: 0
      },
      {
        id: "cb_q8",
        text: "Compliance-driven cleaning is especially important in industries like:",
        options: ["Healthcare, food service, childcare, and hospitality", "Only automotive", "Only mining", "Only agriculture"],
        correctAnswer: 0
      },
      {
        id: "cb_q9",
        text: "Commercial cleaning is often performed:",
        options: ["After business hours or on weekends", "Only at lunchtime", "Only during customer peak hours", "Only during holidays"],
        correctAnswer: 0
      },
      {
        id: "cb_q10",
        text: "The cleaning industry serves:",
        options: ["Homes, offices, schools, hospitals, restaurants, and more", "Only private homes", "Only factories", "Only outdoor spaces"],
        correctAnswer: 0
      }
    ]
  },
  pestControl: {
    id: "pestControl",
    title: "Pest Control Assessment",
    description: "Safety and identification quiz for pest control specialists.",
    questions: [
      {
        id: "pc_q1",
        text: "What is an 'Integrated Pest Management' (IPM) approach?",
        options: ["Using as much pesticide as possible", "A combination of biological, cultural, and chemical tools", "Only using organic baits", "Ignoring non-chemical methods"],
        correctAnswer: 1
      },
      {
        id: "pc_q2",
        text: "Integrated Pest Management (IPM) emphasizes:",
        options: ["Using the most toxic pesticide available", "Using the least toxic, most targeted solutions", "Ignoring monitoring after treatment", "Only treating visible pests"],
        correctAnswer: 1
      },
      {
        id: "pc_q3",
        text: "Which statement about termite damage is true per the guide?",
        options: ["Typically covered by homeowners insurance", "Typically not covered by homeowners insurance", "Always covered if reported within 24 hours", "Only covered for commercial properties"],
        correctAnswer: 1
      },
      {
        id: "pc_q4",
        text: "Carpenter ants cause damage by:",
        options: ["Excavating wood to build nests", "Drilling through metal pipes", "Feeding on concrete", "Only chewing fabric"],
        correctAnswer: 0
      },
      {
        id: "pc_q5",
        text: "Fire ants are known for:",
        options: ["Painful stings that can trigger allergic reactions", "Building nests in water pipes", "Only living indoors", "Ignoring human contact"],
        correctAnswer: 0
      },
      {
        id: "pc_q6",
        text: "The most common indoor cockroach listed is the:",
        options: ["German cockroach", "American cockroach", "Oriental cockroach", "Wood cockroach"],
        correctAnswer: 0
      },
      {
        id: "pc_q7",
        text: "Pest control is considered an essential service because:",
        options: ["Infestations create serious health and property risks", "It only improves appearance", "It replaces cleaning services", "It is optional for businesses"],
        correctAnswer: 0
      },
      {
        id: "pc_q8",
        text: "Recurring pest control agreements provide:",
        options: ["Stable, predictable revenue", "Only one-time visits", "Seasonal revenue only", "No customer follow-up"],
        correctAnswer: 0
      },
      {
        id: "pc_q9",
        text: "Seasonal pest activity peaks for rodents typically occur in:",
        options: ["Fall and winter", "Spring only", "Summer only", "Only during holidays"],
        correctAnswer: 0
      },
      {
        id: "pc_q10",
        text: "In commercial food environments, infestations can lead to:",
        options: ["Failed health inspections and possible closures", "Faster service speed", "Lower regulatory oversight", "No business impact"],
        correctAnswer: 0
      }
    ]
  },
  poolCleaning: {
    id: "poolCleaning",
    title: "Pool Cleaning Assessment",
    description: "Chemical balance and maintenance procedures for swimming pools.",
    questions: [
      {
        id: "pool_q1",
        text: "What is the ideal range for Free Chlorine in a residential swimming pool?",
        options: ["0.5 - 1.0 ppm", "1.0 - 3.0 ppm", "5.0 - 10.0 ppm", "0 ppm"],
        correctAnswer: 1
      },
      {
        id: "pool_q2",
        text: "Without adequate sanitizer and circulation, algae can establish in as little as:",
        options: ["2 to 4 weeks", "24 to 48 hours", "7 to 10 days", "6 hours"],
        correctAnswer: 1
      },
      {
        id: "pool_q3",
        text: "The backbone of most pool service businesses is:",
        options: ["One-time emergency jobs", "Recurring weekly service routes", "Retail chemical sales only", "New pool installations only"],
        correctAnswer: 1
      },
      {
        id: "pool_q4",
        text: "Low pH in pool water can cause:",
        options: ["Etching of plaster and surfaces", "Calcium scaling", "Higher sanitizer efficiency only", "No impact on surfaces"],
        correctAnswer: 0
      },
      {
        id: "pool_q5",
        text: "High pH in pool water can cause:",
        options: ["Calcium scaling on tiles and surfaces", "Etching of plaster", "Instant algae removal", "Lower sanitizer demand"],
        correctAnswer: 0
      },
      {
        id: "pool_q6",
        text: "Commercial pools typically require:",
        options: ["More frequent visits and chemical log books", "Less frequent visits than residential pools", "No inspections", "Only seasonal service"],
        correctAnswer: 0
      },
      {
        id: "pool_q7",
        text: "Above-ground pools generally:",
        options: ["Hold less water so chemical changes happen faster", "Require no chemical monitoring", "Are only commercial", "Never use filters"],
        correctAnswer: 0
      },
      {
        id: "pool_q8",
        text: "Common in-ground pool surface materials include:",
        options: ["Gunite/shotcrete, fiberglass, and vinyl liner", "Only wood panels", "Only steel plates", "Only concrete block without finish"],
        correctAnswer: 0
      },
      {
        id: "pool_q9",
        text: "Pool service demand is concentrated in:",
        options: ["Warmer climates with year-round use", "Only cold climates", "Only coastal cities", "Only mountain regions"],
        correctAnswer: 0
      },
      {
        id: "pool_q10",
        text: "Pool service technicians are trained in:",
        options: ["Water chemistry, filtration systems, and equipment care", "Only landscaping", "Only electrical wiring", "Only carpentry"],
        correctAnswer: 0
      }
    ]
  },
  electricalServices: {
    id: "electricalServices",
    title: "Electrical Services Assessment",
    description: "Safety and core electrical concept check.",
    questions: [
      {
        id: "elec_q1",
        text: "What tool is used to test if a wire is live without touching it?",
        options: ["Multimeter", "Non-contact voltage tester", "Wire stripper", "Screwdriver"],
        correctAnswer: 1
      },
      {
        id: "elec_q2",
        text: "Electrical contractors primarily serve which three markets?",
        options: ["Retail, hospitality, education", "Residential, commercial, and industrial", "Medical, legal, financial", "Government, nonprofit, private"],
        correctAnswer: 1
      },
      {
        id: "elec_q3",
        text: "Electrical work must comply with which code mentioned in the guide?",
        options: ["International Plumbing Code", "National Electrical Code (NEC)", "Energy Star Code", "Federal Plumbing Standard"],
        correctAnswer: 1
      },
      {
        id: "elec_q4",
        text: "Electrical failures and malfunctions are a leading cause of:",
        options: ["Residential house fires", "Landscape erosion", "Roof leaks", "Plumbing clogs"],
        correctAnswer: 0
      },
      {
        id: "elec_q5",
        text: "Industrial electrical services often involve:",
        options: ["High-voltage systems and motor controls", "Only light bulb replacement", "Only low-voltage doorbells", "Only exterior painting"],
        correctAnswer: 0
      },
      {
        id: "elec_q6",
        text: "Commercial electrical systems are typically:",
        options: ["More complex and higher voltage than residential", "Simpler than residential", "Identical to automotive systems", "Only battery-powered"],
        correctAnswer: 0
      },
      {
        id: "elec_q7",
        text: "Emergency electrical service is high-value because:",
        options: ["Failures pose immediate safety risks", "It only involves routine scheduling", "It is always optional", "It never affects operations"],
        correctAnswer: 0
      },
      {
        id: "elec_q8",
        text: "Emerging opportunities mentioned include:",
        options: ["EV charging, solar, battery storage, and smart home tech", "Only coal heating", "Only plumbing upgrades", "Only exterior landscaping"],
        correctAnswer: 0
      },
      {
        id: "elec_q9",
        text: "Electrical service companies must be:",
        options: ["Licensed and code-compliant", "Unlicensed for residential work", "Able to ignore inspections", "Exempt from permits"],
        correctAnswer: 0
      },
      {
        id: "elec_q10",
        text: "Residential electrical services can include:",
        options: ["Panel upgrades and EV charger installation", "Only industrial motor controls", "Only factory automation", "Only plumbing repairs"],
        correctAnswer: 0
      }
    ]
  },
  lawnGarden: {
    id: "lawnGarden",
    title: "Lawn & Garden Assessment",
    description: "Landscaping and lawn care maintenance protocols.",
    questions: [
      {
        id: "lg_q1",
        text: "What is the 'One-Third Rule' in lawn mowing?",
        options: ["Always mow 1/3 of the lawn each day", "Never remove more than 1/3 of the grass blade height at once", "Only mow in 1/3 humidity", "Add fertilizer every 3 weeks"],
        correctAnswer: 1
      },
      {
        id: "lg_q2",
        text: "What is the core mission of lawn and garden businesses?",
        options: ["Sell lawn equipment", "Enhance and maintain outdoor spaces", "Only design new landscapes", "Focus exclusively on tree removal"],
        correctAnswer: 1
      },
      {
        id: "lg_q3",
        text: "Which task is listed as a daily VA responsibility for lawn and garden services?",
        options: ["Operate mowing equipment", "Schedule and confirm service appointments", "Apply fertilizer on-site", "Install irrigation systems"],
        correctAnswer: 1
      },
      {
        id: "lg_q4",
        text: "Which service involves aerating compacted soil and overseeding thin patches?",
        options: ["Aeration & Seeding", "Mulching", "Hedge Trimming", "Garden Care"],
        correctAnswer: 0
      },
      {
        id: "lg_q5",
        text: "Mulching helps by:",
        options: ["Retaining moisture and suppressing weeds", "Removing all nutrients", "Increasing soil compaction", "Eliminating all insects instantly"],
        correctAnswer: 0
      },
      {
        id: "lg_q6",
        text: "Hedge & shrub trimming is done to:",
        options: ["Create a clean, manicured look", "Remove all plants permanently", "Stop grass growth", "Replace irrigation systems"],
        correctAnswer: 0
      },
      {
        id: "lg_q7",
        text: "Grass cutting is often the foundation of:",
        options: ["Recurring maintenance contracts", "One-time-only jobs", "Irrigation installations only", "Tree removal projects"],
        correctAnswer: 0
      },
      {
        id: "lg_q8",
        text: "Edging creates:",
        options: ["Clean borders between lawns and hard surfaces", "Extra fertilizer in soil", "New drainage lines", "Outdoor lighting circuits"],
        correctAnswer: 0
      },
      {
        id: "lg_q9",
        text: "Pre-emergent weed control is applied:",
        options: ["Before weeds sprout", "Only after weeds mature", "Only during winter storms", "Only after fertilizing"],
        correctAnswer: 0
      },
      {
        id: "lg_q10",
        text: "Fertilization is typically applied:",
        options: ["4â€“6 times per year depending on region and grass type", "Once every 10 years", "Only once after installation", "Daily in all seasons"],
        correctAnswer: 0
      }
    ]
  },
  plumbing: {
    id: "plumbing",
    title: "Plumbing Knowledge Assessment",
    description: "Core plumbing concepts, tools, and emergency procedures.",
    questions: [
      {
        id: "plumb_q1",
        text: "What is the primary function of a 'trap' under a sink?",
        options: ["To catch dropped jewelry", "To prevent sewer gases from entering the home", "To slow down water flow", "To filter out solid waste"],
        correctAnswer: 1
      },
      {
        id: "plumb_q2",
        text: "Which material is most commonly used for modern residential water supply lines?",
        options: ["PVC", "Iron", "PEX", "Clay"],
        correctAnswer: 2
      },
      {
        id: "plumb_q3",
        text: "Which plumbing system removes wastewater by gravity?",
        options: ["Water supply system", "Drain-waste-vent (DWV) system", "Gas system", "HVAC system"],
        correctAnswer: 1
      },
      {
        id: "plumb_q4",
        text: "Emergency plumbing services can command what premium?",
        options: ["Same as standard rate", "1.5x to 2x the standard rate", "Half the standard rate", "Only materials cost"],
        correctAnswer: 1
      },
      {
        id: "plumb_q5",
        text: "Plumbing contractors commonly serve:",
        options: ["Residential, commercial, and industrial clients", "Only industrial clients", "Only retail stores", "Only agricultural sites"],
        correctAnswer: 0
      },
      {
        id: "plumb_q6",
        text: "The water supply system in plumbing:",
        options: ["Delivers pressurized fresh water to fixtures", "Only removes wastewater", "Only supplies natural gas", "Only powers HVAC systems"],
        correctAnswer: 0
      },
      {
        id: "plumb_q7",
        text: "Plumbing gas systems deliver fuel to:",
        options: ["Water heaters, furnaces, ranges, and dryers", "Only outdoor grills", "Only sprinklers", "Only air conditioners"],
        correctAnswer: 0
      },
      {
        id: "plumb_q8",
        text: "The plumbing industry is described as recession-resistant because:",
        options: ["Leaks and clogs need attention regardless of conditions", "Plumbing is a luxury service", "Demand stops in winter", "It only serves new construction"],
        correctAnswer: 0
      },
      {
        id: "plumb_q9",
        text: "Commercial plumbing systems are typically:",
        options: ["Larger, more complex, and subject to stricter codes", "Simpler than residential systems", "Unregulated", "Only used outdoors"],
        correctAnswer: 0
      },
      {
        id: "plumb_q10",
        text: "Plumbing businesses exist to maintain systems that move:",
        options: ["Water, gas, and waste", "Only electricity", "Only internet data", "Only heating air"],
        correctAnswer: 0
      }
    ]
  },
  handyman: {
    id: "handyman",
    title: "Handyman Knowledge Assessment",
    description: "General repair and maintenance skill check.",
    questions: [
      {
        id: "handy_q1",
        text: "What type of anchor is best for hanging heavy items on drywall where no stud is present?",
        options: ["Nail", "Toggle Bolt", "Plastic expansion anchor", "Wood screw"],
        correctAnswer: 1
      },
      {
        id: "handy_q2",
        text: "Which task typically requires a licensed electrician rather than a handyman?",
        options: ["Replacing a light fixture", "Installing a smart doorbell", "Panel work or new circuit installation", "Replacing a switch"],
        correctAnswer: 2
      },
      {
        id: "handy_q3",
        text: "What is highlighted as the most reliable growth strategy for a handyman business?",
        options: ["Discounting every job", "Showing up on time, doing the job right, and leaving the site clean", "Focusing only on advertising", "Refusing repeat customers"],
        correctAnswer: 1
      },
      {
        id: "handy_q4",
        text: "A handyman business is defined by its:",
        options: ["Versatility across many repair tasks", "Focus on one specialty only", "Exclusive commercial work", "No customer interaction"],
        correctAnswer: 0
      },
      {
        id: "handy_q5",
        text: "Which is a common minor plumbing task for handymen?",
        options: ["Replacing faucet washers or toilet flappers", "Replacing main supply lines in walls", "Installing new sewer mains", "Re-piping entire homes"],
        correctAnswer: 0
      },
      {
        id: "handy_q6",
        text: "Handymen should NOT perform:",
        options: ["New plumbing rough-in or main supply line work", "Replacing a faucet washer", "Caulking around tubs", "Replacing a toilet flapper"],
        correctAnswer: 0
      },
      {
        id: "handy_q7",
        text: "Which is a common minor electrical task for handymen?",
        options: ["Replacing outlets or switches", "New circuit installation in panels", "Service entrance work", "Industrial motor wiring"],
        correctAnswer: 0
      },
      {
        id: "handy_q8",
        text: "Furniture assembly demand is driven by:",
        options: ["Flat-pack retailers like IKEA and Wayfair", "Only custom woodworking shops", "Only antique dealers", "Only office supply stores"],
        correctAnswer: 0
      },
      {
        id: "handy_q9",
        text: "Handyman services matter because small issues:",
        options: ["Compound into larger, more expensive problems", "Always fix themselves", "Only affect new homes", "Never impact property value"],
        correctAnswer: 0
      },
      {
        id: "handy_q10",
        text: "The handyman business is relationship-driven, so success relies on:",
        options: ["Repeat customers and trust", "One-time viral ads only", "Avoiding customer communication", "Short-term discounts only"],
        correctAnswer: 0
      }
    ]
  },
  garageDoor: {
    id: "garageDoor",
    title: "Garage Door Assessment",
    description: "Safety and mechanical check for garage door systems.",
    questions: [
      {
        id: "gd_q1",
        text: "What is the most dangerous component of a garage door system to adjust without training?",
        options: ["The rollers", "The torsion spring", "The remote battery", "The weather stripping"],
        correctAnswer: 1
      },
      {
        id: "gd_q2",
        text: "Which door type is described as the most common residential choice and composed of 4-6 panels?",
        options: ["Roll-up garage doors", "Sectional garage doors", "Tilt-up garage doors", "Side-hinged doors"],
        correctAnswer: 1
      },
      {
        id: "gd_q3",
        text: "Automatic garage doors commonly include which features?",
        options: ["Safety sensors and Wi-Fi connectivity", "Only manual operation", "No integration with smart systems", "No safety features"],
        correctAnswer: 0
      },
      {
        id: "gd_q4",
        text: "A listed benefit of garage door maintenance is:",
        options: ["Improved safety and security", "Eliminating the need for inspections", "Reducing home value", "Increasing pest entry"],
        correctAnswer: 0
      },
      {
        id: "gd_q5",
        text: "Roll-up garage doors are described as:",
        options: ["Slats that coil around a drum above", "One-piece panels that swing outward", "Side-hinged barn-style doors only", "Unsupported by tracks"],
        correctAnswer: 0
      },
      {
        id: "gd_q6",
        text: "Tilt-up garage doors are:",
        options: ["One-piece panels that swing outward then tilt up", "Composed of 4-6 panels", "Only used in warehouses", "Always side-hinged"],
        correctAnswer: 0
      },
      {
        id: "gd_q7",
        text: "Side-hinged garage doors:",
        options: ["Swing outward from side hinges", "Roll into a ceiling drum", "Slide vertically in tracks only", "Require no hinges"],
        correctAnswer: 0
      },
      {
        id: "gd_q8",
        text: "Sectional garage doors are supported by:",
        options: ["Rollers in a track system", "Cables only without tracks", "Floor hinges only", "Magnets"],
        correctAnswer: 0
      },
      {
        id: "gd_q9",
        text: "Automatic garage doors can integrate with smart home systems like:",
        options: ["myQ", "Only analog radios", "No integrations at all", "Manual latch systems only"],
        correctAnswer: 0
      },
      {
        id: "gd_q10",
        text: "Garage door service businesses serve:",
        options: ["Residential homeowners and commercial property owners", "Only apartment renters", "Only government buildings", "Only industrial factories"],
        correctAnswer: 0
      }
    ]
  }
};
