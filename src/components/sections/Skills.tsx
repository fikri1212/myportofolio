"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  delay: number;
}

function SkillBar({ name, level, icon, delay }: SkillBarProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{name}</span>
        </div>
        <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-slate-900 rounded-full border-2 border-blue-500 shadow-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
}

const toolColors: Record<string, string> = {
  "Microsoft Excel": "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
  "Microsoft Word": "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
  "Microsoft PowerPoint": "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-500/20",
  "Google Colab": "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20",
  "VS Code": "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
  "Git": "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20",
  "Jupyter Notebook": "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-500/20",
  "XAMPP": "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            What I can do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-blue-900/30"
          >
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">💻</span> Programming Languages
            </h3>
            <div className="space-y-5">
              {skills.programming.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Data Science */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-blue-900/30"
          >
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🤖</span> Data Science & ML
            </h3>
            <div className="space-y-5">
              {skills.datascience.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
              ))}
              {skills.database.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={(skills.datascience.length + i) * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-blue-900/30"
        >
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">🛠️</span> Tools & Software
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all cursor-default ${toolColors[tool] || "bg-slate-50 dark:bg-white/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10"}`}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
