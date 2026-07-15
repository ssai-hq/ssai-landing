import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Binary,
  BookOpenCheck,
  Check,
  CheckCircle2,
  CircleDot,
  Code2,
  Database,
  FileCheck2,
  Fingerprint,
  GitBranch,
  KeyRound,
  LockKeyhole,
  Network,
  RefreshCcw,
  ScanSearch,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { MigrationFlightRecorder } from "@/components/migration-flight-recorder";
import { MobileNav } from "@/components/mobile-nav";
import { WatermelonProtocol } from "@/components/watermelon-protocol";
import { WatermelonSiteNav } from "@/components/watermelon-site-nav";

const proofPoints = [
  ["Source", "Read-only by construction"],
  ["Execution", "Deterministic record path"],
  ["Proof", "Independent verification"],
  ["Recovery", "72-hour rollback window"],
] as const;

const failureModes = [
  "Historical schema drift",
  "Defaults that exist only in code",
  "Unknown writers and background jobs",
  "Batch and CDC transform divergence",
  "Equal counts with ghost rows",
  "A rollback plan nobody executed",
] as const;

const migrationSurfaces = [
  {
    number: "01",
    title: "Document to relational redesign",
    label: "MODEL",
    description:
      "Nested BSON, polymorphic records, references, TTLs, indexes, IDs, and dirty types become an explicit PostgreSQL model. JSONB remains only where the evidence justifies it.",
    output: "Versioned target design",
  },
  {
    number: "02",
    title: "Snapshot and bulk backfill",
    label: "BASELINE",
    description:
      "Jumpship chooses the strongest provable Atlas snapshot rung, seals T0, restores it, and self-proves the baseline before movement starts.",
    output: "Immutable golden snapshot",
  },
  {
    number: "03",
    title: "Live change migration",
    label: "CDC",
    description:
      "MongoDB change streams keep PostgreSQL current through one compiled transform shared by batch and CDC, with token-loss rebaseline and explicit drift handling.",
    output: "Gap-free forward sync",
  },
  {
    number: "04",
    title: "Rehearsed production cutover",
    label: "SWITCH",
    description:
      "Freeze, drain, verify, flip, smoke, and unfreeze are compiled into a runbook and rehearsed against production-shaped conditions before the real switch.",
    output: "Measured closing door",
  },
  {
    number: "05",
    title: "Reverse migration and rollback",
    label: "RECOVERY",
    description:
      "Qualified reverse sync keeps the old source current for a mandatory 72-hour window. Rollback is executed in rehearsal, not left as prose.",
    output: "Current escape path",
  },
  {
    number: "06",
    title: "Verification and handoff",
    label: "PROOF",
    description:
      "Five independent verification layers, migration-specific watch, honest retention states, and an on-demand dossier close the engagement with evidence.",
    output: "Signed integrity envelope",
  },
] as const;

const verifierLayers = [
  ["01", "Complete accounting", "Every source record resolves to target, quarantine, or an explicit ruling."],
  ["02", "Business invariants", "Balances, uniqueness, aggregates, and domain truths hold after transformation."],
  ["03", "Canonical record hashes", "One hundred percent canonical comparison catches silent value changes."],
  ["04", "Both-direction structure", "Ghost rows, omissions, foreign keys, quarantine, and target-only drift are checked."],
  ["05", "Query semantics", "Values, ordering, pagination, collation, and expected errors behave as the application expects."],
] as const;

const incapabilities = [
  "write to the MongoDB source",
  "flip application traffic",
  "read or release credentials",
  "bypass quarantine or consent",
  "delete the golden snapshot",
  "widen its tools or IAM",
  "provision or destroy its own cell",
] as const;

const faqs = [
  {
    question: "Which databases does Jumpship support today?",
    answer:
      "The first production corridor is MongoDB Atlas to customer-owned Supabase PostgreSQL. The architecture is corridor-based so it can expand, but SSAI does not advertise unqualified universal migration support.",
  },
  {
    question: "Is this just an AI-generated migration script?",
    answer:
      "No. Jumpship investigates and makes evidence-backed recommendations. A versioned deterministic engine performs every record transform, load, CDC apply, reconciliation, verification, and reverse-sync effect.",
  },
  {
    question: "Can the cutover be interruption-free?",
    answer:
      "Jumpship measures the freeze and drain window from rehearsals, shows the basis, and refuses to replace evidence with a generic downtime guarantee.",
  },
  {
    question: "What happens if the cutover goes wrong?",
    answer:
      "The cutover is rehearsed before production. After the flip, reverse sync keeps rollback current for the mandatory 72-hour window when the corridor qualifies. Rollback uses the rehearsed operation and then requires resync, reverification, and fresh consent before another cutover.",
  },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__brand" href="#top" aria-label="SSAI home">
            <BrandLockup compact />
            <span className="site-header__descriptor">migration systems</span>
          </a>
          <WatermelonSiteNav />
          <MobileNav />
          <a
            className="button button--header"
            href="https://cal.com/avinier"
            target="_blank"
            rel="noreferrer"
          >
            Migration review
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="eyebrow reveal reveal--1">
                <span className="eyebrow__mark" />
                Database migrations, fully accounted for
              </p>
              <h1 className="reveal reveal--2">
                MongoDB to PostgreSQL,
                <span>without the leap of faith.</span>
              </h1>
              <p className="hero__lede reveal reveal--3">
                SSAI reads your data, application code, queries, writers, and
                business rules. Its Jumpship agent designs a defensible PostgreSQL
                model, then supervises a deterministic migration into Supabase with
                signed proof and a rehearsed path back.
              </p>
              <div className="hero__actions reveal reveal--4">
                <a
                  className="button button--primary"
                  href="https://cal.com/avinier"
                  target="_blank"
                  rel="noreferrer"
                >
                  Plan my migration
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="button button--text" href="#protocol">
                  See the migration protocol
                  <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <div className="launch-corridor reveal reveal--5">
                <div className="launch-corridor__title">
                  <span className="status-dot status-dot--green" aria-hidden="true" />
                  <strong>Launching corridor</strong>
                </div>
                <div className="launch-corridor__route">
                  <span>MongoDB Atlas</span>
                  <ArrowRight aria-hidden="true" />
                  <span>Supabase PostgreSQL</span>
                </div>
                <p>Snapshot + backfill · live CDC · measured cutover · reverse sync</p>
              </div>
            </div>

            <div className="hero__product reveal reveal--4">
              <MigrationFlightRecorder />
            </div>
          </div>

          <div className="proof-strip" aria-label="Core migration guarantees">
            {proofPoints.map(([label, value]) => (
              <div className="proof-strip__item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--problem" id="why">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">01 · The real problem</p>
              <h2>Moving rows is table stakes. Preserving what they mean is the migration.</h2>
            </div>
            <div className="section-heading__support">
              <p>
                A database migration changes data shape, query behavior, write paths,
                failure modes, and the moment your application changes authority.
                Copy tools see records. Jumpship reconstructs the system around them.
              </p>
              <p className="pull-quote">The script usually works. The assumptions are what ship corruption.</p>
            </div>
          </div>

          <div className="failure-ribbon" aria-label="Common migration failure modes">
            {failureModes.map((mode, index) => (
              <div key={mode}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{mode}</p>
              </div>
            ))}
          </div>

          <div className="understanding-map">
            <div className="understanding-map__inputs">
              <p className="instrument-label">Evidence in</p>
              <div><Code2 aria-hidden="true" /><span>Application code</span><small>models · queries · writers</small></div>
              <div><Database aria-hidden="true" /><span>MongoDB reality</span><small>BSON · variants · history</small></div>
              <div><Activity aria-hidden="true" /><span>Workloads</span><small>read paths · write physics</small></div>
              <div><BookOpenCheck aria-hidden="true" /><span>Human knowledge</span><small>intent · constraints · horizon</small></div>
            </div>

            <div className="understanding-map__flow" aria-hidden="true">
              <span className="signal-line"><i /></span>
              <ArrowRight />
            </div>

            <div className="understanding-map__core">
              <span className="core-orbit core-orbit--1" aria-hidden="true" />
              <span className="core-orbit core-orbit--2" aria-hidden="true" />
              <div>
                <span className="core-mark">J</span>
                <p>Jumpship</p>
                <small>coherent system understanding</small>
              </div>
            </div>

            <div className="understanding-map__flow" aria-hidden="true">
              <span className="signal-line"><i /></span>
              <ArrowRight />
            </div>

            <div className="understanding-map__output">
              <p className="instrument-label">Defensible model out</p>
              <h3>PostgreSQL designed for the business that actually runs.</h3>
              <ul>
                <li><Check /> Domain entities and invariants</li>
                <li><Check /> Workload and index fit</li>
                <li><Check /> Explicit assumptions and unknowns</li>
                <li><Check /> Intentional debt and evolution triggers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--scope" id="scope">
          <div className="section-heading section-heading--corridor">
            <div>
              <p className="section-kicker">02 · Current scope</p>
              <h2>One corridor. The whole migration.</h2>
            </div>
            <div className="corridor-stamp" aria-label="Current supported corridor">
              <Database aria-hidden="true" />
              <div><span>SOURCE</span><strong>MongoDB Atlas</strong></div>
              <ArrowRight aria-hidden="true" />
              <div><span>TARGET</span><strong>Supabase PostgreSQL</strong></div>
              <span className="corridor-stamp__status">MVP</span>
            </div>
          </div>

          <p className="section-intro">
            Jumpship does not sell a universal migration fantasy. The first production
            corridor is narrow by design and complete by obligation. Every migration
            surface below is included in the Atlas to Supabase path.
          </p>

          <div className="scope-table">
            <div className="scope-table__header" aria-hidden="true">
              <span>Migration surface</span>
              <span>What Jumpship handles</span>
              <span>Durable output</span>
            </div>
            {migrationSurfaces.map((surface) => (
              <article className="scope-row" key={surface.title}>
                <div className="scope-row__title">
                  <span>{surface.number}</span>
                  <div><small>{surface.label}</small><h3>{surface.title}</h3></div>
                </div>
                <p>{surface.description}</p>
                <div className="scope-row__output"><CheckCircle2 aria-hidden="true" /><span>{surface.output}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--protocol" id="protocol">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">03 · Migration protocol</p>
              <h2>One agent. One coherent migration.</h2>
            </div>
            <div className="section-heading__support">
              <p>
                Jumpship preserves the same evidence, decisions, and design intent
                from first connection through decommission. It does not hand the
                hard parts between disconnected scripts, dashboards, and documents.
              </p>
            </div>
          </div>

          <WatermelonProtocol />
        </section>

        <section className="section section--execution">
          <div className="execution-heading">
            <p className="section-kicker">04 · Architecture of trust</p>
            <h2>Agentic judgment. Deterministic execution. Human authority.</h2>
          </div>

          <div className="execution-split">
            <article className="execution-role execution-role--agent">
              <div className="execution-role__label">
                <span className="role-glyph">J</span>
                <div><small>JUMPSHIP</small><strong>Reasons and supervises</strong></div>
              </div>
              <ul>
                <li><ScanSearch /> Reconstructs code, data, workloads, and uncertainty</li>
                <li><Network /> Designs the target model and migration sequence</li>
                <li><GitBranch /> Recommends trade-offs and routes human decisions</li>
                <li><BookOpenCheck /> Explains evidence, consequences, and reversibility</li>
              </ul>
            </article>

            <div className="execution-contract">
              <span className="execution-contract__line" aria-hidden="true" />
              <div>
                <Fingerprint aria-hidden="true" />
                <small>HANDOFF CONTRACT</small>
                <strong>Typed · versioned · signed</strong>
              </div>
              <span className="execution-contract__line" aria-hidden="true" />
            </div>

            <article className="execution-role execution-role--engine">
              <div className="execution-role__label">
                <span className="role-glyph"><Binary /></span>
                <div><small>CORRIDOR ENGINE</small><strong>Moves and proves</strong></div>
              </div>
              <ul>
                <li><Database /> Snapshots, transforms, and bulk loads records</li>
                <li><RefreshCcw /> Applies CDC, reconciles, and reverse-syncs</li>
                <li><ShieldCheck /> Enforces quarantine, gates, and write fencing</li>
                <li><FileCheck2 /> Verifies independently and emits durable receipts</li>
              </ul>
            </article>
          </div>

          <div className="execution-axiom">
            <CircleDot aria-hidden="true" />
            <p>The model is never in the record path.</p>
            <span>Humans authorize the two closing doors: cutover and decommission.</span>
          </div>
        </section>

        <section className="section section--proof" id="proof">
          <div className="proof-layout">
            <div className="proof-copy">
              <p className="section-kicker">05 · Independent verification</p>
              <h2>A green check should survive an auditor.</h2>
              <p>
                The verifier does not trust loader success, CDC status, or the
                agent&apos;s narrative. It reconstructs both sides and signs the
                evidence only when every mandatory layer passes with zero unexplained
                mismatch.
              </p>
              <div className="signed-proof">
                <Fingerprint aria-hidden="true" />
                <div><span>FINAL OUTPUT</span><strong>Signed integrity envelope</strong><small>reproducible · version-bound · independently verifiable</small></div>
              </div>
            </div>

            <ol className="verifier-stack">
              {verifierLayers.map(([number, title, description]) => (
                <li key={title}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <Check aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cutover" aria-labelledby="cutover-title">
          <div className="cutover__grid" aria-hidden="true" />
          <div className="cutover__inner">
            <div className="cutover__copy">
              <p className="section-kicker section-kicker--dark">06 · Reversibility</p>
              <h2 id="cutover-title">The irreversible moment should be the smallest part of the migration.</h2>
              <p>
                Every material decision names its undo boundary. Cutover is rehearsed
                before production. Silence means no. Postpone and abort stay easier
                than advance.
              </p>
            </div>

            <div className="rollback-window">
              <div className="rollback-window__number">72</div>
              <div><span>HOURS</span><strong>mandatory reverse-sync rollback window</strong><p>Rollback currency stays visible while the exit is real.</p></div>
            </div>

            <ol className="cutover-sequence" aria-label="Cutover and rollback sequence">
              {[
                ["01", "Rehearse", "production-shaped"],
                ["02", "Fresh consent", "named approver"],
                ["03", "Freeze + drain", "measured"],
                ["04", "Verify + flip", "receipt-bound"],
                ["05", "Reverse sync", "rollback current"],
                ["06", "Watch", "migration-specific"],
                ["07", "Decommission", "second consent"],
              ].map(([number, title, note], index) => (
                <li key={title} className={index === 3 ? "cutover-sequence__door" : ""}>
                  <span>{number}</span><strong>{title}</strong><small>{note}</small>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--trust" id="trust">
          <div className="trust-heading">
            <div>
              <p className="section-kicker">07 · Hard trust boundaries</p>
              <h2>Autonomous inside one cell. Structurally incapable outside it.</h2>
            </div>
            <p>
              Each migration runs in an isolated, single-tenant cell. Raw records,
              source code, CDC bodies, and quarantine rows stay there. Shared services
              receive allowlisted metadata, hashes, decisions, and scores.
            </p>
          </div>

          <div className="boundary-system">
            <div className="boundary-system__cell">
              <div className="boundary-system__label"><LockKeyhole /> ISOLATED MIGRATION CELL</div>
              <div className="boundary-system__sources">
                <div><Database /><span>Atlas</span><small>read-only</small></div>
                <div><Code2 /><span>Repository</span><small>selected + read-only</small></div>
              </div>
              <div className="boundary-system__agent">
                <span>J</span><div><strong>Jumpship + engine</strong><small>raw evidence remains here</small></div>
              </div>
              <div className="boundary-system__target"><Database /><span>Customer-owned Supabase</span></div>
            </div>

            <div className="boundary-system__diode">
              <span>ALLOWLISTED SUMMARIES ONLY</span>
              <ArrowRight aria-hidden="true" />
            </div>

            <div className="boundary-system__shared">
              <p className="instrument-label">SSAI control plane</p>
              <div><Workflow /> phase + decisions</div>
              <div><FileCheck2 /> hashes + receipts</div>
              <div><KeyRound /> authorization gates</div>
              <small>No raw customer evidence. No database credentials.</small>
            </div>
          </div>

          <div className="incapability-list">
            <div className="incapability-list__heading">
              <ShieldCheck aria-hidden="true" />
              <div><span>CONSTITUTIONAL BOUNDARY</span><h3>Jumpship cannot</h3></div>
            </div>
            <ul>
              {incapabilities.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section section--faq">
          <div className="faq-heading">
            <p className="section-kicker">08 · Straight answers</p>
            <h2>What a serious migration buyer asks next.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} name="landing-faq">
                <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><i aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta__grid" aria-hidden="true" />
          <div className="final-cta__inner">
            <div>
              <p className="section-kicker">SSAI</p>
              <h2>Bring us the migration you do not trust to a script.</h2>
            </div>
            <div className="final-cta__action">
              <p>Currently onboarding MongoDB Atlas to Supabase PostgreSQL migrations.</p>
              <a className="button button--primary" href="https://cal.com/avinier" target="_blank" rel="noreferrer">
                Request a migration review
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <BrandLockup tone="dark" />
          <p>Jumpship is SSAI&apos;s database migration agent.</p>
          <div><a href="mailto:hello@ssai.dev">hello@ssai.dev</a><span>SSAI · migration systems</span></div>
        </div>
      </footer>
    </>
  );
}
