import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getClientStaff,
  getClientWeeklyReport,
  getBusinessClientAnalytics,
  getClientAnalytics,
} from "@/hooks/api/client/client";
import { updateStaff } from "@/hooks/api/staff/staff-management";
import type {
  ClientListQuery,
  CreateClientRequest,
  UpdateClientRequest,
  WeeklyReportQuery,
  AnalyticsQuery,
} from "@/types/client.types";

interface ApiError {
  error?: string;
  message?: string;
}

const errorMessage = (error: AxiosError<ApiError>, fallback: string) =>
  error.response?.data?.error || error.response?.data?.message || fallback;

export const useClients = (query: ClientListQuery) => {
  return useQuery({
    queryKey: ["clients", query],
    queryFn: () => getClients(query),
    enabled: !!query.businessId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useClientById = (id: string) => {
  return useQuery({
    queryKey: ["clients", "detail", id],
    queryFn: () => getClientById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useClientStaff = (id: string) => {
  return useQuery({
    queryKey: ["clients", "staff", id],
    queryFn: () => getClientStaff(id),
    enabled: !!id,
    staleTime: 2 * 60 * 1000,
  });
};

export const useClientWeeklyReport = (
  id: string,
  range?: WeeklyReportQuery,
) => {
  return useQuery({
    queryKey: ["clients", "weekly-report", id, range?.from, range?.to],
    queryFn: () => getClientWeeklyReport(id, range),
    enabled: !!id,
    staleTime: 60 * 1000,
  });
};

export const useBusinessClientAnalytics = (
  businessId: string,
  query?: AnalyticsQuery,
) => {
  return useQuery({
    queryKey: ["clients", "analytics", "business", businessId, query?.from, query?.to],
    queryFn: () => getBusinessClientAnalytics(businessId, query),
    enabled: !!businessId,
    staleTime: 60 * 1000,
  });
};

export const useClientAnalytics = (id: string, query?: AnalyticsQuery) => {
  return useQuery({
    queryKey: ["clients", "analytics", "client", id, query?.from, query?.to],
    queryFn: () => getClientAnalytics(id, query),
    enabled: !!id,
    staleTime: 60 * 1000,
  });
};

export const useCreateClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateClientRequest) => createClient(data),
    onSuccess: (client) => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast.success("Client created", {
        description: `${client.name} has been added.`,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error("Creation failed", {
        description: errorMessage(error, "Failed to create client"),
      });
    },
  });
};

export const useUpdateClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateClientRequest }) =>
      updateClient(id, data),
    onSuccess: (client) => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      queryClient.invalidateQueries({
        queryKey: ["clients", "detail", client._id],
      });
      toast.success("Client updated", {
        description: `${client.name} has been updated.`,
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error("Update failed", {
        description: errorMessage(error, "Failed to update client"),
      });
    },
  });
};

// Assign one or more staff to a client (bulk). Fires a PATCH per staff and
// reports a single result. Pass an empty clientId (via useUpdateStaff) to
// unassign instead.
export const useAssignStaffToClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      clientId,
      staffIds,
    }: {
      clientId: string;
      staffIds: string[];
    }) => {
      await Promise.all(
        staffIds.map((id) => updateStaff(id, { clientId })),
      );
      return { count: staffIds.length };
    },
    onSuccess: ({ count }, { clientId }) => {
      queryClient.invalidateQueries({ queryKey: ["clients", "staff", clientId] });
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      toast.success(
        `${count} staff member${count === 1 ? "" : "s"} assigned`,
      );
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error("Assignment failed", {
        description: errorMessage(error, "Failed to assign staff"),
      });
    },
  });
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteClient(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast.success("Client deleted", {
        description: "The client has been removed.",
      });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error("Deletion failed", {
        description: errorMessage(error, "Failed to delete client"),
      });
    },
  });
};
