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
- no decorative dashboard mosaic, decorative gradient, or generic AI spectacle.

Density comes from grouping related facts, reducing repetition, and using structured rows. It does not come from shrinking type, stacking cards, or filling the page with badges.

## Brand Architecture

- **SSAI** is the product.
- **Jumpship** is SSAI's database-migration agent.
- The wordmark may render as lowercase **ssai**.
- Product prose uses **SSAI** and **Jumpship**.
- The visible launch corridor is **MongoDB Atlas → Supabase/PostgreSQL**.
- No other source or target logo may imply an available corridor. Official marks may appear in an explicitly labeled illustrative-future roulette when adjacent copy states that the pair is not currently supported.

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
- Decorative gradients are not used on backgrounds, surfaces, controls, type, or illustrations. Flat color, translucency, structural one-pixel grids, and hard-edged CSS masks remain allowed when they clarify depth or system structure.
- Gradient text, purple haze, rainbow AI treatments, and blurred color-orb decoration are not used.
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
| Hero | 54/52 | 40/39 | Tiempos 400; one H1 only |
| Section display | 36/38 | 30/32 | Tiempos 400; major narrative turn |
| Headline | 25/29 | 22/26 | Tiempos 400; proof-surface heading |
| Title | 18/23 | 17/22 | Tiempos 400 or Geist 600 |
| Body lead | 16/26 | 15/24 | Geist 400; hero and section introduction |
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
- Standard body copy stays at least 15px, functional labels stay at least 11px, and controls retain a 44px hit target. Compactness comes from display scale, spacing, and composition before these floors are reduced.
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
- The hero keeps its established scale. Every section below it applies an additional 10 percent density reduction relative to the preceding compact pass across display type, major illustrations, tables, and section padding. Do not apply a whole-page transform or shrink standard body copy below 15px, functional labels below 11px, provider names below 13px, or interactive targets below 44px to achieve this.

## Landing Information Architecture

### 1. Header

A compact floating glass header with:

- the canonical SSAI lockup from `public/logo-full.png`; compact brand nodes elsewhere use `public/logo-icon.svg`, never a substitute letter such as `J`;
- links to Why, How it works, Compare, Corridors, and Proof;
- one primary CTA: **Migration review**;
- a compact mobile menu preserving the same narrative anchors.

Glass is purposeful here because navigation is a persistent layer above changing content. Use a visibly frosted warm-surface recipe: roughly 72-82 percent surface opacity, a one-pixel white or white-translucent hairline, 10-14px backdrop blur with restrained saturation, a soft floating shadow, and a solid fallback. A dark border is not permitted. Keep the 16px frame radius. The header must retain enough background definition for the glass effect to be visible without reducing text contrast.

### 2. Hero

Desktop composition: a near-even proposition and illustration split. At 1099px and below it becomes one column with the illustration after the live job.

The proposition contains:

- no eyebrow;
- H1: **SSAI makes databases swappable.**;
- support: **General-purpose coding agents help you change code. They don't own a live database migration. SSAI's Jumpship agent designs the target, supervises data movement and live sync, verifies the result, and keeps rollback ready through cutover.**;
- primary and secondary CTAs;
- a compact illustrated live-job instrument naming the Atlas → Supabase route, snapshot, CDC, verification, and rollback state.

The right visual is the transparent cutout at `public/ssai-migration-system-cutout.png`, not a fake product screenshot and not a rounded card. Its figure wrapper has no surface fill, border, shadow, or clipping radius. On desktop it sits high enough to align its meaningful visual mass with the first headline line. It communicates document records entering a controlled migration chamber, emerging as a relational system, and retaining a return path. It contains no embedded copy or third-party marks; the figure has meaningful alt text and a quiet **understand → transform → prove → reverse** caption.

The background grid, orbit, glow, and live-record dots move slowly through transforms and opacity. They remain subtle, preserve text contrast, and become static under reduced motion.

Any sample state is labeled **Illustrative live job**. The live-job instrument is secondary evidence, not a third hero column. If it makes the first viewport crowded, place it as a compact full-width row below the proposition/illustration pair or remove it; never reduce headline clarity to preserve it.

### 3. Where coding agents stop

Use one contiguous three-panel story, not a proof strip or six-card failure ribbon:

- partial evidence: code, data, writers, and human intent remain fragmented;
- missing machinery: a generated artifact does not supply backfill, CDC, quarantine, verification, gates, receipts, or rollback;
- false confidence: equal record counts can still hide changed meaning, ghost relationships, ordering drift, and regressions.

Each panel pairs one diagram with one claim and short explanation. The closing line is **You can copy every row and still migrate the business incorrectly.**

### 4. Where Jumpship takes over

Mirror the problem triptych with three SSAI capabilities that a developer plus coding agent does not obtain from a generated script:

- one accountable trajectory keeps evidence, decisions, unknowns, and undo boundaries coherent over time;
- a typed signed handoff keeps the model outside the record path while one compiled transform drives baseline and CDC;
- independent proof, rehearsed cutover, and a qualified current reverse path make authority changes defensible.

End with the operating axiom: Jumpship reasons and supervises; the corridor engine moves records; humans authorize cutover and decommission.

This operational handoff is an intentional dark band using Focus dark ground and the same one-pixel grid language as the rollback evidence instrument inside the FAQ. It is not pure black and contains no gradient. The grid, flat tonal surfaces, white type, and hairline rules supply structure. Its technology-agnostic headline states the complete trajectory: **SSAI runs the whole migration, from target design through live sync, independent proof, cutover, rollback, and source decommission.** **Target design** uses SSAI Blue as the primary emphasis and **source decommission** uses SSAI Coral as the secondary endpoint emphasis; neither color carries status by itself. Provider names belong in the explicitly scoped corridor surface, not this platform-level value statement.

### 5. Planning comparison

This is the primary conversion section. Use a warm-light, hairline-led comparison surface containing:

- a baseline switch for internal team versus consultancy;
- one intuitive operational input such as engineers assigned; loaded hourly cost belongs in the visible assumptions instead of being the unexplained headline control;
- side-by-side time, customer hours, and modeled cost;
- one shared time axis and aligned phase rows so duration differences cannot be exaggerated through independent scales;
- animated but dimensionally stable phase timelines;
- a clear bridge showing modeled customer hours redirected;
- explicit **estimated customer engineering time saved** and **estimated customer engineering spend avoided before the SSAI fee** labels;
- the assumptions that produce every figure and a visible disclaimer that the model is not a quote, benchmark, or delivery promise.

On narrow screens the two plans stack while retaining the same numeric domain and phase order. Numbers remain paired with labels and are never presented as observed customer results. The spend comparison covers customer engineering or consultancy spend only; it must not be called total savings, net savings, or return on investment until a real SSAI fee is included. The SSAI side is named **SSAI's Jumpship** and uses the canonical icon mark, never a `J` avatar.

### 6. Database migration routes

Use nine official provider marks in two Apple Calendar-style vertical reels connected through a core bearing the canonical SSAI icon. The pair index exposes all 72 ordered non-self source-to-target combinations. Selection is manual through previous/next, direct-pair, and keyboard controls; there is no dedicated pause button. Reel motion uses a short eased settle and the detail surface transitions with stable height, opacity, and transform. It becomes an immediate state change under reduced motion.

The active pair is followed by one compact, icon-led four-cell definition row: **Model, Move, Prove, Recover**. Text stays fully readable and does not disappear behind iconography. MongoDB Atlas → Supabase PostgreSQL is labeled **Available launch corridor**. Each of the other 71 pairs is labeled **Illustrative future corridor** with adjacent copy saying it is not currently available or supported. Visibility in the reel is not a capability claim and does not imply that all 72 pairs have qualified execution playbooks.

Provider marks come from the pinned Simple Icons-backed package or approved vendor assets. Preserve official silhouette and color, show the provider name, and never hand-draw approximation logos.

### 7. Proof, reversibility, and boundaries inside the FAQ

The buyer-question section is the landing page's single proof and trust destination. The former standalone verification, rollback, and structural-boundary sections are removed so the page does not repeat the same safety case in four places.

Three expanded answers carry compact evidence instruments:

- **Verification:** a five-layer ledger for accounting, business invariants, 100 percent canonical hashes, both-direction structure, and query semantics, followed by a signed integrity-envelope receipt.
- **Isolation:** a read-only Atlas and repository flow into one isolated migration cell, then a one-way allowlist boundary into shared phase, decision, hash, and receipt metadata. A denial ledger names the actions Jumpship cannot perform.
- **Rollback:** a dark-grid sequence from production-shaped rehearsal through fresh cutover consent, measured cutover, the qualified 72-hour reverse-sync window, and separately consented decommission.

These are explanatory landing-page instruments, not simulated customer state. On narrow screens they become vertical ledgers without horizontal scrolling. Their labels, rules, and icons remain visible under reduced motion.

### 8. Questions worth asking

Use one non-collapsible, single-open buyer-question accordion that answers the objections a technical owner should resolve before cutover. The first guarantee question is open by default. Activating the open row keeps it open; activating another row transfers the open state, so the answer region never collapses to zero:

- the exact guarantee tier and why impossible guarantees block or downgrade honestly;
- isolated-cell custody, source read-only access, and raw-evidence boundaries;
- where customer time and spend may be reduced, with every comparison labeled as an assumption rather than a quote or benchmark;
- how an immutable Jumpship agent bundle is evaluated, independently graded, and prevented from entering the deterministic record path;
- the qualified reverse-sync and rollback contract;
- the one currently available Atlas → Supabase/PostgreSQL corridor;
- the product boundary: SSAI is the broader product, while Jumpship is its database-migration specialist agent.

Add one verification question between guarantee and isolation: **How do you prove the migrated database still means the same thing?** Security is framed as the structural authority boundary, not only credential hygiene. Rollback explains both the qualified path back and the separate decommission consent that closes it.

Each row uses one literal, locally owned Lucide Animated topic icon. The final product-and-agent distinction uses the registry Sparkles icon as a category signal, not as a claim that migration is magical. Collapsed topic tiles and category labels are monochrome; only the expanded row restores its existing restrained semantic color across the topic tile, label, disclosure control, and answer wash. Hovering or focusing anywhere on a row drives its icon drawing once; the icon does not require its own pointer hitbox. The disclosure responds once on open, and neither motion loops. Pointer-initiated disclosure uses a 180-220 ms exponential ease-out transition with stable copy measure. Keyboard activation is immediate, arrow/Home/End keys move between triggers, and reduced-motion mode removes SVG and spatial movement. Every trigger retains `aria-expanded`, a labelled answer region, visible focus, and a 44 px minimum target.

### 9. Closing CTA

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

- Use Lucide React as the interface icon set, at a consistent 1.75 stroke.
- Use reviewed local components from the Lucide Animated registry only when motion explains a real live transition such as snapshot, CDC, verification, rollback readiness, or route direction.
- Animated icons have a static/reduced-motion equivalent, do not carry status alone, and do not loop only to attract attention.
- Standard size: 18px.
- Compact floor: 16px for controls and functional signals; a scaled illustrative instrument may use smaller non-interactive diagram marks.
- Prominent functional maximum: 24px.
- Icons are functional signals, not decoration.
- No emoji in interface chrome.
- Third-party marks retain their official shape/color and visible name. Non-launch pairs always carry the illustrative-future disclaimer.

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
- Below-fold headings, grouped story panels, instruments, and CTA columns reveal once with opacity and at most 15px of vertical travel. Use 220-260ms exponential ease-out timing and 48ms stagger steps; the hero remains the single load-based signature entrance.
- The floating header may show a two-pixel transform-only reading-progress rule and current-section link state. Hide the moving rule under reduced motion while retaining the current-section text state.
- The reveal system is progressive enhancement. Server and no-JavaScript output remain fully visible, unsupported observers resolve immediately, and reveal styles are removed after settling so later hover and state transitions stay responsive.
- Use transform and opacity for movement.
- Do not animate layout-affecting width, height, margin, or padding.
- Progress animation must preserve stable dimensions.
- No bounce, elastic overshoot, cursor trails, or scan sweeps. Long ambient loops are limited to the subtle hero field; live-state loops must explain active work and pause when irrelevant.
- Repeating or self-advancing interactive motion pauses while its region is hovered or contains focus; selectors should be manual by default when direct control tells the story equally well.
- Reduced-motion mode removes autoplay, inertial reel travel, and spatial movement while keeping every state legible through immediate replacement or a restrained crossfade.

## Responsive Behavior

Acceptance viewports:

- 375 × 812
- 320 × 568
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
- [ ] No decorative gradient appears; structural grids, flat-color masks, and translucency remain legible without it.
- [ ] The navbar uses its white hairline and restrained blur, and the transparent hero cutout has no card container.
- [ ] The operational handoff uses the flat dark-grid treatment while the planning comparison uses one honest shared axis.
- [ ] All 72 reel pairs are reachable, but only Atlas → Supabase is presented as available and the other 71 are explicitly illustrative future routes.
- [ ] Keyboard, focus, contrast, reflow, touch-target, and reduced-motion checks pass.
- [ ] Illustrative product state is visibly labeled.
- [ ] An intended visitor can identify the product, agent, corridor, value, safety model, and next action within ten seconds.

## Watermelon UI Adoption

The landing uses Watermelon UI as a copy-owned component registry, not as a
replacement visual identity.

- Continuous Tabs supplies the shared-selection motion for the migration acts.
- The original SSAI floating desktop navbar remains authoritative; Watermelon
  must not replace its structure or link treatment. The CTA may adopt a
  Watermelon micro-interaction only when its label, target, and SSAI styling stay
  unchanged.
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
- Production release requires component-level license and provenance review.
