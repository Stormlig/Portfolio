"use client";

import React from "react";
import { Sparkles, MessageCircle, Smartphone, Rocket, Lock, Globe2, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function Diferenciais() {
  const items = [
    {
      icon: <Sparkles className="w-5 h-5 text-violet-400" />,
      title: "SEO Básico Incluso",
      description: "Tags, cabeçalhos, sitemap e indexação configurados para o Google encontrar seu site.",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      title: "Integração WhatsApp",
      description: "Botões de clique rápido flutuantes com mensagens pré-preenchidas para facilitar o contato.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      title: "Site 100% Responsivo",
      description: "Layouts testados minuciosamente para garantir legibilidade perfeita em celulares.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-amber-400" />,
      title: "Performance Otimizada",
      description: "Imagens compactadas e código limpo para que a navegação seja o mais rápida possível.",
    },
    {
      icon: <Lock className="w-5 h-5 text-rose-400" />,
      title: "SSL e Segurança",
      description: "Configuração do cadeado de segurança (HTTPS) para proteção dos dados dos clientes.",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
      title: "Hospedagem Assistida",
      description: "Te ajudo a escolher o melhor plano de hospedagem e coloco o site no ar sem complicações.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-violet-400" />,
      title: "Suporte Pós-Entrega",
      description: "Acompanhamento profissional pós-lançamento para esclarecer dúvidas e ajustar detalhes.",
    },
  ];

  return (
    <section className="py-24 bg-black/40 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Benefícios Integrados
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tudo o que seu negócio precisa para começar
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Diferenciais de mercado inclusos em todas as entregas, sem taxas ocultas ou surpresas desagradáveis.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glassmorphism-card rounded-2xl p-6 border border-white/5 text-left flex flex-col space-y-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
