"use client";

import React from "react";
import { MessageSquare, ClipboardList, PenTool, Terminal, Layers, Globe, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      icon: <MessageSquare className="w-5 h-5 text-violet-400" />,
      title: "Briefing",
      description: "Entendimento inicial do seu modelo de negócio, público-alvo, metas de conversão e referências visuais.",
    },
    {
      num: "02",
      icon: <ClipboardList className="w-5 h-5 text-cyan-400" />,
      title: "Planejamento",
      description: "Estruturação das seções da página baseada em gatilhos de conversão (Copywriting) e definição do mapa do site.",
    },
    {
      num: "03",
      icon: <PenTool className="w-5 h-5 text-amber-400" />,
      title: "Design",
      description: "Criação de um layout visual único e sofisticado (Stripe/Linear style), alinhado com a identidade da sua marca.",
    },
    {
      num: "04",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: "Desenvolvimento",
      description: "Transformação do design em código limpo usando Next.js 15, garantindo que o site carregue de forma instantânea.",
    },
    {
      num: "05",
      icon: <Layers className="w-5 h-5 text-rose-400" />,
      title: "Revisão",
      description: "Apresentação do site em ambiente de homologação para testes do cliente e ajustes finos de layout.",
    },
    {
      num: "06",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      title: "Publicação",
      description: "Hospedagem assistida, configuração do domínio definitivo, segurança SSL gratuita e integração com WhatsApp.",
    },
  ];

  return (
    <section id="processo" className="py-24 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="text-left max-w-2xl space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
              Como eu trabalho
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Um processo ágil focado na pontualidade
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Você não fica no escuro. Acompanhe cada etapa da criação do seu projeto através de checkpoints claros e objetivos.
            </p>
          </div>

          {/* Timeframe Callout */}
          <div className="flex-shrink-0 flex items-center space-x-3.5 bg-violet-500/10 border border-violet-500/20 px-6 py-4 rounded-2xl">
            <Calendar className="w-6 h-6 text-violet-400" />
            <div className="text-left">
              <span className="text-xs text-neutral-400 block font-semibold uppercase tracking-wider">Prazo médio de entrega</span>
              <span className="text-base font-extrabold text-white">2 a 10 dias úteis</span>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connector lines behind cards (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-white/5 -z-10 -translate-y-12" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism-card rounded-2xl p-6 relative flex flex-col space-y-4 text-left border border-white/5"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-neutral-800 tracking-tight">
                  {step.num}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white pt-2">{step.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
