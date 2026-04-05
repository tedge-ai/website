import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CHECK = "\u2713";
const CROSS = "\u2014";

const TIERS = [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Explore the platform",
    credits: "10 credits offered",
    cta: "Get Started",
    highlight: false,
    features: [
      { label: "3 symbols (BTC, XAU, EUR/USD)", included: true },
      { label: "All timeframes", included: true },
      { label: "All drawing tools & indicators", included: true },
      { label: "AI Analysis (3 symbols, M15)", included: true },
      { label: "Demo mode only", included: true },
      { label: "3 active alerts", included: true },
      { label: "MT5 Bridge", included: false },
      { label: "AI Chat", included: false },
      { label: "Live trading", included: false },
      { label: "Push notifications", included: false },
    ],
  },
  {
    name: "Basic",
    price: "19",
    period: "/mo",
    description: "Full platform access",
    credits: "15 credits/mo included",
    cta: "Subscribe",
    highlight: false,
    features: [
      { label: "All symbols", included: true },
      { label: "All timeframes", included: true },
      { label: "All drawing tools & indicators", included: true },
      { label: "AI Analysis (all symbols, M15)", included: true },
      { label: "Live + Demo mode", included: true },
      { label: "20 active alerts", included: true },
      { label: "MT5 Bridge", included: true },
      { label: "AI Chat", included: true },
      { label: "Live trading", included: true },
      { label: "Push notifications", included: true },
    ],
  },
  {
    name: "Advanced",
    price: "49",
    period: "/mo",
    description: "For active traders",
    credits: "40 credits/mo included",
    cta: "Subscribe",
    highlight: true,
    features: [
      { label: "All symbols", included: true },
      { label: "All timeframes", included: true },
      { label: "All drawing tools & indicators", included: true },
      { label: "AI Analysis (multi-TF)", included: true },
      { label: "Live + Demo mode", included: true },
      { label: "Unlimited alerts", included: true },
      { label: "MT5 Bridge", included: true },
      { label: "AI Chat", included: true },
      { label: "Live trading", included: true },
      { label: "Scheduler (5 slots)", included: true },
    ],
  },
  {
    name: "Premium",
    price: "149",
    period: "/mo",
    description: "Unlimited AI power",
    credits: "Unlimited (fair use)",
    cta: "Subscribe",
    highlight: false,
    features: [
      { label: "All symbols", included: true },
      { label: "All timeframes", included: true },
      { label: "All drawing tools & indicators", included: true },
      { label: "AI Analysis + custom strategy", included: true },
      { label: "Live + Demo mode", included: true },
      { label: "Unlimited alerts", included: true },
      { label: "MT5 Bridge", included: true },
      { label: "AI Chat (priority)", included: true },
      { label: "Live trading", included: true },
      { label: "Scheduler (unlimited)", included: true },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            Start free, upgrade when you need more. AI features use credits —
            included in every plan, rechargeable anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={`relative bg-ink2 flex flex-col ${
                tier.highlight
                  ? "border-gold/40 shadow-[0_0_30px_rgba(201,151,58,0.1)]"
                  : "border-rim"
              }`}
            >
              {tier.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink font-semibold text-xs">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-snow">{tier.name}</h3>
                <p className="text-xs text-mist mt-1">{tier.description}</p>

                <div className="mt-4 mb-1">
                  <span className="text-4xl font-bold text-snow">
                    {tier.price}&euro;
                  </span>
                  <span className="text-sm text-mist">{tier.period}</span>
                </div>
                <p className="text-xs text-gold font-mono mb-6">
                  {tier.credits}
                </p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2 text-xs">
                      <span
                        className={`shrink-0 mt-0.5 ${
                          f.included ? "text-jade" : "text-mist/40"
                        }`}
                      >
                        {f.included ? CHECK : CROSS}
                      </span>
                      <span
                        className={
                          f.included ? "text-snow/80" : "text-mist/40"
                        }
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.tedge.ai/sign-up"
                  className={`w-full font-semibold text-sm h-9 rounded-lg inline-flex items-center justify-center transition-colors ${
                    tier.highlight
                      ? "bg-gold text-ink hover:bg-gold/80"
                      : "bg-glass2 text-snow hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
