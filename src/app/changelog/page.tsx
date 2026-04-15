import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Release {
  version: string;
  date: string;
  title: string;
  highlights?: string[];
  features?: string[];
  improvements?: string[];
  fixes?: string[];
}

const RELEASES: Release[] = [
  {
    version: "0.4.0",
    date: "2026-04-15",
    title: "Multi-broker & Subscription tiers",
    highlights: [
      "Analyses available across all brokers (MT5, cTrader) via unified symbol mapping",
      "New subscription model: Free, Starter, Pro, Elite with credit system",
    ],
    features: [
      "Cross-broker symbol mapping — analyses on reference data work with any broker",
      "Symbol mapper with 398 mappings across IC Markets, BlackBull, OANDA",
      "Subscription tiers with credit-based custom analyses",
      "Profile page: manage subscription, edit display name, view credits & limits",
      "Enriched Telegram notifications: trade details, R:R, entry zones, trigger conditions",
      "Unread alerts system with badge counter and mark-as-read",
      "AI Coach: source opportunity context + re-review when user adds notes",
      "Agent analysis cost tracking with cache token breakdown",
    ],
    improvements: [
      "Chart performance: INP reduced from 600ms to 104ms",
      "Chart reuse on symbol switch — no more destroy/recreate",
      "Market Structure rendering: 400x fewer array copies per frame",
      "Lazy symbol dropdown + adaptive candle count per timeframe",
      "Rebranded to tedge.ai across the entire platform",
    ],
    fixes: [
      "Fixed chart viewport not resetting on symbol switch (autoScale)",
      "Fixed partial close (TP1) crash due to null account reference",
      "Trade close now uses server-side tick price instead of frontend",
      "Fixed cross-symbol price contamination on manual trade close",
      "Fixed alert bell state lost after navigation",
    ],
  },
  {
    version: "0.3.0",
    date: "2026-04-04",
    title: "Drawing tools & Live trading",
    highlights: [
      "15 professional drawing tools (TradingView-style click-click mode)",
      "Demo trading with AI Coach post-trade review",
    ],
    features: [
      "Drawing tools: HorizontalLine, VerticalLine, TrendLine, Ray, Rectangle, FibRetracement, FibExtension, ParallelChannel, Arrow, LongShort Position, HorizontalRay, ExtendedLine, PriceRange, TextNote, Brush",
      "Click-click creation mode with live preview",
      "Position Long/Short with multi-TP support (TP1/TP2/TP3)",
      "AI Coach: automatic post-trade review with discipline score",
      "Analysis scheduler with cron-based execution",
      "Telegram bot integration (@edgeai_trading_bot)",
      "Push notifications (PWA + Service Worker)",
      "Dashboard with performance stats and AI coaching insights",
      "MFE/MAE tracking on demo trades",
    ],
    improvements: [
      "Zone entry alerts: trigger at zone boundary, not midpoint",
      "Chart timezone support with automatic server TZ detection",
      "Infinite scroll history on charts",
      "Market Structure overlay with BOS/ChoCh/swing detection",
    ],
    fixes: [
      "Fixed channel left endpoint drag changing width",
      "Fixed body drag collapsing drawings to vertical line",
      "Fixed rectangle corner drag + added edge midpoint handles",
    ],
  },
  {
    version: "0.2.0",
    date: "2026-03-20",
    title: "AI Analysis engine",
    highlights: [
      "Agentic AI analysis with multi-timeframe zone detection",
      "Smart Market Structure (BOS, ChoCh) real-time overlay",
    ],
    features: [
      "AI-powered market analysis with institutional zone detection",
      "Multi-timeframe analysis (H4, H1, M15)",
      "Opportunity scoring with R:R estimation",
      "Market Structure dashboard (multi-TF trend overview)",
      "Chart indicators: EMA, SMA, BB, RSI, ATR, ADX",
      "Oscillator sub-panes",
      "MT5 bridge integration via EdgeBridge",
    ],
  },
  {
    version: "0.1.0",
    date: "2026-03-01",
    title: "Initial release",
    highlights: [
      "Professional charting platform with dark theme",
      "Real-time price data via TwelveData",
    ],
    features: [
      "Candlestick charts with lightweight-charts",
      "Multi-timeframe support (M1 to D1)",
      "Symbol selector with favorites",
      "Basic chart tools and overlays",
      "Clerk authentication",
    ],
  },
];

function TagBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider ${color}`}>
      {label}
    </span>
  );
}

export default function Changelog() {
  return (
    <>
      <Navbar />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-snow mb-4">
              Changelog
            </h1>
            <p className="text-mist text-lg">
              What&apos;s new in tedge.ai — weekly releases every Monday.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-rim" />

            <div className="space-y-12">
              {RELEASES.map((release) => (
                <div key={release.version} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-gold border-2 border-ink" />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-lg font-bold font-mono text-gold">
                      v{release.version}
                    </span>
                    <span className="text-sm text-mist">
                      {new Date(release.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-snow mb-3">
                    {release.title}
                  </h3>

                  {/* Highlights */}
                  {release.highlights && (
                    <div className="mb-4 p-3 rounded-lg bg-gold/5 border border-gold/20">
                      <ul className="space-y-1">
                        {release.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-snow flex gap-2">
                            <span className="text-gold shrink-0">&#10024;</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Features */}
                  {release.features && release.features.length > 0 && (
                    <div className="mb-3">
                      <TagBadge label="New" color="bg-jade/20 text-jade" />
                      <ul className="mt-2 space-y-1">
                        {release.features.map((f, i) => (
                          <li key={i} className="text-sm text-mist pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-jade">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvements */}
                  {release.improvements && release.improvements.length > 0 && (
                    <div className="mb-3">
                      <TagBadge label="Improved" color="bg-gold/20 text-gold" />
                      <ul className="mt-2 space-y-1">
                        {release.improvements.map((f, i) => (
                          <li key={i} className="text-sm text-mist pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gold">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Fixes */}
                  {release.fixes && release.fixes.length > 0 && (
                    <div className="mb-3">
                      <TagBadge label="Fixed" color="bg-crimson/20 text-crimson" />
                      <ul className="mt-2 space-y-1">
                        {release.fixes.map((f, i) => (
                          <li key={i} className="text-sm text-mist pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-crimson">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
