import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-snow mb-2">Privacy Policy</h1>
          <p className="text-sm text-mist mb-12">Last updated: April 2026</p>

          <div className="prose prose-sm prose-invert max-w-none space-y-8 text-mist [&_h2]:text-snow [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_strong]:text-snow/90">
            <h2>1. Data We Collect</h2>
            <p>When you use tedge.ai, we collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Account information:</strong> email address, name (via
                Clerk authentication)
              </li>
              <li>
                <strong>Trading data:</strong> demo trades, analyses requested,
                alert configurations, chart drawings
              </li>
              <li>
                <strong>Broker connection data:</strong> broker account
                identifiers (not passwords or funds access)
              </li>
              <li>
                <strong>Usage data:</strong> features used, session duration,
                platform interactions
              </li>
              <li>
                <strong>AI interactions:</strong> chat messages, analysis
                parameters
              </li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <p>Your data is used to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and improve the Platform&apos;s services</li>
              <li>
                Generate personalized AI analyses and coaching feedback
              </li>
              <li>Send notifications (alerts, trade closures, analyses)</li>
              <li>Compute trading statistics and performance metrics</li>
              <li>
                Process billing and manage subscriptions (via Stripe)
              </li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We share data only with:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Clerk:</strong> authentication provider (email, profile)
              </li>
              <li>
                <strong>Stripe:</strong> payment processing (billing info only)
              </li>
              <li>
                <strong>AI providers:</strong> anonymized trading data for
                analysis generation (no personal identifiers)
              </li>
              <li>
                <strong>Your broker:</strong> only through your locally-installed
                EdgeBridge (MT5) or direct API (cTrader) — we do not have direct access to your broker account
              </li>
            </ul>

            <h2>4. Data Storage and Security</h2>
            <p>
              Your data is stored on secured servers located in Europe (OVH,
              France). We use encryption in transit (TLS) and implement standard
              security practices. Broker credentials are never stored on our
              servers — the EdgeBridge connector (MT5) runs locally on your
              machine, and cTrader connects via secure OAuth2.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              Account data is retained while your account is active. Trading
              history and analyses are kept for the duration of your
              subscription. Upon account deletion, personal data is removed
              within 30 days. Anonymized, aggregated data may be retained for
              service improvement.
            </p>

            <h2>6. Your Rights (GDPR)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have the
              right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Access:</strong> request a copy of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> correct inaccurate data
              </li>
              <li>
                <strong>Erasure:</strong> request deletion of your data
              </li>
              <li>
                <strong>Portability:</strong> receive your data in a structured
                format
              </li>
              <li>
                <strong>Objection:</strong> object to certain data processing
              </li>
            </ul>
            <p>
              To exercise these rights, contact{" "}
              <a
                href="mailto:privacy@tedge.ai"
                className="text-gold hover:underline"
              >
                privacy@tedge.ai
              </a>
              . We will respond within 30 days.
            </p>

            <h2>7. Cookies</h2>
            <p>
              We use essential cookies for authentication and session management.
              We do not use advertising or tracking cookies. Analytics are
              privacy-respecting and do not track individual users.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. Material
              changes will be communicated via email.
            </p>

            <h2>Contact</h2>
            <p>
              Data Protection Officer:{" "}
              <a
                href="mailto:privacy@tedge.ai"
                className="text-gold hover:underline"
              >
                privacy@tedge.ai
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
