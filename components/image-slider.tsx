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

type ImageSliderProps = {
  descriptionText?: string
}

export default function ImageSlider({ descriptionText }: ImageSliderProps) {
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
            className="flex-shrink-0 snap-start w-full flex items-center justify-center h-[420px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={340}
              height={420}
              className="h-full w-auto object-contain mx-auto"
            />
          </figure>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={() => scroll("left")}
          className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50"
          aria-label="上一張研究圖"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {descriptionText && (
          <p className="text-center text-xs text-muted-foreground">
            {descriptionText}
          </p>
        )}

        <button
          onClick={() => scroll("right")}
          className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50"
          aria-label="下一張研究圖"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}