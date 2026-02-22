"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight, X, Video } from "lucide-react"
import { Project, projects } from "@/lib/project-data"
import Link from "next/link"
import Image from "next/image"
import { useMode } from "@/hooks/use-mode"
import { sectionVariants, fadeUpVariant, cardVariantRight, cardVariantLeft } from "@/lib/animations"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"

interface ProjectsSectionProps {
  index: number
}

export function ProjectsSection({ index }: ProjectsSectionProps) {
  const { mode } = useMode()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter((project) => 
    mode === "generalist" || project.mode.includes(mode)
  )

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
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
  }, [selectedProject])

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

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="grid gap-4 md:grid-cols-2">
          {filteredProjects.slice(0, 4).map((project, index) => (
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
              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
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
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects button */}
        {filteredProjects.length > 4 && (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mt-8 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-sm border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-primary hover:text-foreground hover:gap-4"
            >
              View All {mode === "generalist" ? "" : mode} Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </motion.div>
        )}

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
    </section>
  )
}
