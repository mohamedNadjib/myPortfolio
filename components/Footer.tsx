import { profile } from "@/lib/data";

type FooterProps = {
  locale?: "fr" | "en";
};

const copy = {
  fr: "Tous droits réservés.",
  en: "All rights reserved.",
};

export default function Footer({ locale = "fr" }: FooterProps) {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-dim">
        <p>
          © {new Date().getFullYear()} {profile.name}. {copy[locale]}
        </p>
        <p className="eyebrow text-dim/70">{profile.location}</p>
      </div>
    </footer>
  );
}
