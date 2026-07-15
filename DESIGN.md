# SSAI Landing Design System

## Register

landing / marketing

## Status and Authority

This is the design authority for the public SSAI landing page. It translates the current Jumpship migration-pivot packet into a marketing surface. Product-state behavior, security guarantees, and implementation contracts remain authoritative in the current MVP implementation packet.

The landing page may borrow the product's migration flight-recorder grammar, but it is not the authenticated product UI and must not pretend that decorative sample data is live customer state.

## Creative North Star

**A migration flight recorder in public view.**

The page should feel like a precise record of a consequential system change: sharp enough for a technical buyer, dense enough to demonstrate substance, and calm enough to communicate control.

The visual direction is warm-light, editorial, and instrument-like:

- a warm off-white ground;
- strong serif hierarchy;
- compact sans-serif explanation;
- monospaced provenance used sparingly;
- hairlines, ledgers, phase rails, evidence rows, and version chips;
- one clear corridor moving from source understanding to verified target;
- no decorative dashboard mosaic and no generic AI spectacle.

Density comes from grouping related facts, reducing repetition, and using structured rows. It does not come from shrinking type, stacking cards, or filling the page with badges.

## Brand Architecture

- **SSAI** is the product.
- **Jumpship** is SSAI's database-migration agent.
- The wordmark may render as lowercase **ssai**.
- Product prose uses **SSAI** and **Jumpship**.
- The visible launch corridor is **MongoDB Atlas → Supabase/PostgreSQL**.
- No other source or target logo may imply an available corridor.

The first viewport must make the product, agent, corridor, value, and primary action legible without scrolling.

## Visual Principles

### 1. Warm precision

Warm light is the default environment. Deep ink, restrained neutrals, and hairline structure carry most of the interface. Bright color is scarce and therefore meaningful.

### 2. Evidence before decoration

The main visual object should communicate how Jumpship understands, designs, migrates, verifies, or preserves rollback. Illustrations that cannot teach one of those ideas do not belong.

### 3. One causal trajectory

The page reads as one journey:

**discover → design → rehearse → load → sync → verify → cut over → roll back/watch → decommission**

Sections may deepen the story, but they must not fragment the product into an unrelated grid of features.

### 4. Tiempos hierarchy, product density

Tiempos Text gives consequential headings authority and pace. Geist carries the explanation. Geist Mono marks machine facts. The composition stays warm and instrument-like while the proof surfaces remain compact and product-like.

### 5. Honest consequence

Every claim about action should show a boundary, basis, or reversal path nearby. The page never hides the hard parts of cutover behind a cheerful “continue.”

## Color System

### Core palette

| Token | Value | Use |
|---|---:|---|
| Ground | #fffdf8 | Universal page ground |
| Surface | #ffffff | Raised or focused content surface |
| Surface subtle | #f7f4ec | Alternate bands and quiet instruments |
| Ink | #171715 | Headlines and strongest labels |
| Text | #2b2a27 | Body and primary explanatory copy |
| Text muted | #6f6c63 | Secondary copy and quiet labels |
| Hairline | #ddd8cc | Dividers, rails, table rules |
| SSAI Blue | #254bf1 | Primary action, navigation, focus, current phase |
| SSAI Blue hover | #1e3fcf | Primary hover state |
| SSAI Coral | #FF3C5B | Rare brand flourish only |
| Success | #2f7d4a | Verified or complete status |
| Warning | #a86416 | Waiting, degraded, or attention state |
| Danger | #b93b3b | Failed, blocked, or destructive state |
| Focus dark ground | #20201e | Product cutover reference only |
| Focus dark surface | #292927 | Product cutover reference only |

### Color rules

- SSAI Blue is the only primary interaction color.
- SSAI Coral is preserved as a brand constant but appears at most once in a visible viewport.
- Coral is never a danger, consent, warning, or status color.
- Green, amber, and red appear as small dots, text, two-pixel rules, or low-tint labels paired with words.
- Hairlines and tonal changes establish structure before shadows.
- Pure black is not used.
- Low-chroma blue and coral refraction may sit behind the hero glass. Gradient text, purple haze, and rainbow AI treatments are not used.
- The landing page remains warm-light. It does not add a decorative global dark mode.

## Typography

All fonts are self-hosted through Next font tooling. Production makes no runtime request to a font CDN.

### Families

- **Tiempos Text Regular** — display hierarchy and consequential narrative turns.
- **Geist Sans** — body, navigation, controls, and explanatory copy.
- **Geist Mono** — provenance, timestamps, versions, hashes, counts, rates, and migration metadata only.

Tiempos is loaded from the repository-local WOFF2 through `next/font/local`. Mono is a system signal, not a theme.

### Landing type scale

| Tier | Desktop | Narrow | Family and use |
|---|---:|---:|---|
| Hero | 64/60 | 46/43 | Tiempos 400; one H1 only |
| Section display | 42/44 | 35/36 | Tiempos 400; major narrative turn |
| Headline | 28/32 | 24/28 | Tiempos 400; proof-surface heading |
| Title | 20/25 | 19/24 | Tiempos 400 or Geist 600 |
| Body lead | 18/29 | 17/27 | Geist 400; hero and section introduction |
| Body | 15/24 | 15/23 | Geist 400; standard reading text |
| Control | 14/20 | 15/20 | Geist 550; buttons and navigation |
| Label | 11/14 | 11/14 | Geist 650; uppercase, 0.07em tracking |
| Metadata | 12/16 | 12/16 | Geist Mono 450; machine facts only |

### Typography rules

- Body copy is capped at roughly 68-72 characters per line.
- The hero headline stays within three lines on a 1280px viewport and four on a narrow phone.
- Tiempos does not appear in buttons, pills, table headers, or metadata.
- Geist Mono never carries the main value proposition.
- Reading text never drops below 11px. A scaled, non-interactive illustrative instrument may use 8-10px metadata when its full meaning remains available in adjacent text and accessible labels.
- Emphasis comes from hierarchy, weight, and spacing, not gradient text or excessive bolding.

## Grid and Rhythm

### Page frame

- Maximum content width: 1440px.
- Desktop grid: 12 columns.
- Desktop gutters: 32-40px.
- Narrow gutters: 20px.
- Page rhythm: 8px.
- Dense internal rhythm: 4px.
- Standard section separation: 88-112px, tightened when a hairline or shared background keeps the narrative connected.

### Density rules

- Prefer one large composition over a collection of equal cards.
- Use hairline rows, split columns, and aligned metadata to compress information.
- Keep related proof and explanation adjacent.
- Avoid ornamental whitespace that pushes the corridor or value proposition below the fold.
- Avoid cards nested inside cards. Use indentation, section rules, and background tone instead.

## Landing Information Architecture

### 1. Header

A compact floating glass header with:

- the canonical SSAI logo from `public/logo-full.png`;
- links to Scope, Protocol, Proof, and Trust;
- one primary CTA: **Migration review**;
- a compact mobile menu preserving all four anchors.

Glass is purposeful here because navigation is a persistent layer above changing content. Match the established SSAI clear-glass recipe: a 25 percent warm-surface tint, a faint 20 percent hairline border, 4px backdrop blur, no pronounced glass shadow or saturation boost, and a solid fallback. Keep the 16px frame radius. The header must remain quiet enough to avoid becoming a product navigation replica.

### 2. Hero

Desktop composition: seven columns of proposition and five columns of proof.

The proposition contains:

- eyebrow: **Database migrations, fully accounted for**;
- H1: **MongoDB to PostgreSQL, without the leap of faith.**;
- one short explanation naming SSAI and Jumpship;
- primary and secondary CTAs;
- a compact trust line: read-only source, isolated migration cell, verified cutover, rollback window.

The proof object is a landing-specific migration instrument, not a fake chat window. It should show a compact example of:

- source evidence discovered;
- target-model decision;
- current phase;
- verification or rollback state;
- evidence/version identifiers.

Any sample state is labeled **Illustrative migration**.

### 3. Corridor strip

A full-width hairline band directly after the hero:

**MongoDB Atlas** → discovery and design → deterministic migration → **Supabase/PostgreSQL**

Supporting labels can name GitHub context, CDC, verification, and rollback. The strip must not include unrelated database logos.

### 4. Why copying fails

Show the problem as a dense comparison between document reality and relational responsibility:

- field drift → explicit type policy;
- embedded ownership → tables, foreign keys, or intentional JSONB;
- app-enforced references → constraints and identity translation;
- multiple writers → writer inventory and cutover choreography;
- live changes → CDC, reconciliation, and headroom;
- “looks loaded” → canonical and query-semantic verification.

This section should feel like an annotated ledger, not six floating benefit cards.

### 5. One migration trajectory

Use a phase rail or table with the complete path:

1. Connect
2. Discover
3. Foundation
4. Snapshot and census
5. Design and decide
6. Rehearse and quarantine
7. Load and CDC
8. Verify
9. Cut over
10. Roll back or watch
11. Decommission

Each phase gets one sentence describing its output and one compact evidence artifact. The rail is causal; it is not arbitrary navigation.

### 6. What moves

Present the work inside this corridor:

- document shapes and BSON types;
- embedded records and arrays;
- identifiers and references;
- history and lifecycle;
- constraints and indexes;
- bulk data;
- live writes through change streams;
- query semantics and integrity evidence;
- reverse-sync and rollback state.

Do not label these as separate database corridors.

### 7. Agent plus deterministic engine

Use a two-column responsibility ledger:

| Jumpship | Deterministic engine |
|---|---|
| Investigates evidence | Executes compiled transforms |
| Recommends target design | Loads snapshot and bulk data |
| Explains uncertainty and trade-offs | Applies CDC and reconciliation |
| Requests human decisions | Runs verification and gates |
| Supervises the trajectory | Produces effect receipts |

The visual should make it impossible to infer that model output directly mutates records.

### 8. Proof and reversibility

Show the relationship between:

- rehearsed runbook;
- versioned mapping;
- signed verification;
- named-approver cutover;
- 72-hour reverse-sync and rollback window;
- rollback viability;
- named-approver decommission;
- honest retention and deletion states.

A horizontal reversibility timeline is preferred over a generic testimonial block.

### 9. Structural boundaries

Use a compact incapability list:

- cannot write the source;
- cannot flip traffic by itself;
- cannot bypass quarantine or consent;
- cannot widen its tools or credentials;
- cannot provision or destroy its own migration cell;
- cannot delete retained proof early;
- cannot claim success without verification.

Pair each statement with the enforcing class: source grant, isolated cell, broker policy, state gate, or evidence contract.

### 10. Closing CTA

Return to the visitor's actual migration:

**Bring the Atlas system you cannot afford to migrate blindly.**

Primary action: **Talk through your migration**

Secondary copy should name the corridor and avoid implying support for other database pairs.

## Component Grammar

### Surfaces

- Default to content directly on Ground.
- Use Surface for an instrument that needs separation.
- Use Surface subtle for alternate bands and grouped evidence.
- Radius is a five-step system: 6px chips, 9px controls, 12px compact groups, 14px elevated surfaces, and 16px major frames. The migration flight recorder may use 18px because it is the hero instrument.
- Ledger rows and internal dividers stay square inside their rounded parent so dense information still aligns cleanly.
- Circles are reserved for status dots, role glyphs, and diagrams whose geometry carries meaning.
- Hairlines are the default depth mechanism.
- Shadows are reserved for truly floating menus or overlays and remain soft.

### Buttons and links

- Minimum target size: 44 by 44 CSS pixels.
- Primary: SSAI Blue fill, white text, 9px radius.
- Secondary: transparent or Surface background, Hairline border, Ink text.
- One primary action per decision region.
- Hover, focus, active, and disabled states are visually distinct.
- Every external action states where it goes; no vague “Get started.”

### Status and metadata

- Status is always named in text.
- Dots are 6px; compact rules are 2px.
- Version, evidence root, phase, lag, and timestamp use Geist Mono.
- Do not invent a confidence score.
- Use absolute time alongside countdowns when consequence matters.

### Icons

- Use Lucide or a consistent line icon set.
- Standard size: 18px.
- Compact floor: 16px for controls and functional signals; a scaled illustrative instrument may use smaller non-interactive diagram marks.
- Prominent maximum: 20px.
- Icons are functional signals, not decoration.
- No emoji in interface chrome.
- Third-party marks identify the launch corridor only; they do not form a capability logo wall.

### Data displays

- Prefer native tables, definition rows, CSS bars, and simple SVG.
- Do not add a chart library for a sparkline, phase rail, or progress bar.
- A table becomes labeled definition rows on narrow screens.
- Color never carries status alone.

## Copy System

### Naming rules

- First mention: **SSAI gives you Jumpship, its database-migration agent.**
- Corridor: **MongoDB Atlas → Supabase/PostgreSQL**.
- Short corridor after first mention: **Atlas → PostgreSQL**.
- Use **Jumpship** when describing investigation, recommendation, explanation, or supervision.
- Use **deterministic engine** when describing record transformation, loading, CDC apply, reconciliation, verification, reverse sync, or gates.

### Content order

For every material claim:

1. Fact
2. Evidence or basis
3. Customer consequence
4. Next action
5. Reversibility or closing door

### Exact language

Prefer:

- inspect;
- census;
- map;
- rehearse;
- quarantine;
- load;
- sync;
- reconcile;
- verify;
- flip;
- roll back;
- watch;
- decommission.

Avoid:

- zero downtime;
- one-click migration;
- magical;
- migrate anything;
- perfect schema;
- fully autonomous;
- no risk;
- instant;
- generic “continue” at a consequential boundary.

Do not call design confirmation a consent. The two consent kinds are cutover and decommission.

## Motion

Motion supports comprehension and never becomes the proof.

- Micro state: 120-180ms.
- Panel or disclosure: 180-240ms.
- Section or phase transition: 260ms maximum.
- Use transform and opacity for movement.
- Do not animate layout-affecting width, height, margin, or padding.
- Progress animation must preserve stable dimensions.
- No bounce, elastic overshoot, cursor trails, scan sweeps, or perpetual decorative loops.
- Reduced-motion mode removes movement while keeping every state legible.

## Responsive Behavior

Acceptance viewports:

- 375 × 812
- 768 × 1024
- 1280 × 800
- 1440 × 900
- 1920 × 1080

### Wide

- Hero uses the seven/five split.
- Corridor and trajectory can remain horizontal.
- Dense comparison sections use aligned columns.

### Tablet and small laptop

- Hero proof remains visible but moves below the main proposition when needed.
- Trajectory becomes a compact rail plus stacked detail.
- No central reading column shrinks below a comfortable measure.

### Mobile

- Product, agent, corridor, and CTA remain in the first viewport.
- Corridor becomes a vertical source-to-target sequence.
- Tables become labeled rows.
- The full migration trajectory remains available without hover.
- Proof and boundary sections preserve exact wording rather than collapsing into icon-only summaries.
- No horizontal mystery scroll, clipped action, or carousel for consequential content.

## Accessibility

Target WCAG 2.2 AA.

- One H1 and a logical heading hierarchy.
- Semantic header, nav, main, section, and footer landmarks.
- Skip link to main content.
- Complete keyboard navigation.
- Visible focus ring with at least 3:1 adjacent contrast.
- Body text contrast of at least 4.5:1.
- Text, icon, or pattern accompanies every color state.
- Reflow at 320 CSS pixels and 200 percent zoom without lost content or actions.
- Touch targets meet 44 by 44 CSS pixels.
- Reduced motion preserves information.
- Illustrative product states are labeled in visible text, not only accessible metadata.

## Performance and Implementation Guidance

- Build the marketing page server-first.
- Use client islands only where interaction materially improves understanding.
- Self-host Tiempos Text, Geist Sans, and Geist Mono.
- No runtime font requests.
- No heavy hero canvas, video background, chart library, or animation framework for basic effects.
- Preserve stable dimensions to keep CLS at or below 0.10.
- Target LCP at or below 2.5 seconds on the landing route.
- Optimize images and avoid shipping unused platform-logo libraries.
- The landing page contains no customer evidence, credentials, authenticated product state, or simulated safety mutation.

## Anti-References

The landing page is not:

- a generic AI page with gradients, floating orbs, and vague automation copy;
- a dark terminal or cyberpunk environment;
- a dashboard mosaic of equal cards;
- a chatbot transcript with speech bubbles;
- a cloud-vendor logo wall;
- a one-click converter pitch;
- a generic enterprise page with unprovable statistics;
- a product-app replica that fakes live state;
- a page that implies support for database corridors outside Atlas → Supabase/PostgreSQL.

## Do

- Lead with the corridor and outcome.
- Lead visually with SSAI and identify Jumpship correctly in the supporting copy.
- Show the full trajectory, not only the happy data-load step.
- Make design quality, deterministic execution, proof, and rollback equally visible.
- Use hairlines, ledgers, phase rails, and evidence rows to create density.
- Preserve SSAI Blue and SSAI Coral exactly.
- Keep Coral rare.
- Show structural incapabilities in customer language.
- Label all illustrative state.
- Make the primary CTA specific to the visitor's migration.

## Do Not

- Do not present Jumpship as the product name.
- Do not imply every database pair is supported.
- Do not use unrelated database or platform logos as social proof.
- Do not frame a schema copy as a target design.
- Do not imply that the model directly transforms records.
- Do not claim zero downtime or automatic no-freeze dual-write.
- Do not make dark mode the brand.
- Do not substitute the canonical SSAI wordmark, use Inter, or make a runtime font request.
- Do not nest cards or decorate empty space.
- Do not hide caveats, rollback expiry, or destructive boundaries in fine print.

## Acceptance Checklist

- [ ] The page identifies SSAI as the product.
- [ ] The page identifies Jumpship as SSAI's database-migration agent.
- [ ] The page names only MongoDB Atlas → Supabase/PostgreSQL as the launch corridor.
- [ ] The hero explains understanding, target design, supervised migration, proof, and rollback.
- [ ] The migration trajectory runs from connect through decommission.
- [ ] Agent reasoning and deterministic record-path execution are visibly distinct.
- [ ] Source-read-only, isolation, consent, verification, and rollback boundaries are easy to find.
- [ ] Cutover and decommission are the only consent kinds named.
- [ ] No unsupported corridor, zero-downtime, perfect-schema, or automatic-dual-write claim appears.
- [ ] Tiempos Text, Geist Sans, and Geist Mono are self-hosted.
- [ ] SSAI Blue and SSAI Coral match their exact values.
- [ ] Warm-light, hairline-first, visually dense composition holds at all acceptance viewports.
- [ ] Keyboard, focus, contrast, reflow, touch-target, and reduced-motion checks pass.
- [ ] Illustrative product state is visibly labeled.
- [ ] An intended visitor can identify the product, agent, corridor, value, safety model, and next action within ten seconds.

## Watermelon UI Comparison Variant

The `experiment/watermelon-ui-landing` branch tests Watermelon UI as a
copy-owned component registry, not as a replacement visual identity.

- Continuous Tabs supplies the shared-selection motion for the migration acts
  and floating desktop navigation.
- Step Indicator supplies the interactive canonical phase trajectory.
- Imported components must use the SSAI radius ladder: 9px controls, 12px
  compact groups, 14px floating surfaces, 16px frames, and 18px instruments.
- SSAI Blue remains the only primary interaction color. Watermelon green is not
  part of the SSAI palette.
- Tiempos, Geist Sans, and Geist Mono remain unchanged.
- Motion uses 200 to 240ms exponential ease-out transitions. Springs, bounce,
  infinite sweeps, and blur-heavy transitions from registry demos are removed.
- The registry is allowed only where interaction improves comprehension.
  Evidence rows, safety boundaries, consent, receipts, and rollback remain
  opaque and ledger-like.
- Promotion beyond the comparison branch requires component-level license and
  provenance review.
