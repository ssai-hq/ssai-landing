import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThesisReader } from "@/components/thesis-reader";

export default function ThesisPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-bg)] text-[var(--surface-text)]">
      <header className="sticky top-0 z-30 mx-auto flex h-14 max-w-7xl items-center justify-between border-b border-rule bg-[color-mix(in_srgb,var(--surface-bg)_92%,transparent)] px-5 backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-full.png"
            alt="SSAI"
            width={80}
            height={32}
            priority
            className="h-8 w-auto"
            style={{ width: "auto" }}
          />
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted transition-micro hover:text-text-mid">
          <ArrowLeft className="h-4 w-4" />
          Back to landing
        </Link>
      </header>

      <section className="technical-grid border-b border-rule px-5 py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">SSAI thesis</p>
        <h1 className="mx-auto mt-5 max-w-[900px] font-title text-[clamp(44px,7vw,92px)] leading-[0.98] text-ink">
          The DevOps function becomes an employee-shaped system.
        </h1>
      </section>

      <ThesisReader />
    </main>
  );
}
