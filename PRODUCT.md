# Product

## Register

product

## Users

Technical founders, CTOs, and hands-on engineering leaders at B2B SaaS companies with 4-10 engineers, no dedicated DevOps owner, and real production exposure. The daily users are backend and founding engineers who absorb deploys, incidents, cost surprises, and security hygiene on top of product work. They open this tool to see what their operational environment looks like, review what the agent did or plans to do, and intervene only when judgment requires it. They are not monitoring a dashboard; they are supervising a colleague.

## Product Purpose

SSAI is a cognitive DevOps engineer that self-onboards to a customer's AWS, GCP, and Kubernetes stack, operates autonomously across deploys, incidents, cost, and hygiene, and earns trust through inspectability rather than approval gates. The control plane (this frontend) is the surface for policy configuration, audit inspection, memory review, simulation results, and the rare moments where human judgment overrides agent autonomy. It exists so the operator can verify the agent is competent, not so they can drive it.

Success looks like: operators stop getting paged for the five core workflows (deploy failures, rising error rates, cost spikes, cert/secret expiry, alert storms) within 30 days. The frontend proves its value when the operator checks in briefly, sees everything is handled, and closes the tab.

## Brand Personality

Direct, competent, adult.

The voice is direct: declarative sentences, no hedging, no exclamation marks. The product addresses operators as professionals who already understand their stack. Copy is precise rather than friendly, calm rather than urgent. SSAI does not explain itself more than necessary; it shows its work and lets the operator judge.

The emotional register is confidence without arrogance. The interface should feel like reviewing the work of a capable teammate, not supervising an intern or fighting a tool.

## Anti-references

- Generic shadcn admin panel: gray-on-white, every component default, no design opinion.
- Datadog-lite dashboard: metric-dense, widget-heavy, monitoring-tool energy.
- Terminal/cyberpunk aesthetic: dark neon, monospace everything, hacker cosplay.
- Plain chatbot with charts: chat bubble UI with decorative visualizations bolted on.
- Devin / AI agent theater: flashy autonomy demos, dark themes, opacity disguised as capability. The "watch the agent work" spectacle that substitutes performance for substance.
- PagerDuty / traditional incident tools: alert-centric, dense, feels like a monitoring tool rather than an employee.

## Design Principles

1. **Inspectability over approval.** The interface defaults to showing what the agent did and why, not asking permission for every step. Audit trails, retrievable explanations, and evidence are first-class; approval gates are a concession, not the architecture.

2. **Calm because competent.** The product feels quiet not because it's empty, but because everything is handled. Information density is high when the operator drills in, low when they're scanning. No anxiety-inducing red everywhere; status is precise and proportional.

3. **The agent is a colleague, not a feature.** SSAI has presence: a mark, an identity, a communication style. The frontend treats it as an entity that does work, not a tool that responds to clicks. Thread conversations read like working with a teammate, not filling forms.

4. **Show trajectory.** The product must make the agent's improvement visible: memory growth, pattern recognition, eval scores, things caught this week. The operator should see the agent getting smarter over time, because that's what makes the anti-HITL stance credible.

5. **Austere precision.** Every word, pixel, and interaction earns its place. No restated headings, no placeholder copy, no decorative elements. Typography carries the design (Tiempos for structure, Geist for work). The interface is deliberate, not assembled.

## Design Constants

Four elements are locked. They do not change across iterations, redesigns, or evolving visual direction. Everything else in the design system (neutrals, status colors, spacing, shadows, radii, motion, layout) can evolve.

1. **SSAI Blue** (`#254bf1`): the primary accent. Exact hex is fixed.
2. **SSAI Coral** (`#FF3C5B`): the reserved flourish. Exact hex is fixed.
3. **Tiempos Text**: the title/display font for product hierarchy.
4. **Geist**: the body/content font for all work text.

## Accessibility & Inclusion

WCAG AA baseline. All text/background pairs clear 4.5:1 for body, 3:1 for large text. Keyboard navigation through all interactive elements. Focus indicators visible. Status information never color-only (paired with text or icon). Countdown timers announce remaining time to screen readers. Reduced motion respected via `prefers-reduced-motion`. Color palette tested against common colorblindness types (protanopia, deuteranopia).
