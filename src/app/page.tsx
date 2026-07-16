import Image from "next/image";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  CircleDot,
  Database,
  Equal,
  FileCheck2,
  FileCode2,
  GitBranch,
  MessageSquareText,
  RefreshCcw,
  Route,
  ShieldCheck,
  TriangleAlert,
  UserRoundCheck,
  Waypoints,
  Workflow,
} from "lucide-react";
import { BrandLockup } from "@/components/brand-lockup";
import { CorridorRoulette } from "@/components/corridor-roulette";
import { MigrationEconomics } from "@/components/migration-economics";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollMotion } from "@/components/scroll-motion";
import { TrustFaq } from "@/components/trust-faq";
import styles from "./landing-redesign.module.css";

export default function Home() {
  return (
    <>
      <ScrollMotion />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__brand" href="#top" aria-label="SSAI home">
            <BrandLockup compact />
            <span className="site-header__descriptor">migration systems</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a data-section-nav href="#why">Why</a>
            <a data-section-nav href="#how">How it works</a>
            <a data-section-nav href="#compare">Compare</a>
            <a data-section-nav href="#corridors">Corridors</a>
          </nav>
          <MobileNav />
          <a
            className="button button--header"
            href="https://cal.com/avinier"
            target="_blank"
            rel="noreferrer"
          >
            Migration review
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className={styles.hero} id="top">
          <div className={styles.heroGrid} aria-hidden="true" />
          <span className={styles.heroOrbit} aria-hidden="true">
            <span className={styles.heroOrbitTrack}>
              <i />
              <i />
            </span>
          </span>

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1>
                <span>SSAI makes databases</span>
                <strong>swappable.</strong>
              </h1>
              <p className={styles.heroLede}>
                General-purpose coding agents help you change code. They don&apos;t
                own a live database migration. SSAI&apos;s Jumpship agent designs the
                target, supervises data movement and live sync, verifies the
                result, and keeps rollback ready through cutover.
              </p>
              <div className={styles.heroActions}>
                <a
                  className="button button--primary"
                  href="https://cal.com/avinier"
                  target="_blank"
                  rel="noreferrer"
                >
                  Review my migration
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="button button--text" href="#how">
                  See how Jumpship works
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure className={styles.heroArt}>
              <Image
                src="/ssai-migration-system-cutout.png"
                alt="Document records entering a verified migration chamber and emerging as a relational system with a return path"
                width={1536}
                height={1024}
                sizes="(max-width: 1099px) 94vw, 49vw"
                preload
              />
            </figure>
          </div>
        </section>

        <section className={styles.storySection} id="why">
          <div className={styles.storyHeading} data-reveal="stagger">
            <div>
              <p className={styles.kicker}>Where coding agents stop</p>
              <h2>Generated code is not a migration system.</h2>
            </div>
            <p>
              A production migration is a changing contract between data, live
              writers, query behavior, and business rules. A coding agent can produce
              an artifact. It does not hold operational authority across a multi-day move.
            </p>
          </div>

          <div className={styles.triptych} data-reveal="group">
            <article className={styles.storyPanel}>
              <div className={styles.problemVisual} aria-hidden="true">
                <div className={styles.fragmentCluster}>
                  <span><FileCode2 /><small>code</small></span>
                  <span><Database /><small>data</small></span>
                  <span><Activity /><small>writers</small></span>
                  <span><MessageSquareText /><small>intent</small></span>
                </div>
              </div>
              <div className={styles.panelCopy}>
                <span>01 / Partial evidence</span>
                <h3>It cannot see the full production contract.</h3>
                <p>
                  Historical variants, hidden defaults, background writers, error
                  semantics, and human invariants rarely live in one place.
                </p>
              </div>
            </article>

            <article className={styles.storyPanel}>
              <div className={styles.problemVisual} aria-hidden="true">
                <div className={styles.artifactCard}><Braces /><span>migration.ts</span></div>
                <span className={styles.brokenRoute}><i /><TriangleAlert /><i /></span>
                <div className={styles.artifactCard}><Route /><span>runbook?</span></div>
              </div>
              <div className={styles.panelCopy}>
                <span>02 / Missing machinery</span>
                <h3>It returns an artifact, not an operating system.</h3>
                <p>
                  Backfill, CDC, quarantine, independent proof, approvals, cutover,
                  receipts, and rollback still become your project to assemble.
                </p>
              </div>
            </article>

            <article className={styles.storyPanel}>
              <div className={styles.problemVisual} aria-hidden="true">
                <div className={styles.parityNode}><Database /><strong>42,000</strong><small>source</small></div>
                <Equal />
                <div className={styles.parityNode}><Database /><strong>42,000</strong><small>target</small></div>
                <span className={styles.ghostRow}><GitBranch /> 18 ghost relationships</span>
              </div>
              <div className={styles.panelCopy}>
                <span>03 / False confidence</span>
                <h3>It can say done before both systems agree.</h3>
                <p>
                  Equal counts can hide changed meaning, broken relationships,
                  ordering drift, target-only rows, and application regressions.
                </p>
              </div>
            </article>
          </div>

          <p className={styles.storyAxiom} data-reveal="block">
            You can copy every row and still migrate the business incorrectly.
          </p>
        </section>

        <section className={styles.howSection} id="how">
          <div className={styles.storyHeading} data-reveal="stagger">
            <div>
              <p className={styles.kicker}>Where Jumpship takes over</p>
              <h2 className={styles.handoffTitle}>
                SSAI runs the whole migration, from <span>target design</span>{" "}
                through live sync, independent proof, cutover, rollback, and{" "}
                <strong>source decommission.</strong>
              </h2>
            </div>
            <p>
              Jumpship keeps one accountable trajectory from first evidence through
              decommission, while deterministic machinery performs every record effect.
            </p>
          </div>

          <div className={styles.triptych} data-reveal="group">
            <article className={styles.howPanel}>
              <div className={styles.trajectoryVisual} aria-hidden="true">
                <span><Database /></span>
                <i />
                <span><Activity /></span>
                <i />
                <span><UserRoundCheck /></span>
                <i />
                <span className={styles.trajectoryCore}><Waypoints /></span>
              </div>
              <div className={styles.panelCopy}>
                <span>Coherent state</span>
                <h3>Keep one accountable trajectory.</h3>
                <p>
                  Evidence, variants, invariants, unknowns, decisions, and undo
                  boundaries stay attached as the migration changes over time.
                </p>
              </div>
            </article>

            <article className={styles.howPanel}>
              <div className={styles.engineVisual} aria-hidden="true">
                <div><Image src="/logo-icon.svg" alt="" width={34} height={33} /><small>reason</small></div>
                <ArrowRight />
                <div className={styles.contractCard}><FileCheck2 /><small>signed spec</small></div>
                <ArrowRight />
                <div><Workflow /><small>execute</small></div>
              </div>
              <div className={styles.panelCopy}>
                <span>Deterministic record path</span>
                <h3>Put the model outside the record path.</h3>
                <p>
                  The model investigates and specifies. One compiled transform drives
                  baseline and CDC, with typed quarantine and durable receipts.
                </p>
              </div>
            </article>

            <article className={styles.howPanel}>
              <div className={styles.recoveryVisual} aria-hidden="true">
                <span><ShieldCheck /><small>prove</small></span>
                <ArrowRight />
                <span><Check /><small>cut over</small></span>
                <RefreshCcw />
                <span><Database /><small>way back</small></span>
              </div>
              <div className={styles.panelCopy}>
                <span>Evidence before authority</span>
                <h3>Make proof and reversal first-class.</h3>
                <p>
                  Independent verification gates the rehearsed cutover, while a
                  qualified reverse path remains visible, current, and operable.
                </p>
              </div>
            </article>
          </div>

          <div className={styles.operatingAxiom} data-reveal="block">
            <CircleDot aria-hidden="true" />
            <p>Jumpship reasons and supervises.</p>
            <span>The corridor engine moves records. Humans authorize cutover and decommission.</span>
          </div>
        </section>

        <section className={styles.economicsSection} id="compare">
          <div className={styles.storyHeading} data-reveal="stagger">
            <div>
              <p className={styles.kicker}>The cost of assembling it yourself</p>
              <h2>Stop turning your product team into a migration team.</h2>
            </div>
            <p>
              Compare an assembled migration project with a purpose-built system.
              Change the planning assumptions to see where customer time goes.
            </p>
          </div>
          <div data-reveal="block">
            <MigrationEconomics />
          </div>
        </section>

        <section className={styles.corridorSection} id="corridors">
          <div className={styles.storyHeading} data-reveal="stagger">
            <div>
              <p className={styles.kicker}>Every database pair is a different flight plan</p>
              <h2>Different databases fail differently. Jumpship treats each pair as its own system.</h2>
            </div>
            <p>
              MongoDB Atlas to customer-owned Supabase PostgreSQL is the launch
              corridor. The other pairs below illustrate future qualification targets,
              not currently available support.
            </p>
          </div>
          <div data-reveal="block">
            <CorridorRoulette />
          </div>
        </section>

        <TrustFaq />

        <section className="final-cta">
          <div className="final-cta__grid" aria-hidden="true" />
          <div className="final-cta__inner" data-reveal="stagger">
            <div>
              <p className="section-kicker">Migration review</p>
              <h2>Bring us the migration you do not trust to a script.</h2>
            </div>
            <div className="final-cta__action">
              <p>Currently onboarding MongoDB Atlas to Supabase PostgreSQL migrations.</p>
              <a className="button button--primary" href="https://cal.com/avinier" target="_blank" rel="noreferrer">
                Request a migration review
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner" data-reveal="stagger">
          <BrandLockup tone="dark" />
          <p>Jumpship is SSAI&apos;s database migration agent.</p>
          <div><a href="mailto:hello@ssai.dev">hello@ssai.dev</a><span>SSAI · migration systems</span></div>
        </div>
      </footer>
    </>
  );
}
