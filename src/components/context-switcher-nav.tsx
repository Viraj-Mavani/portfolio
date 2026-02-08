"use client"

import { useState } from "react"

const modes = [
  { id: "generalist", label: "Generalist" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "data", label: "Data" },
]

export function ContextSwitcherNav() {
  const [activeMode, setActiveMode] = useState("generalist")

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav
          className="mx-auto flex w-fit items-center gap-6 rounded-md border border-border bg-card/80 px-2 py-1.5 backdrop-blur-xl"
          role="navigation"
          aria-label="Mode switcher"
        >
          <span className="hidden pl-3 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:block">
            mode
          </span>

          <div className="flex items-center gap-0.5 rounded-sm bg-secondary p-0.5" role="tablist">
            {modes.map((mode) => (
              <button
                key={mode.id}
                role="tab"
                aria-selected={activeMode === mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`relative flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-xs tracking-tight transition-all duration-200 ${
                  activeMode === mode.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeMode === mode.id && (
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                )}
                {mode.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground sm:block"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
