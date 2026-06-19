"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Credibility from "../components/Credibility";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import BeforeAfter from "../components/BeforeAfter";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonials from "../components/Testimonials";
import TechShowcase from "../components/TechShowcase";
import Diferenciais from "../components/Diferenciais";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-[#f8fafc] overflow-x-hidden relative selection:bg-violet-500/30 selection:text-white">
      {/* Navbar */}
      <Header />

      {/* Main Sections */}
      <Hero />
      <Credibility />
      <Services />
      <CaseStudies />
      <BeforeAfter />
      <ProcessTimeline />
      <Testimonials />
      <TechShowcase />
      <Diferenciais />
      <FAQ />
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
