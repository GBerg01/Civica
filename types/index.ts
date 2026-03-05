// ─── Worldview Axes ────────────────────────────────────────────────────────────
// Each axis runs from -10 (low end) to +10 (high end).
// A score near 0 means balanced or contextual.

export type TraitAxis =
  | 'authority'    // -10 Popular Sovereignty  ↔  +10 Traditional/Divine Authority
  | 'collective'   // -10 Individualism         ↔  +10 Collectivism
  | 'change'       // -10 Revolutionary         ↔  +10 Conservationist
  | 'statecraft'   // -10 Free Market           ↔  +10 State-Planned
  | 'conflict'     // -10 Idealist/Pacifist      ↔  +10 Realist/Power Politics
  | 'humanNature'  // -10 Inherently Good        ↔  +10 Inherently Flawed
  | 'justice'      // -10 Liberty-first          ↔  +10 Order/Security-first
  | 'identity'     // -10 Cosmopolitan           ↔  +10 Nationalist
  | 'morality'     // -10 Consequentialist        ↔  +10 Deontological
  | 'knowledge'    // -10 Rationalist             ↔  +10 Traditionalist

export const TRAIT_AXES: TraitAxis[] = [
  'authority',
  'collective',
  'change',
  'statecraft',
  'conflict',
  'humanNature',
  'justice',
  'identity',
  'morality',
  'knowledge',
]

export const AXIS_META: Record<
  TraitAxis,
  { label: string; lowLabel: string; highLabel: string; description: string }
> = {
  authority: {
    label: 'Legitimacy',
    lowLabel: 'Popular Sovereignty',
    highLabel: 'Traditional Authority',
    description: 'Where you believe legitimate power originates — the people or inherited/sacred hierarchy.',
  },
  collective: {
    label: 'Identity',
    lowLabel: 'Individualism',
    highLabel: 'Collectivism',
    description: 'Whether rights and duties originate in the self or the group.',
  },
  change: {
    label: 'Continuity',
    lowLabel: 'Revolutionary',
    highLabel: 'Conservationist',
    description: 'How you view the pace and nature of social change — rupture or gradual preservation.',
  },
  statecraft: {
    label: 'Economy',
    lowLabel: 'Free Market',
    highLabel: 'State-Planned',
    description: 'How you believe resources and industry should be organized.',
  },
  conflict: {
    label: 'World Order',
    lowLabel: 'Idealist / Pacifist',
    highLabel: 'Realist / Power Politics',
    description: 'How you see relations between powers — cooperation and law, or competition and force.',
  },
  humanNature: {
    label: 'Human Nature',
    lowLabel: 'Inherently Good',
    highLabel: 'Inherently Flawed',
    description: 'Your baseline view of people — trustworthy by default, or in need of constraint.',
  },
  justice: {
    label: 'Governance Goal',
    lowLabel: 'Liberty-first',
    highLabel: 'Order / Security-first',
    description: 'What you believe government is primarily for — maximizing freedom or ensuring stability.',
  },
  identity: {
    label: 'Belonging',
    lowLabel: 'Cosmopolitan',
    highLabel: 'Nationalist',
    description: 'The scope of your moral community — universal humanity or particular nation and culture.',
  },
  morality: {
    label: 'Ethics',
    lowLabel: 'Consequentialist',
    highLabel: 'Deontological',
    description: 'What grounds right action — outcomes and results, or fixed duties and rules.',
  },
  knowledge: {
    label: 'Epistemology',
    lowLabel: 'Rationalist',
    highLabel: 'Traditionalist',
    description: 'What should guide society — reason, data, and evidence, or custom and inherited wisdom.',
  },
}

// ─── Profile ───────────────────────────────────────────────────────────────────
export type Profile = Record<TraitAxis, number>

// ─── Answers ───────────────────────────────────────────────────────────────────
export type Answer = {
  questionId: string
  optionIndex: number
  traits: Partial<Profile>
}

// ─── Content ───────────────────────────────────────────────────────────────────
export type Lesson = {
  id: string
  title: string
  era: string
  region: string
  summary: string
  keyEvents: string[]
  significance: string
}

export type QuestionOption = {
  text: string
  traits: Partial<Profile>
}

export type Question = {
  id: string
  lessonId: string
  prompt: string
  options: QuestionOption[]
}

// ─── Archetype ─────────────────────────────────────────────────────────────────
export type Archetype = {
  name: string
  tagline: string
  description: string
  axes: Partial<Record<TraitAxis, 'low' | 'high'>>
}
