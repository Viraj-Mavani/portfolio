"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { aboutContent, education } from "@/lib/bio-data"
import { useMode } from "@/hooks/use-mode"

interface AboutSectionProps {
  index: number
}

export function AboutSection({ index }: AboutSectionProps) {
  const { mode } = useMode()
  const activeBio = aboutContent[mode] || aboutContent.generalist
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="about" className="border-t border-border" aria-labelledby="about-heading">

      {process.env.NODE_ENV === 'development' && (
        <>
          {/* TOP LINE: Trigger starts here */}
          <div 
            className="fixed left-0 right-0 z-50 border-t-2 border-dashed border-blue-500 pointer-events-none"
            style={{ top: '45%' }}
          >
            <span className="bg-blue-500 text-white text-[10px] px-1 font-mono">TOP MARGIN</span>
          </div>

          {/* BOTTOM LINE: Trigger ends here */}
          <div 
            className="fixed left-0 right-0 z-50 border-t-2 border-dashed border-red-500 pointer-events-none"
            style={{ bottom: '45%' }}
          >
            <span className="bg-red-500 text-white text-[10px] px-1 font-mono">BOTTOM MARGIN</span>
          </div>
        </>
      )}

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

        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* About text */}
          <div className="flex flex-col gap-6 rounded-md border border-border bg-card p-4 md:p-8 h-full">
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
          </div>

          {/* Education */}
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 1 }}
                whileInView={isMobile ? { borderColor: "hsl(var(--primary) / 0.3)" } : {}}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col gap-4 rounded-md border border-border bg-card px-4 py-6 md:p-8 transition-colors lg:hover:border-primary/30"
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
          </div>
        </div>
      </div>
    </section>
  )
}
