import { ArrowRight } from "lucide-react"
import { TerminalCard } from "./terminal-card"
import { TechTicker } from "./tech-ticker"

export function HeroBento() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 pb-16 lg:pt-32 lg:pb-24" aria-labelledby="hero-heading">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          index
        </span>
        <div className="h-px flex-1 bg-border" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          01
        </span>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-3 md:grid-cols-3 md:grid-rows-[1fr_auto]">
        {/* Card 1 - Intro (Large, Top Left, spans 2 cols) */}
        <div className="flex flex-col justify-between rounded-md border border-border bg-card p-8 md:col-span-2 md:row-span-1 lg:p-10">
          <div>
            <span className="mb-4 inline-block font-mono text-[10px] tracking-widest text-primary uppercase">
              Full Stack AI Engineer
            </span>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl"
            >
              Hello, I am
              <br />
              VM
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              Merging Full Stack Engineering with AI Research to create production-grade solutions.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:gap-4"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Card 2 - Terminal (Tall, Right, spans 2 rows) */}
        <div className="min-h-[300px] md:row-span-2">
          <TerminalCard />
        </div>

        {/* Card 3 - Status (Small, Bottom Left) */}
        <div className="flex items-center gap-4 rounded-md border border-border bg-card px-6 py-5">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400/40" aria-hidden="true" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              current status
            </span>
            <span className="text-sm font-medium text-foreground">
              Available for Freelance
            </span>
          </div>
        </div>

        {/* Card 4 - Tech Stack Ticker (Small, Bottom Center) */}
        <div className="min-h-[72px]">
          <TechTicker />
        </div>
      </div>
    </section>
  )
}
