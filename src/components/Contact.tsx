"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4 font-mono">
            What&apos;s Next?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s Build Together
            <span className="gradient-text">.</span>
          </h2>
          <p className="text-muted mb-10 max-w-md mx-auto text-[15px] leading-relaxed">
            Open to connecting about payment systems, AI automation, developer
            growth, or your next big project.
          </p>
        </motion.div>

        <motion.a
          href={`mailto:${siteConfig.email}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 mb-10"
        >
          <Mail size={16} />
          Discuss a Role
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: siteConfig.links.github, icon: Github, label: "GitHub" },
            { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: siteConfig.links.linktree, icon: ExternalLink, label: "Linktree" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-hover p-3 text-muted hover:text-accent transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
