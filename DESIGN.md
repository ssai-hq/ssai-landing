---
name: SSAI Control Plane
description: Cognitive DevOps control plane — austere, dense, inspectable
colors:
  ssai-blue: "#254bf1"
  ssai-coral: "#FF3C5B"
  warm-surface: "#fffefc"
  dark-ground: "#262626"
  deep-ink: "#111111"
  body-text: "#222222"
  secondary-text: "#4d4d4d"
  quiet-metadata: "#888888"
  light-ink: "#f5f5f0"
  dark-body: "#e0ddd6"
  dark-secondary: "#a8a8a0"
  dark-metadata: "#6b6b65"
  warm-hairline: "#d8d4cc"
  dark-hairline: "#3a3a3a"
  meta-surface: "#2f2f2f"
  card-white: "#ffffff"
  muted-green: "#2d8a4e"
  muted-amber: "#b45309"
  restrained-red: "#dc2626"
  active-hover: "#f8f7f4"
  hover-ground: "#f5f4f0"
typography:
  display:
    fontFamily: "var(--font-title), Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "var(--font-title), Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-title), Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0"
  body:
    fontFamily: "var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  label:
    fontFamily: "var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ssai-blue}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "oklch(from #254bf1 calc(l - 0.05) c h)"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.body-text}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.secondary-text}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "36px"
  input-default:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "36px"
  pill-deploy:
    backgroundColor: "rgba(37, 75, 241, 0.1)"
    textColor: "{colors.ssai-blue}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  pill-incident:
    backgroundColor: "rgba(220, 38, 38, 0.1)"
    textColor: "{colors.restrained-red}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  pill-warning:
    backgroundColor: "rgba(180, 83, 9, 0.1)"
    textColor: "{colors.muted-amber}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  badge-healthy:
    backgroundColor: "rgba(45, 138, 78, 0.08)"
    textColor: "{colors.muted-green}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  badge-danger:
    backgroundColor: "rgba(220, 38, 38, 0.08)"
    textColor: "{colors.restrained-red}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
---

# Design System: SSAI Control Plane

## 1. Overview

**Creative North Star: "The Developer Control Plane"**

A dense, inspectable surface where competent people verify autonomous operations calmly. Not a bunker, not a war room, not a monitoring center with walls of red alerts. A workspace where information is dense when you look for it and quiet when you don't. Where the typography is precise because the decisions are consequential. Where the single blue accent on a warm product surface anchors attention without competing for it.

The SSAI control plane is an austere product interface. It borrows its density from developer tooling (serif display face marks hierarchy; sans-serif carries the work) and its restraint from professional instruments (status is proportional; nothing screams unless something is actually wrong). The system exists so operators can verify their AI colleague is competent, not so they can drive it. Every surface, every component, every transition serves that verification with minimal friction.

This system explicitly rejects: generic shadcn admin panels with no design opinion; Datadog-style metric-dense dashboards; terminal/cyberpunk aesthetics; chatbot UIs with decorative charts bolted on; Devin-style AI agent theater where dark themes and flashy autonomy demos substitute spectacle for substance; PagerDuty-style alert-centric tools that feel like monitoring software rather than a colleague's workspace.

**Key Characteristics:**
- Warm product surface (`#fffefc`) as the universal ground. Never cold white, never gray.
- Serif display face (Tiempos Text) reserved for product hierarchy: page titles, thread titles, action gates, empty states. Never in navigation, buttons, or metadata.
- Precise and quiet interaction: subtle state changes, minimal decoration. Components communicate through restraint.
- Dual-mode architecture (Normal/Meta) that shifts the color environment without changing the spatial layout or component grammar.
- Status communicated through small proportional indicators (6px dots, tinted pills at 8% opacity), never through large color fills or traffic-light dashboards.
- One blue accent (`#254bf1`) that carries all primary interaction. One coral flourish (`#FF3C5B`) permitted once per screen at most.
- Deliberate shadow layers (inset → layer-1 → layer-2 → layer-3) for structural depth. Hairline borders remain the default; shadows earn their place through tier assignment.

## 2. Colors: The Control Plane Palette

A restrained palette of tinted warm neutrals with one committed blue accent. The color strategy is Restrained: the warm product surface and deep ink do the heavy lifting; SSAI Blue appears on less than 10% of any given screen; its rarity is the point.

### Primary

- **SSAI Blue** (`#254bf1`): The single operational accent. Active states, primary buttons, selected thread indicators, composer submit, links, focus rings. A deep saturated blue that reads as authoritative against the warm product surface, not decorative. In Meta Mode, the same blue becomes more prominent against the dark ground.

### Secondary

- **SSAI Coral** (`#FF3C5B`): A reserved flourish, not a functional color. Appears exclusively in the wordmark's "ai" characters, one critical-action badge per screen (when an action gate demands immediate attention), and the final 30 seconds of a countdown bar. Never in buttons, navigation, status indicators, or background fills. Never more than once per visible screen.

### Neutral

- **Warm Surface** (`#fffefc`): The ground surface in Normal Mode. Every zone's default background. Warmer than white; the slight yellow tint prevents clinical coldness.
- **Card White** (`#ffffff`): The composer and elevated card surfaces. Marginally brighter than Warm Surface to create a gentle lift without shadow.
- **Deep Ink** (`#111111`): Page titles and thread titles only. The heaviest text weight in the system.
- **Body Text** (`#222222`): All body copy, thread messages, descriptions. The workhorse reading color.
- **Secondary Text** (`#4d4d4d`): Descriptions, supporting copy, expandable section labels. Subordinate to Body Text.
- **Quiet Metadata** (`#888888`): Timestamps, monospaced metadata, channel indicators. Background information that's available but not competing.
- **Warm Hairline** (`#d8d4cc`): All borders and dividers in Normal Mode. A tinted warm gray that disappears into the product surface. Never a stark gray.
- **Dark Ground** (`#262626`): The ground surface in Meta Mode. Not pure black; warm enough to feel intentional.
- **Meta Surface** (`#2f2f2f`): Card and panel backgrounds in Meta Mode. One step lighter than Dark Ground.
- **Dark Hairline** (`#3a3a3a`): Borders and dividers in Meta Mode.
- **Light Ink** (`#f5f5f0`) / **Dark Body** (`#e0ddd6`) / **Dark Secondary** (`#a8a8a0`) / **Dark Metadata** (`#6b6b65`): The Meta Mode text hierarchy, mirroring the Normal Mode text scale.

### Semantic Status

- **Muted Green** (`#2d8a4e`): Healthy, completed, resolved. Used as 6px dots or 8%-opacity tinted pills.
- **Muted Amber** (`#b45309`): Warning, pending, degraded. Same indicator patterns.
- **Restrained Red** (`#dc2626`): Danger, failing, destructive. Same indicator patterns. Not coral; coral is brand, not status.

### Named Rules

**The Coral Discipline Rule.** Coral appears at most once per visible screen. Its permitted locations: the wordmark "ai", one critical action badge, the countdown bar's final 30 seconds. Everything else is forbidden. Coral's rarity is its power.

**The Status Proportion Rule.** Status colors appear only as small indicators: 6px dots, tinted pills at 8% opacity, and 2px accent borders. Status colors never fill large areas, never become button colors, and never dominate a surface. Color is never the sole indicator; always pair with text or icon.

**The Four Constants Rule.** Four values are immutable across all design iterations: SSAI Blue (`#254bf1`), SSAI Coral (`#FF3C5B`), Tiempos Text (title font), Geist (body font). Every other token (neutrals, status colors, spacing, shadows, radii, motion) can evolve. These four cannot.

**The No Pure Black Rule.** `#000000` never appears. The darkest value is `#111111` for Deep Ink headlines. The dark mode ground is `#262626`. Every neutral is tinted warm.

## 3. Typography

**Display Font:** Tiempos Text (with Georgia fallback)
**Body Font:** Geist (with system sans-serif fallback)
**Label/Mono Font:** Geist Mono (with JetBrains Mono, ui-monospace fallback)

**Character:** Tiempos Text serves as the display face for product hierarchy: it signals that a moment matters (a page title, a decision gate, an empty state worth reading) without pulling the interface into magazine territory. Geist does the work everywhere else; clean, variable-weight, contemporary. Geist Mono is a system signal: timestamps, environment labels, run IDs. It is texture, not design.

### Hierarchy

- **Display** (400, 28px, line-height 1.15, tracking -0.01em): Page titles on `/tasks`, `/ops`, `/audit`, `/settings`. The largest text in the system. Tiempos Text.
- **Headline** (400, 22px, line-height 1.25, tracking -0.01em): Thread titles in the center view, Infra Health summary, empty state titles. Tiempos Text.
- **Title** (400, 18px, line-height 1.3): Action gate headings. The decision-critical typography tier. Tiempos Text.
- **Section** (600, 14px, line-height 1.4): Sidebar section headings, widget headings, table headers. Geist.
- **Body** (400, 15px, line-height 1.5): Thread messages, descriptions, all reading text. Maximum line length 65-75ch. Geist.
- **Composer** (400, 16px, line-height 1.5): The main input. Slightly larger than body for tactile prominence. Geist.
- **Label** (700 or Mono 500, 11px, line-height 1.2, tracking 0.08em, uppercase): Eyebrow zone labels like "NEEDS YOU", "INFRA HEALTH", "RECENT". Geist Bold or Geist Mono Medium.
- **Metadata** (Mono 400, 12px, line-height 1.3): Timestamps, environment tags, run IDs, channel indicators. Always in Quiet Metadata (`#888888`) or Secondary Text (`#4d4d4d`). Geist Mono.
- **Pill** (600, 11px, tracking 0.02em, uppercase): Thread label pills. Geist.

### Named Rules

**The Tiempos Reservation Rule.** Tiempos Text appears in exactly six contexts: page titles, thread titles (center view), action gate headings, report/artifact titles, empty states, and the Infra Health summary headline. It never appears in navigation labels, button text, form labels, table headers, sidebar thread rows, or timestamps. If you are about to set Tiempos on something not in the list, use Geist instead.

**The Mono-as-Signal Rule.** Geist Mono is a system signal, not a design element. It communicates machine-generated or machine-readable information: timestamps, environment labels, run IDs, source metadata. Mono text is always colored as Quiet Metadata or Secondary Text. It never carries primary meaning.

## 4. Elevation

The system is layered through deliberate shadow tiers. Hairline borders (`1px Warm Hairline`) and tonal layering (Card White lifted slightly above Warm Surface) remain the default depth mechanism for most content. Shadows are additive — they earn their place by mapping to a structural tier, not by decoration.

### Shadow Vocabulary

- **Inset** (`inset 0 1px 2px rgba(0,0,0,0.06)`): Internal depth for recessed surfaces — input fields, wells, toggle tracks. Communicates "below the page plane."
- **Layer 1** (`0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)`): The lightest raised surface. Composer at rest, cards that need subtle lift above the ground.
- **Layer 2** (`0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)`): Mid-elevation. Popovers, dropdown menus, expanded panels.
- **Layer 3** (`0 4px 16px rgba(0,0,0,0.12)`): The highest elevation. Command palette, modal dialogs, notification overlays.
- **Surface** (`0 1px 3px rgba(0,0,0,0.04)`): Legacy token. Equivalent to Layer 1 use cases. Retained for backward compatibility.
- **Overlay** (`0 4px 16px rgba(0,0,0,0.08)`): Legacy token. Equivalent to Layer 3 use cases. Retained for backward compatibility.
- **Float** (`0 0 0 0.5px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.03)`): Borderless floating surfaces. A 0.5px spread shadow acts as a faux hairline, two blur layers add soft depth. Used by the `<Surface>` primitive for dropdowns, popovers, the composer, and any container that should feel gently lifted without a hard border. In Meta Mode, the hairline inverts to white at low opacity and blur opacities increase.
- **Float Active** (`0 0 0 0.5px rgba(0,0,0,0.1), 0 2px 12px rgba(0,0,0,0.06), 0 6px 24px rgba(0,0,0,0.04)`): Intensified float shadow for focus-within states. The hairline darkens and blur radii expand, creating a subtle "lift" when the user focuses an input inside the surface.
- **Focus** (`0 0 0 2px rgba(37,75,241,0.25)`): The focus ring. Applied on `:focus-visible` alongside a `2px solid SSAI Blue` outline. Structural: communicates keyboard navigation, not decoration.

### Named Rules

**The Layer Tier Rule.** Every shadow maps to a structural tier: inset (recessed), layer-1 (raised), layer-2 (floating), layer-3 (overlaid). A component's shadow communicates its z-position in the interface stack. Shadows never appear for decoration — only to establish spatial relationships between surfaces.

**The One Shadow Rule.** Never more than one shadow depth per component. If a card already has a hairline border, it does not also get a shadow. If an overlay has the Layer 3 shadow, it does not stack a Layer 1 shadow inside it. Choose one mechanism per element.

**The Hairline-First Rule.** The default depth mechanism is a `1px Warm Hairline` border. Shadow layers are legitimate depth tools, but hairlines remain the first instinct. If a component can communicate its depth through a border alone, prefer that. Reserve shadows for elements that structurally float above their surroundings.

**The Internal Density Rule.** 4px increments govern spacing inside components (padding between label and value, gap between icon and text, internal margins). The 8px page grid governs spacing between components. This dual scale allows dense, inspectable component interiors without cramping the overall layout rhythm.

## 5. Components

### Buttons

Precise and quiet. State changes are subtle color shifts, not dramatic transformations. Every button uses Geist 500 at 14px.

- **Shape:** Gently curved edges (8px radius). Height 36px standard, 32px compact.
- **Primary:** SSAI Blue fill, white text, 16px horizontal padding. One per visible section. Used for Submit, Confirm, Create.
- **Hover / Focus:** Primary darkens ~8% on hover. Focus adds the Focus ring (`0 0 0 2px` SSAI Blue at 25% opacity). Transition: 150ms ease-out.
- **Secondary:** Transparent fill, `1px Warm Hairline` border, Body Text color. Used for Veto, Cancel, secondary actions. Hover fills with Warm Surface.
- **Ghost:** No border, Secondary Text color. Tertiary actions, expand/collapse, view more. Hover adds a subtle underline.

No coral buttons. No gradient buttons. No icon-only buttons without a tooltip.

**Cursor:** Every interactive element — buttons, links, tabs, menu items, selects, toggles — must show `cursor: pointer` on hover. This is enforced globally in `globals.css` via a base rule on `button`, `a`, `[role="button"]`, `[role="link"]`, `[role="tab"]`, `[role="menuitem"]`, `select`, `summary`, and `label[for]`. Disabled elements inherit `pointer-events: none` which prevents the pointer from appearing.

### Chips / Pills

Two distinct uses: scope chips (interactive, removable) and label pills (read-only classification).

- **Scope Chip:** Geist 500, 12px. Warm Surface background, `1px Warm Hairline` border, 4px radius. Remove button (x) appears on hover. Animate in with 200ms ease-out.
- **Label Pill:** Geist 600, 11px, uppercase, 0.02em tracking, 4px radius. Category-tinted background at 10% opacity with full-color text. Deploy/CI-CD/Infra = blue tint; Incident/Security = red tint; Alert/Cost = amber tint; Simulation = Secondary Text tint.
- **Status Badge:** Geist 600, 11px, 4px radius. Same 8% opacity tinting pattern as pills, mapped to semantic status colors.

### Cards / Containers

Cards are used sparingly. Most content sits directly on the Ground surface, structured by typography and hairlines.

- **Corner Style:** Gently rounded (12px radius) for major containers (panels, overlays, composer). Standard (8px) for inline cards like the Action Gate.
- **Background:** Card White (`#ffffff`) in Normal Mode; Meta Surface (`#2f2f2f`) in Meta Mode.
- **Shadow Strategy:** Hairline-First. Cards use `1px Warm Hairline` border. Only the composer and overlays use box shadows.
- **Internal Padding:** 24px for major containers (Action Gate, notification panel). 16px for compact containers.
- **No nested cards.** If content needs depth inside a card, use indentation and hairlines. Cards never stack.

### Surface (Primitive)

A shared container primitive (`<Surface>`) for any floating or elevated panel: dropdowns, popovers, modals, the composer. Replaces ad-hoc `bg-[var(--surface-card)]` + inline shadow strings with a single component backed by design tokens.

- **Import:** `import { Surface } from "@/components/primitives"`
- **Background:** `var(--surface-card)` (mode-adaptive: Card White in Normal, Meta Surface in Meta).
- **Elevation variants:**
  - `layer-1`: Layer 1 shadow. Subtle raised cards.
  - `float` (default): Float shadow — 0.5px faux hairline + three-layer soft depth. The standard for dropdowns, popovers, composer.
  - `layer-2`: Layer 2 shadow. Expanded panels.
  - `overlay`: Layer 3 shadow. Modals, command palette.
- **Radius variants:** `md` (8px), `lg` (12px, default), `xl` (16px).
- **Focusable:** When `focusable` is true, adds `transition-shadow duration-200` and a `focus-within:` state that intensifies the shadow to its active counterpart (e.g. float → float-active).
- **Usage:**
  - Composer: `<Surface elevation="float" radius="xl" focusable>`
  - Dropdown: `<Surface elevation="float" radius="md">`
  - Popover: `<Surface elevation="float" radius="lg">`
  - Modal: `<Surface elevation="overlay" radius="lg">`

### Inputs / Fields

- **Style:** Card White background, `1px Warm Hairline` border, 8px radius, 36px height. Text in Body Text color; placeholder in Quiet Metadata.
- **Focus:** Border shifts to SSAI Blue at 50% opacity. Focus shadow ring (`0 0 0 2px rgba(37,75,241,0.08)`). Transition: 150ms ease-out.
- **Disabled:** 50% opacity, not-allowed cursor.

### Navigation

- **Top Nav:** 56px height, Warm Surface background, `1px Warm Hairline` bottom border. Logo left-aligned, mode toggle centered, notifications and profile right-aligned. No shadows, no gradient.
- **Left Sidebar:** Warm Surface background, `1px Warm Hairline` right border. Thread rows: 52-64px height, hover at `#f5f4f0` (150ms), active state marked by `2px SSAI Blue` left border and warm background (`#f8f7f4`).
- **Right Sidebar:** Warm Surface background, `1px Warm Hairline` left border. Collapsible to 0. Infra Health widget as the anchor.

### Connection Indicator

Live-status dot in the top nav, left of the Normal/Meta toggle. Shows aggregate health of all external channel integrations.

- **Trigger:** 24×24px hit area, 10px (`h-2.5 w-2.5`) status dot centered inside. No border, no container. Hover tints the circle background to a lighter shade of the dot's own status color (not grey). No focus outline.
- **Dot color:** Reflects worst channel health — Muted Green if all connected, Muted Amber if any degraded, Restrained Red if any disconnected. Glow animation when all healthy.
- **Dropdown:** Centered on trigger (`align="center"`), Layer 2 shadow. No hairline separators. Two-column grid (`grid-cols-2 gap-1.5`).
- **Each row:** Colored brand logo (Iconify `logos` set, pre-colored SVGs), channel name in Geist 13px, tinted status pill on the right. Rows are hoverable with `hover:bg-[var(--surface-hover)]`, `cursor: pointer`, 150ms transition.
- **Status pills:** Geist Mono 10px, 4px radius, tinted background + darker text. Connected: `#d4edda` / `#1a6b35`. Degraded: `#fff3cd` / `#8a5a00`. Offline: `#f8d7da` / `#92200e`.

### Action Gate (Cooldown Veto)

The most decision-critical component. Inline in the thread conversation at Layer 1 depth.

- **Container:** `1px Warm Hairline` border, 12px radius, 24px padding.
- **Heading:** Tiempos Text 400, 18px, Deep Ink. This is a decision gate.
- **Countdown Bar:** 4px height, SSAI Blue fill against Warm Hairline track, full radius. Linear animation (precision, not drama). Last 30 seconds: fill transitions to SSAI Coral over 10 seconds.
- **Countdown Text:** Geist Mono 500, 14px, Body Text.
- **Buttons:** Veto (Secondary), Confirm (Primary). Positioned at opposite ends.

### Composer

The primary interaction point. It should feel like handing work to a colleague, not filling a form.

- **Container:** Card White background, `1px Warm Hairline` border, 8px radius, subtle Surface shadow. Focus: border shifts to SSAI Blue at 50%.
- **Input:** Geist 400, 16px (slightly larger than body). Placeholder: "What needs handling?" in Quiet Metadata.
- **Submit:** 32px circular SSAI Blue button, positioned inside the input field. Disabled state: Warm Hairline background, Quiet Metadata icon.

### Empty States

Typography is the design. No illustrations, no icons.

- **Title:** Tiempos Text 400, 22px, Deep Ink. Centered.
- **Body:** Geist 400, 15px, Secondary Text. Centered, 96px top padding.

## 6. Icons

Icons are functional signals, not decoration. They orient the eye and compress meaning into a small space. Every icon earns its place by doing something a word alone cannot do faster.

### Sizing

- **Default:** 18×18px (`h-[18px] w-[18px]` / `size-[18px]`). The workhorse size for inline actions, sidebar items, navigation, and metadata rows.
- **Compact:** 16×16px. Only inside dense tables, pills, or very tight toolbar groups where 18px creates crowding.
- **Prominent:** 20×20px. Top-nav actions (notifications, profile), standalone icon buttons, and any icon that acts as the sole tap target.
- **Never below 16px.** A 14px or 12px icon is unreadable at arm's length, untappable on mobile, and signals that the designer didn't commit to including it. If an icon is too small to be useful, remove it — don't shrink it.

### Color & Contrast

- Icons inherit their parent's text color by default (`currentColor`).
- Standalone/floating icons use `var(--surface-text-muted)` at rest and `var(--surface-ink)` on hover. They must reach at least WCAG AA contrast against their background at rest (not just on hover).
- Never use icons at opacity below 0.5 at rest. If the icon is meant to be subtle, use `var(--surface-text-muted)` — that's what it's for.

### Floating / Toggle Icons

When an icon floats over content (sidebar collapse toggles, panel dismiss, overlay controls):

- **No container.** No background fill, no border, no shadow, no card-like wrapper. The icon sits directly on the surface. If it needs a hit area, use transparent padding (`p-1.5`), not a visible shape.
- **Flat always.** A floating icon with a shadow or elevated container is a bug. The icon is part of the surface, not above it.
- **Opacity pattern:** `opacity-50` at rest, `opacity-100` on hover. Transition on opacity only (`transition-opacity`).
- **Positioning:** 8px offset from the nearest edge (never flush, never attached to a border).

### Named Rules

**The No Tiny Icons Rule.** 16px is the floor. No icon in the system renders below 16×16px. If a layout demands a smaller icon, redesign the layout.

**The No Container Rule.** Floating icons never sit inside a visible container (no bg, no border, no shadow). A floating icon with a white circle behind it is a design defect. Use padding for hit area, not decoration.

**The Icon-Earns-Its-Place Rule.** Every icon must compress meaning that text alone delivers slower. If the icon is purely decorative or duplicates adjacent text, remove it. No emoji in UI chrome. No decorative icons without function.

## 7. Motion

Motion communicates spatial relationships and state changes. It is never decorative. Every transition maps to a named pattern with fixed timing and easing.

### Easing Curves

- **Ease Out** (`--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)`): Standard deceleration for hover states and micro-interactions.
- **Ease Out Expo** (`--ease-out-expo`: `cubic-bezier(0.16, 1, 0.3, 1)`): Exponential deceleration for reveals and spatial movements. The element arrives quickly and settles gently.
- **Ease In-Out** (`--ease-in-out`: `cubic-bezier(0.77, 0, 0.175, 1)`): Symmetric curve for mode transitions and state crossfades.

### Duration Scale

- **Micro** (150ms): Hover states, button feedback, focus rings. Immediate response.
- **Panel** (200ms): Sidebar collapse/expand, panel slides. Structural repositioning.
- **Settle** (250ms): Disclosure reveals, content appearing/disappearing. Needs time for the eye to track.
- **State** (300ms): Mode switches, full-page crossfades. Major context shifts.

### The Settle Reveal Pattern

The system's standard animation for any collapsible disclosure element. Combines three coordinated movements into one cohesive gesture.

**Spec:**
- Height: `grid-template-rows: 0fr → 1fr` (GPU-composited, real height transition)
- Horizontal: `grid-template-columns: 0fr → 1fr` (`.settle-reveal-x` variant)
- Opacity: `0 → 1` (fade in simultaneously)
- Settle: `translate(-distance) → translate(0)` (content lands into position)
- Easing: `--ease-out-expo` on all three properties

**Parametric — duration and distance scale with element size:**

| Size | Element | `--settle-duration` | `--settle-distance` |
|------|---------|---------------------|---------------------|
| Small (≤64px) | Search bars, filter rows, inline details | `250ms` (default) | `4px` (default) |
| Medium (64–200px) | Expandable sections, tall panels | `300ms` | `6px` |
| Large (≥200px) | Sidebars, full-height panels | `350ms` | `8px` |

Override on the wrapper element via CSS custom properties:
```html
<div class="settle-reveal-x"
     data-open="true|false"
     style="--settle-duration: 350ms; --settle-distance: 8px">
```

**Implementation:** CSS utility classes in `globals.css`:

```html
<!-- Vertical (default) -->
<div class="settle-reveal" data-open="true|false">
  <div>
    <div class="settle-reveal-inner">...content...</div>
  </div>
</div>

<!-- Horizontal (sidebars) -->
<div class="settle-reveal-x" data-open="true|false">
  <div>
    <div class="settle-reveal-x-inner">...content...</div>
  </div>
</div>

<!-- Horizontal from right -->
<div class="settle-reveal-x settle-reveal-x-right" data-open="true|false">
  ...
</div>
```

**Use for:** Any element that reveals from zero size — search bars, expandable sections, filter panels, inline details, sidebars, collapsible settings.

**Do not use for:** Modals (use Layer 3 + opacity), tooltips (use instant or 150ms opacity only).

### Named Rules

**The Settle Reveal Rule.** Every disclosure that animates height or width uses the settle-reveal pattern. No `max-height` hacks, no `height: auto` JavaScript measurements, no accordion libraries. The grid-rows/columns technique with the settle translate is the single sanctioned approach.

**The Proportional Motion Rule.** Animation duration and settle distance must scale with the visual size of the element being animated. A 32px search bar at 250ms feels smooth; a 280px sidebar at 250ms feels abrupt. Override `--settle-duration` and `--settle-distance` on larger elements. The size guidance table in the settle-reveal spec is the reference.

**The No Layout Animation Rule.** Never animate CSS layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`). Use `transform` and `opacity` for spatial movement. The settle-reveal pattern uses `grid-template-rows` as the sole exception because it composites efficiently in modern browsers.

**The No Bounce Rule.** No elastic, spring, or overshoot easing anywhere in the system. Elements arrive and stop. The exponential ease-out curve decelerates smoothly without overshooting the target position.

### Do:

- **Do** use Warm Surface (`#fffefc`) as the universal ground surface. Never cold `#ffffff` for backgrounds; reserve that for Card White on lifted elements only.
- **Do** use hairline borders (`1px Warm Hairline`) as the default depth mechanism. Reach for a border before reaching for a shadow.
- **Do** use the shadow layer vocabulary (inset, layer-1, layer-2, layer-3) when depth is needed. Each shadow maps to a structural tier.
- **Do** use 4px increments for internal component spacing (icon-to-text gaps, label-to-value padding). Use 8px page grid for spacing between components.
- **Do** use Geist Mono as a density texture in data-heavy views (tables, logs, metadata). It compresses information without decorating it.
- **Do** reserve Tiempos for the six permitted contexts (page titles, thread titles, action gate headings, report titles, empty states, Infra Health headline). Set everything else in Geist.
- **Do** limit Coral to one appearance per visible screen. Its rarity is its power.
- **Do** communicate status with proportional indicators (6px dots, 8%-opacity tinted pills) paired with text or icon. Never color alone.
- **Do** use the mode-dependent CSS variables (`--surface-bg`, `--surface-text`, etc.) so components adapt to Normal/Meta mode automatically.
- **Do** respect `prefers-reduced-motion`. Disable pulse animations and use instant transitions.
- **Do** use Geist Mono exclusively as a system signal for machine-generated content (timestamps, IDs, environment labels). Color it as Quiet Metadata or Secondary Text.
- **Do** maintain WCAG AA contrast ratios (4.5:1 body text, 3:1 large text) across both Normal and Meta modes.
- **Do** show `cursor: pointer` on every clickable element (buttons, links, tabs, toggles, selects, menu items). The global rule in `globals.css` handles this; never override it to `cursor: default` on interactive elements.
- **Do** use the 8px spacing scale. Vary spacing for rhythm; same padding everywhere is monotony.

### Don't:

- **Don't** use a generic shadcn admin panel aesthetic: gray-on-white, every component at default, no design opinion. SSAI's brand is austere and precise.
- **Don't** build a Datadog-lite dashboard: metric-dense, widget-heavy, monitoring-tool energy. The control plane is for verification, not real-time monitoring.
- **Don't** use terminal/cyberpunk aesthetics: dark neon, monospace everything, hacker cosplay. Geist Mono is texture, not theme.
- **Don't** build a chatbot with charts: chat bubble UI with decorative visualizations bolted on. Messages do not use bubbles. This is not a chatbot.
- **Don't** create Devin-style AI agent theater: flashy autonomy demos, dark themes, opacity disguised as capability. The interface proves competence through inspectable evidence, not spectacle.
- **Don't** build PagerDuty-style alert tools: dense, alert-centric, feels like monitoring software rather than a colleague's workspace.
- **Don't** use `#000000` anywhere. Darkest value is Deep Ink (`#111111`). Dark mode ground is `#262626`.
- **Don't** use Inter, system sans-serif, or any font besides Geist/Geist Mono/Tiempos Text.
- **Don't** use Tailwind's default blue. The accent is SSAI Blue (`#254bf1`) exclusively.
- **Don't** nest cards inside cards. Use indentation and hairlines for depth within containers.
- **Don't** use heavy box shadows. Layer 1 (`0 1px 2px ...`) is the maximum for inline elements; higher tiers are reserved for floating surfaces.
- **Don't** use shadows as decoration. Every shadow must map to one of the four structural tiers (inset, layer-1, layer-2, layer-3). Ambient glow, decorative diffusion, and aesthetic-only shadows are forbidden.
- **Don't** use `border-left` or `border-right` greater than 2px as a colored accent stripe on cards or list items. The thread row's 2px active indicator is the system's only permitted left-border accent.
- **Don't** use gradient text (`background-clip: text`). Emphasis is through weight or size, not decoration.
- **Don't** use bouncy, elastic, or playful animation. Motion eases out with exponential curves. No bounce.
- **Don't** add decorative icons without function. No emoji in UI chrome.
- **Don't** leave interactive elements with `cursor: default`. If it's clickable, it shows a pointer. No exceptions.
- **Don't** use purple anywhere. SSAI Blue and Coral never interpolate.
- **Don't** let status colors fill large backgrounds. Dots and pills only.

## 8. Landing Hero Thread Sidebar Replica

The landing page hero uses the `ssai-frontend` thread sidebar as a product-native proof surface. It is not a decorative mockup. It copies the sidebar grammar from:

- `ssai-frontend/src/components/shell/left-sidebar.tsx`
- `ssai-frontend/src/components/threads/thread-sidebar.tsx`
- `ssai-frontend/src/components/threads/thread-row.tsx`
- `ssai-frontend/src/components/threads/sub-thread-row.tsx`
- `ssai-frontend/src/components/primitives/source-icon.tsx`
- `ssai-frontend/src/app/globals.css`

### Sidebar Shell

- Width is `280px`, matching the product left sidebar.
- Ground is `var(--surface-bg, var(--bg-light))`.
- The rail is separated with a `1px` Warm Hairline right border.
- Large open and close movements use `.settle-reveal-x` with `--settle-duration: 350ms` and `--settle-distance: 8px`.
- The landing hero keeps the rail visible by default because the surface is the main proof object.

### Header Controls

- Header uses `px-3 pt-3 pb-2`.
- Title is Geist `13px` semibold in `text-ink`.
- Search, filter, and new-thread buttons are `p-1.5`, `16px` icons, `rounded-md`.
- Hover transition is `150ms` on color and background.
- Active search/filter state uses `bg-[var(--surface-active)] text-ink`.
- Filter count is a `7px` accent dot, never a large badge.

### Thread Rows

- Each row wrapper uses `mx-1.5`.
- Main row uses `px-3 py-2 rounded-lg transition-colors duration-150`.
- Active row uses `bg-[var(--surface-active)]`.
- Inactive row uses `hover:bg-[var(--surface-hover)]`.
- Thread title uses Geist `13.5px`, tight leading, `font-medium text-ink` only for unread/high-attention rows.
- Right metadata column has a minimum width of `24px`.
- Time text uses Geist Mono `10.5px`, tabular numerals, `text-text-muted`.

### Metadata Chip Expansion

Thread metadata is compressed at rest and expands on row hover:

- Creator, label, and source chips use `grid grid-cols-[0fr]`.
- On `.group:hover`, chips transition to `grid-cols-[1fr]`.
- Transition is `200ms ease-out` for `grid-template-columns`.
- Label text fades with `opacity 150ms`.
- Creator text also translates from `-translate-x-2` to `translate-x-0` over `200ms`.
- Hidden text remains in overflow-hidden wrappers so the row does not jump.

### Icons

- Row category icons are 12px inside compact label chips.
- Header action icons are 16px.
- Overflow menu icons are 18px in a 24px hit area.
- Subthread overflow icons are 14px in a 20px hit area.
- System-created threads use `logo-icon.png` at 16px with a 3px radius.
- On hover, the system creator chip expands to the Tiempos mini-wordmark: blue `ss`, coral `ai`.
- Non-system creators use a 16px circular initial token with `bg-rule`.
- Source icons are functional signals only. Use them for Slack, GitHub, Codex, and similar provenance, not decoration.

### Status Dots

- Main thread status dots are `6px`.
- Subthread status dots are `5px`.
- Awaiting approval uses amber with `.dot-glow-warning`.
- In progress uses blue with `.dot-glow-blue`.
- Danger/open incident uses red with `.dot-glow-danger`.
- Resolved unread may use emerald without glow.
- Glow animations run for `2s ease-in-out infinite` and must respect `prefers-reduced-motion` through the global motion rule.

### Overflow Menus

- Overflow buttons are always present in layout, but hidden at rest with `opacity-0 pointer-events-none`.
- Hover or open state changes to `opacity-100`.
- Transition properties are `opacity`, `color`, and `background-color` over `150ms`.
- Menus use Layer 2 depth. They are operational controls, not decorative popovers.

### Subthreads

- Subthreads reveal through `.settle-reveal`, never `height: auto` JavaScript or `max-height` hacks.
- Reveal default is `250ms` and `4px` vertical settle distance.
- Subthread rows use `pl-8 pr-3 py-1.5 min-h-[36px]`.
- The indent guide is `left-[22px]`, `1px`, `bg-rule`, `opacity-40`.
- Active subthread uses `bg-[var(--surface-active)]`; inactive hover uses `hover:bg-[var(--surface-hover)]`.

### Landing Adaptation Rule

The landing page can place the sidebar inside a larger hero composition, but it should not reinterpret the row grammar. If the hero needs to demonstrate product credibility, reuse these exact mechanics: compact rows, expanding metadata, status dots, settle-revealed subthreads, quiet overflow actions, and source/label icons that explain provenance.
