import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FeatureVideo } from "@/components/feature-video";

const FEATURES = [
  {
    badge: "AI Analysis",
    title: "Instant Market Structure Analysis",
    description:
      "Edge AI identifies key price levels, order blocks, fair value gaps, and liquidity zones using Smart Money Concepts. Get actionable trade setups with a single click.",
    highlights: [
      "Support & resistance zones auto-detected",
      "Order blocks & fair value gaps highlighted",
      "Multi-timeframe bias (H4/H1)",
      "Trade opportunities with entry, SL, TP",
    ],
    video: "/videos/analysis.mp4",
    reverse: false,
  },
  {
    badge: "Live Charts",
    title: "Professional Charting, Real-Time Data",
    description:
      "21 timeframes, drawing tools, customizable indicators, and automatic overlay of AI-detected zones. Powered by TradingView Lightweight Charts.",
    highlights: [
      "All MT5 timeframes including M2, M3, H6, H12",
      "Trendlines, Fibonacci, channels, positions",
      "EMA, SMA, RSI, ADX with full customization",
      "Infinite scroll history",
    ],
    video: "/videos/charts.mp4",
    reverse: true,
  },
  {
    badge: "MT5 Bridge",
    title: "Your MetaTrader 5, Connected",
    description:
      "Install EdgeBridge on your Windows machine and get live data feeds, real-time position tracking, and direct trade execution from the web platform.",
    highlights: [
      "Live bid/ask prices from your broker",
      "All your broker's symbols available",
      "Real-time P&L on positions",
      "Execute trades directly from the chart",
    ],
    video: "/videos/bridge.mp4",
    reverse: false,
  },
  {
    badge: "AI Assistant",
    title: "Chat With Your Trading AI",
    description:
      "Ask Edge AI about any market, strategy, or setup. Get real-time insights, second opinions on your trade ideas, and learn as you trade.",
    highlights: [
      "Context-aware market discussions",
      "Strategy validation & risk assessment",
      "Learn SMC concepts interactively",
      "Available 24/7",
    ],
    video: "/videos/assistant.mp4",
    reverse: true,
  },
  {
    badge: "Alerts & Scheduler",
    title: "Never Miss a Setup",
    description:
      "Set price alerts on key levels and schedule automated analyses. Get push notifications when price approaches your zones or when new opportunities appear.",
    highlights: [
      "Price alerts with push notifications",
      "Scheduled AI analysis on your watchlist",
      "Alert on AI-detected opportunities",
      "Mobile notifications via PWA",
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
            A complete trading intelligence platform that combines AI analysis
            with professional tools.
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
