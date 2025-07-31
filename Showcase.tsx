import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Star, Users, Download } from 'lucide-react';

const showcaseGames = [
  {
    title: "Mystic Realms",
    description: "Fantasy RPG with AI-generated storylines and dynamic NPCs",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: { downloads: "50K+", rating: "4.9", players: "10K+" },
    tags: ["Fantasy", "RPG", "AI Story", "Multiplayer"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Cyber Nexus",
    description: "Sci-fi adventure with procedurally generated levels and AI companions",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: { downloads: "75K+", rating: "4.8", players: "15K+" },
    tags: ["Sci-Fi", "Adventure", "AI Levels", "Cyberpunk"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Shadow Hunters",
    description: "Horror survival game with AI-driven atmospheric audio and intelligent enemies",
    image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: { downloads: "30K+", rating: "4.7", players: "8K+" },
    tags: ["Horror", "Survival", "AI Audio", "Atmospheric"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Quantum Puzzle",
    description: "Mind-bending puzzle game with AI-generated challenges and adaptive difficulty",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: { downloads: "40K+", rating: "4.9", players: "12K+" },
    tags: ["Puzzle", "Strategy", "AI Difficulty", "Mind-bending"],
    gradient: "from-green-500 to-emerald-500"
  }
];

const GameCard = ({ game, index }: { game: typeof showcaseGames[0], index: number }) => (
  <motion.div
    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500"
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.02,
      y: -10,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
    }}
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={game.image} 
        alt={game.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Play Button Overlay */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <Play className="w-8 h-8 text-white ml-1" />
        </div>
      </motion.div>
      
      {/* Stats Overlay */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">{game.stats.rating}</span>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
        {game.title}
      </h3>
      <p className="text-white/70 mb-4 leading-relaxed">
        {game.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {game.tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className="bg-gradient-to-r from-white/10 to-white/5 text-white/80 text-xs px-3 py-1 rounded-full border border-white/20"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Game Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div>
          <div className="text-lg font-bold text-white">{game.stats.downloads}</div>
          <div className="text-xs text-white/60 flex items-center justify-center">
            <Download className="w-3 h-3 mr-1" />
            Downloads
          </div>
        </div>
        <div>
          <div className="text-lg font-bold text-white">{game.stats.rating}</div>
          <div className="text-xs text-white/60 flex items-center justify-center">
            <Star className="w-3 h-3 mr-1" />
            Rating
          </div>
        </div>
        <div>
          <div className="text-lg font-bold text-white">{game.stats.players}</div>
          <div className="text-xs text-white/60 flex items-center justify-center">
            <Users className="w-3 h-3 mr-1" />
            Players
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-3">
        <motion.button 
          className={`flex-1 bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className="w-4 h-4" />
          <span>Play Now</span>
        </motion.button>
        
        <motion.button 
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Github className="w-4 h-4" />
        </motion.button>
        
        <motion.button 
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export const Showcase: React.FC = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Games</span>
            <span className="text-6xl ml-4">🎮</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover amazing games created by our community using AI-powered tools. 
            From indie masterpieces to viral sensations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {showcaseGames.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
        
        {/* Community Stats */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Growing Community</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Thousands of developers are already creating amazing games with our AI platform. 
              Be part of the future of game development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { value: "10,000+", label: "Games Created", icon: "🎮" },
              { value: "50,000+", label: "Active Users", icon: "👥" },
              { value: "1M+", label: "Downloads", icon: "📱" },
              { value: "4.9/5", label: "User Rating", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Creating Today</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};