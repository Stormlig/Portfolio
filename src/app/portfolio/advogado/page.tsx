"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  MessageCircle, 
  Smartphone, 
  Laptop, 
  Tablet,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  aspect: "desktop" | "mobile" | "tablet";
}

const SHOWCASE_SLIDES: Slide[] = [
  {
    id: 1,
    title: "Página Inicial (Desktop Hero)",
    subtitle: "Autoridade e Credibilidade no Primeiro Impacto",
    description: "Design sóbrio e imponente com tons de azul-marinho, grafite e detalhes em ouro bronzeado. A interface transmite segurança jurídica corporativa extrema com tipografia clássica e elementos visuais de alto ticket.",
    imagePath: "/images/adv_desktop_hero.png",
    aspect: "desktop"
  },
  {
    id: 2,
    title: "Especialidades (Mobile View)",
    subtitle: "Riscos e Soluções na Palma da Mão",
    description: "Seletor de especialidades adaptado para dispositivos móveis, permitindo ao cliente empresarial entender rapidamente os riscos associados e a solução jurídica proposta.",
    imagePath: "/images/adv_mobile_specialties.png",
    aspect: "mobile"
  },
  {
    id: 3,
    title: "Análise Confidencial de Caso (Tablet/Dashboard)",
    subtitle: "Privacidade e Sigilo Profissional",
    description: "Formulário de submissão de caso confidencial otimizado para tablets. Design clean e estruturado que prioriza a privacidade e o sigilo exigidos pela OAB.",
    imagePath: "/images/adv_tablet_case.png",
    aspect: "tablet"
  }
];

export default function AdvogadoDemo() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState("societario");

  const activeSlide = SHOWCASE_SLIDES[activeSlideIndex];

  const specialties = {
    societario: {
      title: "Direito Societário & M&A",
      risk: "Conflitos entre sócios, contratos mal formulados ou problemas sucessórios que podem travar as operações ou levar à liquidação judicial da empresa.",
      solution: "Estruturação de Acordos de Sócios, governança corporativa, planejamento sucessório empresarial e assessoria na compra e venda de empresas (M&A).",
      ctaText: "Simular Consulta em Direito Societário",
    },
    tributario: {
      title: "Planejamento Tributário",
      risk: "Pagamento excessivo de impostos por falta de planejamento adequado ou autuações fiscais graves devido à má interpretação da complexa lei tributária brasileira.",
      solution: "Auditoria de impostos pagos, recuperação de créditos fiscais administrativos, defesa em execuções fiscais e elaboração de holdings patrimoniais.",
      ctaText: "Simular Consulta em Direito Tributário",
    },
    contratos: {
      title: "Contratos e Proteção de Ativos",
      risk: "Assinar contratos comerciais frágeis que geram multas pesadas ou perdas de direitos intelectuais devido a cláusulas ambíguas.",
      solution: "Elaboração e revisão minuciosa de contratos de prestação de serviços, termos de confidencialidade (NDA), termos de uso (SaaS) e blindagem de patrimônio.",
      ctaText: "Simular Consulta de Contratos",
    },
  };

  const currentSpec = specialties[selectedSpec as keyof typeof specialties];

  const whatsappLink = "https://wa.me/5571981181618?text=Olá! Vi seu portfólio e gostaria de um orçamento para um portal/landing page de Advocacia de alto ticket similar ao do Souza Advocacia.";

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
  };

  return (
    <main className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans selection:bg-amber-500/20 selection:text-white pb-20 overflow-x-hidden">
      {/* Top Demo Header */}
      <div className="bg-[#0f131a]/80 border-b border-amber-500/10 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Portfólio
        </Link>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 uppercase">
            Galeria de Fotos da Landing Page
          </span>
        </div>
      </div>

      {/* Hero Presentation */}
      <section className="relative py-16 px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_75%)] pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/20 border border-amber-800/30 text-xs font-bold text-amber-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>PORTFÓLIO JURÍDICO DE ALTO TICKET</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Souza Advocacia — <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-slate-300 to-slate-400">Corporativa</span>
        </h1>
        
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Confira abaixo as telas reais do projeto. O design combina sobriedade corporativa com tons escuros e dourado, transmitindo extrema segurança e autoridade para fechar contratos empresariais robustos.
        </p>
      </section>

      {/* Main Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT/CENTER: Photo Carousel (8 Columns) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* Main Slide Card */}
          <div className="bg-[#0f131a] border border-amber-900/20 rounded-3xl p-4 sm:p-6 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Slide Image Area */}
            <div className="relative rounded-2xl overflow-hidden bg-[#07090d] border border-slate-800 aspect-[16/10] flex items-center justify-center group">
              <img
                src={activeSlide.imagePath}
                alt={activeSlide.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                onClick={() => setIsZoomed(true)}
              />
              
              {/* Zoom Button Icon Overlay */}
              <button 
                onClick={() => setIsZoomed(true)}
                className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/60 text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                title="Ampliar foto"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Aspect Ratio Badge */}
              <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/75 text-amber-500 border border-amber-500/20 flex items-center space-x-1">
                {activeSlide.aspect === "desktop" && <Laptop className="w-3 h-3 mr-1" />}
                {activeSlide.aspect === "mobile" && <Smartphone className="w-3 h-3 mr-1" />}
                {activeSlide.aspect === "tablet" && <Tablet className="w-3 h-3 mr-1" />}
                <span>{activeSlide.aspect} Mockup</span>
              </span>
            </div>

            {/* Slide Navigation & Controls */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-900/10">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevSlide}
                  className="p-2 rounded-xl bg-amber-950/20 border border-amber-800/20 hover:border-amber-500 text-amber-500 hover:text-white transition-all"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-2 rounded-xl bg-amber-950/20 border border-amber-800/20 hover:border-amber-500 text-amber-500 hover:text-white transition-all"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-1.5">
                {SHOWCASE_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlideIndex === index ? "w-8 bg-amber-500" : "w-2 bg-slate-800"
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Text Description */}
            <div className="mt-5 space-y-2 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                {activeSlide.subtitle}
              </span>
              <h2 className="text-lg font-black text-white">{activeSlide.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeSlide.description}
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT: Live Interactive Widget (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          
          {/* Functional Specialty Selector Card */}
          <div className="bg-[#0f131a] border border-amber-900/20 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-transparent pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-500">
                <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">Widget do Sistema</h3>
                  <p className="text-[9px] text-slate-500 font-medium">Análise de Risco & Solução</p>
                </div>
              </div>

              <p className="text-slate-400 text-[11px] leading-relaxed">
                Clique nos botões abaixo para simular a visualização e os riscos envolvidos em cada área de atuação jurídica do site real:
              </p>

              {/* Selector Buttons */}
              <div className="flex border-b border-slate-800 pb-2 gap-1">
                {(Object.keys(specialties) as Array<keyof typeof specialties>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSpec(key)}
                    className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                      selectedSpec === key
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "text-slate-500 hover:text-slate-300 border border-transparent"
                    }`}
                  >
                    {key === "societario" && "Societário"}
                    {key === "tributario" && "Tributário"}
                    {key === "contratos" && "Contratos"}
                  </button>
                ))}
              </div>

              {/* Display Area */}
              <div className="space-y-3 pt-2">
                <div className="bg-[#07090d] border border-slate-800 rounded-xl p-3.5 space-y-2">
                  <h4 className="text-xs font-bold text-white">{currentSpec.title}</h4>
                  <div>
                    <span className="text-[8px] font-black uppercase text-rose-400 tracking-wider block mb-0.5">Risco Comum</span>
                    <p className="text-[10px] text-slate-400 leading-normal">{currentSpec.risk}</p>
                  </div>
                  <div className="pt-1 border-t border-slate-850">
                    <span className="text-[8px] font-black uppercase text-emerald-400 tracking-wider block mb-0.5">Solução Aplicada</span>
                    <p className="text-[10px] text-slate-300 leading-normal">{currentSpec.solution}</p>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                >
                  <Briefcase className="w-3.5 h-3.5 mr-2" />
                  {currentSpec.ctaText}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-900/10 mt-6 flex justify-between items-center text-[10px]">
              <span className="text-slate-500">Contato Direto:</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-500 font-bold hover:text-amber-400"
              >
                Simular WhatsApp
                <MessageCircle className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Quick Stats Column */}
          <div className="p-5 bg-[#07090d] border border-slate-900 rounded-2xl text-[11px] text-slate-400 space-y-2 text-left">
            <span className="font-bold text-slate-300 block mb-1">Padrão do Design System</span>
            <div className="flex justify-between border-b border-slate-900 pb-1.5">
              <span>Paleta de Cores:</span>
              <span className="font-bold text-white">Navy, Graphite & Bronze Gold</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1.5">
              <span>Fontes:</span>
              <span className="font-bold text-white">Sans-Serif Corporativa</span>
            </div>
            <div className="flex justify-between">
              <span>Foco Visual:</span>
              <span className="font-bold text-white">Sobriedade & Solidez</span>
            </div>
          </div>

        </div>

      </section>

      {/* Tech Specifications */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-slate-900 mt-20">
        
        <div className="space-y-3">
          <div className="p-3 bg-[#0f131a] border border-amber-900/20 rounded-xl text-amber-500 w-fit">
            <Scale className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="font-bold text-white text-sm">Posicionamento de Autoridade</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Layout estruturado com sobriedade. Cores escuras aliadas a gradientes dourados transmitem o profissionalismo e a solidez exigidos pelo mercado jurídico corporativo de alto padrão.
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#0f131a] border border-amber-900/20 rounded-xl text-amber-500 w-fit">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="font-bold text-white text-sm">Conformidade com a OAB</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Desenvolvimento planejado sob as diretrizes do Provimento da OAB, focando em marketing informativo e captação de clientes ética, sem mercantilização da advocacia.
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#0f131a] border border-amber-900/20 rounded-xl text-amber-500 w-fit">
            <CheckCircle className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="font-bold text-white text-sm">Foco em Captação de Leads</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            A estrutura apresenta chamadas claras de simulação e botões de ação persuasivos direcionando leads empresariais qualificados de maneira direta para o contato do escritório.
          </p>
        </div>

      </section>

      {/* Fullscreen Photo Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-bold text-xs bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl"
            >
              Fechar
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={activeSlide.imagePath}
              alt={activeSlide.title}
              className="max-w-full max-h-full rounded-2xl object-contain border border-slate-800 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Block */}
      <footer className="py-12 border-t border-slate-900 text-center text-xs text-slate-600 max-w-6xl mx-auto px-6">
        <p>© Souza & Advogados Associados. Todos os direitos reservados de acordo com o Provimento da OAB.</p>
        <p className="mt-1">Página exemplo produzida por Herrison Souza - HS.DEV</p>
      </footer>
    </main>
  );
}
