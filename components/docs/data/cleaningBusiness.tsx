import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const cleaningBusinessSections: DocGroup[] = [
  {
    title: "CLEANING BUSINESS BASICS",
    items: [
      {
        id: "cleaning-introduction",
        label: "Introduction to the Cleaning Industry",
        icon: Star,
        sections: [
          {
            title: "What Is a Cleaning Business?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>A cleaning business is a professional service company that provides systematic, thorough cleaning of residential and commercial spaces for a fee. Cleaning businesses employ trained staff equipped with the right tools, chemicals, and knowledge to deliver consistent, high-quality results that go far beyond everyday household cleaning.</p>
                <p>Cleaning companies range in size from sole-proprietor operations to large regional or national franchises. Regardless of size, all cleaning businesses share the same core mission: to provide clients with clean, healthy, and well-maintained spaces so they can focus on everything else in their lives and work.</p>
                <div className="p-4 bg-muted/50 border rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Key Insight</p>
                  <p className="text-sm">The cleaning industry is driven by trust. Clients invite cleaners into their homes and businesses, often without supervision. Building a reputation for reliability, honesty, and consistent quality is the most important competitive advantage any cleaning company can have.</p>
                </div>
              </div>
            )
          },
          {
            title: "Why Professional Cleaning Services Are Important",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Professional cleaning services play a critical role in both residential and commercial environments. Clean spaces are not simply about appearance — they directly impact health, productivity, and the long-term value of a property.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Health protection:</strong> Regular professional cleaning removes bacteria, allergens, mold spores, and viruses from surfaces and the air, reducing the risk of illness.</li>
                  <li><strong className="text-foreground">Productivity:</strong> Studies consistently show that clean, organized workplaces improve employee focus, morale, and overall productivity.</li>
                  <li><strong className="text-foreground">First impressions:</strong> For businesses, a clean facility conveys professionalism and builds customer confidence and trust.</li>
                  <li><strong className="text-foreground">Property preservation:</strong> Routine cleaning prevents the buildup of grime, mold, and wear that can cause costly long-term damage to flooring, surfaces, and fixtures.</li>
                  <li><strong className="text-foreground">Compliance:</strong> Many industries — including healthcare, food service, childcare, and hospitality — are legally required to maintain specific cleanliness standards.</li>
                  <li><strong className="text-foreground">Time savings:</strong> Outsourcing cleaning frees clients to spend their time on more valuable personal and professional priorities.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Overview of the Cleaning Service Industry",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The cleaning services industry is one of the largest and most resilient sectors of the broader service economy. Key characteristics include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The industry serves virtually every type of property, including homes, offices, retail spaces, schools, hospitals, restaurants, and industrial facilities.</li>
                  <li>Demand is consistent year-round, with seasonal peaks for move-out cleaning, holiday preparation, and post-construction cleaning.</li>
                  <li>Recurring service contracts — weekly, biweekly, or monthly cleanings — provide stable, predictable revenue.</li>
                  <li>Growing consumer awareness around hygiene and indoor air quality is driving strong demand for professional and eco-friendly cleaning services.</li>
                  <li>Technology is transforming the industry through online booking systems, scheduling software, GPS tracking, and digital payment platforms.</li>
                </ul>
              </div>
            )
          }
        ]
      },
      {
        id: "cleaning-types",
        label: "Types of Cleaning Services",
        icon: List,
        sections: [
          {
            title: "Residential Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Routine cleaning of private homes, apartments, and condominiums. Typically a recurring service booked weekly, biweekly, or monthly. Tasks include vacuuming, mopping, dusting, bathroom cleaning, kitchen wipe-downs, and trash removal. Residential clients value reliability, trustworthiness, and attention to detail above all else.</p>
              </div>
            )
          },
          {
            title: "Commercial Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Cleaning services provided to businesses, organizations, and institutions — offices, retail stores, medical clinics, schools, gyms, and more. Often performed after business hours or on weekends to avoid disrupting operations. Jobs tend to be larger in scale and may involve specialized equipment. Commercial contracts are typically the most profitable and stable revenue source for cleaning companies.</p>
              </div>
            )
          },
          {
            title: "Deep Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A comprehensive, top-to-bottom cleaning that goes far beyond routine maintenance. It addresses areas typically skipped during regular visits — inside appliances, behind furniture, baseboards, grout lines, light fixtures, and window tracks. Often performed as a one-time service for new clients before a recurring schedule begins, or periodically (quarterly or semi-annually) for existing clients. Deep cleans take significantly more time and cost more than standard visits.</p>
              </div>
            )
          },
          {
            title: "Move-In / Move-Out Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Performed when a tenant or homeowner is vacating or occupying a property. The goal is to leave the space in pristine condition — spotless for incoming occupants or to meet the landlord's expectations for the return of a security deposit. These cleans include inside cabinets, drawers, appliances, closets, walls, baseboards, and windows. One of the most requested one-time service types.</p>
              </div>
            )
          },
          {
            title: "Post-Construction Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A specialized service performed after construction, renovation, or remodeling work. Spaces are left covered in fine dust, paint overspray, adhesive residue, debris, and construction materials. Requires knowledge of how to safely remove these materials from a variety of surfaces without causing damage. Typically performed in multiple phases using HEPA-filter vacuums, microfiber systems, and specialized cleaning agents.</p>
              </div>
            )
          },
          {
            title: "Office Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>A subcategory of commercial cleaning focused specifically on workplace environments. Regular tasks include vacuuming or mopping floors, emptying trash bins, wiping down desks and workstations, cleaning kitchen and break room areas, sanitizing restrooms, and cleaning glass surfaces and entryways. Maintaining a clean office environment is important for employee health, visitor impressions, and professional culture.</p>
              </div>
            )
          },
          {
            title: "Airbnb / Short-Term Rental Cleaning",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Also called <strong className="text-foreground">turnover cleaning</strong> — performed between guest stays at vacation rentals, Airbnb properties, and similar accommodations. Must be completed quickly within a tight window between checkout and the next check-in, and must meet hotel-like standards.</p>
                <p className="text-sm">Linens are changed, bathrooms thoroughly sanitized, kitchens reset, and the entire property inspected and restocked. One of the fastest-growing segments in the residential cleaning market.</p>
              </div>
            )
          },
          {
            title: "Specialized Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Many cleaning companies expand their offerings to include specialized services such as window cleaning (interior and exterior), carpet cleaning, upholstery cleaning, pressure washing, floor stripping and waxing, tile and grout cleaning, and chandelier cleaning. Specialized services require additional training, equipment, and sometimes certification, but they command premium pricing and help companies differentiate themselves from competitors.</p>
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
        id: "cleaning-core-services",
        label: "Core Service Tasks",
        icon: CheckCircle,
        sections: [
          {
            title: "Dusting Surfaces",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Removing dust, debris, and allergens from horizontal and vertical surfaces including furniture tops, shelves, countertops, window sills, blinds, ceiling fans, baseboards, light fixtures, and wall art. Professionals use microfiber cloths and extendable dusters rather than feather dusters, which simply redistribute dust back into the air.</p>
                <p className="text-sm italic">Always dust before vacuuming or mopping to capture any particles that fall to the floor.</p>
              </div>
            )
          },
          {
            title: "Vacuuming Carpets and Rugs",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Vacuuming removes loose dirt, dust, pet hair, and debris from carpet fibers and area rugs. Professional cleaners use commercial-grade vacuums with strong suction and HEPA filtration. All carpeted areas are vacuumed including edges and corners using attachment tools. High-traffic areas may receive extra passes. Vacuuming is also performed on upholstered furniture during a thorough cleaning visit.</p>
              </div>
            )
          },
          {
            title: "Mopping Floors",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Hard flooring such as tile, hardwood, laminate, and vinyl requires mopping after sweeping or vacuuming. Professionals use the correct cleaning solution for each floor type — improper products can damage hardwood, dull tile, or leave streaks on vinyl. Microfiber mop heads are preferred because they are highly effective at trapping dirt and bacteria and can be laundered and reused.</p>
              </div>
            )
          },
          {
            title: "Cleaning Kitchens and Appliances",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>The kitchen is often the most labor-intensive room. Standard tasks include wiping down countertops, cabinet fronts, backsplash, and stovetop; cleaning the exterior of major appliances; cleaning the interior of the microwave; scrubbing the sink and fixtures; and degreasing surfaces around the cooktop.</p>
                <p className="text-sm italic">Deep cleaning tasks include cleaning inside the oven, refrigerator, and dishwasher.</p>
              </div>
            )
          },
          {
            title: "Bathroom Sanitation",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Bathroom cleaning is one of the most health-critical tasks. Professional tasks include scrubbing and disinfecting the toilet (base, seat, lid, and under the rim), cleaning and disinfecting the sink and fixtures, scrubbing the shower or tub, cleaning mirrors, wiping down surfaces, mopping the floor, emptying the trash, and restocking supplies. Disinfectants with proven efficacy against bacteria and viruses must be used on all high-touch surfaces.</p>
              </div>
            )
          },
          {
            title: "Trash Removal",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Emptying trash bins throughout the property is a standard task included in virtually every cleaning service. Cleaners remove trash from all bins, tie off and remove bags, reline bins with fresh bags, and transport all waste to the client's designated outdoor disposal area. In commercial settings, proper waste segregation and recycling may also be required.</p>
              </div>
            )
          },
          {
            title: "Disinfecting High-Touch Surfaces",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>High-touch surfaces — door handles, light switches, remote controls, countertop edges, faucet handles, stair railings, elevator buttons, and keyboards — are disinfected with EPA-approved disinfectants to kill pathogens that cause illness. Especially important in commercial environments, childcare settings, and healthcare facilities.</p>
              </div>
            )
          },
          {
            title: "Window and Glass Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Interior glass surfaces including windows, sliding glass doors, mirrors, and glass furniture tops are cleaned using streak-free glass cleaner and lint-free microfiber cloths or squeegees. Clean windows and mirrors significantly improve the appearance and brightness of a space. Exterior window cleaning is typically a separate specialized service requiring ladders or water-fed pole systems.</p>
              </div>
            )
          }
        ]
      },
      {
        id: "cleaning-operations",
        label: "How the Business Operates",
        icon: Info,
        sections: [
          {
            title: "The Typical Service Workflow",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ol className="space-y-4">
                  {[
                    { step: "1. Customer Inquiry or Booking", desc: "A potential customer contacts the company by phone, email, website form, text, or online booking platform. They describe the type of service needed, the size of the space, their location, and any special requirements. This is the moment to make a great first impression by being responsive, friendly, and knowledgeable." },
                    { step: "2. Service Consultation and Quotation", desc: "The CSR or VA provides a price estimate based on the size of the home or office, the type of service (standard, deep, move-out), the frequency (one-time vs. recurring), and any add-ons. For large or complex jobs, a technician may conduct an in-person or virtual walkthrough before a final quote is issued." },
                    { step: "3. Scheduling the Appointment", desc: "Once the customer agrees to proceed, an appointment is scheduled at a mutually convenient date and time. A confirmation is sent via text and/or email, along with any pre-service instructions (such as picking up clutter or ensuring access to the property). An automated reminder is sent the day before." },
                    { step: "4. Assigning Cleaners or Teams", desc: "The dispatcher or operations manager assigns the job to the appropriate cleaner or cleaning team based on their availability, proximity to the job site, experience level, and familiarity with the client." },
                    { step: "5. Preparing Supplies and Equipment", desc: "Before heading to the job, the cleaner ensures they have all required supplies and equipment. Cleaning kits are stocked, chemical solutions are properly diluted, microfiber cloths are clean and sorted by color code, and any specialized equipment is loaded." },
                    { step: "6. Performing the Cleaning Service", desc: "The cleaner arrives on time, introduces themselves to the client if present, and confirms the scope of work. They follow the cleaning checklist systematically, working room by room and from top to bottom (dusting before vacuuming, etc.)." },
                    { step: "7. Quality Inspection", desc: "Upon completing the cleaning, the cleaner or team leader conducts a final walkthrough of the entire space to verify that all checklist items have been completed to the required standard. Any missed areas are addressed before the team leaves the property." },
                    { step: "8. Payment Processing", desc: "Payment is collected on the day of service or billed after the job, depending on the company's policy. Payment methods typically include cash, check, credit card, or online payment platforms. For recurring clients, autopay or invoicing systems are common. An electronic receipt or invoice is issued." },
                    { step: "9. Customer Feedback and Follow-Up", desc: "After the service, a follow-up message is sent to thank the customer and confirm their satisfaction. Customers are invited to share feedback or raise any concerns. Positive experiences are an opportunity to request online reviews, which are critical for reputation and new customer acquisition." },
                  ].map(({ step, desc }) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-semibold text-foreground min-w-fit">{step}:</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ol>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">CSR & VA Pro Tip</p>
                  <p>Always confirm the exact address, access method (key, lockbox, doorbell code), the number of rooms, and whether pets are present when taking a new booking. Missing this information causes delays, miscommunication, and negative customer experiences.</p>
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
        id: "cleaning-terminology",
        label: "Cleaning Industry Terminology",
        icon: BookOpen,
        sections: [
          {
            title: "Common Cleaning Terms Glossary",
            content: (
              <div className="text-muted-foreground">
                <p className="mb-4 text-sm">Knowing these terms will help you communicate confidently with customers and colleagues.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold w-44">Term</TableHead>
                      <TableHead className="font-bold">Definition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { term: "Deep Cleaning", def: "A comprehensive, top-to-bottom cleaning that addresses areas typically skipped in routine maintenance cleans, such as inside appliances, behind furniture, grout lines, and baseboards. Often performed as an initial service for new clients." },
                      { term: "Sanitizing", def: "The process of reducing the number of germs and bacteria on a surface to a safe level as defined by public health standards. Sanitizing lowers but does not necessarily eliminate all microorganisms." },
                      { term: "Disinfecting", def: "A more intensive process than sanitizing. Uses EPA-registered chemical agents to kill or inactivate nearly all bacteria, viruses, and fungi on a surface. Required in healthcare, food service, and high-risk environments." },
                      { term: "Cross-Contamination", def: "The unintentional transfer of bacteria, allergens, or dirt from one surface to another. Prevented by using color-coded microfiber cloths, separate mop heads for different areas, and single-use materials in critical environments." },
                      { term: "Eco-Friendly Cleaning", def: "The use of cleaning products and methods that minimize environmental impact. Eco-friendly products are typically biodegradable, free of harsh chemicals, and safe for children and pets." },
                      { term: "High-Touch Surfaces", def: "Surfaces frequently contacted by multiple people throughout the day, such as door handles, light switches, faucets, countertops, and keyboards. These surfaces harbor the highest concentrations of pathogens and must be disinfected regularly." },
                      { term: "Cleaning Checklist", def: "A standardized list of tasks to be completed during a cleaning service. Checklists ensure consistency across different cleaners and visits, set clear customer expectations, and serve as a quality control tool." },
                      { term: "Recurring Service", def: "A regularly scheduled cleaning appointment — typically weekly, biweekly, or monthly. Recurring clients represent the most valuable and stable segment of a cleaning company's revenue." },
                      { term: "Turnover Cleaning", def: "A fast, thorough cleaning performed between guest stays in a short-term rental property. Requires hotel-level standards with a quick turnaround. Common in Airbnb and vacation rental management." },
                      { term: "Color-Coded System", def: "A professional best practice where different colored microfiber cloths are assigned to different areas (e.g., red for toilets, blue for sinks, yellow for general surfaces, green for kitchens). Prevents cross-contamination between rooms and surfaces." },
                      { term: "Dwell Time", def: "The amount of time a cleaning or disinfecting product must remain on a surface to be effective. Many disinfectants require 3 to 10 minutes of contact time to kill pathogens. Wiping off too early reduces efficacy." },
                      { term: "HEPA Filter", def: "High-Efficiency Particulate Air filter. HEPA-equipped vacuums trap 99.97% of particles as small as 0.3 microns, including dust mites, pollen, and mold spores. Recommended for clients with allergies or respiratory conditions." },
                      { term: "Post-Construction Cleaning", def: "Specialized cleaning performed after construction, renovation, or remodeling work. Involves removing fine construction dust, adhesive residue, paint overspray, and debris from all surfaces." },
                      { term: "Green Cleaning", def: "A comprehensive approach to cleaning that considers the environmental, health, and safety impact of all products and procedures used. Includes product selection, water conservation, and waste reduction." },
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
        id: "cleaning-roles",
        label: "Roles in a Cleaning Business",
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
                      { role: "Cleaning Technician / Cleaner", resp: "The primary field worker who performs all cleaning tasks at client properties. Cleaners follow service checklists, use equipment and chemicals correctly, handle client belongings with care, and represent the company's brand through their professionalism and quality of work." },
                      { role: "Team Leader / Supervisor", resp: "An experienced cleaner who leads a crew of two or more technicians on larger jobs. Responsible for delegating tasks, maintaining quality standards, completing the final inspection before leaving a property, and communicating with the office about job progress or issues." },
                      { role: "Customer Service Representative (CSR)", resp: "Handles all inbound customer inquiries, provides quotes, schedules appointments, answers questions about services, resolves complaints, and manages customer relationships. The CSR is the voice of the company and plays a vital role in client retention and satisfaction." },
                      { role: "Dispatcher / Scheduler", resp: "Manages the day-to-day schedule for all cleaning teams. Assigns jobs based on cleaner availability, location, and skill level. Monitors job progress throughout the day, handles last-minute changes or cancellations, and communicates schedule updates to cleaners and clients." },
                      { role: "Sales / Account Manager", resp: "Focuses on acquiring new commercial clients, managing existing commercial accounts, conducting facility walkthroughs, preparing proposals, and negotiating service contracts. Key to growing the commercial side of the business." },
                      { role: "Operations Manager", resp: "Oversees all day-to-day business operations including staff management, quality control, supply inventory, vehicle maintenance, compliance with safety standards, and client satisfaction monitoring." },
                      { role: "Business Owner", resp: "Sets the strategic direction of the company, manages finances, oversees hiring and culture, makes pricing and service decisions, and drives business growth. In smaller operations, the owner often also performs cleaning work or customer service tasks." },
                      { role: "Virtual Assistant (VA)", resp: "Provides remote administrative and customer service support. May handle online bookings, follow-up messages, review management, scheduling assistance, email responses, and social media. Must have a solid understanding of the company's services, pricing, and processes." },
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
        id: "cleaning-tools",
        label: "Tools & Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Common Cleaning Tools & Equipment",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm">Professional cleaners use a range of tools specifically selected for efficiency, effectiveness, and safety.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Vacuum Cleaners", desc: "Commercial-grade vacuums are significantly more powerful than household models. Upright vacuums for large carpeted areas; canister vacuums for stairs and upholstery; backpack vacuums for large commercial settings. HEPA-filtered vacuums are required in homes with allergy sufferers or healthcare environments." },
                    { name: "Mops and Buckets", desc: "Flat microfiber mops are ideal for most hard floors — highly absorbent and hygienic when laundered between uses. Spin mop systems with separate clean and dirty water chambers help prevent re-depositing dirty water. Color-coded buckets may be used in commercial and healthcare settings." },
                    { name: "Microfiber Cloths", desc: "The gold standard in professional cleaning. Microfiber cloths physically trap and hold dust, bacteria, and dirt rather than pushing it around. A professional kit includes multiple cloths in a color-coded system (red for toilets, blue for sinks, yellow for general use, green for kitchens) to prevent cross-contamination." },
                    { name: "Scrub Brushes", desc: "Used for agitating stubborn soils on hard surfaces including grout lines, toilet bowls, sinks, stovetops, and tile. Professional kits include a variety of brush sizes and stiffness levels. Dedicated brushes are used only for specific areas and are replaced regularly." },
                    { name: "Disinfectants & Cleaning Chemicals", desc: "Professional solutions formulated for specific surfaces and soil types: all-purpose cleaners, bathroom and toilet bowl cleaners, glass cleaner, kitchen degreasers, EPA-registered disinfectants, and floor cleaning solutions. All chemicals must be stored, diluted, and used according to their Safety Data Sheets (SDS)." },
                    { name: "Floor Polishers and Buffers", desc: "Used in commercial settings to maintain the shine on hard floors such as VCT tile, marble, and hardwood. Also used to apply and buff floor wax or sealant. These machines require training to operate safely and are not typically used in residential cleaning." },
                    { name: "Pressure Washers", desc: "Use high-pressure water to remove dirt, mold, mildew, and grime from exterior surfaces such as driveways, patios, walkways, and building exteriors. A specialized service requiring proper training to avoid surface damage." },
                    { name: "Trash Bags and Liners", desc: "Cleaners carry a range of trash bag sizes to reline all bins after emptying. Heavy-duty bags for kitchen waste; standard bags for bathroom and office bins. Color-coded bags may be used in commercial settings to separate general waste, recycling, and hazardous materials." },
                  ].map(({ name, desc }) => (
                    <div key={name} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{name}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Equipment Care Note</p>
                  <p>Well-maintained equipment is essential for professional results and workplace safety. Cleaners should inspect, clean, and report any damaged equipment before and after each job. Malfunctioning equipment should be removed from service immediately and reported to the operations team.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "cleaning-safety",
        label: "Safety & Best Practices",
        icon: ShieldCheck,
        sections: [
          {
            title: "Proper Use of Cleaning Chemicals",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Always read and follow the manufacturer's instructions and Safety Data Sheets (SDS) for every product.</li>
                  <li>Dilute concentrated chemicals to the correct ratio — stronger is not always better and can damage surfaces or cause harm.</li>
                  <li>Never mix cleaning chemicals. Mixing bleach with ammonia produces toxic chloramine gas. Mixing bleach with acidic cleaners produces chlorine gas.</li>
                  <li>Label all spray bottles clearly with the product name, dilution ratio, and hazard warnings.</li>
                  <li>Use chemicals in well-ventilated spaces and inform clients if strong-smelling products are being used.</li>
                  <li>Store chemicals safely — away from direct sunlight, heat sources, and out of reach of children and pets.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Preventing Cross-Contamination",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use a color-coded microfiber cloth system and never use the same cloth for different areas (e.g., never use a bathroom cloth in the kitchen).</li>
                  <li>Change gloves between rooms, especially after cleaning bathrooms before moving to kitchen or food preparation areas.</li>
                  <li>Use separate mop heads or thoroughly sanitize mop heads between different floor areas.</li>
                  <li>Never rinse dirty cloths or tools in a sink that is also used for food preparation.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Use of PPE (Personal Protective Equipment)",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Always wear nitrile or rubber gloves when handling cleaning chemicals, disinfectants, and when cleaning bathrooms and kitchens.</li>
                  <li>Wear non-slip footwear to prevent slipping on wet floors.</li>
                  <li>Use eye protection when applying spray chemicals to avoid splashback.</li>
                  <li>Consider wearing a face mask when cleaning heavily dusty environments or when using products with strong fumes.</li>
                </ul>
              </div>
            )
          },
          {
            title: "Safe Equipment Handling & Waste Disposal",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Inspect vacuum cords, mop handles, and other equipment for damage before each use.</li>
                  <li>Never run electrical cords under doors or across high-traffic walkways where they create a trip hazard.</li>
                  <li>When using ladders for dusting ceiling fans or high shelving, always ensure the ladder is on a stable, level surface.</li>
                  <li>Report any broken or malfunctioning equipment to the supervisor immediately.</li>
                  <li>Dispose of trash according to the client's and local municipality's waste separation guidelines.</li>
                  <li>Wear gloves when handling trash to protect against sharp objects, broken glass, and biohazardous materials.</li>
                  <li>Report any hazardous waste findings (needles, chemical containers, biohazards) to a supervisor rather than attempting to handle them without proper training and equipment.</li>
                </ul>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <strong>Safety Reminder:</strong> When in doubt about a chemical, a surface material, or an unexpected situation in a client's home, stop and ask your supervisor. It is always better to pause and confirm than to cause damage, injury, or a complaint.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "cleaning-problems",
        label: "Common Customer Problems",
        icon: AlertCircle,
        sections: [
          {
            title: "Dirty Kitchens or Bathrooms",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Kitchens and bathrooms are the two most frequently cited problem areas when clients call for cleaning services. Grease buildup on stovetops and range hoods, mineral deposits in sinks and toilet bowls, soap scum in showers, and grime on tile are among the most common complaints.</p>
                <p className="text-sm italic">CSRs should ask: How long has it been since the last professional clean? This affects the time, effort, and therefore the pricing.</p>
              </div>
            )
          },
          {
            title: "Dust Buildup",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Clients often contact cleaning services because of excessive dust accumulation on furniture, blinds, ceiling fans, and electronics. Dust buildup is especially problematic for allergy and asthma sufferers. A deep cleaning followed by a regular recurring service is the most effective long-term solution to dust management.</p>
              </div>
            )
          },
          {
            title: "Pet Hair and Odors",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Homes with cats, dogs, and other pets require additional attention to remove pet hair from furniture, carpets, and hard-to-reach corners, as well as to neutralize pet odors. Pet hair clings stubbornly to fabrics and upholstery. Specialized enzyme-based deodorizers may be required for lingering odors.</p>
                <p className="text-sm italic">CSRs should always ask about pets during the booking process so the right tools and products are brought to the job.</p>
              </div>
            )
          },
          {
            title: "Stains on Surfaces",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Coffee rings, food stains, scuff marks, water stains, and hard water deposits are commonly reported by clients. It is important for CSRs and cleaners to set realistic expectations — some stains (particularly those left untreated for a long time) may not be fully removable with standard cleaning. Persistent stains on carpet, grout, or marble may require specialized services.</p>
              </div>
            )
          },
          {
            title: "Cluttered Spaces",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Clutter is one of the most common challenges cleaners face. Professional cleaning does not typically include tidying or organizing — cleaners are trained to clean surfaces, not to sort personal belongings.</p>
                <div className="p-3 bg-muted/50 border rounded-lg text-sm">
                  CSRs should advise clients to declutter before the cleaning visit to ensure cleaners can access all surfaces. If organization services are offered, they should be quoted separately.
                </div>
              </div>
            )
          },
          {
            title: "Preparing Homes for Guests or Tenants",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Clients frequently book cleaning services before hosting guests, family visits, holiday gatherings, open houses, or before new tenants move in. These bookings often require a higher level of cleaning than a standard maintenance visit and may be booked on short notice. Having a clearly defined premium or deep cleaning package that can be booked quickly is essential for capturing this high-value segment.</p>
              </div>
            )
          },
          {
            title: "Post-Party or Post-Event Cleaning",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>After parties, gatherings, or events, clients may need prompt cleaning of spills, trash, dishes, and general disorder. These jobs can vary widely in scope and condition and are typically charged as deep cleans or by the hour. Response time and flexibility are particularly valued by clients booking post-event cleaning.</p>
              </div>
            )
          },
          {
            title: "Water Damage or Mold",
            content: (
              <div className="space-y-3 text-muted-foreground">
                <p>Clients may discover water damage, mold growth, or mildew in bathrooms, basements, or other areas. While standard cleaning companies can address surface mold and mildew, significant water damage or mold infestations may fall outside the scope of routine cleaning and may require a specialist.</p>
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  CSRs should clearly communicate the boundaries of what the company can and cannot address before the appointment is booked.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "cleaning-importance",
        label: "Why Cleaning Services Matter",
        icon: Heart,
        sections: [
          {
            title: "The Importance of Professional Cleaning Services",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Professional cleaning services deliver value that goes far beyond a tidy appearance.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Health and Sanitation", body: "High-touch surfaces harbor thousands of bacteria and viruses. Professional cleaners use EPA-registered disinfectants applied with proper technique and dwell time to kill harmful microorganisms that household cleaners cannot address. For commercial clients in regulated industries — food service, healthcare, childcare, and hospitality — professional cleaning is often legally mandated." },
                    { title: "Improved Indoor Air Quality", body: "Indoor air can be 2–5× more polluted than outdoor air. Dust, mold spores, pet dander, pollen, and VOCs accumulate in carpet fibers and on soft furnishings. Professional cleaning using HEPA-filtered vacuums, microfiber systems, and low-VOC products significantly reduces airborne pollutants — especially important for children, the elderly, and those with respiratory conditions." },
                    { title: "Time-Saving for Clients", body: "A typical whole-home cleaning takes an individual 3 to 8 hours to complete to a professional standard. By outsourcing to professionals, clients reclaim that time for their careers, families, and personal interests. For business owners, outsourcing cleaning is nearly always more cost-effective than employing in-house janitorial staff when hiring, training, equipment, and supply costs are factored in." },
                    { title: "Maintaining Property Value", body: "A property's value and longevity are directly tied to how well it is maintained. Grime, mold, hard water deposits, and neglected grout cause gradual, cumulative damage to flooring, fixtures, and structural elements. Regular professional cleaning prevents this deterioration. For rental properties, a clean and well-presented space attracts quality tenants and supports higher rental rates." },
                    { title: "Creating a Comfortable Environment", body: "Research consistently links clean environments to reduced stress and anxiety, improved focus and cognitive performance, better sleep quality, and a greater sense of pride and well-being. For businesses, clean, welcoming facilities create positive first impressions, communicate professionalism and attention to detail, and contribute to a positive company culture." },
                  ].map(({ title, body }) => (
                    <div key={title} className="p-4 border rounded-lg bg-primary/5">
                      <p className="font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-muted/50 border rounded-lg text-sm">
                  <p className="font-semibold text-foreground mb-1">Final Note for New Team Members</p>
                  <p>Every person on this team — whether you answer phones, manage schedules, or clean homes and offices — plays a direct role in delivering value to our clients. Take pride in the work, communicate with care, and remember that what might seem like a small cleaning job can make an enormous difference in a client's day, health, and quality of life. Welcome to the team!</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
