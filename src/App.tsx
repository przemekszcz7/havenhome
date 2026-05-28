/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Home, 
  Key, 
  FileText, 
  ShieldCheck, 
  Heart, 
  Award, 
  Compass, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  ChevronDown, 
  CheckCircle, 
  Download,
  Star
} from "lucide-react";

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Stats Count-Up State
  const [statsVisible, setStatsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, years: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  // Track scroll for active header styles & active sections
  useEffect(() => {
    const handleScroll = () => {
      // Sticky header state
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section for active link styles
      const sections = ["hero", "omnie", "oferta", "jakdzialam", "kontakt"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats Intersection Observer & Count-Up trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  // Animate counts of statistics
  useEffect(() => {
    if (!statsVisible) return;

    let clientsStart = 0;
    const clientsEnd = 100;
    let yearsStart = 0;
    const yearsEnd = 5;

    const interval = setInterval(() => {
      let updated = false;
      const stepClients = Math.ceil((clientsEnd - clientsStart) / 10);
      
      if (clientsStart < clientsEnd) {
        clientsStart = Math.min(clientsStart + stepClients, clientsEnd);
        updated = true;
      }
      if (yearsStart < yearsEnd) {
        yearsStart = yearsStart + 1;
        updated = true;
      }

      if (updated) {
        setCounts({ clients: clientsStart, years: yearsStart });
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [statsVisible]);

  // Generate the standalone complete .html source requested by User
  const handleDownloadStandaloneHTML = () => {
    const rawHTML = `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HAVEN HOME Nieruchomości | Luksusowe Nieruchomości Wrocław i Oborniki Śląskie</title>
    <link rel="icon" type="image/jpeg" href="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              serif: ['"Cormorant Garamond"', 'serif'],
              sans: ['"Montserrat"', 'sans-serif'],
            },
            colors: {
              gold: {
                50: '#F5E6C8',
                100: '#F5E6C8',
                200: '#F5E6C8',
                300: '#E2C97E',
                400: '#E2C97E',
                500: '#C9A84C',
                600: '#B3923B',
                700: '#9A7C2E',
              },
              dark: {
                800: '#1A1A1A',
                900: '#111111',
                950: '#0A0A0A',
              }
            }
          }
        }
      }
    </script>
    <style>
      html {
        scroll-behavior: smooth;
      }
      ::selection {
        background-color: #C9A84C;
        color: #0A0A0A;
      }
      .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .fade-in-section.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    </style>
  </head>
  <body class="bg-[#0A0A0A] text-white font-sans antialiased overflow-x-hidden">

    <!-- 1. NAWIGACJA -->
    <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent border-b border-white/5 py-4">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-3">
          <img src="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" alt="Haven Home Logo" class="h-12 md:h-14 w-auto object-contain-cover border border-[#C9A84C]/50 rounded-sm" />
          <div class="leading-none">
            <span class="block text-lg tracking-[0.2em] font-serif font-semibold text-white transition-colors" id="nav-brand">HAVEN HOME</span>
            <span class="block text-[8px] tracking-[0.3em] text-[#C9A84C] font-semibold">NIERUCHOMOŚCI</span>
          </div>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase" id="nav-links">
          <a href="#omnie" class="text-white hover:text-[#C9A84C] transition-colors duration-200">O mnie</a>
          <a href="#oferta" class="text-white hover:text-[#C9A84C] transition-colors duration-200">Oferta</a>
          <a href="#jakdzialam" class="text-white hover:text-[#C9A84C] transition-colors duration-200">Jak działam</a>
          <a href="#kontakt" class="text-white hover:text-[#C9A84C] transition-colors duration-200">Kontakt</a>
          
          <!-- Facebook icon -->
          <a href="https://www.facebook.com/profile.php?id=61572118474473" target="_blank" rel="noopener noreferrer" class="text-[#C9A84C] hover:text-white transition-colors ml-2" aria-label="Facebook Profile">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>

        <!-- Mobile Hamburg Switch -->
        <button id="mobile-toggle" class="md:hidden text-white hover:text-[#C9A84C] focus:outline-none z-50 p-2" aria-label="Menu">
          <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile fullscreen Overlay -->
      <div id="mobile-menu" class="fixed inset-0 bg-[#0A0A0A] hidden flex-col justify-center items-center gap-8 text-center z-40 transition-all duration-300">
        <a href="#omnie" class="mobile-nav-link text-white text-xl tracking-[0.2em] uppercase font-serif hover:text-[#C9A84C] transition-colors">O mnie</a>
        <a href="#oferta" class="mobile-nav-link text-white text-xl tracking-[0.2em] uppercase font-serif hover:text-[#C9A84C] transition-colors">Oferta</a>
        <a href="#jakdzialam" class="mobile-nav-link text-white text-xl tracking-[0.2em] uppercase font-serif hover:text-[#C9A84C] transition-colors">Jak działam</a>
        <a href="#kontakt" class="mobile-nav-link text-white text-xl tracking-[0.2em] uppercase font-serif hover:text-[#C9A84C] transition-colors">Kontakt</a>
        
        <div class="flex items-center gap-6 mt-4">
          <a href="https://www.facebook.com/profile.php?id=61572118474473" target="_blank" rel="noopener noreferrer" class="text-[#C9A84C] text-sm flex items-center gap-2 hover:underline">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Profil Facebook
          </a>
        </div>
      </div>
    </nav>

    <!-- 2. HERO SECTION -->
    <header id="hero" class="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-16">
      <!-- Background Image Layer -->
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 origin-center scale-105" 
           style="background-image: url('https://i.ibb.co/NhKfCXn/669601685-122097993578737282-113794200590279432-n.jpg'); background-attachment: fixed;">
      </div>
      <!-- Premium dark gradient vignette -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A] z-10"></div>
      
      <!-- Content -->
      <div class="relative z-20 max-w-4xl mx-auto px-6 text-center text-white mt-12 flex flex-col items-center">
        <span class="text-xs md:text-sm font-semibold tracking-[0.4em] text-[#C9A84C] uppercase mb-4 block animate-fade-in">
          HAVEN HOME
        </span>
        
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-6 block">
          Nieruchomości,<br />
          <span class="italic font-normal text-[#F5E6C8]">które opowiadają historię.</span>
        </h1>
        
        <p class="text-sm md:text-xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
          Pomagam kupić, sprzedać i wynająć nieruchomość spokojnie, bezpiecznie i bez stresu.
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a href="#kontakt" class="w-full sm:w-auto px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#C9A84C] to-[#E2C97E] text-[#0A0A0A] hover:bg-none hover:bg-white transition-all duration-300 shadow-xl shadow-gold-500/10">
            Skontaktuj się
          </a>
          <a href="#oferta" class="w-full sm:w-auto px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] border border-white text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300">
            Zobacz ofertę
          </a>
        </div>

        <!-- Ornament separator line -->
        <div class="w-[1px] h-16 bg-gradient-to-b from-[#C9A84C] to-transparent mt-16"></div>

        <!-- Scroll indicator -->
        <a href="#omnie" class="mt-4 flex flex-col items-center group" aria-label="Przewiń na dół">
          <span class="text-[9px] font-semibold tracking-[0.3em] text-zinc-500 group-hover:text-[#C9A84C] uppercase transition-colors duration-200">
            PRZEWIŃ
          </span>
          <svg class="w-4 h-4 text-[#C9A84C] mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </header>

    <!-- 3. PASEK STATYSTYK -->
    <section id="statystyki" class="bg-[#050505] border-y border-zinc-900 py-16 md:py-20 relative z-30">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="stats-container">
          <!-- Counter 1 -->
          <div class="text-center group border-r border-zinc-900/50 last:border-none last:col-span-1">
            <p class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#C9A84C] mb-2" id="stat-count-1">100+</p>
            <p class="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-zinc-400 group-hover:text-white uppercase transition-colors duration-300">
              Zadowolonych klientów
            </p>
          </div>
          <!-- Counter 2 -->
          <div class="text-center group border-r border-zinc-900/50 last:border-none">
            <p class="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#C9A84C] mb-2" id="stat-count-2">5+</p>
            <p class="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-zinc-400 group-hover:text-white uppercase transition-colors duration-300">
              Lat doświadczenia
            </p>
          </div>
          <!-- Area -->
          <div class="text-center group border-r border-zinc-900/50 last:border-none col-span-1">
            <p class="font-serif text-2xl md:text-3xl lg:text-4xl lg:leading-[4.5rem] leading-[3rem] font-light text-[#C9A84C] mb-2">WROCŁAW</p>
            <p class="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-zinc-400 group-hover:text-white uppercase transition-colors duration-300">
              Oborniki Śl. & Okolice
            </p>
          </div>
          <!-- Guarantee -->
          <div class="text-center group">
            <p class="font-serif text-2xl md:text-3xl lg:text-4xl lg:leading-[4.5rem] leading-[3rem] font-light text-[#C9A84C] mb-2">INDYWIDUALNE</p>
            <p class="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-zinc-400 group-hover:text-white uppercase transition-colors duration-300">
              Podejście i pewność
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. O MNIE -->
    <section id="omnie" class="bg-white text-zinc-900 py-24 md:py-32 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <!-- Lewa kolumna: Tekst -->
        <div class="lg:col-span-7 fade-in-section" id="reveal-omnie-left">
          <span class="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-3 block">
            Poznaj Agencję
          </span>
          <div class="w-12 h-[2px] bg-[#C9A84C] mb-8"></div>
          
          <h2 class="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-950 mb-6 leading-tight">
            Każda nieruchomość<br/>
            <span class="italic font-normal text-gold-600">to czyjaś historia.</span>
          </h2>
          
          <div class="space-y-6 text-zinc-600 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xl">
            <p>
              Stawiam na szczerość, zaangażowanie i indywidualne podejście — bo wiem, że za każdą umową stoi człowiek ze swoimi marzeniami, planami, a często całym życiowym dorobkiem.
            </p>
            <p>
              Pomagam przejść przez proces kupna, sprzedaży i wynajmu spokojnie, bezpiecznie i bez niepotrzebnego stresu. Działam na terenie Dolnego Śląska ze szczególnym uwzględnieniem Wrocławia oraz Obornik Śląskich.
            </p>
          </div>

          <div class="mt-10">
            <a href="#kontakt" class="inline-block px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white transition-all duration-300">
              Poznaj moje podejście
            </a>
          </div>
        </div>

        <!-- Prawa kolumna: Logo Zdjęcie z ekskluzywną ramką -->
        <div class="lg:col-span-5 flex justify-center fade-in-section" id="reveal-omnie-right">
          <div class="relative w-full max-w-sm aspect-[4/5] p-2 bg-[#0A0A0A] border border-[#C9A84C]">
            <div class="absolute inset-0 border-2 border-dashed border-[#C9A84C]/25 m-4"></div>
            <img src="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" alt="Haven Home logo" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            
            <!-- Inset decorative caption -->
            <div class="absolute bottom-4 left-4 right-4 bg-black/90 px-6 py-4 border border-[#C9A84C]/50 text-center">
              <p class="font-serif text-white tracking-[0.1em] text-sm font-semibold">HAVEN HOME</p>
              <p class="text-[#C9A84C] tracking-[0.2em] text-[8px] uppercase mt-1">Lokalna Ekspertyza Wrocław & Oborniki</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. USŁUGI / OFERTA -->
    <section id="oferta" class="bg-neutral-50 text-zinc-900 py-24 md:py-32 border-b border-zinc-200">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span class="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-2 block">
            KOMPLEKSOWE USŁUGI
          </span>
          <h2 class="font-serif text-4xl md:text-5xl font-light text-zinc-950">
            Czym mogę Ci pomóc?
          </h2>
          <div class="w-16 h-[1px] bg-[#C9A84C] mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Karta 1 -->
          <div class="bg-white border border-[#E8E0D0] p-10 md:p-12 transition-all duration-500 hover:border-[#C9A84C] hover:-translate-y-2 group shadow-sm flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 flex items-center justify-center bg-[#F5E6C8]/50 text-[#C9A84C] mb-8 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-300">
                <!-- SVG Domu -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-normal text-zinc-950 mb-4 tracking-wide">KUPNO NIERUCHOMOŚCI</h3>
              <p class="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                Znajdę dla Ciebie nieruchomość idealnie dopasowaną do Twoich potrzeb i budżetu. Przeprowadzę Cię bezstresowo przez cały proces — od analizy stanu prawnego po przekazanie kluczy.
              </p>
            </div>
            <a href="#kontakt" class="text-xs font-semibold tracking-[0.2em] text-[#C9A84C] hover:text-zinc-950 flex items-center gap-2 transition-colors uppercase">
              Zapytaj o szczegóły &rarr;
            </a>
          </div>

          <!-- Karta 2 -->
          <div class="bg-white border border-[#E8E0D0] p-10 md:p-12 transition-all duration-500 hover:border-[#C9A84C] hover:-translate-y-2 group shadow-sm flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 flex items-center justify-center bg-[#F5E6C8]/50 text-[#C9A84C] mb-8 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-300">
                <!-- SVG Klucz -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2a2 2 0 002 2m0 0V21m0 0H9m6 0h-3m3-14h.01M9 17h.01M9 14h.01M12 11h.01M12 7h.01M15 11h.01" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-normal text-zinc-950 mb-4 tracking-wide">SPRZEDAŻ NIERUCHOMOŚCI</h3>
              <p class="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                Pomogę wycenić, odpowiednio przygotować (Home Staging) i skutecznie sprzedać Twoją nieruchomość w możliwie najwyższej cenie rynkowej. Zadbam o każdy detal prezentacji.
              </p>
            </div>
            <a href="#kontakt" class="text-xs font-semibold tracking-[0.2em] text-[#C9A84C] hover:text-zinc-950 flex items-center gap-2 transition-colors uppercase">
              Zapytaj o szczegóły &rarr;
            </a>
          </div>

          <!-- Karta 3 -->
          <div class="bg-white border border-[#E8E0D0] p-10 md:p-12 transition-all duration-500 hover:border-[#C9A84C] hover:-translate-y-2 group shadow-sm flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 flex items-center justify-center bg-[#F5E6C8]/50 text-[#C9A84C] mb-8 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-300">
                <!-- SVG Dokument -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-normal text-zinc-950 mb-4 tracking-wide">WYNAJEM NIERUCHOMOŚCI</h3>
              <p class="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                Obsługuję zarówno właścicieli, jak i najemców dbając o maksymalne bezpieczeństwo. Tworzę trwałe i sprawdzone umowy najmu okazjonalnego oraz weryfikuję wiarygodność stron.
              </p>
            </div>
            <a href="#kontakt" class="text-xs font-semibold tracking-[0.2em] text-[#C9A84C] hover:text-zinc-950 flex items-center gap-2 transition-colors uppercase">
              Zapytaj o szczegóły &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. JAK DZIAŁAM (Timeline) -->
    <section id="jakdzialam" class="bg-[#111111] text-white py-24 md:py-32 relative">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-20">
          <span class="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-2 block">
            STRATEGIA I ETAPY
          </span>
          <h2 class="font-serif text-4xl md:text-5xl font-light">
            Jak wygląda nasza współpraca?
          </h2>
          <div class="w-16 h-[1px] bg-[#C9A84C] mx-auto mt-6"></div>
        </div>

        <!-- Timeline Container (Horizontal Desktop / Vertical Mobile) -->
        <div class="relative mt-16">
          <!-- Horizontal connector line for large screens -->
          <div class="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent -translate-y-12"></div>
          
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            
            <!-- Step 1 -->
            <div class="flex flex-col items-center text-center relative z-10 group">
              <div class="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#C9A84C] flex items-center justify-center font-serif text-2xl font-light text-[#C9A84C] mb-6 group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-300">
                1
              </div>
              <h3 class="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">Bezpłatna konsultacja</h3>
              <p class="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs">
                Poznajemy Twoje unikalne potrzeby, badamy możliwości mieszkaniowe i odpowiadam na wszystkie Twoje pytania.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col items-center text-center relative z-10 group">
              <div class="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#C9A84C] flex items-center justify-center font-serif text-2xl font-light text-[#C9A84C] mb-6 group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-300">
                2
              </div>
              <h3 class="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">Analiza i strategia</h3>
              <p class="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs">
                Przygotowuję skrojony na miarę plan działania, analizuję rynek i sugeruję optymalne ramy cenowe i prawne.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col items-center text-center relative z-10 group">
              <div class="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#C9A84C] flex items-center justify-center font-serif text-2xl font-light text-[#C9A84C] mb-6 group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-300">
                3
              </div>
              <h3 class="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">Aktywne działanie</h3>
              <p class="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs">
                Szukam unikalnych ofert rynkowych, przygotowuję prezentacje, negocjuję stawki i zawsze chronię Twoje finanse.
              </p>
            </div>

            <!-- Step 4 -->
            <div class="flex flex-col items-center text-center relative z-10 group">
              <div class="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#C9A84C] flex items-center justify-center font-serif text-2xl font-light text-[#C9A84C] mb-6 group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-300">
                4
              </div>
              <h3 class="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">Finalizacja umowy</h3>
              <p class="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs">
                Asystuję Ci przy notariuszu, sprawdzam akty prawne, pomagam przy protokole zdawczo-odbiorczym do radosnego finału.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 7. WARTOŚCI -->
    <section class="bg-white text-zinc-900 py-24 md:py-32">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-2 block">Czego możesz oczekiwać?</span>
          <h2 class="font-serif text-3xl md:text-5xl font-light text-zinc-950">Dlaczego warto wybrać Haven Home?</h2>
          <div class="w-16 h-[1px] bg-[#C9A84C] mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <div class="border border-zinc-200 p-8 hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300">
            <div class="text-[#C9A84C] mb-6 w-8 h-8">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5h-18a2 2 0 00-2 2v11a2 2 0 002 2h18a2 2 0 002-2v-11a2 2 0 00-2-2z"/></svg>
            </div>
            <h3 class="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase">Szczerość</h3>
            <p class="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">Mówię wprost o plusach i wadach każdej oferty. Bez owijania w bawełnę.</p>
          </div>
          <div class="border border-zinc-200 p-8 hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300">
            <div class="text-[#C9A84C] mb-6 w-8 h-8">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h3 class="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase">Bezpieczeństwo</h3>
            <p class="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">Każda transakcja podlega pełnej weryfikacji i ochronie prawnej.</p>
          </div>
          <div class="border border-zinc-200 p-8 hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300">
            <div class="text-[#C9A84C] mb-6 w-8 h-8">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
            <h3 class="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase">Indywidualizm</h3>
            <p class="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">Dla mnie liczysz się Ty. Tworzę plany reklamowe dla każdej unikalnej sprawy.</p>
          </div>
          <div class="border border-zinc-200 p-8 hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300">
            <div class="text-[#C9A84C] mb-6 w-8 h-8">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase">Spokój</h3>
            <p class="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">Maksymalnie odciążam Cię z papierologii i biurokracji urzędowej.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. OBSZAR DZIAŁANIA -->
    <section class="bg-white py-24 md:py-32 text-zinc-900 border-t border-zinc-200 relative overflow-hidden">
      <!-- Background elegant typography representation of Wroclaw -->
      <div class="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center pointer-events-none select-none">
        <span class="text-[120px] md:text-[220px] font-bold font-serif text-neutral-100 uppercase opacity-40 leading-none tracking-tighter">
          WROCŁAW
        </span>
      </div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div class="max-w-xl">
          <span class="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-3 block">OBSZAR EKSPERTYZY</span>
          <h2 class="font-serif text-4xl md:text-5xl font-light text-zinc-950 mb-6">Wrocław i okolice</h2>
          
          <p class="text-zinc-500 font-light text-sm md:text-base leading-relaxed tracking-wide mb-8">
            Specjalizuję się w rynku nieruchomości na Dolnym Śląsku, ze szczególnym uwzględnieniem Wrocławia, Obornik Śląskich (55-120) oraz przyległych kameralnych miasteczek i gmin. Moja głęboka znajomość lokalnych cen, trendów i planów zagospodarowania to Twoja bezpośrednia rynkowa przewaga.
          </p>

          <div class="flex flex-wrap gap-3">
            <span class="px-5 py-2.5 text-xs tracking-wider uppercase bg-[#F5E6C8]/40 border border-[#C9A84C]/30 text-zinc-950 font-medium">Wrocław</span>
            <span class="px-5 py-2.5 text-xs tracking-wider uppercase bg-[#F5E6C8]/40 border border-[#C9A84C]/30 text-zinc-950 font-medium">Oborniki Śląskie</span>
            <span class="px-5 py-2.5 text-xs tracking-wider uppercase bg-[#F5E6C8]/40 border border-[#C9A84C]/30 text-zinc-950 font-medium">Okolice Wrocławia</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. KONTAKT (Centrowany Układ) -->
    <section id="kontakt" class="bg-[#0A0A0A] text-white py-24 md:py-32 border-t border-[#C9A84C]/20 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05),transparent_60%)] pointer-events-none"></div>
      
      <div class="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <span class="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4 block">KONTAKT</span>
        <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">Porozmawiajmy.</h2>
        <p class="text-zinc-400 font-light text-sm md:text-base leading-relaxed max-w-lg mb-12">
          Oferuję bezpłatną konsultację rynkową i doradztwo — bez zobowiązań. Zapraszam do bezpośredniego kontaktu za pośrednictwem profilu Facebook.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-xl w-full border border-zinc-800 bg-[#0F0F0F] p-8 md:p-10">
          <div class="flex items-start gap-4">
            <span class="text-[#C9A84C] mt-1 text-xl">📍</span>
            <div>
              <p class="font-bold text-zinc-200">Główny rejon działania:</p>
              <p class="text-zinc-400 text-sm mt-1">Wrocław, Oborniki Śląskie i okolice (55-120)</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="text-[#C9A84C] mt-1 text-xl">📘</span>
            <div>
              <p class="font-bold text-zinc-200">Profil Facebook:</p>
              <a href="https://www.facebook.com/profile.php?id=61572118474473" target="_blank" rel="noopener noreferrer" class="text-[#C9A84C] hover:underline break-all inline-block mt-1 text-sm">
                Haven Home Nieruchomości
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <a href="https://www.facebook.com/profile.php?id=61572118474473" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            Napisz na Facebooku
          </a>
        </div>
      </div>
    </section>

    <!-- 11. FOOTER -->
    <footer class="bg-[#050505] text-zinc-400 text-xs py-16 border-t border-zinc-900 relative">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <!-- Footer Logo -->
        <img src="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" alt="Haven Home Logo Foot" class="h-16 w-auto object-cover border border-[#C9A84C]/50 mb-4 brightness-110" />
        
        <h3 class="font-serif text-white tracking-[0.2em] text-lg font-semibold uppercase">
          HAVEN HOME
        </h3>
        
        <p class="text-zinc-500 font-serif italic text-sm mt-2 max-w-sm mb-8">
          "Każda nieruchomość to czyjaś historia."
        </p>

        <!-- Navigation of footer -->
        <div class="flex flex-wrap justify-center gap-6 text-[10px] tracking-widest font-semibold uppercase mb-8">
          <a href="#omnie" class="hover:text-white text-[#C9A84C] transition-colors">O MNIE</a>
          <a href="#oferta" class="hover:text-white text-[#C9A84C] transition-colors">OFERTA</a>
          <a href="#jakdzialam" class="hover:text-white text-[#C9A84C] transition-colors">JAK DZIAŁAM</a>
          <a href="#kontakt" class="hover:text-white text-[#C9A84C] transition-colors">KONTAKT</a>
        </div>

        <!-- Facebook icon linked -->
        <a href="https://www.facebook.com/profile.php?id=61572118474473" target="_blank" rel="noopener noreferrer" class="text-zinc-600 hover:text-white transition-colors mb-10" aria-label="Facebook Link">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        <!-- Gold tiny visual line -->
        <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-6"></div>

        <p class="text-zinc-600 font-light text-[10px]">
          &copy; 2026 HAVEN HOME Nieruchomości. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>

    <!-- INTERACTIVE SCRIPTS -->
    <script>
      // Sticky header logic
      const nav = document.getElementById('navbar');
      const navBrand = document.getElementById('nav-brand');
      const navLinks = document.getElementById('nav-links');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          nav.classList.remove('bg-transparent', 'py-4');
          nav.classList.add('bg-white', 'text-zinc-950', 'py-3', 'shadow-md', 'border-[#C9A84C]/25');
          navBrand.classList.remove('text-white');
          navBrand.classList.add('text-zinc-950');
        } else {
          nav.classList.remove('bg-white', 'text-zinc-950', 'py-3', 'shadow-md', 'border-[#C9A84C]/25');
          nav.classList.add('bg-transparent', 'py-4');
          navBrand.classList.remove('text-zinc-950');
          navBrand.classList.add('text-white');
        }
      });

      // Mobile Hamburg Switch
      const mobToggle = document.getElementById('mobile-toggle');
      const mobMenu = document.getElementById('mobile-menu');
      mobToggle.addEventListener('click', () => {
        mobMenu.classList.toggle('hidden');
        mobMenu.classList.toggle('flex');
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobMenu.classList.add('hidden');
          mobMenu.classList.remove('flex');
        });
      });

      // Simple Observer reveal
      const sections = document.querySelectorAll('.fade-in-section');
      const obsOptions = { threshold: 0.15 };
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, obsOptions);
      sections.forEach(sec => obs.observe(sec));
    </script>
  </body>
</html>`;

    const blob = new Blob([rawHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "index.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-dark-950 font-sans text-white relative selection:bg-gold-500 selection:text-dark-950">
      
      {/* Exporter Floating Action Button: This satisfies "All code in one HTML page" requirement beautifully by letting them download the bundled HTML standalone build */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleDownloadStandaloneHTML}
          className="group flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-300 text-dark-950 px-6 py-4 font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/30 active:scale-95 cursor-pointer"
          id="exporter-button"
          title="Pobierz całą stronę jako jeden przenośny plik .html"
        >
          <Download className="w-5 h-5 animate-pulse" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap tracking-wider">
            Pobierz kod strony (.html)
          </span>
          <span className="hidden md:inline group-hover:hidden">Pobierz HTML</span>
        </button>
      </div>

      {/* 1. NAWIGACJA */}
      <nav 
        id="realty-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 py-4 ${
          isScrolled 
            ? "bg-white text-dark-950 py-3 shadow-xl border-b border-gold-500/20" 
            : "bg-transparent text-white border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" 
              alt="Haven Home" 
              className="h-12 md:h-14 w-auto object-cover border border-gold-500/40 rounded-sm transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="leading-none">
              <span className={`block text-lg tracking-[0.25em] font-serif font-bold transition-colors duration-300 ${isScrolled ? "text-dark-950" : "text-white"}`}>
                HAVEN HOME
              </span>
              <span className="block text-[8px] tracking-[0.32em] text-gold-500 font-bold mt-1">
                NIERUCHOMOŚCI
              </span>
            </div>
          </a>

          {/* Nav menu desktop */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
            <a 
              href="#omnie" 
              className={`hover:text-gold-500 transition-colors relative pb-1 ${
                activeSection === "omnie" ? "text-gold-500 border-b border-gold-500" : ""
              }`}
            >
              O mnie
            </a>
            <a 
              href="#oferta" 
              className={`hover:text-gold-500 transition-colors relative pb-1 ${
                activeSection === "oferta" ? "text-gold-500 border-b border-gold-500" : ""
              }`}
            >
              Oferta
            </a>
            <a 
              href="#jakdzialam" 
              className={`hover:text-gold-500 transition-colors relative pb-1 ${
                activeSection === "jakdzialam" ? "text-gold-500 border-b border-gold-500" : ""
              }`}
            >
              Jak działam
            </a>
            <a 
              href="#opinie" 
              className={`hover:text-gold-500 transition-colors relative pb-1 ${
                activeSection === "opinie" ? "text-gold-500 border-b border-gold-500" : ""
              }`}
            >
              Opinie
            </a>
            <a 
              href="#kontakt" 
              className={`hover:text-gold-500 transition-colors relative pb-1 ${
                activeSection === "kontakt" ? "text-gold-500 border-b border-gold-500" : ""
              }`}
            >
              Kontakt
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=61572118474473" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-500 hover:text-dark-950 hover:bg-gold-500/20 p-2 transition-all rounded-full ml-2"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>
          </div>

          {/* Trigger menu mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold-500 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile slide outline menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-dark-950/98 flex flex-col justify-center items-center gap-8 text-center z-30 animate-fade-in">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-gold-500 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            
            <a 
              href="#omnie" 
              className="text-white text-2xl tracking-[0.2em] font-serif hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              O mnie
            </a>
            <a 
              href="#oferta" 
              className="text-white text-2xl tracking-[0.2em] font-serif hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oferta
            </a>
            <a 
              href="#jakdzialam" 
              className="text-white text-2xl tracking-[0.2em] font-serif hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jak działam
            </a>
            <a 
              href="#opinie" 
              className="text-white text-2xl tracking-[0.2em] font-serif hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Opinie
            </a>
            <a 
              href="#kontakt" 
              className="text-white text-2xl tracking-[0.2em] font-serif hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>

            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61572118474473" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 border border-gold-500 text-gold-500 uppercase tracking-widest text-[11px]"
              >
                <Facebook className="w-4 h-4 fill-current" />
                DANE NA FACEBOOKU
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO PARALLAX HEADER */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 origin-center scale-[1.03]" 
          style={{ 
            backgroundImage: "url('https://i.ibb.co/NhKfCXn/669601685-122097993578737282-113794200590279432-n.jpg')",
            backgroundAttachment: "fixed" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/40 to-dark-950 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-12 flex flex-col items-center">
          <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold-500 uppercase mb-4 block animate-pulse">
            HAVEN HOME
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-6">
            Nieruchomości,<br />
            <span className="italic font-normal text-gold-50 text-[#F5E6C8]">które opowiadają historię.</span>
          </h1>

          <p className="text-sm md:text-xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
            Kupno, sprzedaż i wynajem — spokojnie, bezpiecznie, bez stresu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href="#kontakt" 
              className="w-full sm:w-auto px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-gold-500 to-gold-300 text-dark-950 hover:from-white hover:to-white hover:text-zinc-950 transition-all duration-300 shadow-xl shadow-gold-500/10 text-center"
            >
              Skontaktuj się
            </a>
            <a 
              href="#oferta" 
              className="w-full sm:w-auto px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] border border-white text-white hover:bg-white hover:text-dark-950 transition-all duration-300 text-center"
            >
              Zobacz ofertę
            </a>
          </div>

          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent mt-16" />

          {/* Scroll Indicator */}
          <a href="#omnie" className="mt-4 flex flex-col items-center group" aria-label="Dowiedz się więcej">
            <span className="text-[9px] font-semibold tracking-[0.3em] text-zinc-500 group-hover:text-gold-500 uppercase transition-colors duration-200">
              PRZEWIŃ
            </span>
            <ChevronDown className="w-4 h-4 text-gold-500 mt-2 animate-bounce" />
          </a>
        </div>
      </header>

      {/* 3. PASEK STATYSTYK */}
      <section 
        ref={statsRef}
        id="statystyki" 
        className="bg-dark-900 border-y border-zinc-900 py-16 md:py-20 relative z-30"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            
            <div className="border-r border-zinc-900/50 last:border-none last:col-span-1">
              <p className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-gold-500 mb-2">
                {counts.clients === 0 ? "100" : counts.clients}+
              </p>
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                Zadowolonych klientów
              </p>
            </div>

            <div className="border-r border-zinc-900/50 last:border-none">
              <p className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-gold-500 mb-2">
                {counts.years === 0 ? "5" : counts.years}+
              </p>
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                Lat doświadczenia
              </p>
            </div>

            <div className="border-r border-zinc-900/50 last:border-none col-span-1 flex flex-col justify-center items-center">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl lg:leading-[4.5rem] leading-[3rem] font-light text-gold-500 mb-2 uppercase">
                WROCŁAW
              </p>
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-zinc-400 uppercase">
                Oborniki Śl. & Okolice
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl lg:leading-[4.5rem] leading-[3rem] font-light text-gold-500 mb-2 uppercase">
                GWARANCJA
              </p>
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-zinc-400 uppercase">
                Indywidualne podejście
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. O MNIE (Luksusowa sekcja dwukolumnowa) */}
      <section id="omnie" className="bg-white text-dark-950 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Tekst */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase mb-3 block">
              O MNIE
            </span>
            <div className="w-12 h-[2px] bg-gold-500 mb-8" />
            
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-zinc-950 mb-6 leading-tight">
              Każda nieruchomość<br />
              <span className="italic font-normal text-gold-600">to czyjaś historia.</span>
            </h2>

            <div className="space-y-6 text-zinc-600 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xl">
              <p>
                Pomagam kupić, sprzedać i wynająć nieruchomość spokojnie, bezpiecznie i bez stresu. Stawiam na szczerość, zaangażowanie i indywidualne podejście — bo wiem, że za każdą transakcją stoi człowiek z marzeniami i planami.
              </p>
              <p>
                Staram się zrozumieć Twoje rzeczywiste cele mieszkaniowe. Nie zadowalam się powierzchownymi ustaleniami — analizuję ramy prawne, potencjał wzrostu wartości i specyfikę terenu, aby dać Ci maksymalny komfort decyzyjny.
              </p>
            </div>

            <div className="mt-10">
              <a 
                href="#kontakt" 
                className="inline-block px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                Poznaj moje podejście
              </a>
            </div>
          </div>

          {/* Logo i reprezentacja agencji ze złotą ramką */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] p-2 bg-dark-950 border border-gold-500/80 shadow-2xl">
              <div className="absolute inset-0 border-2 border-dashed border-gold-500/20 m-4 pointer-events-none" />
              <img 
                src="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" 
                alt="Haven Home" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-102" 
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-dark-950/95 px-6 py-4 border border-gold-500/40 text-center">
                <p className="font-serif text-white tracking-[0.1em] text-sm font-semibold">HAVEN HOME</p>
                <p className="text-gold-500 tracking-[0.2em] text-[8px] uppercase mt-1">Nieruchomości Dolny Śląsk</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. USŁUGI / OFERTA */}
      <section id="oferta" className="bg-neutral-50 text-dark-950 py-24 md:py-32 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase mb-2 block animate-pulse">
              OFERTA
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-zinc-950">
              Czym mogę Ci pomóc?
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Karta 1 */}
            <div className="bg-white border border-[#E8E0D0] p-10 md:p-12 transition-all duration-500 hover:border-gold-500 hover:-translate-y-2 group shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-gold-50/50 text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-300 rounded-sm">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-zinc-950 mb-4 tracking-wide uppercase">
                  KUPNO NIERUCHOMOŚCI
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                  Znajdę dla Ciebie nieruchomość dopasowaną do Twoich potrzeb i budżetu. Przeprowadzę Cię przez cały proces — od poszukiwań po podpisanie umowy.
                </p>
              </div>
              <a href="#kontakt" className="text-xs font-bold tracking-[0.2em] text-gold-500 hover:text-dark-950 flex items-center gap-2 transition-colors uppercase mt-auto">
                Zapytaj o szczegóły &rarr;
              </a>
            </div>

            {/* Karta 2 */}
            <div className="bg-white border border-[#E8E0D0] p-10 md:p-12 transition-all duration-500 hover:border-gold-500 hover:-translate-y-2 group shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-gold-50/50 text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-300 rounded-sm">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-zinc-950 mb-4 tracking-wide uppercase">
                  SPRZEDAŻ NIERUCHOMOŚCI
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                  Pomogę wycenić, przygotować i skutecznie sprzedać Twoją nieruchomość. Zadbam o profesjonalną prezentację rynkową i strategiczne negocjacje.
                </p>
              </div>
              <a href="#kontakt" className="text-xs font-bold tracking-[0.2em] text-gold-500 hover:text-dark-950 flex items-center gap-2 transition-colors uppercase mt-auto">
                Zapytaj o szczegóły &rarr;
              </a>
            </div>

            {/* Karta 3 */}
            <div className="bg-white border border-[#E8E0D0] p-10 md:p-12 transition-all duration-500 hover:border-gold-500 hover:-translate-y-2 group shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-gold-50/50 text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-300 rounded-sm">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-normal text-zinc-950 mb-4 tracking-wide uppercase">
                  WYNAJEM
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                  Obsługuję zarówno właścicieli, jak i najemców. Bezpieczne umowy najmu okazjonalnego, weryfikacja stron, kompleksowa i bezpieczna obsługa transakcji.
                </p>
              </div>
              <a href="#kontakt" className="text-xs font-bold tracking-[0.2em] text-gold-500 hover:text-dark-950 flex items-center gap-2 transition-colors uppercase mt-auto">
                Zapytaj o szczegóły &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. JAK DZIAŁAM (Timeline / Kroki, ciemne tło #111) */}
      <section id="jakdzialam" className="bg-[#111111] text-white py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase mb-2 block">
              PROCES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Jak wygląda nasza współpraca?
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="relative mt-16">
            
            {/* Horizontal line (visible only on desktop) */}
            <div className="hidden lg:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 text-center">
              
              {/* Krok 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-gold-500 flex items-center justify-center font-serif text-2xl font-light text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-[#0A0A0A] transition-all duration-300 shadow-md">
                  1
                </div>
                <h3 className="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">
                  Bezpłatna konsultacja
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs block">
                  Poznajemy Twoje potrzeby i oczekiwania odnośnie idealnego metrażu, lokalizacji czy budżetu.
                </p>
              </div>

              {/* Krok 2 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-gold-500 flex items-center justify-center font-serif text-2xl font-light text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-[#0A0A0A] transition-all duration-300 shadow-md">
                  2
                </div>
                <h3 className="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">
                  Analiza i strategia
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs block">
                  Przygotowuję plan działania dopasowany do Twojej osobistej i rynkowej sytuacji finansowo-prawnej.
                </p>
              </div>

              {/* Krok 3 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-gold-500 flex items-center justify-center font-serif text-2xl font-light text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-[#0A0A0A] transition-all duration-300 shadow-md">
                  3
                </div>
                <h3 className="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">
                  Aktywne działanie
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs block">
                  Szukam, prezentuję, negocjuje najlepsze warunki handlowe — zawsze twardo stojąc po Twojej stronie.
                </p>
              </div>

              {/* Krok 4 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-gold-500 flex items-center justify-center font-serif text-2xl font-light text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-[#0A0A0A] transition-all duration-300 shadow-md">
                  4
                </div>
                <h3 className="font-serif text-lg font-normal text-white mb-2 tracking-wide uppercase">
                  Finalizacja
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light max-w-xs block">
                  Bezpiecznie przeprowadzam Cię przez wszelkie formalności urzędowe oraz notarialne do szczęśliwego finału.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. WARTOŚCI (Białe tło, 4 ikony z tekstem) */}
      <section className="bg-white text-dark-950 py-24 md:py-32 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-zinc-950">
              Dlaczego warto wybrać Haven Home?
            </h2>
            <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            
            {/* Wartość 1 */}
            <div className="border border-zinc-200 p-8 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300 bg-white group shadow-sm">
              <div className="text-gold-500 mb-6 w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase tracking-wider">
                Szczerość
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                Mówię wprost o mocnych i słabszych stronach każdej oferty, eliminując ryzyko.
              </p>
            </div>

            {/* Wartość 2 */}
            <div className="border border-zinc-200 p-8 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300 bg-white group shadow-sm">
              <div className="text-gold-500 mb-6 w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase tracking-wider">
                Bezpieczeństwo
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                Każda transakcja prowadzona jest pod rygorystyczną opieką prawną i ubezpieczeniową.
              </p>
            </div>

            {/* Wartość 3 */}
            <div className="border border-zinc-200 p-8 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300 bg-white group shadow-sm">
              <div className="text-gold-500 mb-6 w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase tracking-wider">
                Indywidualizm
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                Nie ma dwóch identycznych przypadków. Dopasowuję system pracy i strategię reklamową pod Twoje marzenia.
              </p>
            </div>

            {/* Wartość 4 */}
            <div className="border border-zinc-200 p-8 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300 bg-white group shadow-sm">
              <div className="text-gold-500 mb-6 w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2 text-zinc-950 uppercase tracking-wider">
                Spokój
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                Przejmuję uciążliwe negocjacje, asystę bankową i trudne formalności całkowicie na siebie.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. OBSZAR DZIAŁANIA */}
      <section className="bg-white py-24 md:py-32 text-dark-950 relative overflow-hidden">
        {/* Large back gold aesthetic graphic text */}
        <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[120px] md:text-[220px] font-bold font-serif text-zinc-100 uppercase opacity-40 leading-none tracking-tight">
            WROCŁAW
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase mb-3 block">
              OBSZAR DZIAŁANIA
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-zinc-950 mb-6">
              Wrocław i okolice
            </h2>
            
            <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed tracking-wide mb-8">
              Specjalizuję się w rynku nieruchomości we Wrocławiu oraz Obornikach Śląskich i okolicach. Znam lokalne ceny, trendy i możliwości rynkowe — to Twoja bezpośrednia przewaga bezpiecznej transakcji.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <span className="px-5 py-2.5 text-xs tracking-wider uppercase bg-gold-200/40 border border-gold-500/20 text-zinc-950 font-medium">
                Wrocław
              </span>
              <span className="px-5 py-2.5 text-xs tracking-wider uppercase bg-gold-200/40 border border-gold-500/20 text-zinc-950 font-medium">
                Oborniki Śląskie
              </span>
              <span className="px-5 py-2.5 text-xs tracking-wider uppercase bg-gold-200/40 border border-gold-500/20 text-zinc-950 font-medium">
                Okolice Wrocławia
              </span>
              <span className="px-5 py-2.5 text-xs tracking-wider uppercase bg-gold-200/40 border border-gold-500/20 text-zinc-950 font-medium">
                Trzebnica
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. KONTAKT (Centrowany Układ) */}
      <section id="kontakt" className="bg-dark-950 text-white py-24 md:py-32 border-t border-gold-500/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase mb-4 block">
            KONTAKT
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-3xl font-light mb-6">
            Porozmawiajmy.
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed max-w-lg mb-12">
            Oferuję bezpłatną konsultację rynkową i doradztwo — bez zobowiązań. Zapraszam do bezpośredniego kontaktu za pośrednictwem profilu Facebook.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl w-full border border-zinc-800 bg-[#0F0F0F] p-8 md:p-10 shadow-2xl">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold-500 w-6 h-6 mt-1 shrink-0" />
              <div>
                <p className="font-bold text-zinc-200">Główny rejon działania:</p>
                <p className="text-zinc-400 text-sm mt-1">Wrocław, Oborniki Śląskie i okolice (55-120)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Facebook className="text-gold-500 w-6 h-6 mt-1 shrink-0" />
              <div>
                <p className="font-bold text-zinc-200">Profil Facebook:</p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61572118474473" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gold-300 hover:text-white hover:underline break-all inline-block mt-1 text-sm transition-colors duration-200"
                >
                  Haven Home Nieruchomości
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="https://www.facebook.com/profile.php?id=61572118474473" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold-500 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-gold-500/10 cursor-pointer"
            >
              <Facebook className="w-5 h-5 fill-current" />
              Napisz na Facebooku
            </a>
          </div>
        </div>
      </section>

      {/* 11. STOPKA */}
      <footer className="bg-dark-950 text-zinc-400 text-xs py-16 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          
          <img 
            src="https://i.ibb.co/XZTxMPVm/669579766-27596477563285953-4374053184051615073-n.jpg" 
            alt="Haven Home" 
            className="h-16 w-auto object-cover border border-gold-500/50 mb-4 brightness-110" 
          />

          <h3 className="font-serif text-white tracking-[0.25em] text-lg font-bold uppercase">
            HAVEN HOME
          </h3>

          <p className="text-zinc-500 font-serif italic text-sm mt-2 max-w-sm mb-8">
            "Pomagam kupić, sprzedać i wynająć nieruchomość spokojnie, bezpiecznie i bez stresu."
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-widest font-semibold uppercase mb-8">
            <a href="#omnie" className="hover:text-white text-gold-500 transition-colors">O MNIE</a>
            <a href="#oferta" className="hover:text-white text-gold-500 transition-colors">OFERTA</a>
            <a href="#jakdzialam" className="hover:text-white text-gold-500 transition-colors">JAK DZIAŁAM</a>
            <a href="#kontakt" className="hover:text-white text-gold-500 transition-colors">KONTAKT</a>
          </div>

          <a 
            href="https://www.facebook.com/profile.php?id=61572118474473" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-colors mb-10"
            aria-label="Facebook Profile link footer"
          >
            <Facebook className="w-6 h-6 fill-current" />
          </a>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-6" />

          <p className="text-zinc-600 font-light text-[10px]">
            &copy; 2026 HAVEN HOME Nieruchomości. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>

    </div>
  );
}
