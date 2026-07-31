export type Profile = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  location: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  description: string | string[];
  stack: string[];
  period: string;
  location: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
};

export const profile: Profile = {
  name: "Nessah Mohamed Nadjib",
  role: "Développeur Full Stack",
  tagline:
    "Développeur Full Stack spécialisé dans les systèmes bancaires, je conçois des API sécurisées, des architectures fiables et des solutions de paiement critiques pour des environnements réglementés.",
  email: "nessah.nadjib@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-nadjib-nessah-824629228/",
  github: "https://github.com/mohamedNadjib/",
  cvUrl: "/assets/CV_French.pdf",
  location: "Alger, Algérie",
};

export const profileEn: Profile = {
  name: "Nessah Mohamed Nadjib",
  role: "Full Stack Developer",
  tagline:
    "Full Stack developer specialized in banking systems, building secure APIs, reliable architectures, and mission-critical payment solutions for regulated environments.",
  email: "nessah.nadjib@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-nadjib-nessah-824629228/",
  github: "https://github.com/mohamedNadjib/",
  cvUrl: "/assets/CV_English.pdf",
  location: "Algiers, Algeria",
};

export const education = [
  {
    school: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
    degree: "Master Ingénierie de logiciels",
    period: "09/2023 – 06/2025",
  },
  {
    school: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
    degree: "Licence Ingénierie des systèmes d'information et des logiciels",
    period: "12/2020 – 06/2023",
  },
];

export const educationEn = [
  {
    school: "University of Science and Technology Houari Boumediene (USTHB)",
    degree: "Master in Software Engineering",
    period: "09/2023 – 06/2025",
  },
  {
    school: "University of Science and Technology Houari Boumediene (USTHB)",
    degree: "Bachelor in Information Systems and Software Engineering",
    period: "12/2020 – 06/2023",
  },
];

export const experience = [
  {
    company: "Trust Bank Algérie",
    role: "Développeur Full Stack",
    description: [
      "Conception d'un RTGS pour le traitement des messages MX (ISO 20022) destinés aux flux de paiement interbancaires avec la Banque d'Algérie.",
      "Développement d'un système de Paiement Instantané (SPI) conforme à ISO 20022 pour le Centre de Pré-compensation Interbancaire (CPI).",
      "Réalisation d'une carte interbancaire dématérialisée en ASP.NET et Flutter en partenariat avec SATIM.",
    ],
    stack: ["ASP.NET", "ISO 20022", "SPI", "RTGS", "Flutter"],
    period: "07/2025 – Présent",
    location: "Hydra, Alger",
  },
  {
    company: "HB Technologies SPA",
    role: "Stage de fin d'études Master",
    description: [
      "Développement d'un système de fidélité et de paiement électronique en Spring Boot, ASP.NET et Flutter.",
      "Intégration d'une passerelle de paiement jPOS pour des transactions sécurisées ISO 8583.",
      "Implémentation d'un système de récompenses adaptatif basé sur le Q-Learning et émulation de carte à puce NFC en C#.",
    ],
    stack: ["Spring Boot", "ASP.NET", "Flutter", "jPOS", "ISO 8583", "C#"],
    period: "02/2025 – 06/2025",
    location: "Rouiba, Alger",
  },
  {
    company: "SARL DATAGIX",
    role: "Stage de fin d'études Licence",
    description: [
      "Extension de la plateforme WHMCS pour la gestion de services Cloud et Telecom depuis l'espace client.",
      "Intégration d'un module de supervision IPBX via les API 3CX.",
    ],
    stack: ["WHMCS", "Django", "3CX", "Cloud", "Telecom"],
    period: "02/2023 – 06/2023",
    location: "Mohammadia, Alger",
  },
];

export const experienceEn = [
  {
    company: "Trust Bank Algérie",
    role: "Full Stack Developer",
    description: [
      "Designed an RTGS for processing ISO 20022 MX messages for interbank payment flows with the Bank of Algeria.",
      "Developed an ISO 20022-compliant Instant Payment System (SPI) for the Interbank Pre-clearing Center.",
      "Delivered a dematerialized interbank card in ASP.NET and Flutter in partnership with SATIM.",
    ],
    stack: ["ASP.NET", "ISO 20022", "SPI", "RTGS", "Flutter"],
    period: "07/2025 – Present",
    location: "Hydra, Algiers",
  },
  {
    company: "HB Technologies SPA",
    role: "Master Internship",
    description: [
      "Developed a loyalty and e-payment platform using Spring Boot, ASP.NET and Flutter.",
      "Integrated a jPOS payment gateway for secure ISO 8583 transactions.",
      "Implemented an adaptive rewards system based on Q-Learning and NFC smart-card emulation in C#.",
    ],
    stack: ["Spring Boot", "ASP.NET", "Flutter", "jPOS", "ISO 8583", "C#"],
    period: "02/2025 – 06/2025",
    location: "Rouiba, Algiers",
  },
  {
    company: "SARL DATAGIX",
    role: "Bachelor Internship",
    description: [
      "Extended the WHMCS platform to manage Cloud and Telecom services from the client portal.",
      "Integrated a 3CX IPBX monitoring module through APIs.",
    ],
    stack: ["WHMCS", "Django", "3CX", "Cloud", "Telecom"],
    period: "02/2023 – 06/2023",
    location: "Mohammadia, Algiers",
  },
];

export const projects = [
  {
    name: "E-commerce website",
    description:
      "Plateforme complète de gestion de commandes et de ventes, offrant une expérience client fluide, un suivi des achats et des outils d'administration avancés pour la gestion des produits, des utilisateurs et des commandes.",
    tags: ["E-commerce", "Gestion des commandes", "Tableau de bord"],
    image: "/assets/order-hub.jpg",
    github: "https://github.com/mohamedNadjib/order-hub",
  },
  {
    name: "Carpooler",
    description:
      "Application de mise en relation de covoiturage dotée de fonctionnalités de géolocalisation en temps réel, de gestion d'itinéraires et de coordination dynamique entre conducteurs et passagers.",
    tags: ["Mobilité", "Géolocalisation", "Temps réel", "UX"],
    image: "/assets/carpooler.png",
    github: "https://github.com/mohamedNadjib/Carpooler",
  },
  {
    name: "OXXO-PHONE",
    description:
      "Intégration de la téléphonie d'entreprise 3CX à WHMCS, avec supervision IPBX et gestion d'appels permettant d'améliorer l'efficacité du support client et la gestion des services telecom.",
    tags: ["Intégration", "Téléphonie", "WHMCS", "3CX"],
    image: "/assets/oxxo-phone.png",
    github: "https://github.com/mohamedNadjib/OXXO-PHONE",
  },
];

export const projectsEn = [
  {
    name: "E-commerce website",
    description:
      "Complete order and sales management platform with a smooth customer experience, purchase tracking, and admin tools for products, users, and orders.",
    tags: ["E-commerce", "Order management", "Dashboard"],
    image: "/assets/order-hub.jpg",
    github: "https://github.com/",
  },
  {
    name: "Carpooler",
    description:
      "Ride-sharing app with real-time geolocation, route management, and dynamic coordination between drivers and riders.",
    tags: ["Mobility", "Geolocation", "Real-time", "UX"],
    image: "/assets/carpooler.png",
    github: "https://github.com/",
  },
  {
    name: "OXXO-PHONE",
    description:
      "3CX enterprise telephony integration with WHMCS, including IPBX monitoring and call management to improve support efficiency and telecom service delivery.",
    tags: ["Integration", "Telephony", "WHMCS", "3CX"],
    image: "/assets/oxxo-phone.png",
    github: "https://github.com/",
  },
];
