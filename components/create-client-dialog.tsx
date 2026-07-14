"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useCreateClient, useUpdateClient } from "@/hooks/useClient";
import type {
  Client,
  ClientStatus,
  CreateClientRequest,
  UpdateClientRequest,
} from "@/types/client.types";

interface CreateClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  businessId: string;
  /** When provided, the dialog edits an existing client instead of creating. */
  client?: Client | null;
  onSaved?: (client: Client) => void;
}

const emptyForm = {
  name: "",
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  billingInfo: "",
  tags: "",
  notes: "",
  status: "active" as ClientStatus,
};

type FormState = typeof emptyForm;

function clientToForm(client: Client): FormState {
  return {
    name: client.name ?? "",
    companyName: client.companyName ?? "",
    contactPerson: client.contactPerson ?? "",
    email: client.email ?? "",
    phone: client.phone ?? "",
    website: client.website ?? "",
    address: client.address ?? "",
    billingInfo: client.billingInfo ?? "",
    tags: (client.tags ?? []).join(", "),
    notes: client.notes ?? "",
    status: client.status ?? "active",
  };
}

export function CreateClientDialog({
  open,
  onOpenChange,
  businessId,
  client,
  onSaved,
}: CreateClientDialogProps) {
  const isEdit = !!client;
  const [form, setForm] = useState<FormState>(emptyForm);

  const { mutate: createClient, isPending: isCreating } = useCreateClient();
  const { mutate: updateClient, isPending: isUpdating } = useUpdateClient();
  const isPending = isCreating || isUpdating;

  useEffect(() => {
    if (open) {
      setForm(client ? clientToForm(client) : emptyForm);
    }
  }, [open, client]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) setForm(emptyForm);
    onOpenChange(newOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tags = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // Only include optional fields when they have a value (all optional server-side).
    const optional = {
      ...(form.companyName.trim() && { companyName: form.companyName.trim() }),
      ...(form.contactPerson.trim() && {
        contactPerson: form.contactPerson.trim(),
      }),
      ...(form.email.trim() && { email: form.email.trim() }),
      ...(form.phone.trim() && { phone: form.phone.trim() }),
      ...(form.website.trim() && { website: form.website.trim() }),
      ...(form.address.trim() && { address: form.address.trim() }),
      ...(form.billingInfo.trim() && { billingInfo: form.billingInfo.trim() }),
      ...(tags.length > 0 && { tags }),
      ...(form.notes.trim() && { notes: form.notes.trim() }),
      status: form.status,
    };

    if (isEdit && client) {
      const payload: UpdateClientRequest = {
        name: form.name.trim(),
        ...optional,
      };
      updateClient(
        { id: client._id, data: payload },
        {
          onSuccess: (saved) => {
            onOpenChange(false);
            onSaved?.(saved);
          },
        },
      );
    } else {
      const payload: CreateClientRequest = {
        businessId,
        name: form.name.trim(),
        ...optional,
      };
      createClient(payload, {
        onSuccess: (saved) => {
          setForm(emptyForm);
          onOpenChange(false);
          onSaved?.(saved);
        },
      });
    }
  };

  const isValid = form.name.trim().length > 0;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit Client" : "Add Client"}</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Update this client's profile. Only the name is required."
                : "Create a client profile. Only the name is required — fill in the rest as you learn it."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* ── Client Details ── */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">
                Client Details
              </h4>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">
                    Client Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Acme Corp"
                      value={form.name}
                      onChange={handleChange}
                      disabled={isPending}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="companyName">Company</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Acme Corporation Ltd."
                      value={form.companyName}
                      onChange={handleChange}
                      disabled={isPending}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Status</Label>
                    <Select
                      value={form.status}
                      onValueChange={(value) =>
                        setForm((prev) => ({
                          ...prev,
                          status: value as ClientStatus,
                        }))
                      }
                      disabled={isPending}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* ── Contact ── */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">
                Contact
              </h4>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        placeholder="Jane Smith"
                        value={form.contactPerson}
                        onChange={handleChange}
                        disabled={isPending}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={isPending}
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="contact@acme.com"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isPending}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="website"
                        name="website"
                        placeholder="https://acme.com"
                        value={form.website}
                        onChange={handleChange}
                        disabled={isPending}
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="123 Main St, City, Country"
                      value={form.address}
                      onChange={handleChange}
                      disabled={isPending}
                      className="pl-9 min-h-[60px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* ── Extra ── */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">
                Billing & Notes
              </h4>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="billingInfo">Billing Info</Label>
                  <Textarea
                    id="billingInfo"
                    name="billingInfo"
                    placeholder="Billing contact, terms, tax ID…"
                    value={form.billingInfo}
                    onChange={handleChange}
                    disabled={isPending}
                    className="min-h-[60px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    name="tags"
                    placeholder="vip, retainer, us-east (comma separated)"
                    value={form.tags}
                    onChange={handleChange}
                    disabled={isPending}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Anything worth remembering about this client…"
                    value={form.notes}
                    onChange={handleChange}
                    disabled={isPending}
                    className="min-h-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid || isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEdit ? "Save Changes" : "Add Client"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
