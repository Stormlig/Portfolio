"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Arthur Silva",
      role: "Nutricionista Esportivo",
      comment: "A Landing Page superou todas as minhas expectativas. O design é extremamente elegante e, em menos de 15 dias no ar, já fechei mais de 10 consultas particulares através do WhatsApp que integramos na página. Sensacional!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Dra. Camila Soares",
      role: "Psicóloga Clínica",
      comment: "Eu precisava de um site que transmitisse empatia e credibilidade técnica para captar pacientes de psicoterapia online. O resultado ficou impecável, clean e com carregamento instantâneo. Meus pacientes sempre elogiam o site.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Marcio Accioli",
      role: "Co-Fundador do Meiday",
      comment: "Herrison demonstrou domínio absoluto no desenvolvimento frontend e na estruturação de sistemas web. Ele entregou o painel administrativo da MeiDay dentro do prazo acordado e com uma organização de código exemplar em TypeScript.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Depoimentos
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que dizem os clientes que já aprovaram
          </h3>
          <p className="text-neutral-400 text-base">
            Satisfação e impacto real nos negócios de quem confiou suas ideias ao meu desenvolvimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism-card rounded-3xl p-8 relative flex flex-col justify-between border border-white/5 shadow-xl text-left"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Client Info */}
              {/* <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-white/5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white">{test.name}</h4>
                  <p className="text-xs text-neutral-500 font-medium">{test.role}</p>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
