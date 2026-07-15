# SSAI Landing

Marketing site for SSAI. Jumpship is SSAI's database migration agent.

The current landing page is intentionally scoped to the first production corridor:
MongoDB Atlas to customer-owned Supabase PostgreSQL. Product claims and terminology
follow the Jumpship MVP implementation packet at:

`../mdhq/*MIGRATIONPIVOT/jumpship-docs/mvp-implementation/`

## Local development

Requirements:

- Node.js 24 or newer
- pnpm 11.7.0

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Watermelon comparison branch

This worktree runs the `experiment/watermelon-ui-landing` branch. It uses
[Watermelon UI](https://ui.watermelon.sh/home) as a shadcn-compatible registry
for selected interactions, then adapts those components to SSAI's typography,
radius, color, motion, and accessibility rules.

The comparison intentionally uses Watermelon only for the floating navigation,
migration-act tabs, and canonical phase indicator. Evidence, consent, trust,
and rollback surfaces remain explicit SSAI ledgers instead of decorative
component demos.

Registry sources:

- `https://registry.watermelon.sh/r/continuous-tabs.json`
- `https://registry.watermelon.sh/r/step-indicator.json`

Watermelon's public terms permit copying components subject to the relevant
licenses and repository terms. Confirm component-level license provenance
before promoting this experiment to production.

## Verification

```bash
pnpm lint
pnpm exec tsc --noEmit --incremental false
pnpm build
```

The homepage is server-rendered. A small client island powers the accessible mobile
navigation; the migration content and product artifact remain server-rendered. Legacy
qualification routes and pre-pivot landing components were removed in the greenfield
rebuild.
