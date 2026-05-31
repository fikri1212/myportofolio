"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Data Science": "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400",
  "Machine Learning": "bg-violet-50 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400",
  "Web Dev": "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">
            Beberapa proyek yang telah saya kerjakan selama masa studi
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/10 border border-slate-200/60 dark:border-blue-900/30 transition-all duration-300 flex flex-col"
            >
              {/* Card header with gradient */}
              <div className={`relative h-36 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-4 w-24 h-24 rounded-full bg-white/20 blur-xl" />
                  <div className="absolute bottom-0 left-4 w-16 h-16 rounded-full bg-white/20 blur-lg" />
                </div>
                <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-black/30 backdrop-blur-sm ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={12} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-4 border-t border-slate-100 dark:border-white/10">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all"
                  >
                    <Github size={14} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-sm shadow-blue-600/30"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/fikririzky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all"
          >
            <Github size={16} />
            Lihat Semua Proyek di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
