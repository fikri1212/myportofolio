"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Download, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub", color: "hover:text-slate-900 dark:hover:text-white" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email", color: "hover:text-red-500" },
  { icon: MessageCircle, href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`, label: "WhatsApp", color: "hover:text-green-500" },
];

const floatingTags = [
  { label: "Machine Learning", top: "15%", left: "5%", delay: 0 },
  { label: "Data Mining", top: "10%", right: "8%", delay: 0.5 },
  { label: "Python", bottom: "25%", left: "3%", delay: 1 },
  { label: "PHP", bottom: "20%", right: "5%", delay: 1.5 },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 dark:from-blue-950/20 dark:via-[#050b18] dark:to-[#050b18]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Floating tech tags */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: tag.delay + 1.5 },
            scale: { duration: 0.5, delay: tag.delay + 1.5 },
            y: { duration: 4, repeat: Infinity, delay: tag.delay, ease: "easeInOut" }
          }}
          className="absolute hidden lg:flex tech-badge text-xs"
          style={{
            top: tag.top,
            bottom: (tag as { bottom?: string }).bottom,
            left: (tag as { left?: string }).left,
            right: (tag as { right?: string }).right,
          }}
        >
          <Sparkles size={10} />
          {tag.label}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to Opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-600 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3"
            >
              👋 Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
            >
              Fikri Rizky{" "}
              <span className="gradient-text">Candra, S.Kom</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                Fresh Graduate{" "}
                <span className="text-slate-900 dark:text-white font-semibold">Teknik Informatika</span>
                {" "}·{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Data Science</span>
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm mb-8 justify-center lg:justify-start"
            >
              <MapPin size={14} />
              <span>{siteConfig.location}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0"
            >
              Bersemangat dalam mengeksplorasi data untuk menghasilkan{" "}
              <span className="text-slate-800 dark:text-slate-200 font-medium">insight yang bermakna</span>.
              Siap berkontribusi dalam dunia{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">Data Science</span> dan{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">Software Development</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={siteConfig.cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200"
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-200"
              >
                <Mail size={16} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-slate-400 dark:text-slate-600">Follow me</span>
              <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-500 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-500/10 ${social.color}`}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800/50 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-blue-100 dark:border-blue-900/30 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Blob glow */}
              <div className="absolute inset-0 blob bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-600/20 dark:to-cyan-600/20 blur-xl scale-110" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-[#0d1526] shadow-2xl glow-blue">
                <Image
  src="/images/profile.jpeg"
  alt="Fikri Rizky Candra"
  fill
  className="object-cover object-top"
  priority
/>
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 top-8 glass-card rounded-xl px-3 py-2 shadow-lg border border-white/50 dark:border-blue-500/20"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Specialization</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Data Science</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -left-4 bottom-12 glass-card rounded-xl px-3 py-2 shadow-lg border border-white/50 dark:border-blue-500/20"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">University</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">UPI YPTK</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
