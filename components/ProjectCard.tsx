"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  index: number;
  locale?: "fr" | "en";
};

const ariaCopy = {
  fr: (name: string) => `Voir le code de ${name} sur GitHub`,
  en: (name: string) => `View ${name} code on GitHub`,
};

const imageAlt = {
  fr: (name: string) => `Aperçu du projet ${name}`,
  en: (name: string) => `Project preview for ${name}`,
};

export default function ProjectCard({
  name,
  description,
  tags,
  image,
  github,
  index,
  locale = "fr",
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative rounded-md border border-line bg-raised overflow-hidden hover:border-signal/50 transition-colors"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg">
        <Image
          src={image}
          alt={imageAlt[locale](name)}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-raised via-transparent to-transparent opacity-90" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-ink">{name}</h3>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaCopy[locale](name)}
            className="shrink-0 inline-flex items-center gap-1 text-dim hover:text-signal transition-colors"
          >
            <Github size={18} />
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="mt-3 text-dim leading-relaxed text-[0.95rem]">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="eyebrow text-teal/90 border border-teal/25 rounded-sm px-2.5 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
