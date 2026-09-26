export const projects = [
  {
    slug: "careerlens",
    order: "01",
    status: "Live",
    title: "CareerLens",
    description:
      "A resume intelligence platform that evaluates candidate fit against job descriptions and skill expectations.",
    cardIcons: ["nextjs", "react", "tailwind", "python"],
    cover: {
      type: "image",
      image: "/projects/CareerLensUI.png",
      heading: "CareerLens",
    },
    liveUrl: "https://careerlens.example.com",
    sourceUrl: "https://github.com/AyushPawshe08/CareerLens",
    about: [
      "CareerLens analyzes a resume against a target job description to produce a structured view of role alignment, ATS readiness, and missing competencies. The platform converts raw resume content into actionable career signals.",
      "It generates an ATS score, skill-gap analysis, role recommendations, improvement suggestions, and a concise resume summary. The system also provides technical, behavioral, and HR interview questions tailored to the candidate profile.",
      "The backend uses FastAPI with Celery and Redis for asynchronous analysis workflows, while PostgreSQL on Neon stores application data. The experience is delivered through a Next.js and React interface with JWT-based authentication.",
    ],
    stack: [
      "nextjs", "react", "tailwind", "python", "fastapi", "celery",
      "redis", "githubActions", "docker", "aws", "neon", "jwt", "openai",
    ],
  },
  {
    slug: "sangrahak",
    order: "02",
    status: "Live",
    title: "Sangrahak",
    description:
      "An AI-assisted inventory and depot management system with demand forecasting and stock intelligence.",
    cardIcons: ["react", "redis", "tailwind", "python"],
    cover: {
      type: "image",
      image: "/projects/sangrahak.png",
      heading: "Sangrahak",
      subheading: "AI-assisted inventory & depot management.",
    },
    liveUrl: "https://sangrahak.example.com",
    sourceUrl: "https://github.com/ayushpawshe/sangrahak",
    about: [
      "Sangrahak gives depot and warehouse teams a live view of stock levels across locations, replacing manual spreadsheets with a system that flags shortages before they become stockouts.",
      "A forecasting layer looks at historical movement and seasonality to recommend reorder points and quantities, while an intelligence dashboard surfaces slow-moving and at-risk inventory.",
      "The backend is a Python/FastAPI service backed by PostgreSQL and Redis, with the forecasting jobs running asynchronously so the dashboard stays responsive under load.",
    ],
    stack: [
      "react", "tailwind", "python", "fastapi", "redis",
      "postgresql", "docker", "aws",
    ],
  },
  {
    slug: "querymind",
    order: "03",
    status: "Live",
    title: "QueryMind",
    description:
      "A multi-agent research assistant for discovering, extracting, and summarizing technical material.",
    cardIcons: ["python", "fastapi", "react", "tailwind"],
    cover: {
      type: "image",
      image: "/projects/QueryMindUI.png",
      heading: "AI Research Assistant",
    },
    liveUrl: "https://ai-research.example.com",
    sourceUrl: "https://github.com/AyushPawshe08/QueryMind",
    about: [
      "AI-Research Assistant takes a research question, plans a set of searches, and dispatches multiple agents to gather and read the most relevant sources in parallel.",
      "Each agent extracts the claims and evidence relevant to the question, and a synthesis step merges them into a single source-backed summary with inline citations.",
      "Reports can be exported as PDF. The pipeline is built in Python with FastAPI serving the API and a React/Tailwind frontend for running and reviewing research sessions.",
    ],
    stack: ["python", "fastapi", "react", "tailwind", "openai", "docker"],
  },
  {
    slug: "codesageai",
    order: "04",
    status: "Live",
    title: "CodeSageAI",
    description:
      "An AI-powered code review platform for improving readability, maintainability, and implementation quality.",
    cardIcons: ["react", "tailwind", "fastapi", "python"],
    cover: {
      type: "image",
      image: "/projects/CodeSageUI.png",
      heading: "CodeSage AI",
    },
    liveUrl: "https://code-sage-ai-two.vercel.app/",
    sourceUrl: "https://github.com/AyushPawshe08/CodeSageAI",
    about: [
      "CodeSageAI takes a pasted snippet or uploaded file and runs it through a structured review pipeline covering readability, maintainability, and implementation quality.",
      "Large files are safely chunked before being sent to the model to keep token usage predictable, and every review is saved with a unique ID so it can be revisited later.",
      "Built with a Python/FastAPI backend and a React/Tailwind interface for uploading code, reading the review, and browsing history.",
    ],
    stack: ["react", "tailwind", "fastapi", "python", "docker", "githubActions"],
  },
  {
    slug: "HotShot",
    order: "05",
    status: "Live",
    title: "HotShot",
    description:
      "A URL shortener and QR code generator with click analytics and custom aliases.",
    cardIcons: ["react", "tailwind", "nodejs", "mongodb"],
    cover: {
      type: "image",
      image: "/projects/HotShotUI.png",
      heading: "Shorter URLs, Instantly",
    },
    liveUrl: "https://hotshot-delta.vercel.app/",
    sourceUrl: "https://github.com/AyushPawshe08/HotShot",
    about: [
      "8Shot turns long links into short, shareable URLs and generates a matching QR code for each one.",
      "Every link tracks click counts over time, and custom aliases let a link read the way you want it to instead of a random slug.",
      "Built with a Node.js/Express API, MongoDB for storage, and a React/Tailwind frontend.",
    ],
    stack: ["react", "tailwind", "nodejs", "express", "mongodb", "docker"],
  },
  {
    slug: "neuroRAG",
    order: "06",
    status: "Live",
    title: "NeuroRAG",
    description:
      "Multimodal RAG system for brain MRI analysis — BioMedCLIP + Qdrant retrieval with Gemini-generated, evidence-grounded diagnostic explanations.",
    cardIcons: ["gradio", "RAG", "Qdrant", "Docker"],
    cover: {
      type: "image",
      image: "/projects/NeuroRAGUI.png",
      heading: "NeuroRAG",
      subheading: "Multimodal RAG system for brain MRI analysis.",
    },
    liveUrl: "https://github.com/AyushPawshe08/NeuroRAG",
    sourceUrl: "https://github.com/AyushPawshe08/NeuroRAG",
    about: [
      "NeuroRAG is a multimodal retrieval-augmented generation (RAG) platform engineered for brain MRI analysis, connecting complex biomedical scans directly with diagnostic context and clinical knowledge.",
      "The system uses BioMedCLIP to generate joint image-text embeddings from MRI scans, storing and indexing them in a Qdrant vector database for high-accuracy similarity search across confirmed medical cases.",
      "Retrieved case contexts and patient MRI representations are passed to Google Gemini to formulate structured, evidence-grounded diagnostic explanations, delivered through a Gradio interface containerized with Docker.",
    ],
    stack: [
      "python", "gemini", "qdrant", "gradio", "docker", "pytorch",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
