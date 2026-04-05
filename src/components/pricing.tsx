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
      { label: "Symbols", value: "3 (BTC, XAU, EUR/USD)" },
      { label: "Mode", value: "Demo only" },
      { label: "MT5 Bridge", value: CROSS },
      { label: "Indicators / chart", value: "2" },
      { label: "Saved drawings", value: "5" },
      { label: "Active alerts", value: "3" },
      { label: "Scheduler slots", value: CROSS },
      { label: "AI Credits / mo", value: "10 (one-time)" },
      { label: "AI Analysis", value: "3 symbols" },
      { label: "Custom strategy", value: CROSS },
      { label: "AI Chat", value: CROSS },
      { label: "Candle history", value: "2,000" },
      { label: "Push notifications", value: CROSS },
      { label: "Support", value: "Community" },
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
      { label: "Symbols", value: "All" },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 Bridge", value: CHECK },
      { label: "Indicators / chart", value: "5" },
      { label: "Saved drawings", value: "20" },
      { label: "Active alerts", value: "20" },
      { label: "Scheduler slots", value: "2" },
      { label: "AI Credits / mo", value: "15" },
      { label: "AI Analysis", value: "All symbols" },
      { label: "Custom strategy", value: CROSS },
      { label: "AI Chat", value: CHECK },
      { label: "Candle history", value: "5,000" },
      { label: "Push notifications", value: CHECK },
      { label: "Support", value: "Email" },
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
      { label: "Symbols", value: "All" },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 Bridge", value: CHECK },
      { label: "Indicators / chart", value: "15" },
      { label: "Saved drawings", value: "100" },
      { label: "Active alerts", value: "100" },
      { label: "Scheduler slots", value: "10" },
      { label: "AI Credits / mo", value: "40" },
      { label: "AI Analysis", value: "All symbols" },
      { label: "Custom strategy", value: CROSS },
      { label: "AI Chat", value: CHECK },
      { label: "Candle history", value: "20,000" },
      { label: "Push notifications", value: CHECK },
      { label: "Support", value: "Priority" },
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
      { label: "Symbols", value: "All" },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 Bridge", value: CHECK },
      { label: "Indicators / chart", value: "Unlimited" },
      { label: "Saved drawings", value: "Unlimited" },
      { label: "Active alerts", value: "Unlimited" },
      { label: "Scheduler slots", value: "Unlimited" },
      { label: "AI Credits / mo", value: "Unlimited" },
      { label: "AI Analysis", value: "All symbols" },
      { label: "Custom strategy", value: CHECK },
      { label: "AI Chat", value: "Priority" },
      { label: "Candle history", value: "Unlimited" },
      { label: "Push notifications", value: CHECK },
      { label: "Support", value: "Dedicated" },
    ],
  },
];

function FeatureValue({ value }: { value: string }) {
  if (value === CHECK) return <span className="text-jade font-bold">{CHECK}</span>;
  if (value === CROSS) return <span className="text-mist/30">{CROSS}</span>;
  if (value === "Unlimited" || value === "Priority" || value === "Dedicated")
    return <span className="text-gold font-semibold text-xs">{value}</span>;
  if (value === "All" || value === "All symbols")
    return <span className="text-snow/90 text-xs">{value}</span>;
  return <span className="text-snow/70 text-xs">{value}</span>;
}

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

                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li
                      key={f.label}
                      className="flex items-center justify-between gap-2 text-xs py-0.5"
                    >
                      <span className="text-mist">{f.label}</span>
                      <FeatureValue value={f.value} />
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
