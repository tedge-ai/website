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
    credits: "30 credits offered",
    cta: "Get Started",
    highlight: false,
    features: [
      { label: "AI Analyses", value: "3 majors included" },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Demo only" },
      { label: "MT5 / cTrader", value: CROSS },
      { label: "Credits / mo", value: "30 (one-time)" },
      { label: "Custom symbol analysis", value: "50 credits" },
      { label: "Active alerts", value: "3" },
      { label: "Scheduler", value: CROSS },
      { label: "AI Chat", value: CROSS },
      { label: "AI Coach", value: CROSS },
      { label: "Push / Telegram", value: CROSS },
      { label: "Saved drawings", value: "5" },
      { label: "Support", value: "Community" },
    ],
  },
  {
    name: "Starter",
    price: "29",
    period: "/mo",
    description: "Go live with AI edge",
    credits: "80 credits/mo included",
    cta: "Subscribe",
    highlight: false,
    features: [
      { label: "AI Analyses", value: "3 majors included" },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 / cTrader", value: CHECK },
      { label: "Credits / mo", value: "80" },
      { label: "Custom symbol analysis", value: "40 credits" },
      { label: "Active alerts", value: "15" },
      { label: "Scheduler", value: "1 slot" },
      { label: "AI Chat", value: "15 msg/day" },
      { label: "AI Coach", value: "Post-trade review" },
      { label: "Push / Telegram", value: CHECK },
      { label: "Saved drawings", value: "20" },
      { label: "Support", value: "Email" },
    ],
  },
  {
    name: "Pro",
    price: "59",
    period: "/mo",
    description: "For active traders",
    credits: "250 credits/mo included",
    cta: "Subscribe",
    highlight: true,
    features: [
      { label: "AI Analyses", value: "3 majors included" },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 / cTrader", value: CHECK },
      { label: "Credits / mo", value: "250" },
      { label: "Custom symbol analysis", value: "30 credits" },
      { label: "Active alerts", value: "50" },
      { label: "Scheduler", value: "5 slots" },
      { label: "AI Chat", value: "50 msg/day" },
      { label: "AI Coach", value: "Review + Monthly synthesis" },
      { label: "Push / Telegram", value: CHECK },
      { label: "Saved drawings", value: "100" },
      { label: "Support", value: "Priority" },
    ],
  },
  {
    name: "Elite",
    price: "99",
    period: "/mo",
    description: "Unlimited AI power",
    credits: "600 credits/mo included",
    cta: "Subscribe",
    highlight: false,
    features: [
      { label: "AI Analyses", value: "Majors + extended" },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 / cTrader", value: CHECK },
      { label: "Credits / mo", value: "600" },
      { label: "Custom symbol analysis", value: "20 credits" },
      { label: "Active alerts", value: "Unlimited" },
      { label: "Scheduler", value: "Unlimited" },
      { label: "AI Chat", value: "Unlimited" },
      { label: "AI Coach", value: "Review + Weekly synthesis" },
      { label: "Push / Telegram", value: CHECK },
      { label: "Saved drawings", value: "Unlimited" },
      { label: "Support", value: "Dedicated" },
    ],
  },
];

function FeatureValue({ value }: { value: string }) {
  if (value === CHECK) return <span className="text-jade font-bold">{CHECK}</span>;
  if (value === CROSS) return <span className="text-mist/30">{CROSS}</span>;
  if (value === "Unlimited" || value === "Dedicated")
    return <span className="text-gold font-semibold text-xs">{value}</span>;
  if (value.includes("majors") || value.includes("Majors"))
    return <span className="text-jade text-xs">{value}</span>;
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
            Start free with AI analyses on major pairs. Use credits to analyze
            any symbol you want — included in every paid plan, rechargeable
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={`relative overflow-visible bg-ink2 flex flex-col ${
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
                  href="/coming-soon"
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

        {/* Credit recharge info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-mist">
            Need more credits? Recharge anytime from{" "}
            <span className="text-snow font-semibold">10&euro;</span>.
            Higher plans get better rates — up to{" "}
            <span className="text-gold font-semibold">150 credits for 10&euro;</span>{" "}
            on Elite.
          </p>
        </div>
      </div>
    </section>
  );
}
