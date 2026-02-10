"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Image as ImageIcon, Video } from "lucide-react"
import { projects } from "@/lib/data"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"

const modeFilters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "data", label: "Data" },
]

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.mode.includes(activeFilter))

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 lg:pt-28">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        {/* Page header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            all projects
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            {String(filtered.length).padStart(2, "0")} results
          </span>
        </div>

        {/* Mode filter bar */}
        <div className="mb-10 flex items-center gap-2">
          <span className="mr-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            filter
          </span>
          <div className="flex items-center gap-1 rounded-sm bg-secondary p-0.5">
            {modeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-sm px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-6">
          {filtered.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-md border border-border bg-card transition-colors hover:border-primary/30"
            >
              <div className="p-8">
                {/* Top row */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                      project_{String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-medium text-foreground">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                      >
                        <Github className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Media placeholders */}
                {(project.images || project.video) && (
                  <div className="mb-6 flex flex-wrap gap-3">
                    {project.images?.map((img, i) => (
                      <div
                        key={`${project.title}-img-${i}`}
                        className="flex h-40 w-64 items-center justify-center rounded-sm border border-border bg-secondary"
                      >
                        <ImageIcon className="h-6 w-6 text-muted-foreground" strokeWidth={1} />
                      </div>
                    ))}
                    {project.video && (
                      <div className="flex h-40 w-64 items-center justify-center rounded-sm border border-border bg-secondary">
                        <Video className="h-6 w-6 text-muted-foreground" strokeWidth={1} />
                      </div>
                    )}
                  </div>
                )}

                {/* Tags + Modes */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="mx-1 h-3 w-px bg-border" aria-hidden="true" />
                  {project.mode.map((m) => (
                    <span
                      key={m}
                      className="rounded-sm bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-20">
            <span className="font-mono text-sm text-muted-foreground">
              No projects found for this filter.
            </span>
            <button
              onClick={() => setActiveFilter("all")}
              className="font-mono text-xs text-primary transition-colors hover:text-foreground"
            >
              Clear filter
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}