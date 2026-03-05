'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { RefreshCw } from 'lucide-react'
import { useSessionStore } from '@/store/useSessionStore'
import { computeProfile, getArchetype } from '@/lib/profile'
import ProfileChart from '@/components/ProfileChart'
import type { Profile } from '@/types'
import { AXIS_META, TRAIT_AXES } from '@/types'

export default function ResultsPage() {
  const { answers, reset } = useSessionStore()
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    if (answers.length > 0) {
      setProfile(computeProfile(answers))
    }
  }, [answers])

  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <p className="text-parchment-200/50">
            No answers recorded yet.
          </p>
          <Link href="/" className="btn-primary inline-flex">
            Start from the beginning
          </Link>
        </div>
      </main>
    )
  }

  const archetype = getArchetype(profile)

  function handleRestart() {
    reset()
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-14">
        {/* Archetype */}
        <section className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-parchment-400/10 border border-parchment-400/20 text-parchment-400 text-xs font-semibold uppercase tracking-widest">
            Your Worldview Archetype
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-parchment-100">
            {archetype.name}
          </h1>
          <p className="text-parchment-400 font-medium italic text-lg">
            &ldquo;{archetype.tagline}&rdquo;
          </p>
          <p className="text-parchment-200/70 leading-relaxed max-w-lg mx-auto">
            {archetype.description}
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-parchment-200/10" />

        {/* Profile chart */}
        <section className="space-y-6">
          <div>
            <h2 className="axis-label mb-1">Your 10-Axis Profile</h2>
            <p className="text-xs text-parchment-200/40">
              Each axis reflects how your answers across all six lessons scored on that dimension.
              The dot shows your position between the two poles.
            </p>
          </div>
          <ProfileChart profile={profile} />
        </section>

        {/* Axis descriptions */}
        <section className="space-y-4">
          <h2 className="axis-label">What Each Dimension Measures</h2>
          <div className="space-y-3">
            {TRAIT_AXES.map((axis) => {
              const { label, lowLabel, highLabel, description } = AXIS_META[axis]
              return (
                <div key={axis} className="card p-4 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-semibold uppercase tracking-widest text-parchment-300/70">
                      {label}
                    </span>
                    <span className="text-xs text-parchment-200/30">
                      {lowLabel} ↔ {highLabel}
                    </span>
                  </div>
                  <p className="text-xs text-parchment-200/50 leading-relaxed">{description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Restart */}
        <div className="text-center pt-4">
          <Link href="/" onClick={handleRestart} className="btn-secondary inline-flex">
            <RefreshCw className="w-4 h-4" />
            Start again
          </Link>
        </div>
      </div>
    </main>
  )
}
