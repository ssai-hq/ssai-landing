"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  BadgePercent,
  BriefcaseBusiness,
  Clock3,
  PiggyBank,
  Users,
  WalletCards,
} from "lucide-react";
import styles from "@/app/landing-redesign.module.css";

const internalTimeline = [
  ["Archaeology", 3],
  ["Target design", 3],
  ["Backfill + CDC", 5],
  ["Verification", 3],
  ["Cutover + recovery", 4],
] as const;

const consultancyTimeline = [
  ["Discovery", 2],
  ["Design handoff", 3],
  ["Build + migrate", 5],
  ["Acceptance", 3],
  ["Cutover support", 3],
] as const;

const jumpshipTimeline = [
  ["Reconstruct + design", 2],
  ["Compile + rehearse", 2],
  ["Move + prove", 2],
  ["Cut over + watch", 2],
] as const;

const HOURLY_COST = 175;
const JUMPSHIP_WEEKS = 8;
const JUMPSHIP_HOURS = 2 * 8 * JUMPSHIP_WEEKS;
const JUMPSHIP_LABOR_COST = JUMPSHIP_HOURS * HOURLY_COST;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type Timeline = readonly (readonly [string, number])[];

function TimelineChart({
  label,
  timeline,
  tone,
}: {
  label: string;
  timeline: Timeline;
  tone: "baseline" | "jumpship";
}) {
  return (
    <div className={styles.planChart} data-tone={tone} aria-label={label}>
      <div className={styles.weekAxis} aria-hidden="true">
        <span style={{ gridColumn: "1 / span 1" }}>1</span>
        <span style={{ gridColumn: "4 / span 1" }}>4</span>
        <span style={{ gridColumn: "8 / span 1" }}>8</span>
        <span style={{ gridColumn: "12 / span 1" }}>12</span>
        <span style={{ gridColumn: "16 / span 1" }}>16</span>
        <span style={{ gridColumn: "18 / span 1" }}>18w</span>
      </div>
      {timeline.map(([phase, span], index) => {
        const phaseStart = timeline
          .slice(0, index)
          .reduce((total, [, length]) => total + length, 1);

        return (
          <div className={styles.timelinePhase} key={phase}>
            <i
              style={
                {
                  "--start": phaseStart,
                  "--span": span,
                  "--delay": `${index * 18}ms`,
                } as CSSProperties
              }
            />
            <span style={{ "--start": phaseStart, "--span": span } as CSSProperties}>
              {phase}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function MigrationEconomics() {
  const [baseline, setBaseline] = useState<"internal" | "consultancy">("internal");
  const [teamSize, setTeamSize] = useState(4);
  const [consultancyFee, setConsultancyFee] = useState(180_000);

  const assumptions = useMemo(() => {
    if (baseline === "internal") {
      const hours = teamSize * 20 * 18;
      return {
        label: "Internal engineering team",
        weeks: 18,
        hours,
        cost: hours * HOURLY_COST,
        staffing: `${teamSize} engineers × 20 migration hours/week × 18 weeks`,
        timeline: internalTimeline,
        costLabel: "Customer engineering spend",
      };
    }

    const hours = 220;
    return {
      label: "External migration firm",
      weeks: 16,
      hours,
      cost: consultancyFee + hours * HOURLY_COST,
      staffing: `${money.format(consultancyFee)} quoted fee + 220 customer review hours`,
      timeline: consultancyTimeline,
      costLabel: "Fee + customer labor",
    };
  }, [baseline, consultancyFee, teamSize]);

  const timeSaved = Math.round(
    ((assumptions.weeks - JUMPSHIP_WEEKS) / assumptions.weeks) * 100,
  );
  const effortSaved = Math.max(
    0,
    Math.round(((assumptions.hours - JUMPSHIP_HOURS) / assumptions.hours) * 100),
  );
  const spendHeadroom = Math.max(
    0,
    Math.round(((assumptions.cost - JUMPSHIP_LABOR_COST) / assumptions.cost) * 100),
  );

  return (
    <div className={styles.economics}>
      <div className={styles.economicsControls}>
        <div className={styles.baselineTabs} role="group" aria-label="Choose comparison baseline">
          <button
            type="button"
            aria-pressed={baseline === "internal"}
            onClick={() => setBaseline("internal")}
          >
            Internal team
          </button>
          <button
            type="button"
            aria-pressed={baseline === "consultancy"}
            onClick={() => setBaseline("consultancy")}
          >
            Migration firm
          </button>
        </div>

        {baseline === "internal" ? (
          <label className={styles.rateControl} key="internal-control">
            <span>
              Engineers pulled into the migration
              <strong>{teamSize} engineers</strong>
            </span>
            <input
              type="range"
              min="2"
              max="6"
              step="1"
              value={teamSize}
              onChange={(event) => setTeamSize(Number(event.target.value))}
            />
          </label>
        ) : (
          <label className={styles.rateControl} key="consultancy-control">
            <span>
              Illustrative quoted project fee
              <strong>{money.format(consultancyFee)}</strong>
            </span>
            <input
              type="range"
              min="75000"
              max="300000"
              step="5000"
              value={consultancyFee}
              onChange={(event) => setConsultancyFee(Number(event.target.value))}
            />
          </label>
        )}

        <div className={styles.assumptionNote}>
          <span>Planning assumption</span>
          <strong>{money.format(HOURLY_COST)}/hr blended engineering cost</strong>
        </div>
      </div>

      <div className={styles.comparison}>
        <article
          className={styles.comparisonPanel}
          data-side="baseline"
          key={`baseline-${baseline}`}
        >
          <header>
            <div>
              <span>Assembled project</span>
              <h3>{assumptions.label}</h3>
            </div>
            <BriefcaseBusiness aria-hidden="true" />
          </header>

          <div className={styles.comparisonMetrics}>
            <div>
              <Clock3 aria-hidden="true" />
              <span>Illustrative plan</span>
              <strong>{assumptions.weeks} weeks</strong>
            </div>
            <div>
              <Users aria-hidden="true" />
              <span>Customer load</span>
              <strong>{assumptions.hours.toLocaleString()} hours</strong>
            </div>
            <div>
              <WalletCards aria-hidden="true" />
              <span>{assumptions.costLabel}</span>
              <strong>{money.format(assumptions.cost)}</strong>
            </div>
          </div>

          <TimelineChart
            label={`${assumptions.label} on a shared 18-week planning axis`}
            timeline={assumptions.timeline}
            tone="baseline"
          />

          <p className={styles.staffingNote}>{assumptions.staffing}</p>

          <ul className={styles.comparisonList}>
            <li>Your team selects, builds, and integrates the migration machinery.</li>
            <li>Evidence, scripts, verifier, runbook, and recovery cross separate handoffs.</li>
            <li>Every rehearsal change creates more project state for your team to carry.</li>
          </ul>
        </article>

        <article className={styles.comparisonPanel} data-side="jumpship">
          <header>
            <div>
              <span>Purpose-built migration system</span>
              <h3>SSAI&apos;s Jumpship</h3>
            </div>
            <Image
              className={styles.jumpshipGlyph}
              src="/logo-icon.svg"
              alt=""
              width={44}
              height={44}
              aria-hidden="true"
            />
          </header>

          <div className={styles.comparisonMetrics}>
            <div>
              <Clock3 aria-hidden="true" />
              <span>Illustrative target</span>
              <strong>{JUMPSHIP_WEEKS} weeks</strong>
            </div>
            <div>
              <Users aria-hidden="true" />
              <span>Customer review load</span>
              <strong>{JUMPSHIP_HOURS} hours</strong>
            </div>
            <div>
              <WalletCards aria-hidden="true" />
              <span>Customer labor before SSAI fee</span>
              <strong>{money.format(JUMPSHIP_LABOR_COST)}</strong>
            </div>
          </div>

          <TimelineChart
            label="SSAI's Jumpship on the same 18-week planning axis"
            timeline={jumpshipTimeline}
            tone="jumpship"
          />

          <p className={styles.staffingNote}>
            2 reviewers × 8 hours/week × 8-week illustrative target
          </p>

          <ul className={styles.comparisonList}>
            <li>Jumpship keeps evidence, decisions, execution, and recovery in one trajectory.</li>
            <li>The corridor engine supplies backfill, CDC, quarantine, proof, and receipts.</li>
            <li>Your team focuses on business rulings and the human-authorized doors.</li>
          </ul>
        </article>
      </div>

      <dl
        className={styles.savingsLedger}
        aria-label="Illustrative planning difference"
        key={`savings-${baseline}`}
      >
        <div>
          <Clock3 aria-hidden="true" />
          <dt>Elapsed time</dt>
          <dd>{timeSaved}% less</dd>
        </div>
        <div>
          <BadgePercent aria-hidden="true" />
          <dt>Customer effort</dt>
          <dd>{effortSaved}% fewer hours</dd>
        </div>
        <div>
          <PiggyBank aria-hidden="true" />
          <dt>{baseline === "internal" ? "Customer labor spend" : "Modeled budget headroom"}</dt>
          <dd>{spendHeadroom}% before SSAI fee</dd>
        </div>
      </dl>

      <p className={styles.economicsDisclaimer}>
        Illustrative planning model, not a quote, benchmark, or delivery promise.
        Source condition, volume, document variation, writers, connectivity, and
        review latency can materially change the plan. SSAI pricing is set after
        migration review, so the final percentage is labor-cost reduction or budget
        headroom before the SSAI fee—not total engagement savings.
      </p>
    </div>
  );
}
