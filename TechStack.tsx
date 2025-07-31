import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "React", logo: "⚛️", color: "from-cyan-500 to-blue-500", category: "Frontend" },
  { name: "Next.js", logo: "▲", color: "from-gray-700 to-gray-900", category: "Frontend" },
  { name: "Tailwind", logo: "🎨", color: "from-teal-500 to-cyan-500", category: "Frontend" },
  { name: "Framer Motion", logo: "🎭", color: "from-purple-500 to-pink-500", category: "Frontend" },
  { name: "Node.js", logo: "🟢", color: "from-green-600 to-green-400", category: "Backend" },
  { name: "Python", logo: "🐍", color: "from-blue-500 to-yellow-500", category: "Backend" },
  { name: "PostgreSQL", logo: "🐘", color: "from-blue-600 to-indigo-600", category: "Backend" },
  { name: "Firebase", logo: "🔥", color: "from-orange-500 to-red-500", category: "Backend" },
  { name: "OpenAI", logo: "🧠", color: "from-green-500 to-teal-500", category: "AI" },
  { name: "DALL-E", logo: "🎨", color: "from-purple-500 to-pink-500", category: "AI" },
  { name: "TensorFlow", logo: "🔶", color: "from-orange-500 to-red-500", category: "AI" },
  { name: "PyTorch", logo: "🔥", color: "from-red-500 to-pink-500", category: "AI" },
  { name: "Unity", logo: "🎮", color: "from-gray-700 to-gray-900", category: "Game Engine" },
  { name: "Godot", logo: "🤖", color: "from-blue-500 to-cyan-500", category: "Game Engine" },
  { name: "Vercel", logo: "▲", color: "from-gray-800 to-black", category: "Deployment" },
  { name: "Netlify", logo: "🌐", color: "from-teal-500 to-cyan-500", category: "Deployment" }
];

const categories = ["Frontend", "Backend", "AI", "Game Engine", "Deployment"];

export const TechStack: React.FC = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Cutting-Edge
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Tech Stack</span>
            <span className="text-6xl ml-4">⚡</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built with the most advanced technologies and frameworks to deliver 
            unparalleled performance and user experience.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + index * 0.05, 
                        duration: 0.5, 
                        ease: "easeOut" 
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-2xl`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech.logo}
                      </motion.div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {tech.name}
                      </h4>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-6"
          >
            🚀
          </motion.div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Build the Future?</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of developers already using our platform to create next-generation games 
            with the power of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Free Trial</span>
              <span>✨</span>
            </motion.button>
            
            <motion.button 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Documentation</span>
              <span>📚</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};