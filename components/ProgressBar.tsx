'use client'

interface ProgressBarProps {
  current: number   // 1-based
  total: number
  label?: string
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="axis-label">{label}</span>
          <span className="axis-label">
            {current} / {total}
          </span>
        </div>
      )}
      <div className="h-1 w-full bg-parchment-200/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-parchment-400 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
