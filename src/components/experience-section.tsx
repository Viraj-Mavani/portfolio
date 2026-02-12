import { Briefcase, Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/bio-data"

interface ExperienceSectionProps {
  index: number
}

export function ExperienceSection({ index }: ExperienceSectionProps) {

  return (
    <section id="experience" className="border-t border-border" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            work experience
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <h2 id="experience-heading" className="sr-only">Work Experience</h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="group relative flex flex-col gap-6 rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              {/* Top row */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Briefcase className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
                    <span className="font-mono text-xs text-primary">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:text-right">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <MapPin className="h-3 w-3" strokeWidth={1.5} />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <Calendar className="h-3 w-3" strokeWidth={1.5} />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Index marker */}
              <span className="absolute right-8 top-8 font-mono text-[10px] text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
