import api from "@/utils/api";
import type {
  Client,
  ClientListQuery,
  CreateClientRequest,
  UpdateClientRequest,
  DeleteClientResponse,
  WeeklyReport,
  WeeklyReportQuery,
  AnalyticsQuery,
  ClientAnalytics,
  BusinessClientAnalytics,
} from "@/types/client.types";
import type { Staff } from "@/types/staff.types";

const analyticsQueryString = (q?: AnalyticsQuery): string => {
  const params = new URLSearchParams();
  if (q?.from) params.append("from", q.from);
  if (q?.to) params.append("to", q.to);
  const s = params.toString();
  return s ? `?${s}` : "";
};

export const getClients = async (
  query: ClientListQuery,
): Promise<Client[]> => {
  const params = new URLSearchParams();
  params.append("businessId", query.businessId);
  if (query.status) params.append("status", query.status);
  if (query.isActive !== undefined) {
    params.append("isActive", String(query.isActive));
  }

  const queryString = params.toString();
  const response = await api.get<Client[]>(
    `/clients${queryString ? `?${queryString}` : ""}`,
  );
  return response.data;
};

export const getClientById = async (id: string): Promise<Client> => {
  const response = await api.get<Client>(`/clients/${id}`);
  return response.data;
};

export const createClient = async (
  data: CreateClientRequest,
): Promise<Client> => {
  const response = await api.post<Client>("/clients", data);
  return response.data;
};

export const updateClient = async (
  id: string,
  data: UpdateClientRequest,
): Promise<Client> => {
  const response = await api.patch<Client>(`/clients/${id}`, data);
  return response.data;
};

export const deleteClient = async (
  id: string,
): Promise<DeleteClientResponse> => {
  const response = await api.delete<DeleteClientResponse>(`/clients/${id}`);
  return response.data;
};

export const getClientStaff = async (id: string): Promise<Staff[]> => {
  const response = await api.get<Staff[]>(`/clients/${id}/staff`);
  return response.data;
};

export const getBusinessClientAnalytics = async (
  businessId: string,
  query?: AnalyticsQuery,
): Promise<BusinessClientAnalytics> => {
  const response = await api.get<BusinessClientAnalytics>(
    `/businesses/${businessId}/clients/analytics${analyticsQueryString(query)}`,
  );
  return response.data;
};

export const getClientAnalytics = async (
  id: string,
  query?: AnalyticsQuery,
): Promise<ClientAnalytics> => {
  const response = await api.get<ClientAnalytics>(
    `/clients/${id}/analytics${analyticsQueryString(query)}`,
  );
  return response.data;
};

export const getClientWeeklyReport = async (
  id: string,
  range?: WeeklyReportQuery,
): Promise<WeeklyReport> => {
  const params = new URLSearchParams();
  if (range?.from) params.append("from", range.from);
  if (range?.to) params.append("to", range.to);
  const queryString = params.toString();
  const response = await api.get<WeeklyReport>(
    `/clients/${id}/weekly-report${queryString ? `?${queryString}` : ""}`,
  );
  return response.data;
};
