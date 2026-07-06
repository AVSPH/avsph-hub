"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { Inbox, Loader2 } from "lucide-react";
import { useLeadsByBusiness, useUpdateLead, useDeleteLead } from "@/hooks/useLeads";
import { useBusinessById } from "@/hooks/useBusiness";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LeadDetailSheet } from "@/components/lead-detail-sheet";
import { createColumns } from "./columns";
import { DataTable } from "./data-table";
import type { Lead, LeadQueryParams } from "@/types/leads.types";

export default function LeadsPage() {
  const params = useParams();
  const businessId = params.id as string;

  // Filter state
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [page, setPage] = useState(1);
  const limit = 10;

  // Selected lead for view/delete
  const [viewLead, setViewLead] = useState<Lead | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [deleteLead, setDeleteLeadTarget] = useState<Lead | null>(null);

  // Build query params
  const queryParams: LeadQueryParams = {
    page,
    limit,
    ...(search && { search }),
    ...(status !== "all" && { status: status as LeadQueryParams["status"] }),
  };

  // Fetch data
  const { data: business, isLoading: isBusinessLoading } =
    useBusinessById(businessId);
  const {
    data: leadsData,
    isLoading: isLeadsLoading,
    isError,
  } = useLeadsByBusiness(businessId, queryParams);

  const { mutate: updateLead } = useUpdateLead();
  const { mutate: deleteLeadMutation, isPending: isDeleting } = useDeleteLead();

  // Handlers
  const handleSearch = useCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, []);

  const handleStatusFilter = useCallback((value: string) => {
    setStatus(value);
    setPage(1);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const handleView = useCallback((lead: Lead) => {
    setViewLead(lead);
    setDetailOpen(true);
  }, []);

  const handleStatusChange = useCallback(
    (lead: Lead, newStatus: Lead["status"]) => {
      updateLead({ id: lead._id, data: { status: newStatus } });
    },
    [updateLead],
  );

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteLead) return;
    deleteLeadMutation(
      { id: deleteLead._id, businessId },
      { onSuccess: () => setDeleteLeadTarget(null) },
    );
  }, [deleteLead, deleteLeadMutation, businessId]);

  const columns = createColumns({
    onView: handleView,
    onDelete: setDeleteLeadTarget,
    onStatusChange: handleStatusChange,
  });

  // Loading state
  if (isBusinessLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Error state
  if (isError || !business) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <Inbox className="h-10 w-10 text-destructive" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Unable to Load Leads</h3>
        <p className="mt-2 text-base text-muted-foreground">
          There was an error loading the leads data. Please try again.
        </p>
      </div>
    );
  }

  const leads = leadsData?.data || [];
  const pagination = leadsData?.pagination;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Leads</h1>
          <p className="text-sm text-muted-foreground">
            Leads captured from your website for {business.name}
          </p>
        </div>
        {pagination && (
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <span className="font-medium text-foreground">
              {pagination.total}
            </span>
            <span>total leads</span>
          </div>
        )}
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={leads}
        pagination={pagination}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
        onRowClick={handleView}
        searchValue={search}
        statusFilter={status}
        isLoading={isLeadsLoading}
      />

      {/* Lead Detail Sheet */}
      <LeadDetailSheet
        lead={viewLead}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deleteLead}
        onOpenChange={(open) => !open && setDeleteLeadTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Lead</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              {deleteLead && `${deleteLead.firstName} ${deleteLead.lastName}`}?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
