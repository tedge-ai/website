import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "tedge.ai — AI-Powered Trading Intelligence",
  description:
    "Smart Market Structure analysis powered by AI. Real-time charts, automated analysis, trade management, and alerts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable} dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const t = localStorage.getItem('edge:theme');
            if (t === 'light' || (!t && window.matchMedia('(prefers-color-scheme: light)').matches)) {
              document.documentElement.classList.replace('dark', 'light');
            }
          } catch {}
        `}} />
      </head>
      <body className="min-h-dvh flex flex-col bg-ink text-snow antialiased">
        {children}
      </body>
    </html>
  );
}
