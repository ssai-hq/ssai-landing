import Image from "next/image";
import { HeroThreadSidebar } from "@/components/hero-thread-sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface-bg)] text-[var(--surface-text)]">
      <header className="mx-auto flex h-14 max-w-6xl items-center justify-between border-b border-rule px-5">
        <Image
          src="/logo-full.png"
          alt="SSAI"
          width={80}
          height={32}
          priority
          className="h-8 w-auto"
          style={{ width: "auto" }}
        />
        <nav className="hidden items-center gap-6 text-[13px] font-medium text-text-muted sm:flex">
          <a className="transition-micro hover:text-text-mid" href="#surface">Surface</a>
          <a className="transition-micro hover:text-text-mid" href="mailto:hello@ssai.dev">Contact</a>
        </nav>
      </header>

      <section id="surface" className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-normal text-text-muted">
            Cognitive DevOps engineer
          </p>
          <h1 className="mt-5 max-w-[680px] font-title text-[clamp(42px,7vw,82px)] leading-[0.98] text-ink">
            Teams without DevOps still need DevOps judgment.
          </h1>
          <p className="mt-6 max-w-[600px] text-[17px] leading-7 text-text-mid">
            SSAI self-onboards to your cloud and Kubernetes stack, handles operational work, and leaves an inspectable record of what it did and why.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex h-9 items-center justify-center rounded-lg bg-ssai-blue px-4 text-[14px] font-medium text-white transition-micro hover:bg-ssai-blue/90" href="mailto:hello@ssai.dev">
              Book a technical walkthrough
            </a>
            <a className="inline-flex h-9 items-center justify-center rounded-lg border border-rule px-4 text-[14px] font-medium text-text transition-micro hover:bg-[var(--surface-hover)]" href="#surface">
              View product surface
            </a>
          </div>
        </div>

        <HeroThreadSidebar />
      </section>
    </main>
  );
}
