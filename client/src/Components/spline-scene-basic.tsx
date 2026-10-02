'use client'

import { Card } from '@/Components/ui/card'
import { SplineScene } from '@/Components/ui/splite'
import { Spotlight } from '@/Components/ui/spotlight'

export function SplineSceneBasic() {
  return (
    <Card className="spline-card relative h-[500px] w-full overflow-hidden border-white/10 bg-black/[0.78] text-white shadow-2xl shadow-black/30">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative z-10 flex h-full flex-col md:flex-row">
        <div className="flex flex-1 flex-col justify-center p-7 md:p-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-indigo-200/70">
            Digital playground <span className="text-indigo-300">/ 01</span>
          </p>
          <h1 className="max-w-md bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Interactive 3D
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-300 md:text-base">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and enhance your design.
          </p>
          <div className="mt-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
            <span className="h-px w-8 bg-indigo-300/70" />
            Move your cursor to explore
          </div>
        </div>

        <div className="relative min-h-0 flex-1">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-black/10" />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
            trackPointerOutside
          />
        </div>
      </div>
    </Card>
  )
}
