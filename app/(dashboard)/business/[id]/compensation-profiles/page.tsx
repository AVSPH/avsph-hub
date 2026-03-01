"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  Loader2,
  Pencil,
  Plus,
  Search,
  Wallet,
  ArrowRightLeft,
  Save,
} from "lucide-react";
import { CompensationProfileDialog } from "@/components/compensation-profile-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useBusinessById } from "@/hooks/useBusiness";
import { useCompensationProfiles } from "@/hooks/useCompensationProfile";
import {
  useExchangeRates,
  useUpsertExchangeRate,
} from "@/hooks/useExchangeRate";
import type { CompensationProfile } from "@/types/compensation-profile.types";

export default function CompensationProfilesPage() {
  const params = useParams();
  const businessId = params.id as string;

  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] =
    useState<CompensationProfile | null>(null);

  // Exchange rate form state
  const [rateForm, setRateForm] = useState<Record<string, string>>({});

  const { data: business, isLoading: isBusinessLoading } =
    useBusinessById(businessId);
  const { data: profiles, isLoading: isProfilesLoading } =
    useCompensationProfiles({
      businessId,
      isActive: true,
    });
  const { data: exchangeRates, isLoading: isRatesLoading } = useExchangeRates();
  const upsertRateMutation = useUpsertExchangeRate();

  // Determine which non-PHP currencies are used in profiles
  const usedCurrencies = useMemo(() => {
    const set = new Set<string>();
    for (const p of profiles ?? []) {
      const cur = (p.currency || "PHP").toUpperCase();
      if (cur !== "PHP") set.add(cur);
    }
    return Array.from(set).sort();
  }, [profiles]);

  // Build a map from exchange rates: "USD" -> rate value
  const rateMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const r of exchangeRates ?? []) {
      if (r.toCurrency === "PHP") {
        map.set(r.fromCurrency, r.rate);
      }
    }
    return map;
  }, [exchangeRates]);

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
        (profile.currency || "PHP").toLowerCase(),
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

  const handleSaveRate = (currency: string) => {
    const value = rateForm[currency];
    if (!value || isNaN(Number(value)) || Number(value) <= 0) return;
    upsertRateMutation.mutate(
      {
        fromCurrency: currency,
        toCurrency: "PHP",
        rate: Number(value),
      },
      {
        onSuccess: () => {
          setRateForm((prev) => {
            const next = { ...prev };
            delete next[currency];
            return next;
          });
        },
      },
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Compensation Profiles
          </h1>
          <p className="text-sm text-muted-foreground">
            Create and edit compensation settings for{" "}
            {business?.name ?? "this business"}.
          </p>
        </div>
        <Button className="gap-2" onClick={openCreateDialog}>
          <Plus className="h-4 w-4" />
          New Profile
        </Button>
      </div>

      {/* Exchange Rate Management Card — only if non-PHP currencies exist */}
      {usedCurrencies.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-base">Exchange Rates to PHP</CardTitle>
            </div>
            <CardDescription>
              Set the current conversion rate for each currency used in your
              compensation profiles. These rates are shared across all
              businesses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isRatesLoading ? (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {usedCurrencies.map((currency) => {
                  const currentRate = rateMap.get(currency);
                  const inputValue =
                    rateForm[currency] ??
                    (currentRate != null ? String(currentRate) : "");
                  const hasChanged = rateForm[currency] !== undefined;

                  return (
                    <div
                      key={currency}
                      className="flex items-end gap-2 rounded-md border p-3"
                    >
                      <div className="flex-1 space-y-1.5">
                        <Label className="text-xs font-medium">
                          1 {currency} = ? PHP
                        </Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="e.g. 56.50"
                          value={inputValue}
                          onChange={(e) =>
                            setRateForm((prev) => ({
                              ...prev,
                              [currency]: e.target.value,
                            }))
                          }
                          disabled={upsertRateMutation.isPending}
                        />
                        {currentRate != null && !hasChanged && (
                          <p className="text-xs text-muted-foreground">
                            Current: ₱{currentRate.toLocaleString()}
                          </p>
                        )}
                      </div>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-9 w-9 shrink-0"
                        disabled={!hasChanged || upsertRateMutation.isPending}
                        onClick={() => handleSaveRate(currency)}
                      >
                        {upsertRateMutation.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Profiles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search by name, hourly rate, currency, or effective date"
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
              <p className="mt-3 text-sm font-medium">
                No compensation profiles found
              </p>
              <p className="text-xs text-muted-foreground">
                Create a profile to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProfiles.map((profile) => {
                const currency = profile.currency || "PHP";
                return (
                  <div
                    key={profile._id}
                    className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{profile.name}</p>
                        <Badge
                          variant={currency !== "PHP" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {currency}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Rate:{" "}
                        {currency !== "PHP" && currency !== ""
                          ? `${currency} `
                          : "₱"}
                        {profile.hourlyRate.toLocaleString()} / hour
                        {currency !== "PHP" && rateMap.has(currency) && (
                          <span className="ml-2 text-muted-foreground/70">
                            (≈ ₱
                            {(
                              profile.hourlyRate * rateMap.get(currency)!
                            ).toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}{" "}
                            PHP)
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Effective: {profile.effectiveFrom}
                        {profile.effectiveTo
                          ? ` to ${profile.effectiveTo}`
                          : ""}
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
                );
              })}
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
