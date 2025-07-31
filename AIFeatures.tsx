import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Map, Users, Palette, Volume2, Code, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "AI Story Generator",
    description: "Generate compelling narratives, character backstories, and branching storylines with advanced GPT-4 integration.",
    features: ["Dynamic Plot Generation", "Character Development", "Dialogue Creation", "Quest Design"],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.1
  },
  {
    icon: Map,
    title: "AI Level Designer",
    description: "Create immersive game worlds, level layouts, and environmental challenges automatically.",
    features: ["Procedural Level Generation", "Terrain Modeling", "Obstacle Placement", "Balance Optimization"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    icon: Users,
    title: "AI NPC Behavior Creator",
    description: "Design intelligent NPCs with realistic behaviors, decision-making, and interaction patterns.",
    features: ["Behavior Trees", "AI Pathfinding", "Dynamic Responses", "Personality Systems"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3
  },
  {
    icon: Palette,
    title: "AI Visual Asset Generator",
    description: "Generate stunning game assets, textures, and visual elements using DALL-E and Stable Diffusion.",
    features: ["Texture Generation", "Sprite Creation", "Environment Art", "UI Elements"],
    gradient: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    icon: Volume2,
    title: "AI Audio Creator",
    description: "Produce immersive soundscapes, music tracks, and voice acting with AI-powered audio tools.",
    features: ["Music Composition", "Sound Effects", "Voice Synthesis", "Ambient Audio"],
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.5
  },
  {
    icon: Code,
    title: "AI Code Generator",
    description: "Generate game logic, scripts, and mechanics code for Unity, Godot, and other engines.",
    features: ["Script Generation", "Logic Systems", "API Integration", "Performance Optimization"],
    gradient: "from-teal-500 to-blue-500",
    delay: 0.6
  }
];

export const AIFeatures: React.FC = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">AI-Powered Game Development</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Complete AI
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Toolkit</span>
            <span className="text-6xl ml-4">🛠️</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create professional games with artificial intelligence. 
            From concept to completion, our AI handles the heavy lifting.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: feature.delay, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.3), transparent)`,
                  padding: '2px'
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {feature.features.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: feature.delay + (itemIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                      <span className="text-sm text-white/60">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  className="w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-purple-600/50 hover:to-pink-600/50 text-white border border-white/20 hover:border-purple-400/50 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Try Now</span>
                  <Zap className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};