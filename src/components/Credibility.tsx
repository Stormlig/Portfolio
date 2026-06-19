"use client";

import React from "react";
import { Code2, Search, Zap, Laptop, ShieldCheck, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";

export default function Credibility() {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-violet-400" />,
      title: "Desenvolvimento Moderno",
      description:
        "Utilizo tecnologias de ponta como Next.js 15, TypeScript e React 19 para criar soluções rápidas, seguras e prontas para crescer.",
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "SEO Otimizado",
      description:
        "Seu site estruturado desde a primeira linha de código para alcançar as melhores posições nas buscas orgânicas do Google.",
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Sites Ultra Rápidos",
      description:
        "Otimização de imagens, renderização no servidor (SSR) e cache inteligente para garantir carregamento instantâneo no celular.",
    },
    {
      icon: <Laptop className="w-8 h-8 text-emerald-400" />,
      title: "Responsividade Total",
      description:
        "Design adaptado perfeitamente para qualquer tamanho de tela: celulares, tablets, notebooks e televisões.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      title: "Código Limpo e Seguro",
      description:
        "Segurança de dados e facilidade para adicionar novas funções no futuro com boas práticas e tipagem estrita.",
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-indigo-400" />,
      title: "Suporte Pós-Entrega",
      description:
        "Acompanhamento dedicado após a publicação para garantir que tudo continue funcionando perfeitamente sem dores de cabeça.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Excelência Técnica
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que escolher meus serviços?
          </h3>
          <p className="text-neutral-400 text-base sm:text-lg">
            Combinando design moderno, arquitetura robusta de backend e otimização para garantir que seu site de fato converta cliques em vendas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism-card rounded-2xl p-8 flex flex-col space-y-4 text-left group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 group-hover:bg-violet-500/5 transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
