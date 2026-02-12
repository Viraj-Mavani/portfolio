import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  Brain,
  Database,
  Globe,
  Terminal,
  Users,
} from "lucide-react"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { education } from "@/lib/data"

export const metadata: Metadata = {
  title: "About | VM Portfolio",
  description: "Detailed background, education, philosophy, and journey of Viraj Mavani.",
}

const intro = {
  title: "I'm a Full Stack AI Engineer who believes that the best code is written by those who never stop being students.",
  paragraphs: [
    "My journey didn't start with complex neural networks; it started back in India with a simple curiosity about how I could make a computer do the work for me. From those first automation scripts to completing my Master’s in AI at Western University, I’ve always been driven by the transition from 'how does this work?' to 'how can I make this better?'. Moving to Canada to specialize in AI allowed me to take my professional full-stack foundations and ground them in the deep, theoretical research that defines the next generation of software.",
    "I don't believe in being a 'master' of everything, because in this field, the moment you stop learning, you fall behind. My real expertise isn't just in a specific stack like .NET or React—it’s in the ability to pick up any tool, documentation, or research paper and turn it into a working solution. Whether I’m familiar with a technology or seeing it for the first time, I have the discipline to learn it, implement it, and ship it. To me, a technical challenge isn't a wall; it's just a new topic to master before the next deployment.",
    "Beyond the terminal, I’m deeply focused on the responsibility we have as engineers. My research into the 'Ethical Dilemmas in AI' taught me that intelligence without alignment is a liability. I’m not interested in building tech for the sake of buzzwords; I want to build systems that are genuinely useful, secure, and aligned with human values. Whether I'm processing millions of records with 99.9% uptime or fine-tuning a model, my goal is to ensure that the final product is as ethically sound as it is technically precise."
  ]
}

const journey = [
  {
    icon: Terminal,
    title: "The Automation Roots",
    text: "My technical journey began with a focus on efficiency. I started by writing Python scripts to automate manual tasks and building my first web scrapers, discovering the power of code to transform unstructured web data into actionable information.",
  },
  {
    icon: Globe,
    title: "Full Stack Engineering",
    text: "In my professional roles at Dexoc Solutions and FSP Media, I mastered the art of building enterprise-grade applications. I specialized in the .NET ecosystem, React, and AWS, delivering high-performance APIs and scalable architectures for international clients.",
  },
  {
    icon: Brain,
    title: "The AI Specialization",
    text: "My pivot into Artificial Intelligence at Western University allowed me to dive deep into Deep Learning and NLP. My research moved into production-ready AI, focusing on fine-tuning LLMs and developing high-accuracy computer vision models for specialized domains.",
  },
  {
    icon: Database,
    title: "Large-Scale Systems",
    text: "Handling data at scale became a core expertise through my work with distributed systems. By leveraging MPI for parallel computing and serverless architectures, I have engineered pipelines capable of processing millions of records with near-perfect integrity.",
  },
]

export default function AboutPage() {
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
            about me
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* Intro section */}
        <section className="mb-16">
          <div className="rounded-md border border-border bg-card p-8 lg:p-10">
            <span className="mb-4 inline-block font-mono text-[10px] tracking-widest text-primary uppercase">
              who I am
            </span>
            <h1 className="mb-6 text-balance text-3xl font-medium leading-tight tracking-tight text-foreground lg:text-4xl">
              {intro.title}
            </h1>
            <div className="flex max-w-full flex-col gap-4">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Journey / Philosophy */}
        <section className="mb-16">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              my journey
            </span>
            <div className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <h3 className="font-mono text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education (detailed) */}
        <section>
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              education
            </span>
            <div className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="group rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/30"
              >
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-medium text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs text-primary">
                        {edu.school}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                      <MapPin className="h-3 w-3" strokeWidth={1.5} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                      <Calendar className="h-3 w-3" strokeWidth={1.5} />
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="mb-4 font-mono text-xs text-primary">
                  {edu.focus}
                </p>

                <ul className="flex flex-col gap-2">
                  {edu.highlights?.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}