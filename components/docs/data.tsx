import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, CreditCard as CardIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";

export interface DocSection {
  title: string;
  content: ReactNode;
}

export interface DocCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  sections: DocSection[];
}

export interface DocGroup {
  title: string;
  items: DocCategory[];
}

export const onboardingSections: DocGroup[] = [
  {
    title: "ONBOARDING",
    items: [
      {
        id: "onboarding-setup",
        label: "Onboarding Setup",
        icon: BookOpen,
        sections: [
          {
            title: "1. Create Company Email",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Create your company email, format is <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">yourname.avs@gmail.com</code> (example: <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">juandelacruz.avs@gmail.com</code>).
                </p>
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg">
                  <p className="font-medium">This new email will be utilized for client and AVSPH communications. You are not allowed to use personal email.</p>
                </div>
              </div>
            )
          },
          {
            title: "2. Fill out Database",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Please fill out the AVSPH VA Database, the information gathered is solely for agency purposes.</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSch8623fnUZMxeU3l1TU47Amxg70qnNbz_SmBYhc3jKssks-g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Fill out Form
                </a>
              </div>
            )
          },
          {
            title: "3. Inform HR",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Inform HR of your new email by sending an email to <a href="mailto:admin@advancedvirtualstaff.com" className="text-primary hover:underline">admin@advancedvirtualstaff.com</a></p>

                <div className="bg-muted/50 p-4 rounded-lg border font-mono text-sm space-y-4 text-foreground relative">
                  <div>
                    <span className="font-semibold text-muted-foreground">Subject:</span> New VA Email
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Body:</span>
                    <br /><br />
                    Good day,
                    <br /><br />
                    This is (yourname) and I am now using this email for company use. I was hired as (position). My client is (name of client) and I am working (# of hours).
                    <br /><br />
                    Thank you!
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "4. Client Kick-off & Hand-off",
            content: (
              <div className="space-y-4 text-muted-foreground mt-4 p-4 border border-dashed rounded-lg bg-muted/20">
                <p className="italic">Note: Placeholders for client introduction process.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Introduction:</strong> How to initiate the first communication with your client.</li>
                  <li><strong className="text-foreground">Scheduling:</strong> Arranging the initial kick-off call.</li>
                  <li><strong className="text-foreground">First Week Expectations:</strong> What to prepare for in your first 5 days.</li>
                </ul>
              </div>
            )
          }
        ]
      }
    ]
  },
    {
    title: "GETTING STARTED",
    items: [
      {
        id: "getting-started",
        label: "Getting Started",
        icon: BookOpen,
        sections: [
          {
            title: "Tools & Work Setup",
            content: (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-primary">MUST HAVE:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Desktop/laptop with reliable specs</li>
                    <li>20 Mbps stable internet & backup connection</li>
                    <li>USB noise-cancelling headset with mic</li>
                    <li>Quiet, professional work environment</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 border border-dashed rounded-lg bg-muted/20 text-muted-foreground">
                  <h4 className="font-semibold text-foreground mb-2">Team Logger Setup</h4>
                  <p className="italic mb-2">Note: Placeholder for Team Logger setup instructions.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Where to download the application</li>
                    <li>How to log in using your AVS credentials</li>
                    <li>Configuring idle time and screenshot settings</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Work Hours & Schedule",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Shifts typically run from 11 PM to 9 AM PH time, but can vary per client.</p>
                <p>Changes require mutual agreement and AVS approval.</p>
                <p>You may be assigned new clients - each change comes with a separate contract.</p>
              </div>
            ),
          },
          {
            title: "Attendance & Downtime",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>Notify HR via WhatsApp (direct) for absences, lateness, or emergencies.</p>
                <p>All planned leaves must be requested at least 1 month in advance.</p>
                <p>Sick/personal leaves: Max of 2 consecutive days, up to 5 paid leaves per year (after 1 year).</p>

                <div className="mt-4 p-4 border border-dashed rounded-lg bg-muted/20">
                  <h4 className="font-semibold text-foreground mb-2">How to Request Leave</h4>
                  <p className="italic mb-2">Note: Placeholder for direct leave filing instructions.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Where to find the Leave Request Form / Email template</li>
                    <li>Who needs to approve the request (HR and Client)</li>
                    <li>Guidelines for emergency versus scheduled leaves</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Daily Operations & Reporting",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Login/Logout daily in the AVS WhatsApp group.</li>
                  <li>Submit daily EODs (End of Day reports) with completed tasks and work hours.</li>
                  <li>Use Team Logger unless the client opts out.</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Meetings & Check-ins",
            content: (
              <div className="space-y-2">
                <p className="font-semibold text-primary">ATTEND:</p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>1-2 Team Meetings per quarter</li>
                  <li>5-10 minute weekly Kumustahan with HR</li>
                  <li>2 Kumustahan sessions must be attended before bi-monthly compensation is released</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Communication & Support",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Respond within 1-2 hrs during your work schedule.</li>
                  <li>Notify HR if late or offline. Through WhatsApp.</li>
                  <li>Keep messages clear & professional.</li>
                </ul>

                <div className="p-4 border border-dashed rounded-lg bg-muted/20">
                  <h4 className="font-semibold text-foreground mb-2">Escalation & Support Contacts</h4>
                  <p className="italic mb-2">Note: Placeholder for specific contact information.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong className="text-foreground">Payroll Issues:</strong> [Payroll Email/Contact]</li>
                    <li><strong className="text-foreground">Client Disputes/Issues:</strong> [Account Manager Contact]</li>
                    <li><strong className="text-foreground">Technical Support:</strong> [IT Contact]</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "policies",
        label: "Policies and Regulation",
        icon: ShieldCheck,
        sections: [
          {
            title: "Confidentiality",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>All client and company information is strictly confidential.</li>
                  <li>Do not disclose or use confidential info without written consent from AVS.</li>
                  <li>All files, documents, and records must be returned upon contract termination.</li>
                  <li><span className="font-medium text-destructive">Breaches can result in liquidated damages up to P500,000</span></li>
                </ul>
              </div>
            ),
          },
          {
            title: "Restrictions & Compliance",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Do NOT work for AVS clients outside the company.</li>
                  <li>Do NOT engage with AVS competitors during your contract.</li>
                  <li>Do NOT solicit or accept side jobs from clients or co-VAS.</li>
                  <li>Do NOT receive direct payments from clients.</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Termination Guidelines",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Voluntary:</strong> Requires 14-day notice and fulfillment of duties - or payout will be forfeited.</li>
                  <li><strong className="text-foreground">Involuntary:</strong> Breach of contract or unethical behavior may lead to immediate termination.</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "payment",
        label: "Payment and Benefits",
        icon: CreditCard,
        sections: [
          {
            title: "Compensation & Bonuses",
            content: (
              <div className="space-y-4 text-muted-foreground p-4 bg-muted/30 rounded-lg border">
                <h3 className="text-lg font-medium text-foreground mb-2">General Terms</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Rate:</strong> Depends on client agreement.</li>
                  <li><strong className="text-foreground">Schedule:</strong> Bi-monthly payouts. Any delays will be communicated 3 days prior.</li>
                  <li><strong className="text-foreground">Requirement:</strong> Invoice submission via email is required before each payout.</li>
                </ul>

                <div className="mt-4 p-4 border border-dashed rounded-lg bg-background">
                  <h4 className="font-semibold text-foreground mb-2">Invoice Submission Instructions</h4>
                  <p className="italic mb-2 text-sm">Note: Placeholder for invoicing procedure.</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong className="text-foreground">Where to send:</strong> billing@advancedvirtualstaff.com</li>
                    <li><strong className="text-foreground">Subject Line Format:</strong> Invoice - [Your Name] - [Cut-off Date]</li>
                    <li><strong className="text-foreground">Cut-off Dates:</strong> 15th and 30th of the month.</li>
                    <li><strong className="text-foreground">Template:</strong> Link to approved invoice template.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Incentives After 1 Year",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Loyalty Bonus", value: "P10,000", desc: "Annual reward" },
                  { label: "Quarterly Bonus", value: "P2,000", desc: "Every 3 months" },
                  { label: "WiFi Allowance", value: "P1,000", desc: "Monthly subsidy" },
                  { label: "Medical Reimbursement", value: "P5,000", desc: "Health support" },
                  { label: "Year-End Bonus", value: "Bonus", desc: "Every December" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-4 bg-background border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                    <span className="text-2xl font-bold text-primary mt-1">{item.value}</span>
                    <span className="text-xs text-muted-foreground mt-2">{item.desc}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Leave Entitlement",
            content: (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-4 border rounded-lg bg-primary/5 border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Annual Allowance</h4>
                  <p className="text-3xl font-bold">5 Days</p>
                  <p className="text-sm text-muted-foreground mt-1">Paid sick/personal leaves</p>
                </div>
                <div className="flex-1 p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Rules</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground list-disc pl-4">
                    <li>Max 2 days consecutively</li>
                    <li>Must be filed 1 month in advance</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Conversion Rate Policy",
            content: (
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="font-semibold">If Foreign Exchange Rate is</TableHead>
                      <TableHead className="font-semibold">Conversion Rate Used</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Below Php 56</TableCell>
                      <TableCell>Php 53</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Exactly Php 56</TableCell>
                      <TableCell>Php 54</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Exactly Php 57</TableCell>
                      <TableCell>Php 55</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            )
          }
        ]
      }
    ]
  },
  {
    title: "PLATFORM GUIDE",
    items: [
      {
        id: "dashboard-login",
        label: "Dashboard Login",
        icon: Key,
        sections: [
          {
            title: "Accessing the Platform",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>After your contract is confirmed, HR will send you an email containing your credentials for the Staff Dashboard. Keep an eye on your new company email for these details.</p>
                <div className="bg-muted/30 p-4 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-2">How to Login:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Navigate to the AVS Dashboard Login Page.</li>
                    <li>Ensure the <strong className="text-foreground">Staff</strong> tab is selected at the top of the login form.</li>
                    <li>Enter the Email Address and temporary Password from the HR email.</li>
                    <li>Click <strong className="text-foreground">Sign In</strong>.</li>
                    <li><em>Note: Upon your first login, or as directed by HR, you may need to update your password for security purposes.</em></li>
                  </ol>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "daily-eods",
        label: "Daily EODs",
        icon: Clock,
        sections: [
          {
            title: "Submitting Your EOD (End of Day)",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Once you are logged in and start working, you are required to submit an End of Day (EOD) report daily through the Staff Dashboard to track your tasks and hours.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <h4 className="font-semibold text-primary mb-1">EOD Page Overview</h4>
                    <p className="text-sm">On your EOD page, you can see your Estimated Pay, count of Approved/Pending EODs, and your Next Payout date at the top.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-1">Managing EODs</h4>
                    <p className="text-sm">You can view your past submissions in the table, check their status, and filter them by date or status.</p>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-3">EOD Submission Guide:</h4>
                  <ol className="list-decimal pl-5 space-y-3 mb-4">
                    <li>Go to the <strong className="text-foreground">Daily EODs</strong> section from your dashboard sidebar.</li>
                    <li>Click on the <strong className="text-foreground">Submit EOD</strong> button.</li>
                    <li>Fill out all the required fields in the submission form accurately.</li>
                  </ol>

                  <div className="mt-4 p-4 border border-primary/20 bg-background rounded-md space-y-2">
                    <p className="font-semibold text-primary underline mb-2">Form Fields Overview:</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong className="text-foreground">Date:</strong> The specific date the work was performed (defaults to today).</li>
                      <li><strong className="text-foreground">Total Hours Worked:</strong> Your total shift hours (e.g., 8).</li>
                      <li><strong className="text-foreground">Regular / Overtime / Night Diff Hours:</strong> Breakdown of your hours. <em>(If regular hours are left blank, the system treats your total hours as regular hours).</em></li>
                      <li><strong className="text-foreground">Tasks Completed:</strong> A detailed description of what you accomplished today. (Required)</li>
                      <li><strong className="text-foreground">Challenges:</strong> Any blockers or issues you encountered.</li>
                      <li><strong className="text-foreground">Next Day Plan:</strong> What you plan to work on during your next shift.</li>
                      <li><strong className="text-foreground">Additional Notes:</strong> Any other information you need to relay.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },
];

export const homeSections: DocGroup[] = [
  {
    title: "GETTING STARTED",
    items: [
      {
        id: "home-welcome",
        label: "Welcome",
        icon: Home,
        sections: [
          {
            title: "Welcome to AVS Documentation",
            content: (
              <div className="space-y-8 py-4">
                <div className="space-y-4 text-center">
                  <h2 className="text-4xl font-extrabold tracking-tight text-primary">AVS Command Center</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your complete guide to roles, responsibilities, and operating procedures within the AVS ecosystem.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors group">
                    <BookOpen className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">Onboarding</h3>
                    <p className="text-sm text-muted-foreground mb-4">Master the foundational expectations and core responsibilities of a Virtual Assistant.</p>
                    <div className="text-xs font-bold text-primary flex items-center gap-1">GO TO ONBOARDING <Zap className="h-3 w-3" /></div>
                  </div>
                  
                  <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors group">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">Executive Assistance</h3>
                    <p className="text-sm text-muted-foreground mb-4">Deep dive into the EA Playbook for managing high-level executives efficiently.</p>
                    <div className="text-xs font-bold text-primary flex items-center gap-1">GO TO EA PLAYBOOK <Zap className="h-3 w-3" /></div>
                  </div>

                  <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors group">
                    <Key className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">Systems & Tools</h3>
                    <p className="text-sm text-muted-foreground mb-4">Learn about the platforms and tools used to keep the operations running smoothly.</p>
                    <div className="text-xs font-bold text-primary flex items-center gap-1">COMING SOON <Clock className="h-3 w-3" /></div>
                  </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-dashed text-center">
                   <p className="text-muted-foreground italic">"Simplicity is the ultimate sophistication. Use these docs to master your craft."</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];

export const assistanceSections: DocGroup[] = [
  {
    title: "OPERATING GUIDE",
    items: [
      {
        id: "ea-objective",
        label: "Core Objective",
        icon: Target,
        sections: [
          {
            title: "EXECUTIVE ASSISTANT PLAYBOOK",
            content: (
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-bold text-primary mb-2">EXECUTIVE ASSISTANT PLAYBOOK</h2>
                  <p className="text-lg text-muted-foreground font-medium">Role Overview & Operating Guide</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    1. THE EA’S CORE OBJECTIVE
                  </h3>
                  <p className="text-lg leading-relaxed">Your job is to protect the CEO’s time, energy, and focus so they can prioritize revenue, leadership, and high-impact decisions.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Protect the CEO’s Time</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Filter requests.</li>
                        <li>Prioritize what truly matters.</li>
                        <li>Say no (kindly) when needed.</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Calendar Efficiency</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Clear, detailed, and organized.</li>
                        <li>No missing information.</li>
                        <li>No surprises.</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Clear Communication</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Every email gets a response.</li>
                        <li>Clear “Yes” or respectful “Not at this time.”</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Be Proactive</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Anticipate needs.</li>
                        <li>Think ahead (hour → day → week → quarter).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-dashed">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      Prioritize Revenue
                    </h4>
                    <p className="text-sm">Health first. Client commitments next. Revenue-producing activities always take priority.</p>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Capture Preferences
                    </h4>
                    <p className="text-sm italic">Ask once. Save it. Reference it. Never repeat unnecessary questions.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-responsibilities",
        label: "Responsibilities",
        icon: List,
        sections: [
          {
            title: "Key Responsibilities",
            content: (
              <div className="space-y-6">
                <p className="text-lg">You are the buffer between chaos and clarity. You are responsible for:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Email & Communication Filtering",
                    "Calendar & Meeting Management",
                    "Travel Planning",
                    "Event & Speaking Coordination",
                    "Inbox Processing",
                    "Personal Appointments",
                    "Networking Coordination",
                    "Project Tracking",
                    "Financial Monitoring",
                    "Confidentiality",
                    "Team Liaison Communication",
                    "Problem Prevention"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 border rounded-md bg-background text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-cadence",
        label: "Task Cadence",
        icon: Clock,
        sections: [
          {
            title: "3. TASK CADENCE (Daily / Weekly / Monthly)",
            content: (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary border-b pb-2">DAILY RESPONSIBILITIES</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Coffee className="h-4 w-4" /> Morning (Start of Day)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                        <li><strong>Review today’s calendar</strong> (every event). Ensure: Title, Location, Agenda, Contact info, Confirmed attendees.</li>
                        <li><strong>Process CEO inbox</strong>. Goal: Inbox at 0 by 10 AM (and again by 5 PM).</li>
                        <li>Process your inbox & review SMS (10 AM).</li>
                        <li>Add all requests to your to-do list.</li>
                        <li>Update Admin Meeting agenda & prepare for meetings.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4" /> During the Day
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Schedule requested meetings & confirm engagements.</li>
                        <li>Book travel & handle document signatures.</li>
                        <li>Complete Slack/Voxer/SMS requests.</li>
                        <li>Briefly review the calendar 6 weeks ahead.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Clock className="h-4 w-4" /> End of Day (Sign Off)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Inbox back to zero & address all open threads.</li>
                        <li>Write notes on unfinished items.</li>
                        <li>Prepare tomorrow’s to-do list & review SMS (4 PM).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 border rounded-xl bg-muted/10">
                    <h3 className="font-bold text-primary mb-3">WEEKLY RESPONSIBILITIES</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Audit CEO calendar 6 weeks ahead.</li>
                      <li>Review client programs & upcoming travel.</li>
                      <li>Weekly meetings with CEO's spouse (calendar review).</li>
                      <li><strong>On Fridays:</strong> Audit next week’s meetings thoroughly.</li>
                    </ul>
                  </div>
                  <div className="p-5 border rounded-xl bg-muted/10">
                    <h3 className="font-bold text-primary mb-3">MONTHLY / QUARTERLY</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Monthly:</strong> Review travel 2 months ahead & suspense reports.</li>
                      <li><strong>Quarterly:</strong> Schedule Family Boardroom Meeting & spouse retreats.</li>
                      <li><strong>Annual:</strong> Dentist appointments & recurring personal obligations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-meetings",
        label: "Admin Meetings",
        icon: Users,
        sections: [
          {
            title: "Admin Meeting Structure",
            content: (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Frequency</h4>
                    <p className="text-sm">4-6 weeks: Daily</p>
                    <p className="text-sm">After 6 weeks: 3x/week</p>
                    <p className="text-sm">After 3 months: Weekly</p>
                  </div>
                  <div className="flex-1 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Title Format</h4>
                    <code className="text-xs bg-background p-1 block border rounded mt-1">
                      Admin Meeting – [Your Name] & CEO – [Date]
                    </code>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-foreground">Agenda Structure (In Order):</h4>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li className="text-sm"><strong>Meeting Action Items</strong> (from prior meetings)</li>
                    <li className="text-sm"><strong>Calendar Review</strong> (screen shared)</li>
                    <li className="text-sm"><strong>Follow-ups</strong> from Previous Meetings</li>
                    <li className="text-sm"><strong>CEO Agenda</strong> (his priorities)</li>
                    <li className="text-sm"><strong>Closing the Loop</strong> (completed tasks)</li>
                    <li className="text-sm"><strong>Assistant Review</strong> (emails/opportunities)</li>
                    <li className="text-sm"><strong>Projects</strong> (top priority first – 3 solution options)</li>
                    <li className="text-sm"><strong>Questions for CEO</strong></li>
                  </ol>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg border">
                  <h4 className="font-bold mb-2">How to Run the Meeting:</h4>
                  <p className="text-sm text-muted-foreground italic mb-3">Screen share. Be concise. Summarize clearly. Take notes live. Ask questions.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-calendar",
        label: "Calendar Rules",
        icon: Calendar,
        sections: [
          {
            title: "Calendar Management",
            content: (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-primary border-b pb-2 mb-4">CEO’s Ideal Week</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-bold mb-2">Monday – Friday</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><strong>Mornings:</strong> Creative work + workouts</li>
                        <li><strong>Lunch:</strong> 12:00 – 12:30</li>
                        <li><strong>Afternoons:</strong> Meetings</li>
                        <li><strong>Evenings:</strong> Family time</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30">
                      <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">Weekends</h5>
                      <p className="text-sm italic">No business scheduled. Family time is non-negotiable.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground">Scheduling Rules & Priority</h4>
                    <div className="space-y-2">
                       <p className="text-xs font-bold uppercase text-muted-foreground">Default Lengths:</p>
                       <ul className="text-sm space-y-1">
                          <li>15 min → Quick contact</li>
                          <li>20 min → <strong>Standard/Default</strong></li>
                          <li>55 min → Podcast/interview</li>
                          <li>60 min → Masterclass</li>
                       </ul>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xs font-bold uppercase text-muted-foreground">Priority Order:</p>
                       <ol className="list-decimal pl-5 text-sm space-y-1">
                          <li>Health (non-negotiable)</li>
                          <li>Client commitments</li>
                          <li>CEO requested meetings</li>
                          <li>Team requests</li>
                          <li>Outside requests</li>
                       </ol>
                    </div>
                  </div>

                  <div className="p-5 bg-primary/5 rounded-xl border border-primary/20 space-y-3">
                    <h4 className="font-bold text-primary">Invite Requirements:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Clear subject/title</li>
                      <li>Start/end time + correct timezone</li>
                      <li>Precise Location & Phone number</li>
                      <li><strong>Agenda (mandatory)</strong></li>
                      <li>Guests added & correct color category</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30">
                      <p className="text-xs font-bold text-red-700 dark:text-red-400 flex items-center gap-1">
                        <Zap className="h-3 w-3" /> SAME-DAY CHANGES
                      </p>
                      <p className="text-xs mt-1 italic">Must SMS CEO immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-podcasts",
        label: "Podcasts & Speaking",
        icon: Mic,
        sections: [
          {
            title: "Podcasts & Speaking Engagements",
            content: (
              <div className="space-y-6">
                <div className="p-4 bg-muted/30 rounded-lg border">
                  <h4 className="font-bold mb-3">Vetting Checklist:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Reach", "Reviews", "Social Following", "Past Guests", "Prior Connection", "In-person available"].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-background border rounded-full text-xs font-medium">{item}</span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold">Required Calendar Info:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Phone number</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Apple Podcast link</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Instagram + LinkedIn</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Connection context</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 border rounded-lg bg-primary/5">
                  <h4 className="font-bold text-primary mb-2 italic">After Podcast:</h4>
                  <p className="text-sm">Send thank-you email, request raw video, and CC videographer.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-travel",
        label: "Travel Management",
        icon: Plane,
        sections: [
          {
            title: "Travel Planning & Management",
            content: (
              <div className="space-y-8">
                <div className="flex items-center justify-center gap-12 p-6 bg-muted/20 rounded-xl border-dashed border-2">
                   <div className="text-center">
                      <p className="text-xs font-bold text-muted-foreground uppercase">Domestic</p>
                      <p className="text-2xl font-bold">3-4 Weeks</p>
                   </div>
                   <div className="h-10 w-px bg-border"></div>
                   <div className="text-center">
                      <p className="text-xs font-bold text-muted-foreground uppercase">International</p>
                      <p className="text-2xl font-bold">6+ Weeks</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Booking Essentials (Immediate)</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2"><PlaneTakeoff className="h-4 w-4 mt-0.5 text-primary" /> Block travel dates + day before/after</li>
                      <li className="flex items-start gap-2"><Shield className="h-4 w-4 mt-0.5 text-primary" /> Create Google Drive "TRIP" file</li>
                      <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5 text-primary" /> Add extended all-day events</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Trip File must include:</h4>
                    <ul className="text-sm grid grid-cols-2 gap-2">
                      <li>Flights / Hotel</li>
                      <li>Itinerary</li>
                      <li>Contacts</li>
                      <li>Documents</li>
                      <li>Gym options</li>
                      <li>Reservations</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-red-600/5 border border-red-600/20 rounded-lg">
                   <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Emergency: Delayed or Canceled Flights
                   </h4>
                   <p className="text-sm leading-relaxed">
                     Call airline immediately. Request refund to card (not credit). Cancel hotel/transport. Notify spouse. Update calendar fully.
                   </p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-inbox",
        label: "Inbox Management",
        icon: Mail,
        sections: [
          {
            title: "Processing CEO Inbox",
            content: (
              <div className="space-y-6">
                <p className="text-lg italic font-medium">Goal: Inbox at zero twice daily. The CEO sees only what requires his attention.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold text-primary mb-3">Email Labels</h4>
                    <div className="flex flex-col gap-1 text-sm">
                       {["To Respond", "Responded", "To Review", "Waiting On", "Financials", "Investment", "Receipts", "Newsletters", "Archive"].map((l, i) => (
                         <div key={i} className="px-2 py-1 bg-muted/50 rounded">{l}</div>
                       ))}
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold text-primary mb-3">What Goes to "Review"</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Speaking invites</li>
                      <li>Investment opportunities</li>
                      <li>Travel requests</li>
                      <li>Unclear personal emails</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold text-primary mb-3">Handle yourself</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-green-600 dark:text-green-400">
                      <li>Scheduling</li>
                      <li>Declining opportunities</li>
                      <li>Confirmations</li>
                      <li>Basic replies</li>
                      <li>Unsubscribing</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl space-y-3">
                  <h4 className="font-bold text-primary">Response Template</h4>
                  <p className="text-sm italic p-4 bg-background border rounded-lg">
                    "This is [Your Name], [CEO]’s assistant. I got to your email before he did and thought you’d appreciate a speedy reply..."
                  </p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-sms-house",
        label: "SMS & House Coord.",
        icon: MessageSquare,
        sections: [
          {
            title: "SMS Processing & House Manager",
            content: (
              <div className="space-y-8">
                 <div className="space-y-4">
                    <h4 className="text-lg font-bold border-l-4 border-primary pl-4">SMS Processing (10 AM & 4 PM)</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Read all messages.</li>
                      <li>Add tasks to the to-do list.</li>
                      <li>Respond with action taken & close the loop.</li>
                    </ol>
                 </div>

                 <div className="p-6 border rounded-xl bg-muted/10 space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                       <Home className="h-5 w-5 text-primary" /> Coordinating with House Manager
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>Work with the House Manager to handle:</p>
                      <ul className="list-disc pl-5">
                        <li>Deliveries & Returns</li>
                        <li>Picking up children</li>
                        <li>House events</li>
                      </ul>
                      <p className="mt-4 font-bold text-primary">Pro Tip:</p>
                      <p className="italic">Add her as “Optional” to home events. Confirm availability outside normal hours 2 weeks ahead.</p>
                    </div>
                 </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-purchasing-mindset",
        label: "Purchasing & Mindset",
        icon: ShoppingBag,
        sections: [
          {
            title: "Purchasing, Gifting & EA Mindset",
            content: (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary">Large Purchases / Wire</h4>
                    <p className="text-sm text-muted-foreground">If over a certain amount:</p>
                    <ul className="list-decimal pl-5 text-sm space-y-1">
                      <li>Confirm with CEO</li>
                      <li>Gather banking details</li>
                      <li>Plan 2-3 days ahead</li>
                      <li>Confirm completion</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary">Gift Checklist</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Research recipient</li>
                      <li>Get CEO approval</li>
                      <li>Purchase & Track shipment</li>
                      <li>Update CEO</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl relative overflow-hidden">
                   <div className="relative z-10 space-y-4">
                      <h4 className="text-2xl font-bold flex items-center gap-2">
                         <ShieldCheck className="h-6 w-6" /> FINAL EA MINDSET
                      </h4>
                      <p className="text-lg opacity-90 leading-relaxed font-medium">You are a filter, a protector of time, a strategist, a systems thinker, and a problem preventer.</p>
                      <div className="h-px bg-primary-foreground/20 w-full my-4"></div>
                      <p className="text-xl font-bold italic">"If the CEO never experiences friction, you’re doing your job correctly."</p>
                   </div>
                   <Shield className="absolute -bottom-10 -right-10 h-64 w-64 opacity-10" />
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];

export const docsData: Record<string, DocGroup[]> = {
  home: homeSections,
  onboarding: onboardingSections,
  assistance: assistanceSections,
};
