import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CircleDollarSign,
  Database,
  Eye,
  FileText,
  KeyRound,
  Layers,
  MessageCircle,
  Rocket,
  RefreshCw,
  Scale,
  Shield,
  Siren,
  User,
  Workflow,
  X,
} from "lucide-react";
import {
  SiDatadog, SiGrafana, SiNewrelic,
  SiOpenai, SiClaude, SiSlack,
  SiGithubcopilot, SiGitlab, SiCircleci,
  SiTerraform, SiGooglecloud, SiVercel,
  SiHeroku, SiRailway, SiRender,
  SiJira, SiPagerduty, SiOpsgenie,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { ExpandableTable } from "@/components/expandable-table";
import { GridAnimation } from "@/components/grid-animation";
import { FlowWalkthrough } from "@/components/flow-walkthrough";
import { HeroScanSweep } from "@/components/hero-scan-sweep";
import { HeroThreadSidebar } from "@/components/hero-thread-sidebar";
import { ThesisReader } from "@/components/thesis-reader";
import { BlinkingLogo } from "@/components/blinking-logo";
import { MobileNav } from "@/components/mobile-nav";

const employeeRows: [string, typeof MessageCircle, string, typeof Eye][] = [
  ["waits for queries", MessageCircle, "notices work", Eye],
  ["returns data", Database, "gives judgment", Scale],
  ["needs a human operator", User, "owns the loop", RefreshCw],
  ["shows dashboards", BarChart3, "leaves decision records", FileText],
  ["resets every session", RefreshCw, "builds operational memory", Layers],
];


const economicRows: { label: string; icon: typeof Rocket; color: string; bg: string; without: string; breaks: string; ssai: string }[] = [
  { label: "Release follow-through", icon: Rocket, color: "#254bf1", bg: "rgba(37,75,241,0.07)", without: "CTO or backend engineer", breaks: "failed deploys stall product work", ssai: "investigates, recommends, rolls back, documents" },
  { label: "Incident triage", icon: Siren, color: "#c2410c", bg: "rgba(194,65,12,0.07)", without: "whoever is awake", breaks: "context gathering repeats every time", ssai: "correlates changes, alerts, logs, and service state" },
  { label: "CI/CD maintenance", icon: Workflow, color: "#7c3aed", bg: "rgba(124,58,237,0.07)", without: "original pipeline author", breaks: "release paths get brittle", ssai: "traces failures and records repair patterns" },
  { label: "Cloud cost review", icon: CircleDollarSign, color: "#0d7377", bg: "rgba(13,115,119,0.07)", without: "nobody until the bill spikes", breaks: "cuts become reactive", ssai: "watches anomalies and explains movers" },
  { label: "Cert, secret, access hygiene", icon: KeyRound, color: "#b45309", bg: "rgba(180,83,9,0.07)", without: "postponed until urgent", breaks: "avoidable incidents appear", ssai: "tracks expiry, drift, and risky changes" },
  { label: "Runbook upkeep", icon: BookOpen, color: "#2d8a4e", bg: "rgba(45,138,78,0.07)", without: "rarely maintained", breaks: "tribal knowledge expands", ssai: "turns operational exhaust into memory" },
];


const notRows: { title: string; body: string; logos: { name: string; icon: IconType }[] }[] = [
  { title: "Observability dashboard", body: "Dashboards expose signals. SSAI turns signals into handled work.", logos: [{ name: "Datadog", icon: SiDatadog }, { name: "Grafana", icon: SiGrafana }, { name: "New Relic", icon: SiNewrelic }] },
  { title: "Infra chatbot", body: "Chat is one doorway. The product object is the thread, action record, and memory.", logos: [{ name: "OpenAI", icon: SiOpenai }, { name: "Claude", icon: SiClaude }, { name: "Slack", icon: SiSlack }] },
  { title: "DevOps copilot", body: "Copilots wait beside a human operator. SSAI owns scoped operational loops.", logos: [{ name: "GitHub Copilot", icon: SiGithubcopilot }, { name: "GitLab", icon: SiGitlab }, { name: "CircleCI", icon: SiCircleci }] },
  { title: "Generic infra workspace", body: "SSAI is not a prettier cloud console. It behaves like a teammate across channels.", logos: [{ name: "Terraform", icon: SiTerraform }, { name: "Google Cloud", icon: SiGooglecloud }, { name: "Vercel", icon: SiVercel }] },
  { title: "Traditional managed service", body: "The product is software-native, inspectable, and continuously improving.", logos: [{ name: "Heroku", icon: SiHeroku }, { name: "Railway", icon: SiRailway }, { name: "Render", icon: SiRender }] },
  { title: "Approval theater", body: "Approvals and vetoes exist where policy requires them. Inspectability comes first.", logos: [{ name: "Jira", icon: SiJira }, { name: "PagerDuty", icon: SiPagerduty }, { name: "Opsgenie", icon: SiOpsgenie }] },
];

const competitors = [
  ["Observability", ["Datadog", "Grafana", "New Relic"]],
  ["Incident tools", ["PagerDuty", "FireHydrant", "Rootly"]],
  ["Infra workspaces", ["Clanker", "AWS", "GCP"]],
  ["AI coding agents", ["Codex", "Claude Code", "Cursor"]],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--surface-bg)] text-[var(--surface-text)]">
      <header className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="mx-auto mt-3 flex h-12 max-w-7xl items-center justify-between rounded border border-rule/20 bg-[color-mix(in_srgb,var(--surface-bg)_25%,transparent)] px-5 backdrop-blur-sm pointer-events-auto">
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
            <a className="transition-micro hover:text-text-mid" href="#not">Not</a>
            <a className="transition-micro hover:text-text-mid" href="#thesis">Thesis</a>
            <a className="transition-micro hover:text-text-mid" href="mailto:hello@ssai.dev">Contact</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <div id="surface" className="grid-field relative min-h-[90svh] overflow-hidden" style={{ "--grid-size": "21px", "--grid-opacity": "0.06" } as React.CSSProperties}>
        <GridAnimation gridCell={21} dotSpacing={42} />
        <HeroScanSweep />
      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 pt-20 pb-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:pb-10" style={{ minHeight: "inherit" }}>
        <div className="relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-normal text-text-muted">
            Cognitive DevOps engineer
          </p>
          <h1 className="mt-4 max-w-[640px] font-title text-[clamp(42px,6vw,72px)] leading-[0.98] text-ink">
            Teams without DevOps still need DevOps judgment.
          </h1>
          <p className="mt-5 max-w-[580px] text-[16px] leading-7 text-text-mid">
            SSAI self-onboards to your cloud and Kubernetes stack, handles operational work, and leaves an inspectable record of what it did and why.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex h-9 items-center justify-center rounded-md bg-ssai-blue px-4 text-[14px] font-medium transition-micro hover:bg-ssai-blue/90 active:scale-[0.97]" style={{ color: "#fffefc" }} href="https://cal.com/avinier" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
            <a className="inline-flex h-9 items-center justify-center rounded-md border border-rule bg-[var(--surface-bg)] px-4 text-[14px] font-medium text-text transition-micro hover:bg-[var(--surface-hover)] active:scale-[0.97]" href="#flow">
              Join waitlist
            </a>
          </div>
          <div className="mt-8 max-w-[540px] border border-rule bg-[var(--surface-card)]">
            <div className="border-b border-rule px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              ssai / technical walkthrough
            </div>
            <div className="flex flex-col gap-2 px-4 py-4 font-mono text-[13px] text-text-mid sm:flex-row sm:items-center sm:justify-between">
              <span>$ give ssai a staging environment</span>
              <span className="text-ssai-blue">judge the work</span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <HeroThreadSidebar />
        </div>
      </section>
      </div>

      <section className="border-y border-rule bg-[var(--surface-card)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-20 pb-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Category</p>
            <h2 className="mt-4 max-w-[520px] font-title text-[clamp(36px,5vw,68px)] leading-[1.02] text-ink">
              Not a DevOps tool. A DevOps <span className="text-ssai-coral">teammate.</span>
            </h2>
            <p className="mt-5 max-w-[560px] text-[17px] leading-7 text-text-mid">
              Tools wait for someone to operate them. SSAI receives work, investigates, replies in your team channels, acts within policy, and leaves a record your team can inspect later.
            </p>
            <a href="#thesis" className="mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-ssai-blue transition-micro hover:gap-3">
              Read more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border border-rule bg-[var(--surface-bg)]">
            <div className="grid grid-cols-2 border-b border-rule font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              <div className="border-r border-rule px-5 py-3 text-center sm:px-6">Typical tool</div>
              <div className="flex items-center justify-center px-5 py-2 sm:px-6">
                <BlinkingLogo className="text-[18px]" />
              </div>
            </div>
            {employeeRows.map(([toolLabel, ToolIcon, ssaiLabel, SsaiIcon]) => (
              <div key={toolLabel} className="grid grid-cols-2 border-b border-dashed border-rule/60 last:border-b-0">
                <div className="flex items-center gap-3 border-r border-dashed border-rule/60 px-5 py-[18px] sm:gap-4 sm:px-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rule/80 text-text-muted">
                    <ToolIcon className="h-[18px] w-[18px]" />
                  </div>
                  <span className="text-[14px] leading-snug text-text-muted sm:text-[15px]">{toolLabel}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-[18px] sm:gap-4 sm:px-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ssai-blue/25 bg-ssai-blue/[0.05] text-ssai-blue">
                    <SsaiIcon className="h-[18px] w-[18px]" />
                  </div>
                  <span className="text-[14px] font-medium leading-snug text-ink sm:text-[15px]">{ssaiLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-start gap-8 px-5 pb-20 pt-0 sm:gap-10">
          {[
            { icon: Shield, title: "Policy-aware", desc: "Works within guardrails" },
            { icon: FileText, title: "Always accountable", desc: "Leaves decision records" },
            { icon: Layers, title: "Always improving", desc: "Builds operational memory" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-2.5">
              <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-text-muted" />
              <div>
                <p className="text-[13px] font-medium leading-tight text-ink">{title}</p>
                <p className="mt-1 text-[12px] leading-tight text-text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="flow" className="grid-field relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <GridAnimation gridCell={21} dotSpacing={42} />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Actual flow</p>
            <h2 className="mt-4 font-title text-[clamp(36px,5vw,66px)] leading-[1.05] text-ink">
              Work starts where your team already is.
            </h2>
            <p className="mt-5 text-[17px] leading-7 text-text-mid">
              Mention SSAI in Slack, reply from GitHub, continue in the frontend, or let a system trigger open the thread. The channel changes. The work object does not.
            </p>
          </div>
          <FlowWalkthrough />
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
          <ExpandableTable visibleRows={4}>
            <div className="overflow-hidden border border-rule bg-[var(--surface-card)]">
              <div data-econ-header className="grid grid-cols-[1.1fr_0.95fr_1fr_1.1fr] border-b border-rule bg-[var(--surface-bg)] font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted max-lg:hidden">
                <div className="px-3 py-3">Responsibility</div>
                <div className="px-3 py-3">Without DevOps</div>
                <div className="px-3 py-3">What breaks</div>
                <div className="px-3 py-3">SSAI ownership</div>
              </div>
              {economicRows.map((row) => {
                const Icon = row.icon;
                const cells = [
                  { text: row.without, header: "Without DevOps", bold: false },
                  { text: row.breaks, header: "What breaks", bold: false },
                  { text: row.ssai, header: "SSAI ownership", bold: true },
                ];
                return (
                  <div key={row.label} data-econ-row className="grid gap-3 border-b border-rule p-4 last:border-b-0 lg:grid-cols-[1.1fr_0.95fr_1fr_1.1fr] lg:gap-0 lg:p-0">
                    <div className="text-[13.5px] leading-6 text-text-mid lg:border-r lg:border-rule lg:px-3 lg:py-4">
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted lg:hidden">Responsibility</span>
                      <span className="flex flex-col items-center gap-1.5 text-center font-medium text-ink">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: row.bg }}>
                          <Icon className="h-[15px] w-[15px]" style={{ color: row.color }} />
                        </span>
                        {row.label}
                      </span>
                    </div>
                    {cells.map((cell, i) => (
                      <div key={cell.text} className="text-[13.5px] leading-6 text-text-mid lg:border-r lg:border-rule lg:px-3 lg:py-4 lg:last:border-r-0">
                        <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted lg:hidden">
                          {cell.header}
                        </span>
                        <span className={cell.bold ? "font-medium text-ink" : ""}>{cell.text}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </ExpandableTable>
        </div>
      </section>

      <section id="not" className="grid-field relative overflow-hidden px-5 py-24">
        <GridAnimation gridCell={21} dotSpacing={42} />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">Positioning</p>
          <h2 className="mt-4 font-title text-[clamp(38px,5vw,68px)] leading-[1.05] text-ink">
            What SSAI is <span className="text-ssai-coral">not.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-text-mid">
            SSAI is built for operational ownership. It is not another surface that hands more work back to the same engineers.
          </p>
        </div>
        <div className="relative z-10 mx-auto mt-14 grid max-w-7xl gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {notRows.map((row) => (
            <div key={row.title} className="text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center text-text-muted">
                <X className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="mx-auto mt-4 flex items-center justify-center gap-5">
                {row.logos.map((logo) => (
                  <span key={logo.name} className="group relative">
                    <logo.icon className="h-[18px] w-[18px] text-text-muted opacity-40 transition-opacity group-hover:opacity-70" />
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[11px] font-medium text-[var(--surface-bg)] opacity-0 transition-opacity group-hover:opacity-100">
                      {logo.name}
                    </span>
                  </span>
                ))}
              </div>
              <h3 className="mt-3 font-title text-[24px] italic leading-tight text-ink">{row.title}</h3>
              <p className="mx-auto mt-4 max-w-[310px] text-[15px] leading-6 text-text-mid">{row.body}</p>
            </div>
          ))}
        </div>
        <div className="relative z-10 mx-auto mt-20 grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="font-title text-[clamp(32px,4vw,52px)] leading-[1.08] text-ink">
              Familiar logos, different job.
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-text-mid">
              These categories are useful reference points. SSAI does not sit inside any one of them, but uses them to do your work.
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
            <div className="border border-ssai-blue bg-[rgba(37,75,241,0.10)] p-4 sm:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ssai-blue">SSAI</div>
              <div className="mt-4 font-title text-[32px] leading-tight text-ink">Cognitive DevOps engineer</div>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="border-t border-rule">
        <ThesisReader />
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
