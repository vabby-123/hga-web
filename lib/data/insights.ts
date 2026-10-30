// Sample editorial content. Replace with published HGA articles as they become available.
export interface Insight {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: "why-leadership-capability-compounds",
    category: "Leadership",
    title: "Why leadership capability compounds",
    excerpt:
      "Investment in leadership is often treated as an event. The organisations that benefit most treat it as a practice that builds over time.",
    date: "2026-08-12",
    readTime: "5 min read",
    body: [
      "Leadership development is frequently scheduled as an event: a programme, an offsite, a workshop. The value of these events is real, but it is rarely permanent unless what is learned is applied, reviewed and reinforced in daily work.",
      "Capability compounds when leaders have repeated opportunities to use new frameworks on real decisions, and when colleagues share a common language for discussing those decisions. Each cycle of application makes the next one easier and the standard higher.",
      "For organisations, the practical implication is to design leadership development as a sequence rather than a single moment: a clear starting challenge, structured practice, and deliberate follow-through.",
      "This is the logic behind our approach of Inspire, Inform and Transform. Begin with the leadership challenge, bring evidence and experience to the questions that matter, and build capability that lasts beyond the engagement.",
    ],
  },
  {
    slug: "certification-that-stands-up-to-scrutiny",
    category: "Certification",
    title: "Certification that stands up to scrutiny",
    excerpt:
      "A credential is only as valuable as the standard behind it. What makes a certification programme credible to employers, regulators and candidates.",
    date: "2026-07-22",
    readTime: "4 min read",
    body: [
      "A certificate is a signal, and signals are only useful when others trust them. That trust depends on the clarity of the standard, the fairness of the assessment, and the integrity of the records behind each credential.",
      "Credible programmes define competencies explicitly, assess applied judgement as well as knowledge, and maintain consistency across cohorts and instructors. They are also transparent about how they align with recognised international bodies and national frameworks.",
      "For employers, the question to ask is simple: what must a certified professional be able to do, and how do we know they can? Programmes that answer this clearly tend to be the ones that endure.",
    ],
  },
  {
    slug: "decision-quality-in-the-boardroom",
    category: "Advisory",
    title: "Decision quality in the boardroom",
    excerpt:
      "Good outcomes are not always the result of good decisions. A practical view on improving the quality of the decision itself.",
    date: "2026-06-30",
    readTime: "6 min read",
    body: [
      "Outcomes are shaped by many factors outside a board's control, which makes them an unreliable guide to decision quality. A better focus is the process: how the question was framed, what evidence was considered, and which alternatives were tested.",
      "Boards that make consistently sound decisions tend to share several habits. They separate the framing of a question from the choice of an answer. They ask for the strongest case against a proposal. And they record the reasoning behind significant decisions so that it can be reviewed later.",
      "None of this requires additional bureaucracy. It requires clarity about what the board is deciding, what it needs to know, and who is accountable for what follows.",
    ],
  },
  {
    slug: "brand-trust-in-a-digital-first-market",
    category: "Digital Branding",
    title: "Brand trust in a digital-first market",
    excerpt:
      "For most organisations the first impression is now digital. How consistency and clarity build credibility online.",
    date: "2026-06-04",
    readTime: "4 min read",
    body: [
      "Prospective clients, partners and talent typically form a view of an organisation before any conversation takes place. That view is built from a website, a profile, a document or a piece of content.",
      "Trust online is built through consistency and clarity: a position that is easy to understand, an identity that is applied carefully, and content that demonstrates expertise rather than asserting it.",
      "A useful test is to review your digital presence as a stranger would. Is it clear who you serve and what you do? Does the tone match the way you work in person? Where the answer is no, there is a straightforward opportunity to improve.",
    ],
  },
  {
    slug: "from-data-to-decision",
    category: "Analytics",
    title: "From data to decision: analytics leaders actually use",
    excerpt:
      "Dashboards are abundant; decisions informed by them are less common. Designing analytics around the decision rather than the data.",
    date: "2026-05-14",
    readTime: "5 min read",
    body: [
      "Many analytics initiatives begin with the data available and end with a dashboard that few people open. A more reliable starting point is the decision: who needs to decide what, how often, and with what information?",
      "Working backwards from the decision clarifies which metrics matter, what level of accuracy is needed, and where automation will save the most time. It also makes it easier to judge where AI adds value, for example in summarising large volumes of text or classifying records, and where simpler methods are sufficient.",
      "Trust is the final requirement. Leaders act on numbers they believe, which means definitions, sources and controls must be clear and consistently applied.",
    ],
  },
  {
    slug: "process-automation-without-losing-judgement",
    category: "Workflow",
    title: "Process automation without losing judgement",
    excerpt:
      "Automation should release people for work that requires judgement, not remove judgement from the process.",
    date: "2026-04-28",
    readTime: "4 min read",
    body: [
      "The strongest case for automation is not speed alone. It is that routine steps are performed consistently, leaving capable people to focus on exceptions, relationships and decisions that need human judgement.",
      "Effective workflow design therefore begins by mapping how work moves today and identifying which steps genuinely require judgement. Approvals, controls and accountability should be designed in from the start rather than added later.",
      "Where these principles are respected, automation tends to make processes more transparent as well as faster, which in turn makes them easier to audit and improve.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
