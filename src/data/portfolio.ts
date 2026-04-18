export const profile = {
  name: "Sravan Kumar Kokkula",
  shortName: "Sravan Kumar",
  role: "Product Engineer · AI + Full Stack",
  location: "Hyderabad, India",
  email: "sravankokkula2004@gmail.com",
  tagline: "I build AI products end to end — from idea to live users.",
  intro:
    "I work as a software engineer building real products in mental health, AI, and healthcare. I handle product, design, backend, and AI together, and I like shipping things people actually use.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "600+", label: "students using Novo Wellness" },
  { value: "15", label: "assessment games shipped" },
  { value: "25+", label: "features built end to end" },
];

export const aboutPoints = [
  "I am a software engineer at SAAP Technologies, building Novo Wellness — a mental health platform live in 3 schools.",
  "I work across product, AI, and backend. I designed a 56-page assessment framework for grades 6–10 and built 15 wellness games on top of it.",
  "I like building products from zero — research, system design, code, and launch — and I want to keep building things that matter.",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "SAAP Technologies",
    period: "Feb 2025 – Present",
    location: "Hyderabad",
    bullets: [
      "Joined as an intern in Feb 2025 and moved to full-time in June 2025.",
      "One of two core engineers building Novo Wellness, now live in 3 schools with 600+ students.",
      "Designed a 56-page mental health assessment framework for grades 6–10.",
      "Built 15 cognitive and emotional games with scoring, session tracking, and risk reports.",
      "Set up role-based access for 5 user types on a shared Postgres database.",
      "Integrated an LLM-based chatbot, Razorpay payments, and webhook flows.",
      "Owned database schema, RBAC middleware, and key backend modules in Node.js / Express.",
    ],
  },
];

export const projects = [
  {
    name: "Novo Wellness",
    status: "Live",
    summary:
      "Mental health platform for school students. Assessments, wellness games, AI chatbot, and dashboards for teachers and admins.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    link: "https://www.novowellness.ai",
  },
  {
    name: "AI Voice App",
    status: "In progress",
    summary:
      "Voice-based AI app to help people practice spoken English without fear. Real-time voice loop, session memory, and feedback.",
    stack: ["Python", "TypeScript", "React", "PostgreSQL"],
    link: "https://github.com/sravan99k/ai-voice",
  },
  {
    name: "Novo Neuro Tech",
    status: "Prototype",
    summary:
      "CNN-based prototype that gives a risk score for Alzheimer’s and Parkinson’s from medical scan images.",
    stack: ["Python", "CNN", "Kaggle datasets"],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Auth"] },
  { group: "Database", items: ["PostgreSQL", "Schema design", "RBAC", "Firebase"] },
  { group: "AI", items: ["LLM APIs", "Prompt design", "Chat pipelines", "CNN basics"] },
  { group: "Tools", items: ["GitHub", "Postman", "Vercel", "Azure", "Razorpay"] },
];

export const education = {
  school: "CMR Technical Campus",
  degree: "B.Tech — Computer Science & Engineering (Data Science)",
  period: "2021 – 2025",
};

export const links = {
  linkedin: "https://linkedin.com/in/sravan-kokkula-382729227/",
  github: "https://github.com/sravan99k",
  novo: "https://www.novowellness.ai",
};
