"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, Pencil, Plus, Search, Wallet } from "lucide-react";
import { CompensationProfileDialog } from "@/components/compensation-profile-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useBusinessById } from "@/hooks/useBusiness";
import { useCompensationProfiles } from "@/hooks/useCompensationProfile";
import type { CompensationProfile } from "@/types/compensation-profile.types";

export default function CompensationProfilesPage() {
  const params = useParams();
  const businessId = params.id as string;

  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<CompensationProfile | null>(
    null,
  );

  const { data: business, isLoading: isBusinessLoading } = useBusinessById(businessId);
  const { data: profiles, isLoading: isProfilesLoading } = useCompensationProfiles({
    businessId,
    isActive: true,
  });

  const filteredProfiles = useMemo(() => {
    const rows = profiles ?? [];
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return rows;
    }

    return rows.filter((profile) => {
      const haystack = [
        profile.name.toLowerCase(),
        profile.effectiveFrom.toLowerCase(),
        String(profile.hourlyRate),
      ].join(" ");
      return haystack.includes(normalizedSearch);
    });
  }, [profiles, search]);

  const isLoading = isBusinessLoading || isProfilesLoading;

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
          <h1 className="text-2xl font-semibold tracking-tight">Compensation Profiles</h1>
          <p className="text-sm text-muted-foreground">
            Create and edit compensation settings for {business?.name ?? "this business"}.
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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search by name, hourly rate, or effective date"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {isLoading ? (
            <div className="flex min-h-[280px] items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : filteredProfiles.length === 0 ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-md border border-dashed text-center">
              <Wallet className="h-8 w-8 text-muted-foreground" />
              <p className="mt-3 text-sm font-medium">No compensation profiles found</p>
              <p className="text-xs text-muted-foreground">Create a profile to get started.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProfiles.map((profile) => (
                <div
                  key={profile._id}
                  className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Rate: {profile.hourlyRate.toLocaleString()} / hour
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Effective: {profile.effectiveFrom}
                      {profile.effectiveTo ? ` to ${profile.effectiveTo}` : ""}
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
      />
    </div>
  );
}
