import React from 'react';
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';

const showcaseItems = [
  {
    title: "Smart Recommendation Engine",
    description: "AI-powered recommendation system that increased user engagement by 300%",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: { value: "300%", label: "Engagement Increase" },
    tags: ["Machine Learning", "Personalization", "Real-time"]
  },
  {
    title: "Autonomous Quality Control",
    description: "Computer vision system detecting defects with 99.9% accuracy in manufacturing",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: { value: "99.9%", label: "Detection Accuracy" },
    tags: ["Computer Vision", "Manufacturing", "Quality Control"]
  },
  {
    title: "Intelligent Customer Support",
    description: "NLP-powered chatbot handling 80% of customer queries automatically",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: { value: "80%", label: "Automated Resolution" },
    tags: ["NLP", "Chatbot", "Customer Service"]
  },
  {
    title: "Predictive Analytics Platform",
    description: "Advanced forecasting system reducing operational costs by 40%",
    image: "https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: { value: "40%", label: "Cost Reduction" },
    tags: ["Predictive Analytics", "Forecasting", "Operations"]
  }
];

export const AIShowcase: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            AI Success Stories
            <span className="text-5xl sm:text-6xl ml-4">🎯</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real-world AI implementations that have transformed businesses and delivered exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden hover:bg-white dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{item.metrics.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{item.metrics.label}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};