export type ClientStatus = "active" | "inactive";

export interface Client {
  _id: string;
  businessId: string;
  name: string;
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  billingInfo?: string;
  tags?: string[];
  logoUrl?: string;
  notes?: string;
  status: ClientStatus;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ClientListQuery {
  businessId: string;
  status?: ClientStatus;
  isActive?: boolean;
}

export interface CreateClientRequest {
  businessId: string;
  name: string;
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  billingInfo?: string;
  tags?: string[];
  logoUrl?: string;
  notes?: string;
  status?: ClientStatus;
}

export type UpdateClientRequest = Partial<Omit<CreateClientRequest, "businessId">> & {
  isActive?: boolean;
};

export interface DeleteClientResponse {
  message: string;
}

// Weekly / date-range report
export interface WeeklyReportStaffRow {
  staffId: string;
  name: string;
  position: string;
  hourlyRate: number;
  totalHours: number;
  daysWorked: number;
  calculatedPay: number;
  currency: string;
  payUsd: number | null;
}

export interface WeeklyReport {
  client: {
    _id: string;
    name: string;
    companyName: string | null;
  };
  periodStart: string;
  periodEnd: string;
  currency: string;
  mixedCurrency: boolean;
  usdRate: number | null;
  usdConversionAvailable: boolean;
  totals: {
    totalHours: number;
    totalPay: number;
    totalPayUsd: number | null;
    staffCount: number;
  };
  staff: WeeklyReportStaffRow[];
}

export interface WeeklyReportQuery {
  from?: string;
  to?: string;
}
