'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles/globals.css';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow mt-8 max-w-4xl mx-auto px-4">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
