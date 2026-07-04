"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Clock3, FileText, Loader2, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMyInvoices } from "@/hooks/invoice/useStaffInvoice";
import { createColumns } from "./columns";
import { DataTable } from "./data-table";
import type { Invoice, InvoiceQuery } from "@/types/invoice.types";

function formatCurrency(amount: number, currency = "USD") {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
}

export default function StaffInvoicePage() {
    const router = useRouter();

    // Filter state
    const [status, setStatus] = useState<string>("all");

    // Build query params
    const queryParams: InvoiceQuery = {
        ...(status !== "all" && {
            status: status as InvoiceQuery["status"],
        }),
    };

    // Fetch data
    const {
        data: invoices,
        isLoading: isInvoiceLoading,
        isError,
    } = useMyInvoices(queryParams);

    // Handlers
    const handleStatusFilter = useCallback((value: string) => {
        setStatus(value);
    }, []);

    const handleRowClick = useCallback(
        (invoice: Invoice) => {
            router.push(`/invoice/${invoice._id}`);
        },
        [router],
    );

    const columns = createColumns({
        onView: handleRowClick,
    });

    // Error state
    if (isError) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center bg-card">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <FileText className="h-10 w-10 text-destructive" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Unable to Load Invoices</h3>
                <p className="mt-2 text-base text-muted-foreground">
                    There was an error loading your invoice data. Please try again.
                </p>
            </div>
        );
    }

    const invoiceList = invoices || [];

    const stats = useMemo(() => {
        const currency = invoiceList[0]?.currency ?? "USD";
        const totalNetPay = invoiceList.reduce((sum, inv) => sum + inv.netPay, 0);
        const paidTotal = invoiceList
            .filter((inv) => inv.status === "paid")
            .reduce((sum, inv) => sum + inv.netPay, 0);
        const pendingCount = invoiceList.filter(
            (inv) => inv.status === "approved",
        ).length;
        return { currency, totalNetPay, paidTotal, pendingCount };
    }, [invoiceList]);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">My Invoices</h1>
                    <p className="text-sm text-muted-foreground">
                        View your finalized and paid invoices.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {!isInvoiceLoading && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                                {invoiceList.length}
                            </span>
                            <span>total invoices</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs text-muted-foreground">
                            Total Net Pay
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <p className="text-lg font-semibold">
                            {isInvoiceLoading
                                ? "..."
                                : formatCurrency(stats.totalNetPay, stats.currency)}
                        </p>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs text-muted-foreground">Paid</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <p className="text-lg font-semibold">
                            {isInvoiceLoading
                                ? "..."
                                : formatCurrency(stats.paidTotal, stats.currency)}
                        </p>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs text-muted-foreground">
                            Pending Payment
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <p className="text-lg font-semibold">
                            {isInvoiceLoading ? "..." : stats.pendingCount}
                        </p>
                        <Clock3 className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                </Card>
            </div>

            {/* Data Table */}
            <DataTable
                columns={columns}
                data={invoiceList}
                onStatusFilter={handleStatusFilter}
                onRowClick={handleRowClick}
                statusFilter={status}
                isLoading={isInvoiceLoading}
            />
        </div>
    );
}
