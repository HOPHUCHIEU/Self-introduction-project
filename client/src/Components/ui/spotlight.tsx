'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  motion,
  useSpring,
  useTransform,
  type SpringOptions,
} from 'framer-motion'
import { cn } from '@/lib/utils'

type SpotlightProps = {
  className?: string
  size?: number
  fill?: string
  springOptions?: SpringOptions
}

export function Spotlight({
  className,
  size = 240,
  fill = 'white',
  springOptions = { bounce: 0 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)
  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const parent = containerRef.current?.parentElement
      if (!parent) return
      const bounds = parent.getBoundingClientRect()
      mouseX.set(event.clientX - bounds.left)
      mouseY.set(event.clientY - bounds.top)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    parent.addEventListener('mousemove', handleMouseMove)
    parent.addEventListener('mouseenter', handleMouseEnter)
    parent.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove)
      parent.removeEventListener('mouseenter', handleMouseEnter)
      parent.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove])

  return (
    <motion.div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute rounded-full blur-2xl transition-opacity duration-300',
        isHovered ? 'opacity-70' : 'opacity-0',
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        background: `radial-gradient(circle at center, ${fill} 0%, color-mix(in srgb, ${fill} 48%, transparent) 38%, transparent 72%)`,
      }}
    />
  )
}
