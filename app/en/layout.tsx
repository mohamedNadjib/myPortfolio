import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nessah Mohamed Nadjib — Full Stack Developer",
  description:
    "Portfolio of Nessah Mohamed Nadjib, a Full Stack developer specialized in systems integration, VoIP, payments and telecom.",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
