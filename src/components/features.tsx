import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FeatureVideo } from "@/components/feature-video";

const FEATURES = [
  {
    badge: "AI Agent",
    title: "Your AI Trading Edge",
    description:
      "Ask the agent to analyze any chart with any strategy — price action, supply & demand, ICT, SMC, or your own methodology. It enriches your chart with zones, key levels, indicators, and prepares trades with entry, SL, and TP.",
    highlights: [
      "Multi-timeframe analysis on any symbol, any strategy",
      "Draws zones, levels, and indicators directly on your chart",
      "Prepares trades with pre-filled execution dialog",
      "Scans multiple markets to find the best setups",
    ],
    video: "/videos/analysis.mp4",
    reverse: false,
  },
  {
    badge: "Live Charts",
    title: "Professional Charting, Real-Time Data",
    description:
      "21 timeframes, drawing tools, customizable indicators, and automatic Market Structure overlay. Synced across all your devices.",
    highlights: [
      "All timeframes including M2, M3, H6, H12",
      "Trendlines, Fibonacci, channels, rectangles",
      "EMA, SMA, RSI, ADX with full customization",
      "Drawings synced between desktop and mobile",
    ],
    video: "/videos/charts.mp4",
    reverse: true,
  },
  {
    badge: "Broker Connected",
    title: "MT5 & cTrader, Live Execution",
    description:
      "Connect your MetaTrader 5 via tedge connect or your cTrader account directly. Get live prices, track positions in real-time, and execute trades from the platform or through the AI agent.",
    highlights: [
      "Live bid/ask from your broker",
      "All your broker's symbols available",
      "Real-time P&L tracking with inline SL/TP editing",
      "Execute trades directly — or let the agent prepare them",
    ],
    video: "/videos/bridge.mp4",
    reverse: false,
  },
  {
    badge: "Risk Management",
    title: "Built-In Money Management",
    description:
      "Define your risk profile, and the agent calculates optimal position sizing for every trade. Multiple MM presets and custom profiles to match your trading style.",
    highlights: [
      "Automatic lot sizing based on risk percentage",
      "Preset profiles: Prudent, Standard, Aggressive",
      "Custom profiles for advanced traders",
      "Agent calculates sizing on demand",
    ],
    video: "/videos/assistant.mp4",
    reverse: true,
  },
  {
    badge: "Alerts",
    title: "Never Miss a Setup",
    description:
      "Set price alerts on key levels — manually or through the AI agent. Get notified when price reaches your zones.",
    highlights: [
      "Price alerts with push notifications",
      "Agent creates alerts automatically after analysis",
      "Cross up, cross down, above, below conditions",
      "Telegram notifications available",
    ],
    video: "/videos/alerts.mp4",
    reverse: false,
  },
];

function FeatureBlock({
  badge,
  title,
  description,
  highlights,
  video,
  reverse,
}: (typeof FEATURES)[number]) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-16 items-center py-16 md:py-24`}
    >
      {/* Text */}
      <div className="flex-1 max-w-lg">
        <Badge
          variant="secondary"
          className="mb-4 bg-gold/10 text-gold border-gold/20 text-xs font-mono"
        >
          {badge}
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold text-snow mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-mist leading-relaxed mb-6">{description}</p>
        <ul className="space-y-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm">
              <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
              <span className="text-snow/80">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video / Placeholder */}
      <div className="flex-1 w-full max-w-xl">
        <FeatureVideo src={video} label={badge} />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            Everything you need to trade smarter
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            An AI agent connected to your broker that analyzes, draws, and
            prepares your trades.
          </p>
        </div>

        <div className="divide-y divide-rim">
          {FEATURES.map((feature) => (
            <FeatureBlock key={feature.badge} {...feature} />
          ))}
        </div>

        <Separator className="mt-12 bg-rim" />
      </div>
    </section>
  );
}
