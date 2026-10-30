import "@fontsource-variable/source-serif-4/wght.css";
import "@fontsource-variable/source-serif-4/wght-italic.css";
import { HomeForm } from "@/components/HomeForm";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "Harvey Gill & Associates | Developing Leaders. Driving Impact.",
  description:
    "Strategic advisory and executive development for senior leaders. Boards, CEOs and leadership teams, led by founder Dr. Harvey Gill since 1987.",
  path: "/",
  absoluteTitle: true,
});

const WA_JADE = "https://wa.me/60122124007";
const WA_HARVEY = "https://wa.me/60122682417";

/* ---------- small helpers ---------- */
const wrap = "mx-auto w-full max-w-[1240px] px-6";
const serif = "font-hs";
const eyebrowDark = "text-[12px] font-semibold uppercase tracking-[0.16em] text-hga-goldd";
const eyebrowGold = "text-[12px] font-semibold uppercase tracking-[0.16em] text-hga-gold";
const h2 = `${serif} text-[clamp(2rem,3.3vw,2.75rem)] font-normal leading-[1.14] tracking-[-0.01em] text-hga-navy`;

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/images/${src}`} alt={alt} loading="lazy" className={className} />;
}

// Placeholder for photos / logos supplied later.
function Ph({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-[#dedbd3] p-2 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-[#8a877f] ${className}`}
    >
      {label}
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Harvey Gill & Associates">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-mark.png" alt="" className="h-[56px] w-auto" />
      <span className="leading-none">
        <span className={`${serif} block text-[20px] font-semibold tracking-[0.06em] ${light ? "text-white" : "text-hga-navy"}`}>
          HARVEY GILL
        </span>
        <span className="mt-[6px] block text-[11px] font-medium tracking-[0.2em] text-hga-goldd">& ASSOCIATES · EST. 1987</span>
      </span>
    </a>
  );
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] shrink-0 fill-[#25d366]" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.900 1.200 2.200 1.300.3.1.5.1.6-.1l.9-1.100c.2-.3.4-.2.700-.1l2 1c.3.1.5.2.5.3.1.1.1.7-.1 1.400Z" />
  </svg>
);

/* ---------- data ---------- */
const NAV = [
  ["Challenges we solve", "#challenges"],
  ["Dr. Harvey Gill", "#harvey-gill"],
  ["IPA Fellowship", "#ipa"],
  ["Case studies", "#cases"],
  ["Digital services", "#digital"],
  ["Reflections", "#reflections"],
] as const;

const STATS = [
  ["Since 1987", "Advising organisations in Malaysia and the region"],
  ["1,000+", "Leaders developed"],
  ["200+", "Organisations served"],
  ["15+", "Countries reached"],
] as const;

const CHALLENGES = [
  ["01 · Board & governance", "“Is our board truly governing, or simply meeting?”", "Board effectiveness reviews, governance frameworks aligned to the Malaysian Code on Corporate Governance, and director development that sharpens oversight of strategy and risk.", "Business Advisory · Executive Training"],
  ["02 · Sustainability & ESG", "“Are we ready for the new sustainability disclosure expectations?”", "Turning ESG from a reporting exercise into strategy: ISSB-aligned readiness under Malaysia's National Sustainability Reporting Framework, green and sustainable finance, and board-level ESG literacy.", "Business Advisory · Professional Certification"],
  ["03 · Financial judgement", "“Does my leadership team read the numbers the same way?”", "Finance for non-finance executives, capital allocation and performance measurement, so that strategic decisions rest on a shared and rigorous understanding of value.", "Executive Training · Business Advisory"],
  ["04 · Regulation & risk", "“Can we meet regulators' expectations with confidence?”", "Independent counsel on risk governance, compliance and controls, informed by first-hand experience advising Malaysia's capital-market and central-bank regulators.", "Business Advisory"],
  ["05 · Leadership bench", "“Who will lead this organisation in five years?”", "Building the next tier of leaders through executive development and recognised professional credentials, with HRD Corp-aligned programmes designed around your succession priorities.", "Executive Training · Professional Certification"],
  ["06 · Data-driven operations", "“Are our decisions running on evidence, or on instinct?”", "AI-assisted business analytics, intelligent workflow automation and a credible digital brand: practical tools that give leaders timely information and free teams for higher-value work.", "Analytics · Smart Workflow · Digital Branding"],
] as const;

const TAGS = ["Corporate governance", "Finance & accounting", "Banking & regulation", "Sustainability & green finance", "Strategic economics", "Supply chain"];

const CREDENTIALS = [
  "PhD in Management (2014)",
  "Association of Chartered Certified Accountants (ACCA)",
  "Fellow, Institute of Public Accountants (FIPA), Australia",
  "HRD Corp Certified Trainer",
  "Certified in Supply Chain Management",
];
const APPOINTMENTS = [
  "Has advised the Securities Commission Malaysia and Bank Negara Malaysia",
  "Associate Professor, Malaysia University of Science and Technology (MUST)",
  "Former Dean, MUST",
  "International Advisor, University of Management and Technology (UMT), Lahore",
  "Visiting appointments in Vietnam and the Philippines",
];
const PROBLEMS = [
  "Revealing that a recruitment firm's true profit margins were about one-third of management's estimates, prompting a rebalanced business portfolio",
  "Designing customised KPIs for an FMCG distributor, improving accuracy and on-time delivery and cutting costs by nearly 24% in year one",
  "Equipping managers at a large listed company to build their own reporting system, linked to financial and operational KPIs",
  "Training more than 60 Securities Commission Malaysia officers to evaluate new listings, valuations and prospectuses, with systems in use since 2016, followed by budget-target consultancy and a geopolitical risk framework for the regulator",
];

const STEPS = [
  ["01 · Inspire", "Diagnose the real challenge", "A confidential conversation with you and your leadership team to define the decision, the risk and what success must look like."],
  ["02 · Inform", "Advise with evidence", "Independent, evidence-based counsel drawing on academic depth, boardroom practice and regulatory experience, free of vendor conflicts."],
  ["03 · Transform", "Build capability that lasts", "Executive development, recognised credentials and practical digital tools, so your people carry the change forward after we step back."],
] as const;

const CASES = [
  { tag: "01 · Talent recruitment firm", big: "≈ ⅓", cap: "Actual profit margins, measured against management's original estimates", title: "Improving profitability analysis and business portfolio decisions", challenge: "Despite strong business performance, management had overestimated the firm's profit margins and wanted a financial recording system with integrated business analytics.", did: "Applied HGA's analytical tools to the firm's activities, revealing that actual margins were approximately one-third of the initial estimates.", outcome: "The company rebalanced its business portfolio to reflect the true profitability of each activity." },
  { tag: "02 · FMCG retail distributor", big: "≈ 24%", cap: "Cost improvement in the first year of KPI implementation", title: "Strengthening performance management through customised KPIs", challenge: "Managing multiple suppliers and distribution channels made consistent performance across the organisation difficult to achieve.", did: "Through consultation with Dr. Harvey Gill, the company identified the need for KPIs. HGA then designed customised indicators and supported their implementation.", outcome: "Significantly improved accuracy and on-time delivery, producing a cost improvement of nearly 24% in the first year. Structured feedback mechanisms now monitor results and guide management decisions." },
  { tag: "03 · Large listed company", big: "Owned reporting", cap: "Managers built their own system, linked to financial and operational KPIs", title: "Aligning management reporting with financial and operational KPIs", challenge: "Several managers took part in budgeting only superficially, partly because they lacked a clear grasp of financial terminology and reporting requirements.", did: "Comprehensive training and practical workshops guided managers and department heads to develop their own reporting system.", outcome: "A structured reporting and feedback process now supports more meaningful participation in budgeting and performance management." },
  { tag: "04 · Securities Commission Malaysia", big: "60+ officers", cap: "Trained in a 12-day programme, with the systems in use since 2016", title: "A long-term capability partnership with Malaysia's capital-market regulator", challenge: "Officers needed the skills to evaluate new listings and valuations, read the details of prospectuses closely, and ask the relevant questions.", did: "Designed and delivered a 12-day intensive training programme in four parts, and developed several financial models to support the officers' work.", outcome: "More than 60 officers were trained, and they have applied the systems and financial models in their work since 2016.", extra: ["Detailed consultancy for the Financial Planning Unit, bringing clarity to budget targets", "Training for the Risk Management Unit to build a strategic-analysis framework for how geopolitics affects stock market valuations globally"] },
] as const;

const FACULTY = [
  { name: "Prof. Dr. Premkumar Rajagopal", img: "premkumar.jpg", role: "Strategic Partner, Business Advisory & Training in Sustainable Supply Chain · CEO, Malaysia University of Science and Technology", body: ["A business leader with over two decades in senior executive roles. Since becoming CEO of MUST in 2017, he has grown the university from 347 to 4,200 students in six years, with a 19.6% net profit margin after tax in the last fiscal year.", "Previously spent 12 years as a senior manager at Intel, leading global supply chain initiatives in Santa Clara and Penang."], tags: "Growth strategy · Supply chain resilience · Sustainability & circular economy · Innovation culture" },
  { name: "Prof. Dr. Shaheen Mansori", img: "shaheen.jpg", role: "Senior Consultant · HRD Corp Certified Trainer", body: ["An executive trainer and strategic advisor with over 15 years in business transformation, strategy, market intelligence and leadership development. Alongside his leadership role at MUST, he works with senior management teams on growth, innovation and capability building.", "Known for translating strategic priorities into practical actions, measurable outcomes and stronger organisational alignment."], tags: "ESG & SDG alignment · Governance · Digital transformation · Generative AI · OKRs · Data-driven decisions" },
  { name: "Assoc. Prof. Dr. Khashayar Yazdani", img: "khashayar.jpg", role: "Trainer, Business Analytics · Microsoft Certified Trainer", body: ["A business analytics and digital transformation specialist with over 15 years of teaching and consultancy across Malaysia and international platforms. He is Head of Postgraduate Studies at MUST, where he built AI-enabled dashboards and workflow systems using Power BI and Power Platform.", "Runs corporate programmes such as Business Analytics for Decision Makers and Mastering Power BI. Author of Business Analytics with Power BI (2026), and Microsoft-certified Power BI Data Analyst."], tags: "Power BI & Excel analytics · AI & automation · Power Platform · Dashboards for decision makers" },
  { name: "Dr. Durairaj Veeraiyah", img: "", role: "Senior Consultant & Trainer, Supply Chain & Operations · HRD Corp Accredited Trainer", body: ["Over three decades in supply chain leadership with Goodyear Malaysia and BASF, including Regional Head of Strategic Supply Chain Management for Asia Pacific in Hong Kong and Singapore.", "As Asia Pacific Project Lead for BASF's OECD BEPS business-model transformation, he restructured 17 legal entities in 12 countries, with sales of €4.4 billion. He holds a PhD, an MBA from the University of Bath and Harvard Business School's ASEAN Senior Manager Development Program, and coaches executives at Asia School of Business with MIT Sloan."], tags: "Supply chain strategy · Procurement & inventory · Business model transformation · CPIM · CSCP · CMILT" },
] as const;

const CORE = [
  ["Business Advisory", "Independent counsel for the decisions that matter most."],
  ["Executive Training", "Leadership capability for boards, executives and emerging leaders."],
  ["Professional Certification", "Recognised, industry-aligned credentials."],
] as const;
const DIGITAL_SHORT = [
  ["Automating Business Analytics", "Business data turned into clear decisions, with AI."],
  ["Smart Workflow Management", "Operations streamlined through intelligent automation."],
  ["Digital Branding Advisory", "A brand identity that earns trust in a digital-first market."],
] as const;

const DIGITAL = [
  { n: "01 · Analytics", t: "Automating Business Analytics", sub: "Routine reporting turned into automated insight leaders can act on.", d: "We start with the decisions that matter, then work back to the data, metrics and automation needed, applying AI where it adds clear value.", inc: ["Metrics and decision framing", "Reporting automation", "Dashboards and insight delivery", "AI-assisted analysis", "Data quality and governance", "Team enablement"], out: ["Less time spent on manual reporting", "Faster, better-informed decisions", "Trusted, traceable numbers across the organisation"] },
  { n: "02 · Workflow", t: "Smart Workflow Management", sub: "Operations streamlined through intelligent process automation.", d: "We map how work moves through your organisation and automate the steps that don't need a person, making processes clearer, faster and more reliable.", inc: ["Process mapping", "Workflow design with clear ownership and controls", "Automation implementation", "Intelligent routing", "Monitoring and improvement", "Change and adoption support"], out: ["Shorter cycle times, fewer hand-off errors", "Clear ownership and auditable processes", "Capacity freed for higher-value work"] },
  { n: "03 · Brand", t: "Digital Branding Advisory", sub: "A brand identity that earns trust in a digital-first market.", d: "We help organisations build a clear, credible and consistent digital presence, from brand identity and website experience to social media content, campaigns and performance monitoring.", inc: ["Brand positioning", "Identity and voice", "Digital presence review", "Content strategy", "Brand governance", "Team enablement"], out: ["A clear, credible brand position", "Consistent identity across digital channels", "Stronger trust with clients, partners and talent"] },
] as const;

const REFLECT = [
  ["I · 1970", "The Earth is life", "James Lovelock proposed that the Earth is not a dead rock with life on top of it, but a living system that regulates its own atmosphere, oceans, soil and temperature, much as the body regulates its own."],
  ["II · 4.5 billion years", "A planet that corrects itself", "It has run its own thermostat without a manual, survived five mass extinctions, and turned molten rock into rainforests and coral reefs. It recovered every time."],
  ["III · The last 200 years", "A resource, not a relative", "We extracted, mined and burned, and called it progress. When the planet began to run a fever, we debated whether the fever was real."],
  ["IV · The real question", "The planet is not fragile. We are.", "The question was never whether the Earth can survive what we are doing. It is whether we can survive what the Earth will do in response."],
] as const;

const FOOT_NAV = [
  ["Challenges", "#challenges"],
  ["Dr. Harvey Gill", "#harvey-gill"],
  ["IPA Fellowship", "#ipa"],
  ["Digital services", "#digital"],
  ["Reflections on Sustainability", "#reflections"],
  ["LinkedIn", "#"],
  ["Facebook", "#"],
] as const;

function Bullets({ items, cls = "" }: { items: readonly string[]; cls?: string }) {
  return (
    <ul className={`list-disc space-y-[6px] pl-[18px] marker:text-[#8a8f98] ${cls}`}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="bg-hga-page text-hga-navy">
      {/* ---------- Header ---------- */}
      <header className="border-b-2 border-hga-gold bg-white">
        <div className={`${wrap} pb-[14px] pt-[14px]`}>
          <Logo />
          <nav aria-label="Primary" className="mt-4 flex flex-wrap items-center gap-x-[26px] gap-y-3 text-[15px] font-medium text-hga-navy">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="hover:text-hga-goldd">
                {l}
              </a>
            ))}
            <a href="#contact" className="bg-hga-navy px-5 py-[14px] text-[15px] font-semibold text-white">
              Book a conversation
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="bg-hga-navy text-white">
          <div className={`${wrap} grid gap-14 py-[90px] lg:grid-cols-[1fr_405px] lg:gap-[90px]`}>
            <div className="lg:pt-[2px]">
              <p className={eyebrowGold}>Strategic advisory & executive development for senior leaders</p>
              <h1 className={`${serif} mt-[32px] text-[clamp(3rem,5.3vw,4.75rem)] font-normal leading-[1.04] tracking-[-0.015em] text-white`}>
                Developing Leaders.
                <br />
                Driving Impact.
              </h1>
              <p className="mt-9 max-w-[670px] text-[19px] leading-[1.7] text-[#e6e8ed]">
                We help boards, CEOs and senior leadership teams make sounder decisions on governance, finance and sustainability, then build the
                leadership capability to carry those decisions through. Every engagement is shaped and led by our founder, Dr. Harvey Gill.
              </p>
              <div className="mt-10 flex flex-wrap gap-[14px]">
                <a href="#contact" className="flex h-[59px] items-center gap-4 bg-hga-gold px-[26px] text-[17px] font-semibold text-hga-navy">
                  Discuss a leadership challenge <span aria-hidden>→</span>
                </a>
                <a href={WA_JADE} className="flex h-[59px] items-center gap-3 border border-[#25d366]/70 px-7 text-[17px] font-semibold text-white">
                  <WaIcon /> WhatsApp us
                </a>
              </div>
            </div>

            <aside className="self-start border border-[#243650] bg-hga-panel p-8" aria-label="Who leads your engagement">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#c6ccd6]">Who leads your engagement</p>
              <div className="mt-6 flex items-center gap-4">
                <Img src="harvey-portrait.jpg" alt="Dr. Harvey Gill" className="h-[85px] w-[85px] shrink-0 rounded-full border-[3px] border-hga-gold object-cover object-top" />
                <div>
                  <p className={`${serif} text-[20px] font-semibold text-white`}>Dr. Harvey Gill</p>
                  <p className="mt-1 text-[15.5px] text-[#c6ccd6]">Founder & Principal Consultant</p>
                </div>
              </div>
              <ul className="mt-6 text-[15.5px] leading-[1.55] text-[#e6e8ed]">
                {["ACCA · FIPA Fellow · PhD in Management", "Has advised the Securities Commission Malaysia and Bank Negara Malaysia", "Associate Professor, MUST/KEDGE Euro-ASEAN MBA"].map((t) => (
                  <li key={t} className="border-t border-[#243650] py-3 first:border-t-0">
                    {t}
                  </li>
                ))}
              </ul>
              <a href="#harvey-gill" className="mt-2 inline-block text-[15.5px] font-semibold text-hga-gold">
                Read full profile →
              </a>
            </aside>
          </div>
        </section>

        {/* ---------- Stats ---------- */}
        <section className="border-b border-hga-line bg-white">
          <div className={`${wrap} grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1.25fr]`}>
            {STATS.map(([n, l]) => (
              <div key={n}>
                <p className={`${serif} text-[34px] leading-none text-hga-navy`}>{n}</p>
                <p className="mt-3 max-w-[200px] text-[14px] leading-[1.5] text-hga-gray">{l}</p>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <Ph label="HRD Corp" className="h-[54px] w-[54px] shrink-0 rounded-full !p-0 text-[9px]" />
              <p className="text-[12.5px] leading-[1.45] text-hga-gray">HRD Corp registered training provider · programmes are claimable</p>
            </div>
          </div>
        </section>

        {/* ---------- Challenges ---------- */}
        <section id="challenges" className="scroll-mt-4 bg-hga-page py-[84px]">
          <div className={wrap}>
            <p className={eyebrowDark}>The questions on your agenda</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <h2 className={`${h2} max-w-[520px]`}>We start with the challenge in front of you, not a programme catalogue.</h2>
              <p className="max-w-[420px] text-[15.5px] leading-[1.7] text-hga-gray lg:justify-self-end">
                These are the situations senior leaders most often bring to us. Each one draws on the right mix of advice, executive development and practical
                tools.
              </p>
            </div>
            <div className="mt-[34px] grid border-l border-t border-hga-line bg-white md:grid-cols-2 lg:grid-cols-3">
              {CHALLENGES.map(([k, q, d, t]) => (
                <article key={k} className="flex flex-col border-b border-r border-hga-line p-[23px]">
                  <p className={`${serif} text-[13px] font-semibold text-hga-goldd`}>{k}</p>
                  <h3 className={`${serif} mt-[14px] text-[23px] font-normal leading-[1.25] text-hga-navy`}>{q}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.65] text-hga-gray">{d}</p>
                  <p className="mt-6 border-t border-hga-line pt-4 text-[12.5px] text-hga-gray">{t}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- What kind of firm ---------- */}
        <section className="bg-hga-beige py-[72px]">
          <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start`}>
            <div>
              <p className={eyebrowDark}>What kind of firm we are</p>
              <h2 className={`${h2} mt-5 max-w-[470px]`}>A trusted partner earns the right to advise. A training provider sells programmes.</h2>
              <p className="mt-5 max-w-[470px] text-[15.5px] leading-[1.7] text-hga-gray">
                Our core is governance, finance and leadership. Our certification, executive training and digital capabilities exist to serve that core, so you
                work with one senior team that understands both the decision and the people who must deliver it.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:mt-1">
              <div className="bg-white p-[18px]">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-hga-gray">A conventional provider</p>
                <Bullets items={["Starts with its course list", "Measures attendance", "Delivered by whoever is available"]} cls="mt-4 text-[14px] leading-[1.45] text-hga-gray" />
              </div>
              <div className="bg-hga-navy p-[18px] text-white">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-hga-gold">Harvey Gill & Associates</p>
                <Bullets
                  items={["Starts with your organisational challenge", "Measures decisions improved and capability built", "Led by a senior expert with boardroom and regulatory experience"]}
                  cls="mt-4 text-[14px] leading-[1.45] !marker:text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Dr. Harvey Gill ---------- */}
        <section id="harvey-gill" className="scroll-mt-4 bg-white py-[84px]">
          <div className={`${wrap} grid gap-10 lg:grid-cols-[232px_1fr] lg:gap-[46px]`}>
            <div>
              <Img src="harvey-session.jpg" alt="Dr. Harvey Gill leading an executive session" className="aspect-[232/272] w-full border-b-[3px] border-hga-gold object-cover object-top" />
              <p className="mt-3 text-[12px] text-hga-gray">Dr. Harvey Gill leading an executive session</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span key={t} className="border border-hga-line bg-white px-3 py-[6px] text-[12.5px] text-hga-navy">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className={eyebrowDark}>The senior expert behind every engagement</p>
              <h2 className={`${serif} mt-4 text-[40px] font-normal leading-[1.1] text-hga-navy`}>Dr. Harvey Gill</h2>
              <p className="mt-4 text-[15.5px] text-hga-gray">Assoc. Prof. Dr. Harwindar Singh · Founder & Principal Consultant</p>
              <p className={`${serif} mt-6 text-[20px] leading-[1.5] text-hga-navy`}>
                Nearly forty years of consulting practice, senior academic standing and professional accounting credentials, all applied to one purpose: helping
                organisations make sound decisions and build the capability to sustain them.
              </p>
              <div className="mt-5 space-y-5 text-[15px] leading-[1.7] text-hga-gray">
                <p>
                  Since founding Harvey Gill & Associates in 1987, Dr. Harvey Gill has advised boards, business owners and senior management on corporate strategy,
                  financial management, governance and sustainability, and digital transformation. His engagements range from strategic and business planning and
                  financial performance improvement to board advisory aligned to the Malaysian Code on Corporate Governance, ESG strategy, and Malaysian regulatory
                  transitions such as e-Invoicing and SST. His advisory experience includes work for the Securities Commission Malaysia and Bank Negara Malaysia.
                </p>
                <p>
                  As an HRD Corp Certified Trainer, he designs practical, case-driven executive programmes in finance, business planning, risk and leadership, built
                  on Malaysian and regional cases and updated with an applied AI lens. He has trained leaders across the corporate, GLC and public sectors, and
                  teaches Corporate Governance & Sustainability, Strategic Economic Thinking and Finance on the MUST/KEDGE Euro-ASEAN Blended MBA.
                </p>
              </div>
              <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
                {[
                  ["Credentials", CREDENTIALS],
                  ["Appointments & advisory", APPOINTMENTS],
                ].map(([title, items]) => (
                  <div key={title as string}>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-hga-navy">{title as string}</p>
                    <ul className="mt-2">
                      {(items as string[]).map((i) => (
                        <li key={i} className="border-t border-hga-line py-[7px] text-[13px] leading-[1.5] text-hga-gray">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-[#f5f4ef] p-[18px]">
                <p className={`${serif} text-[16.5px] font-semibold text-hga-navy`}>Senior-level problems he has helped organisations address</p>
                <Bullets items={PROBLEMS} cls="mt-4 text-[13.5px] leading-[1.55] text-hga-gray" />
                <a href="#cases" className="mt-5 inline-block text-[13.5px] font-semibold text-hga-navy">
                  Read the case studies →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- IPA ---------- */}
        <section id="ipa" className="scroll-mt-4 bg-hga-beige py-[68px]">
          <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_1fr]`}>
            <div>
              <Ph label="Photo: Dr. Harvey Gill with the IPA team" className="aspect-[381/287] w-full border-b-[3px] border-hga-gold" />
              <p className="mt-3 text-[12px] text-hga-gray">Dr. Harvey Gill with the IPA team at the Institute of Public Accountants</p>
            </div>
            <div>
              <p className={eyebrowDark}>Partnership · Institute of Public Accountants (IPA)</p>
              <h2 className={`${h2} mt-5`}>Professional recognition for the experience your senior finance leaders already have.</h2>
              <p className="mt-5 text-[15.5px] leading-[1.65] text-hga-navy">
                Harvey Gill & Associates collaborates with the Institute of Public Accountants to offer senior managers in finance and accounting a pathway to IPA
                fellowship and professional certification, based on the accreditation of prior experiential learning (APEL).
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-hga-gray">
                Instead of starting again from the beginning, experienced professionals are recognised for what they have already achieved, earning an
                internationally recognised credential that matches their seniority and strengthens the credibility of the finance function.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  ["Who it is for", "Senior managers with substantial experience in finance and accounting"],
                  ["What it leads to", "IPA fellowship and certification through APEL"],
                  ["HGA's role", "Guidance led by Dr. Harvey Gill, himself a Fellow of the IPA"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-white p-[14px]">
                    <p className={`${eyebrowDark} !text-[11px]`}>{k}</p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-hga-navy">{v}</p>
                  </div>
                ))}
              </div>
              <a href={WA_JADE} className="mt-5 inline-flex h-[54px] items-center gap-3 bg-hga-navy px-6 text-[14.5px] font-semibold text-white">
                <WaIcon /> Check your eligibility on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ---------- How we work ---------- */}
        <section className="bg-hga-navy py-[84px] text-white">
          <div className={wrap}>
            <p className={eyebrowGold}>How we work · Inspire, Inform, Transform</p>
            <h2 className={`${h2} mt-5 max-w-[520px] !text-white`}>From the leadership question to lasting capability.</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map(([k, t, d]) => (
                <div key={k} className="border-t border-hga-gold pt-5">
                  <p className={eyebrowGold}>{k}</p>
                  <h3 className={`${serif} mt-4 text-[24px] font-normal text-white`}>{t}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-[#e6e8ed]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Case studies ---------- */}
        <section id="cases" className="scroll-mt-4 bg-hga-page py-[84px]">
          <div className={wrap}>
            <p className={eyebrowDark}>Case studies</p>
            <h2 className={`${h2} mt-5`}>Results senior leaders can point to.</h2>
            <p className="mt-4 max-w-[540px] text-[15.5px] leading-[1.65] text-hga-gray">
              Four engagements where clearer financial insight changed how leadership teams and regulators decide, measure and report.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {CASES.map((c) => (
                <article key={c.tag} className="border border-hga-line bg-white">
                  <div className="bg-hga-navy px-[23px] py-5">
                    <p className={`${eyebrowGold} !text-[11.5px]`}>{c.tag}</p>
                    <p className={`${serif} mt-3 text-[34px] leading-none text-white`}>{c.big}</p>
                    <p className="mt-3 text-[13.5px] text-[#e6e8ed]">{c.cap}</p>
                  </div>
                  <div className="p-[23px]">
                    <h3 className={`${serif} text-[21px] font-semibold leading-[1.3] text-hga-navy`}>{c.title}</h3>
                    {(
                      [
                        ["Challenge", c.challenge],
                        ["What we did", c.did],
                      ] as const
                    ).map(([k, v]) => (
                      <div key={k} className="mt-4">
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-hga-gray">{k}</p>
                        <p className="mt-1 text-[14.5px] leading-[1.65] text-hga-gray">{v}</p>
                      </div>
                    ))}
                    <div className="mt-4 border-t border-hga-line pt-4">
                      <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-hga-goldd">Outcome</p>
                      <p className="mt-1 text-[14.5px] leading-[1.6] text-hga-navy">{c.outcome}</p>
                    </div>
                    {"extra" in c && (
                      <div className="mt-4 border-t border-hga-line pt-4">
                        <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-hga-gray">Continuing engagement</p>
                        <Bullets items={c.extra} cls="mt-2 text-[14px] leading-[1.55] text-hga-gray" />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Faculty ---------- */}
        <section className="bg-hga-page pb-[84px]">
          <div className={wrap}>
            <p className={eyebrowDark}>Senior faculty & strategic partners</p>
            <h2 className={`${h2} mt-5`}>Specialists chosen for the challenge, not the timetable.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {FACULTY.map((f) => (
                <article key={f.name} className="flex gap-5 border border-hga-line bg-white p-5">
                  {f.img ? <Img src={f.img} alt={f.name} className="h-[108px] w-[90px] shrink-0 object-cover object-top" /> : <Ph label="Photo" className="h-[108px] w-[90px] shrink-0 !p-0" />}
                  <div>
                    <h3 className={`${serif} text-[21px] font-semibold leading-[1.2] text-hga-navy`}>{f.name}</h3>
                    <p className="mt-2 text-[12.5px] font-semibold leading-[1.45] text-hga-goldd">{f.role}</p>
                    {f.body.map((b) => (
                      <p key={b} className="mt-3 text-[13.5px] leading-[1.6] text-hga-gray">
                        {b}
                      </p>
                    ))}
                    <p className="mt-4 border-t border-hga-line pt-3 text-[12px] leading-[1.5] text-hga-gray">{f.tags}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- How we deliver ---------- */}
        <section className="bg-white py-[72px]">
          <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1fr_1fr] lg:gap-12`}>
            <div>
              <p className={eyebrowDark}>How we deliver</p>
              <h2 className={`${h2} mt-5`}>Six capabilities, combined around your challenge.</h2>
              <div className="mt-5 flex gap-4">
                <Ph label="HRD Corp" className="h-[62px] w-[62px] shrink-0 rounded-full !p-0 text-[9px]" />
                <p className="text-[14px] leading-[1.6] text-hga-gray">
                  HGA is an HRD Corp registered training provider. Our programmes are HRD Corp claimable and aligned to recognised international bodies.
                </p>
              </div>
            </div>
            {(
              [
                ["Leadership & governance core", CORE],
                ["Digital services", DIGITAL_SHORT],
              ] as const
            ).map(([h, items]) => (
              <div key={h}>
                <p className="border-b border-hga-line pb-3 text-[11.5px] font-bold uppercase tracking-[0.16em] text-hga-navy">{h}</p>
                {items.map(([t, d]) => (
                  <div key={t} className="border-b border-hga-line py-[13px]">
                    <p className="text-[14.5px] font-semibold text-hga-navy">{t}</p>
                    <p className="mt-1 text-[13.5px] leading-[1.5] text-hga-gray">{d}</p>
                  </div>
                ))}
                {h === "Digital services" && (
                  <a href="#digital" className="mt-5 inline-block text-[13.5px] font-semibold text-hga-navy">
                    Explore digital services →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Digital services ---------- */}
        <section id="digital" className="scroll-mt-4 bg-hga-navy py-[84px]">
          <div className={wrap}>
            <p className={eyebrowGold}>Digital services</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <h2 className={`${h2} max-w-[480px] !text-white`}>Digital capability, governed like any other business decision.</h2>
              <p className="text-[15.5px] leading-[1.65] text-[#e6e8ed]">
                We start with the decision, the process or the reputation you need to build, then apply data, automation and AI only where they add clear value,
                with people, controls and accountability kept central.
              </p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {DIGITAL.map((s) => (
                <article key={s.t} className="border-t-[3px] border-hga-gold bg-white">
                  <div className="p-[21px]">
                    <p className={`${eyebrowDark} !text-[11px]`}>{s.n}</p>
                    <h3 className={`${serif} mt-4 text-[23px] font-semibold leading-[1.2] text-hga-navy`}>{s.t}</h3>
                    <p className={`${serif} mt-3 text-[16px] italic leading-[1.45] text-hga-goldd`}>{s.sub}</p>
                    <p className="mt-4 text-[14px] leading-[1.6] text-hga-gray">{s.d}</p>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-hga-gray">What&rsquo;s included</p>
                    <Bullets items={s.inc} cls="mt-3 text-[12.5px] leading-[1.45] text-hga-gray" />
                  </div>
                  <div className="border-t border-hga-line p-[21px]">
                    <p className={`${eyebrowDark} !text-[11px]`}>Outcomes</p>
                    <Bullets items={s.out} cls="mt-3 text-[12.5px] leading-[1.45] text-hga-navy" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Reflections ---------- */}
        <section id="reflections" className="scroll-mt-4 border-t-2 border-hga-navy bg-hga-green py-[72px]">
          <div className={wrap}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-hga-greend">Reflections on sustainability</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
              <div>
                <h2 className={`${h2} !text-[44px]`}>You Are the Earth</h2>
                <p className={`${serif} mt-3 max-w-[500px] text-[19px] italic leading-[1.5] text-hga-greend`}>
                  You are standing on a living organism that has been breathing for 4.5 billion years, and it is trying to tell you something.
                </p>
              </div>
              <div>
                <p className="max-w-[340px] text-[14px] leading-[1.6] text-hga-gray">A reflection on James Lovelock&rsquo;s Gaia Hypothesis, and what it asks of those who lead organisations.</p>
                <a href="#" className="mt-4 inline-flex h-[44px] items-center gap-2 bg-hga-navy px-5 text-[13.5px] font-semibold text-white">
                  <span aria-hidden>↓</span> Read the full reflection (PDF)
                </a>
              </div>
            </div>

            <div className="mt-10 grid border-l border-t border-hga-line bg-white md:grid-cols-2 lg:grid-cols-4">
              {REFLECT.map(([k, t, d]) => (
                <article key={k} className="border-b border-r border-hga-line p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-hga-greend">{k}</p>
                  <h3 className={`${serif} mt-3 text-[21px] font-semibold leading-[1.2] text-hga-navy`}>{t}</h3>
                  <p className="mt-3 text-[13px] leading-[1.6] text-hga-gray">{d}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="border-t-[3px] border-hga-greend bg-hga-navy p-12">
                <p className={`${serif} text-[28px] leading-[1.3] text-white`}>“We are not the owners of this planet. We are the tenants. And the landlord is losing patience.”</p>
                <p className="mt-5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-hga-gold">Tenants, not owners</p>
              </div>
              <div>
                {["You cannot poison the water and keep your blood clean.", "You cannot burn the forest and keep your lungs clear.", "You cannot strip the soil and keep your food alive."].map((t) => (
                  <p key={t} className={`${serif} border-t border-[#d5ddd3] py-[15px] text-[19px] text-hga-navy`}>
                    {t}
                  </p>
                ))}
                <p className="border-t border-[#d5ddd3] pt-[15px] text-[14px] leading-[1.6] text-hga-gray">
                  Everything we do to the Earth, we do to our own body. We are not separate from nature. We are nature.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-6 border border-hga-line bg-white px-[26px] py-[26px] md:flex-row md:items-center">
              <p className={`${serif} max-w-[500px] text-[22px] leading-[1.35] text-hga-navy`}>
                You are not on the Earth. You are the Earth. And it is running out of ways to tell you.
              </p>
              <a href="#contact" className="border border-hga-navy/60 px-6 py-[13px] text-[13.5px] font-semibold text-hga-navy">
                Discuss sustainability strategy for your board →
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="scroll-mt-4 bg-hga-navy py-[72px] text-white">
          <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.9fr] lg:gap-[46px]`}>
            <div>
              <p className={eyebrowGold}>Start a conversation</p>
              <h2 className={`${h2} mt-5 max-w-[300px] !text-white`}>Tell us the challenge. We will tell you candidly whether we can help.</h2>
              <p className="mt-5 max-w-[330px] text-[15px] leading-[1.65] text-[#e6e8ed]">
                Initial conversations are confidential and without obligation. The quickest way to reach us is WhatsApp.
              </p>
              <div className="mt-6 border-t-[3px] border-[#25d366] bg-hga-panel p-4">
                <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white">
                  <WaIcon /> WhatsApp your enquiry
                </p>
                {[
                  ["Ms. Jade", "Chief Executive Officer · programmes & scheduling", "+6012-212 4007", WA_JADE],
                  ["Dr. Harvey Gill", "Founder & Principal Consultant · advisory engagements", "+6012-268 2417", WA_HARVEY],
                ].map(([n, r, p, h]) => (
                  <a key={n} href={h} className="mt-3 block bg-white p-3 text-hga-navy">
                    <span className="block text-[15px] font-bold">{n}</span>
                    <span className="block text-[12px] leading-[1.35] text-hga-gray">{r}</span>
                    <span className="mt-2 block text-[17px] font-bold text-[#17753c]">{p}</span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-[14px]">
                Email: <a href="mailto:harwindar@gmail.com" className="underline">harwindar@gmail.com</a>
              </p>
              <p className="mt-3 max-w-[310px] text-[14px] leading-[1.5]">Office: No. 197, Reed, Lakefields, Sungai Besi, 57000 Kuala Lumpur</p>
            </div>
            <HomeForm />
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-hga-foot text-[#c6ccd6]">
        <div className={`${wrap} grid gap-8 pb-8 pt-10 lg:grid-cols-[1fr_2fr]`}>
          <div>
            <Img src="logo.png" alt="Harvey Gill & Associates" className="h-[82px] w-[123px] bg-white object-contain p-2" />
            <p className="mt-4 text-[13px]">Developing Leaders. Driving Impact.</p>
            <p className="mt-3 text-[13px]">Inspire · Inform · Transform</p>
            <p className="mt-3 max-w-[260px] text-[13px] leading-[1.6]">
              WhatsApp: <a className="underline text-white" href={WA_JADE}>Ms. Jade +6012-212 4007</a> ·{" "}
              <a className="underline text-white" href={WA_HARVEY}>Dr. Harvey +6012-268 2417</a>
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-[18px] gap-y-3 text-[13px] text-white lg:justify-end">
            {FOOT_NAV.map(([l, h]) => (
              <a key={l} href={h}>
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className={`${wrap} flex flex-wrap justify-between gap-2 border-t border-[#1b2736] py-5 text-[12px]`}>
          <p>© 2026 Harvey Gill & Associates · SSM 202203239660 (LA0050315-X)</p>
          <p>Established 1987 · Malaysia</p>
        </div>
      </footer>
    </div>
  );
}
