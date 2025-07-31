import React from 'react';
import { Brain, Eye, MessageSquare, BarChart3, Shield, Cpu } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Advanced ML algorithms that learn and adapt to your data, providing intelligent insights and predictions.",
    features: ["Deep Learning", "Neural Networks", "Predictive Analytics"]
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Powerful image and video analysis capabilities for object detection, recognition, and classification.",
    features: ["Object Detection", "Image Recognition", "Video Analysis"]
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Understand and process human language with sentiment analysis, chatbots, and text generation.",
    features: ["Sentiment Analysis", "Text Generation", "Language Translation"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced statistical analysis and visualization.",
    features: ["Statistical Analysis", "Data Visualization", "Business Intelligence"]
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your AI systems with robust security measures and ethical AI implementation.",
    features: ["Model Security", "Privacy Protection", "Ethical AI"]
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Deploy AI models at the edge for real-time processing with minimal latency.",
    features: ["Real-time Processing", "Low Latency", "Offline Capability"]
  }
];

export const AIServices: React.FC = () => {
  return (
    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            AI Solutions
            <span className="text-5xl sm:text-6xl ml-4">⚡</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive AI services designed to accelerate your digital transformation and unlock new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-slate-100 dark:bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-slate-700 dark:text-slate-300 hover:text-white px-4 py-3 rounded-xl font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};