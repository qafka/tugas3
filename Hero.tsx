import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Gamepad2, Brain, Wand2, Rocket } from 'lucide-react';

const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    className={className}
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 1, ease: "easeOut" }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 2
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingElement delay={0.2} className="absolute top-20 left-10">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
          <Brain className="w-10 h-10 text-white" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.4} className="absolute top-32 right-20">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
          <Gamepad2 className="w-8 h-8 text-white" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.6} className="absolute bottom-32 left-20">
        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-2xl shadow-green-500/30">
          <Wand2 className="w-7 h-7 text-white" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.8} className="absolute bottom-20 right-10">
        <div className="w-18 h-18 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/30">
          <Rocket className="w-9 h-9 text-white" />
        </div>
      </FloatingElement>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">Powered by Advanced AI Technology</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            Create Games with
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Magic
            </span>
            <motion.span 
              className="text-7xl sm:text-8xl lg:text-9xl ml-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎮
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            Revolutionary platform that transforms your game ideas into reality using cutting-edge AI. 
            Generate stories, design levels, create NPCs, and build complete games automatically.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <motion.button 
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl shadow-purple-500/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-6 h-6" />
              <span>Start Building Games</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            {[
              { value: "10K+", label: "Games Created", icon: "🎯" },
              { value: "50+", label: "AI Models", icon: "🧠" },
              { value: "99.9%", label: "Uptime", icon: "⚡" },
              { value: "24/7", label: "AI Support", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};