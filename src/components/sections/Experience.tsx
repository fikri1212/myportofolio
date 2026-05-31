"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            My journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="gradient-text">Experience</span> & Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-400 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 mt-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-[#050b18] shadow-md shadow-blue-500/30"
                  />
                </div>

                {/* Year badge (hidden on mobile, shown on md) */}
                <div className={`hidden md:flex w-1/2 items-center ${index % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"}`}>
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-mono font-bold rounded-full shadow-sm shadow-blue-600/30">
                    {exp.year}
                  </span>
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-5 shadow-sm border border-slate-200/60 dark:border-blue-900/30 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    {/* Mobile year */}
                    <span className="md:hidden inline-block px-3 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded-full mb-3">
                      {exp.year}
                    </span>

                    <h3 className="font-display font-bold text-sm md:text-base text-slate-900 dark:text-white mb-2 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
