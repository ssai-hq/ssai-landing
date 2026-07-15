# SSAI Landing Product Brief

## Register

landing / marketing

This document governs the public landing page only. It translates the current migration-pivot packet into clear marketing language. It does not replace the Jumpship implementation plan, product contracts, security model, or acceptance rubric.

## Naming

- **SSAI** is the product.
- **Jumpship** is SSAI's database-migration agent.
- The visual wordmark may use lowercase **ssai**. Product prose uses **SSAI**.
- Jumpship is not a separate company, product, database, or migration corridor.
- Lead with SSAI. Introduce Jumpship in explanatory copy as the agent SSAI uses to design and supervise the migration.

## Launch Corridor

The landing page describes one launch corridor:

**MongoDB Atlas → Supabase/PostgreSQL**

The target is a customer-owned Supabase project or its PostgreSQL database. GitHub repository access supplies application and data-model context.

No other source or target pair may be presented as shipped, supported, available, or implied through a logo wall. Other corridors are future possibilities until a newer authoritative packet qualifies them.

## Audience

The primary visitor is a technical founder, CTO, head of engineering, data lead, or senior engineer responsible for a production MongoDB system that needs to become PostgreSQL.

They recognize some combination of these conditions:

- years of undocumented document shapes and schema drift;
- embedded records, arrays, polymorphism, and BSON edge cases;
- relationships enforced in application code rather than the database;
- multiple writers, background jobs, and query behavior that cannot be inferred from collections alone;
- a migration project that has remained in the backlog because the cutover risk is larger than the data-copy task;
- fear of losing semantics, blocking live writes, or discovering corruption after traffic moves;
- no defensible answer to “How do we know the new system is equivalent?” or “How do we get back?”

The visitor is not looking for a generic converter. They need an accountable migration trajectory from understanding through handoff.

## Product Purpose

SSAI helps a team migrate a living system without migrating blind.

Jumpship reconstructs how the company actually works from code, MongoDB data, workloads, and human knowledge. It uses that understanding to design a defensible PostgreSQL model for a declared planning horizon, supervises a safe and reversible migration into that model, and keeps evidence, uncertainty, trade-offs, progress, and rollback currency legible throughout.

The target is not a source-shaped copy and not a promise of a perfect schema forever. It is the best evidence-backed model for the observed system and the customer's stated horizon, with assumptions, unknowns, rejected alternatives, intentional debt, and evolution triggers left inspectable.

## The Core Value Proposition

**Understand the system. Design the right target. Move it with proof. Keep a way back.**

The landing page should make four ideas unmistakable:

1. **Understanding before conversion.** Jumpship investigates data, code, queries, writers, invariants, and human context before finalizing the target model.
2. **Design, not transcription.** The PostgreSQL model is justified against ownership, lifecycle, history, tenancy, security, retention, and workload behavior.
3. **Agent reasoning, deterministic execution.** Jumpship investigates, explains, recommends, and sequences. A deterministic engine performs record transforms, bulk load, CDC apply, reconciliation, verification, reverse sync, and gates.
4. **Evidence and reversibility.** Decisions have receipts, migration stages are rehearsed, integrity is verified, and rollback remains explicit while its evidence is current.

## What “Migration” Includes

Within the Atlas → Supabase/PostgreSQL corridor, the landing page may describe these parts of the work:

### System discovery

- connect MongoDB Atlas, Supabase, and the GitHub repository;
- inspect collection shapes, field variants, writers, queries, and repository evidence;
- establish a consistent source snapshot and source-time provenance;
- surface ambiguity, coverage, confidence, and explicit unknowns.

### Relational redesign

- identify domain entities, ownership, lifecycle, history, and business invariants;
- translate BSON and document variants into explicit PostgreSQL types;
- decide when embedded records become tables, foreign keys, join tables, arrays, or intentional JSONB;
- design primary keys, identity translation, constraints, indexes, tenancy, retention, and query fit;
- version the mapping specification and record assumptions, alternatives, and design debt.

### Data movement

- rehearse the migration against a branch or equivalent target environment;
- perform snapshot and bulk load using the approved compiled transform;
- quarantine exceptional records instead of silently coercing them;
- resolve rulings, recompile the mapping, and incrementally re-rehearse.

### Live synchronization

- tail MongoDB change streams;
- apply live changes to PostgreSQL through the same transform used for bulk load;
- track lag, headroom, dead letters, drift, reconciliation, and freeze-drain estimates;
- re-baseline honestly when resume-token continuity is lost.

### Verification and proof

- compare counts, identities, canonical values, relationships, and query semantics;
- reconcile in both directions;
- catch deliberate and silent corruption;
- produce a signed integrity verdict backed by inspectable evidence.

### Cutover, rollback, and watch

- rehearse the runbook before production traffic moves;
- freeze, drain, verify, flip, smoke-test, and unfreeze as one controlled choreography;
- require fresh named-approver consent for cutover;
- maintain a mandatory 72-hour reverse-sync and rollback window when the qualified target permits it;
- keep parity and rollback viability visible;
- require fresh named-approver consent before decommissioning the source;
- distinguish access disabled, deletion scheduled, retained-until, and deleted.

These are stages and migration modes inside one corridor. They are not claims of support for unrelated databases.

## Jumpship's Role

Jumpship operates in two evidence-grounded postures:

- **Design:** investigate the system, synthesize domain understanding, explain uncertainty, recommend a target model, and ask the few questions that require human knowledge.
- **Migration operations:** supervise deterministic attempts, explain exceptions, preserve the accepted design context, surface blockers, and recommend the next safe action.

Clear customer explanation is continuous across both postures. The agent does not expose hidden reasoning or replace canonical migration state with a chat summary.

## Trust Contract

The public promise must remain concrete:

- source access is structurally read-only;
- each migration uses an isolated cell and its own security boundary;
- raw BSON, repository samples, quarantine rows, CDC payloads, and unredacted evidence stay inside the migration cell;
- the shared web and control surfaces receive only allowed metadata, hashes, decisions, and scores;
- Jumpship cannot write the source, flip traffic by itself, bypass quarantine, widen its tools or IAM, release credentials, provision or destroy its own cell, delete the golden snapshot, or skip consent;
- ambiguity becomes a human answer or a ledgered reversible assumption; irreversible foundation decisions do not use the assumption escape hatch;
- safety-critical state is backend-authoritative and never advanced optimistically by the browser;
- impossible guarantees block honestly rather than degrading silently.

There are exactly two high-friction consent kinds:

1. **Cutover** — authorizes the exact traffic flip against current evidence.
2. **Decommission** — authorizes source retirement and the disclosed retention/deletion sequence.

Design confirmation is a reversible decision, not a third consent.

## Scope Boundaries

The landing page must not claim:

- support for every database or every migration pair;
- automatic dual-write or a no-freeze tier;
- zero downtime;
- a perfect schema that never needs to evolve;
- a general application rewrite;
- a Jumpship-hosted target database;
- that the model performs deterministic record-path effects;
- that silence, stale evidence, or an expired approval can advance a migration;
- that retained or deletion-scheduled data is already deleted.

## Messaging Hierarchy

### Recommended hero

**Eyebrow:** Database migrations, fully accounted for

**Headline:** MongoDB to PostgreSQL, without the leap of faith.

**Support:** SSAI reconstructs the system, then uses its Jumpship agent to design the target model and supervise a migration the customer can verify and roll back.

**Primary CTA:** Plan my migration

**Secondary CTA:** See the migration protocol

### Supporting message

“Move the database” is not enough. The value is preserving how the business works while changing the model underneath it.

## Landing Page Narrative

The page should follow this order:

1. Name SSAI, Jumpship, the corridor, and the outcome above the fold.
2. Show why MongoDB → PostgreSQL migrations fail when treated as data copying.
3. Show the complete trajectory from discovery through decommission.
4. Explain what gets redesigned and what gets moved.
5. Separate Jumpship's judgment from deterministic engine execution.
6. Make verification, rollback, isolation, and source-read-only boundaries visible.
7. End with one direct CTA for a visitor with this migration.

## Voice

Direct, exact, calm, and technically literate.

- State the fact first, the basis second, and the next action third.
- Prefer concrete verbs: inspect, census, map, rehearse, load, sync, reconcile, verify, flip, roll back, watch, decommission.
- Name uncertainty and limitations without softening them into vague disclaimers.
- Avoid breathless AI language, invented customer statistics, grand category claims, and “magic” metaphors.
- Write for someone who understands production risk but should not need to know Jumpship's internal architecture to grasp the value.

## Landing Success Criteria

After ten seconds, the intended visitor can answer:

- What is SSAI?
- Who or what is Jumpship?
- Which migration corridor is being offered?
- Why is this more than a data-copy tool?
- How are design quality, integrity, and rollback addressed?
- What is the next step?

If any answer is unclear, the page has failed regardless of visual polish.
