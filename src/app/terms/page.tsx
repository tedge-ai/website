import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-snow mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-mist mb-12">Last updated: April 2026</p>

          <div className="prose prose-sm prose-invert max-w-none space-y-8 text-mist [&_h2]:text-snow [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_strong]:text-snow/90">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using tedge.ai (&quot;the Platform&quot;), you
              agree to be bound by these Terms of Service. If you do not agree,
              do not use the Platform.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              tedge.ai provides AI-powered market analysis tools, charting, and
              trading intelligence for informational and educational purposes.
              The Platform connects to third-party brokers (MT5, cTrader)
              through user-installed bridge software but does not itself execute
              trades or hold funds.
            </p>

            <h2>3. Not Financial Advice</h2>
            <p>
              <strong>
                Nothing on this Platform constitutes financial advice,
                investment advice, or trading advice.
              </strong>{" "}
              All analyses, signals, zones, opportunities, and AI-generated
              content are provided for informational purposes only. You should
              not treat any content as a recommendation to buy, sell, or hold
              any financial instrument.
            </p>
            <p>
              Trading foreign exchange, CFDs, and other leveraged products
              carries a high level of risk. Between 74-89% of retail investor
              accounts lose money when trading CFDs. You should carefully
              consider whether trading is suitable for you in light of your
              financial situation and risk tolerance.
            </p>

            <h2>4. Account and Subscription</h2>
            <p>
              You must create an account to use the Platform. You are
              responsible for maintaining the confidentiality of your account
              credentials. Subscriptions are billed monthly and can be cancelled
              at any time. Credits are non-refundable and expire at the end of
              each billing cycle (except one-time credits on the Free plan).
            </p>

            <h2>5. AI Credits</h2>
            <p>
              Certain features (custom symbol analyses) consume AI credits.
              Credits are included in paid plans and can be recharged. The cost
              in credits per action may be adjusted with reasonable notice.
              Included analyses on major symbols (EUR/USD, XAU/USD, BTC/USD) do
              not consume credits.
            </p>

            <h2>6. Broker Integration</h2>
            <p>
              The Platform connects to your broker through direct API
              (cTrader) or EdgeBridge connector (MT5). tedge.ai is not
              affiliated with any broker and does not guarantee the accuracy
              of data received from third-party sources. You are solely
              responsible for your trading decisions and any orders placed
              through your broker.
            </p>

            <h2>7. Data and Accuracy</h2>
            <p>
              AI analyses use reference market data which may differ slightly
              from your broker&apos;s data. Price levels, zones, and
              opportunities are indicative and should not be relied upon as
              exact entry/exit points. Always account for your broker&apos;s
              spread and execution conditions.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              tedge.ai shall not be liable for any direct, indirect, incidental,
              or consequential damages arising from your use of the Platform,
              including but not limited to trading losses, missed opportunities,
              or technical failures. The Platform is provided &quot;as is&quot;
              without warranty of any kind.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              All content, algorithms, AI models, and software on the Platform
              are the property of tedge.ai. You may not reverse-engineer, copy,
              or redistribute any part of the Platform or its analyses without
              written permission.
            </p>

            <h2>10. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued
              use of the Platform after changes constitutes acceptance. Material
              changes will be communicated via email or Platform notification.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of France. Any disputes shall
              be resolved in the courts of Paris, France.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:legal@tedge.ai"
                className="text-gold hover:underline"
              >
                legal@tedge.ai
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
