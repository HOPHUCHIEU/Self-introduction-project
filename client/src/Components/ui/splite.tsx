'use client'

import { lazy, Suspense, useEffect, useState } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  trackPointerOutside?: boolean
}

export function SplineScene({
  scene,
  className,
  trackPointerOutside = false,
}: SplineSceneProps) {
  const [application, setApplication] = useState<Application | null>(null)
  const [sceneReady, setSceneReady] = useState(false)

  useEffect(() => {
    setSceneReady(false)
    setApplication(null)
  }, [scene])

  useEffect(() => {
    if (!trackPointerOutside || !application) return

    const forwardPointer = (event: PointerEvent) => {
      if (!event.isTrusted || (event.pointerType !== 'mouse' && event.pointerType !== 'pen')) {
        return
      }

      const pointerEvent = new PointerEvent('pointermove', {
        bubbles: true,
        cancelable: true,
        clientX: event.clientX,
        clientY: event.clientY,
        pointerId: event.pointerId,
        pointerType: event.pointerType,
        isPrimary: event.isPrimary,
      })
      const mouseEvent = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        clientX: event.clientX,
        clientY: event.clientY,
      })

      application.canvas.dispatchEvent(pointerEvent)
      application.canvas.dispatchEvent(mouseEvent)
    }

    window.addEventListener('pointermove', forwardPointer, { passive: true })
    return () => window.removeEventListener('pointermove', forwardPointer)
  }, [application, trackPointerOutside])

  const loadingIndicator = (
    <div className="spline-scene-loading" role="status" aria-live="polite">
      <div className="spline-loading-orbit" aria-hidden="true">
        <span />
      </div>
      <span className="spline-loading-title">Preparing the 3D scene</span>
      <span className="spline-loading-caption">Just a moment</span>
    </div>
  )

  return (
    <Suspense
      fallback={loadingIndicator}
    >
      <>
        <Spline
          scene={scene}
          className={className}
          onLoad={(loadedApplication) => {
            setApplication(loadedApplication)
            setSceneReady(true)
          }}
        />
        {!sceneReady && loadingIndicator}
      </>
    </Suspense>
  )
}
