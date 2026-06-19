"use client";

import React from "react";
import { Check, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      price: "R$ 800 - R$ 1.500",
      description: "Páginas de vendas focadas em converter visitantes em clientes. Design direto ao ponto.",
      idealFor: ["Captação de leads", "Tráfego pago (Google/Meta Ads)", "Lançamento de infoprodutos"],
      badge: "Mais Procurado",
      whatsappText: "Olá! Gostaria de solicitar um orçamento para uma Landing Page.",
    },
    {
      title: "Sites Institucionais",
      price: "R$ 1.500 - R$ 3.500",
      description: "A presença digital completa e profissional para a sua empresa ou negócio local.",
      idealFor: ["Empresas e agências", "Profissionais liberais", "Estabelecimentos físicos"],
      badge: "Popular",
      whatsappText: "Olá! Gostaria de solicitar um orçamento para um Site Institucional.",
    },
    {
      title: "Portfólios Profissionais",
      price: "R$ 1.000 - R$ 2.500",
      description: "Vitrine digital elegante e exclusiva para destacar seus melhores trabalhos.",
      idealFor: ["Designers e Arquitetos", "Fotógrafos e Artistas", "Profissionais de saúde e autônomos"],
      badge: "Visual Premium",
      whatsappText: "Olá! Gostaria de solicitar um orçamento para um Portfólio Profissional.",
    },
    {
      title: "Sistemas Web",
      price: "Sob orçamento",
      description: "Aplicações sob medida com dashboards, banco de dados e fluxos automatizados.",
      idealFor: ["Sistemas de gestão interna", "Dashboards e relatórios", "Aplicações web customizadas (SaaS)"],
      badge: "Backend Avançado",
      whatsappText: "Olá! Gostaria de solicitar um orçamento para um Sistema Web customizado.",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Serviços & Soluções
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluções digitais prontas para vender
          </h3>
          <p className="text-neutral-400 text-base sm:text-lg">
            Escolha o modelo ideal para o seu momento de negócio. Transparência, prazos reais e entrega garantida.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => {
            const isCustom = service.price === "Sob orçamento";
            const whatsappUrl = `https://wa.me/5571981181618?text=${encodeURIComponent(
              service.whatsappText
            )}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism-card rounded-2xl p-6 flex flex-col justify-between relative border border-white/5 shadow-xl hover:border-violet-500/30 transition-all duration-300"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-violet-400 bg-violet-400/10 px-2.5 py-1 rounded-full mb-4">
                    {service.badge}
                  </span>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-xs text-neutral-500 block">Investimento médio</span>
                    <span className="text-xl sm:text-2xl font-black text-white">
                      {service.price}
                    </span>
                  </div>

                  {/* Ideal for list */}
                  <div className="border-t border-white/5 pt-6 mb-8 space-y-3">
                    <span className="text-xs font-semibold text-neutral-300 block mb-1">
                      Ideal para:
                    </span>
                    {service.idealFor.map((item) => (
                      <div key={item} className="flex items-start text-left space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-neutral-400 leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isCustom
                      ? "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white"
                  }`}
                >
                  Solicitar orçamento
                  <Send className="ml-2 w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
