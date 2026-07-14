"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, Search, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useStaffByBusiness } from "@/hooks/useStaff";
import { useAssignStaffToClient } from "@/hooks/useClient";

interface AssignStaffDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  businessId: string;
  clientId: string;
  clientName: string;
  onAssigned?: () => void;
}

const PAGE_LIMIT = 50;

export function AssignStaffDialog({
  open,
  onOpenChange,
  businessId,
  clientId,
  clientName,
  onAssigned,
}: AssignStaffDialogProps) {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Debounce the search so we don't fire a request on every keystroke.
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 300);
    return () => clearTimeout(t);
  }, [search]);

  // Reset state whenever the dialog is opened.
  useEffect(() => {
    if (open) {
      setSearch("");
      setDebounced("");
      setSelected(new Set());
    }
  }, [open]);

  const { data, isLoading, isFetching } = useStaffByBusiness(businessId, {
    limit: PAGE_LIMIT,
    status: "active",
    ...(debounced && { search: debounced }),
  });

  const { mutate: assignStaff, isPending } = useAssignStaffToClient();

  const staff = data?.data ?? [];
  const total = data?.pagination?.total ?? staff.length;
  const hasMore = total > staff.length;

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectableCount = useMemo(
    () => staff.filter((s) => s.clientId !== clientId).length,
    [staff, clientId],
  );

  const handleAssign = () => {
    const ids = Array.from(selected);
    if (ids.length === 0) return;
    assignStaff(
      { clientId, staffIds: ids },
      {
        onSuccess: () => {
          onOpenChange(false);
          onAssigned?.();
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Assign Staff</DialogTitle>
          <DialogDescription>
            Select staff to assign to {clientName}. Search by name, email, or
            position.
          </DialogDescription>
        </DialogHeader>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            autoFocus
          />
          {isFetching && (
            <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
          )}
        </div>

        {/* List */}
        <div className="max-h-[340px] min-h-[200px] overflow-y-auto rounded-lg border">
          {isLoading ? (
            <div className="flex h-[200px] items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : staff.length === 0 ? (
            <div className="flex h-[200px] flex-col items-center justify-center gap-2 text-center">
              <Users className="h-6 w-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                {debounced ? "No staff match your search" : "No active staff"}
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {staff.map((s) => {
                const alreadyHere = s.clientId === clientId;
                const assignedElsewhere = !!s.clientId && !alreadyHere;
                const checked = selected.has(s._id);
                return (
                  <li key={s._id}>
                    <label
                      className={`flex items-center gap-3 px-3 py-2.5 ${
                        alreadyHere
                          ? "cursor-default opacity-60"
                          : "cursor-pointer hover:bg-muted/50"
                      }`}
                    >
                      {alreadyHere ? (
                        <span className="flex h-4 w-4 items-center justify-center text-primary">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <Checkbox
                          checked={checked}
                          onCheckedChange={() => toggle(s._id)}
                        />
                      )}
                      <div className="flex flex-1 flex-col">
                        <span className="text-sm font-medium">
                          {s.firstName} {s.lastName}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {s.position}
                          {s.email ? ` · ${s.email}` : ""}
                        </span>
                      </div>
                      {alreadyHere && (
                        <Badge variant="secondary" className="text-[10px]">
                          Assigned
                        </Badge>
                      )}
                      {assignedElsewhere && (
                        <Badge variant="outline" className="text-[10px]">
                          Reassign
                        </Badge>
                      )}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {hasMore && (
          <p className="text-xs text-muted-foreground">
            Showing {staff.length} of {total}. Refine your search to narrow the
            list.
          </p>
        )}

        <DialogFooter className="items-center sm:justify-between">
          <span className="text-sm text-muted-foreground">
            {selected.size} selected
            {selectableCount === 0 && staff.length > 0
              ? " · all shown are already assigned"
              : ""}
          </span>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleAssign}
              disabled={selected.size === 0 || isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Assign {selected.size > 0 ? selected.size : ""}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
