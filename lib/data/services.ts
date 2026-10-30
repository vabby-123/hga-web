export type ServiceIconKey = "award" | "graduation" | "briefcase" | "globe" | "chart" | "workflow";

export interface Service {
  slug: string;
  number: string;
  title: string;
  /** Short description used on cards. */
  description: string;
  /** Italic subtitle used in the page hero. */
  subtitle: string;
  icon: ServiceIconKey;
  isNew: boolean;
  metaDescription: string;
  overview: string[];
  capabilities: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  outcomes: string[];
  cta: { heading: string; body: string };
}

export const services: Service[] = [
  {
    slug: "professional-certification",
    number: "01",
    title: "Professional Certification",
    description: "Building recognised, industry-aligned credentials.",
    subtitle: "Building recognised, industry-aligned credentials.",
    icon: "award",
    isNew: false,
    metaDescription:
      "Professional certification programmes from Harvey Gill & Associates, aligned to recognised international bodies and Malaysia's HRD Corp framework.",
    overview: [
      "Certification gives individuals and organisations a credible, portable measure of capability. HGA designs and delivers professional certification programmes that are aligned to recognised international bodies and to Malaysia's HRD Corp framework.",
      "Each programme is built around a clear standard: what a professional should know, what they should be able to do, and how that is assessed fairly and consistently.",
    ],
    capabilities: [
      {
        title: "Programme design",
        description: "Certification pathways mapped to recognised competency standards and the needs of the sector.",
      },
      {
        title: "Curriculum & assessment",
        description: "Structured curricula with assessment methods that test applied judgement, not only recall.",
      },
      {
        title: "Delivery & facilitation",
        description: "Instructor-led delivery by practitioners with direct experience of the subject matter.",
      },
      {
        title: "Framework alignment",
        description: "Alignment with HRD Corp requirements and the expectations of international certifying bodies.",
      },
      {
        title: "Cohort management",
        description: "Enrolment, scheduling, records and candidate support handled with care and consistency.",
      },
      {
        title: "Ongoing development",
        description: "Pathways for continuing professional development beyond initial certification.",
      },
    ],
    approach: [
      { title: "Define the standard", description: "We agree the competencies, level and recognition the certification must achieve." },
      { title: "Design the pathway", description: "We build curriculum, assessment and delivery around that standard." },
      { title: "Certify with rigour", description: "We deliver, assess and record outcomes in a way that will withstand scrutiny." },
    ],
    outcomes: [
      "Credentials that are recognised and industry-aligned",
      "Consistent standards across teams and cohorts",
      "Clear pathways for professional progression",
      "Documented compliance with applicable frameworks",
    ],
    cta: {
      heading: "Discuss a certification programme",
      body: "Tell us the capability you need to recognise, and we will outline a pathway to get there.",
    },
  },
  {
    slug: "executive-training",
    number: "02",
    title: "Executive Training",
    description: "Sharpening leadership capability at every level.",
    subtitle: "Sharpening leadership capability at every level.",
    icon: "graduation",
    isNew: false,
    metaDescription:
      "Executive and leadership training from Harvey Gill & Associates, building capability from emerging managers to the boardroom.",
    overview: [
      "Leadership capability is built through practice, reflection and exposure to real decisions. HGA's executive training programmes are designed for leaders at every stage, from emerging managers to senior executives and directors.",
      "Our facilitators draw on decades of academic, boardroom and regulatory experience, and programmes are tailored to the context and challenges of each organisation.",
    ],
    capabilities: [
      {
        title: "Leadership development",
        description: "Programmes for emerging, middle and senior leaders, calibrated to role and responsibility.",
      },
      {
        title: "Governance & board effectiveness",
        description: "Practical training on the responsibilities, oversight and decision-making of boards and directors.",
      },
      {
        title: "Strategic decision-making",
        description: "Frameworks and case-based practice for making sound decisions under uncertainty.",
      },
      {
        title: "In-house programmes",
        description: "Bespoke workshops and programmes designed around your organisation's priorities.",
      },
      {
        title: "Open-enrolment sessions",
        description: "Scheduled executive sessions for participants from across organisations and sectors.",
      },
      {
        title: "Follow-through",
        description: "Reflection, application exercises and follow-up to embed learning into practice.",
      },
    ],
    approach: [
      { title: "Understand the challenge", description: "We start with the leadership questions your organisation is working on." },
      { title: "Design for application", description: "We build sessions around real cases, decisions and participants' own context." },
      { title: "Embed the learning", description: "We follow through so that capability shows up in day-to-day leadership." },
    ],
    outcomes: [
      "Stronger, more confident leadership at every level",
      "Shared language and frameworks for decision-making",
      "Improved board and executive effectiveness",
      "Learning that translates into changed practice",
    ],
    cta: {
      heading: "Discuss an executive programme",
      body: "Share the leadership challenge you are working on, and we will propose a programme to address it.",
    },
  },
  {
    slug: "business-advisory",
    number: "03",
    title: "Business Advisory",
    description: "Independent counsel for the decisions that matter most.",
    subtitle: "Independent counsel for the decisions that matter most.",
    icon: "briefcase",
    isNew: false,
    metaDescription:
      "Independent business advisory from Harvey Gill & Associates, drawing on direct experience advising national regulators and financial institutions.",
    overview: [
      "Important decisions benefit from objective, evidence-based counsel. HGA's advisory practice draws on direct experience advising national regulators and financial institutions.",
      "We work alongside boards and management teams to frame the question clearly, test the evidence, and reach decisions that can be implemented and measured.",
    ],
    capabilities: [
      {
        title: "Strategic advisory",
        description: "Independent perspective on strategic choices, priorities and organisational direction.",
      },
      {
        title: "Governance & regulatory advisory",
        description: "Support on governance frameworks and engagement with regulatory expectations.",
      },
      {
        title: "Organisational capability review",
        description: "Structured assessment of capability, structure and readiness for change.",
      },
      {
        title: "Decision support",
        description: "Evidence, analysis and options to support boards and management on specific decisions.",
      },
      {
        title: "Programme oversight",
        description: "Independent review of major initiatives to keep delivery aligned with intent.",
      },
      {
        title: "Capability transfer",
        description: "Working with your team so that the capability remains after the engagement ends.",
      },
    ],
    approach: [
      { title: "Frame the question", description: "We clarify the decision, its context and what success looks like." },
      { title: "Test the evidence", description: "We apply rigour to the facts, options and risks involved." },
      { title: "Support the decision", description: "We provide clear counsel and help you carry it through to outcomes." },
    ],
    outcomes: [
      "Decisions grounded in evidence and independent judgement",
      "Clearer governance and accountability",
      "Reduced risk in significant organisational change",
      "Capability retained within your team",
    ],
    cta: {
      heading: "Discuss an advisory engagement",
      body: "Tell us about the decision in front of you, and we will explain how we can help.",
    },
  },
  {
    slug: "digital-branding-advisory",
    number: "04",
    title: "Digital Branding Advisory",
    description: "A brand identity that earns trust in a digital-first market.",
    subtitle: "A brand identity that earns trust in a digital-first market.",
    icon: "globe",
    isNew: true,
    metaDescription:
      "Digital branding advisory from Harvey Gill & Associates: building brand identity and digital presence that earns trust in a digital-first market.",
    overview: [
      "For most organisations, the first impression is now a digital one. HGA's Digital Branding Advisory helps organisations define who they are, express it consistently, and build trust wherever their audiences meet them.",
      "Our approach is measured and strategic: clarity of positioning first, then identity, then the channels and content that carry it.",
    ],
    capabilities: [
      {
        title: "Brand positioning",
        description: "A clear articulation of what the organisation stands for and who it serves.",
      },
      {
        title: "Identity & voice",
        description: "Visual identity and tone of voice guidance that can be applied consistently.",
      },
      {
        title: "Digital presence review",
        description: "Assessment of websites, profiles and content against your brand and audience.",
      },
      {
        title: "Content strategy",
        description: "A practical plan for the content that builds credibility with your audiences.",
      },
      {
        title: "Brand governance",
        description: "Guidelines and processes that keep the brand consistent as the organisation grows.",
      },
      {
        title: "Team enablement",
        description: "Training for teams responsible for communications and brand delivery.",
      },
    ],
    approach: [
      { title: "Clarify the brand", description: "We establish positioning, audience and the reputation you want to build." },
      { title: "Shape the expression", description: "We develop identity, voice and digital presence to match." },
      { title: "Sustain consistency", description: "We equip your team to maintain the brand over time." },
    ],
    outcomes: [
      "A clear, credible brand position",
      "Consistent identity across digital channels",
      "Stronger trust with clients, partners and talent",
      "Teams equipped to manage the brand confidently",
    ],
    cta: {
      heading: "Discuss your brand",
      body: "Tell us about your organisation and audiences, and we will outline how we can help.",
    },
  },
  {
    slug: "automating-business-analytics",
    number: "05",
    title: "Automating Business Analytics",
    description: "Turning business data into clear, actionable decisions — powered by AI.",
    subtitle: "Turning business data into clear, actionable decisions — powered by AI.",
    icon: "chart",
    isNew: true,
    metaDescription:
      "Automating business analytics with Harvey Gill & Associates: turning business data into clear, actionable decisions, powered by AI.",
    overview: [
      "Most organisations hold more data than they can use. HGA's Automating Business Analytics service turns routine reporting and analysis into reliable, automated insight that leaders can act on.",
      "We begin with the decisions that matter, then work back to the data, the metrics and the automation required, applying AI where it adds clear value.",
    ],
    capabilities: [
      {
        title: "Metrics & decision framing",
        description: "Defining the measures that matter for the decisions your leaders actually make.",
      },
      {
        title: "Reporting automation",
        description: "Replacing manual, repetitive reporting with reliable, scheduled analysis.",
      },
      {
        title: "Dashboards & insight delivery",
        description: "Clear views of performance designed for the people who use them.",
      },
      {
        title: "AI-assisted analysis",
        description: "Applying AI to summarise, classify and surface patterns in business data.",
      },
      {
        title: "Data quality & governance",
        description: "Controls that keep data accurate, traceable and appropriately protected.",
      },
      {
        title: "Team enablement",
        description: "Building the skills to run, question and extend analytics in-house.",
      },
    ],
    approach: [
      { title: "Start with decisions", description: "We identify the decisions and questions the analytics must serve." },
      { title: "Build the pipeline", description: "We connect data, define the logic and automate the analysis." },
      { title: "Make it usable", description: "We deliver insight in a form your teams trust and act on." },
    ],
    outcomes: [
      "Less time spent on manual reporting",
      "Faster, better-informed decisions",
      "Trusted, traceable numbers across the organisation",
      "AI applied where it is useful and controlled",
    ],
    cta: {
      heading: "Discuss your analytics",
      body: "Tell us about the decisions and data you work with, and we will suggest where automation can help.",
    },
  },
  {
    slug: "smart-workflow-management",
    number: "06",
    title: "Smart Workflow Management",
    description: "Streamlining operations through intelligent process automation.",
    subtitle: "Streamlining operations through intelligent process automation.",
    icon: "workflow",
    isNew: true,
    metaDescription:
      "Smart workflow management from Harvey Gill & Associates: streamlining operations through intelligent process automation.",
    overview: [
      "Well-designed workflows let capable people focus on work that requires judgement. HGA's Smart Workflow Management service maps how work moves through your organisation and automates the steps that do not need a person.",
      "We keep people, controls and accountability at the centre, and introduce automation where it makes the process clearer, faster and more reliable.",
    ],
    capabilities: [
      {
        title: "Process mapping",
        description: "A clear picture of how work flows today, where it slows and where it breaks.",
      },
      {
        title: "Workflow design",
        description: "Redesigned processes with defined ownership, approvals and controls.",
      },
      {
        title: "Automation implementation",
        description: "Automating routine steps, hand-offs and notifications across your existing tools.",
      },
      {
        title: "Intelligent routing",
        description: "Using rules and AI to direct work to the right person or system.",
      },
      {
        title: "Monitoring & improvement",
        description: "Measures that show how workflows perform and where to improve them next.",
      },
      {
        title: "Change & adoption",
        description: "Training and support so that new ways of working are adopted and sustained.",
      },
    ],
    approach: [
      { title: "Map the work", description: "We document how work actually moves and where effort is lost." },
      { title: "Design the flow", description: "We simplify the process and decide what should be automated." },
      { title: "Automate and refine", description: "We implement, measure and improve alongside your team." },
    ],
    outcomes: [
      "Shorter cycle times and fewer hand-off errors",
      "Clear ownership and auditability of processes",
      "Capacity released for higher-value work",
      "Workflows that can be measured and improved",
    ],
    cta: {
      heading: "Discuss your workflows",
      body: "Tell us about the processes that slow your teams down, and we will show where to begin.",
    },
  },
];

export function getService(slug: string): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
