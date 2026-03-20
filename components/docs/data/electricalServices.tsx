import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const electricalServicesSections: DocGroup[] = [
  {
    title: "ELECTRICAL SERVICES BASICS",
    items: [
      {
        id: "electrical-introduction",
        label: "Introduction to Electrical Services",
        icon: Plug,
        sections: [
          {
            title: "What Is an Electrical Services Business?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>An electrical services business is a licensed, professional contracting company that installs, repairs, maintains, upgrades, and inspects electrical systems in residential homes, commercial buildings, and industrial facilities. Electricians are among the most highly regulated trades professionals, requiring years of apprenticeship, rigorous examinations, and ongoing licensure to legally perform electrical work.</p>
                <p>Electrical service companies range from solo master electricians operating independently to large electrical contracting firms employing dozens of licensed journeymen, project managers, and support staff. All share the fundamental mission of ensuring that their clients' electrical systems are <strong className="text-foreground">safe, functional, code-compliant, and reliably powered</strong> for years to come.</p>
                <div className="p-4 bg-muted/50 border rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Industry Fact</p>
                  <p className="text-sm">The electrical contracting industry employs over 700,000 electricians and related workers in the United States. The Bureau of Labor Statistics projects continued strong demand for licensed electricians due to construction growth, infrastructure upgrades, and the rapid expansion of renewable energy systems.</p>
                </div>
              </div>
            )
          },
          {
            title: "The Importance of Electrical Systems",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Electricity is the single most essential utility in modern buildings — powering lighting, heating and cooling, communication infrastructure, appliances, medical equipment, and virtually every other system that makes a building functional. The consequences of electrical system failures range from inconvenience to catastrophe:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: "Residential", desc: "A failed electrical panel can leave a family without heat, lighting, or refrigeration. Faulty wiring is one of the leading causes of residential house fires in the United States." },
                    { label: "Commercial", desc: "Electrical failures in retail, hospitality, or office environments result in direct revenue loss, safety hazards for customers and employees, and potential regulatory consequences." },
                    { label: "Industrial", desc: "In manufacturing, processing, and data center environments, electrical failures can halt production, cause significant financial losses, and create serious safety hazards through arc flash, electrocution, or fire." },
                    { label: "Safety", desc: "The NFPA reports that electrical failures and malfunctions are a leading cause of home fires. Proper installation and maintenance of electrical systems is a primary fire prevention measure." },
                  ].map(({ label, desc }) => (
                    <div key={label} className="p-3 border rounded-lg bg-primary/5 text-sm">
                      <p className="font-semibold text-foreground mb-1">{label}</p>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            title: "Overview of the Electrical Services Industry",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The electrical services industry is one of the largest segments of the construction and building services market, and one of the most essential skilled trades.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Electricians are among the most in-demand skilled tradespeople in the country, driven by construction activity, aging infrastructure replacement, EV charging installation, solar energy adoption, and smart home technology.</li>
                  <li>The industry is heavily regulated. All electrical work above a minimal threshold must be performed by licensed electricians and must comply with the National Electrical Code (NEC), local amendments, and building permit requirements.</li>
                  <li>Electrical contractors serve three primary markets: <strong className="text-foreground">residential</strong> (homes and apartments), <strong className="text-foreground">commercial</strong> (offices, retail, and institutions), and <strong className="text-foreground">industrial</strong> (factories, utilities, and data centers).</li>
                  <li>Emergency electrical service is a significant and high-value segment, as electrical failures can pose immediate safety risks that cannot wait for standard scheduling.</li>
                  <li>Emerging opportunities in EV charging infrastructure, solar photovoltaic installations, battery storage systems, and smart home automation are creating strong growth in residential electrical services.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "electrical-service-types",
        label: "Types of Electrical Services",
        icon: List,
        sections: [
          {
            title: "Residential Electrical Services",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Covers all electrical work performed in private homes, apartments, condominiums, and townhomes — from routine repairs (replacing a faulty outlet) to major projects (complete home rewiring, panel upgrades, or EV charger installation). Requires understanding of the NEC and local residential codes, strong customer communication skills, and the ability to work cleanly inside occupied living spaces. Electricians working in residential settings interact directly with homeowners and must project professionalism and trustworthiness at every visit.</p>
              </div>
            )
          },
          {
            title: "Commercial Electrical Services",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Performed in business environments including retail stores, office buildings, restaurants, medical clinics, schools, and places of worship. Commercial electrical systems are significantly more complex than residential — they operate at higher voltages, serve more diverse loads, and must meet stricter code requirements. Commercial projects often involve coordination with other trades, building owners, general contractors, and local inspectors. Lighting design, three-phase power, emergency and exit lighting systems, and fire alarm integration are common commercial service areas.</p>
              </div>
            )
          },
          {
            title: "Industrial Electrical Services",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Performed in manufacturing plants, warehouses, food processing facilities, data centers, utilities, and other industrial environments. Involves high-voltage systems, complex motor control systems, programmable logic controllers (PLCs), power distribution equipment, and specialized safety systems. Industrial electricians typically hold additional certifications in arc flash safety, high-voltage work, and industrial controls. This sector requires significant specialized expertise and carries the highest technical complexity of any electrical market.</p>
              </div>
            )
          },
          {
            title: "Emergency Electrical Services",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Available 24/7 to address electrical problems that pose an immediate safety risk or cause a significant disruption. Common emergency calls include complete loss of power, burning smells from electrical panels or outlets, sparking wiring, flooding that has compromised electrical systems, and tripped breakers that cannot be reset. Emergency calls command a premium service rate.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  CSRs and dispatchers must be trained to recognize true electrical emergencies and respond with urgency, advising customers on immediate safety steps (such as turning off the main breaker) while an electrician is dispatched.
                </div>
              </div>
            )
          },
          {
            title: "Electrical Inspections",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Comprehensive assessment of an existing electrical system to evaluate its condition, safety, and code compliance. Commonly requested during real estate transactions, after purchasing an older home, following a flood or fire, for insurance purposes, or as part of a planned renovation. A licensed electrician examines the electrical panel, wiring, outlets, switches, grounding, and visible wiring methods and produces a written report documenting findings and recommendations.</p>
              </div>
            )
          },
          {
            title: "Electrical Upgrades and Rewiring",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Improvements to bring an aging or inadequate electrical system up to modern standards. Panel upgrades (replacing an outdated panel with a higher-capacity modern panel) are among the most common upgrade projects. Full or partial rewiring is performed when original wiring has degraded or uses outdated materials (such as aluminum wiring or knob-and-tube wiring). Smart home system integration, EV charger installation, solar system integration, and whole-home surge protection are growing categories of residential electrical upgrades.</p>
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
        id: "electrical-core-services",
        label: "Core Services",
        icon: CheckCircle,
        sections: [
          {
            title: "Electrical Installations",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>All new electrical work — installing wiring, panels, outlets, switches, lighting, and equipment in new construction or in existing buildings where new circuits or systems are being added. Installations must comply with the NEC and local code requirements, be performed under the appropriate permits, and be inspected by the local authority having jurisdiction (AHJ). Installation work is typically the highest-revenue category for electrical contractors.</p>
              </div>
            )
          },
          {
            title: "Electrical Repairs",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Addresses malfunctions, failures, and damage in existing electrical systems. Common repair calls include diagnosing and fixing non-working outlets or switches, repairing damaged wiring, replacing failed circuit breakers, troubleshooting intermittent power problems, and repairing damage caused by pests, water intrusion, or physical damage. Diagnostic accuracy is critical — the ability to quickly and correctly identify the root cause of an electrical problem is one of the most valuable skills an electrician possesses.</p>
              </div>
            )
          },
          {
            title: "Lighting Installation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>One of the most requested electrical services in both residential and commercial settings. Services include installing recessed (can) lighting, pendant lights, chandeliers, under-cabinet lighting, outdoor security lighting, motion-sensor lighting, LED retrofit systems, commercial lighting fixtures, and emergency/exit lighting. Proper lighting installation requires knowledge of wiring methods, box ratings, dimmer compatibility, and in commercial settings, lighting control systems and energy code compliance.</p>
              </div>
            )
          },
          {
            title: "Circuit Breaker Repair and Replacement",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Circuit breakers can wear out, fail to trip when they should, or trip too easily. Replacing a failed or nuisance-tripping breaker is a common service call. Electricians also install <strong className="text-foreground">AFCI (Arc Fault Circuit Interrupter)</strong> and <strong className="text-foreground">GFCI (Ground Fault Circuit Interrupter)</strong> breakers required by modern code in specific locations including bedrooms, kitchens, and bathrooms, which provide enhanced protection against electrical fires and electrocution.</p>
              </div>
            )
          },
          {
            title: "Panel Upgrades",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Performed when the existing panel is undersized for current electrical demand, is an outdated or recalled panel brand (such as Federal Pacific or Zinsco), has insufficient circuits for planned renovations, or lacks modern safety features. A panel upgrade typically increases the service from 100 amps to 200 amps (or higher for large homes and commercial properties) and involves coordination with the utility company for a service disconnect.</p>
                <p className="text-sm italic">Panel upgrades are high-revenue, technically demanding projects that require a licensed master electrician and a permit.</p>
              </div>
            )
          },
          {
            title: "Wiring and Rewiring",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Wiring services include running new circuits for appliances, adding outlets to existing rooms, wiring detached garages or outbuildings, and complete home rewiring where all original wiring is replaced with modern copper wiring in code-compliant conduit or cable methods. Partial rewiring may be recommended when specific circuits have degraded or when a home renovation exposes old wiring that does not meet current standards. Rewiring is invasive work that may require opening walls and ceilings.</p>
              </div>
            )
          },
          {
            title: "Outlet and Switch Installation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>One of the most common residential electrical requests. Services include adding standard outlets, installing GFCI outlets in required locations (kitchens, bathrooms, outdoors, garages), adding USB charging outlets, installing smart switches and dimmers, and replacing outdated two-prong ungrounded outlets with modern three-prong grounded outlets.</p>
              </div>
            )
          },
          {
            title: "Generator Installation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A growing service category driven by increasingly frequent power outages caused by extreme weather events. Generator installation involves installing the generator unit, connecting it to the home's or building's electrical system via a <strong className="text-foreground">transfer switch</strong> (which prevents dangerous back-feed to the utility grid), and running the necessary fuel supply connections. Standby generators require automatic transfer switches that sense utility power loss and start the generator automatically.</p>
              </div>
            )
          },
          {
            title: "Electrical Safety Inspections",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Performed to evaluate an existing electrical system's safety and compliance. Particularly valuable for homes more than 25 years old, recently purchased properties, properties that have experienced fire or flood damage, and commercial properties undergoing ownership changes. The inspection covers the panel, all visible wiring, outlets, switches, grounding, bonding, GFCI and AFCI protection, and any visible code violations. A comprehensive written report is provided with prioritized recommendations.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "electrical-operations",
        label: "How the Business Operates",
        icon: Info,
        sections: [
          {
            title: "The Typical Service Workflow",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ol className="space-y-4">
                  {[
                    { step: "1. Customer Inquiry or Service Request", desc: "A customer contacts the company by phone, email, website form, or online booking. CSRs should gather: the customer's name, address, and best contact number; a description of the issue or project; whether it is an emergency or routine service; and whether the customer is a homeowner, tenant, or property manager. For emergency situations, the CSR should quickly assess the severity and dispatch accordingly, providing basic safety instructions while an electrician is en route." },
                    { step: "2. Job Assessment or Consultation", desc: "For projects beyond simple repairs, a job assessment may be scheduled before the service appointment. This allows the electrician to evaluate the scope of work, identify any materials or special equipment needed, assess code requirements and permit needs, and provide an accurate written estimate. For straightforward repairs (outlet replacement, breaker swap), a same-day service call with an on-site quote at the time of service is more appropriate." },
                    { step: "3. Scheduling the Service Appointment", desc: "Once the customer agrees to proceed, a service appointment is scheduled. The scheduler assigns the appointment to the appropriate electrician based on the type of work, the electrician's license level (apprentice, journeyman, or master), their current workload, and their geographic proximity to the job site. A confirmation is sent to the customer with the appointment window and technician information." },
                    { step: "4. Dispatching an Electrician", desc: "The dispatcher assigns the job and communicates all relevant job details: customer name and address, description of the issue, any prior customer notes, permit status if applicable, and materials to bring. For emergency calls, dispatch is immediate. For scheduled calls, the dispatcher manages the electrician's daily route for maximum efficiency." },
                    { step: "5. On-Site Inspection and Diagnosis", desc: "Upon arrival, the electrician performs a thorough on-site inspection and diagnosis: listening to the customer's description, visually inspecting the affected areas, testing outlets and circuits with meters, examining the electrical panel, and identifying the root cause. A thorough diagnosis is the most important step — the best repair is worthless if the underlying cause has not been correctly identified." },
                    { step: "6. Providing a Quote", desc: "After completing the diagnosis, the electrician presents the customer with a written or verbal quote clearly explaining what was found, what work is recommended (with priority levels for safety-critical items), the materials required, the estimated time to complete, the total cost, and any permits that will be required. The customer must authorize the work in writing before the electrician proceeds." },
                    { step: "7. Performing the Electrical Work", desc: "With the customer's signed authorization, the electrician performs the work following all applicable NEC code requirements, local code amendments, and company quality standards. All work is performed with the circuit de-energized and locked out/tagged out where required. The work area is kept clean and protected to avoid damage to the customer's property." },
                    { step: "8. Testing and Safety Verification", desc: "After completing the work, the electrician tests all affected circuits and devices, restores power, and verifies that the repair or installation is functioning correctly and safely. Where permits were obtained, the work must be inspected by the local building department before walls are closed or the installation is considered complete." },
                    { step: "9. Payment and Job Documentation", desc: "Payment is collected at job completion or invoiced depending on account type. A detailed invoice documenting all work performed, materials used, permit numbers, and warranty information is provided to the customer. All job records are entered into the company's service management system. For permitted projects, a copy of the inspection approval is provided to the customer." },
                  ].map(({ step, desc }) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-foreground min-w-fit">{step}:</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ol>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">CSR & VA Key Questions</p>
                  <p>When taking an electrical service inquiry, always capture: (1) Is this an emergency or a safety concern? (2) What specifically is the problem — lights, outlets, panel, etc.? (3) Residential or commercial property? (4) Home or building age (helps anticipate wiring type)? (5) Has there been any recent work on the electrical system? This information ensures the right electrician is dispatched with the right equipment and expectations.</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },
  {
    title: "REFERENCE & COMPLIANCE",
    items: [
      {
        id: "electrical-problems",
        label: "Common Electrical Problems",
        icon: AlertCircle,
        sections: [
          {
            title: "Power Outages",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A complete loss of power to all or part of a home or building. Before dispatching an electrician, CSRs should guide the customer through basic checks: Has the utility company confirmed a neighborhood outage? Has the main breaker tripped? Are specific circuits affected or is the entire property dark?</p>
                <p className="text-sm italic">Partial power loss often indicates a tripped main breaker, a failed utility service connection, or a blown service fuse. Complete power loss with no utility outage requires immediate electrician dispatch.</p>
              </div>
            )
          },
          {
            title: "Flickering Lights",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Isolated flickering in a single fixture usually indicates a loose bulb or failing fixture. Flickering throughout an entire circuit or the whole house can indicate loose connections at the panel, failing wire splices inside walls, or corroded service connections. Whole-house flickering synchronized with large appliance activation may indicate a voltage problem that requires utility investigation.</p>
                <p className="text-sm italic">Persistent flickering should always be evaluated by a licensed electrician.</p>
              </div>
            )
          },
          {
            title: "Tripping Circuit Breakers",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>A circuit breaker that trips repeatedly is communicating that something is wrong — either the circuit is genuinely overloaded, a specific appliance is drawing excessive current, there is a short circuit or ground fault, or the breaker itself has worn out.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <strong>Warning:</strong> Customers should be advised never to bypass a tripping breaker or replace it with a higher-amperage breaker without professional evaluation — these are dangerous workarounds that eliminate the circuit's protection.
                </div>
              </div>
            )
          },
          {
            title: "Faulty Wiring",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Encompasses a broad range of wiring defects including loose connections at outlets and switches, deteriorated insulation on older wiring (aluminum wiring from the 1960s–70s is particularly problematic at connection points), improperly spliced wiring inside walls, and code-violating wiring methods. Faulty wiring is a leading cause of electrical fires.</p>
                <p className="text-sm italic">Signs include outlets or switches that feel warm to the touch, discolored outlet covers, burning smells, and lights that dim when appliances are turned on.</p>
              </div>
            )
          },
          {
            title: "Overloaded Circuits",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Occurs when the connected electrical loads draw more current than the circuit wiring and breaker are designed to handle. This causes the breaker to trip and, if the overload persists or the protection is inadequate, can cause wiring to overheat and potentially ignite surrounding combustible materials. Particularly common in older homes where the electrical system was designed for the appliance demands of decades past. The solution is adding additional circuits or upgrading the panel, not simply replacing a tripped breaker with a higher-rated one.</p>
              </div>
            )
          },
          {
            title: "Burning Smells from Outlets or Panels",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>A burning smell from an electrical outlet, switch, or panel is a serious warning sign — it can indicate arcing, overheating wiring insulation, or an active electrical fire beginning inside a wall or the panel.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <strong>Emergency Protocol:</strong> Customers reporting a burning electrical smell should avoid using the affected outlet or circuit. If the smell is coming from the main panel, turn off the main breaker if it is safe to do so and vacate the building. An electrician should be dispatched immediately. Do not advise customers to investigate the source themselves.
                </div>
              </div>
            )
          },
          {
            title: "Non-Working Outlets or Switches",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Dead outlets and non-functioning switches are among the most common residential service calls. Common causes include a tripped GFCI outlet on the same circuit, a tripped circuit breaker, a loose wire at the outlet or switch, a failed outlet or switch device, or an open neutral or ground connection.</p>
                <div className="p-3 bg-primary/5 border rounded-lg text-sm">
                  <strong className="text-foreground">CSR Tip:</strong> Walk customers through the GFCI reset check before scheduling a service call — pressing the reset button on a GFCI outlet in the kitchen, bathroom, or garage often restores power to outlets that appear unrelated. This resolves the majority of these cases without a technician visit.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "electrical-terminology",
        label: "Electrical Terminology",
        icon: BookOpen,
        sections: [
          {
            title: "Common Electrical Terms Glossary",
            content: (
              <div className="text-muted-foreground">
                <p className="mb-4 text-sm">Familiarity with these terms enables confident communication with customers, electricians, and colleagues.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-44">Term</TableHead>
                      <TableHead className="font-bold">Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { term: "Voltage (V)", def: "The electrical pressure that drives current through a circuit. Residential circuits in the United States operate at 120V (standard outlets) or 240V (large appliances like dryers and ranges). Voltage is analogous to water pressure in a pipe." },
                      { term: "Current (Amps / A)", def: "The flow rate of electrical charge through a conductor. The amperage rating of a circuit determines how much electrical load it can safely carry. Exceeding the rated amperage causes the breaker to trip." },
                      { term: "Wattage (W)", def: "A measure of electrical power — the rate at which electrical energy is consumed. Calculated as Voltage x Amperage (W = V x A). A 100-watt light bulb on a 120V circuit draws approximately 0.83 amps." },
                      { term: "Circuit Breaker", def: "A resettable protective device in the electrical panel that automatically interrupts current flow when a circuit is overloaded or short-circuited. Circuit breakers are rated in amperes (typically 15A or 20A for residential branch circuits)." },
                      { term: "Electrical Panel", def: "The main distribution board (also called the breaker box or load center) that receives power from the utility company and distributes it through individual circuit breakers to all circuits throughout the building." },
                      { term: "Grounding", def: "A safety system that provides a low-resistance path for fault current to return to the electrical panel and trip the breaker in the event of a wiring fault. Protects people from electrical shock by ensuring that metal enclosures are maintained at earth potential." },
                      { term: "Load", def: "The total electrical demand placed on a circuit or electrical system by all connected devices and appliances. Proper load calculations are required when sizing circuits, panels, and service entrances." },
                      { term: "Short Circuit", def: "A fault condition in which current bypasses its intended path and flows through a much lower-resistance path, resulting in a large, potentially dangerous surge of current. Causes circuit breakers to trip immediately and can cause arcing, fire, and equipment damage." },
                      { term: "Ground Fault", def: "An unintended path for electrical current to flow to ground, often through a person. Ground faults are the leading cause of electrocution. GFCI devices detect ground faults and interrupt power within milliseconds to prevent electrocution." },
                      { term: "Arc Fault", def: "An unintended electrical discharge between conductors, often caused by damaged or deteriorated wiring insulation. Arc faults produce intense heat and are a leading cause of electrical fires. AFCI breakers detect arc fault signatures and interrupt the circuit to prevent fires." },
                      { term: "GFCI", def: "Ground Fault Circuit Interrupter. A safety device that monitors the current balance between the hot and neutral conductors and trips within 4 to 6 milliseconds when a ground fault is detected. Required by code in kitchens, bathrooms, garages, outdoors, and near water sources." },
                      { term: "AFCI", def: "Arc Fault Circuit Interrupter. A circuit breaker that detects the electrical signature of arcing faults and interrupts the circuit to prevent electrical fires. Required by the NEC in bedroom circuits and increasingly in all living areas of new construction." },
                      { term: "National Electrical Code (NEC)", def: "The NFPA 70 standard — the foundational document for electrical safety in the United States. Updated every three years and adopted by most states and municipalities as the minimum standard for electrical installations." },
                      { term: "Service Entrance", def: "The point where the utility company's service conductors connect to the customer's wiring and enter the building to supply the main electrical panel. Includes the service conductors, service entrance equipment, meter, and main panel." },
                      { term: "Conduit", def: "A protective raceway — typically metal (EMT, rigid) or plastic (PVC) tubing — through which electrical wiring is routed. Conduit provides physical protection for wiring, makes wiring replaceable without opening walls, and is required in many commercial and industrial applications." },
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
        id: "electrical-roles",
        label: "Roles in an Electrical Business",
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
                      { role: "Master Electrician", resp: "The highest level of electrical license. Master electricians have passed rigorous examinations demonstrating comprehensive knowledge of the NEC, electrical theory, and business practices. They are legally authorized to pull electrical permits, supervise all electrical work, and sign off on completed installations. Many states require a master electrician to be the responsible party for an electrical contracting business." },
                      { role: "Journeyman Electrician", resp: "A licensed electrician who has completed an apprenticeship program and passed a journeyman examination. Journeymen can perform all electrical work independently but must work under the supervision of a master electrician for permit-required work in many jurisdictions. Journeymen are the core field workforce of most electrical contractors." },
                      { role: "Apprentice Electrician", resp: "A trainee electrician enrolled in a formal apprenticeship program (typically 4 to 5 years) that combines on-the-job training with classroom instruction. Apprentices must always work under the direct supervision of a journeyman or master electrician." },
                      { role: "Electrical Technician", resp: "In some companies, electrical technicians perform lower-voltage service work including data cabling, fire alarm system maintenance, lighting controls, and similar tasks. Technicians may not hold a full electrician's license but are trained in specific technical areas." },
                      { role: "Customer Service Representative (CSR)", resp: "Manages all incoming customer contacts, qualifies service requests, provides pricing information, schedules appointments, handles billing inquiries, and manages customer relationships. CSRs must be able to communicate clearly about electrical services and recognize genuine electrical emergencies." },
                      { role: "Dispatcher", resp: "Manages the daily schedule for all field electricians, assigns and dispatches service calls, monitors job progress, adjusts schedules for emergency calls and delays, and serves as the real-time communication hub between the office and the field." },
                      { role: "Project Manager", resp: "Oversees larger electrical projects from inception to completion. Project managers coordinate material procurement, scheduling, subcontractor management, permit tracking, inspection scheduling, and customer communication for commercial and industrial projects." },
                      { role: "Business Owner / Electrical Contractor", resp: "Holds the master electrician license and contractor's license that authorize the business to perform electrical work and pull permits. Sets company strategy, manages finances, oversees hiring, maintains contractor relationships, and is ultimately responsible for the quality and safety of all work performed under the company's license." },
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
        id: "electrical-tools",
        label: "Tools & Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Common Electrician Tools & Equipment",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Multimeters", desc: "The most essential diagnostic tool in an electrician's kit. Measures voltage (AC and DC), current (amperage), and resistance (ohms). Used to verify voltage at outlets and panels, test continuity in circuits, diagnose wiring faults, test component resistance, and verify that a circuit is de-energized before working on it. A quality multimeter is a fundamental safety tool." },
                    { name: "Wire Strippers", desc: "Precision tools used to remove the insulation from electrical conductors without nicking or damaging the copper wire underneath. Nicked conductors are weaker and can overheat at the damage point. Electricians use wire strippers calibrated for specific wire gauges (14 AWG, 12 AWG, 10 AWG, etc.) to ensure clean, consistent stripping." },
                    { name: "Voltage Testers (Non-Contact)", desc: "Detect the presence of AC voltage without requiring physical contact with a conductor. The tester is held near an outlet, wire, or panel terminal and indicates the presence of live voltage through a beep or light. Invaluable as a first-check safety tool — they do not replace multimeters for precise measurements but provide a quick and safe initial check." },
                    { name: "Insulated Screwdrivers and Hand Tools", desc: "All hand tools used by electricians must be properly insulated to prevent electrical shock when working near energized conductors. Electricians use VDE-rated insulated tools that are rated for use on circuits up to 1,000 volts AC. Using non-insulated tools near live electrical components is an OSHA violation and a serious safety hazard." },
                    { name: "Cable and Conduit Tools", desc: "Installing wiring requires: cable cutters for cleanly cutting heavy wire without deforming conductors, conduit benders for accurately bending metal conduit to precise angles, fish tapes and push rods for pulling wire through conduit and wall cavities, and cable staples and clamps for securing wiring runs." },
                    { name: "Electrical Drills and Hole-Making Tools", desc: "Heavy-duty right-angle drills, corded and cordless hammer drills, and hole saw kits to drill through studs, joists, and masonry to run wiring through structures. Self-feed spade bits and auger bits for drilling large-diameter holes through wood framing for cable runs." },
                    { name: "Safety Equipment and PPE", desc: "Insulated rubber gloves rated for the voltage being worked with (Class 00 through Class 4), safety glasses or face shields when working near energized panels, flame-resistant (FR) clothing when working on or near energized equipment, hard hats on construction sites, and arc flash suits (full body protection) for high-voltage work." },
                  ].map(({ name, desc }) => (
                    <div key={name} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{name}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <strong>Tool Safety Note:</strong> Before beginning any electrical work, the circuit must be verified de-energized using a calibrated voltage tester or multimeter, and locked out/tagged out per OSHA 29 CFR 1910.147. Never rely solely on a flipped breaker to assume a circuit is dead — always verify with a meter.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "electrical-safety",
        label: "Safety & Compliance",
        icon: ShieldCheck,
        sections: [
          {
            title: "Electrical Safety Procedures",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>All electrical work must begin with de-energizing the relevant circuit at the breaker, verifying de-energization with a calibrated tester, and applying <strong className="text-foreground">lockout/tagout (LOTO)</strong> procedures before any work is performed on or near potentially energized conductors.</li>
                  <li>The <strong className="text-foreground">'one-hand rule'</strong> is practiced when working near energized equipment — keeping one hand away from conductive surfaces at all times reduces the risk of current passing through the chest and heart.</li>
                  <li>Only trained and licensed personnel should perform electrical work. Even seemingly simple tasks like replacing a circuit breaker in a panel involve exposure to bus bars that remain energized even when all breakers are off.</li>
                  <li>Arc flash assessments should be performed on commercial and industrial electrical equipment before any work, and appropriate arc flash PPE selected based on the incident energy analysis.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Proper Use of Personal Protective Equipment",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Insulated rubber gloves must be inspected for holes, cuts, and deterioration before every use. Gloves that fail the air inflation test must be removed from service immediately.</li>
                  <li>Eye protection (safety glasses or face shields) must be worn when working near energized conductors, drilling, cutting, or performing any operation that could result in debris entering the eyes.</li>
                  <li>Arc-rated FR clothing must be worn when working on or near energized electrical equipment where an arc flash hazard exists.</li>
                  <li>Hard hats, high-visibility vests, and steel-toed boots are required PPE on construction sites.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Compliance with Electrical Codes and Regulations",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>All electrical installations must comply with the current edition of the <strong className="text-foreground">National Electrical Code (NEC, NFPA 70)</strong> as adopted and amended by the local authority having jurisdiction (AHJ).</li>
                  <li>Permits must be obtained from the local building department before beginning permit-required work. Unpermitted electrical work is a liability for both the contractor and the property owner and can void insurance coverage.</li>
                  <li>All permitted work must be inspected and approved by the local building inspector before being concealed in walls, closed up, or energized for permanent use.</li>
                  <li>Electricians must maintain their state license and required continuing education credits. Allowing a license to lapse or performing work outside the license scope is a legal violation.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Preventing Electrical Hazards",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Never use extension cords as permanent wiring. Extension cords are temporary by design and are not rated for continuous load or concealment inside walls.</li>
                  <li>Inspect all tools and equipment before each use for damaged cords, cracked insulation, and compromised grounding. Damaged tools must be removed from service.</li>
                  <li>Keep the work area clean and organized, particularly when working in panels and junction boxes — stray wire strands or loose conductors can cause shorts, ground faults, or connection failures.</li>
                  <li>Report any discovered code violations or hazardous conditions to the customer in writing. Electricians have a professional and ethical obligation to disclose identified safety hazards, even if the customer did not request that system be addressed.</li>
                  <li>Never rush electrical work. Speed increases error rates, and errors in electrical work have potentially fatal consequences.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "electrical-importance",
        label: "Why Professional Electrical Services Matter",
        icon: Heart,
        sections: [
          {
            title: "The Importance of Professional Electrical Services",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Professional electricians provide a value that extends far beyond fixing what is broken.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Safety", body: "Electricity is fundamentally dangerous. In the United States, electrical failures cause approximately 51,000 home fires, roughly 500 deaths, more than 1,400 injuries, and $1.3 billion in property damage every year (ESFI). The vast majority of these incidents involve improperly installed, maintained, or repaired electrical systems. Licensed electricians have completed thousands of hours of training specifically to work with electricity safely and install systems that are safe for occupants for decades." },
                    { title: "Reliable Electrical Systems", body: "A home or business depends on its electrical system functioning reliably every day, around the clock. Professional installation by licensed electricians, using code-compliant materials and methods, produces electrical systems that perform consistently and predictably. Proper wire sizing ensures conductors never overheat. Proper connection methods ensure joints remain secure. Correct panel sizing ensures the system has headroom for future loads." },
                    { title: "Code Compliance", body: "Electrical code compliance is not bureaucratic red tape — it is the crystallized result of decades of engineering research, incident investigations, and professional experience. Code-compliant electrical work is required for permit approval, homeowner insurance coverage, mortgage qualification, and property sale. Unpermitted or non-compliant electrical work can prevent a home from being sold, require expensive correction, or result in insurance claims being denied." },
                    { title: "Preventing Electrical Fires", body: "The most common fire causes include arc faults in deteriorated wiring, overloaded circuits, improperly installed connections that create resistance heating, and improper use of extension cords. Professional electricians address all of these risk factors: they install AFCI breakers that detect arcing before it starts a fire, size circuits properly to prevent overloading, make connections correctly using appropriate materials, and advise customers against unsafe practices." },
                    { title: "Long-Term System Maintenance", body: "Like all building systems, electrical systems require periodic professional attention. Connections loosen with thermal cycling. Panel components age and can fail. Code requirements evolve, and older systems may lack protections now considered standard (GFCI and AFCI protection, for example). Professional electricians who establish ongoing service relationships provide the ongoing inspection and maintenance that keeps electrical systems safe for the life of the building." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Final Note for New Team Members</p>
                  <p>The electrical services industry is built on trust, technical excellence, and an unwavering commitment to safety. Every team member — from the apprentice electrician to the virtual assistant scheduling appointments — plays a role in delivering the professional, reliable, and safe service that our customers depend on. Take pride in being part of a team that protects people's homes, businesses, and lives. Welcome aboard.</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
