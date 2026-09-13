export const profile = {
  name: "Sravan Kokkula",
  shortName: "Sravan",
  role: "PRODUCT ENGINEER · AI / LLM SYSTEMS",
  location: "Hyderabad, India",
  email: "sravankokkula2004@gmail.com",
  resumeUrl: "/Sravan_Kumar_Resume.docx",
  tagline: "I turn ideas into products that actually ship.",
  intro:
    "I’m Sravan Kumar, a Product Engineer focused on building end-to-end products across full-stack development, AI/LLM systems, and cloud infrastructure. I enjoy solving unclear problems, turning ideas into practical solutions, and building products that are made to ship.",
  image: "/portfoliopng.png",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Auth", "Webhooks"] },
  { group: "Database", items: ["PostgreSQL", "Schema design", "RBAC", "Firebase"] },
  { group: "AI", items: ["LLM APIs", "Prompt design", "Chat pipelines", "CNNs"] },
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
    name: "Novoei.com",
    role: "Company Project",
    status: "Live",
    image: "/nv.webp",
    summary:
      "Novo empowers schools with a structured, data-led approach to student wellness and emotional intelligence. Features include systematic assessments, interactive games, an AI chatbot, and comprehensive dashboards for educators.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Razorpay", "LLM APIs"],
    link: "https://novoei.com",
  },
  {
    name: "Lyric Video Makers (LVM)",
    role: "Freelancing Project",
    status: "Live",
    image: "/lvm.png",
    summary:
      "A professional lyric video production platform serving as the digital storefront for musicians and artists. The platform supports a service that has delivered 350+ videos to over 200 artists worldwide.",
    stack: ["React", "TypeScript", "Next.js", "Framer Motion", "Vercel", "Tailwind CSS"],
    link: "https://lvm.vercel.app/",
  },
  {
    name: "Pynex.info",
    role: "Founder and Developer",
    status: "Live",
    image: "/pynex.webp",
    summary:
      "An EdTech platform and Developer OS offering comprehensive curriculums for AI Engineering, Python, and Vibe Coding. Features interactive lessons teaching Cursor, LangGraph, and Agentic AI workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite", "JWT Auth"],
    link: "https://pynex.info",
  },
  {
    name: "SOS Game",
    role: "Developer (Fun Project)",
    status: "Completed",
    image: "/sos.png",
    summary:
      "A React + TypeScript playground with a paper-and-ink aesthetic implementing the classic SOS grid game. Features AI vs Player, local multiplayer, and scaffolded architecture for a live Tombola experience.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Custom CSS", "AI Logic"],
    link: "https://sos-bord-game.vercel.app/",
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
