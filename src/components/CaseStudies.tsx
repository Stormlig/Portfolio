"use client";

import React, { useState } from "react";
import { Code2, ArrowUpRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const projects = [
    {
      title: "MEIDAY App",
      category: "sistema",
      categoryLabel: "Sistema Web / SaaS",
      problem: "Microempreendedores individuais (MEIs) careciam de uma plataforma simples, intuitiva e automatizada para lidar com burocracias fiscais, gerenciar o DAS mensal e controlar suas finanças integradas.",
      solution: "Aplicativo web completo com dashboard financeiro, controle de faturamento anual MEI, relatórios automáticos e controle de impostos integrados.",
      technologies: ["Next.js", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      result: "Plataforma SaaS robusta com usabilidade facilitada, oferecendo fluxo automatizado para controle financeiro do microempreendedor.",
      demoUrl: "https://meiday.com.br",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "MEIDAY Landing Page",
      category: "landing",
      categoryLabel: "Landing Page / Conversão",
      problem: "Falta de uma página de entrada de alto impacto para explicar as funcionalidades do aplicativo MeiDay e capturar novos leads",
      solution: "Desenvolvimento de uma Landing Page otimizada para SEO, ultra responsiva, rica em ilustrações das funções e com CTAs bem posicionados.",
      technologies: ["Next.js", "Supabase", "Framer Motion", "Tailwind CSS", "TypeScript"],
      result: "Aumento considerável na taxa de conversão de cliques em cadastros e posicionamento orgânico para termos do setor.",
      demoUrl: "https://mei.meiday.com.br",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Barbearia Inteligente",
      category: "sistema",
      categoryLabel: "Sistema Web / Gestão",
      problem: "Dificuldade de donos de barbearias em gerenciar os agendamentos dos clientes, comissão de barbeiros parceiros e estoque de produtos.",
      solution: "Sistema completo de agendamento online com painel administrativo integrado, controle financeiro automático de comissão e controle de estoque.",
      technologies: ["React", "Supabase", "Tailwind CSS", "TypeScript"],
      result: "Redução de 80% nos erros de agendamento e aumento na taxa de retorno dos clientes recorrentes da barbearia.",
      demoUrl: "/portfolio/barbearia",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Portal CL Cars",
      category: "sistema",
      categoryLabel: "Portal Web / UI-UX",
      problem: "Concessionária de automóveis de luxo sem catálogo online, impossibilitando a exibição rápida de carros premium para potenciais compradores.",
      solution: "Catalogo digital interativo e responsivo com filtros inteligentes por marca, modelo e ano, e animações premium de alta fluidez.",
      technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      result: "Interface extremamente fluida que gerou maior tempo de permanência na página e percepção de valor dos veículos premium.",
      demoUrl: "https://cl-cars.vercel.app/",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Clínica Dr. Arthur - Nutricionista",
      category: "landing",
      categoryLabel: "Landing Page Demonstrativa",
      problem: "Nutricionista sem canal de conversão online de alto nível, perdendo clientes potenciais que buscam consultas particulares de alto ticket.",
      solution: "Landing page premium voltada a atletas e emagrecimento, contendo fotos de resultados, cálculo de IMC dinâmico e agendamento instantâneo no WhatsApp.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      result: "Demo de alta conversão. Serve como modelo ideal de atração de pacientes para médicos, nutricionistas e coaches.",
      demoUrl: "/portfolio/nutricionista",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Espaço Camila Soares - Psicologia",
      category: "portfolio",
      categoryLabel: "Portfólio / Consultório",
      problem: "Psicóloga clínica necessitando transmitir acolhimento, autoridade e segurança para captar novos pacientes particulares online.",
      solution: "Design minimalista e calmo com tópicos de especialidades, explicações sobre a terapia online, FAQ esclarecedor e botão de pré-agendamento.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      result: "Página demonstrativa focada em empatia e credibilidade técnica. Ideal para terapeutas, psiquiatras e psicólogos.",
      demoUrl: "/portfolio/psicologo",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Souza Advocacia Corporativa",
      category: "landing",
      categoryLabel: "Portal Institucional Jurídico",
      problem: "Escritórios jurídicos necessitam de uma imagem digital extremamente forte, sóbria e corporativa para fechar contratos empresariais robustos.",
      solution: "Landing page sofisticada focada em Direito Corporativo e Tributário, com formulário de consulta sob sigilo e áreas de atuação detalhadas.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      result: "Modelo demonstrativo de alta sofisticação visual para advogados que buscam clientes premium de alto ticket.",
      demoUrl: "/portfolio/advogado",
      codeUrl: null,
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const categories = [
    { value: "todos", label: "Todos os Projetos" },
    { value: "landing", label: "Landing Pages" },
    { value: "sistema", label: "Sistemas & Apps" },
    { value: "portfolio", label: "Portfólios & Profissionais" }
  ];

  const filteredProjects = activeCategory === "todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 bg-black/20 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="text-left max-w-2xl space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
              Estudos de Caso reais
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projetos entregues com foco em performance e resultados
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Não crio apenas designs bonitos. Crio interfaces pensadas estrategicamente para solucionar problemas reais dos meus clientes e gerar retornos tangíveis.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === cat.value
                  ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Case Study Grid */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, _index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 transition-colors duration-300 relative group overflow-hidden"
              >
                {/* Glow border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Left Side: Mockup/Image */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-80 lg:h-full min-h-[300px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-violet-400 mb-1">
                      {project.categoryLabel}
                    </span>
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>

                {/* Right Side: Case Study Data */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-left relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
                        Estudo de Caso
                      </span>
                    </div>

                    {/* Problem */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        O Problema do Cliente
                      </span>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        A Solução Implementada
                      </span>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="space-y-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                          Resultado Obtido
                        </span>
                      </div>
                      <p className="text-neutral-300 text-sm font-medium leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Footer Info: Techs + Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-2 max-w-sm">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/5 border border-white/10 text-[10px] font-bold text-neutral-300 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-4 flex-shrink-0">
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center p-2.5 rounded-lg border border-white/10 text-xs font-bold text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
                          title="Ver código-fonte"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.demoUrl}
                        target={project.demoUrl.startsWith("http") ? "_blank" : "_self"}
                        rel={project.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl bg-violet-600 hover:bg-violet-500 text-xs font-bold text-white shadow-lg transition-colors group"
                      >
                        Acessar Projeto
                        <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
