'use client';

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,151,58,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40 text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-gold/10 text-gold border-gold/20 text-xs font-mono"
        >
          {t('heroBadge')}
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-snow leading-[1.1] mb-6">
          {t('heroTitle1')}
          <br />
          <span className="text-gold">{t('heroTitle2')}</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-mist leading-relaxed mb-10">
          {t('heroDescription')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.tedge.ai"
            className="bg-gold text-ink hover:bg-gold/80 font-semibold text-base px-8 h-12 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            {t('heroCta')}
          </a>
          <a
            href="#features"
            className="border border-rim text-snow hover:bg-glass2 text-base px-8 h-12 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            {t('heroSeeFeatures')}
          </a>
        </div>

        <p className="mt-6 text-xs text-mist">
          {t('heroFootnote')}
        </p>
      </div>
    </section>
  );
}
