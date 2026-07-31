"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

type Item = {
  title: string;
  subtitle: string;
  period: string;
  description?: string | string[];
  location?: string;
  tags?: string[];
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative">
      {/* the trace: a vertical line connecting each node, like a signal path between systems */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

      {items.map((item, i) => (
        <motion.li
          key={item.title + item.period}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
          className="relative pl-10 pb-12 last:pb-0"
        >
          <span
            className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-signal bg-bg"
            aria-hidden="true"
          />
          <span
            className="absolute left-[3.5px] top-3 w-2 h-2 rounded-full bg-signal animate-pulseTrace"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-lg md:text-xl font-medium text-ink">
              {item.title}
            </h3>
            <span className="eyebrow text-teal">{item.period}</span>
          </div>
          <p className="text-dim mt-1">{item.subtitle}</p>

          {item.location && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-dim/80">
              <MapPin size={14} className="text-signal/70" />
              {item.location}
            </p>
          )}

          {item.description && (
            Array.isArray(item.description) ? (
              <ul className="mt-3 list-disc pl-5 text-dim leading-relaxed max-w-2xl space-y-2">
                {item.description.map((point) => (
                  <li key={point} className="text-dim leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-dim leading-relaxed max-w-2xl">{item.description}</p>
            )
          )}

          {item.tags && item.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="eyebrow text-teal/90 border border-teal/25 rounded-sm px-2.5 py-1"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
