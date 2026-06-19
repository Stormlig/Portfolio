"use client";

import React from "react";
import { Server, Cpu, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function TechShowcase() {
  const techs = [
    { name: "Next.js", color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/40", type: "Fullstack", icon: <Cpu className="w-5 h-5 text-white" /> },
    { name: "React", color: "hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:border-sky-400/40", type: "Frontend", icon: <Cpu className="w-5 h-5 text-sky-400" /> },
    { name: "TypeScript", color: "hover:shadow-[0_0_20px_rgba(49,120,198,0.2)] hover:border-blue-500/40", type: "Segurança", icon: <Cpu className="w-5 h-5 text-blue-500" /> },
    { name: "Tailwind CSS", color: "hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:border-cyan-400/40", type: "Estilização", icon: <Cpu className="w-5 h-5 text-cyan-400" /> },
    { name: "Node.js", color: "hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:border-green-500/40", type: "Backend", icon: <Server className="w-5 h-5 text-green-500" /> },
    { name: "PostgreSQL", color: "hover:shadow-[0_0_20px_rgba(49,120,198,0.15)] hover:border-blue-400/45", type: "Banco de Dados", icon: <Database className="w-5 h-5 text-blue-400" /> },
    { name: "Firebase", color: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-500/40", type: "Autenticação", icon: <Database className="w-5 h-5 text-amber-500" /> },
    { name: "Vercel", color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/30", type: "Infraestrutura", icon: <Cloud className="w-5 h-5 text-white" /> },
  ];

  return (
    <section className="py-24 bg-black/20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Stack Tecnológica
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologias modernas para performance máxima
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Especializado em arquitetura robusta de backend combinada com interfaces de alta fidelidade visual.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glassmorphism-card rounded-2xl p-5 flex items-center space-x-4 border border-white/5 transition-all duration-300 ${tech.color}`}
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl flex-shrink-0">
                {tech.icon}
              </div>
              <div className="text-left">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider block">
                  {tech.type}
                </span>
                <span className="text-base font-bold text-white block">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
