"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-12"
        >
          About Me
          <span className="gradient-text">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_280px] gap-8 md:gap-12 items-start">
          <div>
            {aboutData.summary.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-muted leading-relaxed mb-4 text-[15px]"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass card-hover p-4 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div variants={itemVariants} className="flex justify-center md:block">
            <div className="relative w-40 h-48 md:w-64 md:h-72 rounded-2xl overflow-hidden glass p-1">
              <Image
                src="/images/profile.jpeg"
                alt="Mohit Kadwe — Full Stack Engineer"
                fill
                priority
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 160px, 256px"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
