import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({
  icon: Icon,
  label,
  value,
  sub,
  loading,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
  loading?: boolean;
  accent?: "default" | "success" | "warning";
}) {
  const valueClass =
    accent === "success"
      ? "text-success"
      : accent === "warning"
        ? "text-warning"
        : "";
  return (
    <Card className="gap-0 py-4 shadow-sm">
      <CardContent className="flex items-start justify-between gap-2">
        <div className="min-w-0 space-y-1.5">
          <p className="truncate text-sm font-medium text-muted-foreground">
            {label}
          </p>
          {loading ? (
            <div className="h-7 w-20 animate-pulse rounded bg-muted/60" />
          ) : (
            <p
              className={`text-2xl font-bold tabular-nums leading-none ${valueClass}`}
            >
              {value}
            </p>
          )}
          {sub && !loading && (
            <p className="truncate text-xs text-muted-foreground">{sub}</p>
          )}
        </div>
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
      </CardContent>
    </Card>
  );
}

export function usd(value: number): string {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(value);
}
