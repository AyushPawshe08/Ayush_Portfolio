import SectionHeading from "@/components/SectionHeading";

const points = [
  "Software Developer focused on building reliable backend systems and AI-powered applications, with hands-on experience across Python, FastAPI, PostgreSQL, Redis, Celery, and Docker.",
  "Built and shipped backend systems involving REST APIs, authentication, asynchronous processing, background task queues, concurrent workflows, database persistence, and AI/ML model integration.",
  "Built CareerLens, a 21-endpoint FastAPI backend with JWT authentication, RBAC, refresh-token rotation, SQLAlchemy, PostgreSQL, and Redis-backed Celery workflows for parallel LLM processing.",
  "Developed AI systems ranging from agentic research and RAG pipelines using LangChain, pgvector, HuggingFace, and Mistral AI to ML applications involving credit-risk prediction, SHAP explainability, and PyTorch-based computer vision.",
  "Comfortable working across the stack with React, Next.js, AWS, Docker, CI/CD, and REST APIs, while primarily interested in backend engineering, AI integration, and practical software systems.",
  "Enjoy taking ideas from a working prototype to a complete application—designing APIs, integrating AI/ML components, handling infrastructure, and making systems reliable enough to use.",
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

