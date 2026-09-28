import SectionHeading from "@/components/SectionHeading";

function Highlight({ children }) {
  return (
    <strong className="font-semibold text-slate-800 dark:text-slate-200">
      {children}
    </strong>
  );
}

const points = [
  <>
    <Highlight>AI/ML Engineer</Highlight> focused on building practical{" "}
    <Highlight>AI-powered applications</Highlight>, intelligent systems, and
    production-ready <Highlight>ML solutions</Highlight>.
  </>,
  <>
    Built systems across <Highlight>Agentic AI</Highlight>,{" "}
    <Highlight>RAG</Highlight>, <Highlight>Generative AI</Highlight>,{" "}
    <Highlight>Computer Vision</Highlight>, and{" "}
    <Highlight>Predictive ML</Highlight> — from multimodal MRI analysis to
    explainable credit-risk prediction and autonomous research.
  </>,
  <>
    Experienced in designing <Highlight>LLM workflows</Highlight>,{" "}
    <Highlight>multi-agent systems</Highlight>, retrieval pipelines,
    asynchronous processing, and backend APIs using{" "}
    <Highlight>Python</Highlight>, <Highlight>FastAPI</Highlight>,{" "}
    <Highlight>LangChain</Highlight>, <Highlight>LangGraph</Highlight>,{" "}
    <Highlight>PostgreSQL</Highlight>, <Highlight>Redis</Highlight>, and{" "}
    <Highlight>Docker</Highlight>.
  </>,
  <>
    Built <Highlight>CareerLens</Highlight>, an AI-powered resume intelligence
    platform, and <Highlight>QueryMind</Highlight>, a multi-agent research
    engine with parallel search, retrieval, evaluation, and citation-backed
    synthesis. Also built <Highlight>NeuroRAG</Highlight> for multimodal MRI
    analysis and a <Highlight>Credit Risk Underwriting</Highlight> system with
    explainable default prediction.
  </>,
  <>
    Strong focus on turning AI/ML concepts into{" "}
    <Highlight>complete, usable software</Highlight> — combining models, data,{" "}
    <Highlight>backend engineering</Highlight>, and{" "}
    <Highlight>deployment</Highlight> rather than treating ML as an isolated
    experiment.
  </>,
];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl border-t border-slate-200 dark:border-neutral-800 px-6 py-14">
      <SectionHeading>About</SectionHeading>

      <ul className="mt-6 space-y-4 list-disc list-inside">
        {points.map((point, i) => (
          <li
            key={i}
            className="text-[16px] sm:text-[17px] leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
