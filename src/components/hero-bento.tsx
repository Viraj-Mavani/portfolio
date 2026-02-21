"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TerminalCard } from "./terminal-card"
import { TechTicker } from "./tech-ticker"
import { useMode } from "@/hooks/use-mode"
// import { useIsMobile } from "@/hooks/use-mobile"
// import { useIsTablet } from "@/hooks/use-tablet"
import { HeroContent } from "@/lib/bio-data"
import { sectionVariants, cardVariantUp, cardVariantLeft, cardVariantRight, cardVariantDown } from "@/lib/animations"
import LetterGlitch from "@/components/letter-glitch"

interface HeroBentoProps {
  index: number
}

export function HeroBento({ index }: HeroBentoProps) {
  // const [mounted, setMounted] = useState(false) 
  const { mode } = useMode()
  const content = HeroContent[mode as keyof typeof HeroContent] || HeroContent.generalist
  const [isHovered, setIsHovered] = useState(false)

  // const isMobile = useIsMobile()
  // const isTablet = useIsTablet()

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // // Debug: Monitor device state
  // useEffect(() => {
  //   console.log("Device Check:", { 
  //     isMobile, 
  //     isTablet, 
  //     width: typeof window !== 'undefined' ? window.innerWidth : 'SSR' 
  //   });
  // }, [isMobile, isTablet]);
  
  // const getCard1Variant = () => {
  //   if (isMobile) { console.log("Card 1: Mobile (Right)"); return cardVariantRight; }
  //   if (isTablet) { console.log("Card 1: Tablet (Down)"); return cardVariantDown; }
  //   console.log("Card 1: Desktop (Down)");
  //   return cardVariantDown;
  // }

  // const getCard2Variant = () => {
  //   if (isMobile) { console.log("Card 2: Mobile (Right)"); return cardVariantRight; }
  //   if (isTablet) { console.log("Card 2: Tablet (Left)"); return cardVariantLeft; }
  //   console.log("Card 2: Desktop (Left)");
  //   return cardVariantLeft;
  // }
  
  // const getCard1Variant = () => {
  //   if (isMobile) return cardVariantRight
  //   if (isTablet) return cardVariantDown 
  //   return cardVariantDown
  // }

  // const getCard2Variant = () => {
  //   if (isMobile) return cardVariantRight
  //   if (isTablet) return cardVariantLeft
  //   return cardVariantLeft
  // }

  // const getCard3Variant = () => {
  //   if (isMobile) return cardVariantRight;
  //   if (isTablet) return cardVariantRight;
  //   return cardVariantRight
  // }
  
  // const getCard4Variant = () => {
  //   if (isMobile) return cardVariantRight;
  //   if (isTablet) return cardVariantLeft;
  //   return cardVariantUp
  // }

  // if (!mounted) return <div className="min-h-screen" />; 

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full opacity-30">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#ff0000", "#00ff00", "#0000ff"]}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-16 md:pt-36 lg:pt-40 lg:pb-24" aria-labelledby="hero-heading">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          index
        </span>
        <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
      </div>

      {/* Bento Grid */}
      <motion.div 
        // key={isMobile ? "mobile" : isTablet ? "tablet" : "desktop"} // Ensures re-animation on resize
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:grid-rows-[1fr_auto]"
      >
        {/* Card 1 - Intro */}
        <motion.div variants={cardVariantDown} className="sm:col-span-2 md:col-span-2 flex flex-col justify-between rounded-md border border-border bg-card p-6 md:p-8 lg:p-10">
          <div>
            <span className="mb-4 inline-block font-mono text-[10px] tracking-widest text-primary uppercase">
              {content.title}
            </span>
            <h1
              id="hero-heading"
              className="text-balance text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Hello, I am
              <br />
              <motion.span
                className="text-primary inline-flex cursor-pointer select-none"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTap={() => setIsHovered(!isHovered)}
                layout
              >
                <motion.span layout>V</motion.span>
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      iraj
                    </motion.span>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden whitespace-pre"
                    >
                      {" "}
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.span layout>M</motion.span>
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      avani
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.span layout>.</motion.span>
              </motion.span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {content.description}
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:gap-4"
            >
              About Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Card 2 - Terminal (Tall, Right, spans 2 rows) */}
        <motion.div variants={cardVariantLeft} className="sm:col-span-2 md:col-span-1 min-h-[425px] lg:min-h-[440px] md:row-span-2">
          <TerminalCard />
        </motion.div>

        {/* Card 3 - Status (Small, Bottom Left) */}
        <motion.div variants={cardVariantRight} className="flex items-center gap-4 rounded-md border border-border bg-card px-6 py-5">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400/40" aria-hidden="true" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              current status
            </span>
            <span className="text-sm font-medium text-foreground">
              Available for Freelance
            </span>
          </div>
        </motion.div>

        {/* Card 4 - Tech Stack Ticker (Small, Bottom Center) */}
        <motion.div variants={cardVariantUp} className="min-h-[72px]">
          <TechTicker />
        </motion.div>
      </motion.div>
      </div>
    </section>
  )
}