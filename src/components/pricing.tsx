import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CHECK = "\u2713";
const CROSS = "\u2014";

const TIERS = [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Discover the AI agent",
    subtitle: "10 AI messages to try everything",
    cta: "Get Started",
    highlight: false,
    features: [
      { label: "AI Agent messages", value: "10 (one-time)" },
      { label: "All symbols", value: CHECK },
      { label: "All agent tools", value: CHECK },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Demo only" },
      { label: "MT5 / cTrader", value: CROSS },
      { label: "Active alerts", value: "3" },
      { label: "Money Management", value: "Presets" },
      { label: "Push / Telegram", value: CROSS },
      { label: "Support", value: "Community" },
    ],
  },
  {
    name: "Standard",
    price: "49.90",
    period: "/mo",
    description: "For traders who integrate AI into their daily routine",
    subtitle: "20 messages/day — AI costs included",
    cta: "Subscribe",
    highlight: true,
    features: [
      { label: "AI Agent messages", value: "20/day, 60/week" },
      { label: "All symbols", value: CHECK },
      { label: "All agent tools", value: CHECK },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 / cTrader", value: CHECK },
      { label: "Active alerts", value: "20" },
      { label: "Money Management", value: "Presets + Custom" },
      { label: "Push / Telegram", value: CHECK },
      { label: "Support", value: "Email" },
    ],
  },
  {
    name: "Bring Your Own Key",
    price: "19.90",
    period: "/mo",
    description: "For advanced traders with intensive AI usage",
    subtitle: "Unlimited — your own Anthropic API key",
    cta: "Subscribe",
    highlight: false,
    features: [
      { label: "AI Agent messages", value: "Unlimited" },
      { label: "All symbols", value: CHECK },
      { label: "All agent tools", value: CHECK },
      { label: "Market Structure", value: CHECK },
      { label: "Mode", value: "Live + Demo" },
      { label: "MT5 / cTrader", value: CHECK },
      { label: "Active alerts", value: "20" },
      { label: "Money Management", value: "Presets + Custom" },
      { label: "Push / Telegram", value: CHECK },
      { label: "Support", value: "Email" },
    ],
  },
];

function FeatureValue({ value }: { value: string }) {
  if (value === CHECK) return <span className="text-jade font-bold">{CHECK}</span>;
  if (value === CROSS) return <span className="text-mist/30">{CROSS}</span>;
  if (value === "Unlimited")
    return <span className="text-gold font-semibold text-xs">{value}</span>;
  return <span className="text-snow/70 text-xs">{value}</span>;
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            Start free with 10 AI messages. Upgrade for daily access
            to your AI trading agent, or bring your own API key for
            unlimited usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Recommended
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
                  {tier.subtitle}
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
                  href="https://app.tedge.ai"
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

        {/* BYOK explanation */}
        <div className="mt-12 text-center">
          <p className="text-sm text-mist">
            <span className="text-snow font-semibold">Bring Your Own Key</span> &mdash; Use
            your own Anthropic API key for unlimited agent usage.
            AI costs are billed directly by Anthropic. tedge.ai charges only for
            the platform and broker infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
