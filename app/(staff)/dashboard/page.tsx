"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, FileEdit, Receipt, Settings } from "lucide-react";
import { MAIN_DOCS, BUSINESS_GUIDES, AI_TOOLS } from "@/components/docs/data";
import { useStaffStore } from "@/store/staff.store";
import { useMyExpectedEarnings } from "@/hooks/eod/useStaffEod";
import { useMyInvoices } from "@/hooks/invoice/useStaffInvoice";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function StaffDashboardPage() {
  const { staff } = useStaffStore();
  const { data: earnings } = useMyExpectedEarnings();
  const { data: invoices } = useMyInvoices();

  const pendingEodCount = earnings?.pendingEodCount ?? 0;
  const pendingInvoiceCount =
    invoices?.filter((invoice) => invoice.status === "approved").length ?? 0;

  const quickActions = [
    {
      id: "submit-eod",
      label: "Submit EOD Report",
      href: "/eod?action=submit",
      icon: FileEdit,
      badge: pendingEodCount > 0 ? `${pendingEodCount} pending review` : undefined,
    },
    {
      id: "view-invoices",
      label: "View Invoices",
      href: "/invoice",
      icon: Receipt,
      badge: pendingInvoiceCount > 0 ? `${pendingInvoiceCount} pending` : undefined,
    },
    {
      id: "settings",
      label: "Account Settings",
      href: "/staff-settings",
      icon: Settings,
      badge: undefined as string | undefined,
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-8 pt-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            {getGreeting()}
            {staff?.firstName ? `, ${staff.firstName}` : ""}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Here&apos;s a quick jump to what you need.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Quick Actions</h3>
          <div className="grid grid-cols-1 divide-y overflow-hidden rounded-lg border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.id}
                  href={action.href}
                  className="group flex items-center gap-3 px-5 py-4 transition-colors hover:bg-muted/50"
                >
                  <Icon className="h-[18px] w-[18px] shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium">{action.label}</div>
                    {action.badge && (
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {action.badge}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Main Documentation</h3>
          <p className="text-muted-foreground text-sm">
            Core resources for onboarding and standard operating procedures.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {MAIN_DOCS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.id}
                  href={`/docs?tab=${link.id}`}
                  className="transition-all hover:scale-[1.02]"
                >
                  <Card className="h-full hover:border-primary/50 cursor-pointer transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {link.label}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold mb-1">{link.title}</div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {link.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Business Knowledge Guides</h3>
          <p className="text-muted-foreground text-sm">
            Specific training resources and guides for various business types.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_GUIDES.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.id}
                  href={`/docs?tab=${link.id}`}
                  className="transition-all hover:scale-[1.02]"
                >
                  <Card className="h-full hover:border-primary/50 cursor-pointer transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {link.label}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold mb-1">{link.title}</div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {link.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight">AI & Digital Tools</h3>
              <p className="text-muted-foreground text-sm">
                Essential applications and AI models to supercharge your workflow.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {AI_TOOLS.map((tool) => {
              return (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-[1.02]"
                >
                  <Card className="h-full hover:border-primary/50 cursor-pointer transition-colors group relative overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5 opacity-70">
                          {tool.category}
                        </span>
                        <CardTitle className="text-sm font-semibold">
                          {tool.label}
                        </CardTitle>
                      </div>
                      <div className="h-8 w-8 flex items-center justify-center bg-muted/50 rounded-lg p-1 group-hover:bg-primary/10 transition-colors overflow-hidden">
                        {tool.logo ? (
                          <img 
                            src={tool.logo} 
                            alt={`${tool.label} logo`} 
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-base font-bold mb-1 group-hover:text-primary transition-colors">{tool.title}</div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {tool.desc}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
