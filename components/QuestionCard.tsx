'use client'

import type { Question } from '@/types'

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedIndex: number | null
  onSelect: (index: number) => void
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="space-y-6">
      {/* Question counter */}
      <div className="axis-label">
        Question {questionNumber} of {totalQuestions}
      </div>

      {/* Prompt */}
      <h2 className="text-xl sm:text-2xl font-serif text-parchment-100 leading-snug">
        {question.prompt}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedIndex === i
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={[
                'w-full text-left p-4 rounded-xl border transition-all duration-150',
                'text-sm leading-relaxed',
                isSelected
                  ? 'border-parchment-400 bg-parchment-400/10 text-parchment-100'
                  : 'border-parchment-200/15 bg-navy-900/50 text-parchment-200/70 hover:border-parchment-400/40 hover:text-parchment-200',
              ].join(' ')}
            >
              <span className="flex gap-3 items-start">
                <span
                  className={[
                    'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors',
                    isSelected
                      ? 'border-parchment-400 bg-parchment-400'
                      : 'border-parchment-200/30',
                  ].join(' ')}
                >
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-navy-950" />
                  )}
                </span>
                {option.text}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
