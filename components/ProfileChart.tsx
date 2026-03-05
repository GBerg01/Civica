'use client'

import type { Profile, TraitAxis } from '@/types'
import { TRAIT_AXES, AXIS_META } from '@/types'
import { getAxisStrength } from '@/lib/profile'

interface ProfileChartProps {
  profile: Profile
}

export default function ProfileChart({ profile }: ProfileChartProps) {
  return (
    <div className="space-y-5">
      {TRAIT_AXES.map((axis) => (
        <AxisRow key={axis} axis={axis} value={profile[axis]} />
      ))}
    </div>
  )
}

function AxisRow({ axis, value }: { axis: TraitAxis; value: number }) {
  const meta = AXIS_META[axis]
  const strength = getAxisStrength(value)
  const pct = ((value + 10) / 20) * 100  // map -10…+10 → 0…100%
  const isNeutral = strength === 'balanced'

  return (
    <div className="space-y-1.5">
      {/* Axis label + score */}
      <div className="flex justify-between items-baseline">
        <span className="text-xs font-semibold uppercase tracking-widest text-parchment-300/70">
          {meta.label}
        </span>
        <span className="text-xs text-parchment-300/40 font-mono">
          {value > 0 ? '+' : ''}{value}
        </span>
      </div>

      {/* Track */}
      <div className="relative h-2 bg-parchment-200/10 rounded-full">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-parchment-200/20" />
        {/* Fill */}
        {!isNeutral && (
          <div
            className="absolute top-0 bottom-0 rounded-full bg-parchment-400 transition-all duration-700"
            style={
              value >= 0
                ? { left: '50%', width: `${pct - 50}%` }
                : { right: `${100 - pct}%`, width: `${50 - pct}%` }
            }
          />
        )}
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-parchment-100 border-2 border-navy-900 shadow transition-all duration-700"
          style={{ left: `calc(${pct}% - 6px)` }}
        />
      </div>

      {/* Pole labels */}
      <div className="flex justify-between">
        <span className="text-xs text-parchment-200/40">{meta.lowLabel}</span>
        <span className="text-xs text-parchment-200/40">{meta.highLabel}</span>
      </div>
    </div>
  )
}
