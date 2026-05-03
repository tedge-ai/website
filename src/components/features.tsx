'use client';

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FeatureVideo } from "@/components/feature-video";
import { useI18n } from "@/lib/i18n";

interface Feature {
  badgeKey: string;
  titleKey: string;
  descKey: string;
  highlightKeys: string[];
  video: string;
  reverse: boolean;
}

const FEATURES: Feature[] = [
  {
    badgeKey: 'featureAgentBadge', titleKey: 'featureAgentTitle', descKey: 'featureAgentDesc',
    highlightKeys: ['featureAgentH1', 'featureAgentH2', 'featureAgentH3', 'featureAgentH4'],
    video: '/videos/analysis.mp4', reverse: false,
  },
  {
    badgeKey: 'featureChartsBadge', titleKey: 'featureChartsTitle', descKey: 'featureChartsDesc',
    highlightKeys: ['featureChartsH1', 'featureChartsH2', 'featureChartsH3', 'featureChartsH4'],
    video: '/videos/charts.mp4', reverse: true,
  },
  {
    badgeKey: 'featureBrokerBadge', titleKey: 'featureBrokerTitle', descKey: 'featureBrokerDesc',
    highlightKeys: ['featureBrokerH1', 'featureBrokerH2', 'featureBrokerH3', 'featureBrokerH4'],
    video: '/videos/bridge.mp4', reverse: false,
  },
  {
    badgeKey: 'featureMMBadge', titleKey: 'featureMMTitle', descKey: 'featureMMDesc',
    highlightKeys: ['featureMMH1', 'featureMMH2', 'featureMMH3', 'featureMMH4'],
    video: '/videos/assistant.mp4', reverse: true,
  },
  {
    badgeKey: 'featureAlertsBadge', titleKey: 'featureAlertsTitle', descKey: 'featureAlertsDesc',
    highlightKeys: ['featureAlertsH1', 'featureAlertsH2', 'featureAlertsH3', 'featureAlertsH4'],
    video: '/videos/alerts.mp4', reverse: false,
  },
];

function FeatureBlock({ feature }: { feature: Feature }) {
  const { t } = useI18n();

  return (
    <div
      className={`flex flex-col ${
        feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-16 items-center py-16 md:py-24`}
    >
      <div className="flex-1 max-w-lg">
        <Badge
          variant="secondary"
          className="mb-4 bg-gold/10 text-gold border-gold/20 text-xs font-mono"
        >
          {t(feature.badgeKey)}
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold text-snow mb-4 leading-tight">
          {t(feature.titleKey)}
        </h3>
        <p className="text-mist leading-relaxed mb-6">{t(feature.descKey)}</p>
        <ul className="space-y-3">
          {feature.highlightKeys.map((key) => (
            <li key={key} className="flex items-start gap-3 text-sm">
              <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
              <span className="text-snow/80">{t(key)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <FeatureVideo src={feature.video} label={t(feature.badgeKey)} />
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="divide-y divide-rim">
          {FEATURES.map((feature) => (
            <FeatureBlock key={feature.badgeKey} feature={feature} />
          ))}
        </div>

        <Separator className="mt-12 bg-rim" />
      </div>
    </section>
  );
}
