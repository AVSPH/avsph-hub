import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const carpetCleaningSections: DocGroup[] = [
  {
    title: "CARPET CLEANING BASICS",
    items: [
      {
        id: "carpet-introduction",
        label: "Introduction to Carpet Cleaning",
        icon: Sparkles,
        sections: [
          {
            title: "What Is Carpet Cleaning?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Carpet cleaning is the professional process of removing dirt, stains, allergens, bacteria, and odors from carpet fibers using specialized equipment and cleaning solutions. Unlike regular vacuuming, professional carpet cleaning reaches deep into the carpet pile to extract embedded debris that household tools simply cannot remove.</p>
                <p>Carpet cleaning services are provided for both <strong className="text-foreground">residential clients</strong> (homeowners, renters, and property managers) and <strong className="text-foreground">commercial clients</strong> (offices, hotels, restaurants, schools, and healthcare facilities). The methods and equipment used vary depending on the type of carpet, the level of soiling, and the specific needs of the customer.</p>
              </div>
            )
          },
          {
            title: "Why Carpet Cleaning Services Are Important",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Carpets act like a giant filter, trapping dust, dirt, pet dander, bacteria, mold spores, and other pollutants. Professional carpet cleaning addresses all of these issues:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Health and hygiene:</strong> Deep cleaning removes bacteria, allergens, and dust mites that can trigger respiratory issues and allergies.</li>
                  <li><strong className="text-foreground">Appearance:</strong> Clean carpets look fresh, smell good, and improve the overall appearance of a home or business.</li>
                  <li><strong className="text-foreground">Longevity:</strong> Regular professional cleaning extends the life of carpet by removing abrasive particles that break down fibers over time.</li>
                  <li><strong className="text-foreground">Odor control:</strong> Pets, spills, and general use create persistent odors that only professional treatment can fully eliminate.</li>
                  <li><strong className="text-foreground">Compliance:</strong> Commercial properties in food service and healthcare often have cleanliness standards that require regular professional cleaning.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Overview of the Carpet Cleaning Industry",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The carpet cleaning industry is a well-established segment of the broader cleaning services market. Key facts about the industry:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Carpet cleaning is in demand year-round, with busy periods in spring (spring cleaning) and fall (pre-holiday preparation).</li>
                  <li>The industry serves both residential and commercial markets, with commercial accounts often providing higher and more consistent revenue.</li>
                  <li>Technicians must be knowledgeable about fiber types, cleaning chemistry, and equipment to deliver safe, effective results.</li>
                  <li>Many companies expand their offerings to include upholstery, tile and grout, area rugs, and water damage restoration.</li>
                  <li>Customer trust and referrals are the lifeblood of carpet cleaning businesses; a reputation for quality and reliability drives long-term growth.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-methods",
        label: "Cleaning Methods",
        icon: Droplets,
        sections: [
          {
            title: "Hot Water Extraction (Steam Cleaning)",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Hot water extraction (HWE) is the most widely used and recommended professional carpet cleaning method. Hot water mixed with a cleaning solution is injected deep into the carpet pile under high pressure, then immediately extracted along with dissolved dirt and debris using a powerful vacuum system.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm">
                    <p className="font-semibold text-foreground mb-1">Best For</p>
                    <p>Heavily soiled carpets, deep cleaning, residential use</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm">
                    <p className="font-semibold text-foreground mb-1">Drying Time</p>
                    <p>4 to 12 hours depending on airflow, humidity, and carpet thickness</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-primary/5 text-sm">
                    <p className="font-semibold text-primary mb-1">Industry Tip</p>
                    <p>The IICRC recommends hot water extraction as the preferred method for most residential carpet cleaning.</p>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Dry Carpet Cleaning",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Dry carpet cleaning uses a very low-moisture compound or powder that is worked into the carpet fibers. The compound absorbs dirt and debris, and is then vacuumed out, leaving it clean and dry almost immediately.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Best For</p><p>Commercial settings that cannot afford long dry times, maintenance cleaning between deep cleans</p></div>
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Drying Time</p><p>Near-instant — carpets are dry and ready to use right away</p></div>
                </div>
              </div>
            )
          },
          {
            title: "Shampoo Cleaning",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>An older method involving a foamy cleaning solution applied to the carpet and scrubbed in with a rotary brush machine. The foam encapsulates dirt, and once dry, it is vacuumed up. Can leave residue that attracts dirt more quickly if not rinsed properly.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Best For</p><p>Heavy-traffic commercial areas as a maintenance cleaning method</p></div>
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Drying Time</p><p>Several hours; residue must be thoroughly vacuumed once dry</p></div>
                </div>
              </div>
            )
          },
          {
            title: "Bonnet Cleaning",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>A surface-level cleaning method popular in hotels and commercial facilities for quick results. A rotary machine with an absorbent pad (bonnet) buffs the carpet surface, pulling up dirt from the top layer of fibers. It does not clean deep into the pile.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Best For</p><p>Interim or maintenance cleaning in commercial environments where speed is prioritized</p></div>
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Drying Time</p><p>1 to 2 hours</p></div>
                </div>
              </div>
            )
          },
          {
            title: "Encapsulation Cleaning",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>A modern, low-moisture method that uses synthetic detergents that crystallize into a powder as they dry. Dirt particles are encapsulated in this crystal structure and vacuumed away. Leaves minimal residue, dries quickly, and is more environmentally friendly than traditional shampooing.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Best For</p><p>Commercial maintenance cleaning, low-moisture requirements, carpets in good overall condition</p></div>
                  <div className="p-3 border rounded-lg bg-muted/30 text-sm"><p className="font-semibold text-foreground mb-1">Drying Time</p><p>20 minutes to 1 hour</p></div>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },
  {
    title: "SERVICES & OPERATIONS",
    items: [
      {
        id: "carpet-services",
        label: "Core Services",
        icon: Wrench,
        sections: [
          {
            title: "Residential Carpet Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The foundation service for most carpet cleaning businesses. Residential clients include homeowners, renters, and property managers preparing units for new tenants. Services are typically priced by room, by square footage, or as a whole-home package. The technician cleans carpets in living areas, bedrooms, hallways, and stairs.</p>
              </div>
            )
          },
          {
            title: "Commercial Carpet Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Commercial clients include offices, retail stores, restaurants, hotels, schools, medical facilities, and apartment complexes. Commercial jobs are often larger in scale, performed during off-hours (evenings or weekends), and may be recurring contracts. Commercial cleaning requires more durable equipment and a faster turnaround to minimize business disruption.</p>
              </div>
            )
          },
          {
            title: "Upholstery Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Upholstery cleaning involves cleaning fabric-covered furniture such as sofas, armchairs, dining chairs, and ottomans. Smaller, specialized tools and gentler cleaning agents are used. This is a high-value add-on service that pairs well with carpet cleaning visits.</p>
              </div>
            )
          },
          {
            title: "Area Rug Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Area rugs — especially fine wool, silk, or handwoven rugs — often require special care. Some are cleaned on-site while others are taken to a facility for a more thorough wash, rinse, and controlled drying process. Technicians must identify fiber type and construction before selecting a cleaning method to avoid damage.</p>
              </div>
            )
          },
          {
            title: "Stain Removal",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Professional stain removal targets specific spots such as wine, coffee, ink, paint, and grease. Technicians use targeted spotting agents, heat tools, and specialized techniques. Not all stains are removable, and technicians must set realistic expectations with customers.</p>
              </div>
            )
          },
          {
            title: "Pet Odor and Stain Treatment",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Pet accidents are one of the most common reasons customers call for professional cleaning. Urine penetrates deep into the carpet backing and even the subfloor beneath it.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <strong>Important:</strong> Effective pet treatment requires enzyme-based deodorizers that break down the organic waste at the molecular level, not just mask the odor. In severe cases, the padding and subfloor may need treatment as well.
                </div>
              </div>
            )
          },
          {
            title: "Tile and Grout Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Many carpet cleaning companies also offer tile and grout cleaning using high-pressure hot water extraction tools designed for hard surfaces. Grout lines are porous and trap dirt, bacteria, and mold that mops cannot effectively remove. Popular for kitchens, bathrooms, entryways, and commercial floors.</p>
              </div>
            )
          },
          {
            title: "Mattress Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Mattress cleaning uses upholstery extraction tools to remove dust mites, skin cells, sweat residue, and allergens from mattress surfaces. Growing in popularity as awareness of mattress hygiene increases, particularly among families with young children or allergy sufferers.</p>
              </div>
            )
          },
          {
            title: "Carpet Protection Treatments",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>After cleaning, technicians may offer the application of a carpet protector such as Scotchgard or a similar product. These treatments coat carpet fibers with a protective barrier that repels liquid spills, making them easier to clean before they set into stains. A popular upsell that extends the time between professional cleanings.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-operations",
        label: "How the Business Operates",
        icon: Info,
        sections: [
          {
            title: "The Typical Service Workflow",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ol className="space-y-4">
                  {[
                    { step: "1. Customer Inquiry or Booking", desc: "A customer contacts the company by phone, email, website chat, or online booking form. They describe the areas they need cleaned, mention any special concerns (pet stains, heavy traffic, upcoming event), and ask about pricing. The first impression made during this step is critical for converting the inquiry into a booked job." },
                    { step: "2. Quoting and Pricing", desc: "The CSR or VA provides a price estimate based on the number of rooms, square footage, or specific services requested. Many companies use standard pricing charts. For larger or more complex jobs, a technician may be sent to give an on-site quote. It is important to be transparent about pricing to avoid surprises at the time of service." },
                    { step: "3. Appointment Scheduling", desc: "Once the customer agrees to the quote, an appointment is scheduled at a mutually convenient time. Customers are given a service window and receive a confirmation via text, email, or phone call. Reminder messages are typically sent the day before the appointment." },
                    { step: "4. Technician Dispatch", desc: "The dispatcher assigns the job to the appropriate technician based on their schedule, location, and skill set. The technician receives the job details, customer address, and any notes about special requirements. Equipment is loaded, and the technician heads to the job site." },
                    { step: "5. Inspection of Carpet Condition", desc: "Upon arrival, the technician walks through the areas to be cleaned. They identify fiber type, assess the level of soiling, note stains, and check for any areas of concern such as water damage, delicate materials, or furniture that needs moving." },
                    { step: "6. Pre-Treatment of Stains", desc: "Before beginning the main cleaning process, the technician applies a pre-treatment solution to heavily soiled areas or stubborn stains. This solution is allowed to dwell for a few minutes to break down and loosen embedded soils, making the main cleaning step more effective." },
                    { step: "7. Cleaning Process", desc: "The technician performs the main cleaning using the selected method (typically hot water extraction for residential jobs). They work systematically through each area, making overlapping passes to ensure complete coverage." },
                    { step: "8. Drying Process", desc: "After cleaning, the technician uses air movers (fans) to accelerate drying. Furniture is placed on protective blocks or tabs to prevent rust or dye transfer onto the damp carpet. Customers are advised to keep foot traffic to a minimum during drying." },
                    { step: "9. Final Inspection", desc: "The technician does a final walkthrough with the customer to review the results, point out any areas where stains could not be fully removed, and answer any questions. Upsell services (such as carpet protection) may be offered at this stage." },
                    { step: "10. Payment and Follow-Up", desc: "Payment is collected on-site via cash, check, or card. An invoice or receipt is provided. After the job, a follow-up message may be sent to thank the customer, request a review, and remind them about future maintenance cleaning schedules or upcoming promotions." },
                  ].map(({ step, desc }) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-foreground min-w-fit">{step}:</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ol>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">CSR & VA Reminder</p>
                  <p>Always ask the customer during booking whether they have pets, any sensitive areas, or upcoming events. This information helps the technician prepare the right solutions and sets accurate expectations for results and drying time.</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },
  {
    title: "REFERENCE & BEST PRACTICES",
    items: [
      {
        id: "carpet-terminology",
        label: "Carpet Cleaning Terminology",
        icon: BookOpen,
        sections: [
          {
            title: "Common Carpet Cleaning Terms Glossary",
            content: (
              <div className="text-muted-foreground">
                <p className="mb-4 text-sm">Familiarity with these terms is essential for everyone on the team to communicate confidently with customers, technicians, and colleagues.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-44">Term</TableHead>
                      <TableHead className="font-bold">Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { term: "Pre-Treatment", def: "A cleaning solution applied to carpet before the main cleaning process to loosen and break down soils, stains, and grease. Pre-treatment significantly improves cleaning results." },
                      { term: "Extraction", def: "The process of removing water, cleaning solution, and dissolved dirt from carpet fibers using suction. Hot water extraction is the most common extraction method." },
                      { term: "Agitation", def: "The physical action of scrubbing or brushing the carpet to work cleaning solution deeper into the fibers and loosen embedded dirt. Can be done manually or with a machine." },
                      { term: "Deodorizing", def: "The application of a product designed to neutralize or eliminate unpleasant odors from carpet. Enzyme-based deodorizers work by breaking down odor-causing organic matter." },
                      { term: "Fiber Types", def: "The material from which carpet is made. Common types include nylon (most durable), polyester, olefin/polypropylene, and wool (most delicate). Fiber type determines which cleaning method and chemicals are safe to use." },
                      { term: "pH Balance", def: "A measure of the acidity or alkalinity of a cleaning solution. Different soils and fibers require different pH levels. Most carpet cleaning solutions are slightly alkaline (pH 8–10) to cut through dirt and grease." },
                      { term: "Soil Suspension", def: "The process by which cleaning agents surround and lift soil particles, suspending them in the cleaning solution so they can be extracted from the carpet." },
                      { term: "Encapsulation", def: "A cleaning technique where a crystallizing polymer surrounds dirt particles and encapsulates them as it dries. The crystals can then be vacuumed away, leaving no sticky residue." },
                      { term: "Dwell Time", def: "The amount of time a cleaning solution is left on the carpet before extraction. Sufficient dwell time allows the solution to break down soils effectively." },
                      { term: "Wicking", def: "A phenomenon where stains or soil buried deep in the carpet pad or backing are drawn back up to the surface as the carpet dries after cleaning. Wicking can cause stains to reappear even after successful cleaning." },
                      { term: "Pile", def: "The upright fibers that form the surface of a carpet. Pile direction, density, and height affect how the carpet feels and how it should be cleaned." },
                      { term: "Carpet Protector", def: "A chemical treatment applied after cleaning to create a protective barrier on carpet fibers that repels spills and soil, making future cleaning easier." },
                      { term: "Outgassing", def: "The release of volatile organic compounds (VOCs) from cleaning chemicals, new carpets, or adhesives. Proper ventilation during and after cleaning minimizes exposure." },
                      { term: "IICRC", def: "Institute of Inspection, Cleaning and Restoration Certification. The leading certification body for carpet cleaning and restoration professionals. IICRC-certified technicians follow industry-standard best practices." },
                      { term: "CRI", def: "Carpet and Rug Institute. An industry organization that tests and certifies carpet cleaning equipment and solutions as safe and effective for use on carpets." },
                    ].map(({ term, def }) => (
                      <TableRow key={term}>
                        <TableCell className="font-semibold text-foreground align-top">{term}</TableCell>
                        <TableCell className="text-sm">{def}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-roles",
        label: "Roles in a Carpet Cleaning Business",
        icon: Users,
        sections: [
          {
            title: "Team Roles & Responsibilities",
            content: (
              <div className="text-muted-foreground">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-52">Role</TableHead>
                      <TableHead className="font-bold">Responsibilities</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { role: "Carpet Cleaning Technician", resp: "The core field worker who performs all cleaning services. Technicians operate equipment, apply chemicals, treat stains, interact with customers on-site, and are responsible for delivering quality results. Ideally IICRC-certified." },
                      { role: "Lead Technician / Crew Leader", resp: "An experienced technician who manages a two-person crew, handles complex jobs, performs quality checks, and mentors junior technicians. Often responsible for upselling additional services on-site." },
                      { role: "Customer Service Representative (CSR)", resp: "Handles incoming customer calls, texts, and emails. Collects job information, provides quotes, schedules appointments, and answers questions. The CSR is the voice of the company and plays a major role in customer satisfaction." },
                      { role: "Dispatcher", resp: "Coordinates the daily schedule for technicians, assigns jobs based on location and skill level, monitors job progress throughout the day, and adjusts the schedule as needed for delays or emergency calls." },
                      { role: "Sales Representative", resp: "Focuses on acquiring commercial accounts, maintenance contracts, and large residential clients. May conduct walk-throughs of facilities to assess scope and present customized proposals." },
                      { role: "Operations Manager", resp: "Oversees daily business operations, including scheduling, equipment maintenance, inventory of cleaning supplies, technician performance, and customer satisfaction metrics." },
                      { role: "Business Owner", resp: "Sets company strategy, manages finances, oversees hiring, and makes decisions about pricing, services, and growth. In small businesses, the owner often also works in the field." },
                    ].map(({ role, resp }) => (
                      <TableRow key={role}>
                        <TableCell className="font-semibold text-foreground align-top">{role}</TableCell>
                        <TableCell className="text-sm">{resp}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-tools",
        label: "Tools & Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Common Carpet Cleaning Equipment",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm">Professional carpet cleaning requires a range of specialized tools. Familiarity with this equipment helps support staff understand the scope of work involved in each job.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Carpet Extractors", desc: "The primary piece of equipment for hot water extraction. Truck-mounted extractors offer the most powerful suction and highest water temperatures. Portable extractors are ideal for high-rise apartments or areas where a truck cannot reach." },
                    { name: "Steam Cleaning Machines", desc: "True steam machines generate steam using a boiler and apply it to carpet or upholstery surfaces. Effective for sanitizing and treating allergens and bacteria." },
                    { name: "Rotary Machines", desc: "Use a spinning brush or pad to agitate carpet fibers or hard surfaces. Used for shampoo cleaning, bonnet cleaning, and working pre-treatment solutions into heavily soiled carpets before extraction." },
                    { name: "Air Movers and Dryers", desc: "Placed on the carpet after cleaning to accelerate evaporation and reduce drying times. Using air movers prevents mold and mildew growth and minimizes inconvenience for the customer." },
                    { name: "Vacuum Cleaners", desc: "Professional-grade vacuums used before and after cleaning to remove loose surface debris. A thorough pre-vacuum is an important first step, as it removes dry soil before it can turn to mud when wet." },
                    { name: "Spot Cleaning Tools", desc: "Hand-held extraction wands, spotting syringes, and soft-bristle brushes used to treat and extract specific stain areas. Spotting kits contain a variety of targeted chemical solutions for different stain types." },
                    { name: "Cleaning Chemicals & Detergents", desc: "Professional solutions formulated for specific carpet types and soil conditions: pre-sprays, enzyme-based pet treatments, deodorizers, carpet protectors, acid rinses, and pH-neutral upholstery cleaners." },
                  ].map(({ name, desc }) => (
                    <div key={name} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{name}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-safety",
        label: "Safety & Best Practices",
        icon: ShieldCheck,
        sections: [
          {
            title: "Proper Chemical Handling",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Always read product labels and Safety Data Sheets (SDS) before using any chemical.</li>
                  <li>Use appropriate PPE such as gloves and eye protection when mixing or applying concentrated chemicals.</li>
                  <li>Never mix chemicals unless directed by the product manufacturer, as some combinations can produce toxic fumes.</li>
                  <li>Store chemicals in labeled containers in a well-ventilated area away from heat sources and out of reach of children.</li>
                  <li>Follow dilution ratios precisely — more concentrated does not always mean better results and can damage carpet fibers.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Protecting Furniture and Flooring",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Place furniture tabs, foam blocks, or plastic guards under furniture legs before cleaning to prevent rust or dye transfer onto damp carpet.</li>
                  <li>Protect hardwood floors, tile, and baseboards from overspray and moisture during cleaning.</li>
                  <li>Inform customers before moving heavy furniture and use sliders to avoid scratching hard floors.</li>
                  <li>Document any pre-existing damage (stains, tears, furniture scratches) with photos before beginning work.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Preventing Mold and Over-Wetting",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Do not over-saturate carpet — this is one of the most common causes of mold, mildew, and wicking.</li>
                  <li>Always use air movers after hot water extraction to speed drying and keep drying time under 12 hours.</li>
                  <li>Advise customers to keep windows open (weather permitting) and to run their HVAC system to aid drying.</li>
                  <li>In humid conditions or on thick carpets, use additional air movers and allow extra drying time.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Safe Equipment Usage",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Inspect all equipment before each use for damaged cords, hoses, or fittings.</li>
                  <li>Keep hoses and cords organized and secured to prevent trip hazards for customers and technicians.</li>
                  <li>Lift heavy equipment using proper technique — bend at the knees, not the waist — to prevent back injuries.</li>
                  <li>Never leave running equipment unattended, especially around children or pets.</li>
                </ul>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Safety Reminder</p>
                  <p>Technicians should complete a brief walkthrough with the customer before any work begins to confirm expectations, document existing damage, and identify any hazards in the work area. A signed pre-inspection form protects both the technician and the company.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-problems",
        label: "Common Customer Problems",
        icon: AlertCircle,
        sections: [
          {
            title: "Stains from Food or Drinks",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Coffee, red wine, juice, sauces, and cooking grease are among the most common stain complaints. The older a stain, the more difficult it is to remove — heat from regular cleaning can permanently set some stains if not pre-treated properly.</p>
                <p className="text-sm italic">Advise customers: never rub a fresh spill — blot it and call a professional promptly.</p>
              </div>
            )
          },
          {
            title: "Pet Accidents",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Dog and cat urine are particularly damaging to carpets. Urine soaks through the carpet, backing, and pad, and into the subfloor. As it dries, it leaves uric acid crystals and bacteria that create persistent, strong odors. Enzyme-based treatments are necessary to break down these compounds. In severe cases, full carpet removal and subfloor treatment may be the only effective solution.</p>
              </div>
            )
          },
          {
            title: "Dirt Buildup",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>High-traffic areas — hallways, entryways, stairs, and living rooms — accumulate dirt rapidly. When dirt becomes embedded in carpet fibers, it acts like sandpaper, cutting and degrading the fibers with every footstep. Regular professional cleaning removes this embedded grit and significantly extends carpet life.</p>
              </div>
            )
          },
          {
            title: "Odors",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Musty, pet, smoke, and food odors penetrate carpet fibers and padding and are very difficult to eliminate with surface-only treatments. Professional deodorizers and enzyme treatments reach deeper into the carpet structure to neutralize odor at the source rather than simply masking it.</p>
              </div>
            )
          },
          {
            title: "Allergens and Dust",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Carpets trap dust mites, pollen, pet dander, mold spores, and other allergens that are stirred back into the air with foot traffic. This is a significant concern for households with allergy sufferers or asthma patients. Regular professional extraction removes these trapped particles, contributing to better indoor air quality.</p>
              </div>
            )
          },
          {
            title: "Water Damage",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Flooding, plumbing leaks, and roof leaks can saturate carpet and padding, creating an ideal environment for mold growth within 24 to 48 hours.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  Water damage jobs require rapid extraction of moisture using powerful equipment and industrial air movers and dehumidifiers. This is often a separate specialty service and may involve restoration certifications.
                </div>
              </div>
            )
          },
          {
            title: "Discoloration and Fading",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Some discoloration is caused by improper cleaning products used by the homeowner, bleach splatter, or sun fading. Technicians can sometimes correct uneven discoloration using specialized color repair products, but customers should be advised upfront if a full correction is not possible.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "carpet-importance",
        label: "Why Carpet Cleaning Matters",
        icon: Heart,
        sections: [
          {
            title: "The Importance of Professional Carpet Cleaning",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Professional carpet cleaning is not a luxury — it is a practical investment in health, property value, and quality of life.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Hygiene and Sanitation", body: "Carpets harbor thousands of bacteria per square inch — far more than most hard surfaces. Professional hot water extraction using heated water and professional-grade detergents kills and removes harmful microorganisms at a level that household cleaning cannot achieve. For commercial clients in food service, healthcare, and hospitality, clean floors are often required for licensing, insurance, and regulatory compliance." },
                    { title: "Indoor Air Quality", body: "The EPA identifies indoor air pollution as one of the top environmental health risks. Carpets loaded with trapped pollutants release those particles back into the breathing zone every time someone walks on them. Professional cleaning dramatically reduces the concentration of allergens, bacteria, mold spores, and VOCs. For families with young children who spend time on the floor, this is especially important." },
                    { title: "Extending Carpet Lifespan", body: "Replacing carpet is expensive. A professional cleaning regimen can more than double the usable life of a carpet. Abrasive soil particles act like tiny blades, cutting and fraying fibers with every footstep. Most carpet manufacturers recommend professional cleaning every 12 to 18 months to maintain the validity of carpet warranties." },
                    { title: "Appearance and Maintenance", body: "In a business setting, dirty or dingy carpet projects a negative image. In a home, clean carpets contribute to a sense of order and pride. Professional cleaning restores the color, texture, and fresh appearance of carpet fibers in a way that consumer-grade rental equipment simply cannot match." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Final Note for New Team Members</p>
                  <p>Understanding why carpet cleaning matters helps every member of the team — from CSRs to technicians to virtual assistants — speak with genuine enthusiasm and confidence when talking to customers. When customers understand the real value of the service, they are more likely to book, to accept additional services, and to become loyal, recurring clients. Welcome to the team!</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
