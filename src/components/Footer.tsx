"use client";

import React from "react";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedinUrl = "https://www.linkedin.com/in/herrison-souza-630118187/";
  const githubUrl = "https://github.com/Stormlig";
  const emailAddress = "herrison.thor@gmail.com";
  const whatsappUrl = "https://wa.me/5571981181618";

  return (
    <footer className="bg-black/60 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 text-left space-y-4">
            <span className="text-xl font-black tracking-tight text-white">
              HS<span className="text-violet-500">.</span>DEV
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Herrison Souza - Soluções Digitais & Tecnologia. Especializado em criar sites e sistemas web premium, unindo design de ponta e infraestrutura robusta.
            </p>
            <div className="flex space-x-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="text-neutral-500 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-neutral-500 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-neutral-500 hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-500 hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Contato Direto
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-500">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-violet-400" />
                <a href={`mailto:${emailAddress}`} className="hover:text-white transition-colors">
                  {emailAddress}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Orçamentos
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 gap-4">
          <p>© {currentYear} HS.DEV (Herrison Souza). Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <span>Desenvolvido com Next.js 15 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
