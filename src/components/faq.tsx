"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What does the AI agent do exactly?",
    answer:
      "The AI agent is your trading assistant. You chat with it in natural language — ask it to analyze a chart, draw key zones and levels, add indicators, calculate position sizing, or prepare a trade. It uses real-time market data, draws directly on your chart, and can manage alerts and trades for you.",
  },
  {
    question: "What are the 10 free messages?",
    answer:
      "When you sign up, you get 10 AI messages to try the full platform — same AI model, same tools as paid plans. That's enough for 2-3 complete analyses with drawings and setups. No credit card required.",
  },
  {
    question: "What's the difference between Standard and BYOK?",
    answer:
      "Standard (49.90\u20ac/mo) includes 20 AI messages per day with AI costs included in your subscription. BYOK (19.90\u20ac/mo) lets you use your own Anthropic API key for unlimited messages — AI costs are billed directly by Anthropic. Both include full broker access, all tools, and all features.",
  },
  {
    question: "What is BYOK (Bring Your Own Key)?",
    answer:
      "BYOK means you provide your own Anthropic API key. You get unlimited AI agent usage and pay for AI costs directly to Anthropic. tedge.ai charges 19.90\u20ac/mo for the platform, broker connectivity, and all features.",
  },
  {
    question: "What happens when I reach my daily message limit?",
    answer:
      "The AI agent will let you know and suggest upgrading. Your positions, alerts, and charts remain fully functional — you just can't send new messages to the agent until the quota resets. Weekly limit prevents overuse across the week.",
  },
  {
    question: "What is Market Structure and is it free?",
    answer:
      "Market Structure is our real-time trend detection system. It identifies Break of Structure (BOS), Change of Character (ChoCh), and swing points directly on your chart — updated live with every candle. It's free on all plans.",
  },
  {
    question: "Which brokers are supported?",
    answer:
      "tedge.ai supports cTrader (direct cloud connection) and MetaTrader 5 (via tedge connect, our lightweight Windows connector). Compatible with IC Markets, BlackBull Markets, Pepperstone, FxPro, Axiory, and more.",
  },
  {
    question: "Can I use tedge.ai with a demo account?",
    answer:
      "Yes! The Free plan includes a virtual demo account to practice trading. You get full access to the AI agent (10 messages), Market Structure, charting tools, and money management. Upgrade to Standard or BYOK to connect your real broker.",
  },
  {
    question: "What can the AI agent draw on my chart?",
    answer:
      "The agent can draw zones (supply/demand, order blocks), horizontal levels, support/resistance lines, and trade setups with entry/SL/TP markers. It can also recommend and apply indicators. All drawings are labeled, can be locked, and sync across your devices.",
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
            Everything you need to know about tedge.ai.
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
