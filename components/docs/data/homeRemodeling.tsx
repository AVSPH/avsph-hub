import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";
export const homeRemodelingSections: DocGroup[] = [
  {
    title: "HOME REMODELING BUSINESS",
    items: [
      {
        id: "remodeling-intro",
        label: "Introduction",
        icon: Info,
        sections: [
          {
            title: "What Is Home Remodeling?",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Home remodeling — also called home renovation or home improvement contracting — is the professional practice of transforming, upgrading, and improving the existing structure, layout, systems, and aesthetic of a home or commercial property.
                </p>
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm italic">
                    "Unlike new construction, which builds from the ground up, remodeling works within and around an existing building: reconfiguring floor plans, replacing outdated systems, upgrading finishes and fixtures, adding living space, and making properties more functional, beautiful, and valuable."
                  </p>
                </div>
                <p>
                  A home remodeling business is a licensed general contracting company that manages these transformation projects on behalf of homeowners and property owners.
                </p>
              </div>
            )
          },
          {
            title: "Why Homeowners Invest",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold mb-2 flex items-center gap-2 italic">
                      <Sparkles className="w-4 h-4 text-primary" /> Improved Living
                    </h4>
                    <p className="text-sm text-muted-foreground">Transforming outdated spaces into beautiful, efficient environments for daily family gathering and enjoyment.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold mb-2 flex items-center gap-2 italic">
                      <CreditCard className="w-4 h-4 text-primary" /> Property Value
                    </h4>
                    <p className="text-sm text-muted-foreground">Consistently delivering high ROI, especially in kitchen and bathroom renovations.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold mb-2 flex items-center gap-2 italic">
                      <Home className="w-4 h-4 text-primary" /> Avoiding Move Costs
                    </h4>
                    <p className="text-sm text-muted-foreground">An economical path to getting the space needed without the transaction costs of buying and selling.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold mb-2 flex items-center gap-2 italic">
                      <Zap className="w-4 h-4 text-primary" /> Modernizing Systems
                    </h4>
                    <p className="text-sm text-muted-foreground">Upgrading aging electrical, plumbing, insulation, and HVAC to modern safety and efficiency standards.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "remodeling-types",
        label: "Services Types",
        icon: Home,
        sections: [
          {
            title: "Residential Services",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Kitchen Remodeling", desc: "The highest-value service, ranging from cosmetic refreshes to full gut renovations." },
                    { title: "Bathroom Remodeling", desc: "High-use, high-moisture environments that require intensive trade coordination." },
                    { title: "Basement Finishing", desc: "Increasing usable square footage at a lower cost than additions." },
                    { title: "Interior Renovations", desc: "Opening floor plans, flooring replacement, and whole-home transformations." },
                    { title: "Exterior Renovations", desc: "Improving curb appeal and maintenance via roofing, siding, and siding." },
                    { title: "Home Additions", desc: "Complex projects involving entirely new living space above or attached to the home." }
                  ].map((service, i) => (
                    <div key={i} className="p-4 border rounded-xl bg-muted/20 hover:bg-primary/5 transition-colors">
                      <h4 className="font-bold text-primary mb-1 italic">{service.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "remodeling-workflow",
        label: "Project Workflow",
        icon: Clock,
        sections: [
          {
            title: "7-Phase Management Process",
            content: (
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { n: "1", title: "Initial Consultation", desc: "Understanding the client's vision and assessing feasibility." },
                    { n: "2", title: "Design & Planning", desc: "Developing detailed plans, 3D renderings, and material selections." },
                    { n: "3", title: "Budget Estimation", desc: "Preparing line-itemized estimates and contingency budgets." },
                    { n: "4", title: "Project Scheduling", desc: "Sequencing all phases and coordinating subcontractor timing." },
                    { n: "5", title: "Construction", desc: "Site preparation, demolition, and the progressive renovation phases." },
                    { n: "6", title: "Quality Inspection", desc: "Internal punch list resolution before client walkthrough." },
                    { n: "7", title: "Project Completion", desc: "Formal walkthrough, final payment, and celebration of the transformation." }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-4 p-4 border rounded-lg bg-background shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">{phase.n}</div>
                      <div>
                        <h4 className="font-semibold text-foreground italic">{phase.title}</h4>
                        <p className="text-sm text-muted-foreground">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "remodeling-terminology",
        label: "Terminology",
        icon: List,
        sections: [
          {
            title: "Key Industry Terms",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold">Term</TableHead>
                        <TableHead className="font-semibold">Definition</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { term: "Renovation", def: "Restoring/updating without changing fundamental structure." },
                        { term: "Remodel", def: "Changing the structure, layout, or purpose of a space." },
                        { term: "Rough-In", def: "Phase where pipes and wires are installed before closing walls." },
                        { term: "Punch List", def: "Minor items remaining to be corrected at the end of a project." },
                        { term: "Change Order", def: "Formal modification to the original contract scope." },
                        { term: "Permit", def: "Official approval from local building authority." }
                      ].map((item, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-bold text-primary italic">{item.term}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{item.def}</TableCell>
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
        id: "remodeling-roles",
        label: "Team Roles",
        icon: Users,
        sections: [
          {
            title: "Company Structure",
            content: (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "General Contractor", role: "License holder, strategist, and overall responsible party." },
                  { title: "Project Manager", role: "Operational leader, scheduler, and client communicator." },
                  { title: "Lead Carpenter", role: "On-site supervisor and precision craftsperson." },
                  { title: "Interior Designer", role: "Visual planner for elevations, layouts, and selections." },
                  { title: "Subcontractors", role: "Trade specialists (Plumbing, Electrical, HVAC, etc.)." },
                  { title: "Virtual Assistant", role: "Remote admin, CRM manager, and marketing support." }
                ].map((role, i) => (
                  <div key={i} className="p-4 border rounded-xl bg-card hover:bg-muted/30 transition-colors">
                    <h4 className="font-bold text-primary mb-1 flex items-center gap-2 italic">
                      <Target className="w-4 h-4 opacity-50" /> {role.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{role.role}</p>
                  </div>
                ))}
              </div>
            )
          }
        ]
      },
      {
        id: "remodeling-safety",
        label: "Safety & Codes",
        icon: Shield,
        sections: [
          {
            title: "Safety Standards",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  {[
                    { icon: Shield, label: "Eye Protection" },
                    { icon: ShieldCheck, label: "Hearing Protection", special: true },
                    { icon: Wind, label: "Respiratory Mask" },
                    { icon: Target, label: "Hard Hats" }
                  ].map((item, i) => (
                    <div key={i} className="p-3 border rounded-lg bg-destructive/[0.03] text-destructive flex flex-col items-center gap-2">
                      <Shield className="w-6 h-6 opacity-30" />
                      <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg text-amber-700 dark:text-amber-400 text-sm italic">
                  <strong>Hazardous Materials:</strong> Pre-1978 homes may contain Lead Paint, and pre-1980 homes may contain Asbestos. Proper abatement is mandatory.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "remodeling-importance",
        label: "Pro Value",
        icon: Star,
        sections: [
          {
            title: "Why Professional Services?",
            content: (
              <div className="space-y-4">
                <div className="p-4 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "The decision to hire a professional remodeling contractor rather than attempting to manage a project independently is one of the most significant factors determining whether a remodeling investment achieves its full potential."
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Quality Craftsmanship", desc: "Experience and tools that DIY cannot replicate." },
                    { title: "Code Compliance", desc: "Ensuring safety and legal standards are met." },
                    { title: "Trade Coordination", desc: "Managing the complex sequence of interdependent tasks." },
                    { title: "Property Value", desc: "Protecting and enhancing long-term market value." }
                  ].map((val, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-foreground italic">{val.title}</h4>
                        <p className="text-xs text-muted-foreground">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
