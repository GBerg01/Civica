import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { lessons, lessonOrder } from '@/data/lessons'
import LessonCard from '@/components/LessonCard'

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }))
}

export default async function LessonPage({ params }: Props) {
  const { id } = await params
  const lesson = lessons.find((l) => l.id === id)
  if (!lesson) notFound()

  const currentIndex = lessonOrder.indexOf(id)
  const isFirst = currentIndex === 0

  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-12">
        {/* Back nav */}
        <nav className="flex items-center justify-between">
          {isFirst ? (
            <Link href="/" className="flex items-center gap-2 text-sm text-parchment-200/40 hover:text-parchment-200 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
          ) : (
            <Link
              href={`/lesson/${lessonOrder[currentIndex - 1]}`}
              className="flex items-center gap-2 text-sm text-parchment-200/40 hover:text-parchment-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous lesson
            </Link>
          )}

          <span className="axis-label">
            {currentIndex + 1} / {lessonOrder.length}
          </span>
        </nav>

        {/* Lesson content */}
        <LessonCard lesson={lesson} />

        {/* CTA */}
        <div className="pt-4 flex justify-end">
          <Link href={`/lesson/${id}/questions`} className="btn-primary">
            Reflect on this lesson
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
