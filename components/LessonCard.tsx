import type { Lesson } from '@/types'

interface LessonCardProps {
  lesson: Lesson
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-parchment-400/15 text-parchment-400 border border-parchment-400/20">
            {lesson.era}
          </span>
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-widest rounded-full bg-parchment-200/10 text-parchment-200/60">
            {lesson.region}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif text-parchment-100 leading-tight">
          {lesson.title}
        </h1>
      </header>

      {/* Summary */}
      <div className="prose prose-invert max-w-none">
        <p className="text-parchment-200/80 text-lg leading-relaxed">{lesson.summary}</p>
      </div>

      {/* Key Events */}
      <section>
        <h2 className="axis-label mb-4">Key Events</h2>
        <ul className="space-y-3">
          {lesson.keyEvents.map((event, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-parchment-400/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-parchment-400" />
              </span>
              <span className="text-parchment-200/70 text-sm leading-relaxed">{event}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Significance */}
      <section className="card p-6 border-l-2 border-l-parchment-400/40">
        <h2 className="axis-label mb-3">Why It Still Matters</h2>
        <p className="text-parchment-200/80 text-sm leading-relaxed italic">{lesson.significance}</p>
      </section>
    </article>
  )
}
