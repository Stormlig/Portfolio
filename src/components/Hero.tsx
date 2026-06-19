"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Award, Zap, Shield, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 text-left space-y-8">
          {/* Remoto Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Atendimento remoto para todo o Brasil</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
          >
            Transformo ideias em <br />
            <span className="text-gradient-purple-blue">sites que geram resultados.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed"
          >
            Criação de Landing Pages, Sites Profissionais e Sistemas Web com foco em performance, credibilidade e conversão.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] border border-violet-400/20 group"
            >
              Solicitar orçamento
              <PhoneCall className="ml-2.5 w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-neutral-200 hover:text-white glassmorphism-card border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              Ver projetos
              <ArrowRight className="ml-2.5 w-4 h-4" />
            </a>
          </motion.div>

          {/* Core Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
          >
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">40+</p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">Projetos entregues</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">15+</p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">Tecnologias dominadas</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient-purple-blue">3-15</p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">Dias úteis para entrega</p>
            </div>
          </motion.div>
        </div>

        {/* Visual Content (Avatar + Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Glowing ring under avatar */}
          <div className="absolute w-[520px] h-[520px] rounded-md bg-gradient-to-r from-violet-600/30 to-cyan-500/30 blur-[40px] animate-pulse-slow" />

          <div className="relative  glassmorphism rounded-md p-6 border border-white/10 max-w-sm w-full flex flex-col items-center text-center shadow-2xl">
            {/* Profile Avatar */}
            <div className="relative w-80 h-[460px] rounded-3xl overflow-hidden border-2 border-violet-500/50 mb-6 bg-neutral-900 shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <img
                src="/developer_avatar.jpg"
                alt="Herrison Souza - Desenvolvedor Fullstack"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Herrison Souza</h3>
            <p className="text-xs font-semibold text-violet-400 mb-4 tracking-wider uppercase">
              Soluções Digitais & Tecnologia
            </p>

            <div className="w-full space-y-2 text-left bg-black/30 rounded-xl p-4 border border-white/5 text-xs text-neutral-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Next.js 15+, Node.js & Databases</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Alta Performance e SEO Integrado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>WhatsApp pós-vendas & Hospedagem</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
