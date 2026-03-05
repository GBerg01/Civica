'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { questions as allQuestions } from '@/data/questions'
import { lessons, lessonOrder } from '@/data/lessons'
import { useSessionStore } from '@/store/useSessionStore'
import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'
import type { Answer } from '@/types'

export default function QuestionsPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()

  const lessonQuestions = allQuestions.filter((q) => q.lessonId === id)
  const lesson = lessons.find((l) => l.id === id)

  const { addAnswer, nextLesson } = useSessionStore()

  const [currentQ, setCurrentQ] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [pendingAnswers, setPendingAnswers] = useState<Answer[]>([])

  // Reset question index when lesson changes
  useEffect(() => {
    setCurrentQ(0)
    setSelectedIndex(null)
    setPendingAnswers([])
  }, [id])

  if (!lesson || lessonQuestions.length === 0) {
    router.push('/')
    return null
  }

  const question = lessonQuestions[currentQ]
  const isLastQuestion = currentQ === lessonQuestions.length - 1
  const lessonIndex = lessonOrder.indexOf(id)
  const isLastLesson = lessonIndex === lessonOrder.length - 1

  function handleSelect(index: number) {
    setSelectedIndex(index)
  }

  function handleNext() {
    if (selectedIndex === null) return

    const answer: Answer = {
      questionId: question.id,
      optionIndex: selectedIndex,
      traits: question.options[selectedIndex].traits,
    }

    const updatedAnswers = [...pendingAnswers, answer]

    if (!isLastQuestion) {
      setPendingAnswers(updatedAnswers)
      setCurrentQ((prev) => prev + 1)
      setSelectedIndex(null)
    } else {
      // Commit all answers for this lesson
      for (const a of updatedAnswers) {
        addAnswer(a)
      }
      nextLesson()

      if (isLastLesson) {
        router.push('/results')
      } else {
        router.push(`/lesson/${lessonOrder[lessonIndex + 1]}`)
      }
    }
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push(`/lesson/${id}`)}
              className="flex items-center gap-2 text-sm text-parchment-200/40 hover:text-parchment-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to lesson
            </button>
            <span className="axis-label">
              Lesson {lessonIndex + 1} of {lessonOrder.length}
            </span>
          </div>

          <ProgressBar
            current={currentQ + 1}
            total={lessonQuestions.length}
            label={`Reflecting on: ${lesson.title}`}
          />
        </div>

        {/* Question */}
        <QuestionCard
          question={question}
          questionNumber={currentQ + 1}
          totalQuestions={lessonQuestions.length}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />

        {/* Next button */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={selectedIndex === null}
            className={[
              'btn-primary',
              selectedIndex === null ? 'opacity-30 cursor-not-allowed' : '',
            ].join(' ')}
          >
            {isLastQuestion
              ? isLastLesson
                ? 'See my worldview profile'
                : 'Next lesson'
              : 'Next question'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  )
}
