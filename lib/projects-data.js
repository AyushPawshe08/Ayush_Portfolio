export const projects = [
{
  "slug": "careerlens",
  "order": "01",
  "status": "Live",
  "one_word_desc": "Resume Analyzer",
  "category": "Full Stack",
  "title": "CareerLens",
  "detailHeading": "CareerLens — A Resume Analyzer and Interview Preparation Platform",
  "description": "CareerLens compares a candidate’s PDF resume with a target job description, then returns role-fit and ATS signals, skill gaps, recommendations, and tailored interview questions.",
  "cardIcons": ["react", "python", "fastapi", "postgresql"],
  "cover": {
    "type": "image",
    "image": "/projects/CareerLens/CareerLensUI.png",
    "heading": "CareerLens"
  },
  "liveUrl": "https://careerlens-eosin.vercel.app/",
  "sourceUrl": "https://github.com/AyushPawshe08/CareerLens2",
  "demoUrl": "https://www.youtube.com/watch?v=BPuIvwDfkkw",
  "about": [
    "A candidate uploads a PDF resume and enters a job description. The service extracts and cleans resume text, combines it with the job description, and passes it through a LangGraph workflow for analysis and interview preparation.",
    "The analysis returns an ATS score, matched and missing skills, role suggestions, recommendations, and a resume summary. A separate interview-question flow uses the resume, job description, and saved analysis to produce technical, HR, and behavioral questions.",
    "The React/Vite client sends multipart analysis requests and JSON question requests to a FastAPI API. PostgreSQL on Neon stores users, tokens, and analysis history; Groq is the primary model provider, with Gemini as a fallback."
  ],
  "keyFeatures": [
    "Resume and job-description comparison produces an ATS score, matched skills, missing skills, and role recommendations.",
    "Resume ingestion extracts PDF text, trims and cleans it, then merges it with the supplied job description before analysis.",
    "Interview-question generation uses the candidate’s resume and job description, with technical, HR, and behavioral question sets.",
    "JWT-based login and signup protect user routes; analyses and history are stored in PostgreSQL via SQLAlchemy.",
    "The LangGraph workflow uses Groq first and can fall back to Gemini when the primary LLM call fails."
  ],
  "whyIBuiltThis": [
    "CareerLens addresses the gap between a resume and the specific expectations in a job description by turning their comparison into concrete skill gaps, improvement suggestions, and interview practice prompts."
  ],
  "techArchImage" : "/projects/CareerLens/CareerLensSA.png",
  "techArchExplanation": [
    "The candidate provides a PDF resume and job-description text in the React/Vite client. The client sends the resume and JD as multipart form data to the FastAPI `/analyze` route; it uses the auth routes for login/signup and the history route for saved results.",
    "The backend’s resume-ingestion component uses `pypdf` to extract PDF text, then cleans and trims it and combines it with the job description. The resulting text is passed into the LangGraph orchestration flow.",
    "For the main analysis flow, LangGraph preprocesses the input and invokes the Resume Analysis Agent. That agent returns structured fields including a summary, matched and missing skills, suggested roles, and recommendations. The interview-question flow can run after analysis or on request and uses resume text, the job description, and analysis output to produce technical, HR, and behavioral questions.",
    "LangChain manages the prompts and model calls. Groq is the primary LLM provider; Google Gemini is shown as the fallback. The backend returns the structured JSON to the client, which renders the analysis and questions.",
    "FastAPI persists users, tokens, analyses, and history in Neon-hosted PostgreSQL through SQLAlchemy’s async integration and `asyncpg`. JWT authentication and password hashing protect account access; CORS supports browser requests, and uploaded PDFs may use temporary object storage."
  ],
  "stack": [
    "react",
    "vite",
    "axios",
    "python",
    "fastapi",
    "postgresql",
    "neon",
    "langchain",
    "langgraph",
    "jwt",
    "groq",
    "gemini"
  ]
},
 {
  slug: "tech-docs-mcp",
  order: "02",
  status: "Deployed",
  one_word_desc: "MCP Server",
  category: "Backend",
  title: "TechDocs - MCP Server",
  detailHeading: "TechDocs MCP Server — Live Library Documentation for AI Assistants",
  description:
    "A published PyPI MCP server that connects AI assistants to verified, live library documentation to eliminate hallucinations. Installable via pip install tech-docs-mcp.",
  cardIcons: ["python", "fastmcp", "mcp"],
  cover: {
    type: "image",
    image: "/projects/TechDocsUI.png",
    heading: "TechDocs MCP",
    subheading: "Live documentation retrieval for LLMs",
  },
  liveUrl: "https://pypi.org/project/tech-docs-mcp/",
  sourceUrl: "https://github.com/AyushPawshe08/TechDocs-MCP-Server",
  about: [
    "TechDocs MCP Server gives MCP-compatible AI assistants tools for finding current library documentation and code examples. The client communicates with the local server over MCP’s JSON-RPC protocol on standard input/output.",
    "The server provides tools to list known documentation, resolve a library identifier, and search documentation. Known libraries can be served from an in-memory cache; a cache miss is resolved through the Context7 API, which returns clean Markdown snippets.",
    "The Python package can be installed from PyPI with `pip install tech-docs-mcp` or run on demand with `uvx tech-docs-mcp`. The architecture diagram also shows local CLI clients and AI hosts such as Claude Desktop and Cursor."
  ],
  keyFeatures: [
    "`list_known_docs`, `resolve_library`, and `search_docs` expose documentation discovery and retrieval as MCP tools.",
    "Known library IDs and URLs are held in an in-memory cache for direct lookups; unknown libraries are resolved through Context7.",
    "Context7 responses are parsed from streaming SSE/JSON-RPC data and returned as clean Markdown snippets over stdio.",
    "The stdio transport lets MCP hosts and local command-line clients launch the server without a separate web service.",
    "Published on PyPI, with both pip installation and `uvx` execution documented."
  ],
  whyIBuiltThis: [
    "TechDocs addresses the problem of coding assistants relying on stale documentation by giving them an MCP tool path to retrieve current, source-backed library material when a question needs it."
  ],
  techArchImage: "/projects/TechDocsUI.png",
  techArchExplanation: [
    "An AI host such as Claude Desktop or Cursor, or a standalone CLI client, receives a user’s coding question and invokes a TechDocs tool when documentation is needed.",
    "The host and server exchange MCP JSON-RPC messages bidirectionally over stdio. The diagram also shows `uvx tech-docs-mcp` as a runner for the standalone CLI use case.",
    "The FastMCP server in `src/tech_docs_mcp` exposes `list_known_docs`, `resolve_library`, and `search_docs`. `main.py` is the CLI entry point that starts the stdio transport; `server.py` owns the FastMCP instance and tool definitions.",
    "`known_docs.py` supplies the in-memory catalogue of canonical library IDs and URLs. When a lookup is not covered by this local cache, `context7.py` makes asynchronous HTTP requests to the Context7 cloud API, parses the streaming response, and retrieves documentation from official docs or code repositories.",
    "The server returns the result as a JSON-RPC response over stdio. The host then uses the retrieved Markdown snippets and citations as context for its answer."
  ],
  stack: ["python", "fastmcp", "mcp", "httpx", "context7"],
},
  {
    slug: "neuroRAG",
    order: "03",
    status: "Local",
    one_word_desc: "Multimodal RAG",
    category: "AI",
    title: "NeuroRAG",
    description:
      "Multimodal RAG system for brain MRI analysis — BioMedCLIP + Qdrant retrieval with Gemini-generated, evidence-grounded diagnostic explanations.",
    cardIcons: ["pytorch", "qdrant", "rag", "gradio", "docker"],
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
      "The system uses BioMedCLIP (powered by PyTorch and Hugging Face transformers) to generate joint image-text embeddings from MRI scans, storing and indexing them in a Qdrant vector database for high-accuracy similarity search across confirmed medical cases.",
      "Retrieved case contexts and patient MRI representations are passed to Google Gemini to formulate structured, evidence-grounded diagnostic explanations, delivered through a Gradio interface containerized with Docker.",
    ],
    keyFeatures: [
      "BioMedCLIP creates joint image and text embeddings from brain MRI scans and related text.",
      "Qdrant indexes embeddings for similarity retrieval against confirmed medical cases.",
      "Retrieved case context is passed with the MRI representation to Gemini for an evidence-grounded explanation.",
      "A Gradio interface presents the analysis; the application is containerized with Docker.",
    ],
    whyIBuiltThis: [
      "NeuroRAG explores how retrieval can connect MRI inputs with relevant confirmed cases, grounding generated explanations in retrieved context.",
    ],
    stack: [
      "python",
      "pytorch",
      "gemini",
      "qdrant",
      "rag",
      "fastapi",
      "gradio",
      "docker",
      "huggingface",
    ],
  },
  {
    slug: "querymind",
    order: "04",
    status: "Local",
    one_word_desc: "Research Agents",
    category: "AI",
    title: "QueryMind",
    detailHeading: "QueryMind — A Multi-Agent Web Research and Reporting Platform",
    description:
      "A Streamlit research dashboard that uses a LangGraph agent workflow to search, retrieve, and critique web sources, then saves cited reports with PDF export.",
    cardIcons: ["python", "streamlit", "langgraph", "tavily", "postgresql"],
    cover: {
      type: "image",
      image: "/projects/QueryMind/QueryMindUI.png",
      heading: "QueryMind",
      subheading:
        "Multi-agent research assistant for discovering, extracting, and summarizing technical material.",
    },
    liveUrl: "https://github.com/AyushPawshe08/QueryMind",
    sourceUrl: "https://github.com/AyushPawshe08/QueryMind",
    about: [
      "QueryMind is a Streamlit dashboard for researching open-ended technical topics. Its `app.py` validates the topic, starts the LangGraph research graph, streams pipeline updates, and displays the report and research history.",
      "The graph decomposes a topic into sub-queries, searches them concurrently with Tavily, retrieves page text for in-memory semantic RAG using Gemini embeddings, and sends the evidence to a report writer and critic. A low score sends targeted gap queries back to the planner; a score of at least 7 or three iterations ends the loop.",
      "Completed reports and user records are stored in Neon PostgreSQL through SQLAlchemy and scoped to the authenticated user. The report includes verified sources, critique, score, chart data, and can be exported as PDF."
    ],
    keyFeatures: [
      "The Planner agent turns a research request into a task and configuration for the research run.",
      "The Search and Read/Retrieve steps gather web results and extract page content through Tavily and Firecrawl, with Requests and BeautifulSoup as the diagrammed fallback.",
      "The Writer creates a Markdown report and charts; the Critic scores the draft and routes the workflow through another iteration when the score or iteration count calls for it.",
      "The Streamlit interface streams progress and exposes research history and report download/export actions.",
      "Neon PostgreSQL stores user and report records through SQLAlchemy; the in-memory vector store holds scraped chunks and Gemini embeddings for similarity retrieval within a run.",
      "Argon2id password hashing and signed PyJWT sessions support authenticated access, with reports isolated to their owning user."
    ],
    whyIBuiltThis: [
      "QueryMind is designed to reduce the manual work of researching a technical question across multiple web sources: it gathers evidence, checks its own draft, and returns a cited report that can be reviewed and reused."
    ],
  "techArchImage" : "/projects/QueryMind/QueryMindSA.png",
  "techArchExplanation": [
    "The supplied diagram shows a browser UI communicating with a FastAPI API over REST, receiving progress through SSE, and using JWT authentication. The linked project README describes the actual application UI as Streamlit (`app.py`) and the research workflow as a LangGraph graph; it does not document the depicted React/Vite or FastAPI layers.",
    "In the documented implementation, the Streamlit app validates a topic and starts the LangGraph flow. The Planner decomposes the topic into sub-queries, then a ThreadPoolExecutor runs Tavily searches concurrently and deduplicates discovered URLs.",
    "The Read node downloads page text, splits it into chunks, and uses an in-memory vector store with Gemini embeddings to retrieve relevant passages. Firecrawl and BeautifulSoup are documented scraping tools; the image additionally shows Requests as a fallback.",
    "The Writer synthesizes the retrieved evidence into a structured report. The Critic scores it; if the score is below 7 and fewer than three iterations have run, its feedback is used by the Planner to generate gap-filling searches. Otherwise, the workflow completes.",
    "The Streamlit app saves completed reports and user data to Neon PostgreSQL through SQLAlchemy, with report access scoped to the authenticated user. The diagram also depicts Neon persistence, an in-memory vector store, report history, and downloadable/shareable results. The README specifically documents PDF export.",
    "Architecture asset discrepancy: the diagram presents a separate React/Vite frontend, FastAPI routes, SSE, and a React-style API response flow, while the linked README documents a Streamlit app that directly runs the graph. Those frontend/API boxes are therefore treated as elements of the supplied diagram, not verified implementation details."
  ],
    stack: [
      "python",
      "streamlit",
      "langgraph",
      "langchain",
      "gemini",
      "tavily",
      "firecrawl",
      "beautifulsoup4",
      "postgresql",
      "neon",
      "sqlalchemy",
      "jwt",
    ],
  },
  {
    slug: "credit-risk-underwriting",
    order: "05",
    status: "Local",
    one_word_desc: "Risk Underwriting",
    category: "Machine Learning",
    title: "Credit Risk Underwriting",
    description:
      "Explainable credit risk underwriting system using LightGBM, SHAP, FastAPI, and Flask to predict loan default risk and generate rejection reason candidates.",
    cardIcons: ["python", "lightgbm", "xgboost", "shap", "fastapi", "flask"],
    cover: {
      type: "image",
      image: "/projects/CreditCardUI.png",
      heading: "Credit Risk Underwriting",
      subheading: "End-to-end loan default prediction with explainability.",
    },
    liveUrl:
      "https://github.com/AyushPawshe08/Credit-Risk-Underwriting-ML-System",
    sourceUrl:
      "https://github.com/AyushPawshe08/Credit-Risk-Underwriting-ML-System",
    about: [
      "Built a complete credit risk pipeline on a 32K+ Kaggle dataset covering data cleaning, train-test splitting, feature engineering, and model benchmarking. Engineered financial features such as DTI proxy, interest burden, income-to-loan ratio, employment stability ratio, and credit history ratio.",
      "Benchmarked Logistic Regression, Random Forest, XGBoost, and LightGBM using imbalanced-classification metrics (PR-AUC, ROC-AUC, Precision, Recall, F1). Achieved best performance with LightGBM: PR-AUC 0.9039 and ROC-AUC 0.9485.",
      "Integrated SHAP explainability to generate model-based rejection reason candidates for high-risk applicants. Deployed via FastAPI backend with production-style endpoints (/health, /metadata, /predict) and an interactive Flask loan-underwriting dashboard with real-time decisions.",
    ],
    keyFeatures: [
      "The 32K+ row pipeline engineers financial ratios and compares Logistic Regression, Random Forest, XGBoost, and LightGBM with imbalanced-classification metrics.",
      "LightGBM is the best-performing model in the recorded benchmark; SHAP supplies feature-level explanations and rejection reason candidates.",
      "FastAPI exposes health, metadata, and prediction endpoints, while a Flask dashboard supports interactive loan decisions.",
    ],
    whyIBuiltThis: [
      "The project explores a credit-underwriting workflow that pairs a default-risk prediction with feature-based explanations, so a decision can be reviewed alongside candidate reasons.",
    ],
    stack: [
      "python",
      "pandas",
      "numpy",
      "scikit-learn",
      "lightgbm",
      "xgboost",
      "shap",
      "fastapi",
      "uvicorn",
      "flask",
      "joblib",
      "html",
      "css",
    ],
  },
  {
    slug: "ai-learning-pipeline",
    order: "06",
    status: "Live",
    one_word_desc: "Learning Pipeline",
    category: "AI",
    title: "AI Learning Pipeline",
    description:
      "Comprehensive AI-powered learning system that transforms topics into structured educational content — generates learning objectives, explanations, code examples, quizzes, and revision notes using Groq AI and LangGraph.",
    cardIcons: ["python", "langgraph", "langchain", "fastapi"],
    cover: {
      type: "image",
      image: "/projects/AILearnUI.png",
      heading: "AI Learning Pipeline",
      subheading: "Transform any topic into a complete learning module.",
    },
    liveUrl: "https://ai-prep-tawny.vercel.app/",
    sourceUrl: "https://github.com/AyushPawshe08/AI_Prep",
    about: [
      "AI Learning Pipeline is an intelligent educational platform that transforms any topic into comprehensive, structured learning materials. The system automates the entire learning workflow using cutting-edge AI technologies.",
      "The pipeline leverages Groq's fast LLM inference and LangGraph for workflow orchestration to generate: learning objectives, detailed explanations with real-world analogies, technical deep-dives, practical code examples, interactive quizzes, answer keys, and revision notes.",
      "Built with FastAPI for high-performance API handling, Streamlit for an intuitive user interface, and ReportLab for PDF generation. Users can export complete learning modules as professionally formatted PDF documents for offline study.",
    ],
    keyFeatures: [
      "A topic is expanded into learning objectives, explanations, analogies, technical detail, and practical code examples.",
      "LangGraph coordinates the generation workflow and Groq provides the LLM inference described in the project data.",
      "The generated module includes quizzes, answer keys, and revision notes, with PDF export for offline study.",
    ],
    whyIBuiltThis: [
      "The project turns the work of assembling a complete study module around a topic into one guided workflow, including practice and revision material as well as explanations.",
    ],
    stack: [
      "python",
      "fastapi",
      "groq",
      "langchain",
      "langgraph",
      "streamlit",
      "reportlab",
      "pydantic",
    ],
  },
  {
    slug: "hotshot",
    order: "07",
    status: "Live",
    one_word_desc: "URL Shortener",
    category: "Full Stack",
    title: "HotShot",
    description:
      "Fast URL shortener with QR code generation, custom aliases, expiry control, click tracking, and a local dashboard for managing links.",
    cardIcons: ["react", "vite", "tailwind", "fastapi", "docker", "qrcode"],
    cover: {
      type: "image",
      image: "/projects/HotShotUI.png",
      heading: "HotShot",
      subheading: "Turn long links into short, shareable URLs with QR codes.",
    },
    liveUrl: "https://hotshot-delta.vercel.app/",
    sourceUrl: "https://github.com/AyushPawshe08/HotShot",
    about: [
      "HotShot is a fast, lightweight URL shortener that transforms long links into memorable short URLs. Every shortened link automatically gets a matching QR code for instant sharing.",
      "Features include custom aliases for branded links, optional expiry times to control link lifetime, and real-time click tracking from an intuitive dashboard. Links can be saved locally in the browser for quick access.",
      "Built with React and Vite for the responsive frontend, Tailwind CSS for styling, and FastAPI for high-performance backend processing. The app includes QR code generation, short code creation, and is containerized with Docker for seamless deployment.",
    ],
    keyFeatures: [
      "Long URLs can be shortened and paired with QR codes for sharing.",
      "Users can choose a custom alias, set an expiry time, and track clicks from the dashboard.",
      "The browser stores links locally for quick access; the React/Vite interface calls the FastAPI service.",
    ],
    whyIBuiltThis: [
      "HotShot addresses the practical need to create and manage shareable links, including readable aliases, QR codes, and controls over link lifetime.",
    ],
    stack: [
      "react",
      "vite",
      "tailwindcss",
      "axios",
      "fastapi",
      "pydantic",
      "qrcode",
      "docker",
    ],
  },
  {
    slug: "sangrahak",
    order: "08",
    status: "Local",
    one_word_desc: "Depot Management",
    category: "Full Stack",
    title: "Sangrahak",
    description:
      "An AI-assisted inventory and depot management system with demand forecasting and stock intelligence.",
    cardIcons: ["react", "nodejs", "express", "mongodb", "redis", "python"],
    cover: {
      type: "image",
      image: "/projects/sangrahak.png",
      heading: "Sangrahak",
      subheading: "AI-assisted inventory & depot management.",
    },
    liveUrl: null,
    sourceUrl: "https://github.com/AyushPawshe08/Sangrahak",
    about: [
      "Sangrahak gives depot and warehouse teams a live view of stock levels across locations, replacing manual spreadsheets with a system that flags shortages before they become stockouts.",
      "A forecasting layer looks at historical movement and seasonality to recommend reorder points and quantities, while an intelligence dashboard surfaces slow-moving and at-risk inventory.",
      "The frontend is built with React and real-time updates via Socket.io, while the backend uses Express.js with MongoDB for data persistence, Redis for caching, and Python/Flask for ML forecasting jobs.",
    ],
    keyFeatures: [
      "A multi-location stock view highlights low inventory before it becomes a stockout.",
      "Historical movement and seasonality feed reorder point and quantity recommendations.",
      "The dashboard flags slow-moving and at-risk inventory; Socket.IO supplies live updates while Python/Flask handles forecasting jobs.",
    ],
    whyIBuiltThis: [
      "Sangrahak is intended to replace spreadsheet-based depot tracking with shared stock visibility and earlier signals for replenishment and slow-moving inventory.",
    ],
    stack: [
      "react",
      "vite",
      "tailwindcss",
      "express",
      "nodejs",
      "mongodb",
      "redis",
      "python",
      "flask",
      "xgboost",
      "sklearn",
      "socketio",
    ],
  },
  {
    slug: "codesageai",
    order: "09",
    status: "Live",
    one_word_desc: "Code Reviewer",
    category: "Full Stack",
    title: "CodeSageAI",
    description:
      "An AI-powered code review and refactoring platform for detecting issues, improving code quality, and generating cleaner implementations.",
    cardIcons: ["react", "vite", "tailwind", "fastapi", "groq", "docker"],
    cover: {
      type: "image",
      image: "/projects/CodeSageUI.png",
      heading: "CodeSage AI",
    },
    liveUrl: "https://code-sage-ai-two.vercel.app/",
    sourceUrl: "https://github.com/AyushPawshe08/CodeSageAI",
    about: [
      "CodeSageAI uses AI to review source code for bugs, security concerns, performance bottlenecks, naming issues, error-handling gaps, documentation problems, and best-practice violations.",
      "Users can paste code into a Monaco-powered editor, select a programming language, and request either a detailed code review or an improved refactored implementation.",
      "The application combines a React and Vite frontend with a FastAPI backend, JWT authentication, SQLAlchemy persistence, Groq AI integration, and Docker-based deployment.",
    ],
    keyFeatures: [
      "A Monaco-based editor accepts pasted source code and lets the user choose its programming language.",
      "Review mode checks for bugs, security concerns, performance bottlenecks, naming, error handling, documentation, and best-practice issues.",
      "Refactor mode returns an improved implementation; the React/Vite client connects to FastAPI with JWT authentication and SQLAlchemy persistence.",
    ],
    whyIBuiltThis: [
      "CodeSageAI brings code review and refactoring into one workflow, helping users inspect concrete quality issues and compare them with a proposed cleaner implementation.",
    ],
    stack: [
      "react",
      "vite",
      "tailwind",
      "fastapi",
      "python",
      "groq",
      "monacoEditor",
      "sqlalchemy",
      "postgresql",
      "jwt",
      "docker",
      "nginx",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
