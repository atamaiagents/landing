"use client";

import { useState } from "react";

// ─── Pricing Data ────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Starter",
    monthly: 19,
    features: [
      "1 agent",
      "5 GB storage",
      "Community support",
      "Bring Your Own Keys",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    monthly: 49,
    features: [
      "5 agents",
      "25 GB storage",
      "Priority support",
      "Bring Your Own Keys",
      "All channels (Telegram, Slack, Discord, Web)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    monthly: 79,
    annualMonthly: 65,
    features: [
      "20 agents",
      "100 GB storage",
      "Dedicated support",
      "Bring Your Own Keys",
      "All channels",
      "Custom domain",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];

const features = [
  {
    icon: "⚡",
    title: "60-Second Deploy",
    desc: "From signup to live agent in under a minute. No config files, no infra knowledge required.",
  },
  {
    icon: "🔑",
    title: "Bring Your Own Keys",
    desc: "Connect your Anthropic, OpenAI, or Google keys. We never store or share your API credentials.",
  },
  {
    icon: "📱",
    title: "All Your Channels",
    desc: "Telegram, Slack, Discord, and embeddable web chat — deploy once, reach everywhere.",
  },
  {
    icon: "🔧",
    title: "800+ Integrations",
    desc: "Powered by Composio SDK. Connect Gmail, Notion, GitHub, Jira, HubSpot, and hundreds more.",
  },
  {
    icon: "📊",
    title: "Real-time Monitoring",
    desc: "Live logs, uptime graphs, and usage metrics so you always know what your agent is doing.",
  },
  {
    icon: "🔒",
    title: "Isolated Containers",
    desc: "Each agent runs in its own container. Fully isolated, zero blast radius, auto-restarting.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-sm">
            A
          </div>
          <span className="font-semibold text-white text-lg">AtamaiAgents</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
        </div>
        <a
          href="https://app.atamai.ai"
          className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent-light text-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Now in beta — 50+ agents running live
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Your AI Agent,{" "}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            Live in 60 Seconds
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Managed cloud hosting for open-source AI agents.
          <br className="hidden sm:block" /> No Docker, no VPS, no headaches.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.atamai.ai"
            className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-accent/30"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-white/60 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition-colors border border-white/10 hover:border-white/20"
          >
            See how it works ↓
          </a>
        </div>

        <p className="mt-6 text-sm text-white/30">
          No credit card required · Cancel anytime · 7-day money-back guarantee
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect your account",
      desc: "Sign up with GitHub in one click. No forms, no email confirmation loops.",
    },
    {
      num: "02",
      title: "Choose your agent",
      desc: "Pick OpenClaw to start — more agents coming. Bring your own LLM API key.",
    },
    {
      num: "03",
      title: "Go live",
      desc: "Your agent spins up in under 60 seconds. Connect channels, start chatting.",
    },
  ];

  return (
    <section id="how-it-works" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Three steps.{" "}
            <span className="text-accent-light">Under a minute.</span>
          </h2>
          <p className="text-white/50 text-lg">
            Seriously. We timed it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-6xl font-black text-accent/20 font-mono mb-4 select-none">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-white/50 text-lg mb-8">
            All plans include BYOK, all integrations, and a 7-day money-back guarantee.
          </p>

          {/* Annual toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-2">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-accent text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-accent text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Annual
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const price = annual
              ? (plan.annualMonthly ?? Math.round(plan.monthly * 0.8))
              : plan.monthly;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "border-accent bg-accent/5 shadow-xl shadow-accent/10 scale-105"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black text-white">
                      ${price}
                    </span>
                    <span className="text-white/40 mb-2">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-sm text-green-400 mt-1">
                      Billed ${price * 12}/year · Save ${(plan.monthly - price) * 12}/yr
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/70">
                      <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.atamai.ai"
                  className={`w-full text-center font-semibold py-3 rounded-xl transition-all ${
                    plan.popular
                      ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/30 hover:scale-105"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need.{" "}
            <span className="text-accent-light">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-white/50 text-lg">
            Built for developers who want agents running, not infra debugging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/20 transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured agent templates
const featuredTemplates = [
  {
    slug: "invoice-manager",
    icon: "💰",
    name: "Invoice Manager",
    description: "Automated invoice processing, tracking, and reminders",
    category: "finance",
  },
  {
    slug: "inbox-zero",
    icon: "📧",
    name: "Inbox Zero",
    description: "Smart email triage, responses, and inbox management",
    category: "productivity",
  },
  {
    slug: "incident-responder",
    icon: "🚨",
    name: "Incident Responder",
    description: "24/7 alert monitoring, triage, and escalation",
    category: "devops",
  },
  {
    slug: "social-media",
    icon: "📱",
    name: "Social Media Manager",
    description: "Content scheduling, engagement, and analytics",
    category: "marketing",
  },
  {
    slug: "code-reviewer",
    icon: "🔍",
    name: "Code Reviewer",
    description: "Automated PR reviews with context-aware feedback",
    category: "development",
  },
  {
    slug: "contract-reviewer",
    icon: "⚖️",
    name: "Contract Reviewer",
    description: "AI-powered contract analysis and risk detection",
    category: "legal",
  },
];

function AgentTemplates() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            80+ Ready-to-Deploy Agents
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Pre-configured templates for every use case. Pick one, customize it, deploy in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTemplates.map((template) => (
            <div
              key={template.slug}
              className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/20 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{template.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors truncate">
                      {template.name}
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 line-clamp-2 mb-2">
                    {template.description}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded bg-white/5 text-xs text-white/40 capitalize">
                    {template.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://app.atamai.ai/dashboard/marketplace"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors text-lg"
          >
            Browse all 80+ templates →
          </a>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl">
        <div className="text-center py-16 px-8 rounded-3xl border border-accent/20 bg-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent text-2xl">★</span>
              ))}
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join 50+ developers already running agents on AtamaiAgents
            </p>
            <p className="text-white/50 text-lg mb-8">
              From solo hackers to small teams — they shipped agents, not infra.
            </p>
            <a
              href="https://app.atamai.ai"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-accent/30"
            >
              Join them — it&apos;s free to start
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center font-bold text-white text-xs">
              A
            </div>
            <span className="text-white/70 font-medium">AtamaiAgents</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <a
              href="https://app.atamai.ai"
              className="hover:text-white transition-colors"
            >
              Dashboard
            </a>
            <a
              href="https://docs.atamai.ai"
              className="hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/atamaiagents"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms
            </a>
          </nav>

          <p className="text-sm text-white/30">
            © 2026 Atamai AI. Built for builders.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <AgentTemplates />
        <Pricing />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}