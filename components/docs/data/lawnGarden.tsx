import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const lawnGardenSections: DocGroup[] = [
  {
    title: "LAWN & GARDEN BASICS",
    items: [
      {
        id: "lawn-intro",
        label: "Introduction to Lawn and Garden Services",
        icon: Leaf,
        sections: [
          {
            title: "Overview",
            content: (
              <div className="space-y-4">
                <p>A lawn and garden business provides outdoor maintenance and landscaping services to residential and commercial clients. These businesses help property owners maintain clean, healthy, and visually appealing outdoor spaces through regular upkeep and specialized treatments.</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Core Mission</h4>
                  <p className="text-green-700">To enhance and maintain outdoor spaces — keeping lawns green, gardens thriving, and properties looking their best year-round.</p>
                </div>
                <p>Services range from basic grass cutting to full landscape design and installation. Many businesses offer recurring maintenance contracts as well as one-time project-based work.</p>
              </div>
            ),
          },
          {
            title: "Value to Clients",
            content: (
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Curb Appeal:</strong> Well-maintained lawns increase property value and first impressions</li>
                  <li><strong>Time Savings:</strong> Clients reclaim hours spent on outdoor chores</li>
                  <li><strong>Health of Plants:</strong> Professional care ensures grass and plants thrive</li>
                  <li><strong>Pest & Weed Control:</strong> Proactive treatment prevents costly damage</li>
                  <li><strong>Seasonal Readiness:</strong> Properties are properly prepared for each season</li>
                  <li><strong>Safety:</strong> Overgrown vegetation can create hazards — regular maintenance prevents issues</li>
                </ul>
              </div>
            ),
          },
          {
            title: "What VAs Handle",
            content: (
              <div className="space-y-4">
                <p>As a Virtual Assistant supporting a lawn and garden business, your primary responsibilities involve customer communication, scheduling, and administrative support.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Daily Tasks</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Answer incoming calls and messages</li>
                      <li>• Schedule and confirm service appointments</li>
                      <li>• Send quotes and follow up on leads</li>
                      <li>• Process payments and invoices</li>
                      <li>• Handle rescheduling requests</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Customer Support</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Address service complaints</li>
                      <li>• Communicate crew arrival times</li>
                      <li>• Provide service descriptions</li>
                      <li>• Coordinate with field teams</li>
                      <li>• Follow up after service visits</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-service-types",
        label: "Types of Lawn and Garden Services",
        icon: Leaf,
        sections: [
          {
            title: "Overview of Service Types",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">1. Lawn Maintenance</h4>
                    <p className="text-sm text-gray-600">Regular mowing, edging, and trimming to keep grass at an ideal height and appearance.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">2. Garden Care</h4>
                    <p className="text-sm text-gray-600">Planting, pruning, weeding, and maintaining flower beds and garden areas.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">3. Weed Control</h4>
                    <p className="text-sm text-gray-600">Application of herbicides or manual removal to eliminate weeds from lawns and gardens.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">4. Fertilization</h4>
                    <p className="text-sm text-gray-600">Applying nutrients to promote healthy grass growth and green color.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">5. Aeration & Seeding</h4>
                    <p className="text-sm text-gray-600">Aerating compacted soil and overseeding thin or bare patches to improve lawn density.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">6. Mulching</h4>
                    <p className="text-sm text-gray-600">Spreading mulch around plants and beds to retain moisture and suppress weeds.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">7. Hedge & Shrub Trimming</h4>
                    <p className="text-sm text-gray-600">Shaping and trimming hedges, bushes, and shrubs for a clean, manicured look.</p>
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
    title: "CORE SERVICES",
    items: [
      {
        id: "lawn-grass-edging",
        label: "Grass Cutting & Edging",
        icon: Leaf,
        sections: [
          {
            title: "Grass Cutting",
            content: (
              <div className="space-y-4">
                <p>Grass cutting (mowing) is the most frequently requested service and often the foundation of recurring maintenance contracts.</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">What's Included</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Mowing grass to specified height</li>
                    <li>• Blowing clippings off driveways and walkways</li>
                    <li>• Bagging or mulching clippings (client preference)</li>
                    <li>• Trimming around obstacles (trees, fences, garden beds)</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600"><strong>Frequency:</strong> Weekly or bi-weekly during growing season; monthly or as needed in dormant periods.</p>
              </div>
            ),
          },
          {
            title: "Edging",
            content: (
              <div className="space-y-4">
                <p>Edging creates clean borders between the lawn and hard surfaces like sidewalks, driveways, and garden beds. It gives lawns a professional, finished appearance.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Done with a string trimmer or edger tool</li>
                  <li>Often included with standard mowing visits</li>
                  <li>Creates crisp, defined lines along all hard surfaces</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-weed-fert",
        label: "Weed Control & Fertilization",
        icon: Leaf,
        sections: [
          {
            title: "Weed Control",
            content: (
              <div className="space-y-4">
                <p>Weed control prevents invasive plants from overtaking lawns and garden beds. It can be done chemically (herbicides) or manually.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <h4 className="font-semibold text-yellow-800 mb-2">Pre-Emergent</h4>
                    <p className="text-yellow-700 text-sm">Applied before weeds sprout to prevent germination. Best done in early spring and fall.</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <h4 className="font-semibold text-orange-800 mb-2">Post-Emergent</h4>
                    <p className="text-orange-700 text-sm">Applied to existing weeds to kill them. Selective types target only weeds, not grass.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Fertilization",
            content: (
              <div className="space-y-4">
                <p>Fertilization feeds the lawn with essential nutrients (nitrogen, phosphorus, potassium) to promote lush, green growth and overall health.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Typically applied 4–6 times per year depending on grass type and region</li>
                  <li>May include soil testing to identify deficiencies</li>
                  <li>Organic or synthetic fertilizer options available</li>
                  <li>Timed with seasonal growth cycles for best results</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-aeration-mulch",
        label: "Aeration, Mulching & Trimming",
        icon: Leaf,
        sections: [
          {
            title: "Aeration",
            content: (
              <div className="space-y-4">
                <p>Aeration involves perforating the soil with small holes to allow air, water, and nutrients to penetrate deep into the root zone. It relieves soil compaction.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Benefits of Aeration</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Reduces soil compaction</li>
                    <li>• Improves water absorption</li>
                    <li>• Encourages deeper root growth</li>
                    <li>• Enhances fertilizer effectiveness</li>
                    <li>• Often paired with overseeding</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600"><strong>Best Time:</strong> Fall (cool-season grasses) or spring (warm-season grasses).</p>
              </div>
            ),
          },
          {
            title: "Mulching",
            content: (
              <div className="space-y-4">
                <p>Mulching involves spreading a layer of material (wood chips, bark, straw) around plants and in garden beds to conserve moisture, regulate temperature, and suppress weeds.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Typically 2–4 inches of mulch applied per season</li>
                  <li>Keeps soil moist between waterings</li>
                  <li>Prevents weed growth in garden beds</li>
                  <li>Adds a clean, finished aesthetic to landscaping</li>
                  <li>Needs to be refreshed annually or biannually</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Hedge & Shrub Trimming",
            content: (
              <div className="space-y-4">
                <p>Hedge and shrub trimming shapes and maintains bushes, hedges, and ornamental shrubs to keep them looking neat and healthy.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Promotes healthy growth and air circulation</li>
                  <li>Prevents overgrowth and encroachment on structures</li>
                  <li>Frequency varies by species — typically 2–4 times per year</li>
                  <li>Clippings removed and disposed of cleanly</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-plant-leaf",
        label: "Plant Care & Leaf Removal",
        icon: Leaf,
        sections: [
          {
            title: "Plant Care",
            content: (
              <div className="space-y-4">
                <p>Plant care services include planting new flowers or shrubs, caring for existing garden plants, and seasonal color changes in garden beds.</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Annual and perennial flower installation</li>
                  <li>Deadheading spent blooms to encourage new growth</li>
                  <li>Watering and monitoring plant health</li>
                  <li>Replacing dead or diseased plants</li>
                  <li>Soil amendment for planting areas</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Leaf Removal",
            content: (
              <div className="space-y-4">
                <p>Leaf removal is a seasonal service typically performed in fall and early winter to clear fallen leaves from lawns, beds, and driveways.</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Why It Matters</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Prevents smothering grass under heavy leaf layers</li>
                    <li>• Reduces mold and disease risk</li>
                    <li>• Keeps gutters and drains clear</li>
                    <li>• Keeps the property looking well-maintained</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">Leaves are either bagged for disposal or mulched into the lawn as organic matter.</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "OPERATIONS & TASKS",
    items: [
      {
        id: "lawn-tasks",
        label: "Maintenance Tasks",
        icon: Leaf,
        sections: [
          {
            title: "Mowing",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Set mower height based on grass type and season</li>
                  <li>Mow in alternating patterns to avoid ruts</li>
                  <li>Never cut more than 1/3 of the blade at a time</li>
                  <li>Blow clippings off hard surfaces after each visit</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Trimming & Edging",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Trim around all obstacles: trees, fence lines, beds</li>
                  <li>Edge along all concrete and asphalt surfaces</li>
                  <li>Keep edges sharp and consistent</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Weeding",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Hand-pull or chemically treat weeds in beds and lawn</li>
                  <li>Note aggressive weed types for follow-up treatment</li>
                  <li>Document areas with heavy weed pressure</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Fertilization Application",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Apply fertilizer evenly with a spreader or sprayer</li>
                  <li>Follow label rates to avoid over-fertilization (lawn burn)</li>
                  <li>Water in after application if no rain expected</li>
                  <li>Log date and product used for each application</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Aeration & Overseeding",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Use core aerator to pull plugs from soil</li>
                  <li>Leave plugs on surface — they break down naturally</li>
                  <li>Overseed immediately after aeration for best germination</li>
                  <li>Advise client to water daily for 2–3 weeks</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Mulch Installation",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Remove old or depleted mulch before applying fresh</li>
                  <li>Apply 2–3 inch layer around plants and in beds</li>
                  <li>Keep mulch away from direct contact with plant stems/trunks</li>
                  <li>Clean up excess from edging areas</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Leaf Removal Tasks",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Use leaf blowers to move leaves to central collection area</li>
                  <li>Rake or vacuum into bags or tarps for removal</li>
                  <li>Check and clear leaves from garden beds and gutters</li>
                  <li>Confirm with client if leaves should be hauled away or left for composting</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Maintenance Visit Standard",
            content: (
              <div className="space-y-4">
                <p className="font-medium">What a standard lawn maintenance visit includes:</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <ol className="text-green-800 text-sm space-y-2 list-decimal list-inside">
                    <li>Arrive on time and check property for hazards</li>
                    <li>Mow lawn at appropriate height</li>
                    <li>Trim around all obstacles</li>
                    <li>Edge all hard surface borders</li>
                    <li>Spot-weed visible weed areas</li>
                    <li>Blow clippings off driveway, walkway, and patio</li>
                    <li>Check for any concerns to report (brown patches, pest signs)</li>
                    <li>Leave a visit summary note or digital update for client</li>
                  </ol>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-operations",
        label: "Business Operations",
        icon: Leaf,
        sections: [
          {
            title: "Step-by-Step Operations",
            content: (
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Lead Inquiry", desc: "Customer contacts the business via phone, website, or referral requesting lawn or garden services." },
                    { step: "2", title: "Property Assessment", desc: "Owner or crew lead visits to assess property size, lawn condition, and service needs. A quote is prepared." },
                    { step: "3", title: "Quote & Agreement", desc: "Client receives a service proposal with pricing. Recurring contracts or one-time service terms are agreed upon." },
                    { step: "4", title: "Scheduling", desc: "Service visits are scheduled on a recurring or one-time basis. Client receives confirmation of the schedule." },
                    { step: "5", title: "Service Delivery", desc: "Crew arrives and completes all scheduled tasks — mowing, trimming, edging, treatments, etc." },
                    { step: "6", title: "Quality Check", desc: "Crew lead or owner reviews completed work before leaving the property." },
                    { step: "7", title: "Invoicing & Payment", desc: "Invoice is sent after service. Payment collected via card, check, or online platform." },
                    { step: "8", title: "Follow-Up", desc: "VA or office team follows up with client to confirm satisfaction and schedule next visit." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
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
      {
        id: "lawn-terminology",
        label: "Common Terminology",
        icon: Leaf,
        sections: [
          {
            title: "Lawn & Garden Glossary",
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
                        ["Aeration", "Process of perforating soil to allow air, water, and nutrients to reach grass roots"],
                        ["Overseeding", "Spreading grass seed over existing lawn to fill thin or bare areas"],
                        ["Pre-Emergent", "Herbicide applied before weeds sprout to prevent germination"],
                        ["Post-Emergent", "Herbicide applied to kill weeds that have already grown"],
                        ["Thatch", "Layer of dead grass and organic matter between soil and grass blades"],
                        ["Dethatching", "Removing excess thatch layer to improve lawn health"],
                        ["Edging", "Creating clean borders along sidewalks, driveways, and garden beds"],
                        ["Mulch", "Organic material spread over soil to retain moisture and suppress weeds"],
                        ["Fertilizer", "Nutrients applied to soil to promote healthy plant and grass growth"],
                        ["N-P-K", "Nitrogen-Phosphorus-Potassium — the three main nutrients in fertilizer"],
                        ["pH Level", "Measure of soil acidity/alkalinity; most lawns prefer a pH of 6.0–7.0"],
                        ["Lime", "Soil amendment used to raise pH in acidic lawns"],
                        ["Dormant", "Period when grass or plants stop growing due to heat or cold stress"],
                        ["Topdressing", "Applying a thin layer of compost or soil over the lawn surface"],
                        ["Irrigation", "Watering system used to distribute water evenly across a lawn or garden"],
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
        id: "lawn-roles",
        label: "Team Roles",
        icon: Leaf,
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
                        ["Owner / Operator", "Runs the business, handles sales, manages crews, sets pricing"],
                        ["Crew Leader", "Leads field team, ensures quality work, reports issues to owner"],
                        ["Lawn Technician", "Performs mowing, trimming, edging, and other standard services"],
                        ["Landscape Specialist", "Handles installations, planting, and complex garden projects"],
                        ["Pest/Weed Technician", "Licensed applicator for herbicide and pesticide treatments"],
                        ["Office Manager", "Handles scheduling, invoicing, customer accounts, and admin tasks"],
                        ["Virtual Assistant (VA)", "Manages calls, scheduling, follow-ups, and CRM updates remotely"],
                        ["Sales Representative", "Conducts property assessments and closes new service agreements"],
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
    title: "SAFETY & SUPPORT",
    items: [
      {
        id: "lawn-equipment",
        label: "Tools and Equipment",
        icon: Leaf,
        sections: [
          {
            title: "Equipment Guide",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Riding Mower", desc: "Used for large commercial lawns; faster and more efficient than push mowers." },
                    { name: "Push Mower / Walk-Behind", desc: "Standard residential mower for medium-sized lawns." },
                    { name: "String Trimmer (Weed Eater)", desc: "Trims grass around edges, trees, and obstacles where mowers cannot reach." },
                    { name: "Edger", desc: "Creates clean borders along sidewalks and driveways." },
                    { name: "Leaf Blower", desc: "Clears clippings, leaves, and debris from hard surfaces." },
                    { name: "Backpack Sprayer", desc: "Used to apply herbicides, fertilizers, and pest control chemicals." },
                    { name: "Core Aerator", desc: "Machine that pulls small plugs of soil to relieve compaction and improve root growth." },
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
        id: "lawn-safety",
        label: "Safety and Best Practices",
        icon: Leaf,
        sections: [
          {
            title: "Personal Protective Equipment (PPE)",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Safety glasses or goggles when mowing or trimming</li>
                  <li>Hearing protection when operating loud equipment</li>
                  <li>Gloves when handling chemicals or sharp tools</li>
                  <li>Steel-toed boots for foot protection</li>
                  <li>Long pants and long sleeves to prevent cuts and chemical contact</li>
                  <li>Sun protection (hat, sunscreen) for outdoor work</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Chemical Safety",
            content: (
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Important Rules</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Always read and follow product label instructions</li>
                    <li>• Never mix chemicals unless specified as safe</li>
                    <li>• Store chemicals in original containers in a secure location</li>
                    <li>• Post-treatment: keep clients, pets, and children off treated areas per label instructions</li>
                    <li>• Technicians applying pesticides must be licensed</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Equipment Safety",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Inspect equipment before each use for damage or mechanical issues</li>
                  <li>Never operate mowers on steep slopes where rollover risk exists</li>
                  <li>Clear the area of debris before mowing (rocks, toys, branches)</li>
                  <li>Shut off equipment completely before performing any maintenance</li>
                  <li>Keep bystanders away from operating mowers and trimmers</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Heat & Outdoor Safety",
            content: (
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Take regular breaks during extreme heat</li>
                  <li>Stay hydrated throughout the workday</li>
                  <li>Recognize signs of heat exhaustion: dizziness, nausea, excessive sweating</li>
                  <li>Schedule intensive work during cooler morning hours when possible</li>
                  <li>Buddy system — crews should check on each other during hot weather</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-customer-requests",
        label: "Common Customer Requests",
        icon: Leaf,
        sections: [
          {
            title: "Frequently Asked Requests",
            content: (
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    {
                      request: "\"Can you add fertilization to my regular service?\"",
                      response: "Absolutely! We offer fertilization packages that can be added to your recurring service plan. I can schedule a technician to assess your lawn and provide a quote for the best treatment program.",
                    },
                    {
                      request: "\"My grass has brown patches — what can you do?\"",
                      response: "Brown patches can be caused by pests, disease, drought, or over/under-fertilization. I'll schedule an assessment with our team to diagnose the issue and recommend the right treatment.",
                    },
                    {
                      request: "\"Can someone come this week for a one-time cleanup?\"",
                      response: "Yes! I can check availability and schedule a one-time cleanup visit. Can you give me your address and describe what you need done (mowing, weeding, leaf removal, etc.)?",
                    },
                    {
                      request: "\"My lawn looks thin and patchy. What do you recommend?\"",
                      response: "That sounds like it may benefit from aeration and overseeding. This process loosens the soil and introduces fresh seed to thicken the lawn. I can schedule an assessment to confirm and provide a quote.",
                    },
                    {
                      request: "\"Can I pause my service for the winter?\"",
                      response: "Of course! We can put your recurring service on hold during the off-season. Would you like to keep leaf removal or any winter cleanup services active in the meantime?",
                    },
                    {
                      request: "\"The crew left grass clippings on my driveway last time.\"",
                      response: "I sincerely apologize for that! That's not our standard. I'll make a note on your account and ensure the crew clears all surfaces after every visit going forward. Thank you for letting us know.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border rounded-lg p-4 space-y-2">
                      <p className="font-medium text-sm text-blue-800">{item.request}</p>
                      <p className="text-sm text-gray-700"><strong>Response:</strong> {item.response}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            title: "Upsell Opportunities",
            content: (
              <div className="space-y-4">
                <p className="text-sm">When a client calls for one service, look for natural opportunities to mention complementary add-ons:</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• Mowing client → mention fertilization or weed control programs</li>
                    <li>• Weed control client → mention mulch installation to suppress future weeds</li>
                    <li>• Aeration client → mention overseeding and starter fertilizer</li>
                    <li>• Cleanup client → offer a recurring maintenance plan</li>
                    <li>• Spring service client → mention irrigation startup or spring fertilization</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "lawn-importance",
        label: "Importance of Professional Services",
        icon: Leaf,
        sections: [
          {
            title: "The Professional Advantage",
            content: (
              <div className="space-y-4">
                <p>While some homeowners prefer DIY lawn care, many turn to professional services for the following reasons:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Knowledge & Expertise</h4>
                    <p className="text-blue-700 text-sm">Professionals understand grass types, soil conditions, seasonal needs, and the right products — leading to better results than guesswork.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Time Savings</h4>
                    <p className="text-green-700 text-sm">Clients reclaim hours each week, especially during peak season when lawns grow rapidly and require frequent attention.</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Consistent Results</h4>
                    <p className="text-purple-700 text-sm">Professional crews deliver uniform, high-quality results every visit — clients always come home to a well-maintained yard.</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Proper Equipment</h4>
                    <p className="text-yellow-700 text-sm">Commercial-grade equipment produces cleaner cuts and faster service than consumer mowers and tools.</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Early Problem Detection</h4>
                    <p className="text-red-700 text-sm">Regular visits allow crews to spot pest damage, disease, irrigation issues, or drainage problems before they become costly.</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Property Value</h4>
                    <p className="text-orange-700 text-sm">A professionally maintained lawn can increase property value by up to 15% and creates a strong first impression for visitors and buyers.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "How VAs Support Business Success",
            content: (
              <div className="space-y-4">
                <p>Virtual Assistants play a critical role in keeping a lawn and garden business running smoothly behind the scenes:</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <ul className="text-gray-800 text-sm space-y-2">
                    <li>• <strong>Lead response speed:</strong> Quick responses to inquiries convert more leads into paying clients</li>
                    <li>• <strong>Scheduling efficiency:</strong> Organized route planning maximizes crew productivity</li>
                    <li>• <strong>Client retention:</strong> Follow-ups and proactive communication keep clients satisfied</li>
                    <li>• <strong>Administrative relief:</strong> Owners can focus on field work and growth when VAs handle the office</li>
                    <li>• <strong>Reputation management:</strong> Prompt handling of complaints prevents negative reviews</li>
                    <li>• <strong>Upselling:</strong> Informed VAs can educate clients on additional services that benefit their property</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
];
