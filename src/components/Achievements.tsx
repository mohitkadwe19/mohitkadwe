"use client";

import { motion } from "motion/react";
import { Trophy, GraduationCap, Award, Users } from "lucide-react";
import {
  achievementsData,
  mentoringData,
  educationData,
  certificationsData,
} from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 font-display"
        >
          <span className="block w-8 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary mb-3" />
          Achievements
          <span className="gradient-text">.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Awards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
              <Trophy size={14} />
              Awards & Hackathons
            </h3>
            <div className="space-y-3">
              {achievementsData.map((a) => (
                <motion.div
                  key={a.title}
                  variants={itemVariants}
                  className="glass card-hover p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm">{a.title}</p>
                      <p className="text-xs text-muted mt-1">{a.description}</p>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full shrink-0">
                      {a.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mentoring */}
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
                <Users size={14} />
                Mentoring
              </h3>
              <motion.div variants={itemVariants} className="glass card-hover p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm">{mentoringData.title}</p>
                    <p className="text-xs text-muted mt-1">{mentoringData.description}</p>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full shrink-0">
                    {mentoringData.period}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Education */}
            <div>
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
                <GraduationCap size={14} />
                Education
              </h3>
              <motion.div variants={itemVariants} className="glass card-hover p-4">
                <p className="font-semibold text-sm">{educationData.degree}</p>
                <p className="text-xs text-muted mt-1">
                  {educationData.institution}
                </p>
                <p className="text-xs text-muted/70 mt-1">
                  {educationData.location} &middot; {educationData.period}
                </p>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
                <Award size={14} />
                Certifications
              </h3>
              <div className="space-y-2">
                {certificationsData.map((cert) => (
                  <motion.div
                    key={cert}
                    variants={itemVariants}
                    className="glass card-hover px-4 py-3"
                  >
                    <p className="text-sm text-foreground/80">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
