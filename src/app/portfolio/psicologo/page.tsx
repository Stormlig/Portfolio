"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Heart, 
  Shield, 
  Video, 
  Star,
  Brain,
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
    subtitle: "Acolhimento e Confiança no Primeiro Contato",
    description: "Design minimalista e acolhedor com tons de verde sálvia e pedra natural. A interface transmite segurança profissional com tipografia suave e elementos visuais que criam conexão emocional imediata com o visitante.",
    imagePath: "/images/psico_desktop_hero.png",
    aspect: "desktop"
  },
  {
    id: 2,
    title: "Autoavaliação Emocional (Mobile View)",
    subtitle: "Quiz Interativo Mobile-First",
    description: "Teste de sobrecarga mental adaptado para dispositivos móveis. Interface intuitiva com fluxo de 3 perguntas, barra de progresso e resultado personalizado que incentiva o agendamento terapêutico.",
    imagePath: "/images/psico_mobile_quiz.png",
    aspect: "mobile"
  },
  {
    id: 3,
    title: "Pilares de Confiança (Tablet View)",
    subtitle: "Credibilidade Profissional e Ética",
    description: "Seção de pilares de confiança otimizada para tablets: sigilo profissional CFP, terapia online criptografada e abordagem humanizada personalizada. Design que reforça autoridade clínica.",
    imagePath: "/images/psico_tablet_pillars.png",
    aspect: "tablet"
  }
];

export default function PsicologoDemo() {
  // Carousel State
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Quiz State
  const [currentStep, setCurrentStep] = useState(1);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeSlide = SHOWCASE_SLIDES[activeSlideIndex];

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
  };

  const handleAnswer = (points: number) => {
    setScore(score + points);
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setScore(0);
    setQuizFinished(false);
  };

  const getQuizAdvice = () => {
    if (score <= 3) {
      return "Seu nível de estresse recente parece equilibrado. Mesmo assim, a terapia é uma excelente ferramenta para autoconhecimento!";
    } else if (score > 3 && score <= 6) {
      return "Você tem apresentado sinais moderados de sobrecarga mental ou ansiedade. Pode ser benéfico conversar com uma profissional para organizar seus sentimentos.";
    } else {
      return "Sinais acentuados de estresse e cansaço emocional. Recomenda-se iniciar um acompanhamento terapêutico para desenvolver estratégias de alívio e bem-estar.";
    }
  };

  const whatsappLink = "https://wa.me/5571981181618?text=Olá! Vi seu portfólio e gostaria de um orçamento para um sistema/landing page de Psicologia similar ao do Espaço Camila.";

  return (
    <main className="min-h-screen bg-[#0c0d0c] text-neutral-200 font-sans selection:bg-teal-500/20 selection:text-white pb-20 overflow-x-hidden">
      {/* Top Demo Header */}
      <div className="bg-[#0e120f]/80 border-b border-teal-500/10 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Portfólio
        </Link>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 uppercase">
            Galeria de Fotos da Landing Page
          </span>
        </div>
      </div>

      {/* Hero Presentation */}
      <section className="relative py-16 px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_75%)] pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-950/20 border border-teal-800/30 text-xs font-bold text-teal-400">
          <Sparkles className="w-3.5 h-3.5 text-stone-400" />
          <span>PORTFÓLIO DE PSICOLOGIA PREMIUM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Espaço Camila Soares — <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-stone-300 to-stone-400">Psicóloga</span>
        </h1>
        
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Confira abaixo as telas reais do projeto. O design combina acolhimento visual com tons de verde sálvia e pedra natural, transmitindo segurança profissional e empatia terapêutica para captar pacientes de alto ticket.
        </p>
      </section>

      {/* Main Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT/CENTER: Photo Carousel (8 Columns) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* Main Slide Card */}
          <div className="bg-[#0e120f] border border-teal-900/20 rounded-3xl p-4 sm:p-6 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Slide Image Area */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[16/10] flex items-center justify-center group">
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
              <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/75 text-teal-400 border border-teal-500/20 flex items-center space-x-1">
                {activeSlide.aspect === "desktop" && <Laptop className="w-3 h-3 mr-1" />}
                {activeSlide.aspect === "mobile" && <Smartphone className="w-3 h-3 mr-1" />}
                {activeSlide.aspect === "tablet" && <Tablet className="w-3 h-3 mr-1" />}
                <span>{activeSlide.aspect} Mockup</span>
              </span>
            </div>

            {/* Slide Navigation & Controls */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-teal-900/10">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevSlide}
                  className="p-2 rounded-xl bg-teal-950/20 border border-teal-800/20 hover:border-teal-500 text-teal-400 hover:text-white transition-all"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-2 rounded-xl bg-teal-950/20 border border-teal-800/20 hover:border-teal-500 text-teal-400 hover:text-white transition-all"
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
                      activeSlideIndex === index ? "w-8 bg-teal-400" : "w-2 bg-neutral-800"
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Text Description */}
            <div className="mt-5 space-y-2 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block">
                {activeSlide.subtitle}
              </span>
              <h2 className="text-lg font-black text-white">{activeSlide.title}</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {activeSlide.description}
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT: Live Interactive Widget (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          
          {/* Functional Quiz Card */}
          <div className="bg-[#0e120f] border border-teal-900/20 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/[0.02] to-transparent pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-teal-400">
                <div className="p-2 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight">Widget do Sistema</h3>
                  <p className="text-[9px] text-neutral-500">Autoavaliação de Sobrecarga Mental</p>
                </div>
              </div>

              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Uma das estratégias de conversão do site real é esta autoavaliação. Ela engaja o visitante e faz um pré-diagnóstico que incentiva o agendamento:
              </p>

              {!quizFinished ? (
                <div className="space-y-3 pt-2">
                  {/* Progress */}
                  <div className="flex justify-between items-center text-[10px] text-neutral-500 font-bold">
                    <span>Pergunta {currentStep} de 3</span>
                    <span className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden">
                      <span
                        className="h-full bg-teal-500 block transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      />
                    </span>
                  </div>

                  {currentStep === 1 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-neutral-200">
                        1. Com que frequência você se sente ansioso sem um motivo claro?
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <button onClick={() => handleAnswer(0)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Raramente ou nunca
                        </button>
                        <button onClick={() => handleAnswer(2)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Algumas vezes na semana
                        </button>
                        <button onClick={() => handleAnswer(4)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Quase todos os dias
                        </button>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-neutral-200">
                        2. Você sente dificuldade em relaxar durante o fim de semana?
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <button onClick={() => handleAnswer(0)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Consigo me desligar facilmente
                        </button>
                        <button onClick={() => handleAnswer(2)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Certa dificuldade, mas consigo
                        </button>
                        <button onClick={() => handleAnswer(4)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Estou sempre pensando nos problemas
                        </button>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-neutral-200">
                        3. Como anda a qualidade do seu sono?
                      </p>
                      <div className="flex flex-col gap-1.5">
                        <button onClick={() => handleAnswer(0)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Durmo bem e acordo descansado
                        </button>
                        <button onClick={() => handleAnswer(2)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Sono agitado, mas durmo o suficiente
                        </button>
                        <button onClick={() => handleAnswer(4)} className="w-full text-left p-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 transition-colors">
                          Insônia ou acordo muito cansado
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="space-y-3 pt-2"
                  >
                    <div className="p-3.5 bg-teal-500/5 border border-teal-500/10 rounded-xl space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-teal-400">RESULTADO</span>
                        <span className="text-white bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded">
                          Score: {score}/12
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-300 leading-normal font-medium">{getQuizAdvice()}</p>
                    </div>
                    <button
                      onClick={resetQuiz}
                      className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white font-bold text-[10px] rounded-xl transition-all border border-neutral-800"
                    >
                      Refazer Teste
                    </button>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            <div className="pt-4 border-t border-teal-900/10 mt-6 flex justify-between items-center text-[10px]">
              <span className="text-neutral-500">CTA de Agendamento:</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 font-bold hover:text-teal-300"
              >
                Solicitar Orçamento
                <MessageCircle className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Quick Stats Column */}
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl text-[11px] text-neutral-400 space-y-2 text-left">
            <span className="font-bold text-neutral-300 block mb-1">Padrão do Design System</span>
            <div className="flex justify-between border-b border-neutral-900 pb-1.5">
              <span>Paleta de Cores:</span>
              <span className="font-bold text-white">Teal & Warm Stone</span>
            </div>
            <div className="flex justify-between border-b border-neutral-900 pb-1.5">
              <span>Fontes:</span>
              <span className="font-bold text-white">Sans-Serif Acolhedora</span>
            </div>
            <div className="flex justify-between">
              <span>Foco Visual:</span>
              <span className="font-bold text-white">Empatia & Credibilidade</span>
            </div>
          </div>

        </div>

      </section>

      {/* Tech Specifications */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-neutral-900 mt-20">
        
        <div className="space-y-3">
          <div className="p-3 bg-[#0e120f] border border-teal-900/20 rounded-xl text-teal-400 w-fit">
            <Heart className="w-5 h-5 text-stone-400" />
          </div>
          <h3 className="font-bold text-white text-sm">Design Acolhedor & Empático</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Desenvolvimento visual focado em transmitir segurança e acolhimento. Tons de verde sálvia e pedra natural criam uma atmosfera de cuidado que reflete o ambiente terapêutico ideal.
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#0e120f] border border-teal-900/20 rounded-xl text-teal-400 w-fit">
            <Shield className="w-5 h-5 text-teal-400" />
          </div>
          <h3 className="font-bold text-white text-sm">Sigilo e Confiança Profissional</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Interface desenhada para reforçar as diretrizes éticas do CFP, com seções dedicadas a explicar a terapia online, a criptografia das chamadas e o compromisso com o sigilo.
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#0e120f] border border-teal-900/20 rounded-xl text-teal-400 w-fit">
            <CheckCircle className="w-5 h-5 text-teal-400" />
          </div>
          <h3 className="font-bold text-white text-sm">Gatilho de Conversão Emocional</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Além do design, o sistema conta com uma autoavaliação emocional interativa e CTAs com textos empáticos que direcionam o visitante para agendar a primeira sessão via WhatsApp.
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
              className="absolute top-6 right-6 text-neutral-400 hover:text-white font-bold text-xs bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl"
            >
              Fechar
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={activeSlide.imagePath}
              alt={activeSlide.title}
              className="max-w-full max-h-full rounded-2xl object-contain border border-neutral-800 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Block */}
      <footer className="py-12 border-t border-neutral-900 text-center text-xs text-neutral-600 max-w-6xl mx-auto px-6">
        <p>© Espaço Camila Soares - Psicologia Clínica. Todos os direitos reservados.</p>
        <p className="mt-1">Página exemplo produzida por Herrison Souza - HS.DEV</p>
      </footer>
    </main>
  );
}
