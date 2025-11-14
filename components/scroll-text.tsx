"use client"

import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { useEffect, useState, useRef } from "react"

interface ScrollTextProps {
  leftText: {title: string, subheading?: string, description?: string};
  rightPhrases: any[]
  className?: string
}

export function ScrollText({ leftText, rightPhrases, className = "" }: ScrollTextProps) {
  const { scrollDirection, scrollY } = useScrollDirection()
  const [activeIndex, setActiveIndex] = useState(0)
  const [internalScroll, setInternalScroll] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const componentHeight = rect.height
      const visibleTop = Math.max(0, -rect.top)
      const visibleBottom = Math.min(componentHeight, viewportHeight - rect.top)
      const visibleHeight = visibleBottom - visibleTop
      const visibilityRatio = visibleHeight / Math.min(componentHeight, viewportHeight)

      const isSubstantiallyVisible = visibilityRatio > 0.8

      if (isSubstantiallyVisible) {
        document.documentElement.classList.add("animation-active")

        const currentProgress = internalScroll / 100
        const maxProgress = rightPhrases.length - 1

        if ((e.deltaY > 0 && currentProgress >= maxProgress) || (e.deltaY < 0 && currentProgress <= 0)) {
          document.documentElement.classList.remove("animation-active")
          return // Let the scroll pass through naturally
        }

        // Block scroll and handle animation only within bounds
        e.preventDefault()

        setInternalScroll((prev) => {
          const newScroll = prev + e.deltaY * 0.7
          const maxScroll = (rightPhrases.length - 1) * 100
          return Math.max(0, Math.min(maxScroll, newScroll))
        })
      } else {
        document.documentElement.classList.remove("animation-active")
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleWheel)
      document.documentElement.classList.remove("animation-active")
    }
  }, [rightPhrases.length, internalScroll, isClient])

  useEffect(() => {
    const newIndex = Math.floor(internalScroll / 100)
    setActiveIndex(Math.max(0, Math.min(rightPhrases.length - 1, newIndex)))
  }, [internalScroll, rightPhrases.length])

  

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex items-center gap-8 px-16 py-28 max-lg:gap-6 max-lg:px-8 max-lg:py-16 ${className}`}
    >
      <div className="shrink-0">
        <h1 className="text-7xl max-lg:text-5xl font-medium text-black leading-none">{leftText.title}</h1>
        <h3 className="text-2xl max-lg:text-lg font-medium text-black mt-4">{leftText.subheading}</h3>
        <p className="text-md max-lg:text-sm text-black mt-4 max-w-md">{leftText.description}</p>
      </div>

      <div className="flex-1 relative h-screen max-lg:h-[80vh] overflow-hidden">
        <div className="flex flex-col" style={{ gap: '100px' }}>
          {rightPhrases.map((phrase, index) => (
            <div
              key={index}
              className="h-[1000px] flex items-center"
              style={{
                transform: `translateY(calc(${-internalScroll * 10}px))`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {phrase}
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 right-0 h-40 max-lg:h-32 bg-linear-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 max-lg:h-32 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}
