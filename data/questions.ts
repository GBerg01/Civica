import type { Question } from '@/types'

export const questions: Question[] = [
  // ─── Roman Republic ──────────────────────────────────────────────────────────
  {
    id: 'rr-1',
    lessonId: 'roman-republic',
    prompt:
      'The Gracchi brothers tried to redistribute land from wealthy senators to poor Roman citizens — and were killed for it. Looking back, were they heroes, reckless agitators, or something else?',
    options: [
      {
        text: 'Heroes. The wealthy had stolen public land; redistribution was justice.',
        traits: { collective: -3, statecraft: 3, change: -3, authority: -3 },
      },
      {
        text: 'Well-intentioned but reckless — reform through legal channels is safer than mob politics.',
        traits: { change: 2, morality: 3, authority: 1 },
      },
      {
        text: 'Dangerous populists. Stability matters more than redistribution.',
        traits: { justice: 4, change: 3, humanNature: 3 },
      },
      {
        text: 'The real tragedy was the Senate\'s violence, not the Gracchi\'s goals.',
        traits: { authority: -4, humanNature: 2, justice: -2 },
      },
    ],
  },
  {
    id: 'rr-2',
    lessonId: 'roman-republic',
    prompt:
      'Caesar crossed the Rubicon with his army, knowing it was illegal, because he feared political prosecution. Should he have submitted to the law — even if it meant personal destruction?',
    options: [
      {
        text: 'Yes. No individual is above the law, even a great general.',
        traits: { morality: 4, authority: -2, justice: 2 },
      },
      {
        text: 'No. The system was corrupt; his opponents had already broken the rules.',
        traits: { morality: -4, change: -2, authority: -3 },
      },
      {
        text: 'The real failure was Rome\'s institutions — which couldn\'t protect him legally.',
        traits: { humanNature: 2, knowledge: -2, justice: 1 },
      },
      {
        text: 'Power ultimately operates beyond law — Caesar was simply honest about that.',
        traits: { conflict: 4, humanNature: 4, morality: -3 },
      },
    ],
  },
  {
    id: 'rr-3',
    lessonId: 'roman-republic',
    prompt:
      'Rome\'s republic collapsed partly because its norms eroded — generals started marching on the city. Once such precedents are set, can they be reversed, or is institutional decay inevitable?',
    options: [
      {
        text: 'Reversible, but only with radical reform — sometimes you need a rupture to reset.',
        traits: { change: -3, morality: -2, knowledge: -3 },
      },
      {
        text: 'Norms can be rebuilt, but it requires collective will and generational patience.',
        traits: { collective: 2, knowledge: 2, change: 2 },
      },
      {
        text: 'Once power is shown to override law, the deterrent is gone — collapse follows.',
        traits: { humanNature: 4, justice: 3, morality: 2 },
      },
      {
        text: 'Institutions are fragile; what matters is concentrating power in trustworthy hands.',
        traits: { authority: 4, justice: 3, humanNature: 3 },
      },
    ],
  },
  {
    id: 'rr-4',
    lessonId: 'roman-republic',
    prompt:
      'Augustus ended a century of civil war and brought prosperity — at the cost of the republic. Was trading political freedom for peace and order a reasonable bargain?',
    options: [
      {
        text: 'Yes. Stability and prosperity are more valuable than abstract political forms.',
        traits: { justice: 4, morality: -3, change: 4 },
      },
      {
        text: 'No. Once liberty is surrendered for comfort, it is rarely recovered.',
        traits: { justice: -4, morality: 4, change: -2 },
      },
      {
        text: 'It depends on who benefited — peace for elites often means suppression for others.',
        traits: { collective: -2, morality: -2, statecraft: 2 },
      },
      {
        text: 'Historical inevitability — empires require emperors; the republic was an anomaly.',
        traits: { authority: 4, change: 4, knowledge: 3 },
      },
    ],
  },
  {
    id: 'rr-5',
    lessonId: 'roman-republic',
    prompt:
      'The Roman senators who killed Caesar believed they were saving the republic. They were wrong — their actions triggered the final civil wars. How do you judge well-intentioned people whose actions produce catastrophic results?',
    options: [
      {
        text: 'By results. Good intentions are irrelevant if the outcome is disaster.',
        traits: { morality: -4, knowledge: -2 },
      },
      {
        text: 'By intentions. They acted on principle; no one can foresee history.',
        traits: { morality: 4, humanNature: -2 },
      },
      {
        text: 'By both — intentions matter, but so does the prudence of the plan.',
        traits: { morality: 1, knowledge: 2 },
      },
      {
        text: 'History judges by consequences; moral credit is a luxury.',
        traits: { morality: -3, conflict: 3, knowledge: -2 },
      },
    ],
  },

  // ─── Mongol Empire ───────────────────────────────────────────────────────────
  {
    id: 'me-1',
    lessonId: 'mongol-empire',
    prompt:
      'The Mongols massacred millions in conquest, but the resulting Pax Mongolica enabled trade, cultural exchange, and scientific transfer across Eurasia. Can you weigh those two things against each other?',
    options: [
      {
        text: 'No. Mass killing cannot be justified by any subsequent benefit.',
        traits: { morality: 5, conflict: -4, identity: -2 },
      },
      {
        text: 'History\'s benefits are real even if their origins are horrific — we can acknowledge both.',
        traits: { morality: -2, knowledge: -2, conflict: 2 },
      },
      {
        text: 'The Pax Mongolica was for elites; the massacred populations got nothing.',
        traits: { collective: -3, morality: 3, statecraft: 3 },
      },
      {
        text: 'Empires are built on violence — that\'s the price of integration and order.',
        traits: { conflict: 5, morality: -4, justice: 3 },
      },
    ],
  },
  {
    id: 'me-2',
    lessonId: 'mongol-empire',
    prompt:
      'Genghis Khan offered cities a simple choice: submit and live, resist and be destroyed. Is it ever legitimate for a conquering power to impose total obedience as the price of survival?',
    options: [
      {
        text: 'Never. Coerced submission is not legitimacy, whatever the consequences.',
        traits: { morality: 4, authority: -4, justice: -3 },
      },
      {
        text: 'In practice, people accept such bargains — survival is the ultimate pragmatism.',
        traits: { morality: -3, conflict: 4, justice: 3 },
      },
      {
        text: 'It creates order, but never loyalty — always a foundation of future resistance.',
        traits: { humanNature: 2, authority: 2, knowledge: -2 },
      },
      {
        text: 'Power defines the terms of coexistence — this is how states have always formed.',
        traits: { conflict: 5, authority: 4, humanNature: 4 },
      },
    ],
  },
  {
    id: 'me-3',
    lessonId: 'mongol-empire',
    prompt:
      'The Mongols had no deep ideology — they were pragmatic rulers who adopted the religions and administrative practices of conquered peoples. Is that flexibility a virtue or a failure of identity?',
    options: [
      {
        text: 'A virtue. Pragmatic adaptability produces better governance than ideological rigidity.',
        traits: { identity: -3, morality: -2, knowledge: -3 },
      },
      {
        text: 'Neither — it was purely instrumental; they cared only about tribute and control.',
        traits: { morality: -2, conflict: 3, statecraft: 2 },
      },
      {
        text: 'A failure — without identity, empires fragment when the strong hand weakens.',
        traits: { identity: 4, knowledge: 4, collective: 3 },
      },
      {
        text: 'Admirable — a model for multicultural governance that many modern states fail to match.',
        traits: { identity: -4, collective: -2, knowledge: -2 },
      },
    ],
  },
  {
    id: 'me-4',
    lessonId: 'mongol-empire',
    prompt:
      'The Black Death, which killed perhaps a third of Europe\'s population, likely spread via the Mongol trade network. Should the benefits of global connectivity be weighed against the risks of shared catastrophe?',
    options: [
      {
        text: 'Yes — openness and trade are worth the risks; isolation just delays catastrophe.',
        traits: { identity: -3, statecraft: -3, conflict: -2 },
      },
      {
        text: 'Connection requires risk management — open networks need governance.',
        traits: { statecraft: 3, knowledge: -2, collective: 2 },
      },
      {
        text: 'Sovereignty and borders exist for good reason — not all connectivity is beneficial.',
        traits: { identity: 4, statecraft: 3, authority: 2 },
      },
      {
        text: 'The lesson is humility — human systems create consequences no one intends or foresees.',
        traits: { humanNature: 3, morality: 1, knowledge: 2 },
      },
    ],
  },

  // ─── French Revolution ───────────────────────────────────────────────────────
  {
    id: 'fr-1',
    lessonId: 'french-revolution',
    prompt:
      'The Revolution began with "Liberty, Equality, Fraternity" and ended with the guillotine and Napoleon. Does this trajectory reveal something true about the nature of revolutionary politics?',
    options: [
      {
        text: 'Yes — revolutions always consume their ideals; gradualism is the only safe path.',
        traits: { change: 4, humanNature: 4, knowledge: 4 },
      },
      {
        text: 'No — the Terror was a specific contingency, not an inevitable logic.',
        traits: { change: -3, knowledge: -3, morality: 2 },
      },
      {
        text: 'Revolutions spiral when they face existential threats — the wars explain the Terror.',
        traits: { conflict: 3, morality: -2, justice: 2 },
      },
      {
        text: 'The ideals were sound; the problem was giving power to men willing to kill for them.',
        traits: { humanNature: 3, authority: -2, morality: 3 },
      },
    ],
  },
  {
    id: 'fr-2',
    lessonId: 'french-revolution',
    prompt:
      'During the Terror, Robespierre justified executing suspected enemies of the republic before they could act — arguing that in a revolutionary crisis, waiting for proof was suicide. Was he right?',
    options: [
      {
        text: 'Never. Killing people for what they might do is the definition of tyranny.',
        traits: { morality: 5, justice: -4, humanNature: -3 },
      },
      {
        text: 'In an existential crisis, the security of the republic comes first.',
        traits: { morality: -4, justice: 4, conflict: 4 },
      },
      {
        text: 'Even if tactically justified, the precedent was catastrophic — it could never be contained.',
        traits: { morality: 2, humanNature: 3, change: 1 },
      },
      {
        text: 'He was wrong about the logic too — paranoid purges destroy the revolutionary coalition.',
        traits: { morality: 2, knowledge: -2, collective: 2 },
      },
    ],
  },
  {
    id: 'fr-3',
    lessonId: 'french-revolution',
    prompt:
      'The Revolution abolished feudalism and established legal equality — genuinely transformative achievements — through mass violence. How do you weigh those gains against the deaths?',
    options: [
      {
        text: 'The gains were worth it. Structural injustice causes more deaths over centuries.',
        traits: { morality: -4, change: -4, statecraft: 2 },
      },
      {
        text: 'Not worth it — the same gains came to other countries through gradual reform.',
        traits: { morality: 3, change: 4, knowledge: 3 },
      },
      {
        text: 'We can\'t know what gradual reform would have achieved; counterfactuals are dangerous.',
        traits: { knowledge: -1, morality: 1 },
      },
      {
        text: 'The violence was not incidental — it was what made the transformation irreversible.',
        traits: { morality: -3, change: -3, conflict: 3 },
      },
    ],
  },
  {
    id: 'fr-4',
    lessonId: 'french-revolution',
    prompt:
      'The French revolutionary armies spread Enlightenment ideals across Europe — but through invasion and occupation. Is liberation by force ever liberation?',
    options: [
      {
        text: 'Yes — if the ideas are genuinely liberating, the means matter less than the outcome.',
        traits: { morality: -3, identity: -3, conflict: 2 },
      },
      {
        text: 'No — self-determination means a people must choose their own path.',
        traits: { morality: 3, identity: 4, authority: -3 },
      },
      {
        text: 'Outcomes matter, but externally imposed liberation rarely sticks.',
        traits: { morality: 1, identity: 2, knowledge: 2 },
      },
      {
        text: 'It was imperialism dressed in idealism — the French benefited, others obeyed.',
        traits: { identity: 3, morality: 2, conflict: 2 },
      },
    ],
  },

  // ─── British Industrialization ────────────────────────────────────────────────
  {
    id: 'bi-1',
    lessonId: 'british-industrialization',
    prompt:
      'The Industrial Revolution raised average living standards enormously over time — but many who lived through it experienced brutal working conditions and falling real wages. Who should we focus on when evaluating historical change?',
    options: [
      {
        text: 'The long-run aggregate — the suffering was real but temporary; the gains are permanent.',
        traits: { morality: -3, statecraft: -3, collective: -2 },
      },
      {
        text: 'Those who bore the costs — they didn\'t consent to sacrifice for future generations.',
        traits: { morality: 4, collective: 3, statecraft: 3 },
      },
      {
        text: 'Both — history requires holding the tragedy and the progress simultaneously.',
        traits: { morality: 1, knowledge: 1 },
      },
      {
        text: 'The structural winners and losers — class dynamics explain everything else.',
        traits: { collective: 3, statecraft: 4, authority: -2 },
      },
    ],
  },
  {
    id: 'bi-2',
    lessonId: 'british-industrialization',
    prompt:
      'The Luddites smashed new machines to protect their livelihoods. Were they backwards resisters of progress, or rational actors defending their communities from economic devastation?',
    options: [
      {
        text: 'Backwards — progress cannot be stopped; resistance only delays adjustment.',
        traits: { change: -3, statecraft: -3, knowledge: -3 },
      },
      {
        text: 'Rational. They had no say in the transition that destroyed their way of life.',
        traits: { collective: 3, change: 3, statecraft: 3 },
      },
      {
        text: 'They were right about the harm, but wrong about the solution.',
        traits: { change: 1, statecraft: 2, knowledge: 2 },
      },
      {
        text: 'The real question is why no institution protected them — that\'s the policy failure.',
        traits: { statecraft: 4, collective: 2, authority: 2 },
      },
    ],
  },
  {
    id: 'bi-3',
    lessonId: 'british-industrialization',
    prompt:
      'Britain\'s industrial wealth was partly built on colonialism — raw materials from India, the Americas, and Africa. Does that origin change how we should assess the "achievement" of industrialization?',
    options: [
      {
        text: 'Yes — prosperity built on extraction and coercion is not an achievement to celebrate.',
        traits: { morality: 4, identity: -4, collective: 3 },
      },
      {
        text: 'Historical context matters, but we shouldn\'t use it to deny real technological progress.',
        traits: { morality: -1, knowledge: -2, identity: 1 },
      },
      {
        text: 'It explains global inequality today — the colonial origins have ongoing consequences.',
        traits: { morality: 3, identity: -3, statecraft: 3 },
      },
      {
        text: 'All great powers extract from weaker ones — judging by today\'s standards is anachronistic.',
        traits: { conflict: 4, morality: -3, identity: 3 },
      },
    ],
  },
  {
    id: 'bi-4',
    lessonId: 'british-industrialization',
    prompt:
      'The Industrial Revolution created the conditions for the climate crisis — CO₂ emissions from coal powered the modern world. Should those who started industrialization bear moral responsibility for consequences they could not foresee?',
    options: [
      {
        text: 'No — you can only be responsible for what you knew; they couldn\'t have known.',
        traits: { morality: -3, knowledge: 3, humanNature: -2 },
      },
      {
        text: 'Once known, responsibility kicked in — the blame lies with those who continued.',
        traits: { morality: 3, knowledge: 1, change: -2 },
      },
      {
        text: 'Collective systems create collective responsibility, even without individual intent.',
        traits: { collective: 4, morality: 2, statecraft: 3 },
      },
      {
        text: 'Moral responsibility requires agency — structural forces drive industrialization, not choice.',
        traits: { morality: -2, humanNature: 3, knowledge: -3 },
      },
    ],
  },
  {
    id: 'bi-5',
    lessonId: 'british-industrialization',
    prompt:
      'Child labor was widespread in early industrial Britain — and in many cases children\'s wages were necessary for family survival. Should we condemn the practice, the society, or the economic conditions that made it rational?',
    options: [
      {
        text: 'The practice — some things are wrong regardless of economic conditions.',
        traits: { morality: 5, humanNature: -2, knowledge: 3 },
      },
      {
        text: 'The conditions — poverty forced those choices; changing conditions changes behavior.',
        traits: { morality: -2, statecraft: 4, collective: 2 },
      },
      {
        text: 'The society — collective norms that permit child labor reflect failures of solidarity.',
        traits: { collective: 4, morality: 2, identity: 2 },
      },
      {
        text: 'All three — moral judgment, systemic analysis, and political reform all matter together.',
        traits: { morality: 2, statecraft: 2, collective: 1 },
      },
    ],
  },

  // ─── Cold War ─────────────────────────────────────────────────────────────────
  {
    id: 'cw-1',
    lessonId: 'cold-war',
    prompt:
      'Both superpowers in the Cold War claimed to represent universal values — freedom or equality — and used those claims to justify interventions worldwide. Can universalist ideologies ever be acted on without becoming imperialism?',
    options: [
      {
        text: 'Yes — universal values require universal defense; the problem is hypocrisy, not universalism.',
        traits: { identity: -4, morality: 3, conflict: 2 },
      },
      {
        text: 'No — "universal values" in practice always reflect the interests of the powerful.',
        traits: { identity: 3, morality: -2, conflict: 3 },
      },
      {
        text: 'Values can be universal while their imposition is illegitimate — spread through example, not force.',
        traits: { identity: -2, morality: 3, conflict: -2 },
      },
      {
        text: 'Universalism is the ideological mask of power — great powers always pursue interests.',
        traits: { conflict: 5, morality: -4, identity: 2 },
      },
    ],
  },
  {
    id: 'cw-2',
    lessonId: 'cold-war',
    prompt:
      'During the Cuban Missile Crisis, humanity came closer to nuclear war than at any other time. The crisis was resolved through a secret deal — the US removed missiles from Turkey in exchange for the Soviets removing theirs from Cuba. The public was told only that the Soviets backed down. Was that deception justified?',
    options: [
      {
        text: 'Yes — preventing nuclear war justifies almost anything, including deception.',
        traits: { morality: -4, justice: 4, conflict: -3 },
      },
      {
        text: 'No — democratic citizens deserve truth, especially when leaders risk their lives.',
        traits: { morality: 4, authority: -3, justice: -2 },
      },
      {
        text: 'Justified in the moment, but the norm it creates — lying about deals — is dangerous.',
        traits: { morality: 1, knowledge: 2, humanNature: 2 },
      },
      {
        text: 'Leaders sometimes must make unpopular decisions; that\'s the nature of statecraft.',
        traits: { authority: 3, conflict: 2, morality: -2 },
      },
    ],
  },
  {
    id: 'cw-3',
    lessonId: 'cold-war',
    prompt:
      'Both the US and USSR supported brutal dictatorships during the Cold War when those regimes served their strategic interests. How should we judge a democracy that undermines democracy elsewhere?',
    options: [
      {
        text: 'Harshly — it reveals that the rhetoric of freedom was always cover for power.',
        traits: { morality: 4, conflict: 2, identity: -3 },
      },
      {
        text: 'With context — survival against an existential ideological rival required hard choices.',
        traits: { morality: -3, conflict: 4, justice: 3 },
      },
      {
        text: 'The hypocrisy corrodes credibility — it ultimately weakened the Western position.',
        traits: { morality: 2, knowledge: -2, identity: -1 },
      },
      {
        text: 'States pursue interests, not values — expecting otherwise is naive.',
        traits: { conflict: 5, morality: -5, identity: 2 },
      },
    ],
  },
  {
    id: 'cw-4',
    lessonId: 'cold-war',
    prompt:
      'The Soviet collapse led Francis Fukuyama to declare the "End of History" — liberal democracy had won and would spread everywhere. That prediction has not held. What does its failure tell us?',
    options: [
      {
        text: 'That liberal democracy is not the universal endpoint of human political development.',
        traits: { knowledge: 3, authority: 2, identity: 3 },
      },
      {
        text: 'That the conditions for democracy were never put in place — it wasn\'t given a chance.',
        traits: { knowledge: -2, statecraft: 2, change: -2 },
      },
      {
        text: 'That progress is not linear — history oscillates, it doesn\'t end.',
        traits: { knowledge: 2, change: 1, humanNature: 2 },
      },
      {
        text: 'That ideology is always a rationalization — what drives history is power, not ideas.',
        traits: { conflict: 4, morality: -3, knowledge: -3 },
      },
    ],
  },

  // ─── Decolonization ───────────────────────────────────────────────────────────
  {
    id: 'dc-1',
    lessonId: 'decolonization',
    prompt:
      'Many former colonies won independence but remained economically dependent on their colonizers — buying their exports, borrowing from their banks, sending resources to their markets. Is that "independence"?',
    options: [
      {
        text: 'No — political independence without economic sovereignty is a formal shell.',
        traits: { statecraft: 4, identity: 3, change: -3 },
      },
      {
        text: 'Yes, in the most important sense — formal sovereignty enables future self-determination.',
        traits: { authority: -3, identity: 2, change: -1 },
      },
      {
        text: 'It\'s a transition — economic dependency is a legacy, not a permanent condition.',
        traits: { change: -2, statecraft: 2, knowledge: -2 },
      },
      {
        text: 'All nations are interdependent; framing dependency as unique to ex-colonies misses this.',
        traits: { identity: -2, statecraft: -2, conflict: -2 },
      },
    ],
  },
  {
    id: 'dc-2',
    lessonId: 'decolonization',
    prompt:
      'The partition of India in 1947 created two states along religious lines — and triggered one of the largest mass migrations in history, with nearly 2 million killed in communal violence. Was partition the right solution to the Hindu-Muslim divide?',
    options: [
      {
        text: 'No — drawing borders on religion institutionalizes division and inflames it.',
        traits: { identity: -4, morality: 3, collective: -3 },
      },
      {
        text: 'Given the circumstances, it may have been the least bad option.',
        traits: { morality: -2, conflict: 2, knowledge: 2 },
      },
      {
        text: 'The British are responsible — they accelerated the divide for decades of "divide and rule."',
        traits: { identity: 3, morality: 3, conflict: 2 },
      },
      {
        text: 'Shared identity is a precondition for shared governance — partition reflected reality.',
        traits: { identity: 4, collective: 3, authority: 2 },
      },
    ],
  },
  {
    id: 'dc-3',
    lessonId: 'decolonization',
    prompt:
      'Many newly independent African nations in the 1960s fell into military coups and authoritarian rule within years of independence. Should this be attributed to the legacies of colonialism, or to the choices of post-independence leaders?',
    options: [
      {
        text: 'Primarily colonialism — it left borders without nations, economies without industry.',
        traits: { identity: 3, statecraft: 3, change: -3 },
      },
      {
        text: 'Primarily leadership — structural legacies don\'t eliminate the agency of rulers.',
        traits: { humanNature: 3, morality: 2, authority: 2 },
      },
      {
        text: 'Both — structure shapes options; within those options, individuals make choices.',
        traits: { knowledge: 2, morality: 1 },
      },
      {
        text: 'Cold War interference — the superpowers destabilized any government that threatened their interests.',
        traits: { conflict: 3, statecraft: 2, identity: 2 },
      },
    ],
  },
  {
    id: 'dc-4',
    lessonId: 'decolonization',
    prompt:
      'The Bandung Conference of 1955 brought newly independent nations together under the banner of "non-alignment" — refusing to join either the US or Soviet bloc. Was non-alignment wise, or did it leave these nations vulnerable?',
    options: [
      {
        text: 'Wise — sovereignty means not being a pawn in someone else\'s conflict.',
        traits: { identity: 4, conflict: -3, authority: -2 },
      },
      {
        text: 'Idealistic — without a great-power patron, small nations are easy targets.',
        traits: { conflict: 4, identity: -2, authority: 3 },
      },
      {
        text: 'It was the right principle, poorly executed — it needed stronger collective institutions.',
        traits: { collective: 3, identity: 1, conflict: -2 },
      },
      {
        text: 'The Cold War made true non-alignment impossible — both sides ensured that.',
        traits: { conflict: 3, humanNature: 2, knowledge: -2 },
      },
    ],
  },
  {
    id: 'dc-5',
    lessonId: 'decolonization',
    prompt:
      'Today, debates about "decolonization" extend to culture, education, and knowledge — questioning whose stories and frameworks are centered in schools and institutions. Is this a legitimate extension of anti-colonial thought, or a misuse of the term?',
    options: [
      {
        text: 'Legitimate — colonialism was always about controlling minds as much as territory.',
        traits: { identity: 3, knowledge: 3, change: -3 },
      },
      {
        text: 'The term gets diluted — conflating political sovereignty with curriculum debates obscures both.',
        traits: { knowledge: 3, change: 2, morality: 2 },
      },
      {
        text: 'All knowledge systems embed power — questioning that is always legitimate.',
        traits: { authority: -3, knowledge: -3, change: -2 },
      },
      {
        text: 'Cultural debates are real but separate — mixing them with political decolonization muddies policy.',
        traits: { knowledge: 2, morality: 1, change: 1 },
      },
    ],
  },
]
