"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What does the AI agent do exactly?",
    answer:
      "The AI agent is your trading edge. You chat with it in natural language — ask it to analyze a chart, draw supply & demand zones, identify order blocks, calculate your position sizing, or prepare a trade. It uses real-time market data, takes screenshots of your chart, and draws directly on it. It can also set price alerts and scan multiple markets for you.",
  },
  {
    question: "What are the 10 free messages?",
    answer:
      "When you sign up, you get 10 AI messages to try the full platform — same Sonnet model, same tools as paid plans. That's enough for 2-3 complete chart analyses with drawings and setups. No credit card required.",
  },
  {
    question: "What's the difference between Standard and BYOK?",
    answer:
      "Standard (49\u20ac/mo) includes 20 AI messages per day using our Sonnet model. BYOK (19\u20ac/mo) lets you use your own Anthropic API key for unlimited messages — you pay Anthropic directly for AI costs. Both include full broker access, all tools, and all features. BYOK is ideal for power users who send many messages daily.",
  },
  {
    question: "What is BYOK (Bring Your Own Key)?",
    answer:
      "BYOK means you provide your own Anthropic API key. You get unlimited AI agent usage, choose your preferred model (Sonnet, Opus, Haiku), and pay Anthropic directly for AI costs. tedge.ai charges 19\u20ac/mo for the platform infrastructure and broker connectivity.",
  },
  {
    question: "What happens when I reach my daily message limit?",
    answer:
      "You'll be blocked until the next day. Your weekly limit (100 messages/week) prevents overuse across the week. Your positions, alerts, and charts remain fully functional — you just can't send new messages to the AI agent until the quota resets.",
  },
  {
    question: "What is Market Structure and is it free?",
    answer:
      "Market Structure is our real-time trend detection system. It identifies Break of Structure (BOS), Change of Character (ChoCh), and swing points directly on your chart — updated live with every candle. It's completely free on all plans. It replaces traditional trend indicators with objective, algorithmic structure analysis.",
  },
  {
    question: "Which brokers are supported?",
    answer:
      "tedge.ai supports cTrader (direct cloud connection) and MT5 (via our lightweight EdgeBridge connector). We've tested with IC Markets, BlackBull Markets, OANDA, and Pepperstone. The AI agent can execute trades through your connected broker.",
  },
  {
    question: "Can I use tedge.ai with a demo account?",
    answer:
      "Yes! The Free plan is demo-only, perfect for evaluating the platform. You get full access to the AI agent (10 messages), Market Structure, charting tools, and money management. When you're ready to trade live, upgrade to Standard or BYOK to connect your broker.",
  },
  {
    question: "What can the AI agent draw on my chart?",
    answer:
      "The agent can draw supply/demand zones (rectangles with labels), horizontal price levels, support/resistance lines, and entry/SL/TP markers. It can also clear all drawings and redraw updated levels. All drawings are labeled and persist on your chart.",
  },
  {
    question: "How does Money Management work?",
    answer:
      "You define risk profiles (Prudent, Standard, Aggressive, or custom). When the AI agent prepares a trade, it calculates optimal lot sizing based on your profile, account balance, and the distance to your stop loss. You can also ask the agent directly: \"what's my sizing for this setup?\"",
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
