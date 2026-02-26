"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink, Video, X } from "lucide-react"
import { Project } from "@/lib/project-data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TRANSITION_SPRING } from "@/lib/transition-config"

interface ProjectDetailModalProps {
  project: Project
  onClose: () => void
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      />
      <motion.div
        layoutId={`card-container-${project.title}`}
        transition={TRANSITION_SPRING}
        className="fixed left-1/2 top-1/2 z-50 w-[95%] h-[90%] md:w-[85%] md:h-[85%] lg:w-[75%] lg:h-[85%] max-w-5xl -translate-y-1/2 -translate-x-1/2 overflow-hidden rounded-xl flex flex-col shadow-2xl shadow-black/40 bg-card"
      >
        {/* Glass morphism container */}
        <div className="relative w-full h-full">
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 p-[1px]">
            <div className="w-full h-full bg-card/95" />
          </div>

          {/* Content */}
          <motion.div 
            className="relative w-full h-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }} // Fast exit to prevent content squashing
          >
            {/* Header / Close */}
            <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-b from-background/50 to-transparent backdrop-blur-sm">
              <motion.h2 layoutId={`card-title-${project.title}`} className="font-mono text-sm md:text-lg font-medium uppercase tracking-wider text-foreground">
                {project.title}
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      View Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
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
                  {(Array.isArray(project.description) ? project.description : [project.description]).map((paragraph, i) => (
                    <p key={i} className="text-xs md:text-sm leading-relaxed text-muted-foreground text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="mb-4 font-mono text-xs md:text-sm uppercase tracking-widest text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        layoutId={`card-tag-${project.title}-${tag}`}
                        key={tag}
                        className="inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[10px] text-foreground border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media */}
                {(project.images || project.video) && (
                  <div>
                    <h3 className="mb-4 font-mono text-xs md:text-sm uppercase tracking-widest text-primary">Gallery</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.images?.map((img, i) => (
                        <div
                          key={`${project.title}-img-`}
                          className="relative aspect-video overflow-hidden rounded-sm border border-border bg-secondary"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      {project.video && (
                        <div className="relative aspect-video flex items-center justify-center rounded-sm border border-border bg-secondary">
                          <Video className="h-8 w-8 text-muted-foreground" strokeWidth={1} />
                          <span className="sr-only">Video demo available</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
