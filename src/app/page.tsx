import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  Brain,
  CheckCircle2,
  CircleDollarSign,
  Database,
  GitBranch,
  GitCommitVertical,
  HardDrive,
  MessageSquare,
  MonitorDot,
  Play,
  Shield,
  SlidersHorizontal,
  TerminalSquare,
  Workflow,
  X,
} from "lucide-react";
import { HeroThreadSidebar } from "@/components/hero-thread-sidebar";

const employeeRows = [
  ["waits for queries", "notices work"],
  ["returns data", "gives judgment"],
  ["needs a human operator", "owns the loop"],
  ["shows dashboards", "leaves decision records"],
  ["resets every session", "builds operational memory"],
];

const flowSteps = [
  {
    label: "Slack",
    detail: "@ssai checkout deploy is failing again",
    icon: MessageSquare,
  },
  {
    label: "GitHub",
    detail: "deployment event and recent diff attached",
    icon: GitCommitVertical,
  },
  {
    label: "Runner",
    detail: "logs, health checks, and cloud state collected",
    icon: TerminalSquare,
  },
  {
    label: "Thread",
    detail: "one causal record follows the work",
    icon: Workflow,
  },
];

const economicRows = [
  ["Release follow-through", "CTO or backend engineer", "failed deploys stall product work", "investigates, recommends, rolls back, documents"],
  ["Incident triage", "whoever is awake", "context gathering repeats every time", "correlates changes, alerts, logs, and service state"],
  ["CI/CD maintenance", "original pipeline author", "release paths get brittle", "traces failures and records repair patterns"],
  ["Cloud cost review", "nobody until the bill spikes", "cuts become reactive", "watches anomalies and explains movers"],
  ["Cert, secret, access hygiene", "postponed until urgent", "avoidable incidents appear", "tracks expiry, drift, and risky changes"],
  ["Runbook upkeep", "rarely maintained", "tribal knowledge expands", "turns operational exhaust into memory"],
];

const caseStudies = [
  {
    title: "Bad deploy",
    text: "A deploy starts failing after a schema change. SSAI traces the change, checks service health, proposes the rollback path, and records the decision.",
    icon: GitBranch,
  },
  {
    title: "Cost surprise",
    text: "A background worker doubles spend overnight. SSAI identifies the moving service, ties it to the recent release, and opens the follow-up thread.",
    icon: CircleDollarSign,
  },
  {
    title: "Alert noise",
    text: "A monitor keeps waking the same engineer. SSAI clusters duplicate alerts, checks impact, and turns the fix into memory.",
    icon: Bell,
  },
];

const notRows = [
  ["Observability dashboard", "Dashboards expose signals. SSAI turns signals into handled work."],
  ["Infra chatbot", "Chat is one doorway. The product object is the thread, action record, and memory."],
  ["DevOps copilot", "Copilots wait beside a human operator. SSAI owns scoped operational loops."],
  ["Generic infra workspace", "SSAI is not a prettier cloud console. It behaves like a teammate across channels."],
  ["Traditional managed service", "The product is software-native, inspectable, and continuously improving."],
  ["Approval theater", "Approvals and vetoes exist where policy requires them. Inspectability comes first."],
];

const competitors = [
  ["Observability", ["Datadog", "Grafana", "New Relic"]],
  ["Incident tools", ["PagerDuty", "FireHydrant", "Rootly"]],
  ["Infra workspaces", ["Clanker", "AWS", "GCP"]],
  ["AI coding agents", ["Codex", "Claude Code", "Cursor"]],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--surface-bg)] text-[var(--surface-text)]">
      <header className="sticky top-0 z-30 mx-auto flex h-14 max-w-7xl items-center justify-between border-b border-rule bg-[color-mix(in_srgb,var(--surface-bg)_92%,transparent)] px-5 backdrop-blur">
        <Image
          src="/logo-full.png"
          alt="SSAI"
          width={80}
          height={32}
          priority
          className="h-8 w-auto"
          style={{ width: "auto" }}
        />
        <nav className="hidden items-center gap-6 text-[13px] font-medium text-text-muted md:flex">
          <a className="transition-micro hover:text-text-mid" href="#flow">Flow</a>
          <a className="transition-micro hover:text-text-mid" href="#modes">Modes</a>
          <a className="transition-micro hover:text-text-mid" href="#not">Not</a>
          <Link className="transition-micro hover:text-text-mid" href="/thesis">Thesis</Link>
          <a className="transition-micro hover:text-text-mid" href="mailto:hello@ssai.dev">Contact</a>
        </nav>
      </header>

      <section id="surface" className="technical-grid relative mx-auto grid min-h-[calc(100vh-56px)] max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-24">
        <div className="relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-normal text-text-muted">
            Cognitive DevOps engineer
          </p>
          <h1 className="mt-5 max-w-[680px] font-title text-[clamp(42px,7vw,82px)] leading-[0.98] text-ink">
            Teams without DevOps still need DevOps judgment.
          </h1>
          <p className="mt-6 max-w-[600px] text-[17px] leading-7 text-text-mid">
            SSAI self-onboards to your cloud and Kubernetes stack, handles operational work, and leaves an inspectable record of what it did and why.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex h-9 items-center justify-center rounded-lg bg-ssai-blue px-4 text-[14px] font-medium transition-micro hover:bg-ssai-blue/90" style={{ color: "#fffefc" }} href="mailto:hello@ssai.dev">
              Book a technical walkthrough
            </a>
            <a className="inline-flex h-9 items-center justify-center rounded-lg border border-rule bg-[var(--surface-bg)] px-4 text-[14px] font-medium text-text transition-micro hover:bg-[var(--surface-hover)]" href="#flow">
              View product surface
            </a>
          </div>
          <div className="mt-10 max-w-[560px] border border-rule bg-[var(--surface-card)]">
            <div className="border-b border-rule px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              ssai / technical walkthrough
            </div>
            <div className="flex flex-col gap-2 px-4 py-4 font-mono text-[13px] text-text-mid sm:flex-row sm:items-center sm:justify-between">
              <span>$ give ssai a staging environment</span>
              <span className="text-ssai-blue">judge the work</span>
            </div>
          </div>
        </div>

        <HeroThreadSidebar />
      </section>

      <section className="border-y border-rule bg-[var(--surface-card)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Category</p>
            <h2 className="mt-4 max-w-[520px] font-title text-[clamp(36px,5vw,68px)] leading-[1.02] text-ink">
              Not a DevOps tool. A DevOps teammate.
            </h2>
            <p className="mt-5 max-w-[560px] text-[17px] leading-7 text-text-mid">
              Tools wait for someone to operate them. SSAI receives work, investigates, replies in your team channels, acts within policy, and leaves a record your team can inspect later.
            </p>
            <Link href="/thesis" className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-ssai-blue transition-micro hover:gap-3">
              Read the thesis behind SSAI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border border-rule">
            <div className="grid grid-cols-2 border-b border-rule bg-[var(--surface-bg)] font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
              <div className="border-r border-rule px-4 py-3">Tool</div>
              <div className="px-4 py-3 text-ssai-blue">Virtual employee</div>
            </div>
            {employeeRows.map(([tool, employee]) => (
              <div key={tool} className="grid grid-cols-2 border-b border-rule last:border-b-0">
                <div className="border-r border-rule px-4 py-5 text-[15px] text-text-muted">{tool}</div>
                <div className="px-4 py-5 text-[15px] font-medium text-ink">{employee}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="technical-grid mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Actual flow</p>
          <h2 className="mt-4 font-title text-[clamp(36px,5vw,66px)] leading-[1.05] text-ink">
            Work starts where your team already is.
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-text-mid">
            Mention SSAI in Slack, reply from GitHub, continue in the frontend, or let a system trigger open the thread. The channel changes. The work object does not.
          </p>
        </div>
        <div className="mt-16 grid border border-rule bg-[var(--surface-card)] lg:grid-cols-4">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative min-h-[260px] border-b border-rule p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="flex h-11 w-11 items-center justify-center border border-rule bg-[var(--surface-bg)] text-ssai-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-14 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                  0{index + 1} / {step.label}
                </div>
                <p className="mt-3 max-w-[260px] text-[20px] leading-7 text-ink">{step.detail}</p>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="absolute right-6 top-8 hidden h-4 w-4 text-text-muted lg:block" />
                )}
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-8 max-w-4xl border border-rule bg-[var(--surface-bg)] px-5 py-4 font-mono text-[13px] text-text-mid">
          Slack is a doorway. GitHub is a doorway. The thread is the source of truth.
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Economics</p>
            <h2 className="mt-4 max-w-[560px] font-title text-[clamp(34px,4vw,58px)] leading-[1.06] text-ink">
              What a missing DevOps function actually costs.
            </h2>
            <p className="mt-5 max-w-[560px] text-[16px] leading-7 text-text-mid">
              The comparison is not another SaaS seat. It is the operational responsibility currently absorbed by product engineers, founders, and whoever knows the production system best.
            </p>
          </div>
          <div className="overflow-hidden border border-rule bg-[var(--surface-card)]">
            <div className="grid grid-cols-[1.1fr_0.95fr_1fr_1.1fr] border-b border-rule bg-[var(--surface-bg)] font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted max-lg:hidden">
              <div className="px-3 py-3">Responsibility</div>
              <div className="px-3 py-3">Without DevOps</div>
              <div className="px-3 py-3">What breaks</div>
              <div className="px-3 py-3">SSAI ownership</div>
            </div>
            {economicRows.map((row) => (
              <div key={row[0]} className="grid gap-3 border-b border-rule p-4 last:border-b-0 lg:grid-cols-[1.1fr_0.95fr_1fr_1.1fr] lg:gap-0 lg:p-0">
                {row.map((cell, index) => (
                  <div key={cell} className="text-[13.5px] leading-6 text-text-mid lg:border-r lg:border-rule lg:px-3 lg:py-4 lg:last:border-r-0">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted lg:hidden">
                      {["Responsibility", "Without DevOps", "What breaks", "SSAI ownership"][index]}
                    </span>
                    <span className={index === 0 || index === 3 ? "font-medium text-ink" : ""}>{cell}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modes" className="border-y border-rule bg-[#262626] text-[#e0ddd6]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#a8a8a0]">Normal / Meta</p>
            <h2 className="mt-4 font-title text-[clamp(36px,5vw,66px)] leading-[1.05] text-[#f5f5f0]">
              Normal Mode shows what SSAI is doing. Meta Mode shows why SSAI is getting better.
            </h2>
          </div>
          <div className="mt-14 grid overflow-hidden border border-[#3a3a3a] lg:grid-cols-2">
            <ModePanel
              title="Normal Mode"
              subtitle="Operate the customer's infrastructure with SSAI."
              light
              items={[
                ["Active threads", Activity],
                ["Infra health", MonitorDot],
                ["Action explanations", CheckCircle2],
                ["Audit records", Database],
                ["Memory edits", Brain],
              ]}
            />
            <ModePanel
              title="Meta Mode"
              subtitle="Operate SSAI itself inside the customer account."
              items={[
                ["Agent state", Bot],
                ["Runner health", HardDrive],
                ["Eval status", SlidersHorizontal],
                ["Simulation replay", Play],
                ["Rejected commands", Shield],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Memory</p>
            <h2 className="mt-4 font-title text-[clamp(34px,4vw,58px)] leading-[1.06] text-ink">
              Operational exhaust becomes operational memory.
            </h2>
            <p className="mt-5 max-w-[580px] text-[16px] leading-7 text-text-mid">
              Every thread can teach SSAI something about your stack: rollback paths, service quirks, safe remediations, escalation rules, recurring failure patterns, and exceptions worth remembering.
            </p>
          </div>
          <div className="border border-rule bg-[var(--surface-card)]">
            {[
              ["checkout-api", "rollback path learned from last incident"],
              ["billing-worker", "alert mapped to deploy noise"],
              ["staging migration", "runbook candidate created"],
              ["prod restart", "cooldown veto policy attached"],
            ].map(([scope, memory]) => (
              <div key={scope} className="grid border-b border-rule last:border-b-0 sm:grid-cols-[180px_1fr]">
                <div className="border-b border-rule px-4 py-4 font-mono text-[12px] text-text-muted sm:border-b-0 sm:border-r">{scope}</div>
                <div className="px-4 py-4 text-[15px] text-ink">{memory}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-[var(--surface-card)]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Case studies</p>
            <h2 className="mt-4 font-title text-[clamp(34px,4vw,58px)] leading-[1.06] text-ink">
              The work looks ordinary. That is the point.
            </h2>
          </div>
          <div className="mt-14 grid border border-rule lg:grid-cols-3">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <article key={study.title} className="min-h-[360px] border-b border-rule p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <div className="flex h-20 items-center justify-center border-b border-rule text-ssai-blue">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-ink">{study.title}</h3>
                  <p className="mt-5 text-[17px] leading-8 text-text-mid">{study.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="not" className="technical-grid mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Positioning</p>
          <h2 className="mt-4 font-title text-[clamp(38px,5vw,68px)] leading-[1.05] text-ink">
            What SSAI is not.
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-text-mid">
            SSAI is built for operational ownership. It is not another surface that hands more work back to the same engineers.
          </p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {notRows.map(([title, body]) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center text-text-muted">
                <X className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-title text-[24px] italic leading-tight text-ink">{title}</h3>
              <p className="mx-auto mt-4 max-w-[310px] text-[15px] leading-6 text-text-mid">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-[var(--surface-card)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Category map</p>
            <h2 className="mt-4 font-title text-[clamp(32px,4vw,52px)] leading-[1.08] text-ink">
              Familiar logos, different job.
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-text-mid">
              These categories are useful reference points. SSAI should not sit inside any one of them.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {competitors.map(([group, logos]) => (
              <div key={group as string} className="border border-rule bg-[var(--surface-bg)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">{group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(logos as string[]).map((logo) => (
                    <span key={logo} className="rounded-sm border border-rule bg-[var(--surface-card)] px-3 py-2 text-[13px] font-medium text-text-muted grayscale">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="border border-ssai-blue bg-[rgba(37,75,241,0.06)] p-4 sm:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ssai-blue">SSAI</div>
              <div className="mt-4 font-title text-[32px] leading-tight text-ink">Cognitive DevOps engineer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Thesis</p>
            <h2 className="max-w-[820px] font-title text-[clamp(38px,6vw,82px)] leading-[0.98] text-ink">
              The next operational owner will not be another dashboard.
            </h2>
          </div>
          <div>
            <p className="text-[17px] leading-7 text-text-mid">
              Read the thesis behind SSAI as a long-form scroll piece. Production operations are moving from dashboards and tribal memory into inspectable agent work.
            </p>
            <Link href="/thesis" className="mt-7 inline-flex h-10 items-center justify-center rounded-lg bg-ssai-blue px-4 text-[14px] font-medium transition-micro hover:bg-ssai-blue/90" style={{ color: "#fffefc" }}>
              Open thesis
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-rule px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[13px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>SSAI. Cognitive DevOps engineer.</span>
          <a className="transition-micro hover:text-text-mid" href="mailto:hello@ssai.dev">hello@ssai.dev</a>
        </div>
      </footer>
    </main>
  );
}

function ModePanel({
  title,
  subtitle,
  items,
  light,
}: {
  title: string;
  subtitle: string;
  items: [string, typeof Activity][];
  light?: boolean;
}) {
  return (
    <div className={light ? "bg-[var(--surface-bg)] p-6 text-text" : "bg-[#2f2f2f] p-6 text-[#e0ddd6]"}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={light ? "font-title text-[32px] leading-tight text-ink" : "font-title text-[32px] leading-tight text-[#f5f5f0]"}>
            {title}
          </h3>
          <p className={light ? "mt-2 max-w-[360px] text-[15px] leading-6 text-text-mid" : "mt-2 max-w-[360px] text-[15px] leading-6 text-[#a8a8a0]"}>
            {subtitle}
          </p>
        </div>
        <div className={light ? "rounded-full border border-rule px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted" : "rounded-full border border-[#3a3a3a] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#a8a8a0]"}>
          live
        </div>
      </div>
      <div className={light ? "mt-8 border border-rule bg-[var(--surface-card)]" : "mt-8 border border-[#3a3a3a] bg-[#262626]"}>
        {items.map(([item, Icon]) => (
          <div key={item} className={light ? "flex items-center gap-3 border-b border-rule px-4 py-4 last:border-b-0" : "flex items-center gap-3 border-b border-[#3a3a3a] px-4 py-4 last:border-b-0"}>
            <Icon className={light ? "h-4 w-4 text-ssai-blue" : "h-4 w-4 text-ssai-coral"} />
            <span className={light ? "text-[14px] text-text" : "text-[14px] text-[#e0ddd6]"}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
