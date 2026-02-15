"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { heroData, siteConfig } from "@/data/portfolio";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const nameWords = heroData.name.split(" ");

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-16 pb-8 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 mesh-gradient" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-medium text-accent">{heroData.subtitle}</span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent font-mono text-sm tracking-wide mb-3"
        >
          {heroData.greeting}
        </motion.p>

        {/* Name with staggered word reveal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 font-display">
          {nameWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline-block mr-4 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3, type: "spring" }}
            className="gradient-text"
          >
            .
          </motion.span>
          <span className="sr-only"> — Full Stack Engineer</span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted font-medium mb-3"
        >
          {heroData.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-sm text-muted/80 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          {heroData.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group px-7 py-3 bg-accent text-white dark:text-[#0f172a] rounded-full font-medium text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            <Mail size={16} />
            {heroData.cta.primary.label}
          </a>
          <a
            href={heroData.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 glass font-medium text-sm inline-flex items-center gap-2 text-foreground hover:border-accent/50 transition-all duration-300 rounded-full"
          >
            <Download size={16} />
            {heroData.cta.secondary.label}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-muted/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
