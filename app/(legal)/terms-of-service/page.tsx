import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="mb-6">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Back
          </Link>
        </div>
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective date: March 15, 2026
          </p>
          <p className="text-sm text-muted-foreground">
            This is a sample, non-binding Terms of Service placeholder for
            layout and design purposes only.
          </p>
        </header>

        <main className="mt-8 space-y-8 text-sm leading-6 text-foreground/90">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the service, you agree to these Terms and
              any applicable policies. If you do not agree, do not use the
              service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              2. Eligibility and Accounts
            </h2>
            <p>
              You must be at least 18 years old to use the service. You are
              responsible for maintaining the confidentiality of your account
              and for all activities that occur under it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              3. Use of the Service
            </h2>
            <p>
              You agree to use the service in compliance with applicable laws
              and not to misuse, disrupt, or attempt to gain unauthorized access
              to any systems or data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              4. Fees and Payments
            </h2>
            <p>
              If the service is paid, fees will be disclosed at the time of
              purchase. Payments are non-refundable except as required by law or
              explicitly stated.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              5. Intellectual Property
            </h2>
            <p>
              The service and its content are owned by the company or its
              licensors and are protected by intellectual property laws. You are
              granted a limited, non-transferable license to use the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              6. Third-Party Services
            </h2>
            <p>
              The service may link to third-party websites or services. We are
              not responsible for their content or practices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              7. Disclaimers
            </h2>
            <p>
              The service is provided “as is” without warranties of any kind,
              express or implied, including warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, the company will not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              9. Termination
            </h2>
            <p>
              We may suspend or terminate your access to the service at any time
              for any reason, including violations of these Terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              service after changes become effective constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              11. Contact Us
            </h2>
            <p>
              If you have questions about these Terms, contact us at
              support@example.com.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
