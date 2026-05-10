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
  const { t, locale } = useI18n();

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            {locale === 'en' ? 'Beta Program' : 'Programme Bêta'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            {locale === 'en' ? 'Free early access' : 'Accès anticipé gratuit'}
          </h2>
          <p className="text-mist text-lg max-w-2xl mx-auto">
            {locale === 'en'
              ? 'tedge.ai is currently in beta. Join the first testers and get free access in exchange for your feedback.'
              : 'tedge.ai est actuellement en bêta. Rejoins les premiers testeurs et bénéficie d\'un accès gratuit en échange de ton feedback.'}
          </p>
        </div>

        <Card className="bg-ink2 border-gold/30 shadow-[0_0_30px_rgba(201,151,58,0.1)]">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-snow mb-2">
              {locale === 'en' ? 'Beta Tester' : 'Bêta-testeur'}
            </h3>
            <div className="mt-2 mb-6">
              <span className="text-4xl font-bold text-snow">0&euro;</span>
            </div>

            <ul className="space-y-2 text-left max-w-sm mx-auto mb-8">
              {(locale === 'en' ? [
                'AI agent with ICT/SMC analysis',
                'Market Structure overlay',
                'Multi-timeframe chart',
                'Demo trading with MM',
                'Broker connection (MT5, cTrader)',
                'Price alerts',
              ] : [
                'Agent IA avec analyse ICT/SMC',
                'Overlay Market Structure',
                'Graphique multi-timeframe',
                'Trading demo avec Money Management',
                'Connexion broker (MT5, cTrader)',
                'Alertes prix',
              ]).map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm">
                  <span className="text-jade font-bold">{CHECK}</span>
                  <span className="text-snow/80">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.tedge.ai"
              className="w-full max-w-xs mx-auto font-semibold text-sm h-11 rounded-lg inline-flex items-center justify-center bg-gold text-ink hover:bg-gold/80 transition-colors"
            >
              {locale === 'en' ? 'Try it free' : 'Essayer gratuitement'}
            </a>

            <p className="text-xs text-mist mt-4">
              {locale === 'en'
                ? 'No credit card required. Free during beta.'
                : 'Pas de carte bancaire. Gratuit pendant la bêta.'}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
