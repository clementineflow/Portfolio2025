"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/images/imageVM0.png", alt: "Vulnerability management screen 1" },
  { src: "/images/imageVM1.png", alt: "Vulnerability management screen 2" },
  { src: "/images/imageVM2.png", alt: "Vulnerability management screen 3" },
  { src: "/VM05.jpg", alt: "Vulnerability management flow overview" },
]

export default function ImageSliderLegacy() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = container.clientWidth
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 md:gap-8 lg:gap-10 px-6 md:px-12 lg:px-20 py-10 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <figure
            key={index}
            className="flex-shrink-0 snap-start w-full max-w-[220px] md:max-w-[280px] lg:max-w-[340px] flex items-center justify-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={340}
              height={420}
              className="max-h-[420px] w-auto object-contain mx-auto"
            />
          </figure>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-4 lg:px-8">
        <button
          onClick={() => scroll("left")}
          className="bg-white/60 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white/60 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
