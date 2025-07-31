import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Play, Download, Settings, Sparkles, Code, Palette, Volume2, Users } from 'lucide-react';

const BuilderTab = ({ icon: Icon, title, description, isActive, onClick }: {
  icon: React.ElementType;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div
    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-400/50' 
        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02, y: -5 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center space-x-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/10'
      }`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
    </div>
  </motion.div>
);

const CodePreview = ({ code }: { code: string }) => (
  <motion.div
    className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 font-mono text-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <span className="text-white/60 text-xs">Generated Code</span>
    </div>
    <pre className="text-green-400 overflow-x-auto">
      <code>{code}</code>
    </pre>
  </motion.div>
);

export const GameBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const tabs = [
    {
      id: 'story',
      icon: Sparkles,
      title: 'Story Generator',
      description: 'Create compelling narratives'
    },
    {
      id: 'code',
      icon: Code,
      title: 'Code Generator',
      description: 'Generate game logic'
    },
    {
      id: 'assets',
      icon: Palette,
      title: 'Asset Creator',
      description: 'Design visual elements'
    },
    {
      id: 'audio',
      icon: Volume2,
      title: 'Audio Generator',
      description: 'Create sound effects'
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Interactive
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Builder</span>
            <span className="text-6xl ml-4">🎨</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the power of AI game development with our interactive builder. 
            Create, customize, and export your games in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Builder Tabs */}
          <motion.div 
            className="lg:col-span-1 space-y-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {tabs.map((tab) => (
              <BuilderTab
                key={tab.id}
                icon={tab.icon}
                title={tab.title}
                description={tab.description}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </motion.div>

          {/* Builder Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">AI Story Generator</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-white/80 mb-2">Game Genre</label>
                        <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
                          <option>Fantasy RPG</option>
                          <option>Sci-Fi Adventure</option>
                          <option>Horror Survival</option>
                          <option>Mystery Detective</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Story Theme</label>
                        <input 
                          type="text" 
                          placeholder="Enter your story theme..."
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50"
                        />
                      </div>
                    </div>
                    
                    {isGenerating ? (
                      <motion.div 
                        className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-2xl p-6"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-6 h-6 text-purple-400" />
                          </motion.div>
                          <span className="text-white font-medium">AI is generating your story...</span>
                        </div>
                        <div className="text-white/70">
                          Creating compelling narrative with dynamic characters and plot twists...
                        </div>
                      </motion.div>
                    ) : (
                      <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Generated Story Preview</h4>
                        <p className="text-white/80 leading-relaxed">
                          "In the mystical realm of Aethermoor, where ancient magic flows through crystalline forests, 
                          a young mage discovers a forbidden artifact that threatens to unravel the very fabric of reality. 
                          As dark forces converge, unlikely allies must unite to prevent an apocalyptic war between dimensions..."
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'code' && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">AI Code Generator</h3>
                    <CodePreview code={`// AI Generated Player Controller
public class PlayerController : MonoBehaviour {
    public float moveSpeed = 5f;
    public float jumpForce = 10f;
    
    private Rigidbody2D rb;
    private bool isGrounded;
    
    void Start() {
        rb = GetComponent<Rigidbody2D>();
    }
    
    void Update() {
        HandleMovement();
        HandleJump();
    }
    
    void HandleMovement() {
        float horizontal = Input.GetAxis("Horizontal");
        rb.velocity = new Vector2(horizontal * moveSpeed, rb.velocity.y);
    }
}`} />
                  </motion.div>
                )}

                {activeTab === 'assets' && (
                  <motion.div
                    key="assets"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">AI Asset Creator</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-4 aspect-square flex items-center justify-center">
                        <span className="text-white/60">Generated Sprite</span>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-4 aspect-square flex items-center justify-center">
                        <span className="text-white/60">Generated Texture</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'audio' && (
                  <motion.div
                    key="audio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">AI Audio Generator</h3>
                    <div className="space-y-4">
                      <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center justify-between">
                        <span className="text-white">Epic Battle Theme</span>
                        <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center justify-between">
                        <span className="text-white">Ambient Forest Sounds</span>
                        <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-white/10">
                <motion.button 
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={handleGenerate}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Generate with AI</span>
                </motion.button>
                
                <motion.button 
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Export</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};