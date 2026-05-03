'use client';

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function Navbar() {
  const { t, locale, setLocale } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-rim bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.svg" alt="tedge" width={28} height={28} className="rounded-lg" />
          <span className="text-lg font-semibold text-snow tracking-tight">
            tedge<span className="text-gold">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-mist hover:text-snow transition-colors">
            {t('features')}
          </a>
          <a href="#pricing" className="text-sm text-mist hover:text-snow transition-colors">
            {t('pricing')}
          </a>
          <a href="#faq" className="text-sm text-mist hover:text-snow transition-colors">
            {t('faq')}
          </a>
          <a href="/changelog" className="text-sm text-mist hover:text-snow transition-colors">
            {t('changelog')}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
            className="text-sm text-mist hover:text-snow transition-colors px-2 py-1 flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-mono">{locale === 'fr' ? 'EN' : 'FR'}</span>
          </button>
          <a href="https://app.tedge.ai" className="text-sm text-mist hover:text-snow transition-colors px-3 py-2">
            {t('signIn')}
          </a>
          <a
            href="https://app.tedge.ai"
            className="text-sm bg-gold text-ink hover:bg-gold/80 font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            {t('getStarted')}
          </a>
        </div>
      </div>
    </header>
  );
}
