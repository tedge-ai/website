'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

const CHECK = "\u2713";
const CROSS = "\u2014";

function FeatureValue({ value }: { value: string }) {
  const { t } = useI18n();
  const translated = t(value);
  // If translation exists and differs from key, use it
  const display = translated !== value ? translated : value;

  if (display === CHECK) return <span className="text-jade font-bold">{CHECK}</span>;
  if (display === CROSS) return <span className="text-mist/30">{CROSS}</span>;
  if (display === t('unlimited'))
    return <span className="text-gold font-semibold text-xs">{display}</span>;
  return <span className="text-snow/70 text-xs">{display}</span>;
}

export function Pricing() {
  const { t } = useI18n();

  const TIERS = [
    {
      nameKey: 'freeName', price: '0', period: '',
      descKey: 'freeDesc', subKey: 'freeSub', ctaKey: 'freeCta',
      highlight: false,
      features: [
        { labelKey: 'pAiMessages', value: '10 (one-time)' },
        { labelKey: 'pAllSymbols', value: CHECK },
        { labelKey: 'pAllTools', value: CHECK },
        { labelKey: 'pMarketStructure', value: CHECK },
        { labelKey: 'pMode', value: 'modeDemo' },
        { labelKey: 'pBroker', value: CROSS },
        { labelKey: 'pAlerts', value: '3' },
        { labelKey: 'pMM', value: 'presets' },
        { labelKey: 'pNotifications', value: CROSS },
        { labelKey: 'pSupport', value: 'community' },
      ],
    },
    {
      nameKey: 'standardName', price: '49.90', period: '/mo',
      descKey: 'standardDesc', subKey: 'standardSub', ctaKey: 'standardCta',
      highlight: true,
      features: [
        { labelKey: 'pAiMessages', value: '20/day, 60/week' },
        { labelKey: 'pAllSymbols', value: CHECK },
        { labelKey: 'pAllTools', value: CHECK },
        { labelKey: 'pMarketStructure', value: CHECK },
        { labelKey: 'pMode', value: 'modeLiveDemo' },
        { labelKey: 'pBroker', value: CHECK },
        { labelKey: 'pAlerts', value: '20' },
        { labelKey: 'pMM', value: 'presetsCustom' },
        { labelKey: 'pNotifications', value: CHECK },
        { labelKey: 'pSupport', value: 'email' },
      ],
    },
    {
      nameKey: 'byokName', price: '19.90', period: '/mo',
      descKey: 'byokDesc', subKey: 'byokSub', ctaKey: 'byokCta',
      highlight: false,
      features: [
        { labelKey: 'pAiMessages', value: 'unlimited' },
        { labelKey: 'pAllSymbols', value: CHECK },
        { labelKey: 'pAllTools', value: CHECK },
        { labelKey: 'pMarketStructure', value: CHECK },
        { labelKey: 'pMode', value: 'modeLiveDemo' },
        { labelKey: 'pBroker', value: CHECK },
        { labelKey: 'pAlerts', value: '20' },
        { labelKey: 'pMM', value: 'presetsCustom' },
        { labelKey: 'pNotifications', value: CHECK },
        { labelKey: 'pSupport', value: 'email' },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            {t('pricingTitle')}
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <Card
              key={tier.nameKey}
              className={`relative overflow-visible bg-ink2 flex flex-col ${
                tier.highlight
                  ? "border-gold/40 shadow-[0_0_30px_rgba(201,151,58,0.1)]"
                  : "border-rim"
              }`}
            >
              {tier.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink font-semibold text-xs">
                  {t('recommended')}
                </Badge>
              )}
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-snow">{t(tier.nameKey)}</h3>
                <p className="text-xs text-mist mt-1">{t(tier.descKey)}</p>

                <div className="mt-4 mb-1">
                  <span className="text-4xl font-bold text-snow">
                    {tier.price}&euro;
                  </span>
                  <span className="text-sm text-mist">{tier.period}</span>
                </div>
                <p className="text-xs text-gold font-mono mb-6">
                  {t(tier.subKey)}
                </p>

                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li
                      key={f.labelKey}
                      className="flex items-center justify-between gap-2 text-xs py-0.5"
                    >
                      <span className="text-mist">{t(f.labelKey)}</span>
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
                  {t(tier.ctaKey)}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-mist">
            <span className="text-snow font-semibold">Bring Your Own Key</span> &mdash; {t('byokExplanation')}
          </p>
        </div>
      </div>
    </section>
  );
}
