import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const handymanSections: DocGroup[] = [
  {
    title: "HANDYMAN BASICS",
    items: [
      {
        id: "handyman-intro",
        label: "Introduction to Handyman Services",
        icon: Wrench,
        sections: [
          {
            title: "What Is a Handyman Business?",
            content: (
              <div className="space-y-4">
                <p>A handyman or general repair business provides a broad range of small-to-medium maintenance, repair, and installation tasks for residential homes and commercial properties. Unlike specialized contractors, a handyman business is defined by its versatility — the ability to address the wide variety of everyday repair needs that properties generate continuously.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Industry Insight</h4>
                  <p className="text-blue-700 text-sm">The handyman business is relationship-driven. Customers who have a positive experience become long-term clients who call back for every maintenance need. Showing up on time, completing work correctly the first time, communicating clearly, and leaving the job site clean is the most reliable growth strategy.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Why Handyman Services Matter",
            content: (
              <div className="space-y-4">
                <p>Every building generates a continuous stream of maintenance needs — loose handles, damaged drywall, sticking doors, worn fixtures, failing caulk. Left unaddressed, small issues compound into larger, more expensive problems.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">For Homeowners</h4>
                    <p className="text-green-700 text-sm">Time savings and peace of mind. A trusted handyman who knows the property and can be called when something breaks is an indispensable resource.</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">For Property Managers</h4>
                    <p className="text-purple-700 text-sm">An operational necessity. Maintenance requests must be addressed promptly; turnovers must be completed quickly. A reliable handyman partner is worth far more than their hourly rate.</p>
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
                  <li>U.S. handyman services market generates over <strong>$4 billion in annual revenue</strong></li>
                  <li>Serves both residential (homeowners, landlords, investors) and commercial clients (property managers, retail, hotels)</li>
                  <li>Median U.S. home age is ~40 years — older homes generate more continuous maintenance needs</li>
                  <li>Highly fragmented market — professional companies with consistent quality enjoy a significant competitive advantage</li>
                  <li>Property managers, Airbnb hosts, and commercial facilities are high-volume recurring customer segments</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "handyman-service-types",
        label: "Types of Handyman Services",
        icon: Wrench,
        sections: [
          {
            title: "Minor Plumbing Repairs",
            content: (
              <div className="space-y-3">
                <p>Common handyman plumbing tasks (no license required): replacing faucet washers/cartridges, supply hoses, toilet flappers and fill valves, P-trap drain assemblies, and caulking around tubs and sinks.</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm"><strong>Boundary:</strong> Handymen do NOT perform new plumbing rough-in, pipe replacement inside walls, or work on main supply/drain lines — those require a licensed plumber.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Minor Electrical Repairs",
            content: (
              <div className="space-y-3">
                <p>Standard handyman electrical tasks: replacing outlets and switches, light fixtures and ceiling fans, dimmers, and installing smart home devices (smart switches, doorbells, thermostats, security cameras, smart locks).</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm"><strong>Boundary:</strong> Panel work, new circuit installation, and service entrance work require a licensed electrician. Always confirm the local scope of permitted handyman electrical work.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Furniture Assembly",
            content: (
              <div className="space-y-3">
                <p>One of the most consistently requested services, driven by flat-pack furniture retailers (IKEA, Wayfair, Amazon). Customers need beds, desks, dressers, wardrobes, shelving, and outdoor furniture assembled correctly.</p>
                <p className="text-sm text-gray-600">Large furniture assembly jobs (full bedroom sets, home office setups) are excellent multi-hour jobs with good revenue. Always bring your own tools — the included hex keys are slow and inadequate.</p>
              </div>
            ),
          },
          {
            title: "Drywall Repair & Painting",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Drywall Repair</h4>
                    <p className="text-sm text-gray-600">From filling nail holes to cutting and replacing large damaged sections. Requires texture matching and seamless blending — one of the most technically demanding common repair tasks.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Painting & Touch-Ups</h4>
                    <p className="text-sm text-gray-600">Touch-up work, single-room painting, doors and trim, and newly repaired drywall patches. Matching existing paint color accurately is a key differentiating skill.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Fixture Installation & Door/Window Repairs",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Fixture Installation</h4>
                    <p className="text-sm text-gray-600">Bathroom accessories, shelving, wall-mounted TVs, ceiling fans, mirrors, cabinet hardware, garage organization systems, and security devices.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Door & Window Repairs</h4>
                    <p className="text-sm text-gray-600">Adjusting sticking/dragging doors, aligning latches and strike plates, replacing hinges and hardware, window pane replacement, weatherstripping, and screen repair.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Home Maintenance Tasks",
            content: (
              <div className="space-y-3">
                <p>A broad category ideal for combination visits where multiple small tasks are completed efficiently:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Caulking around windows, doors, tubs, and sinks</li>
                  <li>Re-grouting tile floors and shower walls</li>
                  <li>Cleaning and sealing gutters</li>
                  <li>Installing smoke detectors and CO detectors</li>
                  <li>Pressure washing decks and walkways</li>
                  <li>Deck staining and sealing</li>
                  <li>Replacing exterior light fixtures</li>
                  <li>Seasonal maintenance (winterizing outdoor faucets)</li>
                </ul>
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
        id: "handyman-drywall-paint",
        label: "Drywall & Painting",
        icon: Wrench,
        sections: [
          {
            title: "Drywall Patching and Repair",
            content: (
              <div className="space-y-4">
                <p>Ranges from filling small nail holes with lightweight spackle to cutting out and replacing large sections with new drywall, taping, floating compound in multiple coats, texturing, and priming.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Most Common Repairs</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Door-handle-sized holes from missing door stops</li>
                    <li>• Water-stained areas (once the water source is fixed)</li>
                    <li>• Large impact damage from furniture moves</li>
                    <li>• Screw holes and wall anchors from removed fixtures</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">Professional drywall repair is invisible when done correctly. A badly done patch — visible lines, mismatched texture, or paint differences — immediately reflects poorly on the service.</p>
              </div>
            ),
          },
          {
            title: "Interior Painting and Touch-Ups",
            content: (
              <div className="space-y-4">
                <p>Quality touch-up work involves carefully matching existing paint, applying the correct sheen level, using proper cutting-in technique, and feathering edges to blend the repaired area invisibly.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Rolling a small patch at high contrast in an otherwise smooth wall will be obvious — match sheen as carefully as color</li>
                  <li>Understand roller nap selection, wet-edge technique, and paint chemistry</li>
                  <li>Single-room painting jobs provide several hours of well-compensated, productive work</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "handyman-fixtures-doors",
        label: "Fixtures, Doors & Caulking",
        icon: Wrench,
        sections: [
          {
            title: "Fixture and Hardware Installation",
            content: (
              <div className="space-y-4">
                <p>Requires knowing how to locate studs, select the correct wall anchor for the load, drill precisely, and achieve a level and plumb finish.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 text-sm font-medium">Examples of quality installation:</p>
                    <ul className="text-green-700 text-sm mt-1 space-y-1">
                      <li>• TV mount into studs, perfectly level</li>
                      <li>• Grab bar anchored securely at correct position</li>
                      <li>• Floating shelf perfectly level with invisible fasteners</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-800 text-sm font-medium">Poor installation signs:</p>
                    <ul className="text-red-700 text-sm mt-1 space-y-1">
                      <li>• Crooked or wobbling mount</li>
                      <li>• Anchor pulling from wall under load</li>
                      <li>• Misaligned hardware holes</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Door and Cabinet Adjustments",
            content: (
              <div className="space-y-4">
                <p>Doors that stick, drag, fail to latch, or swing open are among the most frequent handyman calls. Diagnosis is critical first.</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Diagnose Before Fixing</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Hinge wear</strong> → tighten or replace hinges</li>
                    <li>• <strong>Paint buildup</strong> → plane the door edge</li>
                    <li>• <strong>Humidity swelling</strong> → plane or wait for season change</li>
                    <li>• <strong>Foundation settlement</strong> → structural assessment first</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">European concealed-hinge cabinet adjustments are straightforward — a small six-way adjustment screw turn can dramatically improve an entire kitchen's appearance.</p>
              </div>
            ),
          },
          {
            title: "Caulking and Weatherstripping",
            content: (
              <div className="space-y-4">
                <p>Caulking is one of the highest-value-for-effort maintenance tasks. Applied with good technique, it prevents water infiltration, seals air gaps, and dramatically improves finished appearance.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Remove all old caulk completely before applying new</li>
                  <li>Ensure surface is clean and dry before application</li>
                  <li>Apply straight, even bead of the correct caulk type for the application</li>
                  <li>Tool the bead to a professional concave profile</li>
                </ul>
                <p className="text-sm text-gray-600">Weatherstripping types: foam tape (easy, short lifespan), V-strip tension seal (long-lasting), door sweeps (bottom gap), door shoes (most durable).</p>
              </div>
            ),
          },
          {
            title: "Furniture Assembly & Tile/Grout Repair",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Furniture Assembly</h4>
                  <p className="text-sm text-gray-600 mb-2">An experienced handyman assembles a wardrobe that takes a homeowner 3–4 hours in under 90 minutes, correctly, without stripped screws or misaligned panels. Always bring your own impact driver.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Tile and Grout Repair</h4>
                  <p className="text-sm text-gray-600">Re-grouting restores the water seal and dramatically improves appearance. Individual cracked tiles can be replaced if matching tile is available. Shower caulk at floor-wall junctions must be maintained to prevent water infiltration behind tiles.</p>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "COMMON ISSUES & WORKFLOW",
    items: [
      {
        id: "handyman-problems",
        label: "Common Home Repair Issues",
        icon: Wrench,
        sections: [
          {
            title: "Broken Fixtures & Damaged Drywall",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Broken Fixtures</h4>
                  <p className="text-sm text-gray-600 mb-2">Common: towel bars pulled out (no proper anchors), toilet paper holders loose, light fixtures with failed sockets, cabinet hardware loose.</p>
                  <p className="text-sm text-blue-700"><strong>CSR Questions:</strong> Which fixture? Does customer have the replacement? Wall construction type?</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Damaged Drywall</h4>
                  <p className="text-sm text-gray-600 mb-2">Key qualifying questions: How large is the damage? High-visibility area (raises texture matching quality bar)? Does the customer want painting included (significantly adds to scope)?</p>
                  <p className="text-sm text-blue-700">Photos from the customer are extremely helpful for accurate quoting.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Loose Doors, Minor Leaks & Electrical",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Loose Doors and Cabinets</h4>
                  <p className="text-sm text-gray-600">Ask how long the problem has been occurring. A sudden change in door operation can indicate a structural issue requiring professional assessment before the door alone is addressed.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Minor Plumbing Leaks</h4>
                  <p className="text-sm text-gray-600">Dripping faucets, leaking supply lines, running toilets, deteriorated tub caulk — within handyman scope. Escalate to licensed plumber for pipes inside walls, main supply/drain issues, or sewage.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Light Fixture Replacement</h4>
                  <p className="text-sm text-gray-600">Ask: Does the customer have the new fixture? Type of ceiling? Standard junction box? Dimmer switch involved? Most standard replacements: 30–60 minutes.</p>
                </div>
              </div>
            ),
          },
          {
            title: "TV & Shelf Mounting + CSR Quick Reference",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">TV and Shelf Mounting</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>TV mounting:</strong> Correct VESA bracket, stud location, viewing height, cable management</li>
                    <li>• <strong>Floating shelves:</strong> Precise layout, level installation, correct anchor for load, series alignment</li>
                    <li>• High-visibility — a crooked installation is immediately noticed</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">CSR Quick Reference</h4>
                  <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
                    <li>What specifically is broken or not working?</li>
                    <li>Approximately how large or severe is the problem?</li>
                    <li>Is there urgency — ongoing damage or a safety concern?</li>
                  </ol>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">VA Pro Tip</h4>
                  <p className="text-green-700 text-sm">Always ask: <em>"Is there anything else you've been meaning to get fixed while we're there?"</em> Many customers have 3–4 small tasks. Bundling multiple tasks dramatically increases appointment value for both the customer and the business.</p>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "handyman-workflow",
        label: "Service Workflow",
        icon: Wrench,
        sections: [
          {
            title: "Step-by-Step Service Call",
            content: (
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Customer Inquiry", desc: "Gather: customer name, address, contact number, complete task list (not just the top item), whether they have parts/materials, access info (gate codes, pets), and timing constraints." },
                    { step: "2", title: "Job Assessment", desc: "For multi-task or material-sourcing jobs, an assessment may be scheduled before the service visit. For straightforward single tasks, quote on arrival and begin immediately upon authorization." },
                    { step: "3", title: "Scheduling", desc: "Book in hourly blocks — 1-hour minimum for small tasks, larger blocks for multi-task visits. Customer receives confirmed window and reminder. Materials purchasing scheduled in advance if needed." },
                    { step: "4", title: "Performing the Repairs", desc: "Technician confirms scope in walkthrough with customer before starting. Protect all work areas. Start with most disruptive tasks (drilling, drywall), finish with cleanest (painting, fixtures). Communicate any unexpected findings before adjusting scope or cost." },
                    { step: "5", title: "Job Completion", desc: "Thorough final walkthrough with customer demonstrating each completed task and confirming satisfaction. Remove all debris and packaging. Leave the work area clean — often cleaner than found." },
                    { step: "6", title: "Payment & Documentation", desc: "Payment collected at completion (residential) or invoiced (commercial). Invoice documents all tasks, materials, time, and warranty info. Note recommended follow-up items. Send satisfaction follow-up for reviews, referrals, and future bookings." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
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
        ],
      },
    ],
  },
  {
    title: "TERMINOLOGY & ROLES",
    items: [
      {
        id: "handyman-terminology",
        label: "Common Terminology",
        icon: Wrench,
        sections: [
          {
            title: "Handyman & Home Repair Glossary",
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
                        ["Drywall (Gypsum Board)", "Common interior wall/ceiling material. Standard thicknesses: 1/2 inch (walls) and 5/8 inch (fire-rated). Repairs require joint compound, tape, texture matching, and paint."],
                        ["Joint Compound (Mud)", "Plaster-like material for filling and smoothing drywall seams and holes. Applied in multiple thin coats, sanded between coats to achieve a smooth, invisible finish."],
                        ["Stud", "Vertical framing member (typically 2x4 or 2x6) forming the structural skeleton of walls. Typically spaced 16 or 24 inches on center. Critical for securing heavy fixture anchors."],
                        ["Wall Anchor", "Fastener for attaching objects to drywall without a stud. Types: plastic expansion (light loads), toggle bolts (medium/heavy), snap toggles (highest loads). Selecting correctly is critical."],
                        ["Caulk / Caulking", "Flexible sealant filling gaps to prevent water, air, and pest infiltration. Silicone for wet areas; paintable latex for trim/windows; polyurethane/elastomeric for exterior."],
                        ["Sheen (Paint Finish)", "Level of gloss in paint. Flat/matte for ceilings; eggshell/satin for walls; semi-gloss/gloss for trim. Matching sheen is as important as matching color for touch-ups."],
                        ["Strike Plate", "Metal plate on door frame receiving the latch bolt. Misalignment causes sticking or incomplete latching — one of the most common door adjustment issues."],
                        ["P-Trap", "Curved pipe under sinks holding water to block sewer gases. A sewer gas smell at a drain often means a dry or failed P-trap."],
                        ["GFCI Outlet", "Safety outlet shutting off power when current leaks to ground. Identified by TEST and RESET buttons. Required near water. A tripped GFCI is the most common cause of 'dead outlets.'"],
                        ["Weatherstripping", "Sealing material around doors/windows closing gaps. Types: foam tape, V-strip tension seal, door sweeps, door shoes (most durable)."],
                        ["Grout", "Cement-based filler between tiles. Cracked/missing grout allows water penetration leading to progressive tile damage."],
                        ["Flat-Pack Furniture", "Ready-to-assemble furniture sold disassembled. Professional handymen assemble significantly faster and with better results — a high-demand service."],
                        ["On-Center (OC)", "Spacing measured from center to center of structural elements. Standard stud spacing is 16\" OC."],
                        ["Load-Bearing Wall", "Structural wall supporting the building weight above. Cannot be removed without engineering assessment. Handymen must identify before any wall work."],
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
        id: "handyman-roles",
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
                        ["Senior Handyman Technician", "Experienced multi-skilled professional handling the full service range to a high standard — drywall, painting, fixture installation, door/window work, minor plumbing/electrical, furniture assembly. Handles complex/high-value jobs with full ownership of quality."],
                        ["Handyman Technician", "Skilled field professional (1–3 years experience) competently handling common service types: furniture assembly, fixture installation, basic drywall, caulking, door adjustments, and general maintenance."],
                        ["Maintenance Worker", "Entry-level team member performing repeatable tasks — pressure washing, gutter cleaning, basic assembly, caulking — often in support of a technician on larger jobs."],
                        ["Customer Service Representative (CSR)", "Handles all inbound inquiries, gathers complete task lists, provides pricing, schedules appointments, follows up on estimates, manages billing questions and customer concerns."],
                        ["Dispatcher / Scheduler", "Manages daily technician schedules, sequences jobs geographically, monitors progress, handles rescheduling, and ensures technicians arrive on time and fully prepared."],
                        ["Operations Manager", "Oversees field and office operations — technician performance and quality, scheduling, customer satisfaction, vehicle stocking, and company growth."],
                        ["Business Owner", "Sets strategy, manages finances, drives business development, maintains key client relationships. In smaller businesses, often also a working technician for the most complex jobs."],
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
        id: "handyman-tools",
        label: "Tools and Equipment",
        icon: Wrench,
        sections: [
          {
            title: "Essential Handyman Tools",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Power Drills & Impact Drivers", desc: "The two most essential power tools. Drill/driver for precision and controlled torque; impact driver for driving long screws and lag bolts. Professional 18V/20V lithium-ion tools with multiple batteries ensure full-day productivity." },
                    { name: "Screwdrivers", desc: "A full quality set remains essential for controlled work and tight spaces. Include Phillips (0–3), flat (multiple widths), square-drive (Robertson), and Torx in multiple sizes." },
                    { name: "Measuring Tools", desc: "25-foot tape measure, 4-foot level, 9-inch torpedo level, combination square, chalk line, and speed square. Digital levels and laser distance measurers improve accuracy on larger projects." },
                    { name: "Hammers", desc: "16-oz curved-claw finish hammer for general tasks; rubber mallet for furniture assembly without marring surfaces; ball-peen for metal work." },
                    { name: "Stud Finders", desc: "Magnetic types locate metal fasteners in studs. Electronic types sense density changes. Advanced multi-sensor finders also detect live wiring and metal pipes — invaluable for wall drilling." },
                    { name: "Utility Knives & Cutting Tools", desc: "Sharp utility knives for drywall and cutting tasks. Drywall saw for outlet/patch holes. Oscillating multi-tool for cutting damaged drywall, trimming door bottoms in place, and removing old caulk." },
                    { name: "Finishing & Painting Tools", desc: "Drywall knives (6\", 10\", 12\"), corner knife, sanding block (80/120/150 grit), pole sander. Quality angled brushes, 3/8\"–1/2\" nap rollers, painter's tape, and drop cloths." },
                  ].map((item) => (
                    <div key={item.name} className="border rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Vehicle Stocking</h4>
                  <p className="text-gray-700 text-sm">A well-stocked service vehicle is one of a handyman company's most important assets. Carry common hardware, repair materials (spackle, joint compound, caulk, sandpaper), and replacement parts. A vehicle stocked for 80% of jobs without a materials run dramatically increases daily productivity.</p>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "handyman-safety",
        label: "Safety and Best Practices",
        icon: Wrench,
        sections: [
          {
            title: "Safe Power Tool Usage",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Inspect every power tool before use — damaged cords, cracked housing, loose components, malfunctioning guards</li>
                  <li>Wear eye protection whenever drilling, driving, cutting, or grinding</li>
                  <li>Keep cutting accessories sharp — dull tools require more force and slip more easily</li>
                  <li>Never disable or bypass safety guards on power tools</li>
                  <li>Route extension cords along walls, not across walkways</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Ladder Safety",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Use correct ladder — step ladders up to 6 feet; extension ladders for high work</li>
                  <li>Never stand on the top two rungs (step ladder) or top three rungs (extension ladder)</li>
                  <li>Inspect before every use — damaged rungs, cracked rails, bent feet, non-functioning locks</li>
                  <li>Set up on stable, level ground — use leg levelers on uneven surfaces</li>
                  <li>Maintain three points of contact at all times when climbing or descending</li>
                  <li>Never overreach — descend and move the ladder rather than stretching</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Electrical Safety",
            content: (
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>• Turn off the circuit breaker before replacing any outlet, switch, or fixture. Verify dead with a non-contact voltage tester. Never assume a circuit is off without testing.</li>
                    <li>• If a job suggests wiring damage, circuit issues, or panel work — defer to a licensed electrician.</li>
                    <li>• Never work on electrical components in wet conditions or with wet hands.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Property Protection & Know Your Limits",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Property Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Drop cloths on all floor surfaces before any task generating dust, debris, or drips</li>
                    <li>• Painter's tape to protect adjacent surfaces — remove immediately after final coat</li>
                    <li>• Report any accidental damage immediately and honestly</li>
                    <li>• Never move customer belongings without asking first</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Know Your Limits</h4>
                  <p className="text-orange-700 text-sm">The most important safety practice is knowing when a job is beyond appropriate scope and referring it to the correct licensed specialist. Structural repairs, full rewiring, new plumbing rough-in, gas line work, mold remediation, and asbestos removal all require specialists.</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm"><strong>Licensing Note:</strong> Handyman licensing requirements vary significantly by state and municipality. Performing licensed trade work without credentials exposes the business to fines, voided insurance, and legal liability.</p>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "handyman-importance",
        label: "Importance of Handyman Services",
        icon: Wrench,
        sections: [
          {
            title: "For Homeowners: Time Savings & Peace of Mind",
            content: (
              <div className="space-y-4">
                <p>The most universal reason homeowners hire a handyman is time. A homeowner who spends their Saturday watching a handyman complete five items on their maintenance list in four hours has reclaimed a Saturday, reduced their stress, and checked items off a mental to-do list accumulating for months.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">There is genuine peace of mind in having a trusted, skilled professional who knows the property and will show up reliably to fix it. The handyman who builds this relationship becomes an indispensable part of the homeowner's support system.</p>
                </div>
              </div>
            ),
          },
          {
            title: "For Property Managers: Operational Reliability",
            content: (
              <div className="space-y-4">
                <p>For property managers overseeing multiple rental units, commercial facilities, or mixed-use properties, a reliable handyman service is an operational necessity, not a luxury.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Maintenance requests must be addressed promptly for habitability compliance</li>
                  <li>Turnovers require quick property refreshes for the next occupant</li>
                  <li>Ongoing preventive maintenance must be scheduled and completed to protect the asset</li>
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm">Property managers who find a reliable handyman partner become consistent, high-volume recurring customers — among the most valuable client relationships a handyman business can develop.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Preventing Small Problems from Becoming Large Ones",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Deferred = Expensive</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Small roof leak → rotted deck and mold problem</li>
                      <li>• Misaligned strike plate → damaged frame requiring replacement</li>
                      <li>• Deteriorated tub caulk → water behind tile → full bathroom renovation</li>
                      <li>• Clogged gutters → foundation and siding damage</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Maintained = Protected</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Property looks better and functions better</li>
                      <li>• Retains market value over time</li>
                      <li>• Safer and more pleasant for occupants</li>
                      <li>• Dramatically lower lifetime repair costs</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Every team member who understands and communicates this prevention value helps customers make the decision to invest in professional service — and protect their most valuable asset.</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
];
