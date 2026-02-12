export const siteConfig = {
  name: "Mohit Kadwe",
  title: "Full Stack Engineer",
  description:
    "Full Stack Engineer with 5+ years building high-scale SaaS products using TypeScript, React, Node.js, Express, and PostgreSQL. Experienced in fintech, BNPL systems, and AI-powered solutions across MENA region.",
  url: "https://mohitkadwe.dev",
  email: "mohitdkadwe19@gmail.com",
  location: "Saudi Arabia",
  links: {
    github: "https://github.com/mohit-kadwe",
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
    "Full Stack Engineer at NymCard — shipping BNPL products, AI-powered solutions, and e-commerce integrations in partnership with Visa & Mastercard.",
  cta: {
    primary: { label: "Get in Touch", href: "#contact" },
    secondary: {
      label: "Download Resume",
      href: "/MOHIT_KADWE_Resume.pdf",
    },
  },
};

export const aboutData = {
  summary: [
    "I build products end-to-end — from React components and hooks to server-side APIs and database schema design. I focus on systems that scale, stay reliable, and disappear into the background for end users.",
    "Recently completed an on-site engagement in Riyadh, working directly with SAB Bank teams on BNPL integrations, API alignment, and production readiness in a compliance-driven banking environment.",
    "Alongside payments, I build AI-powered solutions using Azure OpenAI, Claude, and Gemini — cutting document processing time by 60% and building chatbots handling thousands of customer queries autonomously.",
  ],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Developers Mentored", value: "100+" },
    { label: "API Integrations", value: "1000+" },
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
      "Led full-stack development of BNPL platform using TypeScript, Node.js, Express, React, and PostgreSQL, designing public APIs for major bank integrations (SNB, SAB) — reducing partner go-live time by 40%",
      "Built merchant dashboard serving 10+ fintech partners with analytics, payment configuration, and BNPL management",
      "Developed consumer mobile app (React Native) and checkout flow optimized for conversion",
      "Architected Identity Verification microservice integrating OpenAI and Google Vision for OCR-based validation with 95%+ accuracy",
      "Built e-commerce plugins (WooCommerce, Magento, Shopify) processing millions in transactions monthly — platform integrated with 1000+ APIs in partnership with Visa & Mastercard",
      "Enhanced NFB (Nymcard For Business) backend with Express/TypeScript, optimizing fund allocation workflows with asynchronous processing — reducing approval time by 20%",
    ],
    tech: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Azure OpenAI",
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
      "Led full-stack development for IndustryBest (CompliBuild) — eliminating 90% of field paperwork across 20+ construction projects",
      "Built robust timesheet system with Spring Boot and PostgreSQL — reducing payroll processing errors by 50%",
      "Created lightweight version control system in Go — cutting merge conflicts by 70% and accelerating CI/CD by 2x",
      "Maintained component library with Storybook, promoting code reusability across web and mobile platforms",
      "Architected microservices backend with API-first design, enabling seamless integration and data flow across web and mobile platforms",
      "Collaborated across distributed teams in Australia, India, and US time zones",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Go",
      "GraphQL",
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
      "Led end-to-end development of government scholarship portal serving 25,000+ students with secure submission and real-time tracking",
      "Architected encrypted data systems with role-based access control — maintaining 100% compliance with government data privacy protocols",
      "Digitized workflows across 5 departments, cutting paperwork by 75% and processing time by 60%",
      "Deployed cloud-native infrastructure on AWS with Docker — maintaining 99.5% uptime statewide",
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
      "Led 5+ end-to-end product builds delivering all projects on time with 95%+ stakeholder satisfaction",
      "Boosted project delivery speed by 20% through optimized sprint planning and reusable component architecture",
      "Launched new product line with scalable backend architecture — increasing Q1 revenue by 75%",
      "Improved load times by 35% and user engagement through performance optimization",
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
      "Express",
      "TypeScript",
      "JavaScript",
      "Python",
      "NestJS",
      "Go",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "Vite",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "APIs & Architecture",
    skills: [
      "REST APIs",
      "GraphQL",
      "Microservices",
      "FastAPI",
      "Async Programming",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (ECS, Lambda, S3)",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Azure",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "Mocha", "Cypress", "React Testing Library", "K6", "TDD"],
  },
  {
    title: "AI & Tools",
    skills: [
      "Azure OpenAI",
      "Claude API",
      "Gemini",
      "Google Vision API",
      "LLM Fine-tuning",
      "Prompt Engineering",
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
    title: "Winner — Rajasthan IT Day Hackathon",
    description: "1st Place, Software Edition. Issued by Physics Wallah & iNeuron.ai",
    year: "2023",
  },
  {
    title: "2nd Rank — Smart India Hackathon",
    description: "National Level. Issued by Government of India",
    year: "2022",
  },
  {
    title: "All India 2nd Rank — Microsoft Imagine Cup",
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
  degree: "Bachelor of Technology — Computer Science",
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
}

export const projectsData: Project[] = [
  {
    title: "BNPL Platform",
    description:
      "End-to-end Buy Now Pay Later product — merchant dashboard, consumer app, checkout flow, and e-commerce plugins (WooCommerce, Magento, Shopify) serving 10+ fintech partners across MENA.",
    tech: ["TypeScript", "React", "React Native", "Node.js", "PostgreSQL", "GraphQL"],
    context: "NymCard",
  },
  {
    title: "CompliBuild (IndustryBest)",
    description:
      "Construction compliance platform with real-time collaboration features. Eliminated 90% of field paperwork across 20+ projects with a modular React component library.",
    tech: ["React", "Node.js", "Express", "Firebase", "Storybook"],
    context: "Everest Engineering",
  },
  {
    title: "Government Scholarship Portal",
    description:
      "Web + mobile portal serving 25,000+ students with secure application submission, real-time tracking, encrypted data systems, and role-based access — 100% compliance with government privacy protocols.",
    tech: ["React", "React Native", "Node.js", "MongoDB", "AWS"],
    context: "All Indian IT Services",
  },
  {
    title: "E-commerce & Logistics Suite",
    description:
      "Full-featured e-commerce platform with Razorpay/Stripe payments, inventory management, and a companion transport/logistics app with route planning and real-time delivery tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    context: "3Bit Digital",
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
