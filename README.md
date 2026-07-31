# Portfolio — Nessah Mohamed Nadjib

Site portfolio statique construit avec **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS** et **Framer Motion**, prêt à déployer sur **Vercel**.

## 1. Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## 2. Personnaliser le contenu

Tout le texte (formation, expériences, projets, coordonnées) est centralisé dans **`lib/data.ts`**. Modifie ce fichier — aucune autre modification n'est nécessaire pour changer le contenu.

## 3. Remplacer les images

Des visuels de substitution ont été générés dans `public/assets/`. Remplace-les par tes propres fichiers (même nom, ou mets à jour le chemin dans `lib/data.ts`) :

| Fichier | Utilisation |
|---|---|
| `public/assets/me.jpg` | Photo de profil (idéalement carrée, 600×600px min) |
| `public/assets/order-hub.jpg` | Capture d'écran du projet Order-Hub |
| `public/assets/carpooler.jpg` | Capture d'écran du projet Carpooler |
| `public/assets/oxxo-phone.jpg` | Capture d'écran du projet OXXO-PHONE |
| `public/assets/CV_French.pdf` | Ton CV en PDF (référencé par le bouton "Télécharger mon CV") |

Pense aussi à mettre à jour `profile.github` et les liens `github` de chaque projet dans `lib/data.ts` — ils pointent actuellement vers des URLs à compléter.

## 4. Déployer sur Vercel

**Option A — via GitHub (recommandé)**
1. Crée un nouveau dépôt sur GitHub et pousse ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/<ton-repo>.git
   git push -u origin main
   ```
2. Va sur [vercel.com](https://vercel.com), clique **Add New → Project**, importe le dépôt.
3. Vercel détecte Next.js automatiquement — laisse les réglages par défaut et clique **Deploy**.
4. Ton site est en ligne sur une URL `*.vercel.app` (tu peux ensuite y attacher un nom de domaine personnalisé dans les réglages du projet).

**Option B — via la CLI Vercel**
```bash
npm i -g vercel
vercel        # suit les instructions, environnement de preview
vercel --prod # déploiement en production
```

## Structure du projet

```
app/            # Layout racine, page principale, styles globaux
components/     # Nav, Hero, Timeline, ProjectCard, Contact, Footer, SectionHeading
lib/data.ts     # Tout le contenu éditable (profil, formation, expérience, projets)
public/assets/  # Images (à remplacer par les tiennes)
```

## Notes de design

- **Palette** : fond graphite (`#12151C`), accent signal ambre (`#E8A33D`), accent secondaire cyan-teal (`#6FBFB0`) — inspirée des voyants d'équipements télécom, en écho à ton expérience VoIP / passerelles de paiement.
- **Typographie** : Space Grotesk (titres), Inter (texte courant), IBM Plex Mono (labels, dates, tags techniques).
- **Élément signature** : la ligne de trace verticale qui relie les entrées de formation/expérience, et le tracé façon oscilloscope dans le hero — une métaphore visuelle de l'intégration de systèmes.
- Accessibilité : focus clavier visible, `prefers-reduced-motion` respecté, contraste vérifié.
