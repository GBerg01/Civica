'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Answer } from '@/types'
import { lessonOrder } from '@/data/lessons'

interface SessionState {
  answers: Answer[]
  currentLessonIndex: number
  addAnswer: (answer: Answer) => void
  nextLesson: () => void
  reset: () => void
  isComplete: () => boolean
  currentLessonId: () => string
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      answers: [],
      currentLessonIndex: 0,

      addAnswer: (answer) =>
        set((state) => ({
          answers: [
            ...state.answers.filter((a) => a.questionId !== answer.questionId),
            answer,
          ],
        })),

      nextLesson: () =>
        set((state) => ({
          currentLessonIndex: Math.min(
            state.currentLessonIndex + 1,
            lessonOrder.length,
          ),
        })),

      reset: () => set({ answers: [], currentLessonIndex: 0 }),

      isComplete: () => get().currentLessonIndex >= lessonOrder.length,

      currentLessonId: () => lessonOrder[get().currentLessonIndex] ?? '',
    }),
    {
      name: 'civica-session',
    },
  ),
)
