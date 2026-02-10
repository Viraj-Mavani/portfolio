"use client"

import { useState } from "react"
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { certificates } from "@/lib/data"

const INITIAL_COUNT = 3

export function CertificatesSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? certificates : certificates.slice(0, INITIAL_COUNT)
  const hasMore = certificates.length > INITIAL_COUNT

  return (
    <section id="certificates" className="border-t border-border" aria-labelledby="certificates-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            certificates
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            06
          </span>
        </div>

        <h2 id="certificates-heading" className="sr-only">Certificates</h2>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} credential`}
                    className="flex h-6 w-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-medium leading-tight text-foreground">
                  {cert.title}
                </h3>
                <span className="font-mono text-xs text-primary">
                  {cert.issuer}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {cert.date}
                </span>
                <div className="flex gap-1">
                  {cert.modes.map((mode) => (
                    <span
                      key={mode}
                      className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse button */}
        {hasMore && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="group inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary hover:text-foreground"
              aria-expanded={expanded}
              aria-controls="certificates-grid"
            >
              {expanded ? "Show Less" : `Show All (${certificates.length})`}
              {expanded ? (
                <ChevronUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}