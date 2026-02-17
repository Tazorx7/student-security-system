import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { Security } from './components/landing/Security';
import { CTA } from './components/landing/CTA';

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
