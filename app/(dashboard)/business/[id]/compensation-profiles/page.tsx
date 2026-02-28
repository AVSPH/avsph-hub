"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, Plus, Pencil, Search, Wallet } from "lucide-react";
import { useCompensationProfiles } from "@/hooks/useCompensationProfile";
import { useStaffByBusiness } from "@/hooks/useStaff";
import { useBusinessById } from "@/hooks/useBusiness";
import { CompensationProfileDialog } from "@/components/compensation-profile-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CompensationProfile } from "@/types/compensation-profile.types";

type ScopeFilter = "all" | "position" | "staff";

export default function CompensationProfilesPage() {
  const params = useParams();
  const businessId = params.id as string;

  const [scopeFilter, setScopeFilter] = useState<ScopeFilter>("all");
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<CompensationProfile | null>(
    null,
  );

  const { data: business, isLoading: isBusinessLoading } =
    useBusinessById(businessId);
  const { data: profiles, isLoading: isProfilesLoading } = useCompensationProfiles({
    businessId,
    isActive: true,
  });
  const { data: staffData, isLoading: isStaffLoading } = useStaffByBusiness(
    businessId,
    {
      page: 1,
      limit: 200,
      status: "active",
    },
  );

  const staff = staffData?.data ?? [];
  const staffLabelMap = useMemo(() => {
    return new Map(
      staff.map((member) => [
        member._id,
        `${member.firstName} ${member.lastName} (${member.position})`,
      ]),
    );
  }, [staff]);

  const staffOptions = useMemo(
    () =>
      staff.map((member) => ({
        id: member._id,
        label: `${member.firstName} ${member.lastName}`,
        position: member.position,
      })),
    [staff],
  );

  const filteredProfiles = useMemo(() => {
    const rows = profiles ?? [];
    const normalizedSearch = search.trim().toLowerCase();

    return rows.filter((profile) => {
      if (scopeFilter !== "all" && profile.profileScope !== scopeFilter) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const staffLabel = profile.staffId
        ? staffLabelMap.get(profile.staffId)?.toLowerCase() ?? ""
        : "";
      const haystack = [
        profile.name.toLowerCase(),
        profile.jobPosition.toLowerCase(),
        profile.profileScope.toLowerCase(),
        staffLabel,
      ].join(" ");

      return haystack.includes(normalizedSearch);
    });
  }, [profiles, scopeFilter, search, staffLabelMap]);

  const isLoading = isBusinessLoading || isProfilesLoading || isStaffLoading;

  const openCreateDialog = () => {
    setSelectedProfile(null);
    setDialogOpen(true);
  };

  const openEditDialog = (profile: CompensationProfile) => {
    setSelectedProfile(profile);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Compensation Profiles
          </h1>
          <p className="text-sm text-muted-foreground">
            Create and edit shared compensation settings for {business?.name ?? "this business"}.
          </p>
        </div>
        <Button className="gap-2" onClick={openCreateDialog}>
          <Plus className="h-4 w-4" />
          New Profile
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Profiles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-9"
                placeholder="Search by name, position, or staff"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select
              value={scopeFilter}
              onValueChange={(value) => setScopeFilter(value as ScopeFilter)}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Scopes</SelectItem>
                <SelectItem value="position">Position</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="flex min-h-[280px] items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : filteredProfiles.length === 0 ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-md border border-dashed text-center">
              <Wallet className="h-8 w-8 text-muted-foreground" />
              <p className="mt-3 text-sm font-medium">No compensation profiles found</p>
              <p className="text-xs text-muted-foreground">
                Create a profile or adjust your filters.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProfiles.map((profile) => (
                <div
                  key={profile._id}
                  className="rounded-lg border p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">{profile.name}</p>
                      <Badge variant="outline" className="capitalize">
                        {profile.profileScope}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Position: {profile.jobPosition}
                      {profile.staffId
                        ? ` • Staff: ${staffLabelMap.get(profile.staffId) ?? profile.staffId}`
                        : ""}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Rate: {profile.hourlyRate.toLocaleString()} / hour • Effective from{" "}
                      {profile.effectiveFrom}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 self-start sm:self-center"
                    onClick={() => openEditDialog(profile)}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <CompensationProfileDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        businessId={businessId}
        profile={selectedProfile}
        staffOptions={staffOptions}
      />
    </div>
  );
}

