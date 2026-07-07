"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Loader2,
  FileSpreadsheet,
  CalendarDays,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useBusinessById } from "@/hooks/useBusiness";
import { useEodSummaryByBusiness } from "@/hooks/eod/useAdminEod";
import { useStaffByBusiness } from "@/hooks/useStaff";
import { useCompensationProfiles } from "@/hooks/useCompensationProfile";
import type {
  EodSummaryPeriodType,
  EodSummaryQuery,
  EodSummaryItem,
} from "@/types/eod.types";
import type { CompensationProfile } from "@/types/compensation-profile.types";
import { Button } from "@/components/ui/button";
import { RefreshButton } from "@/components/ui/refresh-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getTodayIso(): string {
  return new Date().toISOString().split("T")[0];
}

function formatHours(h: number): string {
  return `${h.toFixed(2)}h`;
}

function formatMoney(amount: number, currency = "PHP"): string {
  try {
    return new Intl.NumberFormat(currency === "PHP" ? "en-PH" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    // Fallback for unknown currency codes
    return `${currency} ${amount.toFixed(2)}`;
  }
}

// Resolved pay rate for a staff member, derived from their active
// compensation profile (preferred) or their hourly salary as a fallback.
interface StaffRate {
  hourlyRate: number;
  overtimeMultiplier: number;
  nightDifferentialMultiplier: number;
  currency: string;
}

// Estimated pay for a single period row. All hours are paid at the base
// rate, with the *extra* premium added on top for overtime and night
// differential hours so totals stay correct regardless of how the hour
// buckets overlap.
function estimatePay(row: EodSummaryItem, rate: StaffRate | undefined): number | null {
  if (!rate) return null;
  const base = row.totalHoursWorked * rate.hourlyRate;
  const overtimePremium =
    row.totalOvertimeHours * rate.hourlyRate * (rate.overtimeMultiplier - 1);
  const nightPremium =
    row.totalNightDifferentialHours *
    rate.hourlyRate *
    (rate.nightDifferentialMultiplier - 1);
  return base + overtimePremium + nightPremium;
}

const PERIOD_LABELS: Record<EodSummaryPeriodType, string> = {
  weekly: "Weekly (Mon–Sun)",
  "bimonthly-1": "1st – 15th",
  "bimonthly-2": "16th – End of Month",
  monthly: "Monthly",
};

export default function EodReportsPage() {
  const params = useParams();
  const businessId = params.id as string;

  const [periodType, setPeriodType] = useState<EodSummaryPeriodType>("weekly");
  const [referenceDate, setReferenceDate] = useState<string>(getTodayIso());
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const limit = 20;

  const query: EodSummaryQuery = useMemo(
    () => ({
      periodType,
      referenceDate,
      page: String(page),
      limit: String(limit),
      ...(search && { search }),
    }),
    [periodType, referenceDate, page, search],
  );

  const { data: business, isLoading: isBusinessLoading } =
    useBusinessById(businessId);
  const {
    data,
    isLoading,
    isError,
    refetch: refetchSummary,
    isFetching: isFetchingSummary,
  } = useEodSummaryByBusiness(businessId, query);

  // Staff records (for salary fallback + compensation profile mapping) and
  // active compensation profiles, used to attach a pay rate to each row.
  const { data: staffData } = useStaffByBusiness(businessId, { limit: 1000 });
  const { data: profilesData } = useCompensationProfiles({
    businessId,
    isActive: true,
  });

  const rows = data?.data ?? [];
  const pagination = data?.pagination;

  // Build a staffId -> pay rate lookup. Prefer the staff member's active
  // compensation profile; fall back to their hourly salary if no profile.
  const rateByStaffId = useMemo(() => {
    const profileById = new Map<string, CompensationProfile>(
      (profilesData ?? []).map((p) => [p._id, p]),
    );
    const map = new Map<string, StaffRate>();

    for (const staff of staffData?.data ?? []) {
      const profile = staff.compensationProfileId
        ? profileById.get(staff.compensationProfileId)
        : undefined;

      if (profile) {
        map.set(staff._id, {
          hourlyRate: profile.hourlyRate,
          overtimeMultiplier: profile.overtimeRateMultiplier || 1,
          nightDifferentialMultiplier:
            profile.nightDifferentialRateMultiplier || 1,
          currency: profile.currency || "PHP",
        });
      } else if (staff.salaryType === "hourly" && staff.salary) {
        map.set(staff._id, {
          hourlyRate: staff.salary,
          overtimeMultiplier: 1,
          nightDifferentialMultiplier: 1,
          currency: "PHP",
        });
      }
    }
    return map;
  }, [staffData, profilesData]);

  // Currency shown in headers/totals — assume a single currency per business.
  const displayCurrency =
    profilesData?.[0]?.currency ??
    [...rateByStaffId.values()][0]?.currency ??
    "PHP";

  // Page totals for the footer tally.
  const totals = useMemo(() => {
    let totalHours = 0;
    let totalPay = 0;
    let hasPay = false;
    for (const row of rows) {
      totalHours += row.totalHoursWorked;
      const pay = estimatePay(row, rateByStaffId.get(row.staffId));
      if (pay !== null) {
        totalPay += pay;
        hasPay = true;
      }
    }
    return { totalHours, totalPay, hasPay };
  }, [rows, rateByStaffId]);

  const exportToExcel = async () => {
    if (!rows.length) {
      toast.error("No data to export");
      return;
    }

    try {
      setIsExporting(true);
      const XLSX = await import("xlsx");

      const exportRows = rows.map((row: EodSummaryItem) => {
        const rate = rateByStaffId.get(row.staffId);
        const pay = estimatePay(row, rate);
        return {
          "Staff Name": row.staffName,
          "Staff Email": row.staffEmail ?? "",
          "Total Hours": row.totalHoursWorked,
          "Regular Hours": row.totalRegularHours,
          "Overtime Hours": row.totalOvertimeHours,
          "Night Differential Hours": row.totalNightDifferentialHours,
          "Hourly Rate": rate?.hourlyRate ?? "",
          Currency: rate?.currency ?? "",
          "Estimated Pay": pay !== null ? Number(pay.toFixed(2)) : "",
          "EOD Count": row.eodCount,
          "Approved Count": row.approvedCount,
          "Period Start": row.periodStart,
          "Period End": row.periodEnd,
        };
      });

      const worksheet = XLSX.utils.json_to_sheet(exportRows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "EOD Report");

      const today = getTodayIso();
      XLSX.writeFile(workbook, `eod-report-${businessId}-${today}.xlsx`);
      toast.success("Excel downloaded");
    } catch {
      toast.error("Failed to export Excel file");
    } finally {
      setIsExporting(false);
    }
  };

  if (isBusinessLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !business) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <FileSpreadsheet className="h-10 w-10 text-destructive" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Unable to Load Reports</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          There was an error loading the EOD summary reports.
        </p>
      </div>
    );
  }

  const periodStart = rows[0]?.periodStart;
  const periodEnd = rows[0]?.periodEnd;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <Button asChild variant="ghost" size="sm" className="h-7 px-2 -ml-2">
            <Link href={`/business/${businessId}/eod`}>
              <ArrowLeft className="mr-1 h-3.5 w-3.5" />
              Back
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold tracking-tight">EOD Reports</h1>
          <p className="text-sm text-muted-foreground">
            Aggregated staff summary for{" "}
            <span className="font-medium text-foreground">{business.name}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 sm:mt-1">
          {periodStart && periodEnd && (
            <Badge variant="secondary" className="gap-1 px-2.5 py-1 text-xs">
              <CalendarDays className="h-3 w-3" />
              {formatDate(periodStart)} – {formatDate(periodEnd)}
            </Badge>
          )}
          <RefreshButton
            onRefresh={() => refetchSummary()}
            isRefreshing={isFetchingSummary}
            className="h-8 w-8"
          />
          <Button
            onClick={exportToExcel}
            disabled={isExporting || !rows.length}
            size="sm"
          >
            {isExporting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            Export Excel
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-lg border bg-card p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Period Type
            </label>
            <Select
              value={periodType}
              onValueChange={(value) => {
                setPeriodType(value as EodSummaryPeriodType);
                setPage(1);
              }}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly (Mon–Sun)</SelectItem>
                <SelectItem value="bimonthly-1">1st – 15th</SelectItem>
                <SelectItem value="bimonthly-2">16th – End of Month</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Reference Date
            </label>
            <Input
              type="date"
              value={referenceDate}
              onChange={(e) => {
                setReferenceDate(e.target.value);
                setPage(1);
              }}
              className="bg-background"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Search Staff
            </label>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Name or email..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="bg-background pl-8"
              />
            </div>
          </div>
        </div>

        {/* Active period label */}
        <p className="mt-3 text-xs text-muted-foreground">
          Showing:{" "}
          <span className="font-medium text-foreground">
            {PERIOD_LABELS[periodType]}
          </span>
          {referenceDate && (
            <>
              {" "}
              containing{" "}
              <span className="font-medium text-foreground">
                {formatDate(referenceDate)}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
              <TableHead className="w-[220px]">Staff</TableHead>
              <TableHead className="text-right">Total Hrs</TableHead>
              <TableHead className="text-right">Regular</TableHead>
              <TableHead className="text-right">Overtime</TableHead>
              <TableHead className="text-right">Night Diff</TableHead>
              <TableHead className="text-right">Rate / hr</TableHead>
              <TableHead className="text-right">Est. Pay</TableHead>
              <TableHead className="text-right">EODs</TableHead>
              <TableHead className="text-right">Approved</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={9} className="h-[300px] text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Loading summary report...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : rows.length ? (
              rows.map((row) => {
                const rate = rateByStaffId.get(row.staffId);
                const pay = estimatePay(row, rate);
                return (
                <TableRow key={row.staffId} className="group">
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium leading-tight">
                        {row.staffName}
                      </span>
                      {row.staffEmail && (
                        <span className="text-xs text-muted-foreground">
                          {row.staffEmail}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium tabular-nums">
                    {formatHours(row.totalHoursWorked)}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums text-muted-foreground">
                    {formatHours(row.totalRegularHours)}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums">
                    {row.totalOvertimeHours > 0 ? (
                      <span className="text-amber-600 dark:text-amber-400">
                        {formatHours(row.totalOvertimeHours)}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums">
                    {row.totalNightDifferentialHours > 0 ? (
                      <span className="text-blue-600 dark:text-blue-400">
                        {formatHours(row.totalNightDifferentialHours)}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums text-muted-foreground">
                    {rate ? (
                      formatMoney(rate.hourlyRate, rate.currency)
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right font-medium tabular-nums">
                    {pay !== null ? (
                      formatMoney(pay, rate!.currency)
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.eodCount}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        row.approvedCount === row.eodCount
                          ? "default"
                          : "secondary"
                      }
                      className="ml-auto tabular-nums"
                    >
                      {row.approvedCount}/{row.eodCount}
                    </Badge>
                  </TableCell>
                </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="h-[260px] text-center"
                >
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileSpreadsheet className="h-8 w-8 opacity-30" />
                    <p className="text-sm">No data for the selected period.</p>
                    <p className="text-xs">
                      Try a different period type or reference date.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {!isLoading && rows.length > 0 && (
            <TableFooter>
              <TableRow className="hover:bg-transparent">
                <TableCell className="font-medium">Page Total</TableCell>
                <TableCell className="text-right font-semibold tabular-nums">
                  {formatHours(totals.totalHours)}
                </TableCell>
                <TableCell colSpan={4} />
                <TableCell className="text-right font-semibold tabular-nums">
                  {totals.hasPay
                    ? formatMoney(totals.totalPay, displayCurrency)
                    : "—"}
                </TableCell>
                <TableCell colSpan={2} />
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>

      {/* Estimate disclaimer */}
      <p className="text-xs text-muted-foreground">
        Estimated pay is calculated from each staff member&apos;s active
        compensation profile (or hourly salary), applying overtime and night
        differential multipliers. It is an estimate for reference only and may
        differ from the final payroll or invoice.
      </p>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Page{" "}
            <span className="font-medium text-foreground">
              {pagination.page}
            </span>{" "}
            of{" "}
            <span className="font-medium text-foreground">
              {pagination.totalPages}
            </span>{" "}
            &mdash; {pagination.totalCount}{" "}
            {pagination.totalCount === 1 ? "staff member" : "staff members"}
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!pagination.hasPrevPage}
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => p + 1)}
              disabled={!pagination.hasNextPage}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
