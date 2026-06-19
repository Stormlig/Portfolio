"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "Quanto custa um site?",
      answer: "O investimento varia de acordo com o tamanho e complexidade do projeto. Uma Landing Page para captação de leads custa em média de R$ 800 a R$ 1.500. Sites Institucionais completos variam entre R$ 1.500 e R$ 3.500, e Sistemas Web customizados com banco de dados são orçados sob medida. Todos os valores podem ser parcelados e são detalhados em uma proposta formal.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo médio varia entre 2 e 10 dias úteis a partir do recebimento dos conteúdos e aprovação do briefing inicial. Landing Pages rápidas costumam ser entregues em até 3 dias úteis. Projetos mais complexos ou sistemas personalizados podem demandar mais tempo, o qual é sempre acordado em contrato.",
    },
    {
      question: "Você oferece o serviço de hospedagem?",
      answer: "A hospedagem e o domínio são contratados pelo cliente (eu presto assessoria completa para realizar essa escolha e configuração). Para a maioria das Landing Pages e portfólios institucionais, conseguimos configurar servidores modernos de alta performance (como Vercel ou Netlify) com hospedagem 100% gratuita e certificado SSL incluso, reduzindo o custo fixo do cliente a quase zero.",
    },
    {
      question: "Posso solicitar alterações após a entrega?",
      answer: "Sim! Todos os pacotes incluem suporte pós-entrega de até 15 dias para ajustes pontuais gratuitos. Além disso, os sites são construídos com painéis ou estruturas modulares e fáceis de editar, permitindo que você ou sua equipe façam alterações básicas de textos e imagens sem depender de programação.",
    },
    {
      question: "O site aparece nas pesquisas do Google?",
      answer: "Com certeza. Todos os sites criados por mim passam por um processo rigoroso de SEO básico estrutural, incluindo otimização de imagens, tags HTML semânticas adequadas, criação de sitemap XML e robots.txt, além de cadastramento e solicitação de indexação manual no Google Search Console.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black/20 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Dúvidas Frequentes
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Esclareça suas principais dúvidas sobre o processo, investimentos e entrega dos projetos.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="glassmorphism-card rounded-2xl border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-bold text-base sm:text-lg hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-neutral-400">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-neutral-400 text-sm leading-relaxed text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
