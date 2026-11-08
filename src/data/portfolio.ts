export const siteConfig = {
  name: "Mohit Kadwe",
  title: "Full Stack Engineer",
  description:
    "Full Stack Engineer with 5+ years in fintech: real-time fraud detection, BNPL platforms and AI tools, built with TypeScript, React, Node.js and PostgreSQL.",
  url: "https://mohitkadwe.tech",
  email: "mohit.kadwe19@gmail.com",
  location: "India",
  links: {
    github: "https://github.com/mohitkadwe19",
    linkedin: "https://linkedin.com/in/mohit-kadwe",
    linktree: "https://linktr.ee/mohitkadwe",
  },
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Mohit Kadwe",
  tagline: "I build payment systems that process millions across MENA.",
  subtitle: "Open to opportunities",
  description:
    "Full Stack Engineer at NymCard — building real-time fraud detection, BNPL products, and AI-powered solutions in partnership with Visa & Mastercard.",
  cta: {
    primary: { label: "Get in Touch", href: "#contact" },
  },
};

export const aboutData = {
  summary: [
    "I build products end-to-end — from React components and hooks to server-side APIs and database schema design. I focus on systems that scale, stay reliable, and disappear into the background for end users.",
    "At NymCard I led a team of 3 engineers to build Fortress, an in-house real-time fraud detection system that evaluates 1,000+ rules per transaction and responds in under a second, at millions of transactions per week.",
    "Recently completed an on-site engagement in Riyadh, working directly with SAB Bank teams on BNPL integrations, API alignment, and production readiness in a compliance-driven banking environment.",
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
      "Led a team of 3 engineers to build Fortress, an in-house real-time fraud detection system, from design to production within weeks, replacing a third-party fraud PRM; continue to own and extend it",
      "Optimized Fortress to evaluate 1,000+ fraud rules per transaction and respond to the nCore platform within 1 second, at millions of transactions per week",
      "Reduced GitHub Actions CI/CD build time by 30–40%, and cut database index size by 50% after indexes had grown larger than their tables",
      "Delivered a Buy Now Pay Later (BNPL) platform with React, TypeScript, Node.js, Express, PostgreSQL, and a React Native app, and shipped bank partner APIs for SNB and SAB that cut go-live time by about 40%",
      "Architected an identity verification microservice using Azure OpenAI and Google Cloud Vision OCR, and automated fund allocation for NymCard for Business, reducing approval time by 20%",
      "Created a responsive React and TypeScript merchant dashboard used by 10+ fintech partners, and built 3 e-commerce plugins (WooCommerce, Magento, Shopify) for BNPL merchant onboarding",
    ],
    tech: [
      "TypeScript",
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
      "Directed full stack development of IndustryBest with Node.js, Express, React, and Firebase, delivering real-time collaboration tools that reduced field paperwork by about 90% across 20+ construction projects",
      "Implemented a timesheet management system with PostgreSQL and REST APIs, with validation and business rules that reduced payroll processing errors by 50%",
      "Developed a lightweight version control tool with custom merge and conflict resolution logic, reducing manual conflict resolution for engineering teams",
      "Maintained a Storybook library of reusable React components to improve UI consistency and speed up feature delivery",
      "Mentored and onboarded engineers, interviewed candidates, and collaborated remotely with product, design, QA, and DevOps teams across Australia, India, and US time zones",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Storybook",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "All Indian IT Services",
    role: "MERN Stack Developer",
    period: "Dec 2021 - Nov 2022",
    location: "Nagpur, India",
    type: "On-site",
    highlights: [
      "Owned end-to-end development of a government scholarship platform with Node.js, Express, MongoDB, React, and React Native, supporting secure applications and real-time status tracking for 25,000+ students",
      "Digitized review, notification, and departmental workflows across 5 government departments, reducing paperwork by 75% and application processing time by 60%",
      "Secured student records with encryption, role-based access control, secure REST APIs, and controlled document access",
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
      "Launched 5+ end-to-end web products with Node.js, Express, React, and MongoDB for B2B clients in multiple domains",
      "Improved delivery speed by 20% through reusable frontend components, backend modules, structured requirement analysis, and refined sprint planning",
      "Partnered with business stakeholders to define technical requirements and build client-facing portals and scalable backend services",
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
      "NestJS",
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
      "Accessibility",
      "Core Web Vitals",
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
      "Message Queues",
      "Caching",
      "Idempotency",
      "REST APIs",
      "GraphQL",
      "Webhooks",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (ECS, Lambda, S3)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Observability",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress", "React Testing Library", "k6", "TDD"],
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
    title: "Winner — Rajasthan IT Hackathon",
    description: "Software Edition. Issued by Physics Wallah & iNeuron.ai",
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
    "At The 10x Academy, FunctionUp, and PWSkills — conducted weekly code reviews, led live debugging sessions, taught DSA and system design. Many mentees placed at top tech companies.",
  period: "2022 - 2023",
};

export const educationData = {
  degree: "Bachelor of Technology — Computer Science and Engineering",
  institution: "Gyan Ganga Institute of Technology and Sciences",
  location: "Jabalpur, India",
  period: "2019 - 2023",
};

export const certificationsData = [
  "AWS Academy Cloud Foundations",
  "Programming Essentials in C",
  "Linux Essentials",
  "CCNA 1: Introduction to Networks",
  "JavaScript Essentials 1 (JSE)",
];

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
      "Developer CLI that starts, supervises, and proxies a whole dev stack across 6 language runtimes from one Kordfile — dependency ordering, health checks, unified logs, and a live terminal dashboard. Ships for macOS and Linux with a one-line installer, license keys, and a free tier for 2 apps.",
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
      "In-house real-time fraud detection system that replaced a third-party PRM. Evaluates 1,000+ rules per transaction and responds within 1 second, at millions of transactions per week. Led a team of 3 from design to production.",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "GitHub Actions"],
    context: "NymCard",
  },
  {
    title: "BNPL Platform",
    description:
      "End-to-end Buy Now Pay Later product — merchant dashboard for 10+ fintech partners, React Native consumer app, bank partner APIs for SNB and SAB, and WooCommerce, Magento, and Shopify plugins for merchant onboarding.",
    tech: ["TypeScript", "React", "React Native", "Node.js", "Express", "PostgreSQL"],
    context: "NymCard",
  },
  {
    title: "PlaniPets",
    description:
      "French booking SaaS for pet-care businesses — booking, visit, and session scheduling with Google Calendar sync, Stripe subscriptions and vouchers, Sinao invoicing via webhooks, and an admin panel with roles and business statistics.",
    tech: ["Vue.js", "MySQL", "Stripe", "Google Calendar API"],
    context: "Freelance",
    url: "https://planipets.com",
  },
  {
    title: "vJoin",
    description:
      "Community events platform where organizers run groups and events for tutoring, fitness, and racket sports — group approval, scheduling, RSVP and attendance, payment tracking, and competitions across web, iOS, and Android.",
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
