import { GraduationCap, MapPin, Calendar } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "WESTERN UNIVERSITY",
    location: "ON, Canada",
    period: "2024 - 2025",
    focus: "Specialization in Artificial Intelligence",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "ATMIYA UNIVERSITY",
    location: "Gujarat, India",
    period: "2019 - 2023",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            about & education
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            02
          </span>
        </div>

        <h2 id="about-heading" className="sr-only">About & Education</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* About text */}
          <div className="flex flex-col gap-6 rounded-md border border-border bg-card p-8">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
                about_me
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {"//"}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                I am a Full Stack AI Engineer passionate about building intelligent systems that bridge the gap between cutting-edge research and production-grade software.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                With expertise spanning web development, machine learning, and data engineering, I design and ship end-to-end solutions -- from scalable backend APIs to interactive frontends and custom AI pipelines.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I thrive at the intersection of engineering and experimentation, always seeking the most elegant and efficient approach to complex problems.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="group flex flex-col gap-4 rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <GraduationCap className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium leading-tight text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs text-primary">
                      {edu.school}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {edu.focus}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <MapPin className="h-3 w-3" strokeWidth={1.5} />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <Calendar className="h-3 w-3" strokeWidth={1.5} />
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}