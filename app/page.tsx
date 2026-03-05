import Link from 'next/link'
import { BookOpen, ChevronRight, Layers, Brain } from 'lucide-react'
import { lessons } from '@/data/lessons'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center max-w-3xl mx-auto">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-parchment-400/10 border border-parchment-400/20 text-parchment-400 text-xs font-semibold uppercase tracking-widest">
            History → Self-Knowledge
          </div>

          <h1 className="text-5xl sm:text-6xl font-serif text-parchment-100 leading-tight">
            Civica
          </h1>

          <p className="text-xl text-parchment-200/70 leading-relaxed max-w-xl mx-auto">
            Learn world history through six pivotal eras. Then reflect on what
            each moment reveals about how you see power, society, and human nature.
          </p>

          <p className="text-sm text-parchment-200/40 max-w-md mx-auto">
            Your answers build a personalized worldview profile across ten
            philosophical dimensions — a map of how history shapes the lens you
            see the world through.
          </p>

          <div className="pt-4">
            <Link href={`/lesson/${lessons[0].id}`} className="btn-primary text-base">
              Begin the journey
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-parchment-200/10 bg-navy-900/40">
        <div className="max-w-4xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="mx-auto w-10 h-10 rounded-xl bg-parchment-400/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-parchment-400" />
            </div>
            <h3 className="font-semibold text-parchment-100">Read</h3>
            <p className="text-sm text-parchment-200/50 leading-relaxed">
              Six concise, compelling lessons across history&apos;s most formative eras &mdash; from Rome to decolonization.
            </p>
          </div>
          <div className="space-y-3">
            <div className="mx-auto w-10 h-10 rounded-xl bg-parchment-400/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-parchment-400" />
            </div>
            <h3 className="font-semibold text-parchment-100">Reflect</h3>
            <p className="text-sm text-parchment-200/50 leading-relaxed">
              Answer reflective questions after each lesson — no right answers, just your honest interpretation.
            </p>
          </div>
          <div className="space-y-3">
            <div className="mx-auto w-10 h-10 rounded-xl bg-parchment-400/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-parchment-400" />
            </div>
            <h3 className="font-semibold text-parchment-100">Discover</h3>
            <p className="text-sm text-parchment-200/50 leading-relaxed">
              See your worldview mapped across 10 philosophical dimensions and learn your historical archetype.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons preview */}
      <section className="border-t border-parchment-200/10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="axis-label mb-8 text-center">The Six Eras</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {lessons.map((lesson, i) => (
              <div key={lesson.id} className="card p-5 flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-parchment-400/10 flex items-center justify-center text-parchment-400 font-mono text-xs font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-xs text-parchment-300/40 mb-1">{lesson.era} · {lesson.region}</p>
                  <p className="text-sm font-medium text-parchment-100">{lesson.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-parchment-200/10 py-6 text-center">
        <p className="text-xs text-parchment-200/30">
          Civica — History shapes how we see the world.
        </p>
      </footer>
    </main>
  )
}
