"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, ArrowDown } from "lucide-react";
import type { Profile } from "@/lib/data";

type HeroProps = {
  profile: Profile;
  locale?: "fr" | "en";
};

const copy = {
  fr: {
    greeting: "Bonjour, je suis",
    resume: "Télécharger mon CV",
    contact: "Me contacter",
    scroll: "Défiler vers la section suivante",
    imageAlt: (name: string) => `Photo de ${name}`,
  },
  en: {
    greeting: "Hello, I'm",
    resume: "Download resume",
    contact: "Contact me",
    scroll: "Scroll to the next section",
    imageAlt: (name: string) => `Photo of ${name}`,
  },
};

export default function Hero({ profile, locale = "fr" }: HeroProps) {
  const text = copy[locale];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-grid bg-grid pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_75%)]" />

      <svg
        className="pointer-events-none absolute left-0 right-0 bottom-[18%] w-full h-24 opacity-70"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,50 L180,50 L210,20 L240,80 L270,10 L300,90 L330,50 L520,50 L550,30 L580,70 L610,50 L1200,50"
          fill="none"
          stroke="#20847D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      <div className="relative mx-auto max-w-6xl w-full px-6 md:px-10 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-teal mb-4"
          >
            {text.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-display text-xl md:text-2xl text-signal"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-dim leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 bg-signal text-bg font-medium px-6 py-3 rounded-sm border border-signal/80 hover:bg-signal/90 transition-colors"
            >
              {text.resume}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line text-ink px-6 py-3 rounded-sm hover:border-signal/60 transition"
            >
              {text.contact}
            </a>

            <div className="flex items-center gap-3 ml-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-dim hover:text-teal transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-dim hover:text-teal transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto md:mx-0 w-52 h-52 md:w-72 md:h-72"
        >
          <div className="absolute -inset-3 rounded-full border border-signal/30" />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-line bg-raised">
            <Image
              src="/assets/me.jpg"
              alt={text.imageAlt(profile.name)}
              fill
              sizes="288px"
              className="object-cover object-center"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        aria-label={text.scroll}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-dim hover:text-signal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
