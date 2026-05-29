"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  Bell,
  Clock3,
  Code2,
  DollarSign,
  GitBranch,
  Layers,
  ListFilter,
  MoreHorizontal,
  Plus,
  Rocket,
  Search,
  Server,
  Shield,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ThreadLabel = "deploy" | "incident" | "alert" | "cost" | "security" | "cicd" | "infra";
type ThreadSource = "system" | "slack" | "github" | "codex" | "frontend";
type ThreadStatus = "open" | "in_progress" | "awaiting_approval" | "resolved" | "closed";

interface DemoThread {
  id: string;
  title: string;
  label: ThreadLabel;
  source: ThreadSource;
  status: ThreadStatus;
  unread: boolean;
  time: string;
  createdBy: {
    name: string;
    initial: string;
    isSystem?: boolean;
  };
  subThreads?: {
    id: string;
    title: string;
    status: ThreadStatus;
  }[];
}

const labelConfig: Record<
  ThreadLabel,
  {
    icon: ComponentType<{ className?: string }>;
    label: string;
    colorClass: string;
    bgClass: string;
  }
> = {
  deploy: {
    icon: Rocket,
    label: "deploy",
    colorClass: "text-status-healthy",
    bgClass: "bg-status-healthy/10",
  },
  incident: {
    icon: AlertTriangle,
    label: "incident",
    colorClass: "text-status-danger",
    bgClass: "bg-status-danger/10",
  },
  alert: {
    icon: Bell,
    label: "alert",
    colorClass: "text-status-warning",
    bgClass: "bg-status-warning/10",
  },
  cost: {
    icon: DollarSign,
    label: "cost",
    colorClass: "text-label-cost",
    bgClass: "bg-label-cost/10",
  },
  security: {
    icon: Shield,
    label: "security",
    colorClass: "text-label-security",
    bgClass: "bg-label-security/10",
  },
  cicd: {
    icon: GitBranch,
    label: "ci/cd",
    colorClass: "text-accent",
    bgClass: "bg-accent/10",
  },
  infra: {
    icon: Server,
    label: "infra",
    colorClass: "text-label-infra",
    bgClass: "bg-label-infra/10",
  },
};

const sourceConfig: Record<
  ThreadSource,
  { icon: ComponentType<{ className?: string }> | null; label: string }
> = {
  system: { icon: null, label: "system" },
  slack: { icon: SlackIcon, label: "slack" },
  github: { icon: GitHubIcon, label: "github" },
  codex: { icon: Code2, label: "codex" },
  frontend: { icon: null, label: "frontend" },
};

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

const threads: DemoThread[] = [
  {
    id: "thread-rollback",
    title: "Rollback checkout-api to v2.3.1",
    label: "deploy",
    source: "frontend",
    status: "awaiting_approval",
    unread: true,
    time: "now",
    createdBy: { name: "ssai", initial: "S", isSystem: true },
    subThreads: [
      { id: "sub-health", title: "Health check comparison", status: "in_progress" },
      { id: "sub-blast", title: "Blast radius summary", status: "open" },
    ],
  },
  {
    id: "thread-cost",
    title: "Cost anomaly detected in us-east-1",
    label: "cost",
    source: "system",
    status: "open",
    unread: false,
    time: "18m",
    createdBy: { name: "ssai", initial: "S", isSystem: true },
  },
  {
    id: "thread-security",
    title: "Security scan flagged dependency",
    label: "security",
    source: "github",
    status: "open",
    unread: false,
    time: "42m",
    createdBy: { name: "ssai", initial: "S", isSystem: true },
  },
  {
    id: "thread-load",
    title: "Load test staging infrastructure",
    label: "infra",
    source: "codex",
    status: "in_progress",
    unread: false,
    time: "1h",
    createdBy: { name: "Priya M.", initial: "P" },
  },
];

function statusDot(thread: DemoThread) {
  if (thread.status === "awaiting_approval") {
    return { colorClass: "bg-amber-500", glowClass: "dot-glow-warning" };
  }
  if (thread.status === "in_progress") {
    return { colorClass: "bg-[#4d6ff7]", glowClass: "dot-glow-blue" };
  }
  if ((thread.label === "incident" || thread.label === "alert") && thread.status === "open") {
    return { colorClass: "bg-red-500", glowClass: "dot-glow-danger" };
  }
  if ((thread.status === "resolved" || thread.status === "closed") && thread.unread) {
    return { colorClass: "bg-emerald-500" };
  }
  return null;
}

function subThreadDot(status: ThreadStatus) {
  if (status === "awaiting_approval") return { colorClass: "bg-amber-500", glowClass: "dot-glow-warning" };
  if (status === "in_progress") return { colorClass: "bg-[#4d6ff7]", glowClass: "dot-glow-blue" };
  if (status === "resolved" || status === "closed") return { colorClass: "bg-emerald-500" };
  return null;
}

export function HeroThreadSidebar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute -left-4 top-9 hidden h-[78%] w-px bg-rule md:block" />
      <div className="grid overflow-hidden rounded-2xl border border-rule bg-[var(--surface-card)] shadow-[var(--shadow-float)] md:grid-cols-[280px_1fr]">
        <aside className="flex h-[560px] min-w-[280px] flex-col overflow-hidden border-b border-rule bg-[var(--surface-bg,var(--bg-light))] md:border-b-0 md:border-r">
          <div className="flex items-center justify-between px-3 pb-2 pt-3">
            <span className="text-[13px] font-semibold text-ink">Threads</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen((open) => !open)}
                className={cn(
                  "rounded-md p-1.5 transition-colors duration-150",
                  searchOpen
                    ? "bg-[var(--surface-active)] text-ink"
                    : "text-text-muted hover:bg-[var(--surface-hover)] hover:text-text-mid"
                )}
                aria-label={searchOpen ? "Close search" : "Search threads"}
              >
                {searchOpen ? <X className="h-[16px] w-[16px]" /> : <Search className="h-[16px] w-[16px]" />}
              </button>
              <button
                onClick={() => setFilterOpen((open) => !open)}
                className={cn(
                  "relative rounded-md p-1.5 transition-colors duration-150",
                  filterOpen
                    ? "bg-[var(--surface-active)] text-ink"
                    : "text-text-muted hover:bg-[var(--surface-hover)] hover:text-text-mid"
                )}
                aria-label={filterOpen ? "Close filters" : "Filter threads"}
              >
                {filterOpen ? <X className="h-[16px] w-[16px]" /> : <ListFilter className="h-[16px] w-[16px]" />}
                {!filterOpen && <span className="absolute -right-0.5 -top-0.5 h-[7px] w-[7px] rounded-full bg-accent" />}
              </button>
              <button
                className="rounded-md p-1.5 text-text-muted transition-colors duration-150 hover:bg-[var(--surface-hover)] hover:text-text-mid"
                aria-label="New thread"
              >
                <Plus className="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>

          <div className="settle-reveal" data-open={searchOpen}>
            <div>
              <div className="settle-reveal-inner px-3 pb-2">
                <div className="flex min-h-[32px] w-full items-center gap-1 rounded-md border border-rule bg-white py-1 pl-2 pr-1.5">
                  <Search className="h-3.5 w-3.5 shrink-0 text-text-muted" />
                  <span className="font-body text-[13px] text-text-muted">Search threads...</span>
                </div>
              </div>
            </div>
          </div>

          <div className="settle-reveal" data-open={filterOpen}>
            <div>
              <div className="settle-reveal-inner px-3 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {(["deploy", "cost", "security"] as ThreadLabel[]).map((label) => {
                    const cfg = labelConfig[label];
                    const Icon = cfg.icon;
                    return (
                      <span
                        key={label}
                        className={cn(
                          "inline-flex items-center gap-1 rounded-sm px-1.5 py-1 text-[10.5px] font-medium",
                          cfg.colorClass,
                          cfg.bgClass
                        )}
                      >
                        <Icon className="h-3 w-3" />
                        {cfg.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {filterOpen && <div className="mx-3 border-b border-rule" />}

          <div className="flex flex-1 flex-col gap-4 overflow-hidden pb-4" role="list" aria-label="Thread list preview">
            <div className="flex flex-col">
              {threads.map((thread, index) => (
                <HeroThreadRow key={thread.id} thread={thread} active={index === 0} />
              ))}
            </div>
          </div>
        </aside>

        <section className="min-h-[420px] bg-[var(--surface-card)] p-5 md:min-h-0">
          <div className="flex items-center gap-2 font-mono text-[12px] text-text-muted">
            <Clock3 className="h-4 w-4" />
            prod / checkout-api / run_4831
          </div>
          <h2 className="mt-4 font-title text-[28px] leading-tight text-ink">
            SSAI prepared the rollback. Human veto window is active.
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-text-mid">
            Error rate crossed policy threshold after deploy v2.3.2. Canary logs show repeated payment-provider timeouts. Rollback target v2.3.1 passed the last health check.
          </p>

          <div className="mt-6 rounded-xl border border-rule p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted">Evidence</p>
            <div className="mt-3 space-y-3 text-[13px] text-text-mid">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 h-[6px] w-[6px] rounded-full bg-status-danger" />
                5xx rate increased from 0.2% to 8.7% after the deploy.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 h-[6px] w-[6px] rounded-full bg-status-healthy" />
                Previous release passed health checks and migration compatibility.
              </div>
            </div>
          </div>

          <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-rule">
            <div className="h-full w-[72%] rounded-full bg-ssai-blue" />
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button className="h-9 rounded-lg border border-rule px-4 text-[14px] font-medium text-text transition-micro hover:bg-[var(--surface-hover)]">
              Veto rollback
            </button>
            <button className="h-9 rounded-lg bg-ssai-blue px-4 text-[14px] font-medium text-white transition-micro hover:bg-ssai-blue/90">
              Confirm now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function HeroThreadRow({ thread, active }: { thread: DemoThread; active?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dot = statusDot(thread);
  const showActions = hovered || menuOpen;
  const subThreadsExpanded = Boolean(thread.subThreads?.length && (hovered || active));
  const cfg = labelConfig[thread.label];
  const LabelIcon = cfg.icon;
  const source = sourceConfig[thread.source];
  const SourceIcon = source.icon;

  return (
    <div
      className="mx-1.5 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMenuOpen(false);
      }}
    >
      <div
        className={cn(
          "group relative flex flex-col rounded-lg px-3 py-2 transition-colors duration-150",
          active ? "bg-[var(--surface-active)]" : "hover:bg-[var(--surface-hover)]"
        )}
      >
        <div className="relative flex gap-2">
          <div className="min-w-0 flex-1">
            <span
              className={cn(
                "flex items-center gap-1 text-[13.5px] leading-tight",
                thread.unread ? "font-medium text-ink" : "font-normal text-text"
              )}
            >
              <span className="truncate">{thread.title}</span>
            </span>

            <div className="mt-1 flex items-center gap-1.5">
              <div className="inline-flex items-center rounded-full py-0.5 pl-0.5 pr-0.5 text-text-mid">
                {thread.createdBy.isSystem ? (
                  <Image
                    src="/logo-icon.png"
                    alt="SSAI"
                    width={16}
                    height={16}
                    className="h-4 w-4 shrink-0 rounded-[3px]"
                  />
                ) : (
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rule text-[9px] font-semibold">
                    {thread.createdBy.initial}
                  </span>
                )}
                <div className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-out group-hover:grid-cols-[1fr]">
                  <div className="overflow-hidden">
                    {thread.createdBy.isSystem ? (
                      <span className="flex -translate-x-2 items-center whitespace-nowrap pl-1 pr-1.5 font-[family-name:var(--font-face-title)] text-[11px] leading-none tracking-[-0.03em] opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                        <span className="text-ssai-blue">ss</span>
                        <span className="text-ssai-coral">ai</span>
                      </span>
                    ) : (
                      <span className="block max-w-[72px] -translate-x-2 truncate whitespace-nowrap pl-1 pr-1.5 text-[10px] font-medium opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                        {thread.createdBy.name}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className={cn("inline-flex items-center rounded-sm px-1 py-0.5", cfg.colorClass, cfg.bgClass)}>
                <LabelIcon className="h-3 w-3 shrink-0" />
                <div className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-out group-hover:grid-cols-[1fr]">
                  <div className="overflow-hidden">
                    <span className="block whitespace-nowrap pl-1 text-[10.5px] font-medium opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      {cfg.label}
                    </span>
                  </div>
                </div>
              </div>

              {SourceIcon && (
                <div className="inline-flex items-center rounded-sm bg-[var(--surface-hover)] px-1 py-0.5 text-text-muted">
                  <SourceIcon className="h-3 w-3" />
                  <div className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-out group-hover:grid-cols-[1fr]">
                    <div className="overflow-hidden">
                      <span className="block whitespace-nowrap pl-1 text-[10.5px] font-medium opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                        {source.label}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {thread.subThreads && (
                <span className="inline-flex items-center gap-0.5 rounded-sm bg-[#92680a]/10 px-1 py-0.5 text-[#92680a]">
                  <Layers className="h-3 w-3 shrink-0" />
                  <span className="text-[10px] font-medium tabular-nums">{thread.subThreads.length}</span>
                </span>
              )}
            </div>
          </div>

          <div className="flex min-w-[24px] shrink-0 flex-col items-center pt-0.5">
            {dot ? (
              <span className={cn("mt-1 block h-[6px] w-[6px] rounded-full", dot.colorClass, dot.glowClass)} />
            ) : (
              <span className="font-mono text-[10.5px] tabular-nums text-text-muted">{thread.time}</span>
            )}
            <div className="pointer-events-auto mt-0.5">
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-md text-text-muted outline-none transition-[opacity,color,background-color] duration-150 hover:bg-[var(--surface-active)] hover:text-text",
                  showActions ? "opacity-100" : "pointer-events-none opacity-0"
                )}
                tabIndex={showActions ? 0 : -1}
                aria-label="Thread actions"
              >
                <MoreHorizontal className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute right-3 top-10 z-10 min-w-[132px] rounded-lg bg-[var(--surface-card)] p-1 shadow-[var(--shadow-layer-2)]">
            {["Rename", "Fork", "Pin"].map((item) => (
              <button
                key={item}
                className="block w-full rounded-md px-2 py-1.5 text-left text-[12px] text-text-mid transition-colors duration-150 hover:bg-[var(--surface-hover)] hover:text-text"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {thread.subThreads && (
        <div className="settle-reveal" data-open={subThreadsExpanded}>
          <div>
            <div className="settle-reveal-inner pt-1">
              {thread.subThreads.map((subThread) => (
                <HeroSubThreadRow key={subThread.id} subThread={subThread} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HeroSubThreadRow({
  subThread,
}: {
  subThread: NonNullable<DemoThread["subThreads"]>[number];
}) {
  const dot = subThreadDot(subThread.status);

  return (
    <div className="group/sub relative flex min-h-[36px] items-center rounded-md py-1.5 pl-8 pr-3 transition-colors duration-150 hover:bg-[var(--surface-hover)]">
      <div className="absolute bottom-0 left-[22px] top-0 w-px bg-rule opacity-40" />
      <div className="relative flex min-w-0 flex-1 items-center gap-2">
        {dot && <span className={cn("h-[5px] w-[5px] shrink-0 rounded-full", dot.colorClass, dot.glowClass)} />}
        <span className="block truncate text-[12.5px] font-normal leading-tight text-text-mid">
          {subThread.title}
        </span>
        <button
          className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-text-muted opacity-0 outline-none transition-[opacity,color,background-color] duration-150 hover:bg-[var(--surface-active)] hover:text-text group-hover/sub:opacity-100"
          aria-label="Subthread actions"
        >
          <MoreHorizontal className="h-[14px] w-[14px]" />
        </button>
      </div>
    </div>
  );
}
