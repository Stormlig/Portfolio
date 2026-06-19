"use client";

import React from "react";
import { MessageSquare, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const emailAddress = "herrison.thor@gmail.com";
  const whatsappUrl = "https://wa.me/5571981181618?text=Olá! Gostaria de solicitar um orçamento para meu projeto.";

  return (
    <section id="contato" className="py-24 bg-gradient-to-t from-violet-950/10 via-black/0 to-black/0 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main CTA Banner */}
        <div className="glassmorphism rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Persuasive text + direct CTAs */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
                Orçamento Sem Compromisso
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Pronto para ter um site profissional?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Fale comigo agora mesmo. Posso tirar suas dúvidas e criar uma estimativa de investimento e cronograma sob medida para as necessidades do seu projeto.
              </p>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/20 group"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Conversar no WhatsApp
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-neutral-200 hover:text-white glassmorphism-card border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Mail className="mr-2 w-4 h-4" />
                Enviar E-mail
              </a>
            </div>

            {/* CRO trust ticks */}
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-400 pt-6 border-t border-white/5">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Resposta em até 2 horas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Escopo claro sem surpresas</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-black/30 border border-white/5 rounded-2xl p-6 sm:p-8">
              <span className="text-sm font-bold text-white block mb-6 text-left">
                Ou envie uma mensagem direta por aqui:
              </span>
              
              <form
                action={`https://formsubmit.co/${emailAddress}`}
                method="POST"
                className="flex flex-col gap-4 text-left"
              >
                {/* Honey pot */}
                <input type="text" name="_honey" className="hidden" />
                {/* Disable captcha for seamless submit experience */}
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="form-name" className="text-xs font-semibold text-neutral-400 block mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3.5 rounded-xl outline-none border border-white/10 focus:border-violet-500/50 bg-white/[0.02] text-white text-sm transition-all"
                    minLength={4}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="text-xs font-semibold text-neutral-400 block mb-1.5">
                    Endereço de E-mail
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    placeholder="voce@exemplo.com"
                    className="w-full px-4 py-3.5 rounded-xl outline-none border border-white/10 focus:border-violet-500/50 bg-white/[0.02] text-white text-sm transition-all"
                    minLength={7}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="form-msg" className="text-xs font-semibold text-neutral-400 block mb-1.5">
                    Descrição do Projeto
                  </label>
                  <textarea
                    id="form-msg"
                    name="message"
                    placeholder="Gostaria de criar um site para..."
                    cols={20}
                    rows={5}
                    className="w-full p-4 rounded-xl outline-none border border-white/10 focus:border-violet-500/50 bg-white/[0.02] text-white text-sm resize-none transition-all"
                    minLength={10}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm shadow-lg transition-all duration-200 mt-2"
                >
                  Enviar Mensagem
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
