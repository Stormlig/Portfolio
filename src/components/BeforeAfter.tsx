"use client";

import React from "react";
import { XCircle, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-gradient-to-b from-black/0 via-violet-950/5 to-black/0 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-violet-400 uppercase">
            Percepção de Valor
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A diferença entre um site amador e um portal premium
          </h3>
          <p className="text-neutral-400 text-base">
            Muitas empresas compram sites baratos criados em templates genéricos e depois se perguntam por que não estão vendendo. Veja a evolução de performance e design.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-red-500/5 border border-red-500/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2.5 mb-6 text-red-400">
                <XCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-bold tracking-tight uppercase">Site Comum (Antes)</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start text-left space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <p className="text-sm text-neutral-400">
                    Design genérico baseado em templates prontos (WordPress ou Wix mal configurados).
                  </p>
                </div>
                <div className="flex items-start text-left space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <p className="text-sm text-neutral-400">
                    Carregamento lento devido ao excesso de plugins desnecessários (mais de 4 segundos).
                  </p>
                </div>
                <div className="flex items-start text-left space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <p className="text-sm text-neutral-400">
                    Sem otimização de SEO para buscadores. Sua empresa fica invisível no Google.
                  </p>
                </div>
                <div className="flex items-start text-left space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <p className="text-sm text-neutral-400">
                    Dificuldade de navegação no celular, com botões desalinhados e textos cortados.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="border-t border-red-500/10 pt-6">
              <span className="text-xs font-bold text-red-400 block mb-3 uppercase tracking-wider">
                Métricas Google Lighthouse médias:
              </span>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-black/30 rounded-xl p-2.5 border border-red-500/10">
                  <span className="text-xs text-neutral-500 block">Performance</span>
                  <span className="text-lg font-bold text-red-400">42%</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-red-500/10">
                  <span className="text-xs text-neutral-500 block">SEO</span>
                  <span className="text-lg font-bold text-red-400">35%</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-red-500/10">
                  <span className="text-xs text-neutral-500 block">Acessib.</span>
                  <span className="text-lg font-bold text-red-400">55%</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-red-500/10">
                  <span className="text-xs text-neutral-500 block">Conversão</span>
                  <span className="text-lg font-bold text-red-400">Baixa</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient emerald glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div>
              <div className="flex items-center space-x-2.5 mb-6 text-emerald-400">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-bold tracking-tight uppercase">Código Customizado (Depois)</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start text-left space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">
                    Design premium minimalista sob medida. Cria credibilidade imediata ao primeiro olhar.
                  </p>
                </div>
                <div className="flex items-start text-left space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">
                    Carregamento instantâneo (menos de 1 segundo) otimizado pelo Next.js 15.
                  </p>
                </div>
                <div className="flex items-start text-left space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">
                    SEO estruturado e meta tags completas para atrair visitas orgânicas do Google.
                  </p>
                </div>
                <div className="flex items-start text-left space-x-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-neutral-300">
                    Experiência mobile perfeita (Mobile-First) projetada para reter clientes que navegam no celular.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="border-t border-emerald-500/20 pt-6">
              <span className="text-xs font-bold text-emerald-400 block mb-3 uppercase tracking-wider">
                Métricas Google Lighthouse médias:
              </span>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-black/30 rounded-xl p-2.5 border border-emerald-500/20">
                  <span className="text-xs text-neutral-500 block">Performance</span>
                  <span className="text-lg font-bold text-emerald-400">99%</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-emerald-500/20">
                  <span className="text-xs text-neutral-500 block">SEO</span>
                  <span className="text-lg font-bold text-emerald-400">100%</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-emerald-500/20">
                  <span className="text-xs text-neutral-500 block">Acessib.</span>
                  <span className="text-lg font-bold text-emerald-400">100%</span>
                </div>
                <div className="bg-black/30 rounded-xl p-2.5 border border-emerald-500/20 flex flex-col justify-center items-center">
                  <span className="text-xs text-neutral-500 block">Conversão</span>
                  <div className="flex items-center text-emerald-400 text-sm font-bold">
                    <span>Alta</span>
                    <TrendingUp className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
