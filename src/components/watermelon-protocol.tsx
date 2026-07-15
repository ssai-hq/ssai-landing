"use client";

import { useState } from "react";
import {
  ContinuousTabs,
  type ContinuousTab,
} from "@/components/watermelon-ui/continuous-tabs";
import {
  StepIndicator,
  type WatermelonStep,
} from "@/components/watermelon-ui/step-indicator";

const groups = [
  {
    id: "understand",
    label: "Understand",
    number: "01",
    summary: "Reconstruct the real system before proposing a destination.",
    detail: "Custody, code, data, queries, writers, and platform physics",
    phases: [
      ["connect", "Connect"],
      ["discovery", "Discovery"],
      ["foundation", "Foundation"],
      ["provision", "Provision"],
      ["snapshot", "Snapshot"],
      ["census", "Census"],
    ],
  },
  {
    id: "design",
    label: "Design",
    number: "02",
    summary: "Turn evidence and human knowledge into a defensible model.",
    detail: "Invariants, ownership, mapping, decisions, and undo boundaries",
    phases: [["design", "Design"]],
  },
  {
    id: "prove",
    label: "Prove",
    number: "03",
    summary: "Rehearse the exact plan and test every guarantee mechanically.",
    detail: "Quarantine, CDC, reconciliation, and five-layer verification",
    phases: [
      ["rehearsal", "Rehearsal"],
      ["bulk_load", "Bulk load"],
      ["sync", "Sync"],
      ["verify", "Verify"],
    ],
  },
  {
    id: "move",
    label: "Move safely",
    number: "04",
    summary: "Switch traffic with a current, rehearsed path back.",
    detail: "Fresh consent, reverse sync, rollback, and deletion receipts",
    phases: [
      ["cutover", "Cutover"],
      ["watch", "Watch"],
      ["decommission", "Decommission"],
      ["complete", "Complete"],
    ],
  },
] as const;

const tabs: readonly ContinuousTab[] = groups.map((group) => ({
  id: group.id,
  label: group.label,
  meta: group.number,
}));

const steps: readonly WatermelonStep[] = groups.flatMap((group) =>
  group.phases.map(([id, label], index) => ({
    id,
    label,
    number: String(
      groups
        .slice(0, groups.indexOf(group))
        .reduce((total, item) => total + item.phases.length, 0) +
        index +
        1,
    ).padStart(2, "0"),
  })),
);

function groupForPhase(phaseId: string) {
  return groups.find((group) =>
    group.phases.some(([id]) => id === phaseId),
  );
}

export function WatermelonProtocol() {
  const [activeGroupId, setActiveGroupId] = useState("design");
  const [activePhaseId, setActivePhaseId] = useState("design");
  const activeGroup =
    groups.find((group) => group.id === activeGroupId) ?? groups[1];

  const selectGroup = (groupId: string) => {
    const nextGroup = groups.find((group) => group.id === groupId);
    if (!nextGroup) return;

    setActiveGroupId(nextGroup.id);
    setActivePhaseId(nextGroup.phases[0][0]);
  };

  const selectPhase = (phaseId: string) => {
    const nextGroup = groupForPhase(phaseId);
    if (!nextGroup) return;

    setActiveGroupId(nextGroup.id);
    setActivePhaseId(phaseId);
  };

  return (
    <div className="wm-protocol">
      <div className="wm-protocol__tabs">
        <span className="instrument-label">Migration acts</span>
        <ContinuousTabs
          activeId={activeGroupId}
          ariaLabel="Migration acts"
          items={tabs}
          onChange={selectGroup}
        />
      </div>

      <section
        className="wm-protocol__panel"
        role="tabpanel"
        aria-label={activeGroup.label}
        key={activeGroup.id}
      >
        <div className="wm-protocol__statement">
          <span className="wm-protocol__act-number">{activeGroup.number}</span>
          <p className="instrument-label">{activeGroup.label}</p>
          <h3>{activeGroup.summary}</h3>
          <p>{activeGroup.detail}</p>
        </div>

        <ol className="wm-protocol__phase-list">
          {activeGroup.phases.map(([id, label], index) => (
            <li key={id} data-active={id === activePhaseId}>
              <button type="button" onClick={() => selectPhase(id)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <i>{id === activePhaseId ? "current view" : "inspect"}</i>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <div className="wm-protocol__trajectory">
        <div>
          <span className="instrument-label">Canonical trajectory</span>
          <p>Choose any phase to inspect its migration act.</p>
        </div>
        <StepIndicator
          activeId={activePhaseId}
          onStepChange={selectPhase}
          steps={steps}
        />
      </div>
    </div>
  );
}
