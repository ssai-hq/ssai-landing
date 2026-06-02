"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  GitCommitVertical,
  Server,
  AlertTriangle,
  Brain,
  Clock3,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Slack mock SVG icons                                               */
/* ------------------------------------------------------------------ */

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function HashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M9.493 2.852a.75.75 0 0 0-1.486-.204L7.545 6H4.198a.75.75 0 0 0 0 1.5h3.14l-.69 5H3.302a.75.75 0 0 0 0 1.5h3.14l-.462 3.352a.75.75 0 0 0 1.486.204L7.93 14h4.644l-.462 3.352a.75.75 0 0 0 1.486.204L14.06 14h3.346a.75.75 0 0 0 0-1.5h-3.14l.69-5h3.346a.75.75 0 0 0 0-1.5h-3.14l.462-3.348a.75.75 0 0 0-1.486-.204L13.57 6H8.926l.462-3.348a.75.75 0 0 0-.895-.8zM8.72 7.5l-.69 5h4.644l.69-5H8.72z" clipRule="evenodd" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Demo script                                                         */
/* ------------------------------------------------------------------ */

interface SlackMessage {
  id: string;
  sender: "engineer" | "ssai";
  name: string;
  avatar: string;
  time: string;
  text: string;
}

const slackMessages: SlackMessage[] = [
  {
    id: "msg-1",
    sender: "engineer",
    name: "Aarav P.",
    avatar: "A",
    time: "2:41 PM",
    text: "@ssai checkout deploy is failing again — errors started after the last release",
  },
  {
    id: "msg-2",
    sender: "ssai",
    name: "ssai",
    avatar: "S",
    time: "2:41 PM",
    text: "Looking into this. Checking deploy v2.3.2, service health, and recent schema changes.",
  },
  {
    id: "msg-3",
    sender: "ssai",
    name: "ssai",
    avatar: "S",
    time: "2:42 PM",
    text: "Found the issue. 5xx rate jumped from 0.2% to 8.7% after deploy. Payment-provider timeouts in canary logs. Recommending rollback to v2.3.1.",
  },
  {
    id: "msg-4",
    sender: "ssai",
    name: "ssai",
    avatar: "S",
    time: "2:42 PM",
    text: "Thread opened in SSAI with full evidence and rollback action gate. Awaiting approval.",
  },
];

interface EvidenceItem {
  icon: typeof GitCommitVertical;
  source: string;
  detail: string;
}

const evidenceItems: EvidenceItem[] = [
  { icon: GitCommitVertical, source: "GitHub", detail: "Schema migration in deploy v2.3.2 broke payment-provider contract" },
  { icon: AlertTriangle, source: "Metrics", detail: "5xx rate 0.2% → 8.7% in 4 minutes post-deploy" },
  { icon: Server, source: "Cloud", detail: "Canary pod restart loop detected in us-east-1" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Renders Slack-style @mention highlights */
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

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export function FlowWalkthrough() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showThread, setShowThread] = useState(false);
  const [visibleEvidence, setVisibleEvidence] = useState(0);
  const [showMemory, setShowMemory] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Start animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Auto-advance the demo sequence
  useEffect(() => {
    if (!hasStarted) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Messages appear one by one
    slackMessages.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMessages(i + 1), 600 + i * 1400));
    });

    // After all messages, show the thread panel
    const threadDelay = 600 + slackMessages.length * 1400 + 600;
    timers.push(setTimeout(() => setShowThread(true), threadDelay));

    // Evidence items appear one by one
    evidenceItems.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleEvidence(i + 1), threadDelay + 500 + i * 700));
    });

    // Memory line
    const memoryDelay = threadDelay + 500 + evidenceItems.length * 700 + 500;
    timers.push(setTimeout(() => setShowMemory(true), memoryDelay));

    return () => timers.forEach(clearTimeout);
  }, [hasStarted]);

  // Allow replay
  function replay() {
    setVisibleMessages(0);
    setShowThread(false);
    setVisibleEvidence(0);
    setShowMemory(false);
    setHasStarted(false);
    // Re-trigger after a tick
    setTimeout(() => setHasStarted(true), 50);
  }

  return (
    <div ref={sectionRef} className="relative z-10 mt-16 flex flex-col gap-6">
      {/* Two-panel layout: Slack left, SSAI right */}
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ============ SLACK MOCK ============ */}
        <div className="flex overflow-hidden rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
          {/* Aubergine sidebar */}
          <div className="hidden w-[180px] shrink-0 flex-col bg-[#3F0E40] sm:flex">
            {/* Workspace header */}
            <div className="flex items-center gap-2 px-3 pb-2 pt-3">
              <span className="text-[15px] font-bold text-white">Acme Corp</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-white/50" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Channels section */}
            <div className="mt-2 flex flex-col gap-0.5 px-2">
              <span className="px-2 pb-1 text-[12px] font-medium tracking-wide text-white/40">Channels</span>
              {["general", "engineering", "deploys"].map((ch) => (
                <div key={ch} className="flex items-center gap-1.5 rounded-md px-2 py-[5px] text-[13px] text-white/70">
                  <span className="text-[14px] text-white/40">#</span>
                  {ch}
                </div>
              ))}
              {/* Active channel */}
              <div className="flex items-center gap-1.5 rounded-md bg-[#1264A3] px-2 py-[5px] text-[13px] font-medium text-white">
                <span className="text-[14px] text-white/70">#</span>
                eng-ops
              </div>
              {["incidents", "random"].map((ch) => (
                <div key={ch} className="flex items-center gap-1.5 rounded-md px-2 py-[5px] text-[13px] text-white/70">
                  <span className="text-[14px] text-white/40">#</span>
                  {ch}
                </div>
              ))}
            </div>

            {/* DMs section */}
            <div className="mt-4 flex flex-col gap-0.5 px-2">
              <span className="px-2 pb-1 text-[12px] font-medium tracking-wide text-white/40">Direct messages</span>
              <div className="flex items-center gap-2 rounded-md px-2 py-[5px] text-[13px] text-white/70">
                <span className="relative flex h-[18px] w-[18px] items-center justify-center rounded-[3px] bg-white/20 text-[10px] font-bold text-white">A
                  <span className="absolute -bottom-0.5 -right-0.5 h-[7px] w-[7px] rounded-full border-[1.5px] border-[#3F0E40] bg-[#007a5a]" />
                </span>
                Aarav P.
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-[5px] text-[13px] text-white/70">
                <span className="relative flex h-[18px] w-[18px] items-center justify-center rounded-[3px] bg-white/20 text-[10px] font-bold text-white">M</span>
                Maya R.
              </div>
            </div>
          </div>

          {/* Message area */}
          <div className="flex min-w-0 flex-1 flex-col bg-white">
            {/* Channel header */}
            <div className="flex items-center gap-2 border-b border-[#e8e8e8] px-4 py-[10px]">
              <span className="text-[15px] font-bold text-[#1d1c1d]">
                <span className="mr-1 font-normal text-[#616061]">#</span>eng-ops
              </span>
              <span className="hidden text-[13px] text-[#616061] sm:inline">|</span>
              <span className="hidden truncate text-[13px] text-[#616061] sm:inline">Deploys, infra, and operational threads</span>
            </div>

            {/* Messages */}
            <div className="flex flex-1 flex-col gap-0 overflow-y-auto px-5 py-3" style={{ minHeight: "340px" }}>
              {slackMessages.map((msg, i) => {
                const prevMsg = i > 0 ? slackMessages[i - 1] : null;
                const sameSender = prevMsg?.sender === msg.sender;
                const showHeader = !sameSender || i === 0;

                return (
                  <div
                    key={msg.id}
                    className={cn(
                      "rounded-md px-2 transition-all duration-500",
                      showHeader ? "mt-3 first:mt-0" : "mt-0",
                      i < visibleMessages
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    )}
                  >
                    {showHeader ? (
                      <div className="flex gap-2">
                        {/* Avatar */}
                        {msg.sender === "ssai" ? (
                          <Image
                            src="/logo-icon-2.png"
                            alt="SSAI"
                            width={36}
                            height={36}
                            className="mt-0.5 h-9 w-9 shrink-0 rounded-lg"
                          />
                        ) : (
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2C744] text-[14px] font-bold text-white">
                            {msg.avatar}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-[15px] font-bold text-[#1d1c1d]">
                              {msg.sender === "ssai" ? (
                                <span className="text-[#4d4d4d]">ssai</span>
                              ) : msg.name}
                            </span>
                            {msg.sender === "ssai" && (
                              <span className="rounded-[3px] bg-[#ecebf0] px-1 py-[1px] text-[10px] font-medium text-[#616061]">APP</span>
                            )}
                            <span className="text-[12px] text-[#616061]">{msg.time}</span>
                          </div>
                          <p className="mt-[2px] text-[15px] leading-[1.46] text-[#1d1c1d]">
                            {renderSlackText(msg.text, msg.id)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Collapsed follow-up message (same sender) */
                      <div className="pl-[44px]">
                        <p className="text-[15px] leading-[1.46] text-[#1d1c1d]">
                          {renderSlackText(msg.text, msg.id)}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {visibleMessages > 0 && visibleMessages < slackMessages.length && slackMessages[visibleMessages]?.sender === "ssai" && (
                <div className="mt-2 flex items-center gap-2 px-2">
                  <Image
                    src="/logo-icon-2.png"
                    alt="SSAI"
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 rounded opacity-60"
                  />
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
            <div className="border-t border-[#e8e8e8] px-4 py-3">
              <div className="flex min-h-[40px] items-center rounded-lg border border-[#868686] px-3">
                <span className="text-[13px] text-[#868686]">Message #eng-ops</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ SSAI THREAD MOCK ============ */}
        <div
          className={cn(
            "overflow-hidden border border-rule bg-[var(--surface-card)] transition-all duration-700",
            showThread ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          )}
        >
          {/* Thread header */}
          <div className="flex items-center gap-2 border-b border-rule px-4 py-3">
            <Image
              src="/logo-icon-2.png"
              alt="SSAI"
              width={20}
              height={20}
              className="h-5 w-5 shrink-0 rounded-[3px]"
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted">
              ssai thread
            </span>
            <span className="ml-auto inline-flex items-center gap-1 rounded-sm bg-status-warning/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-status-warning">
              <span className="h-[5px] w-[5px] rounded-full bg-amber-500 dot-glow-warning" />
              awaiting approval
            </span>
          </div>

          {/* Thread title + metadata */}
          <div className="border-b border-rule px-4 py-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
              <Clock3 className="h-3.5 w-3.5" />
              prod / checkout-api / run_4831
            </div>
            <h3 className="mt-2 font-title text-[20px] leading-tight text-ink">
              Rollback checkout-api to v2.3.1
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-text-mid">
              Error rate crossed policy threshold after deploy v2.3.2. Canary logs show payment-provider timeouts.
            </p>
          </div>

          {/* Evidence */}
          <div className="border-b border-rule px-4 py-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted">Evidence gathered</p>
            <div className="mt-3 flex flex-col gap-2.5">
              {evidenceItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.source}
                    className={cn(
                      "flex items-start gap-2.5 transition-all duration-500",
                      i < visibleEvidence
                        ? "translate-x-0 opacity-100"
                        : "pointer-events-none -translate-x-2 opacity-0"
                    )}
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-rule bg-[var(--surface-bg)] text-text-muted">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-text-muted">{item.source}</span>
                      <p className="text-[13px] leading-snug text-text">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Memory delta */}
          <div
            className={cn(
              "border-b border-rule px-4 py-3 transition-all duration-500",
              showMemory
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-1 opacity-0"
            )}
          >
            <div className="flex items-center gap-2">
              <Brain className="h-3.5 w-3.5 text-ssai-blue" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-text-muted">Memory</span>
            </div>
            <p className="mt-1.5 text-[13px] text-text-mid">
              checkout-api rollback path learned from this incident
            </p>
          </div>

          {/* Action gate */}
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <button className="h-8 rounded-md border border-rule px-3 text-[13px] font-medium text-text transition-micro hover:bg-[var(--surface-hover)]">
              Veto rollback
            </button>
            <button className="h-8 rounded-md bg-ssai-blue px-3 text-[13px] font-medium transition-micro hover:bg-ssai-blue/90" style={{ color: "#fffefc" }}>
              Approve
            </button>
          </div>
        </div>
      </div>

      {/* Flow annotation bar */}
      <div className="flex items-center justify-between border border-rule bg-[var(--surface-bg)] px-5 py-3">
        <div className="flex items-center gap-6 font-mono text-[12px] text-text-muted">
          <span className="flex items-center gap-2">
            <SlackIcon className="h-3.5 w-3.5" />
            Slack
          </span>
          <ArrowRight className="h-3 w-3 text-text-muted/40" />
          <span className="flex items-center gap-2">
            <GitHubIcon className="h-3.5 w-3.5" />
            GitHub
          </span>
          <ArrowRight className="h-3 w-3 text-text-muted/40" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Thread
          </span>
        </div>
        <button
          onClick={replay}
          className="font-mono text-[11px] text-ssai-blue transition-micro hover:text-ssai-blue/70"
        >
          Replay
        </button>
      </div>
    </div>
  );
}
