import type { Answer, Profile, TraitAxis, Archetype } from '@/types'
import { TRAIT_AXES } from '@/types'

// ─── Score Computation ────────────────────────────────────────────────────────

export function computeProfile(answers: Answer[]): Profile {
  const raw: Record<string, number> = {}
  for (const axis of TRAIT_AXES) raw[axis] = 0

  for (const answer of answers) {
    for (const [axis, delta] of Object.entries(answer.traits)) {
      raw[axis] = (raw[axis] ?? 0) + (delta as number)
    }
  }

  // Normalise to -10 … +10
  const profile = {} as Profile
  for (const axis of TRAIT_AXES) {
    profile[axis] = Math.max(-10, Math.min(10, raw[axis]))
  }
  return profile
}

// ─── Archetypes ───────────────────────────────────────────────────────────────

const ARCHETYPES: Archetype[] = [
  {
    name: 'The Classical Liberal',
    tagline: 'Freedom, reason, and the rule of law',
    description:
      'You believe in individual rights, limited government, and the power of reason to improve society. You are skeptical of concentrated authority and think free markets and civil liberties, properly protected, offer the best foundation for human flourishing. History, to you, is the slow and fragile expansion of freedom.',
    axes: { authority: 'low', collective: 'low', statecraft: 'low', justice: 'low', knowledge: 'low' },
  },
  {
    name: 'The Civic Traditionalist',
    tagline: 'Order, continuity, and the wisdom of the past',
    description:
      'You believe society is held together by institutions, customs, and shared identity that took centuries to build and can be destroyed in a generation. Change worries you less than the pace and violence of change. You see tradition not as inertia but as accumulated wisdom, and you trust inherited structures more than abstract ideals.',
    axes: { authority: 'high', change: 'high', knowledge: 'high', identity: 'high', humanNature: 'high' },
  },
  {
    name: 'The Cosmopolitan Idealist',
    tagline: 'Universal humanity above all borders',
    description:
      'You believe in human solidarity that transcends nations, religions, and cultures. You\'re skeptical of nationalist claims and drawn to international institutions, cooperation, and the idea that most conflict stems from structures rather than nature. History\'s arc, for you, bends slowly toward justice — but only if we work to bend it.',
    axes: { identity: 'low', conflict: 'low', collective: 'low', morality: 'low', statecraft: 'high' },
  },
  {
    name: 'The Realist Statesman',
    tagline: 'Power, interest, and the hard truths of governance',
    description:
      'You see international relations and domestic politics clearly: states pursue interests, not values, and leaders who ignore that reality court disaster. You\'re not cynical — you may genuinely value justice and freedom — but you believe naive idealism has caused as much harm as deliberate malice. In your view, responsible statecraft means accepting the world as it is.',
    axes: { conflict: 'high', morality: 'low', humanNature: 'high', justice: 'high', authority: 'high' },
  },
  {
    name: 'The Pragmatic Reformer',
    tagline: 'Changing the world without breaking it',
    description:
      'You want structural change — to reduce inequality, expand opportunity, and fix broken institutions — but you\'ve learned that revolutionary ruptures often leave things worse. You work within systems while pushing their boundaries, guided more by outcomes than ideology. History teaches you that durable progress is slow, coalitional, and fragile.',
    axes: { change: 'low', statecraft: 'high', collective: 'low', knowledge: 'low', morality: 'low' },
  },
  {
    name: 'The Revolutionary',
    tagline: 'The old order must fall',
    description:
      'You see existing institutions not as imperfect achievements to be improved, but as structures of domination to be dismantled. The status quo causes suffering that incremental reform cannot address. History\'s turning points — the moments when everything changed — are your reference points. You accept that transformation involves risk and conflict.',
    axes: { change: 'low', authority: 'low', collective: 'high', statecraft: 'high', humanNature: 'low' },
  },
  {
    name: 'The Moral Universalist',
    tagline: 'Right and wrong transcend context',
    description:
      'You believe some things are simply wrong, regardless of who does them or in what historical moment. You\'re drawn to deontological thinking — rights, duties, and rules that hold even when breaking them might produce better outcomes. History\'s atrocities confirm for you that ends-justify-means reasoning is among humanity\'s most dangerous habits.',
    axes: { morality: 'high', justice: 'low', conflict: 'low', humanNature: 'low' },
  },
  {
    name: 'The Structural Analyst',
    tagline: 'Systems, not individuals, shape history',
    description:
      'You look past personalities and dramatic events to the underlying economic, social, and institutional forces that determine what is possible. Leaders matter less than structures. Individual moral choices matter less than the systems that make certain choices rational. This isn\'t fatalism — it\'s a precondition for effective change.',
    axes: { collective: 'high', statecraft: 'high', knowledge: 'low', humanNature: 'high', morality: 'low' },
  },
]

// ─── Archetype Matching ───────────────────────────────────────────────────────

function scoreArchetype(profile: Profile, archetype: Archetype): number {
  let score = 0
  let weight = 0
  for (const [axis, direction] of Object.entries(archetype.axes) as [TraitAxis, 'low' | 'high'][]) {
    const val = profile[axis]
    score += direction === 'high' ? val : -val
    weight++
  }
  return weight > 0 ? score / weight : 0
}

export function getArchetype(profile: Profile): Archetype {
  let best = ARCHETYPES[0]
  let bestScore = scoreArchetype(profile, ARCHETYPES[0])

  for (const archetype of ARCHETYPES.slice(1)) {
    const s = scoreArchetype(profile, archetype)
    if (s > bestScore) {
      bestScore = s
      best = archetype
    }
  }
  return best
}

// ─── Axis Summary ─────────────────────────────────────────────────────────────

export function getAxisStrength(value: number): 'strong-low' | 'lean-low' | 'balanced' | 'lean-high' | 'strong-high' {
  if (value <= -5) return 'strong-low'
  if (value < -1) return 'lean-low'
  if (value > 4) return 'strong-high'
  if (value > 1) return 'lean-high'
  return 'balanced'
}
