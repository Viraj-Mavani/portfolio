"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export interface PhotoDetails {
  type: "portrait" | "landscape" | "square"
  id: string
  src: string
  alt: string
  caption: string
}

// Photo Pool
const ALL_PHOTOS: PhotoDetails[] = [
  { type: "portrait", id: "p1", src: "/photos/125318.jpg", alt: "Profile Portrait", caption: "sys.admin // viraj" },
  { type: "portrait", id: "p2", src: "/photos/AKP05692.jpg", alt: "Profile Portrait", caption: "sys.admin // viraj" },
  { type: "portrait", id: "p3", src: "/photos/AKP05694.jpg", alt: "Profile Portrait", caption: "sys.admin // viraj" },
  { type: "portrait", id: "p4", src: "/photos/AKP05682.jpg", alt: "Profile Portrait", caption: "sys.admin // viraj" },
  { type: "landscape", id: "p1", src: "/photos/middlesex.jpg", alt: "University", caption: "University.config" },
  { type: "landscape", id: "p2", src: "/photos/IMG_6089.JPG", alt: "Hobbies", caption: "offline_status" },
  { type: "square", id: "p1", src: "/photos/IMG_1694(1).jpg", alt: "Hobbies", caption: "offline_status" },
  // { id: "p2", src: "/photos/setup.jpg", alt: "Desk Setup", caption: "workspace.config" },
  // { id: "p3", src: "/photos/event.jpg", alt: "Tech Event", caption: "networking_mode: active" },
  // { id: "p4", src: "/photos/extra.jpg", alt: "Extra Shot", caption: "compiling..." },
]

const DISPLAY_PHOTOS = [ALL_PHOTOS[0], ALL_PHOTOS[1], ALL_PHOTOS[2]]

export function BentoGallery() {
  const photos = DISPLAY_PHOTOS.slice(0, 3)

  if (photos.length < 3) return null

  return (
    <section className="mb-12 md:mx-auto md:w-3/5 lg:w-4/5">
      {/* Layout: 
        Mobile: 1 column (vertical stack)
        Desktop: Flex row. Left item stretches to match height of right column.
      */}
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:h-[300px] lg:h-auto">
        
        {/* Photo 1: Large Left (Portrait/Primary) */}
        <div className="group relative min-h-[350px] w-full overflow-hidden rounded-xl border border-border bg-card md:w-3/5 md:min-h-0">
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
              <p className="font-mono text-xs lg:text-sm font-medium text-foreground">
                <span className="text-primary">{"> "}</span>
                {photos[0].caption}
              </p>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col gap-4 md:w-2/5">

        {/* Photo 2: Top Right (Landscape) */}
          <div className="group relative min-h-[100px] max-h-[120px] lg:min-h-[170px] lg:max-h-[190px] w-full overflow-hidden rounded-xl border border-border bg-card">
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
                <p className="font-mono text-xs lg:text-sm font-medium text-foreground">
                <span className="text-primary">{"> "}</span>
                {photos[1].caption}
              </p>
            </div>
          )}
        </div>

        {/* Photo 3: Bottom Right (Square) */}
          <div className="group relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-card">
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
                <p className="font-mono text-xs lg:text-sm font-medium text-foreground">
                <span className="text-primary">{"> "}</span>
                {photos[2].caption}
              </p>
            </div>
          )}
          </div>

        </div>

      </div>
    </section>
  )
}