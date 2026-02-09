import { Github, ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Aerospace Part Tracking System",
    description:
      "Developed secure system features focusing on scalability and performance, implementing JWT-based authentication for stakeholder security. Engineered real-time data synchronization APIs and middleware using Azure ServiceBus to connect disparate stakeholders. Collaborated on backend architectural design, ensuring high availability and seamless integration of blockchain components for data immutability.",
    tags: [ ".NET Core", "AngularJS", "PostgreSQL", "Azure DevOps", "Azure ServiceBus", "Blockchain"],
    live: "https://www.skythread.aero/solution/overview",
    mode: ["fullstack"],
  },
  {
    title: "Distributed Web Scraper (MPI)",
    description:
      "Engineered a distributed scraper using MPI for parallelism to efficiently handle large-scale data extraction. Integrated modular scheduling and checkpointing to ensure high reliability and deduplication across multi-process runs.",
    tags: ["Python", "Message Passing Interface", "mpi4py", "CloudScraper", "Distributed Computing", "Parallel Programming"],
    github: "https://github.com/Viraj-Mavani/DistributedWebScraper",
    mode: ["data", "webscraping"],
  },
  {
    title: "ML-Powered Taxi Fare Prediction",
    description:
      "Implemented an ML-based prediction system using LightGBM, achieving an R^2 score of 83.9%. Developed a Docker-based pipeline to automate data extraction from map images, streamlining the ingestion of travel features.",
    tags: ["Python", "LightGBM", "Docker", "XGBoost", "Scikit-learn"],
    github: "https://github.com/Viraj-Mavani/ML-Powered-Taxi-Fare-Prediction-using-Docker",
    mode: ["ai-ml", "data"],
  },
  {
    title: "Web Scraping Automation for Business Registries",
    description:
      "Developed 15+ Python-based web scraping systems targeting dynamic business registry websites across various regions. Each extracting millions of data points for international client, handling JavaScript rendering, pagination, and utilized reverse engineering techniques to bypass anti-scraping with 99.9% uptime. Post-processed large datasets for deduplication, formatting, and export to CSV/JSON.",
    tags: ["Python", "Selenium", "Scrapy", "BeautifulSoup", "Docker"],
    live: "https://www.upwork.com/freelancers/~0100fa5d569b04d18d?p=1927504018187304960",
    mode: ["data", "webscraping"],
  },
]

export function ProjectsSection() {
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
            05
          </span>
        </div>

        <h2 id="projects-heading" className="sr-only">Projects</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col gap-5 rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    project_{String(index + 1).padStart(2, "0")}
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

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
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
        <div className="mt-8 flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-sm border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-primary hover:text-foreground hover:gap-4"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}