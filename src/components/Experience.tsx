"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experienceData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12"
        >
          Work Experience
          <span className="gradient-text">.</span>
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent" />

          <div className="space-y-8">
            {experienceData.map((exp) => (
              <motion.div
                key={exp.company}
                variants={cardVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1 top-6 w-[15px] h-[15px] rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-accent" />
                </div>

                <div className="glass card-hover p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-muted shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location} · {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
