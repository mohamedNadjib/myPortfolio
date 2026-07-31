"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  align = "left",
}: {
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
    </motion.div>
  );
}
