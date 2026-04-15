import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,151,58,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40 text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-gold/10 text-gold border-gold/20 text-xs font-mono"
        >
          AI-Powered Trading Intelligence
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-snow leading-[1.1] mb-6">
          Your Trading Edge,
          <br />
          <span className="text-gold">Powered by AI</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-mist leading-relaxed mb-10">
          Smart Market Structure analysis, real-time charts, automated trade
          signals, and intelligent alerts. Everything you need to trade with
          confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/coming-soon"
            className="bg-gold text-ink hover:bg-gold/80 font-semibold text-base px-8 h-12 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="border border-rim text-snow hover:bg-glass2 text-base px-8 h-12 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            See Features
          </a>
        </div>

        <p className="mt-6 text-xs text-mist">
          No credit card required. 10 credits free to test AI features.
        </p>
      </div>
    </section>
  );
}
