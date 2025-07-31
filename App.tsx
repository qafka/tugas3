import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AIFeatures } from './components/AIFeatures';
import { GameBuilder } from './components/GameBuilder';
import { Showcase } from './components/Showcase';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';

function App() {
  // Initialize theme system
  useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.1),transparent,rgba(59,130,246,0.1),transparent,rgba(147,51,234,0.1))] pointer-events-none" />
      
      <Header />
      <Hero />
      <AIFeatures />
      <GameBuilder />
      <Showcase />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;