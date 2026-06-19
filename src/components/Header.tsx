"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glassmorphism shadow-lg border-b border-white/10"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <span className="text-2xl font-black tracking-tight text-white">
            HS<span className="text-violet-500">.</span>
            <span className="text-sm font-semibold tracking-wider text-neutral-400 group-hover:text-white transition-colors">
              DEV
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-violet-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-violet-400/20"
          >
            Solicitar Orçamento
            <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-6 px-6 glassmorphism border-b border-white/10 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white py-2 border-b border-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="w-full text-center inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600"
          >
            Solicitar Orçamento
            <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
