"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { EodReport } from "@/types/eod.types";

const statusConfig = {
  submitted: {
    label: "Submitted",
    className: "status-info",
  },
  reviewed: {
    label: "Reviewed",
    className: "status-success",
  },
  needs_revision: {
    label: "Needs Revision",
    className: "status-warning",
  },
};

const approvalConfig = {
  true: {
    label: "Approved",
    className: "status-success",
  },
  false: {
    label: "Pending",
    className: "status-neutral",
  },
};

interface ColumnOptions {
  onResubmit?: (report: EodReport) => void;
}

export function getColumns(
  options: ColumnOptions = {},
): ColumnDef<EodReport>[] {
  return [
    {
      accessorKey: "date",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 data-[state=open]:bg-accent"
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("date"));
        return (
          <span className="text-sm font-medium">
            {date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        );
      },
    },
    {
      accessorKey: "hoursWorked",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 data-[state=open]:bg-accent"
        >
          Hours
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const hours = row.getValue("hoursWorked") as number;
        return <span className="text-sm font-medium">{hours}h</span>;
      },
    },
    {
      id: "hoursBreakdown",
      header: "Regular / OT / Night",
      cell: ({ row }) => {
        const report = row.original;
        const regular = report.regularHoursWorked ?? report.hoursWorked;
        const overtime = report.overtimeHoursWorked ?? 0;
        const night = report.nightDifferentialHours ?? 0;
        return (
          <span className="text-sm text-muted-foreground">
            {regular}h / {overtime}h / {night}h
          </span>
        );
      },
    },
    {
      accessorKey: "tasksCompleted",
      header: "Tasks Completed",
      cell: ({ row }) => {
        const tasks = row.getValue("tasksCompleted") as string;
        const truncated = tasks.length > 60 ? tasks.slice(0, 60) + "…" : tasks;
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm text-muted-foreground cursor-default max-w-[250px] block truncate">
                  {truncated}
                </span>
              </TooltipTrigger>
              {tasks.length > 60 && (
                <TooltipContent side="bottom" className="max-w-[400px]">
                  <p className="text-sm whitespace-pre-wrap">{tasks}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as keyof typeof statusConfig;
        const config = statusConfig[status];
        return (
          <Badge
            variant="outline"
            className={`font-normal ${config?.className}`}
          >
            {config?.label || status}
          </Badge>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "isApproved",
      header: "Approval",
      cell: ({ row }) => {
        const isApproved = row.getValue("isApproved") as boolean;
        const key = String(isApproved) as keyof typeof approvalConfig;
        const config = approvalConfig[key];
        return (
          <Badge
            variant="outline"
            className={`font-normal ${config.className}`}
          >
            {config.label}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const report = row.original;
        const needsRevision = report.status === "needs_revision";

        if (!needsRevision) return null;

        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-warning hover:bg-warning/10 hover:text-warning"
                  onClick={(e) => {
                    e.stopPropagation();
                    options.onResubmit?.(report);
                  }}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Resubmit</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      },
    },
  ];
}
