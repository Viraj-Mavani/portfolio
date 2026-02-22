"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Video, ChevronDown, X } from "lucide-react"

import { projects, Project } from "@/lib/project-data"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fadeUpVariant, sectionVariants, cardVariantRight, cardVariantLeft } from "@/lib/animations"

const modeFilters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "data", label: "Web Scraping" },
  { id: "game", label: "Game Development" },
]

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.mode.includes(activeFilter))

  // Handle back button to close modal
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        setSelectedProject(null)
      }
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [selectedProject])

  const handleProjectClick = (project: Project) => {
    window.history.pushState(null, "", window.location.href)
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    window.history.back()
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

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
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="mb-10 flex items-center gap-4"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            all projects
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            {String(filtered.length).padStart(2, "0")} results
          </span>
        </motion.div>

        {/* Mode filter bar */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="mb-10 flex items-center gap-2"
        >
          <span className="mr-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            filter
          </span>
          {/* Desktop view */}
          <div className="hidden items-center gap-1 rounded-sm bg-secondary p-0.5 md:flex">
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

          {/* Mobile view */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-sm bg-secondary px-3 py-1.5 font-mono text-xs text-primary outline-none transition-colors hover:bg-secondary/80">
                {modeFilters.find((f) => f.id === activeFilter)?.label}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="font-mono text-xs">
                {modeFilters.map((filter) => (
                    <DropdownMenuItem 
                      key={filter.id} 
                      onClick={() => setActiveFilter(filter.id)}
                      className={activeFilter === filter.id ? "text-primary focus:text-primary" : ""}>
                      {filter.label}
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>

        {/* Project list (Grid) */}
        <motion.div 
          key={activeFilter}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="grid gap-4 md:grid-cols-2">
          {filtered.map((project, index) => (
            <motion.div
              variants={index % 2 === 0 ? cardVariantRight : cardVariantLeft}
              key={project.title}
              onClick={() => handleProjectClick(project)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col gap-5 rounded-md border border-border bg-card px-4 py-6 md:p-4 md:py-6 lg:p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    project_{String(index + 1).padStart(2, "0")} / brief description
                  </span>
                  <h3 className="text-md md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <div
                      aria-label={`${project.title} GitHub repository`}
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-foreground"
                    >
                      <Github className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  )}
                  {project.live && (
                    <div
                      aria-label={`${project.title} live demo`}
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              </div>

              {/* Brief Description */}
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
                {project.brief}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 5 && (
                    <span className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground">
                        +{project.tags.length - 5}
                    </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

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

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: "-45%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, y: "-45%", x: "-50%" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="fixed left-1/2 top-1/2 z-50 w-[95%] h-[90%] md:w-[85%] md:h-[85%] lg:w-[75%] lg:h-[85%] max-w-5xl -translate-y-1/2 overflow-hidden flex flex-col shadow-2xl shadow-black/40"
            >
                {/* Glass morphism container */}
                <div className="relative w-full h-full bg-card/95 backdrop-blur-xl rounded-xl overflow-hidden">
                    {/* Subtle gradient border effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 p-[1px]">
                        <div className="w-full h-full rounded-xl bg-card" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative w-full h-full flex flex-col">
                        {/* Header / Close */}
                        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-b from-background/50 to-transparent backdrop-blur-sm">
                            <h2 className="font-mono text-sm md:text-lg font-medium uppercase tracking-wider text-foreground">
                                {selectedProject.title}
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedProject(null)}
                                className="relative group rounded-full p-2 text-muted-foreground transition-colors"
                            >
                                <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <X className="h-5 w-5 relative z-10 group-hover:text-foreground transition-colors" />
                            </motion.button>
                        </div>

                        {/* Scrollable Content */}
                        <ScrollArea className="flex-1">
                            <div className="p-6 md:p-8">
                    {/* Top Actions */}
                    <div className="mb-8 flex flex-wrap gap-4">
                        {selectedProject.github && (
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                            >
                                <Github className="h-4 w-4" />
                                View Source
                            </a>
                        )}
                        {selectedProject.live && (
                            <a
                                href={selectedProject.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-8 flex flex-col gap-4">
                        <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-primary">Description</h3>
                        {(Array.isArray(selectedProject.description) ? selectedProject.description : [selectedProject.description]).map((paragraph, i) => (
                            <p key={i} className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h3 className="mb-4 font-mono text-xs md:text-sm uppercase tracking-widest text-primary">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Media */}
                    {(selectedProject.images || selectedProject.video) && (
                        <div>
                            <h3 className="mb-4 font-mono text-xs md:text-sm uppercase tracking-widest text-primary">Gallery</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {selectedProject.images?.map((img, i) => (
                                    <div
                                        key={`${selectedProject.title}-img-${i}`}
                                        className="relative aspect-video overflow-hidden rounded-sm border border-border bg-secondary"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${selectedProject.title} screenshot ${i + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                                {selectedProject.video && (
                                    <div className="relative aspect-video flex items-center justify-center rounded-sm border border-border bg-secondary">
                                        <Video className="h-8 w-8 text-muted-foreground" strokeWidth={1} />
                                        <span className="sr-only">Video demo available</span>
                                    </div>
                          )}
                      </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
