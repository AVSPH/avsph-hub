"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Wrench, Users } from "lucide-react";
import { MAIN_DOCS, BUSINESS_GUIDES, AI_TOOLS } from "@/components/docs/data";

export default function StaffDashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-8 pt-6">
      <div className="space-y-8">
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

        <div className="mt-8">
          <h3 className="text-xl font-semibold tracking-tight mb-4">Coming Soon</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Placeholder for Tips */}
            <Card className="h-full opacity-60 border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tips & Best Practices
                </CardTitle>
                <Lightbulb className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold mb-1">Coming Soon</div>
                <p className="text-xs text-muted-foreground">
                  Helpful advice for productivity and client management.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full opacity-60 border-dashed">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Client CRM
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold mb-1">Coming Soon</div>
                <p className="text-xs text-muted-foreground">
                  Manage client information and project status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
