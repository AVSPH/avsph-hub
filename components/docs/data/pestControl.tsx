import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const pestControlSections: DocGroup[] = [
  {
    title: "PEST CONTROL BASICS",
    items: [
      {
        id: "pest-introduction",
        label: "Introduction to Pest Control",
        icon: Bug,
        sections: [
          {
            title: "What Is Pest Control?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Pest control is the professional management, suppression, and elimination of unwanted organisms — commonly referred to as pests — that negatively affect human health, property, agriculture, or the natural environment. These pests include insects such as ants, cockroaches, termites, and bed bugs; arthropods such as spiders, fleas, and ticks; and vertebrates such as rats and mice.</p>
                <p>Professional pest control involves a structured process of <strong className="text-foreground">inspection, accurate pest identification, targeted treatment</strong>, and ongoing monitoring to prevent reinfestation. Pest control technicians are trained scientists and problem-solvers who understand pest biology, behavior, and the safest and most effective ways to manage each species.</p>
                <div className="p-4 bg-muted/50 border rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Key Industry Fact</p>
                  <p className="text-sm">Pest control is considered an essential service. Even during public health emergencies, pest control operations continue because the risks associated with pest infestations — disease transmission, structural damage, and food contamination — are too serious to pause.</p>
                </div>
              </div>
            )
          },
          {
            title: "Why Pest Control Services Are Important",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The presence of pests in homes and businesses is far more than an inconvenience. Pests pose serious threats to human health, structural integrity, food safety, and mental well-being.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Public health protection:</strong> Many pests are vectors for serious diseases. Mosquitoes transmit West Nile Virus, malaria, and dengue fever. Rodents carry hantavirus and salmonella. Cockroaches spread E. coli. Ticks transmit Lyme disease and Rocky Mountain Spotted Fever.</li>
                  <li><strong className="text-foreground">Property protection:</strong> Termites cause an estimated $5 billion in structural damage annually in the U.S. alone. Rodents gnaw through electrical wiring, creating fire hazards, and cause significant damage to insulation, drywall, and stored goods.</li>
                  <li><strong className="text-foreground">Food safety:</strong> In commercial food preparation and storage environments, pest infestations can contaminate food supplies, result in failed health inspections, regulatory fines, and temporary or permanent closure.</li>
                  <li><strong className="text-foreground">Mental health and quality of life:</strong> Living or working in a pest-infested environment causes significant psychological distress, sleep disruption, and anxiety.</li>
                  <li><strong className="text-foreground">Regulatory compliance:</strong> Many commercial industries — including food service, healthcare, hospitality, and childcare — are legally required to maintain pest-free environments as a condition of their operating licenses.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Overview of the Pest Control Industry",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The pest control industry is a large, growing, and essential segment of the broader home and commercial services market.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Services are in demand year-round, with seasonal peaks driven by pest activity cycles. Mosquito, ant, and bee activity peaks in spring and summer; rodent pressure intensifies in fall and winter.</li>
                  <li>The industry serves both residential clients (homeowners and renters) and commercial clients (restaurants, hotels, hospitals, warehouses, schools, and property managers).</li>
                  <li>Recurring service agreements — monthly, bimonthly, or quarterly — provide stable, predictable revenue.</li>
                  <li>Pest control is a heavily regulated industry. Technicians must be licensed by their state and certified to handle restricted-use pesticides.</li>
                  <li>The industry is evolving toward more sustainable, science-based approaches through Integrated Pest Management (IPM), which emphasizes using the least toxic, most targeted solutions available.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "pest-types",
        label: "Common Types of Pests",
        icon: List,
        sections: [
          {
            title: "Ants",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>One of the most frequently reported pest problems in both residential and commercial settings. While most ant species are nuisance pests, certain species present more serious concerns:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong className="text-foreground">Carpenter ants</strong> excavate wood to build their nests, causing structural damage similar to termites.</li>
                  <li><strong className="text-foreground">Fire ants</strong> deliver painful stings that can trigger severe allergic reactions.</li>
                </ul>
                <p className="text-sm">Ant colonies can number in the hundreds of thousands — the visible ants inside a structure represent only a small fraction of the total colony, making professional treatment far more effective than household sprays.</p>
              </div>
            )
          },
          {
            title: "Termites",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Among the most destructive pests on Earth. <strong className="text-foreground">Subterranean termites</strong> live in underground colonies and travel through mud tubes to feed on cellulose in wood, paper, and insulation. <strong className="text-foreground">Drywood termites</strong> infest wood directly without soil contact.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  Termite infestations can go undetected for years while causing catastrophic structural damage. Termite damage is typically <strong>not covered by homeowners insurance</strong>.
                </div>
              </div>
            )
          },
          {
            title: "Cockroaches",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Among the most resilient and difficult pests to eliminate without professional intervention. Common species include the <strong className="text-foreground">German cockroach</strong> (most common indoors), American cockroach, and Oriental cockroach. Cockroaches spread bacteria, trigger asthma attacks, and contaminate food preparation surfaces. Over-the-counter sprays push cockroaches deeper into walls rather than eliminating the problem — professional baiting programs are far more effective.</p>
              </div>
            )
          },
          {
            title: "Rodents (Rats and Mice)",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Significant pest threats in urban, suburban, and rural environments alike. Rodents contaminate food and surfaces with their urine, droppings, and hair. They gnaw continuously, damaging structures, electrical wiring (a serious fire hazard), plumbing, and insulation. A pair of mice can produce up to 200 offspring in a single year. Professional exclusion (sealing entry points) combined with baiting and trapping programs is required for effective long-term control.</p>
              </div>
            )
          },
          {
            title: "Bed Bugs",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Small, blood-feeding insects that hide in mattresses, furniture, wall cracks, and electrical outlets during the day and emerge at night to feed. Their bites cause itchy welts and significant sleep disruption. Bed bugs are exceptional hitchhikers — they spread easily through luggage, second-hand furniture, and clothing. They are highly resistant to most over-the-counter pesticides and can survive for months without feeding.</p>
                <p className="text-sm italic">Professional treatment — typically heat treatment or a combination of methods — is required to eliminate an infestation completely.</p>
              </div>
            )
          },
          {
            title: "Mosquitoes",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The deadliest animals on Earth, responsible for more human deaths annually than any other organism through the diseases they transmit — malaria, dengue fever, Zika virus, West Nile Virus, and chikungunya. Even in regions where these diseases are less prevalent, mosquitoes make outdoor spaces uncomfortable. Professional programs target both adult populations and larval stages in standing water.</p>
              </div>
            )
          },
          {
            title: "Spiders",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>While most spider species are harmless and ecologically beneficial, certain species pose genuine medical threats. The <strong className="text-foreground">black widow</strong> and <strong className="text-foreground">brown recluse</strong> are the most medically significant species in the U.S. — their bites can cause severe pain, tissue necrosis, and serious systemic reactions. Spider control typically involves treating the interior and exterior perimeter to eliminate both spiders and the insects they feed on.</p>
              </div>
            )
          },
          {
            title: "Fleas and Ticks",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Parasitic pests that feed on the blood of animals and humans. <strong className="text-foreground">Fleas</strong> infest homes primarily through pets — a single adult flea can lay up to 50 eggs per day. <strong className="text-foreground">Ticks</strong> attach to their hosts outdoors and can transmit serious diseases including Lyme disease, babesiosis, and anaplasmosis. Professional treatment for fleas involves both indoor and outdoor treatments as well as guidance on treating affected pets. Tick control focuses on treating yard perimeters and habitat modification.</p>
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
        id: "pest-services",
        label: "Core Services",
        icon: CheckCircle,
        sections: [
          {
            title: "Pest Inspection",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A thorough examination of a property to identify signs of current or potential pest activity. Technicians examine the interior and exterior of the structure, including the foundation, crawl spaces, attic, plumbing areas, landscaping, and other entry-point risk zones. Inspections are the essential first step before any treatment can be recommended.</p>
                <p className="text-sm italic">Many real estate transactions require a formal Wood Destroying Organism (WDO) inspection report conducted by a licensed pest control professional.</p>
              </div>
            )
          },
          {
            title: "Pest Identification",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Accurate pest identification is critical because treatment methods vary significantly between species. A misidentification can result in ineffective treatment, wasted money, and continued infestation. Professional technicians are trained to identify pests from live specimens, droppings, damage patterns, nesting materials, and other evidence.</p>
              </div>
            )
          },
          {
            title: "Pest Treatment and Extermination",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Targeted application of pesticides, baits, traps, or other control methods to eliminate an active infestation. Treatment plans are customized based on the pest species, severity of infestation, size of the property, presence of children and pets, and customer preferences. Responsible pest control companies always explain the treatment plan, products to be used, and safety precautions before beginning any treatment.</p>
              </div>
            )
          },
          {
            title: "Preventive Pest Control Programs",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Regularly scheduled treatments designed to create a protective barrier around a property before pest problems develop. Most programs include quarterly, bimonthly, or monthly service visits that treat the exterior perimeter, address conducive conditions, and provide interior treatment as needed. Preventive programs are the most cost-effective way for homeowners and businesses to maintain year-round pest protection.</p>
              </div>
            )
          },
          {
            title: "Termite Control and Treatment",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>One of the most specialized and highest-value services in the industry. Includes termite inspections, installation of liquid soil treatment barriers (termiticides), installation and ongoing monitoring of termite baiting station systems, spot treatments, and fumigation for drywood termite infestations.</p>
                <div className="p-3 bg-primary/5 border rounded-lg text-sm">
                  Many companies offer annual termite warranty programs that guarantee re-treatment at no additional cost if termite activity is found within the treatment area.
                </div>
              </div>
            )
          },
          {
            title: "Rodent Control",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Rodent control programs address both the immediate infestation (through trapping and baiting) and long-term prevention through <strong className="text-foreground">exclusion</strong> — identifying and sealing all potential entry points. A comprehensive program includes thorough inspection, a customized treatment plan, installation of bait stations or traps, follow-up monitoring visits, and detailed exclusion work.</p>
              </div>
            )
          },
          {
            title: "Bed Bug Treatment",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A multi-step process requiring significant expertise and specialized equipment. Options include thermal heat treatments (raising the room to temperatures lethal to bed bugs at all life stages), chemical treatment programs using a rotation of products to prevent resistance, and combination approaches. Multiple follow-up inspections are typically required to confirm complete elimination.</p>
                <p className="text-sm italic">CSRs should be prepared to guide customers through preparation steps required before treatment.</p>
              </div>
            )
          },
          {
            title: "Mosquito Control",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Includes perimeter barrier spray treatments applied to foliage and shrubs where adult mosquitoes rest during the day, and larviciding treatments applied to standing water sources (ponds, birdbaths, gutters) to prevent larvae from developing into adults. Many companies offer recurring monthly or bimonthly programs during the active season, as well as one-time treatments for events and special occasions.</p>
              </div>
            )
          },
          {
            title: "Commercial Pest Management",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Requires a higher level of expertise, documentation, and regulatory compliance than residential service. Commercial clients — restaurants, hotels, food processing facilities, hospitals, schools, and warehouses — have stringent pest-free standards. Services include regular scheduled inspections and treatments, detailed service documentation and reports (required for health inspections and audits), employee education, and IPM programs tailored to each facility type.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "pest-methods",
        label: "Pest Control Methods",
        icon: Droplets,
        sections: [
          {
            title: "Chemical Treatments",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Application of pesticides in liquid, granular, dust, or aerosol form to control or eliminate pests. When applied by a licensed professional, modern pesticides are effective while posing minimal risk when label instructions are followed.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong className="text-foreground">Liquid residual sprays</strong> — applied to exterior perimeters and interior crack-and-crevice areas.</li>
                  <li><strong className="text-foreground">Dust formulations</strong> — used in wall voids, attics, and electrical outlets.</li>
                  <li><strong className="text-foreground">Granular treatments</strong> — applied to lawns and soil.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Baiting Systems",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Baiting systems attract pests to a targeted food or pheromone lure containing a slow-acting pesticide. After consuming the bait, the pest returns to the colony and transfers the active ingredient to other individuals, resulting in colony-wide elimination. Particularly effective for cockroaches, ants, and rodents.</p>
                <div className="p-3 bg-muted/50 border rounded-lg text-sm">
                  Because baits are slow-acting by design, customers should be advised that results may take days to weeks to fully manifest. Bait stations are tamper-resistant, making them safe for use in homes with children and pets.
                </div>
              </div>
            )
          },
          {
            title: "Trapping",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A non-chemical method used primarily for rodent control and some wildlife management applications. Live traps capture rodents without harm for relocation; snap traps provide immediate kill; glue boards are used in sensitive environments where rodenticides cannot be used. Trapping programs require regular monitoring and servicing — typically every one to three days — to be effective and humane.</p>
              </div>
            )
          },
          {
            title: "Heat Treatments",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The most effective non-chemical method for eliminating bed bugs, also used for drywood termites. Specialized heating equipment raises the temperature of the treated space to approximately <strong className="text-foreground">120–135°F</strong> — lethal to all life stages including eggs. Heat penetrates into furniture, mattresses, and wall cavities that chemicals cannot easily reach. Can achieve complete elimination in a single treatment session with no chemical residue.</p>
              </div>
            )
          },
          {
            title: "Fumigation",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The most intensive pest control treatment available, used primarily for whole-structure drywood termite infestations. The entire structure is enclosed under a tent and a gaseous fumigant (typically sulfuryl fluoride) is introduced at a lethal concentration. All occupants, including pets and plants, must vacate the property for two to three days.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  Fumigation requires a separate fumigation license and is tightly regulated. It eliminates all stages of the target pest throughout the entire structure, including inaccessible areas.
                </div>
              </div>
            )
          },
          {
            title: "Integrated Pest Management (IPM)",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The modern, science-based philosophy of pest control that prioritizes long-term prevention through a combination of biological, cultural, physical, and chemical strategies. IPM uses the <strong className="text-foreground">least-risk methods first</strong> — such as habitat modification, exclusion, and mechanical traps — before resorting to chemical treatments. IPM is the gold standard approach and is required by many commercial clients and government contracts.</p>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">IPM in Practice</p>
                  <p>An IPM approach to a cockroach problem in a restaurant does not start with spraying. It starts with a thorough inspection to identify harborage areas and food/water sources, followed by sanitation recommendations, placement of gel baits, and monitoring with sticky monitors to track population reduction.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pest-operations",
        label: "How the Business Operates",
        icon: Info,
        sections: [
          {
            title: "The Typical Service Workflow",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ol className="space-y-4">
                  {[
                    { step: "1. Customer Inquiry or Booking", desc: "A potential customer contacts the company by phone, email, website form, live chat, or online booking platform. They describe the pest problem, property type and size, location, and any urgent concerns. CSRs and VAs play a critical role by gathering all relevant information, demonstrating empathy and professionalism, and beginning to qualify the type and complexity of service required." },
                    { step: "2. Pest Problem Assessment", desc: "Based on the customer's description, the CSR conducts an initial assessment. Key questions: How long have they been seeing pests? Where are they being seen? How many? Have they noticed any damage or droppings? Has any previous treatment been performed? This determines whether a standard service quote can be provided or whether an on-site inspection is required first." },
                    { step: "3. Scheduling an Inspection", desc: "An appointment is scheduled for an inspection or initial service visit. A confirmation message is sent with appointment details, preparation instructions (if applicable), and what to expect. A reminder is sent the day prior. For urgent situations such as active bed bug or rodent infestations, same-day or next-day scheduling may be appropriate." },
                    { step: "4. On-Site Inspection by Technician", desc: "A licensed pest control technician conducts a thorough interior and exterior inspection. The technician examines all areas of concern, identifies conducive conditions, checks for entry points, and documents all findings. A professional inspection typically takes 30 to 90 minutes depending on the size and complexity of the property." },
                    { step: "5. Identifying the Pest and Severity", desc: "Based on the inspection findings, the technician makes a definitive identification of the pest species and assesses the severity of the infestation (light, moderate, or severe). This assessment directly determines the treatment method, the products required, the number of service visits needed, and the cost." },
                    { step: "6. Treatment Recommendation and Quotation", desc: "The technician or sales representative presents the customer with a clear treatment recommendation and a written quotation explaining the proposed treatment method, products to be used, expected results and timeline, preparation requirements, and the cost. For larger jobs (termite treatment, fumigation, major rodent exclusion), this may be a separate consultation before any work begins." },
                    { step: "7. Performing the Treatment", desc: "With the customer's written or verbal authorization, the technician performs the treatment according to the plan. All pesticide applications are made in strict accordance with the product label, which is federal law. The technician documents all products used, application rates, and areas treated on the service ticket. Customers are advised of re-entry intervals, ventilation requirements, and post-treatment precautions." },
                    { step: "8. Follow-Up Visits and Monitoring", desc: "Pest control is rarely a one-and-done service. Most treatments require follow-up visits to monitor efficacy, address any remaining pest activity, service bait stations, and check traps. Follow-up visits are especially critical for termite programs, rodent control programs, bed bug treatments, and commercial accounts." },
                    { step: "9. Payment and Documentation", desc: "Payment is collected at the time of service or invoiced after completion, depending on the account type. Residential clients typically pay at service; commercial accounts may receive net-30 invoices. Service records, treatment reports, and warranty documentation are provided to the customer. Commercial clients receive formal service reports for their regulatory compliance files." },
                  ].map(({ step, desc }) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-foreground min-w-fit">{step}:</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ol>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">CSR & VA Tip</p>
                  <p>Always ask these key questions when a customer calls: What pest are they seeing? Where exactly are they seeing it (inside, outside, specific rooms)? How long has this been happening? Do they have children or pets at home? This information allows the dispatcher to assign the right technician and ensures the technician arrives prepared with the correct equipment and products.</p>
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
        id: "pest-terminology",
        label: "Pest Control Terminology",
        icon: BookOpen,
        sections: [
          {
            title: "Common Pest Control Terms Glossary",
            content: (
              <div className="text-muted-foreground">
                <p className="mb-4 text-sm">Familiarity with these terms is essential for communicating confidently with customers, technicians, and colleagues.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-44">Term</TableHead>
                      <TableHead className="font-bold">Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { term: "Infestation", def: "The presence of a pest in numbers large enough to be harmful, threatening, or cause economic damage. A few ants in the kitchen may be a nuisance; thousands of ants with an active nest inside the structure constitute an infestation." },
                      { term: "Extermination", def: "The complete elimination of a pest population from a defined area. While commonly used by customers, pest control professionals prefer terms like 'treatment' or 'control' because complete eradication is not always achievable — prevention of reinfestation is equally important." },
                      { term: "Bait Stations", def: "Protective containers that hold a pesticide bait matrix. Bait stations are placed in pest activity areas and are designed to be accessible to the target pest but tamper-resistant to children, pets, and non-target wildlife." },
                      { term: "Residual Treatment", def: "A pesticide application that remains active (continues to kill pests on contact) for a period of days to weeks after application. Applied to surfaces where pests travel, providing ongoing control after the initial visit." },
                      { term: "Fumigation", def: "A pest control method using toxic gases introduced into a sealed structure to eliminate all stages of the target pest throughout the entire structure. Requires complete evacuation and is most commonly used for drywood termite infestations." },
                      { term: "Integrated Pest Management (IPM)", def: "A science-based approach to pest management that uses a combination of biological, cultural, physical, and chemical methods with an emphasis on prevention and the use of least-risk treatments. The industry gold standard." },
                      { term: "Pest Entry Points", def: "Gaps, cracks, holes, or other openings in a structure through which pests can gain access. Common entry points include gaps around pipes and utilities, cracks in the foundation, damaged door seals, and unscreened vents." },
                      { term: "Exclusion", def: "The process of physically preventing pests from entering a structure by sealing all potential entry points. The most durable, long-term solution to rodent and wildlife pest problems." },
                      { term: "Conducive Conditions", def: "Environmental factors that attract pests or allow them to establish and thrive. Examples include moisture (leaking pipes, poor drainage), food availability (improperly stored food), clutter, and wood-to-soil contact (termite risk)." },
                      { term: "Re-Entry Interval (REI)", def: "The minimum amount of time that must elapse after a pesticide application before people and pets can safely re-enter the treated area. REIs are specified on the pesticide label and must be communicated clearly to customers." },
                      { term: "Colony", def: "A social group of insects that lives together and functions cooperatively. Ants, termites, bees, wasps, and cockroaches live in colonies. Effective treatment must reach the colony — not just the visible individuals — to achieve lasting control." },
                      { term: "Pheromone", def: "A chemical signal produced by insects to communicate with others of their species. Pest control uses synthetic pheromones in traps and monitoring devices to attract target pests." },
                      { term: "Larvicide", def: "A pesticide specifically formulated to kill insect larvae. Used in mosquito control programs to treat standing water and prevent larvae from developing into adult mosquitoes." },
                      { term: "Wood Destroying Organisms (WDO)", def: "Organisms that damage wood in structures, including termites, carpenter ants, carpenter bees, and wood-decay fungi. WDO inspections are commonly required during real estate transactions." },
                      { term: "Pesticide Label", def: "The legal document printed on or attached to a pesticide container that describes how the product must be used. Following the label is required by federal law under FIFRA. It specifies application rates, target pests, approved use sites, safety precautions, and re-entry intervals." },
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
        id: "pest-roles",
        label: "Roles in a Pest Control Business",
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
                      { role: "Pest Control Technician", resp: "Licensed field professional who performs all pest inspections, treatments, and follow-up monitoring. Must hold a valid state pest control license and applicable certifications (including EPA 7A certification for fumigation). They are the technical experts and the primary face of the company to customers." },
                      { role: "Inspector", resp: "In larger companies, dedicated inspectors conduct all property inspections and prepare detailed written reports and treatment proposals. Especially common in the termite control and real estate inspection segments. May also handle commercial account assessments." },
                      { role: "Customer Service Representative (CSR)", resp: "Manages all incoming customer inquiries, provides general information and pricing, schedules appointments, sends confirmations and reminders, handles complaints, and manages customer relationships. The critical link between the customer and the service team." },
                      { role: "Dispatcher / Scheduler", resp: "Manages the daily schedule for all technicians, assigns jobs based on location, expertise, and availability, monitors real-time job progress, and adjusts the schedule to accommodate urgent calls, cancellations, and delays." },
                      { role: "Sales Representative", resp: "Focuses on acquiring new residential and commercial accounts, conducting property assessments, preparing and presenting service proposals, and closing service agreements. Especially important for growing the commercial pest management side of the business." },
                      { role: "Operations Manager", resp: "Oversees all field and office operations including technician scheduling, quality control, customer satisfaction, regulatory compliance, supply inventory, vehicle management, and staff performance." },
                      { role: "Business Owner", resp: "Sets strategic direction, manages company finances, oversees hiring and culture, makes decisions on service offerings and pricing, and drives business growth. In smaller companies, the owner often also performs technical services and customer-facing roles." },
                      { role: "Virtual Assistant (VA)", resp: "Provides remote support for customer service, scheduling, follow-up communications, review management, data entry, and administrative tasks. VAs must be thoroughly familiar with the company's services, pricing, preparation requirements, and key pest control terminology." },
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
        id: "pest-tools",
        label: "Tools & Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Common Pest Control Equipment",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Sprayers", desc: "The most fundamental tool in a technician's arsenal. Types include hand-pump compressed-air sprayers (for interior crack-and-crevice and spot treatments), backpack motorized sprayers (for large outdoor areas and mosquito barrier treatments), and power sprayers mounted on service vehicles (for high-volume exterior perimeter treatments and termite soil applications)." },
                    { name: "Foggers and Misters", desc: "Break liquid pesticide or disinfectant into extremely fine droplets that remain suspended in the air, contacting surfaces and pests throughout a space. ULV mosquito misters are used for large-scale outdoor mosquito control. Thermal foggers use heat to create a visible fog." },
                    { name: "Bait Stations", desc: "Durable, tamper-resistant plastic enclosures that hold rodenticide bait blocks or insect bait matrices. Rodent bait stations are placed along walls, in crawl spaces, and near entry points. Termite monitoring and baiting stations are installed in the soil around the perimeter of a structure." },
                    { name: "Traps", desc: "Snap traps for immediate rodent control; live-catch traps for wildlife management; glue boards for sensitive environments; pheromone traps for monitoring moth and stored-product pest populations; fly light traps (UV light) for capturing flying insects in commercial food facilities." },
                    { name: "Protective Equipment (PPE)", desc: "Required when handling pesticides and performing treatments. Standard PPE includes nitrile or chemical-resistant gloves, safety glasses or goggles, closed-toe footwear, and long-sleeved clothing. Respirators or N95 masks are required when applying pesticide dusts, working in confined spaces, or performing fumigation." },
                    { name: "Inspection Tools", desc: "Flashlights and headlamps for dark crawl spaces and attics; telescoping mirrors for behind appliances; moisture meters to detect elevated moisture in wood; borescope cameras for inaccessible wall areas; termite detection tools including microwave sensors and acoustic emission devices; magnifying glasses and specimen containers for pest identification." },
                  ].map(({ name, desc }) => (
                    <div key={name} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{name}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Equipment Safety Note</p>
                  <p>All pesticide application equipment must be inspected before each use for leaks, blockages, and damage. Technicians should never use damaged equipment or improvised repairs in the field. Equipment maintenance is both a safety and a regulatory compliance requirement.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pest-safety",
        label: "Safety & Regulations",
        icon: ShieldCheck,
        sections: [
          {
            title: "Safe Chemical Handling",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>All pesticide applications must be performed strictly according to the product label, which is a legally binding document under the <strong className="text-foreground">Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA)</strong>.</li>
                  <li>Technicians must read the Safety Data Sheet (SDS) for every product they use and understand the health hazards, first-aid measures, and spill response procedures.</li>
                  <li>Pesticides must never be transferred into unlabeled containers.</li>
                  <li>Technicians must always wear the PPE specified on the product label for the application being performed.</li>
                  <li>Skin or eye contact with pesticides must be treated immediately per the SDS first-aid instructions.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Environmental Protection",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pesticides must never be applied near water sources, drainage ditches, or in ways that could cause runoff into storm drains or natural water bodies.</li>
                  <li>Pollinators such as bees must be protected. Treatments should not be applied to flowering plants while pollinators are active. Outdoor treatments should ideally be performed in early morning or evening.</li>
                  <li>Non-target animals, including birds and beneficial insects, must be considered when selecting treatment methods and application sites.</li>
                  <li>Proper disposal of empty pesticide containers must comply with label instructions and local regulations — never in regular household trash or recycling.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Proper Storage of Pesticides",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>All pesticides must be stored in their original, labeled containers in a locked, ventilated storage area away from food, water, and other chemicals.</li>
                  <li>Pesticides must be stored away from heat sources and out of direct sunlight to maintain efficacy and prevent container degradation.</li>
                  <li>Technicians' service vehicles are considered pesticide storage locations and are subject to inspection by state regulatory agencies.</li>
                  <li>An up-to-date inventory of all pesticides stored in vehicles and at the company facility must be maintained.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Licensing and Certification Requirements",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>In every U.S. state, pest control technicians must hold a valid state-issued pesticide applicator license. Requirements typically include passing a written examination, completing minimum training hours, and maintaining continuing education for license renewal.</li>
                  <li>Certain services require additional certifications. Fumigation requires a separate fumigation license. WDO inspections may require a separate certification for real estate reporting.</li>
                  <li>Companies must maintain liability insurance and, in most states, a company-level pesticide business license in addition to individual technician licenses.</li>
                  <li>Pesticide use records must be maintained for all commercial applications for a minimum of two years and must be available for inspection by state regulatory authorities.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Protecting Customers, Pets, and Property",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customers must be clearly informed of re-entry intervals, ventilation requirements, and any items that should be removed or covered before treatment.</li>
                  <li>Pets must be removed from treatment areas for the duration specified on the product label. Fish tanks must be covered and their filtration systems turned off during any aerosol or fumigant applications.</li>
                  <li>Technicians must take care to protect customers' personal belongings, plants, and surfaces from pesticide contact where not intended.</li>
                  <li>A written record of all products applied, application areas, rates, and the customer's acknowledgment of safety instructions must be maintained for every service visit.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "pest-concerns",
        label: "Common Customer Concerns",
        icon: AlertCircle,
        sections: [
          {
            title: "Seeing Insects or Rodents Inside the Home",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>The most immediate trigger for a customer call is the visual sighting of a pest inside the home. Customers often describe the pest in general terms ('a big brown bug,' 'a tiny ant,' 'something ran across the kitchen floor').</p>
                <p className="text-sm italic">CSRs should ask: size, color, number of legs, where it was seen, and time of day. This helps determine whether an inspection is needed before treatment or whether a standard service can be booked directly.</p>
              </div>
            )
          },
          {
            title: "Pest Droppings or Nests",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Customers may discover pest droppings, nesting materials, chewed food packaging, or structural damage without seeing a live pest. Rodent droppings are among the most alarming discoveries.</p>
                <p className="text-sm italic">CSRs should ask customers to describe the size and shape of the droppings (which helps narrow down the species) and where they were found. Wasp or hornet nests on the property exterior are a common urgent request, especially in late summer and fall.</p>
              </div>
            )
          },
          {
            title: "Damage Caused by Termites or Rodents",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Termite damage discovered during a renovation is a frequent urgent call trigger. Customers may describe soft, hollow-sounding wood, mud tubes along the foundation, or discarded wings from termite swarmers. Rodent damage — gnawed wires, shredded insulation, holes in walls — is typically discovered during cleaning or organization efforts.</p>
                <p className="text-sm italic">Both situations require a prompt inspection response.</p>
              </div>
            )
          },
          {
            title: "Bites from Bed Bugs or Fleas",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Waking up with unexplained bite marks is an extremely distressing experience. Customers experiencing possible bed bug or flea bites should be treated with particular empathy and urgency.</p>
                <p className="text-sm italic">CSRs should ask: the bite pattern (bed bug bites often appear in a line or cluster), whether pets are present (suggests fleas), whether any travel or second-hand furniture was involved recently (suggests bed bugs), and which rooms are most affected. These calls should be prioritized for rapid scheduling.</p>
              </div>
            )
          },
          {
            title: "Mosquito Infestations Around Properties",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Customers may call about excessive mosquito pressure in their yard, particularly in spring and summer.</p>
                <p className="text-sm italic">Ask about standing water sources on the property (birdbaths, clogged gutters, flower pot trays, kiddie pools) that may be serving as mosquito breeding sites. Customers with upcoming outdoor events frequently seek one-time mosquito treatments.</p>
              </div>
            )
          },
          {
            title: "Stinging Insects (Wasps, Hornets, Bees)",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Stinging insect calls are often urgent because the nests are discovered when someone is stung. Accurate identification matters: <strong className="text-foreground">honeybee swarms or established hives are typically referred to a beekeeper</strong> rather than exterminated, whereas yellow jacket, paper wasp, and hornet nests are treated by the pest control company.</p>
                <p className="text-sm italic">CSRs should ask about the location of the nest, its approximate size, and whether anyone has been stung to assess urgency.</p>
              </div>
            )
          },
          {
            title: "Cockroach Sightings in Kitchen or Bathroom",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Cockroach sightings are extremely common, especially in apartment buildings and restaurant environments.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  A single cockroach seen during the daytime is often an indicator of a significant infestation — cockroaches are nocturnal and only emerge in daylight when the population is large enough to compete for resources.
                </div>
                <p className="text-sm">Customers should be informed that a thorough inspection is required before treatment and that preparation steps will be required for effective treatment.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "pest-importance",
        label: "Why Pest Control Matters",
        icon: Heart,
        sections: [
          {
            title: "The Importance of Professional Pest Control",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Professional pest control services are a fundamental investment in health, safety, property, and quality of life.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Protecting Health and Safety", body: "Rodents contaminate food with urine and droppings harboring salmonella, listeria, and hantavirus. Cockroaches spread more than 33 types of bacteria and trigger asthma attacks in children. Mosquitoes are responsible for more human deaths than any other animal on the planet. For families with young children, elderly residents, or immunocompromised individuals, professional pest management is not optional — it is essential preventive healthcare." },
                    { title: "Preventing Property Damage", body: "Termites cause approximately $5 billion in property damage annually in the U.S. Rodents are responsible for an estimated 20 to 25 percent of all undetermined house and structure fires through their habit of gnawing on electrical wiring. Carpenter ants excavate wood for nesting, causing structural weakening that results in very costly repairs. Professional pest control provides a financial safeguard that no amount of DIY treatment can replicate." },
                    { title: "Maintaining Sanitation Standards", body: "For commercial clients, maintaining a pest-free environment is a regulatory and legal requirement. Food service establishments, healthcare facilities, schools, and childcare centers are subject to regular health inspections that can result in fines, temporary closure, or loss of operating licenses if pest activity is detected. A proactive professional pest management program with detailed service documentation is the most effective way to maintain sanitation compliance." },
                    { title: "Long-Term Pest Prevention", body: "The most significant advantage of professional pest control over DIY approaches is the long-term, systemic nature of professional programs. A homeowner using a store-bought spray may kill the visible pests but will leave the colony, the entry points, and the conducive conditions intact — guaranteeing a rapid return. A professional program addresses all three elements: eliminating the current population, correcting the conditions that attracted pests, and creating ongoing barriers that prevent future colonization." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Final Note for New Team Members</p>
                  <p>Every role in this company — from the technician in the field to the virtual assistant on the phone — plays a critical part in protecting our customers' health, homes, and businesses. Pest control is not just a service industry; it is a public health profession. Take pride in the expertise behind every service call, communicate with care and confidence, and know that the work this team does makes a genuine difference in people's lives every single day. Welcome to the team!</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
