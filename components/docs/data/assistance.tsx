import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon, Thermometer, Wind, Wrench, AlertCircle, Info, Sparkles, Droplets, Star, Bug, Waves, Plug, Leaf, Bot, Cpu, Layers, Palette, Layout, Play, Search, Columns, Book, Hash } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";
import { DocGroup } from "./types";

const VideoCard = ({ title, videoId }: { title: string; videoId: string }) => (
  <div className="group space-y-3">
    <div className="relative aspect-video rounded-xl overflow-hidden border bg-muted shadow-sm group-hover:shadow-md transition-shadow">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="absolute inset-0 w-full h-full"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="flex items-start gap-2 px-1">
      <div className="mt-1 bg-primary/10 p-1.5 rounded-lg text-primary">
        <Play className="h-3 w-3 fill-current" />
      </div>
      <p className="text-sm font-semibold leading-snug line-clamp-2">{title}</p>
    </div>
  </div>
);

const VideoGrid = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="mt-8 pt-8 border-t border-dashed">
    {title && (
      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
        <Play className="h-4 w-4" />
        {title}
      </h4>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  </div>
);

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

                <VideoGrid title="Meeting Management Training">
                  <VideoCard 
                    title="How to Take Professional Meeting Minutes as an EA" 
                    videoId="SSnEquE7kFo" 
                  />
                  <VideoCard 
                    title="Creating the Perfect Meeting Agenda – EA Edition" 
                    videoId="GAJV5hyrCD4" 
                  />
                  <VideoCard 
                    title="How EAs Can Manage Action Items After a Meeting" 
                    videoId="aCrd793oIJw" 
                  />
                </VideoGrid>
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

                <VideoGrid title="Calendar Management Training">
                  <VideoCard 
                    title="Calendar Management for Executive Assistants – Full Guide" 
                    videoId="TLobeH5QLDw" 
                  />
                  <VideoCard 
                    title="How to Time Block Your Executive's Calendar" 
                    videoId="x9K80nyTltU" 
                  />
                  <VideoCard 
                    title="Managing Time Zones as an Executive Assistant" 
                    videoId="gsJMmk2I77U" 
                  />
                </VideoGrid>
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

                <VideoGrid title="Travel Coordination Training">
                  <VideoCard 
                    title="How to Book Executive Travel Like a Pro" 
                    videoId="lD4iI4HaWrs" 
                  />
                  <VideoCard 
                    title="Creating a Perfect Travel Itinerary as an EA" 
                    videoId="1dx8U8K9x6g" 
                  />
                  <VideoCard 
                    title="EA Tips: Managing Last-Minute Travel Changes" 
                    videoId="sauHLLdKvso" 
                  />
                </VideoGrid>
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

                <VideoGrid title="Inbox Management Training">
                  <VideoCard 
                    title="How to Manage an Executive's Email Inbox as a VA or EA" 
                    videoId="yy76ziWBDwo" 
                  />
                  <VideoCard 
                    title="Inbox Zero: A Step-by-Step Guide for Executive Assistants" 
                    videoId="WxLY5A1Vdnk" 
                  />
                  <VideoCard 
                    title="Gmail Tips for Executive Assistants in 2026" 
                    videoId="eVr0aMNdyQ4" 
                  />
                </VideoGrid>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-communication",
        label: "Exec. Communication",
        icon: MessageSquare,
        sections: [
          {
            title: "Executive Communication Standards",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 border rounded-xl bg-card">
                    <h4 className="font-bold text-primary mb-3">Matching Voice & Style</h4>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-muted-foreground">
                      <li>Use the executive's preferred greetings/closings.</li>
                      <li>Mirror their brevity or detail level.</li>
                      <li>Observe their signature formatting and emojis.</li>
                    </ul>
                  </div>
                  <div className="p-5 border rounded-xl bg-card">
                    <h4 className="font-bold text-primary mb-3">Email on Behalf</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Always state clearly that you are the assistant. Maintain professionalism 
                      while conveying the executive's intent accurately.
                    </p>
                  </div>
                </div>

                <VideoGrid title="Communication Training">
                  <VideoCard 
                    title="How to Write Emails on Behalf of Your Executive" 
                    videoId="kQBKfy3fAzQ" 
                  />
                  <VideoCard 
                    title="Communication Skills Every Executive Assistant Needs" 
                    videoId="CIHkuLgeBcA" 
                  />
                  <VideoCard 
                    title="How to Match Your Exec's Writing Style and Voice" 
                    videoId="amJZXjxnhTI" 
                  />
                </VideoGrid>
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
              </div>
            )
          }
        ]
      },
      {
        id: "ea-tools",
        label: "EA Tools & Tech",
        icon: Layout,
        sections: [
          {
            title: "Premium Tools & AI for EAs",
            content: (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-xl bg-card text-center">
                    <h5 className="font-bold text-sm mb-2">PRODUCTIVITY</h5>
                    <p className="text-xs text-muted-foreground">Notion, Slack, Trello, Google Workspace</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-card text-center">
                    <h5 className="font-bold text-sm mb-2">AI ASSISTANCE</h5>
                    <p className="text-xs text-muted-foreground">ChatGPT, Claude, Perplexity, Otter.ai</p>
                  </div>
                  <div className="p-4 border rounded-xl bg-card text-center">
                    <h5 className="font-bold text-sm mb-2">TRAVEL & TASKS</h5>
                    <p className="text-xs text-muted-foreground">TripIt, Expensify, ToDoist, 1Password</p>
                  </div>
                </div>

                <VideoGrid title="EA Tools & Tech Training">
                  <VideoCard 
                    title="Top 10 Tools Every Executive Assistant Should Know" 
                    videoId="tMPeFJz7zls" 
                  />
                  <VideoCard 
                    title="How to Use AI as an Executive Assistant in 2026" 
                    videoId="6H8lqlPqCcQ" 
                  />
                  <VideoCard 
                    title="Notion for Executive Assistants – Complete Walkthrough" 
                    videoId="9qGYsvD0A6I" 
                  />
                </VideoGrid>

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
