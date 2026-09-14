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
  image: {
    fallback: "/images/sravan-portrait-960.webp",
    webpSrcSet:
      "/images/sravan-portrait-360.webp 360w, /images/sravan-portrait-640.webp 640w, /images/sravan-portrait-960.webp 960w, /images/sravan-portrait-1254.webp 1254w",
    avifSrcSet:
      "/images/sravan-portrait-360.avif 360w, /images/sravan-portrait-640.avif 640w, /images/sravan-portrait-960.avif 960w, /images/sravan-portrait-1254.avif 1254w",
    width: 1254,
    height: 1254,
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


export const skills = [
  { group: "Product Engineering", items: ["React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL"] },
  { group: "AI / LLM Systems", items: ["Gemini", "LLM APIs", "LangChain", "Prompt Engineering", "Token Optimization"] },
  { group: "AI / ML Research", items: ["Python", "CNN", "Medical Imaging", "Machine Learning"] },
  { group: "Infrastructure", items: ["Azure", "Vercel", "Drizzle ORM", "Git", "Postman"] },
  { group: "Integrations", items: ["Sarvam AI", "Razorpay", "Webhooks", "Authentication", "RBAC"] },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Novo",
    period: "Jun 2025 – Sep 2025",
    location: "Hyderabad",
    bullets: [
      "Core member involved in the end-to-end lifecycle from research to development.",
      "Architected and built a multi-tenant SaaS product with 5 stakeholders, developing over 40+ pages.",
      "Engineered phase-wise assessments, a risk scoring algorithm, and a comprehensive wellness dashboard featuring a mood tracker, journals, and goals.",
      "Developed 10+ interactive cognitive games and integrated 30+ resource tools.",
      "Built AI chatbot and voice bots (STT/TTS) with immediate alert triggers to teachers upon detecting student risk.",
      "Integrated Gemini LLM, implemented prompt optimization, token usage tracking, and rate limiting.",
      "Built isolated dashboards for teachers, school admins, and super admins for complete feature and data management.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Drizzle ORM", "PostgreSQL", "Azure", "Vercel", "Gemini", "Sarvam AI", "LangChain"]
  },
  {
    role: "Software Developer Intern",
    company: "Medical Research",
    period: "Feb 2025 – May 2025",
    location: "Hyderabad",
    bullets: [
      "Conducted medical research leveraging datascan images to predict risk percentages for Parkinson's, Alzheimer's, and Epilepsy.",
      "Preprocessed sample datasets and trained Convolutional Neural Networks (CNNs) to analyze medical imaging data.",
      "Evaluated ML model performance to establish reliable risk-prediction algorithms before transitioning into full-time product development.",
    ],
    tech: ["Python", "CNN", "Machine Learning", "Medical Imaging", "Image Datasets"]
  },
];

export const projects = [
  {
    name: "Novoei.com",
    role: "Company Project",
    status: "Live",
    image: {
      fallback: "/images/novo-760.webp",
      webpSrcSet: "/images/novo-420.webp 420w, /images/novo-760.webp 760w",
      avifSrcSet: "/images/novo-420.avif 420w, /images/novo-760.avif 760w",
      width: 806,
      height: 278,
    },
    summary:
      "A student wellbeing and emotional intelligence SaaS platform for schools, with assessments, cognitive games, wellbeing tools, dashboards, and an AI assistant for teachers and school administrators.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "LLM APIs"],
    link: "https://novoei.com",
  },
  {
    name: "Lyric Video Makers (LVM)",
    role: "Freelancing Project",
    status: "Live",
    image: {
      fallback: "/images/lvm-760.webp",
      webpSrcSet: "/images/lvm-420.webp 420w, /images/lvm-760.webp 760w",
      avifSrcSet: "/images/lvm-420.avif 420w, /images/lvm-760.avif 760w",
      width: 866,
      height: 472,
    },
    summary:
      "A professional lyric video production platform serving as the digital storefront for musicians and artists. The platform supports a service that has delivered 350+ videos to over 200 artists worldwide.",
    stack: ["React", "TypeScript", "Next.js", "Framer Motion", "Vercel", "Tailwind CSS"],
    link: "https://lvm.vercel.app/",
  },
  {
    name: "Pynex.info",
    role: "Founder and Developer",
    status: "Live",
    image: {
      fallback: "/images/pynex-760.webp",
      webpSrcSet: "/images/pynex-420.webp 420w, /images/pynex-760.webp 760w",
      avifSrcSet: "/images/pynex-420.avif 420w, /images/pynex-760.avif 760w",
      width: 855,
      height: 397,
    },
    summary:
      "An EdTech platform and Developer OS offering comprehensive curriculums for AI Engineering, Python, and Vibe Coding. Features interactive lessons teaching Cursor, LangGraph, and Agentic AI workflows.",
    stack: ["React", "Node.js", "Razorpay", "Tailwind CSS", "Vite", "JWT Auth"],
    link: "https://pynex.info",
  },
  {
    name: "SOS Game",
    role: "Developer (Fun Project)",
    status: "Completed",
    image: {
      fallback: "/images/sos-420.webp",
      webpSrcSet: "/images/sos-420.webp 420w",
      avifSrcSet: "/images/sos-420.avif 420w",
      width: 526,
      height: 97,
    },
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
