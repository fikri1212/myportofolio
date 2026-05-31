"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, MapPin, Send, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50 dark:bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/fikririzky",
    href: siteConfig.github,
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50 dark:bg-white/10",
    iconColor: "text-slate-700 dark:text-slate-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/fikririzky",
    href: siteConfig.linkedin,
    color: "from-blue-600 to-blue-700",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-40" />
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
            Let&apos;s connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Saya terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar berdiskusi tentang dunia Data Science dan teknologi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact cards */}
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="group flex items-center gap-4 glass-card p-4 rounded-2xl border border-slate-200/60 dark:border-blue-900/30 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon size={20} className={item.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-mono tracking-wider uppercase mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.value}
                  </p>
                </div>
                <Send size={14} className="text-slate-300 dark:text-slate-700 group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 glass-card p-4 rounded-2xl border border-slate-200/60 dark:border-blue-900/30"
            >
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono tracking-wider uppercase mb-0.5">
                  Location
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {siteConfig.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl overflow-hidden border border-slate-200/60 dark:border-blue-900/30 shadow-lg"
          >
            {/* Card top gradient */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4" />
              <div className="relative">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Mari Berkolaborasi!
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Saya aktif mencari peluang sebagai Data Scientist, Data Analyst, atau Web Developer. Mari wujudkan ide bersama!
                </p>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Data Scientist", icon: "🤖", active: true },
                  { label: "Data Analyst", icon: "📊", active: true },
                  { label: "Web Developer", icon: "🌐", active: true },
                  { label: "ML Engineer", icon: "⚡", active: false },
                ].map((role) => (
                  <div key={role.label} className={`flex items-center gap-2 p-3 rounded-xl text-sm ${role.active ? "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-medium" : "bg-slate-50 dark:bg-white/5 text-slate-500"}`}>
                    <span>{role.icon}</span>
                    <span>{role.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}&su=Halo Fikri, Saya tertarik berkolaborasi`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Mail size={16} />
                  Kirim Email
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={siteConfig.cvUrl}
                  download
                  className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-white/5 transition-all"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
