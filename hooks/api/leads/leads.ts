import api from "@/utils/api";
import type {
  Lead,
  LeadListResponse,
  LeadQueryParams,
  UpdateLeadRequest,
  DeleteLeadResponse,
} from "@/types/leads.types";

// Get leads by business with search and pagination
export const getLeadsByBusiness = async (
  businessId: string,
  params?: LeadQueryParams,
): Promise<LeadListResponse> => {
  const queryParams = new URLSearchParams();

  if (params?.search) queryParams.append("search", params.search);
  if (params?.page) queryParams.append("page", params.page.toString());
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.status) queryParams.append("status", params.status);

  const queryString = queryParams.toString();
  const url = `/businesses/${businessId}/leads${queryString ? `?${queryString}` : ""}`;

  const response = await api.get<LeadListResponse>(url);
  return response.data;
};

// Get lead by ID
export const getLeadById = async (id: string): Promise<Lead> => {
  const response = await api.get<Lead>(`/leads/${id}`);
  return response.data;
};

// Update lead (status, notes, details)
export const updateLead = async (
  id: string,
  data: UpdateLeadRequest,
): Promise<Lead> => {
  const response = await api.patch<Lead>(`/leads/${id}`, data);
  return response.data;
};

// Delete lead (soft delete)
export const deleteLead = async (id: string): Promise<DeleteLeadResponse> => {
  const response = await api.delete<DeleteLeadResponse>(`/leads/${id}`);
  return response.data;
};
