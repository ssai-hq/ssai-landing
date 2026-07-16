"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  FileCheck2,
  Fingerprint,
  LockKeyhole,
  RefreshCcw,
  Workflow,
  X,
} from "lucide-react";
import {
  BadgePercentAnimated,
  FingerprintAnimated,
  LockKeyholeAnimated,
  RefreshCcwAnimated,
  ScanTextAnimated,
  ShieldCheckAnimated,
  SparklesAnimated,
  WaypointsAnimated,
  type FaqTopicIconComponent,
} from "./icons/faq-topic-icons";
import styles from "./trust-faq.module.css";

type FaqItem = {
  category: string;
  question: string;
  answer: string;
  icon: FaqTopicIconComponent;
  tone: "guarantee" | "verification" | "security" | "savings" | "scrutiny" | "rollback" | "scope" | "identity";
  visual?: "verification" | "boundary" | "rollback";
  anchor?: string;
};

const faqItems: readonly FaqItem[] = [
  {
    category: "Guarantee",
    question: "What does SSAI actually guarantee?",
    answer:
      "SSAI does not make a blanket zero-downtime or perfect-schema promise. It declares the guarantee tier for your environment, then binds cutover to a versioned mapping, a rehearsed runbook, independent five-layer verification, a signed evidence root, and fresh named-approver consent. If a precondition cannot be proven, Jumpship blocks, downgrades the tier before consent, or declines.",
    icon: ShieldCheckAnimated,
    tone: "guarantee",
  },
  {
    category: "Verification",
    question: "How do you prove the migrated database still means the same thing?",
    answer:
      "A successful load, green CDC status, and Jumpship's narrative are not proof. An independent deterministic verifier reconstructs source and target through separate readers, checks every mandatory layer against a preregistered rubric, and refuses a green verdict for any unexplained or indeterminate mismatch. Only a clean run produces a version-bound signed integrity envelope that a third party can verify.",
    icon: FingerprintAnimated,
    tone: "verification",
    visual: "verification",
  },
  {
    category: "Isolation",
    question: "Where can Jumpship act, and where is it structurally blocked?",
    answer:
      "Each migration runs inside one isolated cell. Atlas and selected repository access are read-only; raw records, code, CDC bodies, quarantine rows, credentials, and unredacted evidence stay within the cell. Shared services receive only allowlisted phase state, decisions, hashes, receipts, and scores. Jumpship cannot widen that authority or independently cross a consequential boundary.",
    icon: LockKeyholeAnimated,
    tone: "security",
    visual: "boundary",
    anchor: "trust",
  },
  {
    category: "Savings",
    question: "Will SSAI actually save us time and money?",
    answer:
      "No responsible answer is one fixed percentage. SSAI removes much of the bespoke machinery and handoff work around backfill, CDC, proof, runbooks, and rollback, while your team keeps business rulings and authorization. The comparison above is an adjustable planning model, not a benchmark or quote. It shows customer hours and spend avoided before the SSAI fee, not total savings. The final plan and price follow migration review.",
    icon: BadgePercentAnimated,
    tone: "savings",
  },
  {
    category: "AI scrutiny",
    question: "How is Jumpship's AI held accountable?",
    answer:
      "The model never grades or promotes itself. Before production promotion, an immutable Jumpship bundle is required to pass at least 55 versioned trajectory cases and 20 agent acceptance tests covering prompt injection, recovery, stale memory, unsupported claims, and capability escalation. Hard safety gates must pass 100%, with independent graders and human adjudication for judgment quality. Even a passing model cannot transform records, grant consent, or treat its own output as proof.",
    icon: ScanTextAnimated,
    tone: "scrutiny",
  },
  {
    category: "Rollback",
    question: "How does Jumpship keep rollback real after cutover?",
    answer:
      "Rollback is a rehearsed, backend-authorized operation, not a document on a shelf. When the target and mapping qualify, reverse sync keeps the source current for a mandatory 72-hour post-cutover window while parity and rollback viability remain visible. Going back requires final reverse catch-up, critical verification, and an authorized traffic flip. Re-cutover needs new proof and fresh consent; decommission is the separate consent that closes the path.",
    icon: RefreshCcwAnimated,
    tone: "rollback",
    visual: "rollback",
  },
  {
    category: "Current scope",
    question: "Which migrations can SSAI run today?",
    answer:
      "The available launch corridor is MongoDB Atlas to a customer-owned Supabase/PostgreSQL target, with GitHub repository access for application context. Every other pair shown on this site is an illustrative future corridor, not a supported route. SSAI adds a corridor only after its snapshot, transform, CDC, proof, and rollback behavior is separately qualified.",
    icon: WaypointsAnimated,
    tone: "scope",
  },
  {
    category: "Product and agent",
    question: "What’s the difference between SSAI and Jumpship?",
    answer:
      "SSAI is the product. Jumpship is SSAI’s database-migration specialist agent: it investigates the system, designs the PostgreSQL target, supervises migration operations, and explains the evidence and trade-offs. SSAI is the broader home for that work and can add more specialist capabilities over time, while Jumpship remains the agent responsible for database migrations.",
    icon: SparklesAnimated,
    tone: "identity",
  },
] as const;

const verificationLayers = [
  ["01", "Accounting", "record, quarantine, or ruling"],
  ["02", "Invariants", "balances and domain truths"],
  ["03", "100% hashes", "every canonical record"],
  ["04", "Both directions", "omissions and ghost rows"],
  ["05", "Query semantics", "values, order, and pagination"],
] as const;

const rollbackSteps = [
  ["01", "Rehearse", "production-shaped"],
  ["02", "Fresh consent", "named approver"],
  ["03", "Freeze + drain", "measured"],
  ["04", "Verify + flip", "receipt-bound"],
  ["05", "72h reverse sync", "rollback current"],
  ["06", "Decommission", "second consent"],
] as const;

const blockedActions = [
  "write the source",
  "flip traffic alone",
  "release credentials",
  "bypass quarantine or consent",
  "widen tools or IAM",
  "delete retained proof early",
] as const;

function VerificationVisual() {
  return (
    <div className={`${styles.visual} ${styles.verificationVisual}`}>
      <ol className={styles.verificationLayers} aria-label="Independent verification layers">
        {verificationLayers.map(([number, title, note]) => (
          <li key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{note}</small>
            <Check aria-hidden="true" />
          </li>
        ))}
      </ol>
      <div className={styles.proofReceipt}>
        <Fingerprint aria-hidden="true" />
        <div>
          <span>Signed output</span>
          <strong>Integrity envelope</strong>
        </div>
        <small>version-bound · rerunnable · independently verifiable</small>
      </div>
    </div>
  );
}

function BoundaryVisual() {
  return (
    <div className={`${styles.visual} ${styles.boundaryVisual}`}>
      <div className={styles.boundaryFlow}>
        <div className={styles.boundaryInputs}>
          <span className={styles.visualLabel}>Read-only inputs</span>
          <div><Database aria-hidden="true" /><strong>Atlas</strong><small>read-only</small></div>
          <div><Code2 aria-hidden="true" /><strong>Repository</strong><small>selected + read-only</small></div>
        </div>

        <div className={styles.flowArrow}>
          <ArrowRight aria-hidden="true" />
          <span>one cell</span>
        </div>

        <div className={styles.boundaryCell}>
          <span className={styles.visualLabel}><LockKeyhole aria-hidden="true" /> Isolated migration cell</span>
          <div className={styles.cellAgent}>
            <Image src="/logo-icon.svg" alt="" width={32} height={31} />
            <div><strong>Jumpship + engine</strong><small>raw evidence remains here</small></div>
          </div>
          <div className={styles.cellTarget}><Database aria-hidden="true" /><span>Customer-owned Supabase</span></div>
        </div>

        <div className={`${styles.flowArrow} ${styles.diodeArrow}`}>
          <ArrowRight aria-hidden="true" />
          <span>allowlist</span>
        </div>

        <div className={styles.controlPlane}>
          <span className={styles.visualLabel}>SSAI control plane</span>
          <div><Workflow aria-hidden="true" /><span>phase + decisions</span></div>
          <div><FileCheck2 aria-hidden="true" /><span>hashes + receipts</span></div>
          <small>No raw evidence or credentials</small>
        </div>
      </div>

      <div className={styles.denialLedger}>
        <strong>Jumpship cannot</strong>
        <ul>
          {blockedActions.map((action) => <li key={action}><X aria-hidden="true" />{action}</li>)}
        </ul>
      </div>
    </div>
  );
}

function RollbackVisual() {
  return (
    <div className={`${styles.visual} ${styles.rollbackVisual}`}>
      <ol className={styles.rollbackSteps} aria-label="Cutover and rollback sequence">
        {rollbackSteps.map(([number, title, note], index) => (
          <li
            className={index === 3 ? styles.cutoverStep : index === 4 ? styles.reverseStep : undefined}
            key={number}
          >
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{note}</small>
          </li>
        ))}
      </ol>
      <div className={styles.rollbackCurrency}>
        <RefreshCcw aria-hidden="true" />
        <span><strong>Rollback remains current</strong> while reverse parity and viability are current.</span>
      </div>
    </div>
  );
}

function FaqVisual({ visual }: { visual: FaqItem["visual"] }) {
  if (visual === "verification") return <VerificationVisual />;
  if (visual === "boundary") return <BoundaryVisual />;
  if (visual === "rollback") return <RollbackVisual />;
  return null;
}

export function TrustFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [skipMotion, setSkipMotion] = useState(false);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const headingId = useId();
  const idPrefix = useId().replaceAll(":", "");

  function openItem(index: number, keyboardInitiated: boolean) {
    if (index === openIndex) return;

    if (keyboardInitiated) {
      setSkipMotion(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSkipMotion(false));
      });
    }

    setOpenIndex(index);
  }

  function moveFocus(index: number, direction: "next" | "previous" | "first" | "last") {
    const lastIndex = faqItems.length - 1;
    const nextIndex =
      direction === "first"
        ? 0
        : direction === "last"
          ? lastIndex
          : direction === "next"
            ? (index + 1) % faqItems.length
            : (index - 1 + faqItems.length) % faqItems.length;

    buttonRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      className={`section ${styles.section}`}
      id="proof"
      aria-labelledby={headingId}
      data-reveal="stagger"
    >
      <div className={styles.heading}>
        <p className="section-kicker">Questions worth asking</p>
        <h2 className={styles.title} id={headingId}>
          The hard questions, answered before cutover.
        </h2>
        <p className={styles.intro}>
          Guarantees, custody, AI scrutiny, economics, and rollback should be inspectable before you trust the migration.
        </p>
      </div>

      <div
        className={styles.list}
        data-motion={skipMotion ? "instant" : "smooth"}
        aria-label="Migration buyer questions"
      >
        {faqItems.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${idPrefix}-faq-trigger-${index}`;
          const panelId = `${idPrefix}-faq-panel-${index}`;
          const Icon = faq.icon;

          return (
            <div
              className={`${styles.item} ${styles[faq.tone]}`}
              data-open={isOpen ? "true" : "false"}
              id={faq.anchor}
              key={faq.question}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setFocusedIndex(null);
              }}
              onFocusCapture={() => setFocusedIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                className={styles.trigger}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                onClick={(event) => openItem(index, event.detail === 0)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveFocus(index, "next");
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveFocus(index, "previous");
                  } else if (event.key === "Home") {
                    event.preventDefault();
                    moveFocus(index, "first");
                  } else if (event.key === "End") {
                    event.preventDefault();
                    moveFocus(index, "last");
                  }
                }}
              >
                <span className={styles.topicIcon} aria-hidden="true">
                  <Icon
                    animated={hoveredIndex === index || focusedIndex === index}
                    className={styles.topicGlyph}
                    size={20}
                  />
                </span>
                <span className={styles.triggerCopy}>
                  <span className={styles.category}>{faq.category}</span>
                  <strong>{faq.question}</strong>
                </span>
                <span className={styles.disclosureIcon} aria-hidden="true">
                  <ChevronDown />
                </span>
              </button>

              <div
                className={styles.panel}
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
              >
                <div className={styles.panelClip}>
                  <div className={styles.panelBody} data-has-visual={faq.visual ? "true" : "false"}>
                    <p>{faq.answer}</p>
                    <FaqVisual visual={faq.visual} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
