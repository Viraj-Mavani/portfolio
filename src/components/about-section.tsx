"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { aboutContent, education } from "@/lib/bio-data"
import { useMode } from "@/hooks/use-mode"
import { fadeUpVariant, sectionVariants, cardVariant } from "@/lib/animations"

interface AboutSectionProps {
  index: number
}

export function AboutSection({ index }: AboutSectionProps) {
  const { mode } = useMode()
  const activeBio = aboutContent[mode] || aboutContent.generalist

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
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <h2 id="about-heading" className="sr-only">About & Education</h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* About text */}
          <motion.div variants={cardVariant} className="flex flex-col gap-6 rounded-md border border-border bg-card p-4 md:p-8 h-full">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
                {mode === "generalist" ? "about_me" : `about_${mode.replace("-", "_")}`}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {"//"}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {activeBio.map((paragraph, i) => (
                <p 
                  key={i} 
                  className="text-xs md:text-base leading-relaxed text-muted-foreground text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={sectionVariants} className="flex flex-col gap-4">
            {education.map((edu) => (
              <motion.div
                variants={cardVariant}
                key={edu.degree}
                className="group flex flex-col gap-4 rounded-md border border-border bg-card px-4 py-6 md:p-8 transition-colors hover:border-primary/30"
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

                <p className="font-mono text-[11px] text-foreground">
                  {edu.focus}
                </p>

                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground italic border-l-2 border-primary/20 pl-4">
                  {edu.description}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
