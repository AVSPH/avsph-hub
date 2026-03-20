import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const garageDoorSections: DocGroup[] = [
  {
    title: "GARAGE DOOR SERVICE",
    items: [
      {
        id: "gd-intro",
        label: "General Overview",
        icon: Info,
        sections: [
          {
            title: "1. Introduction to Garage Door Services",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>A garage door service business specializes in the installation, maintenance, repair, and replacement of garage doors and their associated systems. These businesses serve both residential homeowners and commercial property owners, providing essential services that keep garage doors functioning safely, reliably, and efficiently.</p>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-bold text-foreground mb-4 text-lg">Why Garage Door Maintenance Is Important</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Safety", desc: "Prevents accidental falls, injuries, or trapped vehicles." },
                      { title: "Security", desc: "Reduces vulnerability to unauthorized entry." },
                      { title: "Protection", desc: "Shields interior from weather, pests, and theft." },
                      { title: "Cost Savings", desc: "Catching small problems early avoids expensive emergencies." },
                      { title: "Energy Efficiency", desc: "Properly sealed doors help regulate interior temperatures." },
                      { title: "Home Value", desc: "Increases curb appeal and property resale value." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-foreground">{item.title}:</span> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "gd-types",
        label: "Product Knowledge",
        icon: Home,
        sections: [
          {
            title: "2. Types of Garage Doors",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      title: "Sectional Garage Doors", 
                      features: ["Most common residential choice", "Composed of 4–6 panels", "Supported by rollers in track system", "Compatible with most openers"]
                    },
                    { 
                      title: "Roll-Up Garage Doors", 
                      features: ["Designed for heavy-use environments", "Slats coil around a drum above", "Minimal ceiling clearance required", "Common in warehouses"]
                    },
                    { 
                      title: "Tilt-Up Garage Doors", 
                      features: ["One-piece solid panel", "Swings outward then tilts up", "Simpler mechanical design", "Found in older homes"]
                    },
                    { 
                      title: "Side-Hinged Doors", 
                      features: ["Resemble traditional barn doors", "Swings outward from side hinges", "Can be manually operated easily", "Popular for workshops"]
                    }
                  ].map((door, i) => (
                    <div key={i} className="p-5 border rounded-2xl bg-muted/20 hover:bg-muted/40 transition-shadow">
                      <h4 className="font-bold text-foreground mb-3 text-sm underline decoration-primary/30 underline-offset-4">{door.title}</h4>
                      <ul className="space-y-1.5">
                        {door.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-tight">
                            <div className="w-1 h-1 rounded-full bg-primary/60" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-primary/[0.03] border border-primary/20 rounded-xl">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" /> Automatic Garage Doors
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Functional category applying to any door fitted with a motorized opener. Features include safety sensors, Wi-Fi connectivity, and integration with smart home systems like myQ.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "gd-services",
        label: "Services & Maintenance",
        icon: Wrench,
        sections: [
          {
            title: "3. Core Services Offered",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Installation", desc: "Full assembly of panels, tracks, and hardware tension calibration." },
                    { title: "Repairs", desc: "Fixing damaged panels, frayed cables, and worn components." },
                    { title: "Spring Service", desc: "Replacement of broken high-tension torsion or extension springs." },
                    { title: "Opener Service", desc: "Motor troubleshooting, sensor alignment, and smart home setup." },
                    { title: "Track & Roller", desc: "Realignment of bent tracks and lubrication of rollers." },
                    { title: "Maintenance", desc: "Annual inspections, balance tests, and hardware tightening." }
                  ].map((service, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border rounded-xl bg-background hover:border-primary/50 transition-colors">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm tracking-tight">{service.title}</h4>
                        <p className="text-[11px] mt-1 italic">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl space-y-3">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
                    <div>
                      <h4 className="font-black text-destructive text-xs uppercase tracking-widest">⚠ SAFETY WARNING — SPRING SERVICE</h4>
                      <p className="text-sm">Garage door springs are under extreme tension and can cause severe injury. Only trained technicians with proper tools should perform spring replacement. Never attempt DIY spring replacement.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "gd-problems",
        label: "Diagnostics",
        icon: AlertCircle,
        sections: [
          {
            title: "4. Common Garage Door Problems",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-xl bg-muted/20 space-y-2">
                    <h4 className="font-bold text-foreground">Door Not Opening/Closing</h4>
                    <p className="text-sm text-muted-foreground">The most urgent complaint. Often caused by broken springs, misaligned sensors, or dead opener motors.</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/20 space-y-2">
                    <h4 className="font-bold text-foreground">Broken Springs</h4>
                    <p className="text-sm text-muted-foreground">Average lifespan is 10,000 cycles (~7-10 years). Failure is often marked by a loud bang.</p>
                  </div>
                </div>

                <div className="overflow-hidden border rounded-xl">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[120px] font-bold">Sound</TableHead>
                        <TableHead className="font-bold">Interpretation</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { sound: "Grinding", meaning: "Worn rollers or track misalignment" },
                        { sound: "Squeaking", meaning: "Lack of lubrication on coils or hinges" },
                        { sound: "Rattling", meaning: "Loose hardware, bolts, or brackets" },
                        { sound: "Popping", meaning: "Binding sections or spring nearing failure" },
                        { sound: "Clicking", meaning: "Loose chain or limit switch issues" }
                      ].map((item, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-mono text-xs text-primary font-bold tracking-tighter uppercase">{item.sound}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{item.meaning}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "gd-workflow",
        label: "Business Operations",
        icon: Clock,
        sections: [
          {
            title: "5. Service Workflow",
            content: (
              <div className="relative space-y-4 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
                {[
                  { t: "Customer Inquiry", d: "Collect details, symptômes, and urgency levels." },
                  { t: "Scheduling", d: "Dispatch based on priority and geography." },
                  { t: "Inspection", d: "Conduct thorough visual system checks on arrival." },
                  { t: "Diagnosis", d: "Identifying root causes and potential future failures." },
                  { t: "Quoting", d: "Present written proposal before work begins." },
                  { t: "Execution", d: "Perform agreed repair following safety protocols." },
                  { t: "Testing", d: "Full system operation and safety sensor verification." },
                  { t: "Closing", d: "Payment collection and maintenance documentation." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-10 flex flex-col items-start group">
                    <div className="absolute left-0 w-8 h-8 rounded-lg bg-background border flex items-center justify-center font-bold text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-all z-10">{i+1}</div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">{item.t}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.d}</p>
                  </div>
                ))}
              </div>
            )
          }
        ]
      },
      {
        id: "gd-terminology",
        label: "Industry Language",
        icon: List,
        sections: [
          {
            title: "6. Common Garage Door Terminology",
            content: (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { t: "Torsion Spring", d: "Mounted above opening, stores energy to lift weight." },
                  { t: "Extension Spring", d: "Located on sides, stretching during operation." },
                  { t: "Tracks", d: "Metal rails that guide the door panels." },
                  { t: "Rollers", d: "Wheel components riding inside tracks." },
                  { t: "Safety Sensors", d: "Infrared beams mounted near floor level." },
                  { t: "Limit Switches", d: "Settings controlling travel distance." },
                  { t: "Weather Seal", d: "Gaskets used to seal gaps from elements." },
                  { t: "Counterbalance", d: "System offsetting the heavy door weight." },
                  { t: "Headroom", d: "Vertical space between opening and ceiling." },
                  { t: "Backroom", d: "Depth of garage required for door travel." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 pb-3 border-b border-border/50">
                    <div className="font-bold text-primary text-[10px] uppercase min-w-[100px] tracking-widest">{item.t}</div>
                    <p className="text-[11px] text-muted-foreground leading-snug">{item.d}</p>
                  </div>
                ))}
              </div>
            )
          }
        ]
      },
      {
        id: "gd-roles",
        label: "Team & Support",
        icon: Users,
        sections: [
          {
            title: "7. Roles in a Garage Door Business",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { r: "Technician", s: "Mechanical aptitude, diagnostics, problem-solving" },
                  { r: "Installer", s: "Carpentry, precision measurement, assembly" },
                  { r: "CSR", s: "Communication, product knowledge, empathy" },
                  { r: "Dispatcher", s: "Logistics, geography, decision-making" },
                  { r: "Operations", s: "Vendor management, inventory, quality standards" },
                  { r: "Virtual Assistant", s: "Scheduling, follow-ups, data entry" }
                ].map((role, i) => (
                  <div key={i} className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground inline-block px-2 py-0.5 bg-primary/5 rounded text-[10px] uppercase tracking-wider">{role.r}</h4>
                    <p className="text-xs text-muted-foreground leading-tight italic">"{role.s}"</p>
                  </div>
                ))}
              </div>
            )
          }
        ]
      },
      {
        id: "gd-tools",
        label: "Equipment",
        icon: Target,
        sections: [
          {
            title: "8. Tools and Equipment",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   <div className="p-4 border rounded-xl">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Hand Tools</h4>
                      <div className="flex flex-wrap gap-2 uppercase font-bold text-[9px] text-foreground opacity-70">
                        {["Wrenches", "Pliers", "Screwdrivers", "Level", "Hammer"].map(t => <span key={t} className="px-1.5 py-0.5 border rounded-md">{t}</span>)}
                      </div>
                   </div>
                   <div className="p-4 border rounded-xl bg-primary/[0.02]">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Specialized</h4>
                      <ul className="space-y-1 text-xs">
                         <li>• Winding Bars</li>
                         <li>• Torsion Calculator</li>
                         <li>• Cable Puller</li>
                      </ul>
                   </div>
                   <div className="p-4 border rounded-xl">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Supplies</h4>
                      <ul className="space-y-1 text-xs">
                         <li>• WD-40 / Lubricants</li>
                         <li>• Fasteners/Bolts</li>
                         <li>• Weatherstripping</li>
                      </ul>
                   </div>
                </div>

                <div className="p-5 border-2 border-dashed rounded-2xl flex flex-wrap gap-6 justify-center bg-destructive/[0.02]">
                   {[
                     { l: "Safety Glasses", i: Shield },
                     { l: "Work Gloves", i: ShieldCheck },
                     { l: "Steel Boots", i: Target },
                     { l: "Hard Hat", i: Shield }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                        <item.i className="w-5 h-5 text-destructive/40" />
                        <span className="text-[10px] font-bold text-destructive/60 uppercase">{item.l}</span>
                     </div>
                   ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "gd-safety",
        label: "Security & Safety",
        icon: ShieldCheck,
        sections: [
          {
            title: "9. Safety and Best Practices",
            content: (
              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                  <h4 className="font-bold text-destructive mb-3 flex items-center gap-2 uppercase tracking-tight">
                    <AlertTriangle className="w-4 h-4" /> Non-Negotiable Safety Rules
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80 italic">
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" /> NEVER wind springs by hand; use winding bars.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" /> Replace springs in pairs – they age together.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" /> Maintain three points of contact on ladders.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" /> Disconnect power before wiring work.</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl border space-y-2">
                   <h4 className="font-bold text-foreground text-xs uppercase">General Best Practices</h4>
                   <p className="text-xs text-muted-foreground">Keep work areas clear of clutter. Communicate clearly with customers to keep them away from moving systems. Never bypass safety sensors.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "gd-importance",
        label: "Value & Standards",
        icon: Star,
        sections: [
          {
            title: "10. Importance of Professional Services",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <p>Garage systems involve extreme tension and heavy components that present real dangers. Professional services ensure:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-4 border rounded-xl space-y-2">
                      <h4 className="font-bold text-foreground text-sm border-l-4 border-primary pl-3">Safety & Liability</h4>
                      <p className="text-xs leading-relaxed">Qualified pros carry insurance and follow code. DIY errors can void warranties and cause fatal accidents.</p>
                   </div>
                   <div className="p-4 border rounded-xl space-y-2">
                      <h4 className="font-bold text-foreground text-sm border-l-4 border-primary pl-3">Code Compliance</h4>
                      <p className="text-xs leading-relaxed">Installations must meet building codes and UL 325 safety standards for automatic openers.</p>
                   </div>
                </div>
                <div className="bg-primary/10 p-5 rounded-2xl flex items-center justify-between gap-6">
                   <div className="space-y-1">
                      <h4 className="font-bold text-primary">1,500+</h4>
                      <p className="text-[10px] text-primary/80 uppercase">Annual Cycles (Avg)</p>
                   </div>
                   <div className="w-px h-10 bg-primary/20" />
                   <div className="space-y-1">
                      <h4 className="font-bold text-primary">Precision</h4>
                      <p className="text-[10px] text-primary/80 uppercase">Root Cause Analysis</p>
                   </div>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
