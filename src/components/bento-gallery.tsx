"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export interface PhotoDetails {
  id: string
  src: string
  alt: string
  caption?: string
}

// Photo Pool
const ALL_PHOTOS: PhotoDetails[] = [
  { id: "p1", src: "/photos/125318.jpg", alt: "Profile Portrait", caption: "sys.admin // viraj" },
  { id: "p2", src: "/photos/middlesex.jpg", alt: "University", caption: "University.config" },
  { id: "p3", src: "/photos/IMG_1694(1).jpg", alt: "Hobbies", caption: "offline_status" },
//   { id: "p2", src: "/photos/setup.jpg", alt: "Desk Setup", caption: "workspace.config" },
//   { id: "p3", src: "/photos/event.jpg", alt: "Tech Event", caption: "networking_mode: active" },
  { id: "p5", src: "/photos/extra.jpg", alt: "Extra Shot", caption: "compiling..." },
]

const DISPLAY_PHOTOS = [ALL_PHOTOS[0], ALL_PHOTOS[1], ALL_PHOTOS[2]]

export function BentoGallery() {
  const photos = DISPLAY_PHOTOS.slice(0, 3)

  if (photos.length < 3) return null

  return (
    <section className="mb-12 md:w-4/5 md:mx-auto">
      {/* Grid Setup: 
        Mobile: 1 column, auto height (stacks vertically)
        Desktop: 2 columns, 2 rows, fixed 500px height. Left item spans both rows.
      */}
      <div className="grid grid-cols-1 gap-4 md:h-[500px] md:grid-cols-2 md:grid-rows-2">
        
        {/* Photo 1: Large Left (Portrait/Primary) */}
        <div className="group relative min-h-[350px] overflow-hidden rounded-xl border border-border bg-card md:row-span-2 md:min-h-0">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Prioritize loading the large LCP image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {photos[0].caption && (
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-mono text-sm font-medium text-foreground">
                <span className="text-primary">{"> "}</span>
                {photos[0].caption}
              </p>
            </div>
          )}
        </div>

        {/* Photo 2: Top Right (Landscape) */}
        <div className="group relative min-h-[150px] max-h-[170px] overflow-hidden rounded-xl border border-border bg-card md:min-h-0"> {/* i need  min-h-[150px] max-h-[170px] cause its always be landscape picture */}
          <Image
            src={photos[1].src}
            alt={photos[1].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {photos[1].caption && (
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-mono text-sm font-medium text-foreground">
                <span className="text-primary">{"> "}</span>
                {photos[1].caption}
              </p>
            </div>
          )}
        </div>

        {/* Photo 3: Bottom Right (Square) */}
        <div className="group relative min-h-[250px] overflow-hidden rounded-xl border border-border bg-card md:min-h-0">
          <Image
            src={photos[2].src}
            alt={photos[2].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {photos[2].caption && (
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-mono text-sm font-medium text-foreground">
                <span className="text-primary">{"> "}</span>
                {photos[2].caption}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}