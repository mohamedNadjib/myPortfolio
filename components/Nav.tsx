"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile, profileEn } from "@/lib/data";

type Locale = "fr" | "en";

type NavProps = {
  locale?: Locale;
};

const linksByLocale: Record<Locale, { href: string; label: string }[]> = {
  fr: [
    { href: "#experience", label: "Expérience" },
    { href: "#projects", label: "Projets" },
    { href: "#education", label: "Formation" },
    { href: "#contact", label: "Contact" },
  ],
  en: [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
};

const localeSwitch: Record<Locale, { href: string; label: string }> = {
  fr: { href: "/en", label: "English" },
  en: { href: "/", label: "Français" },
};

export default function Nav({ locale = "fr" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = linksByLocale[locale];
  const currentProfile = locale === "fr" ? profile : profileEn;
  const cvLabel = locale === "fr" ? "CV" : "Resume";
  const mobileCvLabel = locale === "fr" ? "Télécharger le CV" : "Download resume";
  const menuLabel = open
    ? locale === "fr"
      ? "Fermer le menu"
      : "Close menu"
    : locale === "fr"
    ? "Ouvrir le menu"
    : "Open menu";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-ink">
          {profile.name}
          <span className="text-signal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow text-dim hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={currentProfile.cvUrl}
              className="eyebrow border border-signal/60 bg-signal/10 text-signal px-4 py-2 rounded-sm hover:bg-signal/20 hover:text-bg transition-colors"
            >
              {cvLabel}
            </a>
          </li>
          <li>
            <a
              href={localeSwitch[locale].href}
              className="eyebrow text-teal hover:text-ink transition-colors"
            >
              {localeSwitch[locale].label}
            </a>
          </li>
        </ul>

        <button
          aria-label={menuLabel}
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-line px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-dim hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={currentProfile.cvUrl}
            onClick={() => setOpen(false)}
            className="eyebrow border border-signal/60 bg-signal/10 text-signal px-4 py-2 rounded-sm text-center hover:bg-signal/20 transition-colors"
          >
            {mobileCvLabel}
          </a>
          <a
            href={localeSwitch[locale].href}
            onClick={() => setOpen(false)}
            className="eyebrow text-teal text-center hover:text-ink transition-colors"
          >
            {localeSwitch[locale].label}
          </a>
        </div>
      )}
    </header>
  );
}
