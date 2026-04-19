import projectNovo from "@/assets/project-novo.jpg";
import projectVoice from "@/assets/project-voice.jpg";
import projectLyric from "@/assets/project-lyric.jpg";
import projectNeuro from "@/assets/project-neuro.jpg";

export const profile = {
  name: "Sravan Kumar Kokkula",
  shortName: "Sravan",
  role: "Software Engineer · Early-stage Founder",
  location: "Hyderabad, India",
  email: "sravankokkula2004@gmail.com",
  resumeUrl: "/Sravan_Kumar_Resume.docx",
  tagline: "I build real products in AI, health, and web.",
  intro:
    "I am a software engineer and an early founder. I build full products on my own — frontend, backend, AI, and database. I like turning small ideas into things people can actually use.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "2+", label: "Years building products" },
  { value: "5+", label: "Projects shipped" },
  { value: "Full", label: "Stack + AI" },
];

export const aboutPoints = [
  "I am a software engineer at SAAP Technologies and I also build my own products on the side.",
  "I work end to end — product idea, design, frontend, backend, database, and AI. I do not wait for a team to start something.",
  "I think like a founder. I want to keep building useful products in AI, health, and education.",
];

export const founderHighlights = [
  {
    title: "Builder mindset",
    body: "I ship on my own. I do not need a big team to start.",
  },
  {
    title: "Full-stack + AI",
    body: "React, Node, Postgres, and LLMs — from database to UI.",
  },
  {
    title: "Product thinking",
    body: "I care about users, not just code. I design the flow.",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js basics", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Auth", "Webhooks"] },
  { group: "Database", items: ["PostgreSQL", "Schema design", "RBAC", "Firebase"] },
  { group: "AI", items: ["LLM APIs", "Prompt design", "Chat pipelines", "CNN basics"] },
  { group: "Tools & Cloud", items: ["Git & GitHub", "Postman", "Vercel", "Azure", "Razorpay"] },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "SAAP Technologies",
    period: "Jun 2025 – Present",
    location: "Hyderabad",
    bullets: [
      "Moved from intern to full-time engineer in 4 months.",
      "One of two core engineers building a mental health product used in 3 schools.",
      "Own backend modules in Node.js and Express, including auth and role-based access.",
      "Built and shipped 15 web-based games with scoring and reports.",
      "Integrated an LLM chatbot, Razorpay payments, and webhook flows.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "SAAP Technologies",
    period: "Feb 2025 – Jun 2025",
    location: "Hyderabad",
    bullets: [
      "Joined as the first engineering intern on the product team.",
      "Designed a 56-page assessment framework for grades 6–10.",
      "Helped set up the database schema and core backend on PostgreSQL.",
    ],
  },
];

export const projects = [
  {
    name: "Novo Wellness",
    role: "Software Engineer",
    status: "Live",
    image: projectNovo,
    summary:
      "Mental health platform for school students. Assessments, games, AI chatbot, and dashboards for teachers and admins.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://novowellness.ai",
  },
  {
    name: "Lyric Video Maker",
    role: "Solo founder",
    status: "Live",
    image: projectLyric,
    summary:
      "A simple web tool to turn songs into lyric videos. Upload a track, sync the words, and export a clean video.",
    stack: ["React", "TypeScript", "Vercel"],
    link: "https://lvm.vercel.app/",
  },
  {
    name: "AI Voice App",
    role: "Solo founder",
    status: "Building",
    image: projectVoice,
    summary:
      "Voice app to help people practice spoken English without fear. Real-time voice loop, memory, and simple feedback.",
    stack: ["Python", "TypeScript", "React", "PostgreSQL"],
    link: "https://github.com/sravan99k/ai-voice",
  },
  {
    name: "Novo Neuro Tech",
    role: "Solo project",
    status: "Prototype",
    image: projectNeuro,
    summary:
      "CNN model that gives a risk score for Alzheimer’s and Parkinson’s from medical scan images.",
    stack: ["Python", "CNN", "Kaggle datasets"],
  },
];

export const education = {
  school: "CMR Technical Campus",
  degree: "B.Tech — Computer Science & Engineering (Data Science)",
  period: "2021 – 2025",
};

export const links = {
  linkedin: "https://linkedin.com/in/sravan-kokkula-382729227/",
  github: "https://github.com/sravan99k",
  novo: "https://novowellness.ai",
};
