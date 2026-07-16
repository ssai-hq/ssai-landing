"use client";

import Image from "next/image";
import type { ComponentType, KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Boxes,
  MoveRight,
  Route,
  ShieldCheck,
  Undo2,
} from "lucide-react";
import {
  SiApachecassandra,
  SiMongodb,
  SiMysql,
  SiNeo4j,
  SiPlanetscale,
  SiPostgresql,
  SiRedis,
  SiSnowflake,
  SiSupabase,
} from "@icons-pack/react-simple-icons";
import styles from "@/app/landing-redesign.module.css";

type BrandIcon = ComponentType<{
  className?: string;
  color?: string;
  size?: number;
  title?: string;
}>;

type Provider = {
  id: string;
  name: string;
  short: string;
  Icon: BrandIcon;
  model: string;
  feed: string;
  proof: string;
};

const providers: readonly Provider[] = [
  {
    id: "mongodb",
    name: "MongoDB Atlas",
    short: "MongoDB",
    Icon: SiMongodb,
    model: "BSON variants, nested ownership, TTLs, references, and index intent",
    feed: "Atlas snapshot and change-stream",
    proof: "document identity, relationships, canonical values, and query behavior",
  },
  {
    id: "supabase",
    name: "Supabase PostgreSQL",
    short: "Supabase",
    Icon: SiSupabase,
    model: "PostgreSQL types, constraints, extensions, RLS, and relational ownership",
    feed: "PostgreSQL bulk-load and logical-change",
    proof: "constraints, RLS behavior, ordering, and application semantics",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    short: "PostgreSQL",
    Icon: SiPostgresql,
    model: "types, extensions, sequences, constraints, and transaction behavior",
    feed: "snapshot and logical-replication",
    proof: "constraints, transactions, collation, and query semantics",
  },
  {
    id: "mysql",
    name: "MySQL",
    short: "MySQL",
    Icon: SiMysql,
    model: "collations, unsigned values, generated columns, and locking behavior",
    feed: "consistent-snapshot and binlog",
    proof: "identity, ordering, locking, pagination, and error behavior",
  },
  {
    id: "planetscale",
    name: "PlanetScale",
    short: "PlanetScale",
    Icon: SiPlanetscale,
    model: "Vitess sharding, MySQL compatibility, online DDL, and key design",
    feed: "Vitess-aware snapshot and change",
    proof: "routing, key distribution, online-DDL behavior, and query semantics",
  },
  {
    id: "neo4j",
    name: "Neo4j",
    short: "Neo4j",
    Icon: SiNeo4j,
    model: "graph identity, relationship lifecycle, traversals, and reachability",
    feed: "node-and-edge snapshot and ordered graph-delta",
    proof: "traversal outcomes, reachability, relationship counts, and ownership",
  },
  {
    id: "cassandra",
    name: "Apache Cassandra",
    short: "Cassandra",
    Icon: SiApachecassandra,
    model: "partition keys, clustering, TTLs, and denormalized query tables",
    feed: "partition export and qualified incremental",
    proof: "partition coverage, TTL behavior, late arrivals, and query outcomes",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    short: "Snowflake",
    Icon: SiSnowflake,
    model: "warehouse types, stages, streams, tasks, and analytical contracts",
    feed: "staged bulk-load and stream-or-task",
    proof: "aggregates, late data, precision, and analytical query behavior",
  },
  {
    id: "redis",
    name: "Redis",
    short: "Redis",
    Icon: SiRedis,
    model: "ephemeral versus authoritative keys, TTLs, and atomic operations",
    feed: "qualified key snapshot and stream",
    proof: "expiry, identity, atomicity, counts, and application reads",
  },
] as const;

const reelOrder = [
  "cassandra",
  "neo4j",
  "mysql",
  "postgres",
  "mongodb",
  "supabase",
  "planetscale",
  "snowflake",
  "redis",
] as const;

const reelProviders = reelOrder.map(
  (id) => providers.find((provider) => provider.id === id) as Provider,
);

const orderedPairs = [
  ["mongodb", "supabase"],
  ...reelProviders.flatMap((source) =>
    reelProviders
      .filter((target) => target.id !== source.id)
      .map((target) => [source.id, target.id]),
  ).filter(([source, target]) => source !== "mongodb" || target !== "supabase"),
] as const;

const FALLBACK_ROW_PITCH = 50;

/* Measured from the rendered rows so scroll math stays consistent with the
   CSS row height and the section-level zoom scaling. */
function measureRowPitch(reel: HTMLDivElement | null) {
  const rows = reel?.querySelectorAll("button");
  if (!rows || rows.length < 2) return FALLBACK_ROW_PITCH;
  const pitch = rows[1].offsetTop - rows[0].offsetTop;
  return pitch > 0 ? pitch : FALLBACK_ROW_PITCH;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function ProviderReel({
  label,
  options,
  selectedId,
  onSelect,
}: {
  label: string;
  options: readonly Provider[];
  selectedId: string;
  onSelect: (provider: Provider) => void;
}) {
  const reelRef = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const releaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelReleaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelLocked = useRef(false);
  const programmaticScroll = useRef(false);
  const reducedMotion = useReducedMotion();
  const selectedIndex = Math.max(0, options.findIndex((option) => option.id === selectedId));

  useEffect(() => {
    programmaticScroll.current = true;
    reelRef.current?.scrollTo({
      top: selectedIndex * measureRowPitch(reelRef.current),
      behavior: reducedMotion ? "auto" : "smooth",
    });
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    releaseTimer.current = setTimeout(
      () => { programmaticScroll.current = false; },
      reducedMotion ? 0 : 420,
    );
  }, [reducedMotion, selectedIndex]);

  useEffect(
    () => () => {
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      if (releaseTimer.current) clearTimeout(releaseTimer.current);
      if (wheelReleaseTimer.current) clearTimeout(wheelReleaseTimer.current);
    },
    [],
  );

  const selectIndex = (index: number) => {
    const nextIndex = Math.min(options.length - 1, Math.max(0, index));
    onSelect(options[nextIndex]);
  };

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 3) return;
      event.preventDefault();
      event.stopPropagation();
      if (wheelLocked.current) return;

      wheelLocked.current = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        options.length - 1,
        Math.max(0, selectedIndex + direction),
      );
      onSelect(options[nextIndex]);

      if (wheelReleaseTimer.current) clearTimeout(wheelReleaseTimer.current);
      wheelReleaseTimer.current = setTimeout(() => {
        wheelLocked.current = false;
      }, 220);
    };

    reel.addEventListener("wheel", handleWheel, { passive: false });
    return () => reel.removeEventListener("wheel", handleWheel);
  }, [onSelect, options, selectedIndex]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    if (event.key === "Home") selectIndex(0);
    if (event.key === "End") selectIndex(options.length - 1);
    if (event.key === "ArrowUp") selectIndex(selectedIndex - 1);
    if (event.key === "ArrowDown") selectIndex(selectedIndex + 1);
  };

  const handleScroll = () => {
    if (programmaticScroll.current) return;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const pitch = measureRowPitch(reelRef.current);
      const nextIndex = Math.min(
        options.length - 1,
        Math.max(0, Math.round((reelRef.current?.scrollTop ?? 0) / pitch)),
      );
      if (options[nextIndex].id !== selectedId) onSelect(options[nextIndex]);
    }, 90);
  };

  return (
    <div className={styles.providerReel}>
      <span>{label}</span>
      <div
        className={styles.reelWindow}
        ref={reelRef}
        role="listbox"
        aria-label={`${label} database`}
        aria-activedescendant={`${label.toLowerCase()}-${selectedId}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
      >
        {options.map((provider, index) => {
          const { Icon } = provider;
          const distance = Math.min(2, Math.abs(index - selectedIndex));
          const selected = provider.id === selectedId;

          return (
            <button
              type="button"
              id={`${label.toLowerCase()}-${provider.id}`}
              role="option"
              aria-selected={selected}
              data-distance={distance}
              key={provider.id}
              tabIndex={-1}
              onClick={() => onSelect(provider)}
            >
              <Icon color="default" size={24} title={provider.short} />
              <span>{provider.short}</span>
            </button>
          );
        })}
      </div>
      <small>Scroll or use ↑ ↓</small>
    </div>
  );
}

export function CorridorRoulette() {
  const [sourceId, setSourceId] = useState("mongodb");
  const [targetId, setTargetId] = useState("supabase");

  const source = reelProviders.find((provider) => provider.id === sourceId) ?? reelProviders[4];
  const targetOptions = useMemo(
    () => reelProviders.filter((provider) => provider.id !== sourceId),
    [sourceId],
  );
  const target = targetOptions.find((provider) => provider.id === targetId) ?? targetOptions[0];
  const available = source.id === "mongodb" && target.id === "supabase";
  const pairNumber = orderedPairs.findIndex(
    ([pairSource, pairTarget]) => pairSource === source.id && pairTarget === target.id,
  ) + 1;
  const pairKey = `${source.id}-${target.id}`;

  const selectSource = (provider: Provider) => {
    setSourceId(provider.id);
    if (provider.id === targetId) {
      const fallback = reelProviders.find((candidate) => candidate.id !== provider.id);
      if (fallback) setTargetId(fallback.id);
    }
  };

  const details = available
    ? [
        [
          "Model",
          "Reconstruct BSON variants, ownership, IDs, indexes, and relational boundaries.",
          Boxes,
        ],
        [
          "Move",
          "Seal T0, bulk backfill, then apply Atlas change streams through the same transform.",
          MoveRight,
        ],
        [
          "Prove",
          "Reconcile records, relationships, canonical values, invariants, and query behavior.",
          ShieldCheck,
        ],
        [
          "Recover",
          "Rehearse cutover and keep qualified reverse sync current for the 72-hour window.",
          Undo2,
        ],
      ]
    : [
        [
          "Model qualification",
          `Would require qualification of ${source.model} against ${target.model}.`,
          Boxes,
        ],
        [
          "Movement qualification",
          `Would require a proven ${source.feed} source path and ${target.feed} target path.`,
          MoveRight,
        ],
        [
          "Proof qualification",
          `Would require independent checks for ${source.proof} after translation into ${target.short}.`,
          ShieldCheck,
        ],
        [
          "Recovery qualification",
          "Would require a rehearsed authority boundary and current reverse path before any cutover offer.",
          Undo2,
        ],
      ];

  return (
    <div className={styles.roulette}>
      <div className={styles.rouletteChrome}>
        <div className={styles.rouletteStatus} key={`status-${pairKey}`}>
          <span data-available={available}>
            {available ? "Launch corridor · available now" : "Future corridor · not available today"}
          </span>
          <p>
            Pair {String(pairNumber).padStart(2, "0")} / 72 · every ordered cross-database pair is visible.
          </p>
        </div>

        <div className={styles.rouletteStage}>
          <ProviderReel
            label="Source"
            options={reelProviders}
            selectedId={source.id}
            onSelect={selectSource}
          />

          <div className={styles.rouletteCore} aria-hidden="true">
            <Image src="/logo-icon.svg" alt="" width={46} height={45} />
            <Route />
            <small>migration flight plan</small>
            <ArrowRight />
          </div>

          <ProviderReel
            label="Target"
            options={targetOptions}
            selectedId={target.id}
            onSelect={(provider) => setTargetId(provider.id)}
          />
        </div>
      </div>

      <dl className={styles.corridorDetails} aria-live="polite" key={pairKey}>
        {details.map(([label, description, Icon]) => (
          <div key={label as string}>
            <dt><Icon aria-hidden="true" />{label as string}</dt>
            <dd>{description as string}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
