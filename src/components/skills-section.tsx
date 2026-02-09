const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "R", "C++"],
  },
  {
    label: "Frameworks / Web",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Django", "Tailwind CSS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase"],
  },
  {
    label: "Data Science & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "LangChain", "OpenAI", "Hugging Face"],
  },
  {
    label: "Data Engineering",
    skills: ["Apache Spark", "Airflow", "Kafka", "dbt", "ETL Pipelines", "Data Modeling"],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "CI/CD", "Vercel", "Terraform"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            skills & technologies
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            03
          </span>
        </div>

        <h2 id="skills-heading" className="sr-only">Skills & Technologies</h2>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="group flex flex-col gap-5 bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
                  {category.label}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}