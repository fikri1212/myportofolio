"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, MapPin } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-blue-950/5" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Academic background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 dark:border-blue-900/30">
              {/* Header banner */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-slate-900 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <GraduationCap size={26} className="text-white" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-mono tracking-widest uppercase mb-1">{edu.period}</div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-100 font-medium text-sm">{edu.school}</p>
                    <p className="text-blue-100 font-medium text-sm">IPK : {edu.IPK}</p>
                    <div className="flex items-center gap-1.5 mt-2 text-blue-200 text-xs">
                      <MapPin size={11} />
                      <span>Padang, Sumatera Barat</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 grid md:grid-cols-2 gap-6">
                {/* Specialization */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={16} className="text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                      Peminatan
                    </h4>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="font-bold text-blue-700 dark:text-blue-400">{edu.specialization}</p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award size={16} className="text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                      Highlights
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">{i + 1}</span>
                        </div>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
