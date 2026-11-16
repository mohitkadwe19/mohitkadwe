export const siteConfig = {
  name: "Mohit Kadwe",
  title: "Full Stack Engineer",
  description:
    "Full Stack Engineer with 5+ years in fintech: real-time fraud detection, BNPL and AI tools. TypeScript, Python, React, Node.js, PostgreSQL.",
  url: "https://mohitkadwe.tech",
  email: "mohitpawar530@gmail.com",
  location: "India",
  links: {
    github: "https://github.com/mohitkadwe19",
    linkedin: "https://linkedin.com/in/mohit-kadwe",
    linktree: "https://linktr.ee/mohitkadwe",
    x: "https://x.com/mohitkadwe",
  },
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Mohit Kadwe",
  tagline: "I build payment systems that process millions across MENA.",
  subtitle: "Open to opportunities",
  description:
    "Full Stack Engineer at NymCard — building real-time fraud detection, BNPL products, and AI-powered solutions in partnership with Visa & Mastercard. Working with teams across Dubai, Riyadh, the USA and Germany.",
  cta: {
    primary: { label: "Get in Touch", href: "#contact" },
  },
};

export const aboutData = {
  summary: [
    "I build products end-to-end — from React components and hooks to server-side APIs and database schema design. I focus on systems that scale, stay reliable, and disappear into the background for end users.",
    "At NymCard I took Fortress, an in-house real-time fraud detection system, from MVP to production. It evaluates 1,000+ rules per transaction, responds in under a second at millions of transactions per week, and blocks about $10K in fraud per month. I now own it and guide 2 engineers who joined later.",
    "Recently completed a 3-month on-site engagement in Riyadh, working directly with SAB Bank and Amazon teams on BNPL integrations, API alignment, and production readiness in a compliance-driven banking environment.",
    "Outside work I build my own products: kordrun, a CLI that runs a whole dev stack from one file, and PostMint, an AI writer for LinkedIn, X, and Instagram posts.",
  ],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Fraud Rules / Transaction", value: "1,000+" },
    { label: "Fraud Check Response", value: "<1s" },
    { label: "Developers Mentored", value: "100+" },
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export const experienceData: Experience[] = [
  {
    company: "NymCard",
    role: "Full Stack Engineer (Backend Focus)",
    period: "Jan 2024 - Present",
    location: "Dubai, UAE",
    type: "Remote",
    highlights: [
      "Took Fortress, an in-house real-time fraud detection system in Python (FastAPI), from MVP to production, replacing a third-party fraud PRM and blocking about $10K in fraud per month, and now own the system and guide 2 engineers who joined later",
      "Optimized Fortress to evaluate 1,000+ fraud rules per transaction and respond to the nCore platform within 1 second, at millions of transactions per week",
      "Cut GitHub Actions CI/CD build time by 30–40% with dependency caching and Docker build optimization, and PostgreSQL index size by 50% where indexes outgrew their tables",
      "Delivered a Buy Now Pay Later (BNPL) platform for SAB (React, TypeScript, Node.js, Python, PostgreSQL), working 3 months on-site at SAB with SAB and Amazon teams",
      "Delivered NEO PayLater, a similar BNPL product for SNB, and bank partner APIs for SNB and SAB that cut go-live time by about 40%",
      "Architected an identity verification microservice in Python (FastAPI) with Azure OpenAI and Google Cloud Vision OCR, handling 10,000+ checks per month and cutting review time from 5 days to 5 minutes",
      "Created a React and TypeScript merchant dashboard used by 10+ fintech partners, built 3 e-commerce plugins (WooCommerce, Magento, Shopify) for BNPL merchant onboarding, and automated fund allocation for NymCard for Business, cutting approval time by 20%",
    ],
    tech: [
      "TypeScript",
      "Python",
      "FastAPI",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Azure OpenAI",
      "Google Cloud Vision",
      "GitHub Actions",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "Everest Engineering",
    role: "Software Craftsperson",
    period: "Nov 2022 - Jan 2024",
    location: "Melbourne, Australia",
    type: "Remote",
    highlights: [
      "Directed full stack development of IndustryBest (Node.js, React, Firebase), with real-time collaboration tools that cut field paperwork by about 90% across 20+ construction projects",
      "Implemented a timesheet management system with PostgreSQL and REST APIs that reduced payroll processing errors by 50%",
      "Developed a lightweight version control tool with custom merge and conflict resolution logic, reducing merge conflicts by 70% for engineering teams",
      "Collaborated remotely with product, design, QA, and DevOps teams across Australia, India, and US time zones using Jira, Confluence, and GitHub",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Jest",
    ],
  },
  {
    company: "All Indian IT Services",
    role: "MERN Stack Developer",
    period: "Dec 2021 - Nov 2022",
    location: "Nagpur, India",
    type: "On-site",
    highlights: [
      "Owned end-to-end development of a government scholarship platform (Node.js, MongoDB, React, React Native) with real-time status tracking for 25,000+ students",
      "Digitized review, notification, and departmental workflows across 5 government departments, reducing paperwork by 75% and application processing time by 60%",
      "Built an accounting platform (invoicing, expense tracking, reporting) and a real-time finance KPI dashboard for clients with Node.js, Express, MongoDB, and React",
      "Secured student records with encryption and role-based access control, passing a government security audit with zero data breaches",
      "Deployed containerized services on AWS with monitoring and scaling, maintaining about 99.5% availability",
    ],
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "React Native",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "3Bit Digital",
    role: "Full Stack Developer",
    period: "Aug 2020 - Dec 2021",
    location: "Jabalpur, India",
    type: "On-site",
    highlights: [
      "Launched 5+ end-to-end web products with Node.js, Express, React, and MongoDB for B2B clients",
      "Improved delivery speed by 20% with reusable components and better sprint planning",
      "Reduced client portal and CMS load times by 35%",
      "Launched a new product line with business stakeholders, increasing Q1 revenue by 75%",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "AWS",
    ],
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Backend & Languages",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Redux",
      "Tailwind CSS",
      "React Native",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "APIs & Architecture",
    skills: [
      "System Design",
      "Microservices",
      "Distributed Systems",
      "Message Queues (Kafka, Redis)",
      "Caching",
      "Idempotency",
      "Query Optimization",
      "REST APIs",
      "WebSockets",
      "OAuth",
      "JWT",
      "Webhooks",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, ECS, Lambda, S3)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library"],
  },
  {
    title: "AI & Integrations",
    skills: [
      "Azure OpenAI",
      "Google Cloud Vision",
      "Stripe",
      "Google Calendar API",
    ],
  },
];

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "1st Place — Rajasthan IT Day Hackathon",
    description: "Issued by Physics Wallah & iNeuron.ai",
    year: "2023",
  },
  {
    title: "National Finalist — Smart India Hackathon",
    description: "National Level. Issued by Government of India",
    year: "2022",
  },
  {
    title: "Finalist — Microsoft Imagine Cup India",
    description: "Issued by Microsoft India",
    year: "2021",
  },
];

export const mentoringData = {
  title: "Mentored 100+ Developers",
  description:
    "At The 10x Academy, FunctionUp, PW Skills, and Wiingy — conducted weekly code reviews, led live debugging sessions, taught DSA and system design.",
  period: "2022 - 2023",
};

export const educationData = {
  degree: "Bachelor of Technology — Computer Science and Engineering",
  institution: "Gyan Ganga Institute of Technology and Sciences",
  location: "Jabalpur, India",
  period: "2019 - 2023",
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  context: string;
  url?: string;
}

export const projectsData: Project[] = [
  {
    title: "kordrun",
    description:
      "Developer CLI that starts, supervises, and proxies a whole polyglot dev stack (any language or command) from one Kordfile — dependency ordering, health checks, unified logs, and a live terminal dashboard. Ships for macOS and Linux with a one-line installer, license keys, and a free tier for 2 apps.",
    tech: ["CLI", "TUI", "Reverse Proxy", "macOS", "Linux", "Next.js"],
    context: "My Product",
    url: "https://kordrun.mohitkadwe.tech",
  },
  {
    title: "PostMint",
    description:
      "AI post writer that turns drafts or screenshots into LinkedIn, X, and Instagram posts in 9 formats, 10 voices, and 17 languages, with 8 PNG quote-card styles, an AI-text score, and a humanizer that strips AI tells.",
    tech: ["AI", "LLM", "Next.js"],
    context: "My Product",
    url: "https://postmint.mohitkadwe.tech",
  },
  {
    title: "Fortress — Fraud Detection",
    description:
      "In-house real-time fraud detection system in Python (FastAPI) that replaced a third-party PRM. Evaluates 1,000+ rules per transaction and responds within 1 second, at millions of transactions per week, blocking about $10K in fraud per month. Took it from MVP to production and now guides 2 engineers.",
    tech: ["Python", "FastAPI", "PostgreSQL", "GitHub Actions"],
    context: "NymCard",
  },
  {
    title: "BNPL Platform",
    description:
      "End-to-end Buy Now Pay Later product — merchant dashboard for 10+ fintech partners, React Native consumer app, bank partner APIs for SNB and SAB, NEO PayLater for SNB, and WooCommerce, Magento, and Shopify plugins for merchant onboarding.",
    tech: ["TypeScript", "React", "React Native", "Node.js", "Express", "Python", "PostgreSQL"],
    context: "NymCard",
  },
  {
    title: "PlaniPets",
    description:
      "French booking SaaS used by 100+ pet shop owners and 500+ users — booking, visit, and session scheduling with Google Calendar sync, Stripe subscriptions and vouchers, and Sinao invoicing via webhooks.",
    tech: ["Vue.js", "MySQL", "Stripe", "Google Calendar API"],
    context: "Freelance",
    url: "https://planipets.com",
  },
  {
    title: "vJoin",
    description:
      "Community events platform used by 20+ groups, 100+ parents, and 200+ children, where organizers run groups and events for tutoring, fitness, and racket sports — group approval, scheduling, RSVP and attendance, payment tracking, and competitions across web, iOS, and Android.",
    tech: ["React", "React Native", "Node.js"],
    context: "Freelance",
    url: "https://vjoin.app",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
