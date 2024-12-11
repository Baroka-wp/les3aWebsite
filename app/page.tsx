"use client";

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Context from '@/components/sections/Context';
import Mission from '@/components/sections/Mission';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Context />
      <Mission />
      <Contact />
      <Footer />
    </main>
  );
}