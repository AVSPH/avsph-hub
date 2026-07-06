// Types for leads (replaces GHL contact capture)
export interface Lead {
  _id: string;
  businessId: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  source: "contact_form" | "newsletter" | "other";
  status: "new" | "contacted" | "qualified" | "converted";
  notes?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Pagination types
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

export interface LeadListResponse {
  data: Lead[];
  pagination: PaginationInfo;
}

// Query params for fetching leads
export interface LeadQueryParams {
  search?: string;
  page?: number;
  limit?: number;
  status?: "new" | "contacted" | "qualified" | "converted";
}

// Update lead request
export interface UpdateLeadRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  source?: "contact_form" | "newsletter" | "other";
  status?: "new" | "contacted" | "qualified" | "converted";
  notes?: string;
}

// Response types
export interface DeleteLeadResponse {
  message: string;
}
