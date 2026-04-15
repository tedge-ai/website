"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What are the 3 included AI analyses?",
    answer:
      "Every plan — including Free — gets real-time AI analyses on EUR/USD, XAU/USD, and BTC/USD. These are the most traded instruments worldwide. Our AI agent runs analyses at strategic times (pre-Europe, pre-US open, overlap sessions) so you always have fresh setups when the market moves. No credits needed.",
  },
  {
    question: "What are credits and why do custom analyses cost credits?",
    answer:
      "Credits are used exclusively for AI analyses on symbols beyond the 3 included majors. Each custom analysis uses our most advanced AI model (Claude Opus) which costs us significantly to run. Credits let us offer you unlimited symbol coverage while keeping subscription prices affordable. Chat, alerts, and post-trade coaching never consume credits.",
  },
  {
    question: "How much does a custom analysis cost?",
    answer:
      "It depends on your plan: 50 credits on Free, 40 on Starter, 30 on Pro, and 20 on Elite. With 1 credit = 0.10\u20ac, that\u2019s 2\u20ac to 5\u20ac per analysis. Each analysis identifies key institutional zones, entry setups with SL/TP levels, and a risk/reward assessment — typically finding at least one high-probability setup.",
  },
  {
    question: "Can I schedule analyses on the included symbols?",
    answer:
      "The 3 major symbols are analyzed automatically at optimal times — you don\u2019t need to schedule them. Scheduling is available for custom symbols (the ones that use credits). This way, you get the best of both worlds: free automated analyses on majors, and on-demand analyses on any other symbol you trade.",
  },
  {
    question: "What is Market Structure and is it free?",
    answer:
      "Market Structure is our real-time trend detection system. It identifies Break of Structure (BOS), Change of Character (ChoCh), and swing points directly on your chart — updated live with every candle. It\u2019s completely free on all plans and doesn\u2019t use any AI credits. It replaces traditional trend indicators with objective, algorithmic structure analysis.",
  },
  {
    question: "What does the AI Coach do?",
    answer:
      "After every trade closes, the AI Coach automatically reviews your execution: was the plan followed? Was the timing right? Was the risk appropriate? You get a discipline score (1-10) and actionable feedback. If you add notes to document your reasoning, the coach re-evaluates with your context. Pro and Elite plans also get periodic performance syntheses.",
  },
  {
    question: "Which brokers are supported?",
    answer:
      "tEdge works with any MT5 or cTrader broker through our EdgeBridge connector. We\u2019ve tested with IC Markets, BlackBull Markets, OANDA, and Pepperstone. Our analyses use reference market data and are automatically adapted to your broker\u2019s symbol naming. The entry zones are accurate across brokers — typical OHLC differences are negligible on H1/H4 timeframes.",
  },
  {
    question: "Why do analyses use reference data instead of my broker\u2019s data?",
    answer:
      "By using a single reference data source, we can run each analysis once and serve it to all users regardless of their broker. This mutualisation is what allows us to include 3 major analyses for free. The price differences between brokers on H1/H4 timeframes are typically 1-3 pips — negligible compared to the 15-50+ pip zones our AI identifies. We recommend accounting for your broker\u2019s spread when placing entries.",
  },
  {
    question: "Can I use tEdge with a demo account?",
    answer:
      "Yes! The Free plan is demo-only, which is perfect for evaluating the platform. You get full access to AI analyses on 3 major pairs, Market Structure, and the charting tools. When you\u2019re ready to trade live, upgrade to Starter or above to connect your broker.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "Your included analyses on EUR/USD, XAU/USD, and BTC/USD continue working — they never use credits. You simply won\u2019t be able to run custom symbol analyses until you recharge or your monthly credits renew. Recharge packs start at 10\u20ac, and higher plans get better rates (up to 150 credits for 10\u20ac on Elite).",
  },
  {
    question: "What is the custom strategy feature (Elite)?",
    answer:
      "Elite members can define their own trading strategy in natural language — for example, \u201cICT Silver Bullet setup on London session with FVG confirmation\u201d. The AI agent will follow your specific methodology instead of the default Supply & Demand approach. This uses credits but gives you a fully personalized analysis experience.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-snow mb-4">
            Frequently asked questions
          </h2>
          <p className="text-mist text-lg">
            Everything you need to know about tEdge AI.
          </p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-rim rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-glass/30 transition-colors"
              >
                <span className="text-sm font-medium text-snow">
                  {faq.question}
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
                    {faq.answer}
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
