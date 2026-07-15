import {
  ArrowRight,
  Check,
  CircleDot,
  Database,
  FileCheck2,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const phases = [
  ["01", "Connect", "done"],
  ["02", "Discover", "done"],
  ["03", "Snapshot", "done"],
  ["04", "Census", "done"],
  ["05", "Design", "active"],
  ["06", "Rehearse", "next"],
  ["07", "Move + verify", "next"],
  ["08", "Cut over", "locked"],
] as const;

export function MigrationFlightRecorder() {
  return (
    <section
      className="flight-recorder"
      aria-label="Illustrative Jumpship migration flight recorder"
    >
      <header className="flight-recorder__topbar">
        <div className="flight-recorder__identity">
          <span className="status-dot status-dot--blue" aria-hidden="true" />
          <span>Migration 01</span>
          <span className="flight-recorder__corridor">Atlas → Supabase</span>
        </div>
        <div className="flight-recorder__topmeta">
          <span className="illustrative-chip">illustrative</span>
          <span className="version-chip">projection · 0042</span>
        </div>
      </header>

      <div className="flight-recorder__grid">
        <aside className="phase-rail" aria-label="Migration phases" tabIndex={0}>
          <p className="instrument-label">Trajectory</p>
          <ol>
            {phases.map(([number, label, state]) => (
              <li className={`phase-rail__item phase-rail__item--${state}`} key={label}>
                <span className="phase-rail__number">{number}</span>
                <span>{label}</span>
                {state === "done" ? <Check aria-hidden="true" /> : null}
                {state === "active" ? <CircleDot aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </aside>

        <div className="session-spine">
          <div className="session-spine__heading">
            <div>
              <p className="instrument-label">Main session</p>
              <h2>Target model review</h2>
            </div>
            <span className="status-badge status-badge--active">Design active</span>
          </div>

          <article className="session-event session-event--system">
            <div className="session-event__meta">
              <span>Jumpship</span>
              <time>14:32</time>
            </div>
            <p>
              I found three timestamp representations across orders and refunds.
              The current recommendation preserves event history and normalizes
              write-time semantics.
            </p>
            <div className="evidence-link">
              <FileCheck2 aria-hidden="true" />
              <span>Evidence: census / queries / writer paths</span>
              <ArrowRight aria-hidden="true" />
            </div>
          </article>

          <article className="decision-receipt">
            <div className="decision-receipt__heading">
              <span className="receipt-mark" aria-hidden="true">
                <Check />
              </span>
              <div>
                <p className="instrument-label">Decision receipt</p>
                <h3>Timestamp policy confirmed</h3>
              </div>
            </div>
            <dl>
              <div>
                <dt>Undo boundary</dt>
                <dd>Free until cutover</dd>
              </div>
              <div>
                <dt>Basis</dt>
                <dd>Spec v07 · 3 evidence roots</dd>
              </div>
            </dl>
          </article>

          <div className="session-progress" aria-label="Current reasoning progress">
            <span className="session-progress__dot" aria-hidden="true" />
            <p>
              <strong>Now:</strong> checking index fit against observed query shapes
            </p>
          </div>
        </div>

        <aside className="artifact-panel" aria-label="Current design artifact">
          <div className="artifact-panel__heading">
            <div>
              <p className="instrument-label">Artifact</p>
              <h3>Target model</h3>
            </div>
            <span className="version-chip">v07</span>
          </div>

          <div className="schema-map" aria-label="Simplified target schema">
            <div className="schema-node schema-node--primary">
              <Database aria-hidden="true" />
              <span>orders</span>
              <small>relational core</small>
            </div>
            <div className="schema-link" aria-hidden="true">
              <span />
              <span />
            </div>
            <div className="schema-map__children">
              <div className="schema-node">
                <GitBranch aria-hidden="true" />
                <span>order_events</span>
                <small>history</small>
              </div>
              <div className="schema-node">
                <ShieldCheck aria-hidden="true" />
                <span>payments</span>
                <small>isolated access</small>
              </div>
            </div>
          </div>

          <dl className="artifact-facts">
            <div>
              <dt>Planning horizon</dt>
              <dd>Declared</dd>
            </div>
            <div>
              <dt>Paths mapped</dt>
              <dd>Total</dd>
            </div>
            <div>
              <dt>Intentional debt</dt>
              <dd>Visible</dd>
            </div>
          </dl>
        </aside>
      </div>

      <footer className="flight-recorder__clocks">
        <span><i className="clock-dot clock-dot--blue" />Agent reasoning · active</span>
        <span><i className="clock-dot" />Data plane · waiting</span>
        <span><i className="clock-dot clock-dot--amber" />Human questions · 2</span>
        <span><i className="clock-dot" />Rollback window · not started</span>
      </footer>
    </section>
  );
}
