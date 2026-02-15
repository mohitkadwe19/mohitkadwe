"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 font-display"
        >
          <span className="block w-8 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary mb-3" />
          Featured Projects
          <span className="gradient-text">.</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="glass card-hover p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="text-[11px] font-mono font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full shrink-0">
                  {project.context}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent/10 text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
