"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Heart, ArrowUp, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-900 dark:bg-[#020810] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white">Fikri Rizky</p>
              <p className="text-slate-500 text-xs">Data Science Enthusiast</p>
            </div>
          </div>

          {/* Credits */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>

          {/* Socials + Scroll top */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: siteConfig.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
              { icon: MessageCircle, href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`, label: "WhatsApp" },
            ].map((s) => (
              <motion.a
                key={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                href={s.href}
                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <s.icon size={15} />
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all ml-2"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Fikri Rizky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
