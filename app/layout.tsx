import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Civica — Discover Your Historical Worldview',
  description:
    'Learn world history through concise lessons, then answer reflective questions to uncover how you see power, society, and human nature.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
