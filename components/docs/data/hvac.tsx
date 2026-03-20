import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const hvacSections: DocGroup[] = [
  {
    title: "HVAC FUNDAMENTALS",
    items: [
      {
        id: "hvac-introduction",
        label: "Introduction to HVAC",
        icon: Thermometer,
        sections: [
          {
            title: "What Does HVAC Stand For?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>HVAC stands for <strong className="text-foreground">Heating, Ventilation, and Air Conditioning</strong>. It is the technology and systems used to control the temperature, humidity, and air quality of indoor environments.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <p className="font-semibold text-primary mb-1">H – Heating</p>
                    <p className="text-sm">Systems that generate and distribute warmth during cold months, such as furnaces, boilers, and heat pumps.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <p className="font-semibold text-primary mb-1">V – Ventilation</p>
                    <p className="text-sm">Processes that bring fresh air in and push stale air out, improving indoor air quality and removing pollutants.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <p className="font-semibold text-primary mb-1">A – Air Conditioning</p>
                    <p className="text-sm">Equipment that cools and dehumidifies indoor air during hot months, using refrigerant and compressor-based systems.</p>
                  </div>
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Key Takeaway</p>
                  <p>HVAC is not just about keeping a space comfortable — it is a critical system that supports health, safety, and building functionality every day of the year.</p>
                </div>
              </div>
            )
          },
          {
            title: "Purpose of HVAC Systems",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>HVAC systems serve multiple essential roles in residential and commercial buildings:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maintain comfortable indoor temperatures year-round.</li>
                  <li>Control humidity to prevent mold growth and protect building materials.</li>
                  <li>Filter out dust, allergens, bacteria, and airborne pollutants.</li>
                  <li>Ensure proper ventilation so occupants receive adequate fresh air.</li>
                  <li>Comply with building codes and health regulations.</li>
                  <li>Improve energy efficiency, reducing utility costs for homeowners and businesses.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Overview of the HVAC Industry",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The HVAC industry is one of the largest segments of the construction and home services market. Key industry facts include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HVAC technicians are among the most in-demand skilled trades workers in the United States.</li>
                  <li>The industry services both <strong className="text-foreground">residential</strong> (homes, apartments) and <strong className="text-foreground">commercial</strong> (offices, retail, hospitals, schools) clients.</li>
                  <li>HVAC businesses typically operate year-round, with demand peaking in summer (air conditioning) and winter (heating).</li>
                  <li>Licensing, certifications, and compliance with environmental regulations are required to operate legally.</li>
                  <li>Modern HVAC now incorporates smart technology, energy-efficient equipment, and environmentally friendly refrigerants.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "hvac-systems",
        label: "Common HVAC Systems",
        icon: Wind,
        sections: [
          {
            title: "Central Air Conditioning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The most common cooling system in larger homes and commercial buildings. It uses a central unit (typically located outside or in a mechanical room) to cool air and distribute it throughout the building via a duct system. A blower pushes the cooled air through supply ducts and returns warm air through return ducts.</p>
              </div>
            )
          },
          {
            title: "Split Systems",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A split system is the traditional pairing of an <strong className="text-foreground">outdoor unit</strong> (the condenser/compressor) with an <strong className="text-foreground">indoor unit</strong> (the air handler or furnace/coil). The two units are connected by refrigerant lines. Split systems handle both heating (via a furnace) and cooling (via an air conditioner) and are the most popular HVAC configuration for residential use.</p>
              </div>
            )
          },
          {
            title: "Ductless Mini-Split Systems",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Ductless mini-split systems work like traditional split systems but <strong className="text-foreground">without ductwork</strong>. They are ideal for homes without ducts, room additions, or spaces requiring individual temperature control. Each room or zone has its own indoor air handler connected to an outdoor unit. Mini-splits are energy-efficient and easy to install.</p>
              </div>
            )
          },
          {
            title: "Heat Pumps",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Heat pumps are versatile systems that can provide both heating and cooling by <strong className="text-foreground">transferring heat</strong> rather than generating it. In summer, they function like an air conditioner, moving heat out of the building. In winter, they extract heat from the outdoor air (even in cold temperatures) and bring it inside. Heat pumps are highly energy-efficient and are increasingly popular in moderate climates.</p>
              </div>
            )
          },
          {
            title: "Furnaces",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Furnaces are heating-only systems that burn fuel (natural gas, propane, or oil) or use electricity to generate heat. The heat is then distributed through ducts using a blower. Gas furnaces are the most common heating system in colder regions of the United States due to their reliability and cost-effectiveness.</p>
              </div>
            )
          },
          {
            title: "Boilers",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Boilers heat water and distribute steam or hot water through pipes to radiators, baseboard heaters, or radiant floor systems. Unlike forced-air systems, boilers do not use ductwork and are often praised for providing even, comfortable heat. They are common in older homes and commercial buildings.</p>
              </div>
            )
          },
          {
            title: "Ventilation Systems",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Ventilation systems control the exchange of indoor and outdoor air. They include exhaust fans, energy recovery ventilators (ERVs), and heat recovery ventilators (HRVs). Proper ventilation removes pollutants, controls moisture, and ensures a healthy indoor environment. Ventilation is especially important in tightly sealed, energy-efficient buildings.</p>
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
        id: "hvac-services",
        label: "Core Services",
        icon: Wrench,
        sections: [
          {
            title: "Installation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Installation services involve setting up new HVAC equipment in a building. This includes installing new systems in newly constructed homes, replacing old equipment with modern units, and adding new zones or ductwork.</p>
                <div className="p-3 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg text-sm">
                  <strong>Important:</strong> Installation projects require proper <strong>load calculations</strong> to ensure the equipment is the right capacity for the space. An undersized or oversized system will perform poorly and break down faster.
                </div>
              </div>
            )
          },
          {
            title: "Maintenance",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Preventive maintenance is a scheduled service performed to keep HVAC systems running efficiently and prevent breakdowns. Typical maintenance tasks include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cleaning or replacing air filters.</li>
                  <li>Inspecting and cleaning coils (evaporator and condenser).</li>
                  <li>Checking refrigerant levels.</li>
                  <li>Lubricating moving parts.</li>
                  <li>Inspecting electrical connections and controls.</li>
                  <li>Testing thermostat calibration.</li>
                  <li>Inspecting and cleaning the condensate drain.</li>
                </ul>
                <p className="text-sm">Many HVAC companies offer <strong className="text-foreground">maintenance agreements or service plans</strong>, where customers pay an annual fee for one or two scheduled tune-ups per year.</p>
              </div>
            )
          },
          {
            title: "Repairs",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Repair services address specific problems with existing HVAC systems. Common repairs include fixing refrigerant leaks, replacing compressors, repairing ductwork, fixing electrical issues, and replacing worn components. Repairs may be scheduled in advance or requested as emergency calls.</p>
              </div>
            )
          },
          {
            title: "System Replacement",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>When an HVAC system is too old, too inefficient, or too costly to repair, the company will recommend a full system replacement. This involves removing the old equipment and installing a new system. Sales representatives often assist with this process, presenting equipment options and financing plans.</p>
              </div>
            )
          },
          {
            title: "Inspections",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>HVAC inspections are detailed evaluations of a system's condition, performance, and safety. They are commonly requested during real estate transactions, after extreme weather events, or as part of energy audits. Inspections produce a written report documenting findings and recommendations.</p>
              </div>
            )
          },
          {
            title: "Emergency HVAC Services",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Many HVAC companies offer <strong className="text-foreground">24/7 emergency service</strong> for situations that cannot wait for a scheduled appointment — such as a furnace failing in winter or an air conditioner breaking down during a heat wave.</p>
                <div className="p-3 bg-muted/50 border rounded-lg text-sm">
                  Emergency calls typically carry a higher service fee. Fast response time and clear communication are critical for customer satisfaction during emergencies.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "hvac-operations",
        label: "How the Business Operates",
        icon: Info,
        sections: [
          {
            title: "The Typical Service Workflow",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ol className="space-y-4">
                  {[
                    { step: "1. Customer Inquiry", desc: "A customer contacts the company by phone, website form, or email with a question, complaint, or service request." },
                    { step: "2. Scheduling Appointments", desc: "The CSR or dispatcher collects: name, address, phone number, system type, and description of the issue. They then schedule an appointment that works for the customer and available technicians." },
                    { step: "3. Technician Dispatch", desc: "The dispatcher assigns the job to the most appropriate available technician based on skill level, location, and availability. The technician receives job details via a mobile app, work order, or phone call." },
                    { step: "4. Diagnosis and Quotation", desc: "The technician arrives on-site, inspects the system, identifies the problem, and explains the findings to the customer. A quote is provided before any work begins. Customers must approve the quote before the technician proceeds." },
                    { step: "5. Service or Repair", desc: "With the customer's approval, the technician performs the repair, maintenance, or installation. Parts used and work performed are documented in real time." },
                    { step: "6. Payment and Documentation", desc: "Upon completion, the technician collects payment (cash, check, card, or financing). A digital or paper invoice is generated and provided to the customer. All documentation is saved in the company's service management software." },
                    { step: "7. Follow-Up or Maintenance Scheduling", desc: "A follow-up call or email may be sent to confirm satisfaction. Customers are offered maintenance plans or a reminder for their next service. Reviews are often requested to help the company's online reputation." },
                  ].map(({ step, desc }) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-foreground min-w-fit">{step}:</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ol>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Pro Tip for CSRs & VAs</p>
                  <p>Always confirm the customer's full address, best contact number, and a clear description of the problem during the intake call. This allows the dispatcher to assign the right technician and reduces delays on the day of service.</p>
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
        id: "hvac-terminology",
        label: "HVAC Terminology",
        icon: BookOpen,
        sections: [
          {
            title: "Common HVAC Terms Glossary",
            content: (
              <div className="text-muted-foreground">
                <p className="mb-4 text-sm">Familiarity with these terms will help you communicate confidently with customers, technicians, and colleagues.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-40">Term</TableHead>
                      <TableHead className="font-bold">Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { term: "BTU", def: "British Thermal Unit. A measurement of heat energy. HVAC equipment capacity is rated in BTUs per hour. Higher BTUs = more heating or cooling power." },
                      { term: "Thermostat", def: "A device that monitors and controls the temperature of a space. Modern thermostats can be programmable or smart (Wi-Fi enabled)." },
                      { term: "Refrigerant", def: "A chemical compound that absorbs and releases heat as it circulates through the HVAC system. Common types include R-22 (now phased out) and R-410A. Refrigerant handling requires EPA certification." },
                      { term: "Ductwork", def: "A network of metal, fiberglass, or flexible tubes that distribute conditioned air throughout a building. Leaky or poorly designed ducts waste energy and reduce system efficiency." },
                      { term: "Compressor", def: "The heart of an air conditioning or heat pump system. It compresses refrigerant gas, increasing its pressure and temperature to enable the heat transfer process." },
                      { term: "Air Handler", def: "The indoor component of a split system that circulates air across the coil and through the ductwork. It typically houses the blower motor and filter." },
                      { term: "Condenser", def: "The outdoor unit of an air conditioner or heat pump that releases heat from the refrigerant to the outside air. Contains the compressor and condenser coil." },
                      { term: "Evaporator Coil", def: "Located indoors, this coil absorbs heat from indoor air as refrigerant evaporates inside it, cooling the air before it is circulated back into the space." },
                      { term: "SEER Rating", def: "Seasonal Energy Efficiency Ratio. Measures the cooling efficiency of an air conditioner over an entire season. Higher SEER = more efficient = lower energy bills." },
                      { term: "AFUE", def: "Annual Fuel Utilization Efficiency. Measures heating efficiency for furnaces and boilers. An AFUE of 95% means 95 cents of every dollar spent on fuel becomes heat." },
                      { term: "Load Calculation", def: "An engineering calculation (often using Manual J software) that determines the correct equipment size needed for a specific building based on square footage, insulation, windows, and climate." },
                      { term: "Refrigerant Charge", def: "The correct amount of refrigerant in a system. An improperly charged system runs inefficiently and can cause component failure." },
                      { term: "Blower Motor", def: "The motor inside the air handler or furnace that drives the fan to circulate air through the duct system." },
                      { term: "Condensate Drain", def: "A drain line that removes the moisture (condensate) that collects on the evaporator coil during the cooling process. Clogs can cause water damage." },
                      { term: "Zoning System", def: "A setup using multiple thermostats and dampers to control temperature independently in different areas (zones) of a building." },
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
        id: "hvac-roles",
        label: "Roles in an HVAC Company",
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
                      { role: "HVAC Technician", resp: "Licensed professionals who diagnose, repair, and maintain HVAC systems. They are the primary field workers and must hold appropriate state licenses and EPA 608 certification for refrigerant handling." },
                      { role: "Installer", resp: "Technicians or helpers who specialize in installing new HVAC equipment. Installers work on new construction and replacement projects, often under the supervision of a lead technician or foreman." },
                      { role: "Customer Service Representative (CSR)", resp: "The first point of contact for customers. CSRs answer incoming calls and messages, gather job information, schedule appointments, handle complaints, and communicate with dispatchers." },
                      { role: "Dispatcher", resp: "Responsible for coordinating technician schedules and routing. Dispatchers match service calls with the right technician, monitor job progress throughout the day, and handle urgent schedule changes." },
                      { role: "Sales Representative", resp: "Focuses on selling new HVAC systems, replacement equipment, and maintenance agreements. Sales reps visit customers' homes or businesses, perform assessments, and present quotes." },
                      { role: "Operations Manager", resp: "Oversees day-to-day business operations, including scheduling, staffing, quality control, and company policies. Ensures technicians have the tools and parts they need, and monitors key performance indicators." },
                      { role: "Office Manager / Admin", resp: "Manages administrative tasks such as invoicing, accounts receivable, payroll support, and office organization. Often uses field service management software daily." },
                      { role: "Virtual Assistant (VA)", resp: "Remotely supports customer service, scheduling, follow-up calls, review management, and administrative tasks. Must be well-versed in HVAC terminology and company processes." },
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
        id: "hvac-tools",
        label: "Tools & Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Common HVAC Tools",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm">HVAC technicians rely on specialized tools to diagnose, repair, and maintain systems safely and accurately.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Manifold Gauge Set", desc: "Used to measure refrigerant pressure on both the high (discharge) and low (suction) sides of the system. Helps diagnose compressor and expansion valve issues." },
                    { name: "Refrigerant Recovery Machine", desc: "EPA regulations require that refrigerant be recovered from the system into a certified recovery cylinder rather than released into the atmosphere before any refrigerant work is performed." },
                    { name: "Vacuum Pump", desc: "Used to remove moisture and air from the refrigerant lines after repairs or when installing a new system. This process — called evacuation — is critical to prevent damage and maintain efficiency." },
                    { name: "Leak Detectors", desc: "Electronic leak detectors or UV dye kits used to locate refrigerant leaks. An undetected leak leads to poor system performance, higher energy bills, and environmental harm." },
                    { name: "Multimeter", desc: "An essential electrical diagnostic tool. Technicians use it to measure voltage, current, and resistance in components such as capacitors, contactors, motors, and control boards." },
                    { name: "Thermometer / Temperature Probes", desc: "Measure supply and return air temperatures, allowing technicians to calculate the temperature differential to confirm whether the system is performing correctly." },
                    { name: "Torch and Brazing Equipment", desc: "Used to solder or braze copper refrigerant lines and fittings during installation or repair. Requires skill and proper safety precautions, including the use of nitrogen to prevent oxidation." },
                    { name: "Nitrogen Tank", desc: "Nitrogen is used to pressurize refrigerant lines for leak testing and to protect the interior of lines from oxidation during brazing." },
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
        id: "hvac-safety",
        label: "Safety & Compliance",
        icon: ShieldCheck,
        sections: [
          {
            title: "EPA Section 608 Certification",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Any technician who works with refrigerants is <strong className="text-foreground">required by federal law</strong> to hold an EPA Section 608 certification. This certification covers safe refrigerant handling, recovery, and disposal. There are four certification types (Type I, II, III, and Universal), based on the type of equipment serviced.</p>
              </div>
            )
          },
          {
            title: "State Licensing",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Most states require HVAC contractors and technicians to hold a state license to perform HVAC work. License requirements vary by state but typically include passing an exam, meeting experience requirements, and maintaining continuing education. Operating without a license can result in fines, legal liability, and loss of business.</p>
              </div>
            )
          },
          {
            title: "OSHA Safety Standards",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>OSHA sets workplace safety standards that HVAC companies must follow, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Proper use of personal protective equipment (PPE) such as gloves, safety glasses, and respirators.</li>
                  <li>Safe ladder and fall protection practices.</li>
                  <li>Electrical safety when working with live panels or equipment.</li>
                  <li>Safe handling of refrigerants and other chemicals.</li>
                  <li>Confined space entry procedures for work in attics, crawl spaces, and mechanical rooms.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Building Codes and Permits",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Installation and replacement work typically requires a permit from the local municipality. Permitted work is inspected by a building official to ensure compliance with local building codes and safety standards. Unpermitted HVAC work can void equipment warranties and create liability issues.</p>
              </div>
            )
          },
          {
            title: "Refrigerant Regulations",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The EPA regulates the types of refrigerants that can be used and how they must be handled.</p>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <strong>Important Reminder:</strong> Always verify that technicians dispatched for refrigerant work hold current EPA 608 certification. This is a legal requirement, not just a best practice.
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong className="text-foreground">R-22 (Freon)</strong> — Phased out due to environmental impact; no longer manufactured in the US.</li>
                  <li><strong className="text-foreground">R-410A</strong> — The current standard refrigerant.</li>
                  <li><strong className="text-foreground">R-32 and R-454B</strong> — Newer, lower-global-warming-potential refrigerants entering the market.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "hvac-issues",
        label: "Common Customer Issues",
        icon: AlertCircle,
        sections: [
          {
            title: "AC Not Cooling",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>One of the most common summer complaints. Possible causes include low refrigerant (due to a leak), a dirty condenser coil, a malfunctioning compressor, a tripped circuit breaker, or a clogged air filter.</p>
                <p className="text-sm italic">CSRs should ask: How long has the problem existed? Is the unit running at all?</p>
              </div>
            )
          },
          {
            title: "Weak Airflow",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Common causes include a clogged air filter, a failing blower motor, leaky or disconnected ductwork, closed or blocked vents, or ice buildup on the evaporator coil.</p>
                <p className="text-sm italic">CSRs should ask: When did you last change your filter?</p>
              </div>
            )
          },
          {
            title: "Strange Noises",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Unusual sounds are often the first sign of a developing problem. Common sounds and their likely causes:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong className="text-foreground">Banging or clanking</strong> — Loose or broken component inside the unit (e.g., blower fan blade).</li>
                  <li><strong className="text-foreground">Squealing</strong> — Worn belt or motor bearing.</li>
                  <li><strong className="text-foreground">Clicking</strong> — Relay or control board issue, or a failing capacitor.</li>
                  <li><strong className="text-foreground">Hissing</strong> — Refrigerant leak or air escaping from ductwork.</li>
                  <li><strong className="text-foreground">Rumbling</strong> — Dirty burners on a furnace or debris in the outdoor unit.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Thermostat Issues",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A malfunctioning thermostat can cause the system to short cycle (turn on and off frequently), fail to reach the set temperature, or not turn on at all. Common causes include dead batteries, incorrect settings, wiring issues, or a faulty thermostat that needs replacement.</p>
              </div>
            )
          },
          {
            title: "Refrigerant Leaks",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A refrigerant leak causes gradual loss of cooling capacity, ice buildup on the coil, and higher energy bills.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  Refrigerant cannot simply be "topped off" — the leak must be found, repaired, and the system recharged. This requires a certified technician.
                </div>
              </div>
            )
          },
          {
            title: "Water Leaks or Pooling",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Water around an indoor unit is usually caused by a clogged condensate drain line or a cracked condensate pan. If left unaddressed, this can lead to water damage, mold growth, and system shutdowns (many systems have a safety float switch that shuts off the unit when water is detected).</p>
              </div>
            )
          },
          {
            title: "Uneven Heating or Cooling",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Some rooms are too hot while others are too cold. This can result from improperly designed ductwork, unbalanced airflow, blocked vents, duct leaks, or the need for a zoning system. This is a common complaint in larger homes or multi-story buildings.</p>
              </div>
            )
          },
          {
            title: "System Won't Turn On",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Common causes include a tripped circuit breaker, blown fuse, disconnected power switch, dead thermostat batteries, a safety switch that has triggered, or a failed control board.</p>
                <p className="text-sm italic">CSRs should walk customers through basic troubleshooting (check breaker, replace thermostat batteries) before dispatching a technician.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "hvac-importance",
        label: "Why HVAC Services Matter",
        icon: Heart,
        sections: [
          {
            title: "Why HVAC Services Are Important",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Comfort and Quality of Life", body: "At the most fundamental level, HVAC systems keep people comfortable. Extreme temperatures are not just uncomfortable but can be dangerous, particularly for children, the elderly, and individuals with health conditions." },
                    { title: "Indoor Air Quality (IAQ)", body: "The EPA estimates that indoor air can be 2–5× more polluted than outdoor air. HVAC systems filter out dust, pollen, pet dander, mold spores, and bacteria. Poor IAQ is linked to allergies, asthma, headaches, and reduced cognitive performance." },
                    { title: "Energy Efficiency & Cost Savings", body: "HVAC systems account for approximately 40–50% of total energy consumption in a typical building. A well-maintained, properly sized, high-efficiency system can dramatically reduce utility bills." },
                    { title: "Health and Safety", body: "Poorly maintained furnaces can develop cracks that allow carbon monoxide — a colorless, odorless, and deadly gas — to enter living spaces. Mold thrives in humid, poorly ventilated environments and can cause serious respiratory issues." },
                    { title: "Property Protection", body: "Extreme temperatures and humidity can damage building materials, electronics, wooden furniture, and stored items. HVAC systems regulate moisture levels, preventing warping, cracking, rust, and mold damage." },
                    { title: "Business Continuity", body: "For commercial clients — restaurants, medical offices, retail stores, data centers — HVAC failure is a business emergency. Fast, reliable HVAC service keeps businesses operational and helps them serve their own customers without interruption." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Final Note for New Team Members</p>
                  <p>HVAC may seem like a technical field, but great customer service, clear communication, and attention to detail are just as important as technical knowledge. When in doubt, ask questions, use this guide as a reference, and always prioritize the customer's safety and comfort. Welcome to the team!</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
