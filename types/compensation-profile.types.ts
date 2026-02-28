export type CompensationProfileScope = "position" | "staff";

export interface CompensationProfile {
  _id: string;
  name: string;
  businessId: string;
  profileScope: CompensationProfileScope;
  jobPosition: string;
  staffId?: string;
  hourlyRate: number;
  overtimeRateMultiplier: number;
  sundayRateMultiplier: number;
  nightDifferentialRateMultiplier: number;
  isRiceAllowanceEligible: boolean;
  riceAllowanceFixedAmount: number;
  isSssEnabled: boolean;
  isPagIbigEnabled: boolean;
  isPhilHealthEnabled: boolean;
  sssDeductionFixedAmount: number;
  pagIbigDeductionFixedAmount: number;
  philHealthDeductionFixedAmount: number;
  effectiveFrom: string;
  effectiveTo?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCompensationProfileRequest {
  name: string;
  businessId: string;
  profileScope: CompensationProfileScope;
  jobPosition: string;
  staffId?: string;
  hourlyRate: number;
  overtimeRateMultiplier: number;
  sundayRateMultiplier: number;
  nightDifferentialRateMultiplier: number;
  isRiceAllowanceEligible: boolean;
  riceAllowanceFixedAmount: number;
  isSssEnabled: boolean;
  isPagIbigEnabled: boolean;
  isPhilHealthEnabled: boolean;
  sssDeductionFixedAmount: number;
  pagIbigDeductionFixedAmount: number;
  philHealthDeductionFixedAmount: number;
  effectiveFrom: string;
  effectiveTo?: string;
  isActive?: boolean;
}

export interface UpdateCompensationProfileRequest
  extends Partial<CreateCompensationProfileRequest> {}

export interface CompensationProfileListQuery {
  businessId: string;
  profileScope?: CompensationProfileScope;
  staffId?: string;
  jobPosition?: string;
  isActive?: boolean;
}
