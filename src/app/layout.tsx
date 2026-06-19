import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Herrison Souza | Desenvolvedor Web Freelancer & Sistemas Web",
  description: "Transformo ideias em sites de alta performance e conversão. Especialista em Landing Pages, Sites Institucionais, Portfólios e Sistemas Web em Next.js e React.",
  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "landing page",
    "site profissional",
    "freelancer next.js",
    "desenvolvedor web",
    "criação de portfólio",
    "desenvolvimento frontend",
    "desenvolvedor fullstack"
  ],
  authors: [{ name: "Herrison Souza" }],
  creator: "Herrison Souza",
  openGraph: {
    title: "Herrison Souza | Criação de Sites de Alta Conversão",
    description: "Landing Pages premium, Sites Institucionais e Sistemas Web sob medida com Next.js, Tailwind CSS e TypeScript.",
    url: "https://portfolio-herrison.vercel.app", // Fallback URL, standard for SEO
    siteName: "Herrison Souza Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Herrison Souza - Criação de Sites Profissionais e Sistemas Web",
    "image": "https://portfolio-herrison.vercel.app/avatar-placeholder.png",
    "url": "https://portfolio-herrison.vercel.app",
    "telephone": "+5571981181618",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "description": "Desenvolvimento de Landing Pages, Sites Institucionais e Sistemas Web Premium focados em alta performance, credibilidade e conversão.",
    "sameAs": [
      "https://github.com/Stormlig",
      "https://www.linkedin.com/in/herrison-souza-630118187/"
    ]
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#030014] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
