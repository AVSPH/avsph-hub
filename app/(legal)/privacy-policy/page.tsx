import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective date: March 15, 2026
          </p>
          <p className="text-sm text-muted-foreground">
            This is a sample, non-binding Privacy Policy placeholder for layout
            and design purposes only.
          </p>
        </header>

        <main className="mt-8 space-y-8 text-sm leading-6 text-foreground/90">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>
              We may collect information you provide directly, such as your
              name, email address, and account credentials, as well as usage and
              device information when you interact with the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              2. How We Use Information
            </h2>
            <p>
              We use information to provide and improve the service, authenticate
              users, maintain security, personalize experiences, and analyze
              performance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              3. Cookies and Similar Technologies
            </h2>
            <p>
              We use cookies and similar technologies to remember preferences,
              measure performance, and improve usability. You can control cookie
              settings through your browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              4. Sharing of Information
            </h2>
            <p>
              We may share information with trusted service providers, comply
              with legal obligations, or protect the rights and safety of users
              and the company.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              5. Data Retention
            </h2>
            <p>
              We retain information for as long as necessary to provide the
              service, comply with legal requirements, and resolve disputes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              6. Security
            </h2>
            <p>
              We implement reasonable security measures to protect your
              information, but no method of transmission or storage is fully
              secure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              7. Your Rights and Choices
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data, subject to applicable law. Contact us to exercise these
              rights.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              8. Children’s Privacy
            </h2>
            <p>
              The service is not intended for children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              9. International Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own, which may have different data protection
              laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use
              of the service after changes become effective indicates acceptance
              of the updated policy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at
              privacy@example.com.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
