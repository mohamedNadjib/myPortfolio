"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

type ContactProps = {
  locale?: "fr" | "en";
};

const copy = {
  fr: "Une opportunité, un projet, ou simplement envie d'échanger ? Mon canal est ouvert.",
  en: "An opportunity, a project, or just want to connect? My line is open.",
};

export default function Contact({ locale = "fr" }: ContactProps) {
  return (
    <section id="contact" className="section-pad px-6 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-dim leading-relaxed max-w-xl mx-auto"
        >
          {copy[locale]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-signal text-bg font-medium px-6 py-3 rounded-sm border border-signal/80 hover:bg-signal/90 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line text-ink px-6 py-3 rounded-sm hover:border-teal/60 transition w-full sm:w-auto justify-center"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
