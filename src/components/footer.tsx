'use client';

import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-rim">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/icon.svg" alt="tedge" width={24} height={24} className="rounded-md" />
              <span className="text-sm font-semibold text-snow">
                tedge<span className="text-gold">.ai</span>
              </span>
            </div>
            <p className="text-xs text-mist leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-snow uppercase tracking-wider mb-3">
              {t('product')}
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-xs text-mist hover:text-snow transition-colors">{t('features')}</a></li>
              <li><a href="#pricing" className="text-xs text-mist hover:text-snow transition-colors">{t('pricing')}</a></li>
              <li><a href="https://docs.tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">{t('documentation')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-snow uppercase tracking-wider mb-3">
              {t('platform')}
            </h4>
            <ul className="space-y-2">
              <li><a href="https://app.tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">{t('signUp')}</a></li>
              <li><a href="https://app.tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">{t('signIn')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-snow uppercase tracking-wider mb-3">
              {t('support')}
            </h4>
            <ul className="space-y-2">
              <li><a href="mailto:support@tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">{t('contact')}</a></li>
              <li><a href="https://docs.tedge.ai" className="text-xs text-mist hover:text-snow transition-colors">{t('helpCenter')}</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-rim" />

        <div className="mb-8 p-4 rounded-lg border border-rim/50 bg-ink/50">
          <p className="text-[10px] text-mist/70 leading-relaxed">
            <span className="font-semibold text-mist/90">{t('riskDisclaimer')}</span>{" "}
            {t('riskText1')}
          </p>
          <p className="text-[10px] text-mist/70 leading-relaxed mt-2">
            {t('riskText2')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist">
            &copy; {new Date().getFullYear()} tedge.ai — {t('allRights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-mist hover:text-snow transition-colors">{t('privacyPolicy')}</a>
            <a href="/terms" className="text-xs text-mist hover:text-snow transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
