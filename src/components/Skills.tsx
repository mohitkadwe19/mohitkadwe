"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12"
        >
          Technical Skills
          <span className="gradient-text">.</span>
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass card-hover p-5"
            >
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3 font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[13px] rounded-lg bg-background text-foreground/80 font-medium border border-card-border"
                  >
                    {skill}
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
