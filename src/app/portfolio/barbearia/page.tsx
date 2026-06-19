"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  Scissors, 
  User, 
  Calendar, 
  Clock, 
  DollarSign, 
  Box, 
  Bell, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  Laptop, 
  RefreshCw, 
  ShieldCheck, 
  TrendingUp, 
  Zap 
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  productUsed: string;
}

interface Barber {
  id: string;
  name: string;
  avatar: string;
  rating: string;
  specialty: string;
}

const SERVICES: Service[] = [
  { id: "corte", name: "Corte Degradê", price: 45, duration: "35 min", productUsed: "Pomada Modeladora Matte" },
  { id: "barba", name: "Barba Toalha Quente", price: 35, duration: "25 min", productUsed: "Óleo para Barba Wood" },
  { id: "combo", name: "Combo Cabelo + Barba", price: 75, duration: "60 min", productUsed: "Pomada + Óleo" }
];

const BARBERS: Barber[] = [
  { id: "thiago", name: "Thiago Martins", avatar: "TM", rating: "4.9", specialty: "Degradê & Visagismo" },
  { id: "bruno", name: "Bruno Castro", avatar: "BC", rating: "4.8", specialty: "Barboterapia" },
  { id: "marcos", name: "Marcos Assis", avatar: "MA", rating: "5.0", specialty: "Estilo Clássico" }
];

const TIME_SLOTS = ["09:00", "10:30", "14:00", "15:30", "17:00", "18:30"];

export default function BarbeariaDemo() {
  // Client Booking Wizard State
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState("Hoje");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientName, setClientName] = useState("Herrison Souza");
  
  // Simulated Barber Dashboard State
  const [barberDashboard, setBarberDashboard] = useState({
    billing: 380,
    commission: 190,
    stockPomada: 12,
    stockOleo: 8,
    appointments: [
      { id: "1", time: "09:00", client: "Rafael Silva", service: "Corte Degradê", price: 45, barberId: "thiago", status: "Finalizado" },
      { id: "2", time: "10:30", client: "Arthur Rocha", service: "Combo Cabelo + Barba", price: 75, barberId: "bruno", status: "Finalizado" },
      { id: "3", time: "14:00", client: "Bruno Andrade", service: "Barba Toalha Quente", price: 35, barberId: "thiago", status: "Finalizado" }
    ]
  });

  const [notification, setNotification] = useState<string | null>(null);
  const [justAddedAppointmentId, setJustAddedAppointmentId] = useState<string | null>(null);

  // Restart / Reset simulator
  const handleReset = () => {
    setBookingStep(1);
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedTime(null);
    setSelectedDate("Hoje");
    setJustAddedAppointmentId(null);
    setNotification(null);
    // Reset dashboard data back to initial state
    setBarberDashboard({
      billing: 380,
      commission: 190,
      stockPomada: 12,
      stockOleo: 8,
      appointments: [
        { id: "1", time: "09:00", client: "Rafael Silva", service: "Corte Degradê", price: 45, barberId: "thiago", status: "Finalizado" },
        { id: "2", time: "10:30", client: "Arthur Rocha", service: "Combo Cabelo + Barba", price: 75, barberId: "bruno", status: "Finalizado" },
        { id: "3", time: "14:00", client: "Bruno Andrade", service: "Barba Toalha Quente", price: 35, barberId: "thiago", status: "Finalizado" }
      ]
    });
  };

  // Submit booking from Client side
  const handleConfirmBooking = () => {
    if (!selectedService || !selectedBarber || !selectedTime) return;

    // Trigger state change in Barber Dashboard
    const newAppointment = {
      id: Math.random().toString(),
      time: selectedTime,
      client: clientName || "Cliente Convidado",
      service: selectedService.name,
      price: selectedService.price,
      barberId: selectedBarber.id,
      status: "Novo"
    };

    // Calculate commission (50%)
    const commissionEarned = selectedService.price * 0.5;

    // Deduct stock based on service
    let pomadaDeduct = 0;
    let oleoDeduct = 0;
    if (selectedService.id === "corte") pomadaDeduct = 1;
    if (selectedService.id === "barba") oleoDeduct = 1;
    if (selectedService.id === "combo") {
      pomadaDeduct = 1;
      oleoDeduct = 1;
    }

    setBarberDashboard(prev => {
      // Sort appointments by time
      const updatedAppointments = [...prev.appointments, newAppointment].sort((a, b) => {
        return a.time.localeCompare(b.time);
      });

      return {
        billing: prev.billing + selectedService.price,
        commission: prev.commission + commissionEarned,
        stockPomada: Math.max(0, prev.stockPomada - pomadaDeduct),
        stockOleo: Math.max(0, prev.stockOleo - oleoDeduct),
        appointments: updatedAppointments
      };
    });

    setJustAddedAppointmentId(newAppointment.id);
    
    // Set notification banner
    setNotification(
      `Novo agendamento recebido! ${clientName} reservou ${selectedService.name} às ${selectedTime} com ${selectedBarber.name}.`
    );

    // Go to success screen on phone
    setBookingStep(4);
  };

  // Dismiss notification automatically
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <main className="min-h-screen bg-[#070503] text-neutral-200 font-sans selection:bg-amber-500/20 selection:text-white pb-20 overflow-x-hidden">
      {/* Top Demo Banner */}
      <div className="bg-neutral-900/80 border-b border-amber-500/10 px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Portfólio
        </Link>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 uppercase">
            Demonstração Interativa: SaaS Barbearia
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6 max-w-6xl mx-auto text-center space-y-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold text-amber-500">
          <Scissors className="w-3.5 h-3.5" />
          <span>ESTUDO DE CASO COMPLEMENTAR</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Barbearia <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Inteligente</span>
        </h1>
        
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Veja abaixo o funcionamento em tempo real de uma barbearia conectada. Faça um agendamento no simulador de celular à esquerda e acompanhe a atualização instantânea e o cálculo de comissões no painel do barbeiro à direita.
        </p>

        <div className="flex justify-center pt-2">
          <button 
            onClick={handleReset}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 border border-amber-500/20 hover:border-amber-500/40 text-amber-400 transition-all hover:bg-neutral-850"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-2" />
            Reiniciar Fluxo de Simulação
          </button>
        </div>
      </section>

      {/* Realtime Live Simulator Grid */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* LEFT COLUMN: Smartphone (Client Side) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[370px] bg-neutral-950 border-[6px] border-neutral-800 rounded-[48px] shadow-2xl relative overflow-hidden aspect-[9/18] flex flex-col">
            
            {/* Phone Speaker Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-36 bg-neutral-800 rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1 bg-neutral-950 rounded-full" />
            </div>

            {/* Phone Screen Header */}
            <div className="pt-8 px-5 pb-3 bg-neutral-900/60 border-b border-neutral-850 flex justify-between items-center text-[10px] text-neutral-400 font-medium">
              <span>9:41</span>
              <span className="font-bold text-amber-500/90 text-xs">Cavalera Salon</span>
              <div className="flex items-center space-x-1">
                <span>5G</span>
                <div className="w-4 h-2 bg-neutral-400 rounded-sm" />
              </div>
            </div>

            {/* Phone Content (Interactive Wizard) */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-left text-neutral-200">
              <AnimatePresence mode="wait">
                {/* STEP 1: Select Service */}
                {bookingStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h2 className="text-lg font-black text-white flex items-center">
                        <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" />
                        Agendar Serviço
                      </h2>
                      <p className="text-[11px] text-neutral-400">Escolha o serviço desejado para hoje:</p>
                    </div>

                    <div className="space-y-2.5">
                      {SERVICES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setSelectedService(service);
                            setBookingStep(2);
                          }}
                          className={`w-full text-left p-4 rounded-2xl border transition-all ${
                            selectedService?.id === service.id
                              ? "bg-amber-500/10 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                              : "bg-neutral-900 border-neutral-850 text-neutral-300 hover:border-neutral-800"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-xs font-bold text-white">{service.name}</h3>
                            <span className="text-xs font-black text-amber-500">
                              R$ {service.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-500 mt-1">
                            Duração: {service.duration} • Utiliza {service.productUsed}
                          </p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Select Barber */}
                {bookingStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-black text-white">Escolha o Barbeiro</h2>
                        <p className="text-[11px] text-neutral-400">Selecione seu profissional preferido:</p>
                      </div>
                      <button 
                        onClick={() => setBookingStep(1)}
                        className="text-[10px] font-bold text-neutral-400 hover:text-white"
                      >
                        Voltar
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {BARBERS.map((barber) => (
                        <button
                          key={barber.id}
                          onClick={() => {
                            setSelectedBarber(barber);
                            setBookingStep(3);
                          }}
                          className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            selectedBarber?.id === barber.id
                              ? "bg-amber-500/10 border-amber-500 text-white"
                              : "bg-neutral-900 border-neutral-850 text-neutral-300 hover:border-neutral-800"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-sm">
                              {barber.avatar}
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-white">{barber.name}</h3>
                              <p className="text-[9px] text-neutral-500">{barber.specialty}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-bold text-amber-400">★ {barber.rating}</span>
                            <p className="text-[8px] text-neutral-500">Disponível</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Select Date & Time */}
                {bookingStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-black text-white">Data & Horário</h2>
                        <p className="text-[11px] text-neutral-400">Selecione quando quer agendar:</p>
                      </div>
                      <button 
                        onClick={() => setBookingStep(2)}
                        className="text-[10px] font-bold text-neutral-400 hover:text-white"
                      >
                        Voltar
                      </button>
                    </div>

                    {/* Date Selector Tabs */}
                    <div className="grid grid-cols-3 gap-2">
                      {["Hoje", "Amanhã", "Segunda"].map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`py-2 rounded-xl text-[10px] font-bold border transition-all ${
                            selectedDate === day
                              ? "bg-amber-500/10 border-amber-500 text-amber-400"
                              : "bg-neutral-900 border-neutral-850 text-neutral-400"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>

                    {/* Time Slots Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            selectedTime === time
                              ? "bg-amber-500 border-amber-500 text-neutral-950 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                              : "bg-neutral-900 border-neutral-850 text-neutral-300 hover:border-neutral-800"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    {/* Final Confirm Form Info */}
                    {selectedTime && (
                      <div className="space-y-3 pt-4 border-t border-neutral-850 animate-in fade-in duration-300">
                        <div>
                          <label className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                            Seu Nome Completo
                          </label>
                          <input
                            type="text"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-850 text-xs text-white outline-none focus:border-amber-500/40"
                            placeholder="Digite seu nome"
                          />
                        </div>

                        <button
                          onClick={handleConfirmBooking}
                          className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs rounded-xl transition-all flex items-center justify-center"
                        >
                          Confirmar Agendamento
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* STEP 4: Success Screen */}
                {bookingStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col justify-center items-center text-center space-y-6 py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-8 h-8 animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-xl font-black text-white">Agendado com Sucesso!</h2>
                      <p className="text-[11px] text-neutral-400 px-2 leading-relaxed">
                        Seu agendamento foi registrado e enviado em tempo real para o painel do barbeiro.
                      </p>
                    </div>

                    {/* Receipt Details Card */}
                    <div className="w-full p-4 rounded-2xl bg-neutral-900 border border-neutral-850 text-xs space-y-2">
                      <div className="flex justify-between border-b border-neutral-850 pb-2">
                        <span className="text-neutral-500">Serviço:</span>
                        <span className="font-bold text-white">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-850 pb-2">
                        <span className="text-neutral-500">Barbeiro:</span>
                        <span className="font-bold text-white">{selectedBarber?.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-850 pb-2">
                        <span className="text-neutral-500">Data/Hora:</span>
                        <span className="font-bold text-white">{selectedDate}, às {selectedTime}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-neutral-500">Preço:</span>
                        <span className="font-black text-amber-500">R$ {selectedService?.price.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl border border-neutral-800 hover:bg-neutral-900 text-[10px] font-bold text-neutral-400 hover:text-white transition-colors"
                    >
                      Agendar Outro Serviço
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Phone Bottom Home Bar */}
            <div className="h-6 w-full flex items-center justify-center bg-neutral-950">
              <div className="w-24 h-1 bg-neutral-700 rounded-full" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Laptop/Tablet Dashboard (Barber Side) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="w-full bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden min-h-[500px]">
            
            {/* Desktop Mockup Header */}
            <div className="px-5 py-3.5 bg-neutral-900/60 border-b border-neutral-850 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Laptop className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-black text-white tracking-wider">Cavalera Barber Club</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold uppercase">
                  Filial Jardins
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] text-neutral-400 font-bold">Supabase Realtime</span>
                <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-[10px] text-white">
                  AD
                </div>
              </div>
            </div>

            {/* Notification Banner Container */}
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-amber-500/20 border-b border-amber-500/30 text-amber-400 px-5 py-3 text-[11px] font-bold flex items-center justify-between relative z-10 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span>{notification}</span>
                  </div>
                  <button 
                    onClick={() => setNotification(null)}
                    className="text-amber-500 hover:text-white text-xs ml-4"
                  >
                    Dispensar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Admin Dashboard Body */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 p-6 text-left">
              
              {/* Sidebar Menu Widget */}
              <div className="md:col-span-3 space-y-2 hidden md:block">
                <div className="p-3 bg-neutral-900 border border-neutral-850 rounded-xl">
                  <span className="text-[9px] font-black text-neutral-500 uppercase tracking-widest block mb-2">
                    Menu Principal
                  </span>
                  <ul className="space-y-1 text-xs">
                    <li className="p-2 bg-amber-500/10 text-amber-400 rounded-lg font-bold flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      Agenda Hoje
                    </li>
                    <li className="p-2 text-neutral-400 hover:text-neutral-200 rounded-lg flex items-center cursor-not-allowed">
                      <DollarSign className="w-3.5 h-3.5 mr-2" />
                      Comissões
                    </li>
                    <li className="p-2 text-neutral-400 hover:text-neutral-200 rounded-lg flex items-center cursor-not-allowed">
                      <Box className="w-3.5 h-3.5 mr-2" />
                      Estoque
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-neutral-900/40 border border-neutral-900 rounded-xl text-[10px] text-neutral-500 space-y-1">
                  <p className="font-bold text-neutral-400">Locador Multi-Tenant</p>
                  <p>ID do Tenant: `tenant_cavalera`</p>
                  <p>Database: isolated_schema</p>
                </div>
              </div>

              {/* Main Content Dashboard */}
              <div className="md:col-span-9 space-y-5">
                
                {/* Stats Widgets */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Stats Billing */}
                  <div className="p-3.5 bg-neutral-900 border border-neutral-850 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-2 right-2 p-1.5 bg-neutral-850 rounded-lg text-amber-500">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-bold text-neutral-500 uppercase block mb-1">
                      Faturamento Dia
                    </span>
                    <span className="text-base sm:text-lg font-black text-white flex items-baseline">
                      R$ {barberDashboard.billing.toFixed(2)}
                    </span>
                  </div>

                  {/* Stats Commission */}
                  <div className="p-3.5 bg-neutral-900 border border-neutral-850 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-2 right-2 p-1.5 bg-neutral-850 rounded-lg text-emerald-500">
                      <DollarSign className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-bold text-neutral-500 uppercase block mb-1">
                      Minha Comissão (50%)
                    </span>
                    <span className="text-base sm:text-lg font-black text-emerald-400 flex items-baseline">
                      R$ {barberDashboard.commission.toFixed(2)}
                    </span>
                  </div>

                  {/* Stats Stock */}
                  <div className="p-3.5 bg-neutral-900 border border-neutral-850 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-2 right-2 p-1.5 bg-neutral-850 rounded-lg text-neutral-500">
                      <Box className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-bold text-neutral-500 uppercase block mb-1">
                      Estoque Pomada
                    </span>
                    <span className={`text-base sm:text-lg font-black transition-colors ${
                      barberDashboard.stockPomada <= 10 ? "text-amber-500" : "text-white"
                    }`}>
                      {barberDashboard.stockPomada} un
                    </span>
                  </div>
                </div>

                {/* Selected Barber Live Profile View */}
                <div className="p-3 bg-neutral-900/50 border border-neutral-850 rounded-xl flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-neutral-400">Perspectiva ativa:</span>
                    <span className="font-bold text-white">
                      {selectedBarber ? `Painel do Barbeiro: ${selectedBarber.name}` : "Visão Geral (Administrador)"}
                    </span>
                  </div>
                  {selectedService && (
                    <div className="text-[10px] text-amber-500 font-bold animate-pulse">
                      Aguardando confirmação: +R$ {(selectedService.price * 0.5).toFixed(2)} comissão
                    </div>
                  )}
                </div>

                {/* Appointments Table / Schedule List */}
                <div className="bg-neutral-900 border border-neutral-850 rounded-2xl overflow-hidden">
                  <div className="px-4 py-3 bg-neutral-850/40 border-b border-neutral-850 flex justify-between items-center">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center">
                      <Clock className="w-3.5 h-3.5 text-amber-500 mr-2" />
                      Agendamentos de Hoje (Visão da Agenda)
                    </h3>
                    <span className="text-[9px] font-bold text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-full">
                      {barberDashboard.appointments.length} Reservas
                    </span>
                  </div>

                  <div className="p-3 space-y-2.5 max-h-[280px] overflow-y-auto">
                    {barberDashboard.appointments.map((appointment) => {
                      const isNew = appointment.id === justAddedAppointmentId;
                      const barber = BARBERS.find(b => b.id === appointment.barberId);
                      
                      return (
                        <div
                          key={appointment.id}
                          className={`p-3 rounded-xl border text-xs flex justify-between items-center transition-all ${
                            isNew 
                              ? "bg-amber-500/10 border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.15)] animate-in slide-in-from-top-4 duration-500" 
                              : "bg-neutral-950 border-neutral-900"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-black text-neutral-400 tracking-wide bg-neutral-900 px-2.5 py-1 rounded-lg border border-neutral-850">
                              {appointment.time}
                            </span>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <span className="font-bold text-white">{appointment.client}</span>
                                {isNew && (
                                  <span className="text-[8px] bg-amber-500 text-neutral-950 font-bold px-1.5 py-0.2 rounded-full uppercase animate-pulse">
                                    Novo
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-neutral-500">
                                {appointment.service} • Barbeiro: {barber?.name}
                              </p>
                            </div>
                          </div>

                          <div className="text-right flex items-center space-x-4">
                            <div>
                              <p className="font-black text-white text-xs">R$ {appointment.price.toFixed(2)}</p>
                              <p className="text-[8px] text-neutral-500">Comissão: R$ {(appointment.price * 0.5).toFixed(2)}</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                              appointment.status === "Finalizado"
                                ? "bg-neutral-850 text-neutral-400"
                                : "bg-amber-500/20 text-amber-500 border border-amber-500/30 animate-pulse"
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Stock Warning Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-neutral-900 border border-neutral-850 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-neutral-850 flex items-center justify-center text-amber-500">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Estoque de Produtos</h4>
                        <p className="text-[9px] text-neutral-500">Óleo para Barba Wood</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-400">
                      {barberDashboard.stockOleo} unidades
                    </span>
                  </div>

                  <div className="p-3.5 bg-neutral-900 border border-neutral-850 rounded-xl flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-neutral-850 flex items-center justify-center text-amber-500">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Notificações Push</h4>
                        <p className="text-[9px] text-neutral-500">Gatilhos automáticos</p>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                      SMS + WhatsApp
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Tech Pillars Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left border-t border-neutral-900 mt-20">
        
        <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-850 w-fit text-amber-500 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white mb-2">Multi-Tenancy Isolado</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Arquitetura multi-tenant robusta. Cada barbearia cliente atua como um inquilino único com controle estrito de políticas Row Level Security (RLS) no Supabase.
          </p>
        </div>

        <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-850 w-fit text-amber-500 mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white mb-2">Supabase Realtime</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Agendamentos criados pelos clientes disparam instantaneamente notificações no painel administrativo dos barbeiros via WebSockets do Supabase, sem necessidade de reload.
          </p>
        </div>

        <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-850 w-fit text-amber-500 mb-4">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white mb-2">Comissões Automáticas</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Cada serviço agendado calcula automaticamente a divisão financeira pré-acordada do barbeiro parceiro e atualiza seu saldo acumulado em tempo real no dashboard.
          </p>
        </div>

        <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-850 w-fit text-amber-500 mb-4">
            <Box className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white mb-2">Baixa de Estoque</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Gestão integrada que reduz pomadas, óleos, lâminas e toalhas do almoxarifado assim que um serviço associado é reservado e executado por qualquer profissional da rede.
          </p>
        </div>

      </section>

      {/* Footer Block */}
      <footer className="py-12 border-t border-neutral-900 text-center text-xs text-neutral-600 max-w-6xl mx-auto px-6">
        <p>© Barbearia Inteligente SaaS. Todos os direitos reservados.</p>
        <p className="mt-1">Página de demonstração de fluxo interativa produzida por Herrison Souza - HS.DEV</p>
      </footer>
    </main>
  );
}
