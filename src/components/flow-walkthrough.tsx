"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function ClaudeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.705 15.956L9.423 13.308 9.502 13.078 9.423 12.95H9.192L8.403 12.902 5.707 12.829 3.37 12.732 1.105 12.61 0.534 12.489 0 11.785 0.055 11.432 0.534 11.111 1.22 11.171 2.738 11.275 5.015 11.432 6.666 11.53 9.113 11.785H9.502L9.556 11.627 9.423 11.53 9.32 11.432 6.964 9.836 4.414 8.148 3.078 7.176 2.356 6.685 1.991 6.223 1.834 5.215 2.489 4.493 3.37 4.554 3.594 4.614 4.487 5.3 6.393 6.776 8.882 8.609 9.247 8.913 9.392 8.81 9.411 8.737 9.247 8.463 7.893 6.017 6.448 3.527 5.804 2.495 5.634 1.876C5.573 1.621 5.531 1.409 5.531 1.147L6.278 0.134 6.691 0 7.686 0.134 8.105 0.498 8.725 1.912 9.726 4.141 11.281 7.17 11.736 8.069 11.979 8.901 12.07 9.156H12.228V9.01L12.355 7.304 12.592 5.209 12.823 2.514 12.902 1.755 13.278 0.844 14.025 0.352 14.608 0.631 15.087 1.317 15.021 1.761 14.735 3.612 14.177 6.515 13.812 8.457H14.025L14.268 8.215 15.251 6.909 16.903 4.845 17.631 4.025 18.481 3.121 19.028 2.69H20.06L20.819 3.819 20.479 4.985 19.416 6.332 18.536 7.474 17.273 9.174 16.484 10.534 16.557 10.643 16.745 10.625 19.598 10.018 21.14 9.738 22.98 9.423 23.812 9.811 23.903 10.206 23.575 11.013 21.608 11.499 19.301 11.961 15.864 12.774 15.822 12.805 15.871 12.865 17.419 13.011 18.08 13.047H19.702L22.719 13.272 23.508 13.794 23.982 14.432 23.903 14.917 22.689 15.537 21.049 15.148 17.224 14.237 15.913 13.909H15.731V14.019L16.824 15.087 18.827 16.897 21.335 19.228 21.462 19.805 21.14 20.26 20.8 20.212 18.597 18.554 17.747 17.807 15.822 16.186H15.694V16.356L16.138 17.006 18.481 20.527 18.603 21.608 18.433 21.96 17.826 22.173 17.158 22.051 15.786 20.127 14.371 17.959 13.229 16.016 13.09 16.095 12.416 23.35 12.1 23.721 11.372 24 10.765 23.539 10.443 22.792 10.765 21.317 11.153 19.392 11.469 17.862 11.754 15.962 11.924 15.33 11.912 15.288 11.772 15.306 10.34 17.273 8.16 20.218 6.436 22.063 6.023 22.227 5.306 21.857 5.373 21.195 5.774 20.606 8.16 17.571 9.599 15.688 10.528 14.602 10.522 14.444H10.467L4.129 18.56 2.999 18.706 2.514 18.25 2.574 17.504 2.805 17.261 4.711 15.949 4.705 15.956Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo data                                                           */
/* ------------------------------------------------------------------ */

type StepId = "slack" | "claude" | "frontend";

interface SlackMsg {
  id: string;
  sender: "engineer" | "ssai";
  name: string;
  avatar: string;
  time: string;
  text: string;
}

const slackMessages: SlackMsg[] = [
  {
    id: "s1",
    sender: "engineer",
    name: "Aarav P.",
    avatar: "A",
    time: "2:41 PM",
    text: "@ssai checkout deploy is failing -- errors started after the last release",
  },
  {
    id: "s2",
    sender: "ssai",
    name: "ssai",
    avatar: "S",
    time: "2:41 PM",
    text: "On it. Investigating deploy v2.3.2 now.",
  },
];

interface TermLine {
  type: "prompt" | "body" | "bold" | "dim" | "tool" | "blank";
  text: string;
}

const terminalLines: TermLine[] = [
  { type: "prompt", text: "investigate the checkout-api deploy failure and recommend a fix" },
  { type: "blank", text: "" },
  { type: "tool", text: "Reading deploy logs for v2.3.2" },
  { type: "tool", text: "Checking recent commits on checkout-api" },
  { type: "tool", text: "Verifying health of rollback target v2.3.1" },
  { type: "blank", text: "" },
  { type: "body", text: "Found the issue. Error rate jumped from 0.2% to 8.7% after deploy" },
  { type: "body", text: "v2.3.2. Schema migration in abc1234 broke the payment-provider" },
  { type: "body", text: "contract. Canary pods are in a restart loop in us-east-1." },
  { type: "blank", text: "" },
  { type: "bold", text: "Recommendation: Rollback checkout-api to v2.3.1. Previous release" },
  { type: "bold", text: "passed health checks and migration compatibility." },
  { type: "blank", text: "" },
  { type: "dim", text: "Opening thread in SSAI with full evidence." },
  { type: "blank", text: "" },
  { type: "dim", text: "Worked for 32s" },
];

interface EvidenceRow {
  color: string;
  text: string;
}

const evidenceRows: EvidenceRow[] = [
  { color: "bg-status-danger", text: "5xx rate increased from 0.2% to 8.7% after deploy." },
  { color: "bg-status-warning", text: "Schema migration in abc1234 broke payment-provider contract." },
  { color: "bg-status-healthy", text: "Previous release v2.3.1 passed health checks." },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

function renderSlackText(text: string, key: string) {
  const parts = text.split(/(@ssai)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part === "@ssai" ? (
      <span key={`${key}-${i}`} className="rounded-[3px] bg-[#D3E7FD] px-[3px] py-[1px] font-medium text-[#1264a3]">
        @ssai
      </span>
    ) : (
      <span key={`${key}-${i}`}>{part}</span>
    )
  );
}

function termColor(type: TermLine["type"]) {
  switch (type) {
    case "prompt": return "text-[#e0e0e0]";
    case "body":   return "text-[#c5c5c5]";
    case "bold":   return "text-[#e0e0e0] font-medium";
    case "dim":    return "text-[#6b6b6b]";
    case "tool":   return "text-[#c5c5c5]";
    case "blank":  return "";
  }
}

/* ------------------------------------------------------------------ */
/*  Tab config                                                         */
/* ------------------------------------------------------------------ */

const tabConfig: { id: StepId; label: string; icon: "slack" | "claude" | "ssai" }[] = [
  { id: "slack", label: "Slack", icon: "slack" },
  { id: "claude", label: "Claude Code", icon: "claude" },
  { id: "frontend", label: "SSAI", icon: "ssai" },
];

/* ------------------------------------------------------------------ */
/*  Sub-components: Slack chrome                                       */
/* ------------------------------------------------------------------ */

function SlackSidebar() {
  const channels = [
    { name: "general", unread: false },
    { name: "eng-ops", unread: true, active: true },
    { name: "deploys", unread: false },
    { name: "incidents", unread: false },
    { name: "random", unread: false },
  ];
  return (
    <div className="hidden w-[200px] shrink-0 flex-col bg-[#3F0E40] sm:flex">
      {/* Workspace header */}
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="text-[15px] font-bold text-white">Acme Corp</span>
        <svg className="h-3 w-3 text-white/50" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" /></svg>
      </div>

      <div className="mx-2 h-px bg-white/10" />

      {/* Nav items */}
      <div className="flex flex-col gap-0.5 px-2 pt-2">
        {["Threads", "DMs", "Activity"].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-md px-2 py-1 text-[13px] text-white/60">
            <span className="h-[14px] w-[14px] text-center text-[11px]">
              {item === "Threads" && "🧵"}
              {item === "DMs" && "💬"}
              {item === "Activity" && "🔔"}
            </span>
            {item}
          </div>
        ))}
      </div>

      {/* Channels */}
      <div className="mt-3 flex flex-col gap-0.5 px-2">
        <div className="flex items-center justify-between px-2 py-1">
          <span className="text-[12px] font-medium text-white/40">Channels</span>
        </div>
        {channels.map((ch) => (
          <div
            key={ch.name}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2 py-[3px] text-[13px]",
              ch.active
                ? "bg-[#1264A3] text-white font-medium"
                : "text-white/60"
            )}
          >
            <span className="text-[12px]">#</span>
            {ch.name}
            {ch.unread && !ch.active && (
              <span className="ml-auto h-[6px] w-[6px] rounded-full bg-white/80" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlackComposer() {
  return (
    <div className="border-t border-[#e8e8e8] px-4 py-2">
      <div className="rounded-lg border border-[#868686]">
        <div className="flex min-h-[32px] items-center px-3">
          <span className="text-[13px] text-[#868686]">Message #eng-ops</span>
        </div>
        <div className="flex items-center justify-between border-t border-[#e8e8e8] px-2 py-1">
          <div className="flex items-center gap-0.5">
            {/* Formatting toolbar icons */}
            {["B", "I", "S", "🔗", "⫶", "⫶", "</>"].map((icon, i) => (
              <span key={i} className="flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold text-[#868686]">{icon}</span>
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            <span className="flex h-6 w-6 items-center justify-center rounded text-[13px] text-[#868686]">+</span>
            <span className="flex h-6 w-6 items-center justify-center rounded text-[11px] text-[#868686]">Aa</span>
            <span className="flex h-6 w-6 items-center justify-center rounded text-[13px] text-[#868686]">@</span>
            <span className="flex h-6 w-6 items-center justify-center rounded text-[13px] text-[#c5c5c5]">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components: SSAI chrome                                        */
/* ------------------------------------------------------------------ */

function SsaiNav() {
  return (
    <div className="flex items-center gap-5 border-b border-rule px-4 py-2">
      <div className="flex items-center gap-1.5">
        <Image src="/logo-icon-2.png" alt="SSAI" width={20} height={20} className="h-5 w-5 rounded-[3px]" />
        <span className="font-title text-[15px] text-ink">
          <span className="text-[#4d4d4d]">ss</span><span className="text-[#4d4d4d]">ai</span>
        </span>
      </div>
      {["Tasks", "Ops", "Audit", "Settings"].map((item, i) => (
        <span
          key={item}
          className={cn(
            "text-[13px]",
            i === 0 ? "font-medium text-ink" : "text-text-muted"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SsaiSidebar() {
  const threads = [
    { title: "Deploy pipeline stuck on...", status: "blue" as const, active: false },
    { title: "Rollback checkout-api", status: "amber" as const, active: true },
    { title: "Cost anomaly in us-east...", status: "grey" as const, active: false },
    { title: "Security scan flagged dep...", status: "grey" as const, active: false },
    { title: "Alert: CPU spike on pay...", status: "green" as const, active: false },
  ];
  const dotColor = {
    blue: "bg-ssai-blue dot-glow-blue",
    amber: "bg-amber-500 dot-glow-warning",
    green: "bg-status-healthy",
    grey: "bg-text-muted/30",
  };
  return (
    <div className="hidden w-[220px] shrink-0 flex-col border-r border-rule sm:flex">
      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="text-[13px] font-semibold text-ink">Threads</span>
        <div className="flex items-center gap-1">
          <span className="flex h-6 w-6 items-center justify-center rounded-md text-text-muted hover:bg-[var(--surface-hover)]">
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5L14 14" /></svg>
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-md text-text-muted hover:bg-[var(--surface-hover)]">
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h12M2 8h12M2 12h12" /></svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-1.5">
        {threads.map((t) => (
          <div
            key={t.title}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px]",
              t.active
                ? "bg-[var(--surface-active)] font-medium text-ink"
                : "text-text-mid hover:bg-[var(--surface-hover)]"
            )}
          >
            <span className="flex-1 truncate">{t.title}</span>
            <span className={cn("h-[6px] w-[6px] shrink-0 rounded-full", dotColor[t.status])} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function FlowWalkthrough() {
  const [activeStep, setActiveStep] = useState<StepId>("slack");
  const [autoPlay, setAutoPlay] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [visibleSlack, setVisibleSlack] = useState(0);
  const [visibleTermLines, setVisibleTermLines] = useState(0);
  const [visibleEvidence, setVisibleEvidence] = useState(0);
  const [showGate, setShowGate] = useState(false);

  const [completed, setCompleted] = useState<Set<StepId>>(new Set());

  const sectionRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !hasStarted) { setHasStarted(true); setAutoPlay(true); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || !autoPlay) return;
    clearTimers();
    const t = timersRef.current;

    if (activeStep === "slack") {
      slackMessages.forEach((_, i) => {
        t.push(setTimeout(() => setVisibleSlack(i + 1), 400 + i * 1200));
      });
      const switchDelay = 400 + slackMessages.length * 1200 + 800;
      t.push(setTimeout(() => {
        setCompleted((s) => new Set(s).add("slack"));
        setActiveStep("claude");
      }, switchDelay));
    }

    if (activeStep === "claude") {
      terminalLines.forEach((_, i) => {
        t.push(setTimeout(() => setVisibleTermLines(i + 1), 300 + i * 400));
      });
      const switchDelay = 300 + terminalLines.length * 400 + 800;
      t.push(setTimeout(() => {
        setCompleted((s) => new Set(s).add("claude"));
        setActiveStep("frontend");
      }, switchDelay));
    }

    if (activeStep === "frontend") {
      evidenceRows.forEach((_, i) => {
        t.push(setTimeout(() => setVisibleEvidence(i + 1), 300 + i * 400));
      });
      t.push(setTimeout(() => setShowGate(true), 300 + evidenceRows.length * 400 + 400));
      t.push(setTimeout(() => {
        setCompleted((s) => new Set(s).add("frontend"));
        setAutoPlay(false);
      }, 300 + evidenceRows.length * 400 + 800));
    }

    return clearTimers;
  }, [activeStep, hasStarted, autoPlay, clearTimers]);

  function goToTab(step: StepId) {
    clearTimers();
    setAutoPlay(false);
    setActiveStep(step);
    if (step === "slack") setVisibleSlack(slackMessages.length);
    if (step === "claude") setVisibleTermLines(terminalLines.length);
    if (step === "frontend") { setVisibleEvidence(evidenceRows.length); setShowGate(true); }
    setCompleted((s) => new Set(s).add(step));
  }

  function replay() {
    clearTimers();
    setVisibleSlack(0);
    setVisibleTermLines(0);
    setVisibleEvidence(0);
    setShowGate(false);
    setCompleted(new Set());
    setActiveStep("slack");
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 50);
  }

  function isTabVisible(id: StepId): boolean {
    if (!hasStarted) return false;
    if (id === "slack") return true;
    if (id === "claude") return completed.has("slack") || activeStep === "claude" || activeStep === "frontend";
    if (id === "frontend") return completed.has("claude") || activeStep === "frontend";
    return false;
  }

  return (
    <div ref={sectionRef} className="relative z-10 mt-16">

      {/* ═══════════ TAB BAR ═══════════ */}
      <div className="flex items-center gap-2" style={{ minHeight: 40 }}>
        {tabConfig.map((tab) => {
          const isActive = activeStep === tab.id;
          const isDone = completed.has(tab.id);
          const visible = isTabVisible(tab.id);

          return (
            <button
              key={tab.id}
              onClick={() => visible && goToTab(tab.id)}
              className={cn(
                "flex items-center gap-2 rounded-md px-3.5 py-2 text-[13px] font-medium transition-all duration-300",
                visible
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0",
                isActive
                  ? "border border-[#4d4d4d] text-[#222222]"
                  : "border border-rule/60 text-[#aaa] hover:text-text-muted hover:border-rule"
              )}
            >
              {tab.icon === "slack" && <SlackIcon className="h-[14px] w-[14px]" />}
              {tab.icon === "claude" && <ClaudeIcon className="h-[14px] w-[14px]" />}
              {tab.icon === "ssai" && (
                <Image
                  src="/logo-icon-2.png" alt="SSAI" width={14} height={14}
                  className="h-[14px] w-[14px] rounded-[2px]"
                />
              )}
              <span className="hidden sm:inline">{tab.label}</span>
              {isDone && !isActive && (
                <Check className="h-3 w-3 text-status-healthy" strokeWidth={2.5} />
              )}
            </button>
          );
        })}

        <button
          onClick={replay}
          className={cn(
            "ml-auto flex items-center gap-1.5 rounded-md px-2.5 py-2 font-mono text-[11px] text-text-muted transition-all duration-300",
            "hover:bg-[var(--surface-hover)] hover:text-text-mid",
            completed.size > 0 ? "translate-y-0 opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <RefreshCw className="h-3 w-3" />
          Replay
        </button>
      </div>

      {/* ═══════════ PANEL CONTENT ═══════════ */}
      <div className={cn(
        "mt-3 overflow-hidden rounded-md transition-all duration-500",
        hasStarted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}>

        {/* ——— SLACK ——— */}
        {activeStep === "slack" && (
          <div className="flex animate-[fadeIn_300ms_ease-out] overflow-hidden rounded-md border border-[#e0e0e0]">
            {/* Sidebar with channels */}
            <SlackSidebar />

            {/* Message pane */}
            <div className="flex min-w-0 flex-1 flex-col bg-white">
              {/* Channel header */}
              <div className="flex items-center border-b border-[#e8e8e8] px-4 py-[8px]">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-[#1d1c1d]">
                    <span className="mr-1 font-normal text-[#616061]">#</span>eng-ops
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-1 text-[#616061]">
                  <span className="flex h-7 w-7 items-center justify-center rounded text-[13px]">👤</span>
                  <span className="text-[12px]">6</span>
                </div>
              </div>

              {/* Tab bar */}
              <div className="flex items-center gap-4 border-b border-[#e8e8e8] px-4">
                <span className="border-b-2 border-[#1264A3] py-2 text-[13px] font-medium text-[#1264A3]">Messages</span>
                <span className="py-2 text-[13px] text-[#616061]">Canvas</span>
                <span className="py-2 text-[13px] text-[#616061]">Files</span>
                <span className="py-2 text-[13px] text-[#616061]">+</span>
              </div>

              {/* Messages */}
              <div className="flex flex-1 flex-col px-5 py-4" style={{ minHeight: "320px" }}>
                {slackMessages.map((msg, i) => {
                  const prevMsg = i > 0 ? slackMessages[i - 1] : null;
                  const showHeader = !prevMsg || prevMsg.sender !== msg.sender;
                  return (
                    <div
                      key={msg.id}
                      className={cn(
                        "px-1 transition-all duration-500",
                        showHeader ? "mt-4 first:mt-0" : "mt-0.5",
                        i < visibleSlack ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                      )}
                    >
                      {showHeader ? (
                        <div className="flex gap-2">
                          {msg.sender === "ssai" ? (
                            <Image src="/logo-icon-2.png" alt="SSAI" width={36} height={36} className="mt-0.5 h-9 w-9 shrink-0 rounded-lg" />
                          ) : (
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2C744] text-[14px] font-bold text-white">{msg.avatar}</div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-[15px] font-bold text-[#1d1c1d]">
                                {msg.sender === "ssai" ? <span className="text-[#4d4d4d]">ssai</span> : msg.name}
                              </span>
                              {msg.sender === "ssai" && (
                                <span className="rounded-[3px] bg-[#ecebf0] px-1 py-[1px] text-[10px] font-medium text-[#616061]">APP</span>
                              )}
                              <span className="text-[12px] text-[#616061]">{msg.time}</span>
                            </div>
                            <p className="mt-[2px] text-[15px] leading-[1.46] text-[#1d1c1d]">{renderSlackText(msg.text, msg.id)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="pl-[44px]">
                          <p className="text-[15px] leading-[1.46] text-[#1d1c1d]">{renderSlackText(msg.text, msg.id)}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {visibleSlack > 0 && visibleSlack < slackMessages.length && slackMessages[visibleSlack]?.sender === "ssai" && (
                  <div className="mt-3 flex items-center gap-2 px-1">
                    <Image src="/logo-icon-2.png" alt="SSAI" width={20} height={20} className="h-5 w-5 shrink-0 rounded opacity-60" />
                    <div className="flex gap-[3px]">
                      <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#616061]/50" />
                      <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#616061]/50" style={{ animationDelay: "150ms" }} />
                      <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#616061]/50" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-[12px] text-[#616061]">ssai is typing...</span>
                  </div>
                )}
              </div>

              {/* Composer */}
              <SlackComposer />
            </div>
          </div>
        )}

        {/* ——— CLAUDE CODE ——— */}
        {activeStep === "claude" && (
          <div className="flex flex-col animate-[fadeIn_300ms_ease-out] overflow-hidden rounded-md border border-[#e0e0e0] bg-[#1a1a1a]">
            <div className="flex flex-col px-5 pb-0 pt-4 font-mono text-[13px] leading-[1.7]" style={{ minHeight: "360px" }}>
              {terminalLines.map((line, i) => {
                if (line.type === "blank") {
                  return (
                    <div
                      key={i}
                      className={cn(
                        "h-[1.7em] transition-all duration-300",
                        i < visibleTermLines ? "opacity-100" : "opacity-0"
                      )}
                    />
                  );
                }
                return (
                  <div
                    key={i}
                    className={cn(
                      "transition-all duration-400",
                      i < visibleTermLines ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0",
                      termColor(line.type)
                    )}
                  >
                    {line.type === "prompt" && <span className="text-[#6b6b6b]">{"❯ "}</span>}
                    {line.type === "tool" && <span className="text-[#6b6b6b]">{"  ● "}</span>}
                    {line.type === "dim" && line.text.startsWith("Worked") && <span>{"  ✻ "}</span>}
                    {line.type === "dim" && !line.text.startsWith("Worked") && "  "}
                    {line.type === "body" && "  "}
                    {line.type === "bold" && "  "}
                    {line.text}
                  </div>
                );
              })}

              {visibleTermLines < terminalLines.length && (
                <div className="flex items-center gap-0">
                  <span className="text-[#6b6b6b]">{"❯ "}</span>
                  <span className="inline-block h-[16px] w-[8px] animate-pulse bg-[#c5c5c5]/60" />
                </div>
              )}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-[#2a2a2a] px-5 py-2 font-mono text-[11px]">
              <div className="text-[#555]">
                <span className="text-[#888]">ssai-landing</span>
                {" "}
                <span className="text-[#b5890a]">±</span>
                <span className="text-[#888]">main</span>
                <span className="text-[#444]"> | </span>
                <span className="text-[#666]">Opus 4.6</span>
                <span className="text-[#444]"> | </span>
                <span className="text-[#666]">default</span>
              </div>
              <div className="text-[#555]">24,891 tokens</div>
            </div>

            {/* Permissions line */}
            <div className="flex items-center gap-1.5 border-t border-[#2a2a2a] px-5 py-1.5 font-mono text-[11px]">
              <span className="text-[#b5890a]">{"▸▸"}</span>
              <span className="text-[#b5890a]">bypass permissions on</span>
              <span className="text-[#555]">(shift+tab to cycle)</span>
            </div>
          </div>
        )}

        {/* ——— SSAI FRONTEND ——— */}
        {activeStep === "frontend" && (
          <div className="flex flex-col animate-[fadeIn_300ms_ease-out] overflow-hidden rounded-md border border-[#e0e0e0] bg-[var(--surface-bg)]">
            {/* Top nav */}
            <SsaiNav />

            <div className="flex flex-1">
              {/* Thread sidebar */}
              <SsaiSidebar />

              {/* Main content */}
              <div className="flex min-w-0 flex-1 flex-col bg-[var(--surface-card)] px-6 py-5" style={{ minHeight: "360px" }}>
                <div className="flex items-center gap-2">
                  <div className="font-mono text-[10px] text-text-muted">prod / checkout-api / run_4831</div>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-sm bg-status-warning/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-status-warning">
                    <span className="h-[5px] w-[5px] rounded-full bg-amber-500 dot-glow-warning" />
                    awaiting approval
                  </span>
                </div>
                <h3 className="mt-2 font-title text-[22px] leading-tight text-ink">
                  Rollback checkout-api to v2.3.1
                </h3>
                <p className="mt-2 max-w-[580px] text-[14px] leading-[1.55] text-text-mid">
                  Error rate crossed policy threshold after deploy v2.3.2. Canary logs show repeated payment-provider timeouts.
                </p>

                {/* Evidence */}
                <div className="mt-5 max-w-[580px] rounded-xl border border-rule p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted">Evidence</p>
                  <div className="mt-3 flex flex-col gap-3 text-[13px] text-text-mid">
                    {evidenceRows.map((row, i) => (
                      <div
                        key={row.text}
                        className={cn(
                          "flex items-start gap-2 transition-all duration-500",
                          i < visibleEvidence ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0"
                        )}
                      >
                        <span className={cn("mt-1.5 h-[6px] w-[6px] shrink-0 rounded-full", row.color)} />
                        {row.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action gate */}
                <div
                  className={cn(
                    "mt-auto max-w-[580px] pt-5 transition-all duration-500",
                    showGate ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
                  )}
                >
                  <div className="h-1.5 overflow-hidden rounded-full bg-rule">
                    <div className="h-full w-[72%] rounded-full bg-ssai-blue" />
                  </div>
                  <div className="mt-4 flex justify-between gap-3">
                    <span className="flex h-9 items-center rounded-lg border border-rule px-4 text-[14px] font-medium text-text">
                      Veto rollback
                    </span>
                    <span className="flex h-9 items-center rounded-lg bg-ssai-blue px-4 text-[14px] font-medium" style={{ color: "#fffefc" }}>
                      Confirm now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
