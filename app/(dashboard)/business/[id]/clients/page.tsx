"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { type DateRange } from "react-day-picker";
import {
  Building2,
  Plus,
  Search,
  Loader2,
  Pencil,
  X,
  BarChart3,
  Settings2,
  Users,
  DollarSign,
  Clock,
  HandCoins,
  TrendingUp,
} from "lucide-react";
import { useBusinessById } from "@/hooks/useBusiness";
import { useClients, useBusinessClientAnalytics } from "@/hooks/useClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RefreshButton } from "@/components/ui/refresh-button";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { MetricCard, usd } from "@/components/client/metric-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateClientDialog } from "@/components/create-client-dialog";
import type { Client } from "@/types/client.types";

/** ISO date (YYYY-MM-DD) from a Date using local Y/M/D. */
function isoOf(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function ClientsPage() {
  const params = useParams();
  const router = useRouter();
  const businessId = params.id as string;

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  // Analytics window: undefined = all-time.
  const [analyticsRange, setAnalyticsRange] = useState<DateRange | undefined>();

  const { data: business } = useBusinessById(businessId);
  const {
    data: clients,
    isLoading,
    refetch,
    isFetching,
  } = useClients({ businessId });

  const analyticsQuery = useMemo(
    () =>
      analyticsRange?.from && analyticsRange?.to
        ? { from: isoOf(analyticsRange.from), to: isoOf(analyticsRange.to) }
        : undefined,
    [analyticsRange],
  );
  const { data: analytics, isLoading: isAnalyticsLoading } =
    useBusinessClientAnalytics(businessId, analyticsQuery);
  const a = analytics?.totals;

  const openEdit = React.useCallback((client: Client) => {
    setSelectedClient(client);
    setDialogOpen(true);
  }, []);

  const columns = useMemo<ColumnDef<Client>[]>(
    () => [
      {
        id: "client",
        accessorFn: (row) => row.name,
        header: "Client",
        enableHiding: false,
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="font-medium">{row.original.name}</span>
            {row.original.companyName && (
              <span className="text-xs text-muted-foreground">
                {row.original.companyName}
              </span>
            )}
          </div>
        ),
      },
      {
        id: "contact",
        accessorFn: (row) => row.contactPerson ?? "",
        header: "Contact",
        cell: ({ row }) => (
          <div className="flex flex-col text-sm text-muted-foreground">
            {row.original.contactPerson && (
              <span>{row.original.contactPerson}</span>
            )}
            {row.original.email && (
              <span className="text-xs">{row.original.email}</span>
            )}
            {!row.original.contactPerson && !row.original.email && (
              <span>—</span>
            )}
          </div>
        ),
      },
      {
        id: "phone",
        accessorFn: (row) => row.phone ?? "",
        header: "Phone",
        cell: ({ row }) => (
          <span className="text-sm text-muted-foreground">
            {row.original.phone || "—"}
          </span>
        ),
      },
      {
        id: "tags",
        accessorFn: (row) => (row.tags ?? []).join(", "),
        header: "Tags",
        cell: ({ row }) =>
          row.original.tags && row.original.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {row.original.tags.slice(0, 3).map((t) => (
                <Badge key={t} variant="outline" className="text-[10px]">
                  {t}
                </Badge>
              ))}
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">—</span>
          ),
      },
      {
        id: "status",
        accessorFn: (row) => row.status,
        header: "Status",
        cell: ({ row }) => (
          <Badge
            variant={row.original.status === "active" ? "default" : "secondary"}
            className="capitalize"
          >
            {row.original.status}
          </Badge>
        ),
      },
      {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        enableHiding: false,
        cell: ({ row }) => (
          <div
            className="flex items-center justify-end gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1.5 text-muted-foreground hover:text-foreground"
              onClick={() =>
                router.push(
                  `/business/${businessId}/clients/${row.original._id}`,
                )
              }
            >
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Open</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => openEdit(row.original)}
            >
              <Pencil className="h-3.5 w-3.5" />
              <span>Edit</span>
            </Button>
          </div>
        ),
      },
    ],
    [businessId, router, openEdit],
  );

  const filtered = useMemo(() => {
    const rows = clients ?? [];
    const q = search.trim().toLowerCase();
    return rows.filter((c) => {
      if (statusFilter !== "all" && c.status !== statusFilter) return false;
      if (!q) return true;
      return [c.name, c.companyName, c.contactPerson, c.email]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [clients, search, statusFilter]);

  const table = useReactTable({
    data: filtered,
    columns,
    getRowId: (row) => row._id,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: { columnVisibility },
  });

  const hasFilters = !!search || statusFilter !== "all";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
          <p className="text-sm text-muted-foreground">
            Manage the clients of {business?.name ?? "this business"} and assign
            staff to them.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <RefreshButton onRefresh={() => refetch()} isRefreshing={isFetching} />
          <Button
            className="gap-2"
            onClick={() => {
              setSelectedClient(null);
              setDialogOpen(true);
            }}
          >
            <Plus className="h-4 w-4" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Analytics */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {analyticsQuery ? "Selected period" : "All time"}
          </span>
          <DatePickerWithRange
            value={analyticsRange}
            onChange={setAnalyticsRange}
            numberOfMonths={2}
            placeholder="All time"
            className="h-8"
          />
          {analyticsRange && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8"
              onClick={() => setAnalyticsRange(undefined)}
            >
              All time
              <X className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          )}
          {analytics && !analytics.usdConversionAvailable && (
            <span className="text-xs text-amber-600 dark:text-amber-400">
              No USD rate set — revenue shown, cost/margin need a USD → PHP rate.
            </span>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <MetricCard
            icon={Building2}
            label="Clients"
            value={String(a?.clientCount ?? 0)}
            sub={
              a ? `${a.activeClientCount} with staff · ${a.staffCount} VAs` : undefined
            }
            loading={isAnalyticsLoading}
          />
          <MetricCard
            icon={DollarSign}
            label="Total Revenue"
            value={a ? usd(a.totalRevenueUsd) : "—"}
            sub="billed to clients"
            loading={isAnalyticsLoading}
          />
          <MetricCard
            icon={Clock}
            label="Total Hours"
            value={(a?.totalHours ?? 0).toLocaleString()}
            sub="approved EOD"
            loading={isAnalyticsLoading}
          />
          <MetricCard
            icon={HandCoins}
            label="Paid to VAs"
            value={a && a.totalPaidUsd != null ? usd(a.totalPaidUsd) : "—"}
            sub={
              a && a.vaSharePct != null
                ? `${a.vaSharePct}% of revenue`
                : "needs USD rate"
            }
            loading={isAnalyticsLoading}
          />
          <MetricCard
            icon={TrendingUp}
            label="Margin"
            value={a && a.totalMarginUsd != null ? usd(a.totalMarginUsd) : "—"}
            sub={
              a && a.marginPct != null
                ? `${a.marginPct}% agency cut`
                : "needs USD rate"
            }
            accent="success"
            loading={isAnalyticsLoading}
          />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 pl-9 bg-background"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-9 w-[140px] bg-background">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          {hasFilters && (
            <Button
              variant="ghost"
              onClick={() => {
                setSearch("");
                setStatusFilter("all");
              }}
              className="h-9 px-2 lg:px-3"
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Column visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 border-dashed">
              <Settings2 className="mr-2 h-4 w-4" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[180px]">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="h-11 bg-muted/50 text-xs font-medium text-muted-foreground"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-[400px] text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Loading clients...
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-[400px] text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Building2 className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">No clients found</p>
                      <p className="text-xs text-muted-foreground">
                        {hasFilters
                          ? "Try adjusting your search or filters"
                          : "Get started by adding a client"}
                      </p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="group cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/business/${businessId}/clients/${row.original._id}`,
                    )
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <CreateClientDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        businessId={businessId}
        client={selectedClient}
      />
    </div>
  );
}
