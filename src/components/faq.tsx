'use client';

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const FAQ_KEYS = [
  { q: 'faq1q', a: 'faq1a' },
  { q: 'faq2q', a: 'faq2a' },
  { q: 'faq3q', a: 'faq3a' },
  { q: 'faq4q', a: 'faq4a' },
  { q: 'faq5q', a: 'faq5a' },
  { q: 'faq6q', a: 'faq6a' },
  { q: 'faq7q', a: 'faq7a' },
  { q: 'faq8q', a: 'faq8a' },
  { q: 'faq9q', a: 'faq9a' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            {t('faqTitle')}
          </h2>
          <p className="text-mist text-lg">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="space-y-2">
          {FAQ_KEYS.map((faq, i) => (
            <div
              key={i}
              className="border border-rim rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-glass/30 transition-colors"
              >
                <span className="text-sm font-medium text-snow">
                  {t(faq.q)}
                </span>
                <span
                  className={`text-mist shrink-0 transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-mist leading-relaxed">
                    {t(faq.a)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
