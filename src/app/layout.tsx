import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title} | TypeScript, React, Node.js`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mohit Kadwe",
    "Full Stack Engineer",
    "Full Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "NymCard",
    "BNPL Developer",
    "Fintech Engineer",
    "GraphQL Developer",
    "PostgreSQL",
    "AWS Developer",
    "AI Solutions Engineer",
    "Remote Developer",
    "India Software Engineer",
    "Saudi Arabia Developer",
    "Dubai Developer",
    "React Native Developer",
    "Next.js Developer",
    "Express.js Developer",
    "Microservices Engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/profile.jpeg",
        width: 800,
        height: 800,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        image: `${siteConfig.url}/images/profile.jpeg`,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.linktree],
        knowsAbout: [
          "TypeScript",
          "React",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "GraphQL",
          "REST APIs",
          "AWS",
          "Docker",
          "Kubernetes",
          "Microservices",
          "React Native",
          "Next.js",
          "Python",
          "AI Solutions",
          "BNPL Systems",
          "Fintech",
        ],
        worksFor: {
          "@type": "Organization",
          name: "NymCard",
          url: "https://nymcard.com",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Gyan Ganga Institute of Technology and Sciences",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Riyadh",
          addressCountry: "SA",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent flash: apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
