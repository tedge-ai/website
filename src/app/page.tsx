'use client';

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n";

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </I18nProvider>
  );
}
