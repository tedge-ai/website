import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FEATURES = [
  {
    title: "AI Market Analysis",
    description:
      "Edge AI identifies key price levels, order blocks, fair value gaps, and liquidity zones using Smart Money Concepts. Get actionable trade setups in seconds.",
    icon: "🧠",
  },
  {
    title: "Real-Time Charts",
    description:
      "Professional charting with 21 timeframes, drawing tools, indicators, and automatic overlay of AI-detected zones. Powered by TradingView technology.",
    icon: "📊",
  },
  {
    title: "MT5 Bridge",
    description:
      "Connect your MetaTrader 5 terminal for live data feeds, real-time position tracking, and direct trade execution from the platform.",
    icon: "🔗",
  },
  {
    title: "Smart Alerts",
    description:
      "Set price alerts on key levels. Get push notifications when price approaches your zones, with AI context on the setup quality.",
    icon: "🔔",
  },
  {
    title: "Trade Management",
    description:
      "Track your positions, pending orders, and trade history. Demo and live mode with real-time P&L. Execute trades directly from the chart.",
    icon: "📈",
  },
  {
    title: "AI Assistant",
    description:
      "Chat with Edge AI about any market, strategy, or setup. Get real-time insights and second opinions on your trade ideas.",
    icon: "💬",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            Everything you need to trade smarter
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            A complete trading intelligence platform that combines AI analysis
            with professional tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="bg-ink2 border-rim hover:border-gold/20 transition-colors"
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-snow mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="mt-24 bg-rim" />
      </div>
    </section>
  );
}
