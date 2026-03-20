import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const plumbingSections: DocGroup[] = [
  {
    title: "PLUMBING BASICS",
    items: [
      {
        id: "plumbing-intro",
        label: "Introduction to Plumbing Services",
        icon: Wrench,
        sections: [
          {
            title: "What Is a Plumbing Business?",
            content: (
              <div className="space-y-4">
                <p>A plumbing business is a licensed professional service company that installs, repairs, maintains, and upgrades the systems that move water, gas, and waste through residential homes, commercial buildings, and industrial facilities. Plumbers are one of the most essential skilled tradespeople in the built environment — virtually no modern building functions without a reliable, properly installed plumbing system.</p>
                <p>Plumbing companies range from sole-operator residential service plumbers to large commercial plumbing contractors with dozens of licensed journeymen, project managers, and specialized service teams.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Industry Insight</h4>
                  <p className="text-blue-700 text-sm">The average U.S. home has more than $10,000 in plumbing infrastructure. The U.S. plumbing industry employs over 500,000 licensed plumbers and generates more than $130 billion in annual revenue.</p>
                </div>
              </div>
            ),
          },
          {
            title: "The Role of Plumbing Systems",
            content: (
              <div className="space-y-4">
                <p>Plumbing systems perform three interconnected functions in every building they serve:</p>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-1">Water Supply</h4>
                    <p className="text-sm text-gray-600">Delivers pressurized fresh water from a municipal main or private well to every fixture and appliance in the building.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-1">Waste and Drainage</h4>
                    <p className="text-sm text-gray-600">The drain-waste-vent (DWV) system collects all wastewater and removes it by gravity to the municipal sewer or private septic system.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-1">Gas Systems</h4>
                    <p className="text-sm text-gray-600">Many plumbing contractors work on natural gas and propane supply lines, delivering fuel to water heaters, furnaces, ranges, and dryers.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Industry Overview",
            content: (
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Recession-resistant:</strong> Leaks, clogs, and heater failures need attention regardless of economic conditions</li>
                  <li><strong>Heavily regulated:</strong> All plumbing work must be performed by licensed plumbers under applicable building codes</li>
                  <li><strong>Growing demand:</strong> Water efficiency upgrades, aging infrastructure, and commercial construction drive strong long-term demand</li>
                  <li><strong>Emergency premium:</strong> 24/7 emergency services command 1.5x to 2x the standard service rate</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-service-types",
        label: "Types of Plumbing Services",
        icon: Wrench,
        sections: [
          {
            title: "Residential Plumbing",
            content: (
              <div className="space-y-3">
                <p>Encompasses all plumbing work in homes, condominiums, and apartments. Includes routine repairs, appliance installation, fixture replacement, and larger renovation projects.</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm">Residential plumbers interact directly with homeowners and must combine technical excellence with strong customer communication skills and a professional presentation in the customer's home.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Commercial Plumbing",
            content: (
              <div className="space-y-3">
                <p>Performed in offices, restaurants, hotels, healthcare facilities, schools, and apartment complexes. Commercial systems are larger, more complex, and subject to higher usage demands and more stringent building codes.</p>
                <p className="text-sm text-gray-600">Commercial contracts are typically higher revenue and require greater technical expertise, often involving coordination with building managers, general contractors, and local inspectors.</p>
              </div>
            ),
          },
          {
            title: "Emergency Plumbing",
            content: (
              <div className="space-y-4">
                <p>24/7 response to plumbing failures that cannot wait for a scheduled appointment — burst pipes, sewer backups, complete loss of water, or failed water heaters in winter.</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Emergency Protocol</h4>
                  <p className="text-red-700 text-sm">Any customer reporting an active flood, burst pipe, sewage backup, or gas smell should be treated as an emergency. Advise the customer to shut off the main water supply, then dispatch immediately.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Installations & Repairs",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Installations</h4>
                    <p className="text-sm text-gray-600">Full range of new plumbing work — fixtures, appliances, water heaters, softeners, and complete systems in new construction or major renovations. Typically the highest-revenue work category.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Repairs</h4>
                    <p className="text-sm text-gray-600">Fixing leaks, clearing blockages, repairing fixtures and valves, replacing corroded pipe sections, and resolving water pressure problems. Diagnostic accuracy is the hallmark of quality repair service.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Plumbing Maintenance",
            content: (
              <div className="space-y-3">
                <p>Proactive maintenance services include water heater inspections, drain cleaning, pressure testing, leak detection, and backflow preventer certification.</p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-purple-800 text-sm">Maintenance contracts provide recurring revenue and long-term client relationships. Preventive maintenance consistently prevents expensive emergency failures — a compelling value proposition for property owners.</p>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "CORE SERVICES",
    items: [
      {
        id: "plumbing-leak-pipe",
        label: "Leaks & Pipe Work",
        icon: Wrench,
        sections: [
          {
            title: "Leak Detection and Repair",
            content: (
              <div className="space-y-4">
                <p>One of the most requested and consequential plumbing services. Visible leaks are addressed directly; hidden leaks inside walls, under slabs, and underground are detected using acoustic listening equipment, thermal imaging cameras, and pressure decay testing.</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Why It Matters</h4>
                  <p className="text-yellow-700 text-sm">A faucet dripping once per second wastes over 3,000 gallons per year. Slab leaks beneath a concrete foundation are particularly serious, requiring saw-cutting the slab or rerouting pipes through walls.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Pipe Installation and Replacement",
            content: (
              <div className="space-y-4">
                <p>Ranges from adding a new branch line to replacing entire supply or drain systems. Common projects include replacing corroded galvanized pipes with copper or PEX, and rerouting pipes damaged by slab leaks.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm"><strong>PEX tubing</strong> has become the dominant residential supply piping material due to its flexibility, freeze resistance, and ease of installation.</p>
                </div>
                <p className="text-sm text-gray-600">All pipe work must comply with local plumbing codes and be installed under the appropriate permits.</p>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-drains-heaters",
        label: "Drains & Water Heaters",
        icon: Wrench,
        sections: [
          {
            title: "Drain Cleaning",
            content: (
              <div className="space-y-4">
                <p>One of the highest-demand plumbing services, addressing blockages from hair, soap scum, grease, food particles, and root intrusion.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="border rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm mb-1">Plunging</p>
                    <p className="text-xs text-gray-600">Minor fixture blockages</p>
                  </div>
                  <div className="border rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm mb-1">Drain Snaking</p>
                    <p className="text-xs text-gray-600">Blockages within first 25–50 feet</p>
                  </div>
                  <div className="border rounded-lg p-3 text-center">
                    <p className="font-semibold text-sm mb-1">Hydro-Jetting</p>
                    <p className="text-xs text-gray-600">Full pipe cleaning, grease, roots</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Water Heater Services",
            content: (
              <div className="space-y-4">
                <p>Covers the full lifecycle: diagnosing failures (no hot water, insufficient heat, discolored water, leaking tank), maintenance (flushing sediment, testing PRV, inspecting anode rods), and full unit replacement.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Traditional tank-type water heaters last 10–15 years on average</li>
                  <li>Tankless (on-demand) heaters offer continuous hot water and energy savings</li>
                  <li>A leaking tank is urgent — warrants immediate service call</li>
                  <li>Units 15+ years old almost always merit replacement over repair</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-fixtures-sewer",
        label: "Fixtures & Sewer",
        icon: Wrench,
        sections: [
          {
            title: "Toilet, Sink, and Faucet Installation",
            content: (
              <div className="space-y-4">
                <p>Among the most frequent residential service calls. Includes full replacement and upgrading to higher-efficiency models.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Toilets:</strong> Replaced for leaks at base, cracks, failed flush mechanisms, or efficiency upgrades</li>
                  <li><strong>Faucets:</strong> Replaced when cartridges wear out or as part of kitchen/bathroom renovations</li>
                  <li><strong>Sinks:</strong> Ranges from drop-in swaps to full vanity and rough-in work for new locations</li>
                  <li>All installations include supply shutoff valve replacement and supply line inspection</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Sewer Line Repair",
            content: (
              <div className="space-y-4">
                <p>One of the highest-value and most technically demanding services. The sewer line carries all wastewater from the building to the municipal sewer or septic system.</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Common Sewer Issues</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Root intrusion into the pipe</li>
                    <li>• Corrosion and pipe deterioration</li>
                    <li>• Bellying — low spots where debris accumulates</li>
                    <li>• Offset joints and collapsed sections</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">Diagnosis begins with a sewer camera inspection. Trenchless repair methods (pipe lining, pipe bursting) allow rehabilitation without extensive excavation.</p>
              </div>
            ),
          },
          {
            title: "Garbage Disposal & Kitchen/Bath Upgrades",
            content: (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Garbage Disposal</h4>
                    <p className="text-sm text-gray-600">Installation combines plumbing and basic electrical work. Plumbers advise on correct usage — avoiding fibrous foods, grease, and hard items — to prevent premature failure.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Bathroom & Kitchen Upgrades</h4>
                    <p className="text-sm text-gray-600">Among the most impactful and highest-revenue projects. Require close coordination with general contractors, cabinetmakers, tile setters, and electricians. Rough-in must be completed and inspected before finishing work begins.</p>
                  </div>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "COMMON PROBLEMS & WORKFLOW",
    items: [
      {
        id: "plumbing-problems",
        label: "Common Plumbing Problems",
        icon: Wrench,
        sections: [
          {
            title: "Leaking Pipes",
            content: (
              <div className="space-y-3">
                <p>Among the most common and consequential problems. Ranges from minor drips to major pipe failures. Even small concealed leaks rapidly promote mold and structural decay.</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm"><strong>CSR Action:</strong> Determine if the leak is causing active water damage (emergency dispatch), whether water has been shut off, and approximate leak location. Always advise customers to shut off water to the affected area.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Clogged Drains",
            content: (
              <div className="space-y-3">
                <p>The single most common plumbing service call. Kitchen drains clog from grease; bathroom drains from hair; toilets from non-flushable items.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm"><strong>Key question:</strong> Are multiple drains affected? If yes — main line blockage, urgent. If one fixture only — standard service call.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Low Water Pressure",
            content: (
              <div className="space-y-3">
                <p>Common causes: partially closed shutoff valve, failing pressure regulator, corroded supply pipes, water leak reducing pressure, or a failing well pump.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Whole house vs. single fixture?</li>
                  <li>Gradual or sudden onset?</li>
                  <li>Cold only or hot and cold? (helps distinguish supply from heater issues)</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Running Toilets",
            content: (
              <div className="space-y-3">
                <p>A continuously running toilet wastes 200+ gallons of water per day. Most common cause is a failed flapper valve. Other causes include a faulty fill valve, corroded flush valve seat, or float set too high.</p>
                <p className="text-sm text-gray-600">Typically a straightforward repair (fill valve and flapper replacement) completable in under an hour.</p>
              </div>
            ),
          },
          {
            title: "Water Heater Problems",
            content: (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-3 py-2 text-left">Symptom</th>
                        <th className="border px-3 py-2 text-left">Likely Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["No hot water", "Failed heating element (electric) or thermocouple/gas valve (gas)"],
                        ["Insufficient hot water", "Failing element, excessive demand, or sediment buildup"],
                        ["Rusty/discolored water", "Deteriorated anode rod or corroded tank nearing end of life"],
                        ["Leaking tank", "Urgent — warrants immediate service, tank will fail completely"],
                      ].map(([sym, cause], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border px-3 py-2 font-medium">{sym}</td>
                          <td className="border px-3 py-2">{cause}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ),
          },
          {
            title: "Burst Pipes & Sewer Backups",
            content: (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Burst Pipes — Emergency</h4>
                  <p className="text-red-700 text-sm">Most common during freezing weather. Can release hundreds of gallons per hour and cause catastrophic damage within minutes. Instruct customer to shut off the main water supply immediately, then dispatch emergency plumber.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Sewer Backups — Emergency + Health Hazard</h4>
                  <p className="text-orange-700 text-sm">Sewage flowing back into drains contains dangerous pathogens. Multiple backing drains = main line blockage requiring immediate service. Advise customer not to use any water-based fixtures until cleared.</p>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-workflow",
        label: "Service Workflow",
        icon: Wrench,
        sections: [
          {
            title: "Step-by-Step Service Call",
            content: (
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Customer Inquiry", desc: "Customer contacts by phone, email, or online form. Collect: full name, address, callback number, problem description, urgency level, and whether water has been shut off." },
                    { step: "2", title: "Scheduling", desc: "Non-emergency calls scheduled within 24–48 hours with a confirmed appointment window. Reminders sent the day before and morning of the visit." },
                    { step: "3", title: "Dispatch", desc: "Dispatcher assigns the appropriate licensed plumber based on work type, license level, location, and prior service history at the property." },
                    { step: "4", title: "On-Site Diagnosis", desc: "Plumber inspects and diagnoses root cause before doing any work. Takes notes and photographs for the service record. Diagnosis prevents treating symptoms while missing underlying causes." },
                    { step: "5", title: "Quote", desc: "Plumber presents written quote describing findings, recommended work, materials, timeline, and total price. Customer must authorize in writing before work begins." },
                    { step: "6", title: "Perform Work", desc: "With authorization confirmed, plumber completes work to code. Area protected with drop cloths and shoe covers. Water/gas shut off verified before opening any pipes." },
                    { step: "7", title: "Testing", desc: "All repaired or installed components tested under normal operating conditions before leaving. Customer shown completed work and test results." },
                    { step: "8", title: "Payment & Documentation", desc: "Payment collected at completion (residential) or invoiced (commercial). Detailed invoice documents diagnosis, work performed, materials, warranty, and any recommendations." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            title: "CSR & VA Key Questions",
            content: (
              <div className="space-y-4">
                <p className="text-sm">When taking a plumbing inquiry, always ask:</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
                    <li>Is there an active leak or flooding right now?</li>
                    <li>Which fixture or area is affected?</li>
                    <li>Residential or commercial property?</li>
                    <li>Has the water been shut off?</li>
                    <li>How long has this been happening?</li>
                    <li>What is the property address?</li>
                  </ol>
                </div>
                <p className="text-sm text-gray-600">This information enables accurate dispatching, proper plumber preparation, and realistic customer expectations from the very first call.</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "TERMINOLOGY & ROLES",
    items: [
      {
        id: "plumbing-terminology",
        label: "Common Terminology",
        icon: Wrench,
        sections: [
          {
            title: "Plumbing Glossary",
            content: (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-3 py-2 text-left">Term</th>
                        <th className="border px-3 py-2 text-left">Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Water Pressure (PSI)", "Force of water through supply pipes (40–80 PSI normal). Below 40 PSI reduces performance; above 80 PSI stresses pipes and increases leak risk."],
                        ["Drain Line", "Piping that carries wastewater away from fixtures by gravity. Must maintain minimum 1/4 inch per foot slope to flow properly."],
                        ["Drain-Waste-Vent (DWV)", "Complete system of drain, waste, and vent pipes. Vent pipes extend through the roof to equalize air pressure and prevent trap siphoning."],
                        ["Pipe Fittings", "Components joining sections of pipe — elbows, tees, couplings, reducers, and unions."],
                        ["Shut-Off Valve", "Controls water flow in a supply line. Each fixture should have a dedicated shutoff. The main shutoff controls water to the entire building."],
                        ["Backflow", "Undesirable reversal of water flow that can contaminate the potable supply. Prevented by backflow prevention devices required by code."],
                        ["Sewer Line", "Main drain pipe (4–6 inch) carrying all wastewater from the building to the municipal sewer or septic tank."],
                        ["Trap", "Curved pipe section retaining water to block sewer gases from entering the building. Every fixture drain must have a trap."],
                        ["Water Hammer", "Banging noise from sudden water flow stop creating a pressure shock wave. Remedied with water hammer arrestors."],
                        ["Pressure Regulator Valve (PRV)", "Reduces incoming municipal pressure to safe operating level (typically 50–60 PSI). A failing PRV causes high or fluctuating pressure."],
                        ["PEX", "Cross-linked polyethylene — dominant residential supply pipe material. Flexible, freeze-resistant, easy to install, and corrosion-resistant."],
                        ["Hydro-Jetting", "High-pressure water (1,500–4,000 PSI) cleaning drain and sewer pipe interiors. Cuts grease and root intrusion, cleans full pipe diameter."],
                        ["Sewer Camera Inspection", "Waterproof camera on flexible cable providing real-time video of pipe interior. Definitive diagnostic tool for chronic drain and sewer problems."],
                        ["Anode Rod", "Sacrificial metal rod in tank water heaters protecting the steel tank from corrosion. Should be inspected and replaced every 3–5 years."],
                        ["Rough-In Plumbing", "Initial installation phase — supply and drain pipes installed inside walls before finishing work begins. Must be inspected before being concealed."],
                      ].map(([term, def], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border px-3 py-2 font-medium">{term}</td>
                          <td className="border px-3 py-2">{def}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-roles",
        label: "Team Roles",
        icon: Wrench,
        sections: [
          {
            title: "Roles & Responsibilities",
            content: (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-3 py-2 text-left">Role</th>
                        <th className="border px-3 py-2 text-left">Responsibilities</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Master Plumber", "Highest license level — can pull permits, supervise all work, and sign off on inspections. Business must be owned/operated by a master plumber in most states."],
                        ["Journeyman Plumber", "Licensed plumber (4–5 year apprenticeship) who independently performs all plumbing work under a master plumber's oversight for permit projects."],
                        ["Apprentice Plumber", "Plumber in training combining on-the-job work with classroom instruction. Must work under direct supervision of a journeyman or master plumber."],
                        ["Plumbing Technician", "Handles specific service categories (drain cleaning, water heater maintenance, basic fixture work) under licensed plumber supervision."],
                        ["Customer Service Representative (CSR)", "Handles all incoming calls, qualifies emergencies, gathers job info, schedules appointments, processes billing, and manages customer concerns."],
                        ["Dispatcher", "Manages real-time scheduling and routing of plumbers. Assigns and dispatches calls, monitors progress, and communicates arrival times to customers."],
                        ["Operations Manager", "Oversees field operations — plumber performance, scheduling, vehicles, inventory, permit tracking, and customer satisfaction metrics."],
                        ["Business Owner / Contractor", "Holds master plumber and contractor licenses. Sets strategy and pricing, manages finances, and is ultimately responsible for quality and code compliance."],
                      ].map(([role, resp], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border px-3 py-2 font-medium">{role}</td>
                          <td className="border px-3 py-2">{resp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "TOOLS & SAFETY",
    items: [
      {
        id: "plumbing-tools",
        label: "Tools and Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Essential Plumbing Tools",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Pipe Wrenches", desc: "Heavy adjustable wrenches for gripping and turning round pipe and fittings. Used in pairs — one to hold, one to turn." },
                    { name: "Drain Snakes & Augers", desc: "Primary tool for clearing blocked drains. Manual hand snakes for small drains; motorized drum snakes for main lines up to 4 inches in diameter." },
                    { name: "Plungers", desc: "Cup plungers for flat sink/floor drains; flange plungers designed for toilets. Simple but highly effective for minor blockages." },
                    { name: "Pipe Cutters", desc: "Rotary cutters for copper pipe; ratchet-style shears for PEX/CPVC/PVC. Produce clean, square cuts essential for proper connections." },
                    { name: "Leak Detection Equipment", desc: "Acoustic listening devices, thermal imaging cameras, and moisture meters to locate hidden leaks without opening every wall." },
                    { name: "Sewer Inspection Cameras", desc: "Waterproof cameras on flexible cables with display monitors. Modern systems include underground locators for precise excavation targeting." },
                    { name: "Soldering & Connection Tools", desc: "Propane/MAPP torches for copper sweating; crimp or clamp tools for PEX; push-to-connect fittings for accessible locations." },
                  ].map((item) => (
                    <div key={item.name} className="border rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-safety",
        label: "Safety and Compliance",
        icon: Wrench,
        sections: [
          {
            title: "Safe Tool Usage",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>All power tools must be used with guards in place by trained operators</li>
                  <li>Torches must be kept from combustibles — use a flame shield near framing; keep a fire extinguisher within reach</li>
                  <li>Wear cut-resistant gloves when handling copper pipe and freshly cut metal fittings</li>
                  <li>Use proper body mechanics for heavy lifts — water heater replacement is a two-person job</li>
                  <li>Eye protection required when cutting pipe, using power tools, or working overhead</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Water & Gas System Safety",
            content: (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Water Safety</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Never work on a supply line without confirming it is fully shut off, depressurized, and drained</li>
                    <li>• All materials contacting potable water must be lead-free and NSF/ANSI 61 approved</li>
                    <li>• Wear gloves and eye protection when working with sewage or drain systems</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Gas Safety</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Confirm gas supply is fully shut off at the meter before opening any connections</li>
                    <li>• Ventilate the area before gas work begins</li>
                    <li>• All new connections must pass a pressure test with a calibrated detector before restoring gas</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Plumbing Code Compliance",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>All work must comply with the IPC or UPC as adopted by the local authority having jurisdiction (AHJ)</li>
                  <li>Permit-required work must be submitted, inspected at required stages, and receive final approval before being concealed</li>
                  <li>All plumbers must hold the required license for the work being performed</li>
                  <li>Backflow prevention devices must be tested annually by a certified tester in most jurisdictions</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Preventing Water Damage",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Identify and test the main water shutoff before performing any supply line work</li>
                  <li>Protect flooring, cabinetry, and furnishings with drop cloths before opening plumbing</li>
                  <li>Inspect all connections for leaks under normal operating pressure before closing walls</li>
                  <li>Advise customers: no grease down drains, use sink strainers, know the main shutoff location, schedule periodic water heater maintenance</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "plumbing-importance",
        label: "Importance of Professional Plumbing",
        icon: Wrench,
        sections: [
          {
            title: "Preventing Water Damage",
            content: (
              <div className="space-y-4">
                <p>Water is one of the most destructive forces a building can face. A single concealed leaking pipe can saturate insulation, rot framing, destroy drywall, and create toxic mold conditions within 24–48 hours. A burst pipe at full pressure can cause tens of thousands of dollars in damage in a single hour.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm">Professional plumbers inspect the entire system for developing issues, identify root causes, and install lasting repairs — not just surface fixes.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Maintaining Sanitation & Safe Water",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Sanitation</h4>
                    <p className="text-green-700 text-sm">The plumbing system is the foundation of modern sanitation — removing human waste safely before it becomes a health hazard. Sewer backups and failed traps create direct health risks and regulatory consequences for commercial properties.</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Safe Water</h4>
                    <p className="text-purple-700 text-sm">Backflow prevention, lead-free materials, correct water heater temperatures (preventing Legionella growth), and proper pressure regulation all protect the drinking water supply. DIY work using incorrect materials can contaminate the supply in ways not immediately visible.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Preventing Costly Repairs",
            content: (
              <div className="space-y-4">
                <p>The financial argument for professional plumbing maintenance is compelling:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <ul className="text-gray-800 text-sm space-y-2">
                    <li>• Water damage averages <strong>$11,000+ per incident</strong> (Insurance Information Institute)</li>
                    <li>• Mold remediation adds <strong>$1,000–$10,000+</strong> after water damage</li>
                    <li>• Full sewer line replacement costs <strong>$5,000–$15,000</strong></li>
                    <li>• A water heater failure causing flooding adds remediation costs on top of replacement</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">All of these outcomes are preventable — or their severity is dramatically reducible — with professional maintenance and early intervention. Help customers understand this prevention value clearly.</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
];
