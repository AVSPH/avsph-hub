import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const poolCleaningSections: DocGroup[] = [
  {
    title: "POOL CLEANING BASICS",
    items: [
      {
        id: "pool-introduction",
        label: "Introduction to Pool Cleaning",
        icon: Waves,
        sections: [
          {
            title: "What Is a Pool Cleaning Business?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>A pool cleaning business is a professional service company that provides scheduled maintenance, chemical balancing, equipment care, and repair services for residential and commercial swimming pools, spas, and hot tubs. Pool service technicians are trained in water chemistry, filtration systems, pool equipment, and the physical cleaning tasks required to keep pools safe, sanitary, and visually appealing.</p>
                <p>Pool cleaning companies range from solo owner-operators servicing a neighborhood route to large regional companies with dozens of technicians and fleet vehicles. All share the same core mission: to ensure that every pool in their care is clean, chemically balanced, safe to swim in, and mechanically sound — so their clients can simply enjoy the water without worry.</p>
                <div className="p-4 bg-muted/50 border rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Industry Insight</p>
                  <p className="text-sm">The pool service industry is largely recession-resistant. Pool owners who have invested significantly in their outdoor living space continue to maintain their pools regardless of economic conditions. This makes pool service one of the more stable home service businesses available.</p>
                </div>
              </div>
            )
          },
          {
            title: "Why Regular Pool Maintenance Is Important",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Without consistent, knowledgeable maintenance, pools deteriorate rapidly — both as sanitary environments and as mechanical systems.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Health hazards:</strong> Improperly balanced water allows bacteria, viruses, and parasites to thrive. Recreational Water Illnesses (RWIs) — including E. coli, Giardia, and Cryptosporidium — are directly linked to poorly maintained pool water.</li>
                  <li><strong className="text-foreground">Equipment damage:</strong> Corrosive or scaling water attacks metal fittings, pump seals, heater elements, and pool surfaces. Neglected filters and pumps fail prematurely.</li>
                  <li><strong className="text-foreground">Structural deterioration:</strong> Low pH etches plaster, fiberglass, and grout, requiring costly resurfacing. High pH causes unsightly calcium scaling on tiles and surfaces.</li>
                  <li><strong className="text-foreground">Algae growth:</strong> Without adequate sanitizer levels and circulation, algae can establish in as little as 24 to 48 hours, turning a clear pool green or black.</li>
                  <li><strong className="text-foreground">Safety risks:</strong> Cloudy or green pool water reduces visibility, creating a drowning risk. Malfunctioning electrical equipment poses electrocution hazards.</li>
                  <li><strong className="text-foreground">Regulatory compliance:</strong> Commercial pools are subject to regular health department inspections. Failure to maintain compliant standards can result in mandatory pool closure.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Overview of the Pool Service Industry",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The pool service industry is a strong and growing segment of the outdoor living and home services market.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Demand is concentrated in warmer climates (Florida, Texas, Arizona, California) where outdoor pools are used year-round. In cooler climates, there is a strong seasonal demand pattern with winter pool closing and opening services.</li>
                  <li>Recurring weekly service routes are the backbone of most pool service businesses, providing predictable, stable revenue and strong customer relationships.</li>
                  <li>The industry serves both residential clients (private homeowners) and commercial clients (hotels, resorts, HOA community pools, fitness centers, and apartment complexes).</li>
                  <li>Growing consumer interest in outdoor living spaces and backyard renovations is driving consistent growth in pool installations and demand for professional pool service.</li>
                  <li>Pool service businesses frequently expand into adjacent services including equipment repair, pool remodeling, water feature maintenance, and retail chemical sales.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "pool-types",
        label: "Types of Pools Serviced",
        icon: List,
        sections: [
          {
            title: "Residential Swimming Pools",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Privately owned pools located on single-family home properties. They are the most common type of pool serviced. Residential pools range from small above-ground units to large custom in-ground pools with waterfalls, heating systems, and advanced automation. Weekly or biweekly service visits are standard. The homeowner relationship is highly personal — trust and reliability are the most valued qualities in a pool service provider.</p>
              </div>
            )
          },
          {
            title: "Commercial Pools",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Commercial pools serve multiple users simultaneously and are subject to far higher bather loads than residential pools. Chemical demand is higher, filtration requirements are more stringent, and the consequences of water quality failures are more serious. Commercial pools are inspected by local health departments and must maintain detailed chemical log books. Service visits are typically more frequent (sometimes daily) and require thorough documentation. Commercial accounts are high-value contracts that often require specialized certification in commercial pool operations.</p>
              </div>
            )
          },
          {
            title: "In-Ground Pools",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Permanent structures built into the ground, constructed of gunite/shotcrete (concrete), fiberglass, or vinyl liner. The most common type of permanent residential and commercial pool. Maintenance requires regular brushing of walls and floors, chemical balancing, filter care, and equipment monitoring. The surface material significantly affects the chemical balance required — plaster pools need particularly careful pH management to prevent etching or scaling.</p>
              </div>
            )
          },
          {
            title: "Above-Ground Pools",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Less expensive, easier to install, and typically smaller than in-ground pools. They use cartridge or sand filter systems and are generally serviced less frequently. Because above-ground pools hold less water volume, chemical changes happen more rapidly and require careful monitoring. Technicians must take care not to damage the vinyl liner during cleaning and vacuuming.</p>
              </div>
            )
          },
          {
            title: "Saltwater Pools",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Saltwater pools use a <strong className="text-foreground">salt chlorine generator (SWG)</strong> to convert dissolved salt in the water into chlorine through electrolysis. They do not use chlorine tablets or liquid chlorine as the primary sanitizer. The water has a softer feel and is gentler on the eyes and skin. Maintenance involves monitoring and adjusting salt levels, inspecting and cleaning the salt cell (which can scale with calcium deposits), and balancing standard chemistry parameters.</p>
              </div>
            )
          },
          {
            title: "Chlorine Pools",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Traditional chlorine pools use chlorine tablets (trichlor or dichlor), liquid chlorine (sodium hypochlorite), or granular chlorine as the primary sanitizer. The most common pool type. Maintaining proper free chlorine levels (typically <strong className="text-foreground">1 to 3 ppm</strong> for residential pools) is the most critical chemistry task. Stabilizer (cyanuric acid) levels must also be managed — too low allows UV to rapidly degrade chlorine; too high (over-stabilization) prevents chlorine from effectively sanitizing.</p>
              </div>
            )
          },
          {
            title: "Spas and Hot Tubs",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Spas and hot tubs operate at significantly higher water temperatures (typically <strong className="text-foreground">100 to 104°F</strong>), which dramatically accelerates chemical consumption and bacterial growth. Chemistry must be checked and adjusted much more frequently. Spas require regular draining and refilling (typically every 3 to 4 months) because high temperatures cause rapid buildup of total dissolved solids (TDS). Spa service is a premium-priced add-on that pairs naturally with pool maintenance accounts.</p>
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
        id: "pool-services",
        label: "Core Services",
        icon: CheckCircle,
        sections: [
          {
            title: "Regular Pool Cleaning and Maintenance",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The foundation service of any pool business. A standard weekly service visit includes all routine tasks: skimming the surface, emptying baskets, vacuuming, brushing surfaces, testing and adjusting chemicals, and inspecting equipment. This recurring service is offered on a weekly, biweekly, or monthly schedule and typically represents the core of a pool company's revenue. Consistent service builds strong customer relationships and creates opportunities to identify and address problems before they become costly repairs.</p>
              </div>
            )
          },
          {
            title: "Pool Vacuuming",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Removes debris, dirt, and sediment that has settled on the pool floor. Performed using a manual vacuum head connected to a telescopic pole and the pool's circulation system, or with an automatic pool cleaner. Manual vacuuming provides more thorough results, particularly in pools with heavy debris or algae. For pools with severe contamination, the technician may <strong className="text-foreground">vacuum to waste</strong> — bypassing the filter entirely to prevent it from becoming overwhelmed.</p>
              </div>
            )
          },
          {
            title: "Skimming Debris from the Water Surface",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Surface skimming removes floating debris including leaves, insects, pollen, and organic matter before it sinks and consumes chlorine as it decomposes. Performed at the beginning of every service visit using a flat leaf skimmer net on a telescopic pole. Skimmer baskets are also emptied at every visit. Heavy leaf debris can rapidly deplete sanitizer levels and cloud the water, making timely skimming a critical first step.</p>
              </div>
            )
          },
          {
            title: "Brushing Pool Walls and Tiles",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Brushing dislodges algae, biofilm, and calcium deposits from pool walls, steps, benches, and the waterline tile before they become visible problems. Plaster and concrete pools benefit from regular brushing because their porous surfaces are susceptible to algae colonization. Tile lines at the waterline accumulate calcium scaling and sunscreen residue. Regular brushing prevents the development of black algae, which is the most difficult algae species to eliminate.</p>
              </div>
            )
          },
          {
            title: "Chemical Testing and Balancing",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The most technically demanding and critical task in pool service. Technicians test for multiple parameters at every service visit: <strong className="text-foreground">free chlorine, pH, total alkalinity, calcium hardness, cyanuric acid,</strong> and salt (for saltwater pools). Chemical adjustments must be made in the correct sequence to avoid inadvertently correcting one parameter while worsening another.</p>
                <p className="text-sm italic">Imbalanced water is either corrosive (at low pH) or scaling (at high pH), both of which damage pool surfaces and equipment.</p>
              </div>
            )
          },
          {
            title: "Filter Cleaning and Maintenance",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The pool's filtration system continuously removes suspended particles from the water to maintain clarity. Sand filters are backwashed to flush trapped debris out of the filter media. Cartridge filters are removed, rinsed, and periodically soaked in a chemical cleaner. Diatomaceous earth (DE) filters are backwashed and recharged with fresh DE powder. Filter cartridges have a finite lifespan and must be replaced periodically.</p>
              </div>
            )
          },
          {
            title: "Pool Equipment Inspection",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Every service visit should include a visual inspection of all pool equipment: the pump motor, pump basket, filter pressure gauge, heater, automated chemical systems, salt cell, automation controllers, lights, and any water features. Early identification of abnormal pump noise, elevated filter pressure, equipment leaks, or unusual readings allows the technician to alert the customer and recommend repairs before a minor issue becomes a major equipment failure.</p>
              </div>
            )
          },
          {
            title: "Algae Treatment",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>A reactive service performed when algae colonizes a pool. Green algae (most common) can typically be resolved with a shock treatment and algaecide application. Yellow/mustard algae is more resistant. Black algae (technically a cyanobacterium) is the most difficult — it roots into plaster surfaces and has a protective outer layer requiring repeated brushing and concentrated chlorine treatment.</p>
                <div className="p-3 bg-primary/5 border rounded-lg text-sm">Algae treatment services command a premium price above the standard service fee.</div>
              </div>
            )
          },
          {
            title: "Pool Opening and Closing Services",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>In climates with freezing winters, seasonal pool opening (spring) and closing (winterization/fall) services are essential and highly profitable.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 border rounded-lg bg-muted/30">
                    <p className="font-semibold text-foreground mb-1">Pool Opening</p>
                    <p>Remove/store winter cover, inspect equipment after winter storage, reassemble plumbing, fill pool to proper level, start circulation, perform initial chemical startup.</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-muted/30">
                    <p className="font-semibold text-foreground mb-1">Pool Closing</p>
                    <p>Clean pool, balance chemistry to winter specifications, lower water level, blow out plumbing lines with compressed air, add antifreeze where appropriate, install winter cover.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pool-maintenance-tasks",
        label: "Routine Maintenance Tasks",
        icon: Wrench,
        sections: [
          {
            title: "Water Testing and Chemical Balancing",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Performed at every service visit using test strips, drop test kits (DPD), or digital photometric testers. Once readings are obtained, the technician calculates the required chemical additions and adds the correct amounts directly to the pool. Chemical adjustments must be made in the correct sequence — alkalinity before pH, for example — to avoid inadvertently worsening another parameter.</p>
              </div>
            )
          },
          {
            title: "Removing Debris and Leaves",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Includes skimming the water surface with a leaf net, emptying the built-in skimmer basket(s), emptying the pump basket, and vacuuming or netting any debris that has settled on the pool floor. In wooded or high-debris environments, this can be the most time-consuming part of the visit. Failing to remove organic debris promptly leads to accelerated chlorine consumption, water discoloration, and algae growth.</p>
              </div>
            )
          },
          {
            title: "Cleaning Skimmer Baskets",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The skimmer basket is a removable collection basket located in the skimmer housing built into the pool wall at the waterline. Its purpose is to trap large debris before it enters the pump and filter system. A clogged skimmer basket restricts water flow, reducing the efficiency of the entire circulation system and placing additional strain on the pump motor. Technicians remove, empty, and inspect the skimmer basket at every visit.</p>
              </div>
            )
          },
          {
            title: "Vacuuming Pool Floors",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Even with a functional automatic pool cleaner, manual vacuuming is recommended at each service visit to address areas the automatic cleaner misses — corners, steps, benches, and areas near return jets. Technique matters: moving too quickly stirs up sediment rather than vacuuming it. For pools with DE or cartridge filters, pre-cleaning the filter before vacuuming helps maintain suction.</p>
              </div>
            )
          },
          {
            title: "Brushing Pool Surfaces",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Performed using a curved pool brush suited to the surface type — nylon bristles for fiberglass and vinyl, and steel-bristle or combination brushes for plaster and concrete. The technician brushes all walls, steps, benches, and the floor perimeter in overlapping, downward strokes toward the main drain. Regular brushing (at minimum every two weeks) is critical for plaster pools, which are the most susceptible to algae attachment.</p>
              </div>
            )
          },
          {
            title: "Backwashing Filters",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The process of reversing the flow of water through a sand or DE filter to flush captured debris out through the waste line. A filter should be backwashed when the filter pressure gauge reads <strong className="text-foreground">8 to 10 psi above the clean operating pressure</strong>. After backwashing, the rinse setting is run briefly to re-settle the filter media before returning to normal filtration.</p>
              </div>
            )
          },
          {
            title: "Monitoring Water Levels",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Pool water levels naturally drop due to evaporation, splashing, and backwashing. The correct water level is the middle of the skimmer opening — too low and the skimmer draws air, potentially running the pump dry and causing catastrophic pump motor failure; too high and the skimmer cannot function effectively. Technicians check and adjust water levels at each visit. Unusually rapid water level drops should prompt an inspection for leaks.</p>
              </div>
            )
          },
          {
            title: "Service Visit Sequence (Quick Reference)",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p className="text-sm">A properly structured service visit follows this order:</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Arrive and assess pool condition</li>
                  <li>Empty skimmer and pump baskets</li>
                  <li>Skim water surface and remove debris</li>
                  <li>Brush walls, tiles, and steps</li>
                  <li>Vacuum pool floor</li>
                  <li>Test water chemistry</li>
                  <li>Add chemicals and balance water</li>
                  <li>Check and adjust water level</li>
                  <li>Inspect equipment</li>
                  <li>Document service and notify customer of any issues</li>
                </ol>
              </div>
            )
          }
        ]
      },
      {
        id: "pool-operations",
        label: "How the Business Operates",
        icon: Info,
        sections: [
          {
            title: "The Typical Service Workflow",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ol className="space-y-4">
                  {[
                    { step: "1. Customer Inquiry or Booking", desc: "A potential customer contacts the company by phone, email, website form, or online booking platform. They describe their pool type, size, location, current condition, and the service they are looking for. The CSR or VA collects all relevant information, including pool type, sanitizer type, approximate gallonage, and any specific concerns." },
                    { step: "2. Service Consultation and Pricing", desc: "Based on the information gathered, the CSR provides a service quote. Pool service pricing is typically based on pool size, service frequency (weekly vs. biweekly), the type of service (maintenance only vs. full service including chemicals), and geographic location. For new customers, a one-time initial clean-up fee is often charged if the pool has not been professionally maintained recently." },
                    { step: "3. Scheduling Routine Maintenance Visits", desc: "A recurring service schedule is established. Weekly service days are assigned based on the technician's route in the customer's neighborhood. The customer receives a welcome communication including their assigned service day, technician contact information, and what to expect from the service." },
                    { step: "4. Technician Arrival and Inspection", desc: "The technician arrives during the scheduled service window and conducts a brief initial assessment before beginning work. They check the overall pool appearance, confirm equipment is running properly, and note anything unusual compared to the previous visit. For new customers, the first visit includes a full assessment of pool condition, equipment age and function, and chemical baseline readings." },
                    { step: "5. Performing Cleaning and Maintenance Tasks", desc: "The technician performs all required cleaning tasks in the correct sequence: emptying baskets, skimming, brushing, and vacuuming. All areas of the pool are addressed — walls, floor, steps, benches, waterline tiles, and all equipment baskets." },
                    { step: "6. Testing and Adjusting Chemicals", desc: "After physical cleaning is complete, the technician tests the water, records results, and calculates required chemical adjustments. Chemicals are added in the correct order and in the correct amounts — never guessed. For customers on a full-service program (chemicals included), the technician adds all required chemicals from their service vehicle." },
                    { step: "7. Reporting Pool Condition to the Customer", desc: "Many pool companies use field service software to automatically generate a service report at the end of each visit. The report includes chemistry readings before and after treatment, chemicals added, observations about equipment or pool condition, photos if applicable, and any recommended repairs. This report is automatically emailed or pushed to the customer through a client portal." },
                    { step: "8. Payment and Service Documentation", desc: "For recurring service accounts, payment is typically handled automatically through credit card on file, ACH transfer, or monthly invoicing. One-time services (pool openings, closings, algae treatments, repairs) are invoiced separately. All service records, chemical logs, and invoices are stored in the company's service management system." },
                  ].map(({ step, desc }) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-foreground min-w-fit">{step}:</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ol>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">CSR & VA Pro Tip</p>
                  <p>When a new customer calls, always ask: What type of pool (in-ground/above-ground, plaster/fiberglass/vinyl, chlorine/saltwater)? Approximate size? Is it currently running? When was it last professionally serviced? Are there any visible problems right now? This allows for accurate quoting and ensures the technician arrives prepared for the first visit.</p>
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
        id: "pool-terminology",
        label: "Pool Maintenance Terminology",
        icon: BookOpen,
        sections: [
          {
            title: "Common Pool Service Terms Glossary",
            content: (
              <div className="text-muted-foreground">
                <p className="mb-4 text-sm">Familiarity with these terms is essential for confident communication with customers, technicians, and colleagues.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-44">Term</TableHead>
                      <TableHead className="font-bold">Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { term: "pH Balance", def: "A measure of the acidity or alkalinity of pool water on a scale of 0 to 14. The ideal range for pool water is 7.4 to 7.6. Low pH (acidic) corrodes equipment and irritates swimmers; high pH (alkaline) reduces chlorine effectiveness and causes scaling." },
                      { term: "Free Chlorine", def: "The active, available chlorine in pool water that provides sanitization. Ideal range is 1 to 3 ppm for residential pools, 2 to 4 ppm for commercial pools. Free chlorine is consumed by sunlight, organic matter, and bather load and must be replenished regularly." },
                      { term: "Total Alkalinity", def: "A measure of the water's ability to resist changes in pH. Ideal range is 80 to 120 ppm. Proper alkalinity acts as a buffer that stabilizes pH and prevents it from fluctuating rapidly." },
                      { term: "Calcium Hardness", def: "The measure of dissolved calcium in pool water. Ideal range is 200 to 400 ppm. Low calcium hardness causes water to leach calcium from pool surfaces (etching); high levels cause cloudy water and calcium scaling on surfaces and equipment." },
                      { term: "Cyanuric Acid (Stabilizer)", def: "A chemical that protects chlorine from rapid degradation by UV sunlight. Ideal range is 30 to 50 ppm for outdoor pools. Over-stabilization (above 80 to 100 ppm) significantly reduces chlorine effectiveness and requires dilution by draining and refilling." },
                      { term: "Pool Circulation", def: "The continuous movement of water through the pump, filter, and return jets. Proper circulation ensures even chemical distribution, prevents dead spots where algae can establish, and moves debris toward the skimmer and main drain." },
                      { term: "Skimmer", def: "A collection basin built into the pool wall at the waterline that draws surface water and floating debris into the filtration system. The skimmer contains a weir door that regulates water flow and a removable basket that captures debris before it enters the pump." },
                      { term: "Pool Pump", def: "The mechanical heart of the pool's circulation system. Creates suction that draws water from the pool through the skimmer and main drain, pushes it through the filter, and returns it to the pool through the return jets. Pump failure is the most common and consequential pool equipment failure." },
                      { term: "Filter System", def: "The component responsible for removing suspended particles from the water. The three types are sand filters (most common and lowest maintenance), cartridge filters (high flow, easy to clean), and diatomaceous earth (DE) filters (finest filtration, most thorough)." },
                      { term: "Backwashing", def: "The process of reversing water flow through a sand or DE filter to flush captured debris out through the waste line. Should be performed when filter pressure rises 8 to 10 psi above normal operating pressure." },
                      { term: "Algae Bloom", def: "A rapid proliferation of algae in pool water caused by inadequate sanitizer levels, poor circulation, or warm temperatures. Algae blooms can turn pool water green, yellow, or black depending on the species and require shock treatment and algaecide to resolve." },
                      { term: "Shocking", def: "The process of adding a high dose of chlorine (or non-chlorine shock) to break down combined chlorine (chloramines), kill algae, and restore water clarity. Should be performed at dusk or night to maximize effectiveness, as sunlight rapidly degrades chlorine." },
                      { term: "Chloramines (Combined Chlorine)", def: "Chemical compounds formed when chlorine reacts with nitrogen-containing compounds (sweat, urine, body oils) from swimmers. Responsible for the strong 'chlorine smell' often associated with poorly maintained pools and cause eye and skin irritation. Eliminated by shocking." },
                      { term: "Total Dissolved Solids (TDS)", def: "The cumulative amount of all substances dissolved in pool water. As TDS rises above 1,500 to 2,000 ppm, water becomes increasingly resistant to chemical adjustment and cloudier in appearance. Remediated by partially draining and refilling the pool." },
                      { term: "Salt Chlorine Generator (SCG)", def: "A device that converts dissolved salt in pool water into chlorine through electrolysis. The cell must be inspected and cleaned regularly to remove calcium scale buildup that reduces efficiency." },
                      { term: "Parts Per Million (ppm)", def: "The unit of measurement used for pool chemical concentrations. Most chemical targets are expressed in ppm. For reference, 1 ppm equals 1 milligram per liter of water." },
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
        id: "pool-roles",
        label: "Roles in a Pool Cleaning Business",
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
                      { role: "Pool Service Technician", resp: "The primary field professional who performs all weekly service visits. Handles all physical cleaning tasks, water testing, chemical addition, and routine equipment inspection. They are the face of the company to residential customers and must combine technical knowledge with excellent interpersonal skills." },
                      { role: "Pool Maintenance Specialist", resp: "A more experienced technician who handles complex service situations, algae treatments, equipment troubleshooting, seasonal openings and closings, and customer consultations. Specialists may also mentor junior technicians and handle the most valuable commercial accounts." },
                      { role: "Customer Service Representative (CSR)", resp: "Manages all incoming customer inquiries, provides pricing information, schedules new and existing accounts, handles service change requests, addresses customer concerns, and processes payments. CSRs are the primary contact for customers between service visits." },
                      { role: "Dispatcher / Scheduler", resp: "Manages the daily and weekly technician schedules, organizing routes for maximum efficiency. Assigns new accounts to the appropriate route, handles last-minute schedule changes, monitors technician progress throughout the day, and communicates urgent issues between the field and the office." },
                      { role: "Sales Representative", resp: "Focuses on acquiring new residential and commercial accounts, conducting on-site assessments and demonstrations, preparing service proposals, and closing service agreements. Particularly important for growing the commercial account base." },
                      { role: "Operations Manager", resp: "Oversees all field and office operations including route efficiency, service quality, technician training and performance, chemical inventory, vehicle maintenance, and customer satisfaction. Responsible for ensuring that service standards are consistently met across all accounts." },
                      { role: "Business Owner", resp: "Sets the strategic direction of the company, manages finances, drives business growth, oversees hiring and company culture, and makes key decisions about pricing, services, and expansion. In smaller operations, the owner typically also performs service technician work." },
                      { role: "Virtual Assistant (VA)", resp: "Provides remote administrative and customer service support including managing online booking requests, sending service confirmations and reminders, following up after service visits, managing online reviews, data entry, and customer communication. Must be familiar with pool service terminology, service types, and pricing." },
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
        id: "pool-tools",
        label: "Tools & Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Common Pool Cleaning Equipment",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Pool Skimmers and Leaf Nets", desc: "A flat or deep-bag net mounted on a telescopic pole. Flat skimmer nets for light surface debris; deep-bag leaf rakes for heavy leaves. The first tool used at every service visit — essential for removing organic material from the surface before it sinks and consumes sanitizer." },
                    { name: "Pool Vacuum Systems", desc: "Manual vacuums consist of a vacuum head, a vacuum hose, and a telescopic pole. Automatic pool cleaners include suction-side cleaners, pressure-side cleaners, and robotic cleaners (self-powered, independent units). Robotic cleaners are the most effective automatic option and increasingly common on premium residential accounts." },
                    { name: "Pool Brushes", desc: "Nylon bristle brushes for fiberglass and vinyl liner pools (prevent surface damage); stainless steel or combination brushes for plaster and concrete pools. A curved brush designed to fit pool walls and corners provides more efficient coverage." },
                    { name: "Water Testing Kits", desc: "Options include test strips (fast but less accurate), DPD drop test kits (highly accurate colorimetric tests for chlorine and pH), and electronic/digital photometric testers (the most accurate and consistent, recommended for professional use). Professional technicians record all test results for documentation." },
                    { name: "Chemical Feeders and Dispensers", desc: "Chlorine tablet feeders (inline or offline devices that slowly dissolve trichlor tablets), salt chlorine generators (electrolytic chlorine production), and liquid chemical dosing pumps (for commercial pools that precisely dispense liquid chlorine and acid in response to automated water chemistry monitoring)." },
                    { name: "Pool Pumps and Filters", desc: "Variable-speed pumps must be programmed for correct run times and speeds. Filter pressure gauges are checked at every visit to determine if backwashing or cleaning is needed. Technicians carry replacement O-rings, gaskets, and pump baskets on their service vehicles to address minor equipment issues on the spot." },
                    { name: "Telescopic Poles", desc: "The universal handle for all pool cleaning tools — attaches to skimmer nets, brushes, vacuum heads, and algae brushes. Quality poles are made from fiberglass or aluminum, extend to lengths of 8 to 16 feet, and have secure cam-lock or flip-lock systems that prevent the pole from collapsing during use." },
                  ].map(({ name, desc }) => (
                    <div key={name} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{name}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Equipment Maintenance Note</p>
                  <p>Technicians should rinse all pool tools with fresh water after each use to prevent chemical deposits from degrading nets, brushes, and hoses. Vacuum hoses and brushes should be inspected regularly for cracks and wear. Well-maintained equipment performs better and lasts significantly longer.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pool-safety",
        label: "Safety & Best Practices",
        icon: ShieldCheck,
        sections: [
          {
            title: "Proper Handling of Pool Chemicals",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Always read the product label and Safety Data Sheet (SDS) before using any pool chemical.</li>
                  <li>Never mix pool chemicals together, either in their containers or when adding to the pool. Adding chlorine and acid together produces toxic chlorine gas. Always add one chemical at a time and wait between additions.</li>
                  <li><strong className="text-foreground">Always add chemicals to water</strong> — never add water to chemicals. Adding water to concentrated pool chemicals can cause violent splashing or spattering reactions.</li>
                  <li>Use dedicated measuring tools for each chemical to prevent cross-contamination.</li>
                  <li>Wear nitrile or chemical-resistant gloves and safety glasses when handling concentrated pool chemicals, particularly acids (pH decreaser) and liquid chlorine.</li>
                  <li>When adding chemicals to the pool, stand upwind to avoid inhaling fumes or vapors.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Preventing Chemical Imbalances",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Never over-dose chemicals. More is not better in pool chemistry — adding excess chemicals causes the opposite imbalance and wastes money.</li>
                  <li>Add chemicals to the pool with the circulation system running to ensure rapid dispersion throughout the water.</li>
                  <li>Shock treatments (high-dose chlorine) should be added at dusk or at night to prevent rapid degradation by UV sunlight.</li>
                  <li>Advise customers not to swim for a minimum of 4 hours after shock treatment, or until free chlorine levels return to the safe swimming range of 1 to 4 ppm.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Protecting Pool Equipment",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Never allow pool chemicals to contact equipment directly — always pre-dissolve granular chemicals in a bucket of pool water before adding near equipment intakes.</li>
                  <li>Do not run the pool pump dry (without water flowing). A pump run dry will overheat and fail within minutes.</li>
                  <li>Monitor filter pressure regularly. A filter that is significantly over-pressure can rupture the filter tank or damage the pump.</li>
                  <li>Inspect pump motor capacitors and seals regularly — catching a failing capacitor or worn seal early prevents a complete motor failure.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Ensuring Safe Swimming Conditions",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Confirm that chlorine levels are within the safe swimming range (1 to 4 ppm free chlorine) and pH is between 7.2 and 7.8 before leaving a service visit.</li>
                  <li>Advise customers of any elevated chemical levels that require a delay before swimming and document this recommendation in the service report.</li>
                  <li>Report any damaged or malfunctioning pool safety equipment — including drain covers, diving boards, handrails, and lighting — to the customer immediately. Faulty drain covers are a drowning risk.</li>
                  <li>Pool fencing, gate latches, and alarms should be in good working order. While not within the technician's scope to repair, they should be flagged to the customer if deficiencies are observed.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Proper Storage of Chemicals",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pool chemicals must be stored in their original, labeled containers in a cool, dry, ventilated area away from direct sunlight, heat sources, and moisture.</li>
                  <li><strong className="text-foreground">Oxidizers (chlorine) and acids (pH decreasers) must always be stored separately</strong> — they react violently if combined and can cause a fire or release toxic gases.</li>
                  <li>Service vehicle chemical storage must comply with DOT regulations for transporting hazardous materials. Chemicals should be secured in properly ventilated, spill-containment bins.</li>
                  <li>Maintain an up-to-date chemical inventory and SDS file for all products carried in service vehicles, accessible in case of emergency.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "pool-issues",
        label: "Common Customer Issues",
        icon: AlertCircle,
        sections: [
          {
            title: "Cloudy or Hazy Pool Water",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The most common pool complaint. Most frequent causes include: low free chlorine, high pH, high calcium hardness, a dirty or undersized filter, or elevated total dissolved solids.</p>
                <p className="text-sm italic">CSRs should ask: How long has the water been cloudy? Is the filter running? When were chemicals last added? Never downplay cloudy water — it reduces visibility in the pool and is a safety concern.</p>
              </div>
            )
          },
          {
            title: "Algae Growth",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Green algae turns the entire pool a shade of green (most common and easiest to treat). Yellow (mustard) algae appears as brushable patches on shaded wall areas and is more resistant. Black algae appears as dark spots on plaster surfaces and is the most difficult to eliminate.</p>
                <p className="text-sm italic">CSRs should schedule algae treatment visits as priority calls and advise customers to keep the circulation system running continuously until the technician arrives.</p>
              </div>
            )
          },
          {
            title: "Strong Chlorine Smell",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Contrary to popular belief, a strong chlorine odor does not mean there is too much chlorine — it typically means there is not enough. The smell is caused by <strong className="text-foreground">chloramines (combined chlorine)</strong>, which form when chlorine reacts with organic matter introduced by swimmers.</p>
                <div className="p-3 bg-primary/5 border rounded-lg text-sm">This is an excellent opportunity to educate customers on proper pool chemistry. The solution is a shock treatment to break down chloramines and restore the free chlorine reserve.</div>
              </div>
            )
          },
          {
            title: "Clogged or Dirty Filters",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Clogged filters restrict water flow, reduce filtration effectiveness, and put extra strain on the pump motor. Customers may notice this as reduced return jet flow, cloudy water despite adequate chemical levels, or a tripped pump circuit breaker.</p>
                <p className="text-sm italic">CSRs should ask when the filter was last cleaned and what type of filter the customer has. Sand filters need backwashing; cartridge filters need to be removed and cleaned; DE filters need backwashing and recharging. Severely fouled cartridges may need replacement.</p>
              </div>
            )
          },
          {
            title: "Debris Accumulation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Excessive leaves, twigs, pollen, and organic matter in the pool between service visits is a common complaint, especially in the fall or in yards with large trees. This rapidly depletes sanitizer, can clog the pump basket and skimmer, and leads to water chemistry problems. Customers can be advised to run their automatic pool cleaner more frequently and to skim the pool manually between visits. In extreme cases, more frequent service visits may be recommended.</p>
              </div>
            )
          },
          {
            title: "Poor Water Circulation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Poor circulation manifests as dead spots where algae grows, uneven chemical distribution, and reduced filtration. Causes include: a partially blocked skimmer or pump basket, incorrect pump run time, a failing pump motor, or improper return jet positioning.</p>
                <p className="text-sm italic">CSRs should ask whether the pump appears to be running normally and whether the return jets are producing strong flow. Weak or absent flow from return jets indicates a pump, filter, or plumbing issue requiring a technician visit for diagnosis.</p>
              </div>
            )
          },
          {
            title: "Equipment Malfunction",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Common malfunction reports include: the pump not turning on or making unusual noise, the heater failing to heat, pool lights not functioning, and the automatic cleaner not operating. Equipment repair is a separate service from routine maintenance and is typically quoted separately.</p>
                <p className="text-sm italic">CSRs should collect as much information as possible about the symptom and age of the equipment before scheduling a repair visit, as some issues can be diagnosed and resolved on the initial visit while others require follow-up parts ordering.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "pool-importance",
        label: "Why Pool Maintenance Matters",
        icon: Heart,
        sections: [
          {
            title: "The Importance of Professional Pool Maintenance",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Professional pool maintenance delivers value that extends far beyond a clean-looking pool.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Water Safety and Sanitation", body: "Pool water is a shared environment that can harbor dangerous pathogens including Pseudomonas aeruginosa (hot tub rash), Cryptosporidium, Giardia, E. coli, and numerous viruses. These organisms thrive in water with inadequate sanitizer levels, poor pH balance, or insufficient circulation. The CDC tracks Recreational Water Illness (RWI) outbreaks directly linked to poorly maintained pools. For commercial pools where dozens or hundreds of people may swim daily, professional oversight is a legal and regulatory requirement." },
                    { title: "Extending Equipment Lifespan", body: "Pool equipment — pumps, motors, heaters, filters, and automated systems — represents a significant capital investment, often totaling tens of thousands of dollars. Corrosive water etches and pits metal pump components, destroys heater heat exchangers, and corrodes electrical connections. Scaling water deposits calcium throughout the filtration and heating system. A professional service technician who maintains tight chemical balance extends equipment life by years — easily saving a pool owner multiple times the annual cost of service in avoided equipment replacements and repairs." },
                    { title: "Preventing Costly Repairs", body: "Pool pump replacements typically cost $400 to $1,200 or more. Pool resurfacing runs $5,000 to $15,000 or more. Salt cell replacement costs $600 to $1,000. Heater replacement caused by improperly balanced water costs $1,500 to $3,000 or more. All of these failures are preventable with consistent, professional maintenance. The annual cost of a weekly pool service program is typically a fraction of any one of these repair scenarios." },
                    { title: "Ensuring a Safe and Enjoyable Environment", body: "Beyond chemistry and equipment, professional pool service delivers the peace of mind that comes from knowing that the pool is always ready to swim in — safe, clean, and inviting. For families with children, this means a reliably safe play environment. For commercial clients, it means consistently passing health inspections, protecting guests, and maintaining the premium experience their brand promises. A well-maintained pool enhances the quality of outdoor living and supports property values." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Final Note for New Team Members</p>
                  <p>Pool service is a technical profession that combines chemistry, mechanical knowledge, customer service, and physical work — all performed outdoors, on a regular schedule, with high standards of quality and reliability. Whether you are answering customer calls, scheduling routes, or servicing pools in the field, you are part of a team that helps people enjoy one of the most valued features of their home. Welcome to the team!</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
