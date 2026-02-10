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
  description: "Detailed background, education, philosophy, and journey of VM.",
}

const journey = [
  {
    icon: Terminal,
    title: "The Beginning",
    text: "Started coding at 14, building simple automation scripts and web scrapers. The thrill of making a computer do exactly what I wanted was instantly addictive.",
  },
  {
    icon: Globe,
    title: "Full Stack Evolution",
    text: "Progressed from static HTML pages to building complete web applications with React, Node.js, and modern cloud infrastructure. Learned that great software is built at the intersection of user empathy and engineering rigor.",
  },
  {
    icon: Brain,
    title: "The AI Pivot",
    text: "Graduate research in NLP opened a new dimension. Understanding how machines can learn patterns, generate language, and reason about data transformed my approach to every problem I solve.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    text: "Working with production-scale data systems taught me that the best AI model is worthless without reliable data pipelines. I developed deep expertise in ETL design, data modeling, and distributed systems.",
  },
  {
    icon: Code2,
    title: "The Synthesis",
    text: "Today, I operate at the intersection of all these disciplines. I build full-stack applications powered by AI, backed by robust data infrastructure. Every project is an opportunity to merge engineering craft with intelligent automation.",
  },
  {
    icon: Users,
    title: "Looking Forward",
    text: "I am always seeking opportunities to work on challenging problems with talented teams. Whether it is building an AI-powered product from scratch or optimizing an existing data platform, I bring a polymorphic skill set and a relentless drive for quality.",
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
              Full Stack AI Engineer
              <br />
              <span className="text-muted-foreground">building at the edge of software and intelligence.</span>
            </h1>
            <div className="flex max-w-3xl flex-col gap-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                I am a Full Stack AI Engineer passionate about building intelligent systems that bridge the gap between cutting-edge research and production-grade software. With expertise spanning web development, machine learning, and data engineering, I design and ship end-to-end solutions.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                My approach is rooted in first principles: understand the problem deeply, choose the right tools, and build with precision. I believe the best technology is invisible -- it just works, seamlessly and reliably.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Outside of engineering, I am an avid reader, a contributor to open-source projects, and a lifelong learner who thrives on exploring new domains and connecting disparate ideas.
              </p>
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
                  {edu.highlights.map((h) => (
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