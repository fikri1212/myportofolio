"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, GraduationCap, FolderOpen } from "lucide-react";
import { siteConfig } from "@/lib/data";

const statsIcons = { Brain, Code2, Database, GraduationCap, FolderOpen };

const stats = [
  { label: "Proyek Selesai", value: "10+", icon: FolderOpen, color: "text-blue-600" },
  { label: "Teknologi", value: "11+", icon: Code2, color: "text-violet-600" },
  { label: "Algoritma ML", value: "5+", icon: Brain, color: "text-cyan-600" },
  { label: "Tahun Belajar", value: "4+", icon: GraduationCap, color: "text-emerald-600" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-blue-950/5" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Halo! 👋 Saya{" "}
                <span className="text-blue-600 dark:text-blue-400">Fikri Rizky Candra, S.Kom</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {siteConfig.about}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wider">
                Core Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Data Science", "Machine Learning", "Data Mining", "Web Development", "Data Analysis", "Data Visualization"].map((interest) => (
                  <span key={interest} className="tech-badge">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Nama", value: siteConfig.name },
                  { label: "Lokasi", value: "Padang, Sumatera Barat" },
                  { label: "Email", value: siteConfig.email },
                  { label: "Status", value: "Open to Work ✅" },
                ].map((info) => (
                  <div key={info.label} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">{info.label}</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{info.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={22} className={stat.color} />
                </div>
                <div className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}

            {/* Decorative card */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 glass-card rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-slate-400 font-mono ml-2">profile.py</span>
                </div>
                <pre className="text-xs font-mono text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="text-purple-500 dark:text-purple-400">def</span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">fikri_rizky</span>
                  <span className="text-slate-500">():</span>{"\n"}
                  {"  "}<span className="text-slate-400">"""Fresh Graduate | Data Science"""</span>{"\n"}
                  {"  "}skills <span className="text-slate-500">=</span>{" "}
                  <span className="text-green-600 dark:text-green-400">[&quot;Python&quot;, &quot;ML&quot;, &quot;PHP&quot;]</span>{"\n"}
                  {"  "}<span className="text-purple-500 dark:text-purple-400">return</span> ready_to_work
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
