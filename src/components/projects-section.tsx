"use client"

import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { projects } from "@/lib/project-data"
import Link from "next/link"
import { useMode } from "@/hooks/use-mode"

interface ProjectsSectionProps {
  index: number
}

export function ProjectsSection({ index }: ProjectsSectionProps) {
  const { mode } = useMode()

  const filteredProjects = projects.filter((project) => 
    mode === "generalist" || project.mode.includes(mode)
  )

  return (
    <section id="projects" className="border-t border-border" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            projects
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <h2 id="projects-heading" className="sr-only">Projects</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.slice(0, 4).map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col gap-5 rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    project_{String(index + 1).padStart(2, "0")} / brief description
                  </span>
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
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
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>

              {/* Brief Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.brief}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects button */}
        {filteredProjects.length > 4 && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-sm border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-primary hover:text-foreground hover:gap-4"
            >
              View All {mode === "generalist" ? "" : mode} Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}