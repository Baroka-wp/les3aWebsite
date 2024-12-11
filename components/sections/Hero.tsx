"use client";

import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useScroll } from '@/lib/hooks/useScroll';
import Logo from '@/components/layout/Logo';

export default function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566887129693-a1d1afd2d1e7?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Logo size="lg" className="animate-fade-in" />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Association des<br />Armements Africains
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
          Un outil de promotion et de développement du transport et de l'industrie maritimes africains
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => scrollToSection('mission')}
          >
            Découvrir nos missions <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white border-white hover:bg-white/20"
            onClick={() => scrollToSection('contact')}
          >
            Contactez-nous
          </Button>
        </div>
        
        <button 
          onClick={() => scrollToSection('context')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hover:text-blue-200 transition-colors"
        >
          <ChevronDown className="animate-bounce h-8 w-8" />
        </button>
      </div>
    </section>
  );
}