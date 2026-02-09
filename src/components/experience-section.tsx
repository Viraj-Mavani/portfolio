import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "Western University",
    location: "London, ON",
    period: "Jan 2024 - Apr 2025",
    description:
      "Supported 200+ students in CS2034b–Data Analytics: Principles through labs, tutorials, and office hours. Facilitated student learning by clarifying complex concepts in data analytics, Python, and machine learning. Contributed to academic success and improved average course satisfaction scores.",
    tags: ["Python", "VBA", "Regex", "Pandas", "NumPy", "Matplotlib", "Microsoft Excel", "SQL", "Jupyter Notebooks"],
  },
  {
    role: "Full Stack Developer",
    company: "Dexoc Solutions",
    location: "Ahmedabad, India",
    period: "Sep 2023 - Jul 2024",
    description:
      "Worked as Full Stack Developer with expertise in Python, C#, JavaScript, and AngularJS, integrating front-end and back-end systems to streamline workflows and improving client system performance by 20%. Led 15+ web scraping projects, processing millions of data, with foreign clients, delivering accurate datasets with 99%+ data integrity. Implemented AWS Lambda functions to streamline data processing and storage, ensuring seamless integration within the AWS cloud infrastructure. Mentored junior developers and conducted code reviews to improve team delivery standards.",
    tags: ["Python", "C#", ".NET Core", "ASP.NET Web API", "JavaScript (ES6+)", "AngularJS", "SQL", "PostgreSQL", "JWT Token", "Azure DevOps", "Azure ServiceBus", "AWS Lambda", "Git/GitHub", "CI/CD Pipelines", "Docker", "Web Scraping", "Selenium", "Scrapy", "Jira", "HTML5", "CSS3", "xUnit", "Agile/Scrum", "Requirement Analysis"],
  },
  {
    role: "Software Engineer",
    company: "FSP MEDIA",
    location: "Ahmedabad, India",
    period: "Mar 2023 - Aug 2023",
    description:
      "Designed and developed .NET-based backend applications for diverse industries, ensuring modular architecture and timely project delivery. Partnered with stakeholders to translate business requirements into technical specifications and functional solutions. Enhanced system reliability & code quality by implementing comprehensive unit testing and rigorous debugging protocols.",
    tags: ["C#", ".NET Core", "ASP.NET Web API", "JavaScript (ES6+)", "AngularJS", "SQL", "PostgreSQL", "Entity Framework", "Dapper", "Microsoft SQL Server", "Git" ,"Version Control"],
  },
  {
    role: ".Net Developer Intern",
    company: "TatvaSoft",
    location: "Ahmedabad, India",
    period: "Dec 2022 - Feb 2023",
    description:
      "Contributed to production-level .NET projects, transitioning classroom concepts into enterprise-grade software solutions. Optimized application performance through hands-on development, code reviews, proactive debugging within the .NET ecosystem, and utilized version control (Git) and collaborative tools to manage codebases.",
    tags: ["C#", ".NET Core", "ASP.NET MVC", "ASP.NET Web API", "LINQ", "SQL", "Entity Framework", "Git" ,"Version Control", "Jira" , "Unit Testing"],
  },
]

export function ExperienceSection() {
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
            04
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